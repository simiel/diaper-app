const features = [
  {
    title: "Breathable layers",
    description: "Airflow channels help keep skin cool and comfortable.",
  },
  {
    title: "Leak‑lock core",
    description: "Absorbs fast and distributes evenly for up to 12 hours.",
  },
  {
    title: "Plant‑based softness",
    description: "Made with responsibly sourced, gentle materials.",
  },
  {
    title: "Smart fit",
    description: "Stretchy sides move with baby without sagging.",
  },
  {
    title: "Wetness indicator",
    description: "Color‑change line makes changes simple and quick.",
  },
  {
    title: "Dermatologist tested",
    description: "Hypoallergenic and fragrance‑free for sensitive skin.",
  },
];

export default function FeaturesSection() {
  return (
    <section className="w-full py-20 bg-white border-y border-[var(--color-line)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-12">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)] mb-4">
              What makes Pure Hug different
            </p>
            <h2 className="text-4xl sm:text-6xl lg:text-[64px] text-[var(--color-ink)]">
              Thoughtful features, zero compromises.
            </h2>
          </div>
          <p className="text-lg text-[var(--color-muted)] max-w-xl">
            Designed for real life with babies: soft, secure, and easy to use,
            from newborn to toddler.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="p-6 rounded-2xl border border-[var(--color-line)] bg-[var(--color-sand)] hover-lift"
            >
              <div className="h-10 w-10 rounded-full bg-white border border-[var(--color-line)] flex items-center justify-center mb-4">
                <span className="h-2 w-2 rounded-full bg-[var(--color-accent)]"></span>
              </div>
              <h3 className="text-xl text-[var(--color-ink)] mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-[var(--color-muted)]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
