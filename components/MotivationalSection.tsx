import Link from "next/link";

export default function MotivationalSection() {
  return (
    <section className="relative w-full py-20 bg-white overflow-hidden">
      {/* Cloud decorations */}
      <div className="absolute bottom-0 left-0 w-full h-32">
        <div className="absolute bottom-0 left-[-79px] w-[805px] h-[579px] opacity-30">
          <svg viewBox="0 0 805 579" fill="none" className="w-full h-full">
            <path
              d="M0 200C0 89.543 89.543 0 200 0H605C715.457 0 805 89.543 805 200V579H0V200Z"
              fill="white"
              fillOpacity="0.8"
            />
          </svg>
        </div>
        <div className="absolute bottom-0 right-[-79px] w-[805px] h-[579px] opacity-30">
          <svg viewBox="0 0 805 579" fill="none" className="w-full h-full">
            <path
              d="M0 200C0 89.543 89.543 0 200 0H605C715.457 0 805 89.543 805 200V579H0V200Z"
              fill="white"
              fillOpacity="0.8"
            />
          </svg>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-['Anton'] text-3xl sm:text-5xl md:text-6xl lg:text-[102px] leading-tight lg:leading-[101px] uppercase text-[#522260] mb-8 max-w-4xl mx-auto">
            Life is too precious to be spent worrying about incontinence
          </h2>
          <p className="text-xl text-black max-w-3xl mx-auto mb-10">
            Perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa. Sed ut
            perspiciatis unde omnis iste natus error sit voluptatem accusantium
            doloremque laudantium, totam rem aperiam, eaque ipsa.
          </p>
          <Link
            href="/learn-more"
            className="inline-flex items-center gap-1 bg-[#522260] text-white px-8 py-4 rounded-full font-['Anton'] text-xl uppercase hover:opacity-90 transition-opacity"
          >
            Learn More
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
              <path d="M8 4l8 6.5-8 6.5V4z" fill="currentColor" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
