"use client";

import { useState } from "react";
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { useCart } from "@/components/cart/CartContext";

type PaymentMethod = "momo";

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCart();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<string | null>(null);
  const [method, setMethod] = useState<PaymentMethod>("momo");

  const handleCheckout = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const form = new FormData(e.currentTarget);
      const payload = {
        name: form.get("name"),
        email: form.get("email"),
        phone: form.get("phone"),
        address: form.get("address"),
        city: form.get("city"),
        region: form.get("region"),
        items,
        amount: subtotal / 100,
        paymentMethod: method,
      };

    try {
      const res = await fetch("/api/momo/request-to-pay", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data?.error || "Payment request failed");
      }

      setStatus(
        "Payment request sent. Please approve on your phone to complete checkout."
      );
      clearCart();
    } catch (error) {
      setStatus((error as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-[var(--background)]">
      <Header />
      <div className="relative z-20">
        <Nav />
      </div>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12">
          <form
            className="bg-white border border-[var(--color-line)] rounded-3xl p-8 space-y-5"
            onSubmit={handleCheckout}
          >
            <h1 className="text-3xl sm:text-5xl text-[var(--color-ink)]">
              Checkout
            </h1>
            <p className="text-[var(--color-muted)]">
              Enter shipping details and complete payment.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                name="name"
                placeholder="Full name"
                required
                className="w-full bg-[var(--color-sand)] text-[var(--color-ink)] px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              />
              <input
                name="email"
                type="email"
                placeholder="Email"
                required
                className="w-full bg-[var(--color-sand)] text-[var(--color-ink)] px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              />
            </div>
            <input
              name="phone"
              placeholder="Mobile number (MTN)"
              required
              className="w-full bg-[var(--color-sand)] text-[var(--color-ink)] px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            />
            <input
              name="address"
              placeholder="Address"
              required
              className="w-full bg-[var(--color-sand)] text-[var(--color-ink)] px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                name="city"
                placeholder="City"
                required
                className="w-full bg-[var(--color-sand)] text-[var(--color-ink)] px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              />
              <input
                name="region"
                placeholder="Region"
                required
                className="w-full bg-[var(--color-sand)] text-[var(--color-ink)] px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              />
            </div>

            <div className="border border-[var(--color-line)] rounded-2xl p-4">
              <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)] mb-3">
                Payment method
              </p>
              <label className="flex items-center gap-3">
                <input
                  type="radio"
                  name="paymentMethod"
                  value="momo"
                  checked={method === "momo"}
                  onChange={() => setMethod("momo")}
                />
                <span className="text-[var(--color-ink)]">
                  MTN Mobile Money
                </span>
              </label>
            </div>

            {status && (
              <div className="text-sm text-[var(--color-muted)]">{status}</div>
            )}

            <button
              type="submit"
              disabled={loading || items.length === 0}
              className="inline-flex items-center justify-center gap-2 bg-[var(--color-primary)] text-white px-8 py-4 rounded-full text-sm uppercase tracking-wide hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {loading ? "Processing..." : "Pay with Mobile Money"}
            </button>
          </form>

          <div className="bg-white border border-[var(--color-line)] rounded-3xl p-8 h-fit">
            <h2 className="text-2xl text-[var(--color-ink)] mb-4">
              Order summary
            </h2>
            <div className="flex items-center justify-between text-[var(--color-muted)] mb-3">
              <span>Subtotal</span>
              <span>GHS {(subtotal / 100).toFixed(2)}</span>
            </div>
            <div className="flex items-center justify-between text-[var(--color-muted)] mb-3">
              <span>Delivery</span>
              <span>Calculated at checkout</span>
            </div>
            <div className="flex items-center justify-between text-lg text-[var(--color-ink)] font-semibold">
              <span>Total</span>
              <span>GHS {(subtotal / 100).toFixed(2)}</span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
