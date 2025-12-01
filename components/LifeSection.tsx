import Link from 'next/link';
import Image from 'next/image';

const images = [
  { src: 'https://images.unsplash.com/photo-1511895426328-dc8714191300?w=366&h=312&fit=crop&q=80', alt: 'Happy family' },
  { src: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=366&h=312&fit=crop&q=80', alt: 'Father with baby' },
  { src: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=366&h=312&fit=crop&q=80', alt: 'Family moment' },
  { src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=366&h=312&fit=crop&q=80', alt: 'Baby and parent' },
  { src: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=366&h=312&fit=crop&q=80', alt: 'Cute baby' },
  { src: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?w=366&h=312&fit=crop&q=80', alt: 'Family playing' },
];

export default function LifeSection() {
  return (
    <section className="relative w-full py-20 bg-gradient-to-br from-[#4CAF50] to-[#66BB6A] overflow-hidden">
      {/* Cloud decorations */}
      <div className="absolute bottom-0 left-0 w-full h-32">
        <div className="absolute bottom-0 left-[-79px] w-[805px] h-[579px] opacity-20">
          <svg viewBox="0 0 805 579" fill="none" className="w-full h-full">
            <path d="M0 200C0 89.543 89.543 0 200 0H605C715.457 0 805 89.543 805 200V579H0V200Z" fill="white" fillOpacity="0.8"/>
          </svg>
        </div>
        <div className="absolute bottom-0 right-[-79px] w-[805px] h-[579px] opacity-20">
          <svg viewBox="0 0 805 579" fill="none" className="w-full h-full">
            <path d="M0 200C0 89.543 89.543 0 200 0H605C715.457 0 805 89.543 805 200V579H0V200Z" fill="white" fillOpacity="0.8"/>
          </svg>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image Grid */}
          <div className="grid grid-cols-3 gap-4">
            {images.map((image, index) => (
              <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* Right Side - Content */}
          <div className="text-white">
            <h2 className="font-['Anton'] text-3xl sm:text-5xl md:text-7xl lg:text-[102px] leading-tight lg:leading-[101px] uppercase mb-8">
              Life is too precious to be spent worrying about incontinence
            </h2>
            <p className="text-xl mb-10 max-w-[526px]">
              Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-1 bg-white text-[#4CAF50] px-8 py-4 rounded-full font-['Anton'] text-xl uppercase hover:opacity-90 transition-opacity"
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

