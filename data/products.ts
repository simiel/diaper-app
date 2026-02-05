export type Product = {
  id: string;
  name: string;
  price: number;
  image: string;
  tag?: string;
  description: string;
  features: string[];
};

export const products: Product[] = [
  {
    id: "newborn-comfort",
    name: "Newborn Comfort",
    price: 48,
    image: "/diaper1.png",
    tag: "0-3 months",
    description:
      "Ultra‑soft liners, gentle leg cuffs, and breathable layers for the first months.",
    features: ["Feather‑soft liner", "Wetness indicator", "Leak‑lock core"],
  },
  {
    id: "sensitive-skin",
    name: "Sensitive Skin",
    price: 55,
    image: "/diaper2.png",
    tag: "Most loved",
    description:
      "Hypoallergenic materials and fragrance‑free protection for delicate skin.",
    features: ["Dermatologist tested", "Fragrance‑free", "Plant‑based core"],
  },
  {
    id: "night-dry",
    name: "Night Dry",
    price: 62,
    image: "/diaper3.png",
    tag: "Overnight",
    description:
      "Extra‑absorbent core designed for up to 12 hours of dry comfort.",
    features: ["12‑hour absorbency", "Leak‑lock channels", "Soft waistband"],
  },
  {
    id: "active-days",
    name: "Active Days",
    price: 58,
    image: "/diaper2.png",
    tag: "Best for play",
    description:
      "Stretchy sides and secure fit for crawling, cruising, and playtime.",
    features: ["Flex‑fit sides", "Breathable layers", "Quick‑dry core"],
  },
  {
    id: "eco-core",
    name: "Eco Core",
    price: 60,
    image: "/diaper1.png",
    tag: "Eco pick",
    description:
      "Responsibly sourced materials with premium softness and protection.",
    features: ["Plant‑based fibers", "Biodegradable layers", "Soft on skin"],
  },
  {
    id: "travel-pack",
    name: "Travel Pack",
    price: 32,
    image: "/diaper3.png",
    tag: "On the go",
    description:
      "Compact pack for quick changes and travel days.",
    features: ["Compact", "Lightweight", "Trusted protection"],
  },
];

export const getProductById = (id: string) =>
  products.find((product) => product.id === id);
