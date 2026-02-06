import ProductCard from "./ProductCard";
import { products } from "@/data/products";

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
          {products.slice(0, 3).map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              name={product.name}
              price={`GHS ${(product.price / 100).toFixed(2)}`}
              image={product.image}
              imageAlt={product.name}
              tag={product.tag}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
