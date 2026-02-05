"use client";

import { CartProvider as Provider } from "./CartContext";
import CartDrawer from "./CartDrawer";

export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider>
      {children}
      <CartDrawer />
    </Provider>
  );
}
