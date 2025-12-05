"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo"
            width={100}
            height={100}
            unoptimized
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-10">
          <Link
            href="/about"
            className="font-medium text-base uppercase text-black hover:text-[#522260] transition-colors"
          >
            About Us
          </Link>
          <Link
            href="/products"
            className="font-medium text-base uppercase text-black hover:text-[#522260] transition-colors"
          >
            Products
          </Link>
          <Link
            href="/blog"
            className="font-medium text-base uppercase text-black hover:text-[#522260] transition-colors"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="font-medium text-base uppercase text-black hover:text-[#522260] transition-colors"
          >
            Contact us
          </Link>
        </div>

        {/* Right Side Icons & Button */}
        <div className="flex items-center gap-4">
          <button className="hidden md:block p-2 hover:opacity-70 transition-opacity">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>
          <button className="hidden md:block p-2 hover:opacity-70 transition-opacity">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </button>
          <button className="p-2 hover:opacity-70 transition-opacity relative">
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
            <span className="absolute top-0 right-0 bg-[#522260] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
              0
            </span>
          </button>
          <Link
            href="/shop"
            className="hidden md:flex items-center gap-1 bg-[#522260] text-white px-6 py-3 rounded-full font-['Anton'] text-lg uppercase hover:opacity-90 transition-opacity"
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
        <div className="md:hidden mt-4 pb-4 border-t pt-4">
          <Link
            href="/about"
            className="block py-2 font-medium text-base uppercase text-black"
          >
            About Us
          </Link>
          <Link
            href="/products"
            className="block py-2 font-medium text-base uppercase text-black"
          >
            Products
          </Link>
          <Link
            href="/blog"
            className="block py-2 font-medium text-base uppercase text-black"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="block py-2 font-medium text-base uppercase text-black"
          >
            Contact us
          </Link>
          <Link
            href="/shop"
            className="mt-4 inline-flex items-center gap-1 bg-[#522260] text-white px-6 py-3 rounded-full font-['Anton'] text-lg uppercase"
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
