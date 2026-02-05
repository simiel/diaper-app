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
    <section className="relative w-full py-20 bg-white border-t border-[var(--color-line)]">
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)] mb-4">
          First order perk
        </p>
        <h2 className="text-4xl sm:text-6xl lg:text-[64px] text-[var(--color-ink)] mb-6">
          Get 15% off your first box
        </h2>
        <p className="text-lg text-[var(--color-muted)] mb-10 max-w-2xl mx-auto">
          Join for gentle tips, restock reminders, and exclusive member offers.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-2xl mx-auto">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            className="flex-1 bg-[var(--color-sand)] text-[var(--color-ink)] px-6 py-4 rounded-full text-base placeholder:text-[var(--color-muted)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
            required
          />
          <button
            type="submit"
            className="flex items-center justify-center gap-2 bg-[var(--color-primary)] text-white px-8 py-4 rounded-full text-sm uppercase tracking-wide hover:opacity-90 transition-opacity whitespace-nowrap"
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
