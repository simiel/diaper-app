import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Link from "next/link";
import Footer from "@/components/Footer";
import { getFAQs } from "@/lib/repositories/faqs";

const pillars = [
  {
    title: "Quality you can feel",
    body:
      "Every layer is selected for softness, breathability, and dependable absorption—so baby stays comfortable longer.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path
          d="M6 13c2 2 4 3 6 3s4-1 6-3"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M12 3l7 4v6c0 4-3 7-7 8-4-1-7-4-7-8V7l7-4z"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    title: "Safety first, always",
    body:
      "Hypoallergenic materials, fragrance‑free liners, and dermatologist testing help protect delicate skin.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 3l7 4v6c0 4-3 7-7 8-4-1-7-4-7-8V7l7-4z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path
          d="M9 12l2 2 4-4"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Thoughtful innovation",
    body:
      "Leak‑lock channels, wetness indicators, and flexible sides make everyday changes easier.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2a6 6 0 0 1 4 10c-1 1-1.5 2-1.5 3.5h-5C9.5 14 9 13 8 12a6 6 0 0 1 4-10z"
          stroke="currentColor"
          strokeWidth="2"
        />
        <path d="M9 19h6M10 22h4" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
  },
];

const advice = [
  "Change regularly to keep skin clean and dry.",
  "Choose breathable materials to reduce irritation.",
  "Use the right size for the best fit and leak protection.",
  "Keep bedtime changes gentle and calm.",
];

export default async function AboutPage() {
  const faqs = await getFAQs();
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <Header />
      <div className="relative z-20">
        <Nav />
      </div>

      <section className="py-16 border-b border-[var(--color-line)] bg-[var(--color-sand)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)] mb-4">
            About Pure Hug
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-[64px] text-[var(--color-ink)] mb-4">
            Premium care for Ghanaian families.
          </h1>
          <p className="text-lg text-[var(--color-muted)] max-w-2xl">
            We design breathable, skin‑friendly diapers that feel luxurious and
            work hard through playtime, naps, and overnight.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-[320px] w-full rounded-3xl overflow-hidden border border-[var(--color-line)]">
            <img
              src="/baby2.jpg"
              alt="Mother and baby in calm light"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-white border border-[var(--color-line)] rounded-3xl p-8 hover-lift"
              >
                <div className="flex items-center gap-3 text-[var(--color-primary)] mb-6">
                  <span className="h-10 w-10 rounded-full bg-[var(--color-sand)] border border-[var(--color-line)] flex items-center justify-center">
                    {pillar.icon}
                  </span>
                  <div className="h-2 w-16 rounded-full bg-[var(--color-accent)]"></div>
                </div>
                <h2 className="text-2xl text-[var(--color-ink)] mb-4">
                  {pillar.title}
                </h2>
                <p className="text-[var(--color-muted)]">{pillar.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-[var(--color-sand)] border-y border-[var(--color-line)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)] mb-4">
              Safety & care
            </p>
            <h2 className="text-3xl sm:text-5xl lg:text-[56px] text-[var(--color-ink)] mb-4">
              Designed to be gentle, tested to be trusted.
            </h2>
            <p className="text-lg text-[var(--color-muted)] mb-6">
              From materials to manufacturing, we focus on what matters most:
              comfort, cleanliness, and peace of mind.
            </p>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-white px-8 py-4 rounded-full text-sm uppercase tracking-wide hover:opacity-90 transition-opacity"
            >
              Shop diapers
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {advice.map((tip) => (
              <div
                key={tip}
                className="bg-white border border-[var(--color-line)] rounded-2xl p-6"
              >
                <p className="text-sm uppercase tracking-[0.2em] text-[var(--color-muted)] mb-2">
                  Care tip
                </p>
                <p className="text-[var(--color-ink)]">{tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)] mb-4 text-center">
            Frequently asked questions
          </p>
          <h2 className="text-4xl sm:text-6xl lg:text-[64px] text-[var(--color-ink)] mb-10 text-center">
            Answers for confident choices.
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="bg-white border border-[var(--color-line)] rounded-2xl p-6"
              >
                <h3 className="text-lg text-[var(--color-ink)] mb-2">
                  {faq.question}
                </h3>
                <p className="text-[var(--color-muted)]">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
