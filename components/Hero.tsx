import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[600px] bg-gradient-to-br from-[#FF9800] to-[#FFC107] overflow-hidden">
      {/* Cloud decorations */}
      <div className="absolute bottom-0 left-0 w-full h-32">
        <div className="absolute bottom-[-200px] left-[-104px] w-[805px] h-[579px]">
          <Image
            src="/cloud1.svg"
            alt="Cloud"
            fill
            className="object-contain rotate-y-0"
            unoptimized
          />
        </div>
        <div className="absolute bottom-[-350px] right-[-100px] w-[805px] h-[579px]">
          <Image
            src="/cloud2.svg"
            alt="Cloud"
            fill
            className="object-contain rotate-y-0"
            unoptimized
          />
        </div>
      </div>

      {/* Star decorations */}
      <div className="absolute top-20 left-10 w-4 h-4 text-white opacity-60">
        <svg viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 0L9.8 5.8L16 6.4L11.6 10.2L13.2 16L8 12.8L2.8 16L4.4 10.2L0 6.4L6.2 5.8L8 0Z" />
        </svg>
      </div>
      <div className="absolute top-40 right-20 w-4 h-4 text-white opacity-60">
        <svg viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 0L9.8 5.8L16 6.4L11.6 10.2L13.2 16L8 12.8L2.8 16L4.4 10.2L0 6.4L6.2 5.8L8 0Z" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left Content */}
        <div className="flex-1 z-10">
          <h1 className="font-['Anton'] text-4xl sm:text-6xl md:text-8xl lg:text-[130px] leading-tight lg:leading-[128px] uppercase text-[#522260] mb-8">
            stay active and live life
          </h1>
          <p className="font-semibold text-xl leading-9 text-black mb-10 max-w-[748px]">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
          </p>
          <Link
            href="/shop"
            className="inline-flex items-center gap-1 bg-white text-[#522260] px-8 py-4 rounded-full font-['Anton'] text-2xl uppercase hover:opacity-90 transition-opacity"
          >
            Shop now
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
              <path d="M8 4l8 6.5-8 6.5V4z" fill="currentColor" />
            </svg>
          </Link>
        </div>

        {/* Right Content - Product Images */}
        <div className="flex-1 flex flex-col items-center lg:items-end gap-6 z-10">
          <div className="relative w-full max-w-[528px] h-[400px] lg:h-[629px]">
            <Image
              src="/baby-diapers-bagpack.png"
              alt="Pure Hug Diaper Product"
              fill
              className="object-contain rounded-2xl"
              priority
              unoptimized
            />
          </div>
        </div>
      </div>
    </section>
  );
}
