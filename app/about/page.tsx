import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Link from "next/link";
import Footer from "@/components/Footer";

const pillars = [
  {
    title: "Quality you can feel",
    body:
      "Every layer is selected for softness, breathability, and dependable absorption—so baby stays comfortable longer.",
  },
  {
    title: "Safety first, always",
    body:
      "Hypoallergenic materials, fragrance‑free liners, and dermatologist testing help protect delicate skin.",
  },
  {
    title: "Thoughtful innovation",
    body:
      "Leak‑lock channels, wetness indicators, and flexible sides make everyday changes easier.",
  },
];

const advice = [
  "Change regularly to keep skin clean and dry.",
  "Choose breathable materials to reduce irritation.",
  "Use the right size for the best fit and leak protection.",
  "Keep bedtime changes gentle and calm.",
];

const faqs = [
  {
    q: "Are Pure Hug diapers safe for newborns?",
    a: "Yes. Our newborn line uses ultra‑soft liners and is dermatologist tested.",
  },
  {
    q: "Do you use fragrances or dyes?",
    a: "No. We avoid added fragrances and unnecessary dyes to protect sensitive skin.",
  },
  {
    q: "How long can one diaper last?",
    a: "Our core is designed for up to 12 hours, though we recommend regular changes.",
  },
  {
    q: "Are your diapers eco‑friendly?",
    a: "We use plant‑based materials and responsibly sourced pulp wherever possible.",
  },
];

export default function AboutPage() {
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

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-white border border-[var(--color-line)] rounded-3xl p-8 hover-lift"
              >
                <div className="h-2 w-12 rounded-full bg-[var(--color-accent)] mb-6"></div>
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
              href="/shop"
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
                key={faq.q}
                className="bg-white border border-[var(--color-line)] rounded-2xl p-6"
              >
                <h3 className="text-lg text-[var(--color-ink)] mb-2">
                  {faq.q}
                </h3>
                <p className="text-[var(--color-muted)]">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
