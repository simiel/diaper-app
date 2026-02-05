import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Image from "next/image";
import { getProductById, products } from "@/data/products";
import AddToCartButton from "@/components/cart/AddToCartButton";
import { notFound } from "next/navigation";

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const product = getProductById(params.id);
  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <Header />
      <div className="relative z-20">
        <Nav />
      </div>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[420px] bg-white border border-[var(--color-line)] rounded-3xl">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain p-8"
              unoptimized
            />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)] mb-4">
              {product.tag}
            </p>
            <h1 className="text-4xl sm:text-6xl lg:text-[64px] text-[var(--color-ink)] mb-4">
              {product.name}
            </h1>
            <p className="text-lg text-[var(--color-muted)] mb-6">
              {product.description}
            </p>
            <p className="text-2xl text-[var(--color-primary)] font-semibold mb-8">
              GHS {product.price.toFixed(2)}
            </p>
            <div className="flex items-center gap-4">
              <AddToCartButton productId={product.id} />
              <a
                href="/checkout"
                className="inline-flex items-center gap-2 border border-[var(--color-line)] text-[var(--color-ink)] px-6 py-3 rounded-full text-sm uppercase tracking-wide hover:bg-[var(--color-sand)] transition-colors"
              >
                Buy now
              </a>
            </div>
            <ul className="mt-8 space-y-2 text-[var(--color-ink)]">
              {product.features.map((feature) => (
                <li key={feature} className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]"></span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-16 border-t border-[var(--color-line)] bg-[var(--color-sand)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-5xl text-[var(--color-ink)] mb-8">
            You may also like
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products
              .filter((p) => p.id !== product.id)
              .slice(0, 3)
              .map((item) => (
                <a
                  key={item.id}
                  href={`/products/${item.id}`}
                  className="bg-white border border-[var(--color-line)] rounded-3xl p-6 hover-lift"
                >
                  <div className="relative h-[160px]">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>
                  <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-muted)] mt-4">
                    {item.tag}
                  </p>
                  <p className="text-xl text-[var(--color-ink)] mt-2">
                    {item.name}
                  </p>
                </a>
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
