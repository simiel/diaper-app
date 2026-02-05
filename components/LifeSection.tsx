import Link from "next/link";

const images = [
  {
    src: "https://images.pexels.com/photos/33504881/pexels-photo-33504881.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200",
    alt: "Mother holding baby in warm light",
  },
  {
    src: "https://images.pexels.com/photos/33704091/pexels-photo-33704091.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200",
    alt: "Baby wrapped in soft blanket",
  },
  {
    src: "https://images.pexels.com/photos/33890087/pexels-photo-33890087.jpeg?auto=compress&cs=tinysrgb&h=900&w=1200",
    alt: "Mother and baby close-up",
  },
];

export default function LifeSection() {
  return (
    <section className="relative w-full py-20 bg-[var(--color-sand)]">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          {/* Left Side - Image Rail */}
          <div className="image-rail fade-up">
            <div className="image-rail-track">
              {[...images, ...images].map((image, index) => (
                <div
                  key={`${image.alt}-${index}`}
                  className="relative w-[260px] sm:w-[320px] h-[360px] sm:h-[420px] rounded-3xl overflow-hidden border border-[var(--color-line)] shadow-lg"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-full w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="text-[var(--color-ink)] fade-up">
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)] mb-4">
              Designed for everyday moments
            </p>
            <h2 className="text-4xl sm:text-6xl lg:text-[64px] leading-tight mb-8">
              Less fuss, more cuddles.
            </h2>
            <p className="text-lg text-[var(--color-muted)] mb-8 max-w-[526px]">
              Stretchy sides, soft liners, and a breathable outer layer keep baby
              comfy through playtime, naps, and bedtime.
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-white px-8 py-4 rounded-full text-sm uppercase tracking-wide hover:opacity-90 transition-opacity"
            >
              Shop now
              <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
                <path d="M8 4l8 6.5-8 6.5V4z" fill="currentColor"/>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
