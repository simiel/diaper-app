'use client';

import { useState } from 'react';

export default function NewsletterSection() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribing:', email);
    setEmail('');
  };

  return (
    <section className="relative w-full py-20 bg-gradient-to-br from-[#4CAF50] to-[#66BB6A] overflow-hidden">
      {/* Cloud decorations */}
      <div className="absolute bottom-0 left-0 w-full h-32">
        <div className="absolute bottom-0 left-[-104px] w-[805px] h-[579px] opacity-20">
          <svg viewBox="0 0 805 579" fill="none" className="w-full h-full">
            <path d="M0 200C0 89.543 89.543 0 200 0H605C715.457 0 805 89.543 805 200V579H0V200Z" fill="white" fillOpacity="0.8"/>
          </svg>
        </div>
        <div className="absolute bottom-0 right-[-104px] w-[805px] h-[579px] opacity-20">
          <svg viewBox="0 0 805 579" fill="none" className="w-full h-full">
            <path d="M0 200C0 89.543 89.543 0 200 0H605C715.457 0 805 89.543 805 200V579H0V200Z" fill="white" fillOpacity="0.8"/>
          </svg>
        </div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-['Anton'] text-4xl sm:text-6xl md:text-8xl lg:text-[102px] leading-tight lg:leading-[101px] uppercase text-white mb-6">
          Get 15% off
        </h2>
        <p className="text-xl text-white mb-10 max-w-2xl mx-auto">
          Sign up for exclusive discounts, limited edition drops, updates, and more exclusive perks. Never spammy, always chill.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            className="flex-1 bg-white text-[#522260] px-8 py-4 rounded-full text-xl placeholder:text-[#522260]/60 focus:outline-none focus:ring-2 focus:ring-white"
            required
          />
          <button
            type="submit"
            className="flex items-center justify-center gap-1 bg-white text-[#522260] px-8 py-4 rounded-full font-['Anton'] text-2xl uppercase hover:opacity-90 transition-opacity whitespace-nowrap"
          >
            Subscribe
            <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
              <path d="M8 4l8 6.5-8 6.5V4z" fill="currentColor"/>
            </svg>
          </button>
        </form>
      </div>
    </section>
  );
}

