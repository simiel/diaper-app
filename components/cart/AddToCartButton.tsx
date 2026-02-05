"use client";

import { useCart } from "./CartContext";

export default function AddToCartButton({
  productId,
  quantity = 1,
}: {
  productId: string;
  quantity?: number;
}) {
  const { addItem } = useCart();

  return (
    <button
      className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-white px-8 py-4 rounded-full text-sm uppercase tracking-wide hover:opacity-90 transition-opacity"
      onClick={() => addItem(productId, quantity)}
    >
      Add to cart
    </button>
  );
}
