import { prisma } from "@/lib/prisma";
import { products as fallbackProducts } from "@/data/products";

export const getAllProducts = async () => {
  try {
    const dbProducts = await prisma.product.findMany({
      include: { images: true },
      orderBy: { createdAt: "desc" },
    });
    if (dbProducts.length === 0) {
      return fallbackProducts;
    }
    return dbProducts.map((product) => ({
      id: product.slug,
      name: product.name,
      price: product.price,
      image: product.images[0]?.url || "/diaper1.png",
      tag: product.tag || undefined,
      description: product.description || "",
      features: product.features,
    }));
  } catch {
    return fallbackProducts;
  }
};

export const getProductBySlug = async (slug: string) => {
  try {
    const product = await prisma.product.findUnique({
      where: { slug },
      include: { images: true },
    });
    if (!product) return null;
    return {
      id: product.slug,
      name: product.name,
      price: product.price,
      image: product.images[0]?.url || "/diaper1.png",
      tag: product.tag || undefined,
      description: product.description || "",
      features: product.features,
      images: product.images.map((img) => ({ url: img.url, alt: img.alt })),
    };
  } catch {
    return null;
  }
};
