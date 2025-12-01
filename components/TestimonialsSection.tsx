'use client';

import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    quote: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    author: "Chalonian Khanas"
  },
  {
    id: 2,
    quote: "Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    author: "Priscilla Wilson"
  },
  {
    id: 3,
    quote: "Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.",
    author: "Sarah Johnson"
  },
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative w-full py-20 bg-[#522260] overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="font-['Anton'] text-4xl sm:text-6xl md:text-8xl lg:text-[102px] leading-tight lg:leading-[101px] uppercase text-white text-center mb-16">
          Happy life😍 with pure hug
        </h2>

        {/* Testimonial Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-12 min-h-[300px] flex items-center">
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>

            <div className="flex-1 text-center px-16">
              <div className="mb-8">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" className="mx-auto opacity-50">
                  <path d="M12 24c0-6.627 5.373-12 12-12s12 5.373 12 12-5.373 12-12 12" stroke="white" strokeWidth="2" fill="none"/>
                </svg>
              </div>
              <p className="text-xl text-white leading-relaxed mb-8">
                "{testimonials[currentIndex].quote}"
              </p>
              <p className="text-lg text-white/80 font-semibold">
                - {testimonials[currentIndex].author}
              </p>
            </div>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

