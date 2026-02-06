import { NextResponse } from "next/server";
import crypto from "crypto";
import { prisma } from "@/lib/prisma";

type RequestBody = {
  amount: number;
  phone: string;
  paymentMethod: "momo";
  name?: string;
  email?: string;
  address?: string;
  city?: string;
  region?: string;
  items?: { productId: string; quantity: number }[];
};

const getAccessToken = async () => {
  const user = process.env.MOMO_API_USER;
  const key = process.env.MOMO_API_KEY;
  const subscriptionKey = process.env.MOMO_COLLECTION_SUBSCRIPTION_KEY;

  if (!user || !key || !subscriptionKey) {
    throw new Error("Missing MTN MoMo credentials");
  }

  const auth = Buffer.from(`${user}:${key}`).toString("base64");
  const res = await fetch(
    "https://sandbox.momodeveloper.mtn.com/collection/token/",
    {
      method: "POST",
      headers: {
        Authorization: `Basic ${auth}`,
        "Ocp-Apim-Subscription-Key": subscriptionKey,
      },
    },
  );

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Token request failed: ${text}`);
  }

  const data = await res.json();
  return data.access_token as string;
};

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as RequestBody;
    const subscriptionKey = process.env.MOMO_COLLECTION_SUBSCRIPTION_KEY;
    const targetEnv = process.env.MOMO_TARGET_ENV || "sandbox";
    const callbackUrl = process.env.MOMO_CALLBACK_URL;

    if (!subscriptionKey) {
      throw new Error("Missing MTN MoMo subscription key");
    }

    const referenceId = crypto.randomUUID();
    const token = await getAccessToken();

    const response = await fetch(
      "https://sandbox.momodeveloper.mtn.com/collection/v1_0/requesttopay",
      {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          "X-Reference-Id": referenceId,
          "X-Target-Environment": targetEnv,
          "Ocp-Apim-Subscription-Key": subscriptionKey,
          ...(callbackUrl ? { "X-Callback-Url": callbackUrl } : {}),
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: body.amount.toFixed(2),
          currency: "936",
          externalId: referenceId,
          payer: {
            partyIdType: "MSISDN",
            partyId: body.phone,
          },
          payerMessage: "Pure Hug order",
          payeeNote: "Pure Hug checkout",
        }),
      },
    );

    if (!response.ok) {
      const text = await response.text();
      throw new Error(text);
    }

    try {
      await prisma.order.create({
        data: {
          referenceId,
          status: "PENDING",
          amount: Math.round(body.amount * 100),
          email: body.email,
          phone: body.phone,
          name: body.name,
          address: body.address,
          city: body.city,
          region: body.region,
          items: {
            create:
              body.items?.map((item) => ({
                productId: item.productId,
                name: item.productId,
                quantity: item.quantity,
                price: 0,
              })) || [],
          },
          payment: {
            create: {
              provider: "MTN_MOMO",
              referenceId,
              status: "PENDING",
            },
          },
        },
      });
    } catch {
      // best-effort order creation
    }

    return NextResponse.json({ referenceId });
  } catch (error) {
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 500 },
    );
  }
}
