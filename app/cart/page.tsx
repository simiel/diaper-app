"use client";

import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Image from "next/image";
import { products } from "@/data/products";
import { useCart } from "@/components/cart/CartContext";

export default function CartPage() {
  const { items, updateQuantity, removeItem, subtotal } = useCart();

  const cartProducts = items.map((item) => {
    const product = products.find((p) => p.id === item.productId);
    return { ...item, product };
  });

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <Header />
      <div className="relative z-20">
        <Nav />
      </div>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl sm:text-6xl lg:text-[64px] text-[var(--color-ink)] mb-8">
            Your cart
          </h1>

          {cartProducts.length === 0 ? (
            <p className="text-[var(--color-muted)]">
              Your cart is empty.
            </p>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] gap-12">
              <div className="space-y-6">
                {cartProducts.map((item) => (
                  <div
                    key={item.productId}
                    className="flex items-center gap-4 border border-[var(--color-line)] rounded-3xl p-6 bg-white"
                  >
                    <div className="relative h-20 w-20 bg-[var(--color-sand)] rounded-2xl">
                      {item.product && (
                        <Image
                          src={item.product.image}
                          alt={item.product.name}
                          fill
                          className="object-contain p-2"
                          unoptimized
                        />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-lg text-[var(--color-ink)]">
                        {item.product?.name}
                      </p>
                      <p className="text-sm text-[var(--color-muted)]">
                        GHS {(item.product?.price ? item.product.price / 100 : 0).toFixed(2)}
                      </p>
                      <div className="mt-3 flex items-center gap-3">
                        <button
                          className="h-8 w-8 rounded-full border border-[var(--color-line)]"
                          onClick={() =>
                            updateQuantity(item.productId, item.quantity - 1)
                          }
                        >
                          −
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          className="h-8 w-8 rounded-full border border-[var(--color-line)]"
                          onClick={() =>
                            updateQuantity(item.productId, item.quantity + 1)
                          }
                        >
                          +
                        </button>
                        <button
                          className="ml-auto text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]"
                          onClick={() => removeItem(item.productId)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="bg-white border border-[var(--color-line)] rounded-3xl p-8 h-fit">
                <h2 className="text-2xl text-[var(--color-ink)] mb-4">
                  Order summary
                </h2>
                <div className="flex items-center justify-between text-[var(--color-muted)] mb-3">
                  <span>Subtotal</span>
                  <span>GHS {(subtotal / 100).toFixed(2)}</span>
                </div>
                <div className="flex items-center justify-between text-[var(--color-muted)] mb-6">
                  <span>Delivery</span>
                  <span>Calculated at checkout</span>
                </div>
                <a
                  href="/checkout"
                  className="inline-flex items-center justify-center gap-2 bg-[var(--color-primary)] text-white px-6 py-4 rounded-full text-sm uppercase tracking-wide hover:opacity-90 transition-opacity w-full"
                >
                  Proceed to checkout
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
