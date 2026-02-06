import { prisma } from "@/lib/prisma";

async function main() {
  await prisma.product.createMany({
    data: [
      {
        slug: "newborn-comfort",
        name: "Newborn Comfort",
        price: 4800,
        tag: "0-3 months",
        description:
          "Ultra‑soft liners, gentle leg cuffs, and breathable layers for the first months.",
        features: [
          "Feather‑soft liner",
          "Wetness indicator",
          "Leak‑lock core",
        ],
      },
      {
        slug: "sensitive-skin",
        name: "Sensitive Skin",
        price: 5500,
        tag: "Most loved",
        description:
          "Hypoallergenic materials and fragrance‑free protection for delicate skin.",
        features: ["Dermatologist tested", "Fragrance‑free", "Plant‑based core"],
      },
      {
        slug: "night-dry",
        name: "Night Dry",
        price: 6200,
        tag: "Overnight",
        description:
          "Extra‑absorbent core designed for up to 12 hours of dry comfort.",
        features: ["12‑hour absorbency", "Leak‑lock channels", "Soft waistband"],
      },
    ],
    skipDuplicates: true,
  });

  const products = await prisma.product.findMany();

  for (const product of products) {
    await prisma.productImage.createMany({
      data: [
        {
          productId: product.id,
          url: "/diaper1.png",
          alt: product.name,
          sortOrder: 1,
        },
        {
          productId: product.id,
          url: "/diaper2.png",
          alt: product.name,
          sortOrder: 2,
        },
      ],
      skipDuplicates: true,
    });
  }

  await prisma.blogPost.createMany({
    data: [
      {
        slug: "quiet-nights",
        title: "Quiet Nights, Happy Mornings",
        excerpt:
          "Night leaks can disrupt sleep for everyone. Here’s how breathable layers and a strong core help babies rest longer.",
        body:
          "Gentle nighttime routines, a cozy fit, and a breathable diaper can make bedtime smoother. Look for soft waistbands, secure leg cuffs, and a core that spreads moisture evenly.",
        published: true,
        coverUrl: "/baby1.jpg",
      },
      {
        slug: "sensitive-skin",
        title: "Caring for Sensitive Skin",
        excerpt:
          "A simple guide for moms navigating redness and irritation, plus what to look for in a diaper.",
        body:
          "If skin feels irritated, reduce friction and keep the area clean and dry. Choose hypoallergenic materials and avoid added fragrances or dyes.",
        published: true,
        coverUrl: "/baby2.jpg",
      },
      {
        slug: "eco-comfort",
        title: "Eco-Friendly Without Compromise",
        excerpt:
          "Sustainable materials can still deliver premium softness and leak protection.",
        body:
          "Plant-based fibers, responsibly sourced pulp, and thoughtful construction bring comfort while reducing waste.",
        published: true,
        coverUrl: "/baby3.jpg",
      },
    ],
    skipDuplicates: true,
  });

  await prisma.fAQ.createMany({
    data: [
      {
        question: "Are Pure Hug diapers safe for newborns?",
        answer:
          "Yes. Our newborn line uses ultra‑soft liners and is dermatologist tested.",
        order: 1,
      },
      {
        question: "Do you use fragrances or dyes?",
        answer:
          "No. We avoid added fragrances and unnecessary dyes to protect sensitive skin.",
        order: 2,
      },
      {
        question: "How long can one diaper last?",
        answer:
          "Our core is designed for up to 12 hours, though we recommend regular changes.",
        order: 3,
      },
      {
        question: "Are your diapers eco‑friendly?",
        answer:
          "We use plant‑based materials and responsibly sourced pulp wherever possible.",
        order: 4,
      },
    ],
    skipDuplicates: true,
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
