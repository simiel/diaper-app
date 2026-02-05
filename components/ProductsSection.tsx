import ProductCard from "./ProductCard";

const products = [
  {
    id: "1",
    name: "Newborn Comfort",
    price: "GHS 48.00",
    image: "/diaper1.png",
    imageAlt: "Newborn Comfort Diapers",
    tag: "0-3 months",
  },
  {
    id: "2",
    name: "Sensitive Skin",
    price: "GHS 55.00",
    image: "/diaper2.png",
    imageAlt: "Sensitive Skin Diapers",
    tag: "Most loved",
  },
  {
    id: "3",
    name: "Night Dry",
    price: "GHS 62.00",
    image: "/diaper3.png",
    imageAlt: "Night Dry Diapers",
    tag: "Overnight",
  },
];

export default function ProductsSection() {
  return (
    <section className="relative w-full py-20 bg-[var(--background)]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)] mb-4">
            Shop essentials
          </p>
          <h2 className="text-4xl sm:text-6xl lg:text-[64px] text-[var(--color-ink)]">
            Clean diapers, thoughtfully made
          </h2>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
