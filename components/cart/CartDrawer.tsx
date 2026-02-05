"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "./CartContext";
import { products } from "@/data/products";

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, subtotal } =
    useCart();

  const cartProducts = items.map((item) => {
    const product = products.find((p) => p.id === item.productId);
    return { ...item, product };
  });

  return (
    <div
      className={`fixed inset-0 z-50 ${
        isOpen ? "pointer-events-auto" : "pointer-events-none"
      }`}
      aria-hidden={!isOpen}
    >
      <div
        className={`absolute inset-0 bg-black/40 transition-opacity ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={closeCart}
      />
      <aside
        className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl transition-transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-[var(--color-line)]">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
              Your cart
            </p>
            <h3 className="text-xl text-[var(--color-ink)]">
              Premium essentials
            </h3>
          </div>
          <button
            onClick={closeCart}
            className="h-10 w-10 rounded-full border border-[var(--color-line)] flex items-center justify-center"
          >
            ✕
          </button>
        </div>

        <div className="p-6 space-y-6 overflow-y-auto h-[calc(100%-220px)]">
          {cartProducts.length === 0 && (
            <p className="text-[var(--color-muted)]">
              Your cart is empty. Add some comfort.
            </p>
          )}
          {cartProducts.map((item) => (
            <div
              key={item.productId}
              className="flex items-center gap-4 border border-[var(--color-line)] rounded-2xl p-4"
            >
              <div className="relative h-16 w-16 bg-[var(--color-sand)] rounded-xl">
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
                <p className="text-sm text-[var(--color-ink)]">
                  {item.product?.name}
                </p>
                <p className="text-xs text-[var(--color-muted)]">
                  GHS {item.product?.price.toFixed(2)}
                </p>
                <div className="mt-2 flex items-center gap-2">
                  <button
                    className="h-7 w-7 rounded-full border border-[var(--color-line)]"
                    onClick={() =>
                      updateQuantity(item.productId, item.quantity - 1)
                    }
                  >
                    −
                  </button>
                  <span className="text-sm">{item.quantity}</span>
                  <button
                    className="h-7 w-7 rounded-full border border-[var(--color-line)]"
                    onClick={() =>
                      updateQuantity(item.productId, item.quantity + 1)
                    }
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                className="text-xs uppercase tracking-wide text-[var(--color-muted)]"
                onClick={() => removeItem(item.productId)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>

        <div className="p-6 border-t border-[var(--color-line)] space-y-4">
          <div className="flex items-center justify-between">
            <p className="text-sm text-[var(--color-muted)]">Subtotal</p>
            <p className="text-lg text-[var(--color-ink)]">
              GHS {subtotal.toFixed(2)}
            </p>
          </div>
          <Link
            href="/checkout"
            className="w-full inline-flex items-center justify-center gap-2 bg-[var(--color-primary)] text-white px-6 py-4 rounded-full text-sm uppercase tracking-wide hover:opacity-90 transition-opacity"
            onClick={closeCart}
          >
            Checkout
          </Link>
          <Link
            href="/cart"
            className="w-full inline-flex items-center justify-center gap-2 border border-[var(--color-line)] text-[var(--color-ink)] px-6 py-3 rounded-full text-sm uppercase tracking-wide hover:bg-[var(--color-sand)] transition-colors"
            onClick={closeCart}
          >
            View cart
          </Link>
        </div>
      </aside>
    </div>
  );
}
