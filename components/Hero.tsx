import Link from "next/link";
import Nav from "./Nav";

export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen bg-center bg-cover"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/6392866/pexels-photo-6392866.jpeg?auto=compress&cs=tinysrgb&h=1200&w=1800')",
      }}
    >
      {/* <div className="absolute inset-0 bg-gradient-to-r from-[#f5f1ea]/55 via-[#f5f1ea]/25 to-transparent pointer-events-none z-0"></div> */}
      <div className="relative z-20">
        <Nav />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 min-h-[calc(100vh-120px)] flex items-center">
        {/* Left Content */}
        <div className="max-w-2xl bg-white/45 backdrop-blur-sm border border-[var(--color-line)] rounded-3xl p-8 sm:p-10 shadow-xl fade-up">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full text-xs uppercase tracking-[0.2em] text-[var(--color-muted)] border border-[var(--color-line)]">
            Clinically gentle • Eco‑friendly
          </div>
          <h1 className="text-4xl sm:text-6xl lg:text-[78px] leading-tight text-[var(--color-ink)] mt-6 mb-6">
            Breathable, soft diapers for calm, confident days.
          </h1>
          <p className="text-xl text-[var(--color-muted)] mb-8">
            Pure Hug combines plant‑based materials, feather‑soft liners, and
            leak‑lock cores to keep baby dry while letting skin breathe.
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-white px-8 py-4 rounded-full text-sm uppercase tracking-wide hover:opacity-90 transition-opacity"
            >
              Shop diapers
              <svg width="18" height="18" viewBox="0 0 21 21" fill="none">
                <path d="M8 4l8 6.5-8 6.5V4z" fill="currentColor" />
              </svg>
            </Link>
            <Link
              href="/learn-more"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-sm uppercase tracking-wide border border-[var(--color-line)] text-[var(--color-ink)] hover:bg-white transition-colors"
            >
              Learn more
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap items-center gap-4 text-xs uppercase tracking-[0.15em] text-[var(--color-muted)]">
            <span>Dermatologist tested</span>
            <span>Fragrance free</span>
            <span>Plant‑based core</span>
          </div>
        </div>
      </div>
    </section>
  );
}
