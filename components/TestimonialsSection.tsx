const testimonials = [
  {
    id: 1,
    quote:
      "We switched for the softness and stayed for the leak protection. Nights are finally calm again.",
    author: "Ama K.",
    image:
      "https://images.pexels.com/photos/33504881/pexels-photo-33504881.jpeg?auto=compress&cs=tinysrgb&h=750&w=1000",
  },
  {
    id: 2,
    quote:
      "No rashes and no fuss. The wetness indicator is a game changer for us.",
    author: "Priscilla W.",
    image:
      "https://images.pexels.com/photos/33704091/pexels-photo-33704091.jpeg?auto=compress&cs=tinysrgb&h=750&w=1000",
  },
  {
    id: 3,
    quote:
      "I love the eco‑friendly materials and my baby loves the fit. Win‑win.",
    author: "Sarah J.",
    image:
      "https://images.pexels.com/photos/33890087/pexels-photo-33890087.jpeg?auto=compress&cs=tinysrgb&h=750&w=1000",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="relative w-full py-20 bg-[var(--background)]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)] mb-4">
            Reviews
          </p>
          <h2 className="text-4xl sm:text-6xl lg:text-[64px] text-[var(--color-ink)]">
            Loved by moms, trusted by babies
          </h2>
        </div>

        <div className="review-rail px-2 sm:px-4">
          <div className="review-rail-track flex-nowrap">
            {[...testimonials, ...testimonials].map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="w-[300px] sm:w-[360px] bg-white border border-[var(--color-line)] rounded-3xl p-6 shadow-lg hover-lift"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="h-14 w-14 rounded-full overflow-hidden border border-[var(--color-line)]">
                    <img
                      src={item.image}
                      alt={item.author}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-muted)]">
                      Verified mom
                    </p>
                    <p className="text-base font-semibold text-[var(--color-ink)]">
                      {item.author}
                    </p>
                  </div>
                </div>
                <p className="text-[var(--color-ink)] leading-relaxed">
                  “{item.quote}”
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
