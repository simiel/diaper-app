"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/components/cart/CartContext";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { openCart, totalItems } = useCart();

  return (
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={110}
            height={48}
            unoptimized
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm tracking-wide">
          <Link
            href="/about"
            className="font-semibold uppercase text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors"
          >
            About Us
          </Link>
          <Link
            href="/products"
            className="font-semibold uppercase text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors"
          >
            Products
          </Link>
          <Link
            href="/blog"
            className="font-semibold uppercase text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="font-semibold uppercase text-[var(--color-ink)] hover:text-[var(--color-primary)] transition-colors"
          >
            Contact us
          </Link>
        </div>

        {/* Right Side Icons & Button */}
        <div className="flex items-center gap-4">
          <button
            className="p-2 hover:opacity-70 transition-opacity relative"
            onClick={openCart}
            aria-label="Open cart"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M9 2v2M15 2v2M21 10v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8M3 10h18M7 14h.01M11 14h.01M15 14h.01M7 18h.01M11 18h.01M15 18h.01" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 bg-[var(--color-primary)] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
          <Link
            href="/products"
            className="hidden md:flex items-center gap-2 bg-[var(--color-primary)] text-white px-6 py-3 rounded-full text-sm uppercase tracking-wide hover:opacity-90 transition-opacity"
          >
            Shop now
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
              <path d="M8 4l8 6.5-8 6.5V4z" fill="currentColor" />
            </svg>
          </Link>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              {isMenuOpen ? (
                <path d="M18 6L6 18M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden mt-4 pb-4 border-t border-[var(--color-line)] pt-4">
          <Link
            href="/about"
            className="block py-2 font-semibold text-sm uppercase text-[var(--color-ink)]"
          >
            About Us
          </Link>
          <Link
            href="/products"
            className="block py-2 font-semibold text-sm uppercase text-[var(--color-ink)]"
          >
            Products
          </Link>
          <Link
            href="/blog"
            className="block py-2 font-semibold text-sm uppercase text-[var(--color-ink)]"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="block py-2 font-semibold text-sm uppercase text-[var(--color-ink)]"
          >
            Contact us
          </Link>
          <Link
            href="/products"
            className="mt-4 inline-flex items-center gap-2 bg-[var(--color-primary)] text-white px-6 py-3 rounded-full text-sm uppercase tracking-wide"
          >
            Shop now
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
              <path d="M8 4l8 6.5-8 6.5V4z" fill="currentColor" />
            </svg>
          </Link>
        </div>
      )}
    </nav>
  );
}
