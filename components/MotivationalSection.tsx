import Link from "next/link";

export default function MotivationalSection() {
  return (
    <section className="relative w-full py-20 bg-white">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="fade-up">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)] mb-4">
              Why moms choose Pure Hug
            </p>
            <h2 className="text-4xl sm:text-6xl lg:text-[64px] leading-tight text-[var(--color-ink)] mb-6">
              Soft on skin, strong on leaks, and made with care.
            </h2>
            <p className="text-lg text-[var(--color-muted)] mb-8">
              Our diapers are crafted with plant‑based fibers and a breathable
              core that keeps baby comfortable day and night.
            </p>
            <ul className="space-y-4 text-[var(--color-ink)]">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[var(--color-accent)]"></span>
                Dermatologist tested, hypoallergenic, fragrance‑free.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[var(--color-accent)]"></span>
                12‑hour absorbent core with leak‑lock channels.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-[var(--color-accent)]"></span>
                Responsibly sourced, biodegradable outer layers.
              </li>
            </ul>
            <div className="mt-8">
              <Link
                href="/learn-more"
                className="inline-flex items-center gap-2 text-sm uppercase tracking-wide text-[var(--color-primary)] hover:text-[var(--color-ink)] transition-colors"
              >
                Learn more
                <svg width="18" height="18" viewBox="0 0 21 21" fill="none">
                  <path d="M8 4l8 6.5-8 6.5V4z" fill="currentColor" />
                </svg>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {[
              { label: "Breathable", value: "98%" },
              { label: "Leak protection", value: "12h" },
              { label: "Plant-based", value: "70%" },
              { label: "Softness", value: "A+" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="relative bg-[var(--color-sand)] border border-[var(--color-line)] rounded-3xl p-7 hover-lift overflow-hidden"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-[var(--color-accent)]"></div>
                <p className="text-3xl sm:text-4xl font-semibold text-[var(--color-ink)]">
                  {stat.value}
                </p>
                <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-muted)] mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
