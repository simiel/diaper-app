import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[var(--color-primary)] text-white">
      <div className="border-b border-white/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Fast delivery",
              body: "Accra same‑week delivery on most orders.",
            },
            {
              title: "Easy returns",
              body: "30‑day satisfaction guarantee.",
            },
            {
              title: "Care support",
              body: "Real moms answering real questions.",
            },
          ].map((item) => (
            <div key={item.title} className="flex items-start gap-4">
              <span className="mt-1 h-2 w-2 rounded-full bg-[var(--color-accent)]"></span>
              <div>
                <p className="font-semibold text-lg">{item.title}</p>
                <p className="text-sm text-white/80">{item.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 grid grid-cols-1 lg:grid-cols-[1.3fr_1fr_1fr_1fr] gap-10">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-white/70 mb-4">
            Pure Hug
          </p>
          <p className="text-2xl font-semibold mb-4">
            Premium, breathable diapers for Ghanaian families.
          </p>
          <p className="text-sm text-white/80 max-w-sm">
            Soft on baby’s skin, strong on leaks, and made with planet‑kind
            materials.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4 uppercase">Shop</h3>
          <ul className="space-y-2 text-sm text-white/85">
            <li>
              <Link href="/shop" className="hover:text-white transition-colors">
                Shop All
              </Link>
            </li>
            <li>
              <Link href="/size-guide" className="hover:text-white transition-colors">
                Size Guide
              </Link>
            </li>
            <li>
              <Link href="/bundles" className="hover:text-white transition-colors">
                Value Bundles
              </Link>
            </li>
            <li>
              <Link href="/newborn" className="hover:text-white transition-colors">
                Newborn Picks
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4 uppercase">Support</h3>
          <ul className="space-y-2 text-sm text-white/85">
            <li>
              <Link href="/faq" className="hover:text-white transition-colors">
                FAQs
              </Link>
            </li>
            <li>
              <Link href="/returns" className="hover:text-white transition-colors">
                Returns
              </Link>
            </li>
            <li>
              <Link href="/shipping" className="hover:text-white transition-colors">
                Shipping
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-lg mb-4 uppercase">Contact</h3>
          <p className="text-sm text-white/80 mb-3">
            Pure Hug, 123 Akuafo Road, Osu, Accra, Ghana
          </p>
          <a
            href="mailto:info@purehug.com"
            className="text-sm text-white/85 hover:text-white transition-colors"
          >
            info@purehug.com
          </a>
          <div className="flex gap-4 mt-6">
            {["Facebook", "Instagram", "Pinterest", "YouTube"].map((label) => (
              <a
                key={label}
                href="#"
                className="text-xs uppercase tracking-[0.2em] text-white/70 hover:text-white transition-colors"
                aria-label={label}
              >
                {label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/70">© 2026. Pure Hug Ghana Limited</p>
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/60">
            <span>Secure checkout</span>
            <span className="h-1 w-1 rounded-full bg-white/40"></span>
            <span>Visa • Mastercard • Mobile Money</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
