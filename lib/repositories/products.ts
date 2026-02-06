import { products as fallbackProducts } from "@/data/products";
import { prisma } from "@/lib/prisma";

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
    const fallback = fallbackProducts.find((item) => item.id === slug);
    if (!fallback) return null;
    return {
      id: fallback.id,
      name: fallback.name,
      price: fallback.price,
      image: fallback.image,
      tag: fallback.tag,
      description: fallback.description,
      features: fallback.features,
      images: [{ url: fallback.image, alt: fallback.name }],
    };
  }
};
