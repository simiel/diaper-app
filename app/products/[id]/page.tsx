import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Image from "next/image";
import { getAllProducts, getProductBySlug } from "@/lib/repositories/products";
import AddToCartButton from "@/components/cart/AddToCartButton";
import { notFound } from "next/navigation";

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const product = await getProductBySlug(id);
  if (!product) {
    notFound();
  }
  const allProducts = await getAllProducts();

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <Header />
      <div className="relative z-20">
        <Nav />
      </div>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start">
          <div className="space-y-6">
            <div className="relative h-[420px] bg-white border border-[var(--color-line)] rounded-3xl">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-8"
                unoptimized
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[product.image, product.image, product.image, product.image].map(
                (img, index) => (
                  <div
                    key={`${product.id}-thumb-${index}`}
                    className="relative h-32 bg-white border border-[var(--color-line)] rounded-2xl"
                  >
                    <Image
                      src={img}
                      alt={product.name}
                      fill
                      className="object-contain p-4"
                      unoptimized
                    />
                  </div>
                )
              )}
            </div>
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
              GHS {(product.price / 100).toFixed(2)}
            </p>
            <div className="flex items-center gap-4 mb-8">
              <AddToCartButton productId={product.id} />
              <a
                href="/checkout"
                className="inline-flex items-center gap-2 border border-[var(--color-line)] text-[var(--color-ink)] px-6 py-3 rounded-full text-sm uppercase tracking-wide hover:bg-[var(--color-sand)] transition-colors"
              >
                Buy now
              </a>
            </div>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {[
                { label: "Breathable", value: "98%" },
                { label: "Leak protection", value: "12h" },
                { label: "Softness", value: "A+" },
                { label: "Plant‑based", value: "70%" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[var(--color-sand)] border border-[var(--color-line)] rounded-2xl p-4"
                >
                  <p className="text-xl text-[var(--color-ink)] font-semibold">
                    {stat.value}
                  </p>
                  <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
            <ul className="space-y-2 text-[var(--color-ink)]">
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
            {allProducts
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
