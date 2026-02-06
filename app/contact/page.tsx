import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[var(--background)]">
      <Header />
      <div className="relative z-20">
        <Nav />
      </div>

      <section className="py-16 border-b border-[var(--color-line)] bg-[var(--color-sand)]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)] mb-4">
            Contact
          </p>
          <h1 className="text-4xl sm:text-6xl lg:text-[64px] text-[var(--color-ink)] mb-4">
            We’re here to help.
          </h1>
          <p className="text-lg text-[var(--color-muted)] max-w-2xl">
            Questions about sizes, delivery, or sensitive skin? Our care team is
            ready.
          </p>
        </div>
      </section>

      <section className="py-10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative h-[260px] w-full rounded-3xl overflow-hidden border border-[var(--color-line)]">
            <img
              src="/baby3.jpg"
              alt="Care team and baby care"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white border border-[var(--color-line)] rounded-3xl p-8">
            <h2 className="text-2xl text-[var(--color-ink)] mb-6">
              Send a message
            </h2>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Full name"
                  className="w-full bg-[var(--color-sand)] text-[var(--color-ink)] px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                />
                <input
                  type="email"
                  placeholder="Email address"
                  className="w-full bg-[var(--color-sand)] text-[var(--color-ink)] px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full bg-[var(--color-sand)] text-[var(--color-ink)] px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              />
              <textarea
                placeholder="Tell us how we can help"
                rows={5}
                className="w-full bg-[var(--color-sand)] text-[var(--color-ink)] px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              />
              <button className="inline-flex items-center gap-2 bg-[var(--color-primary)] text-white px-8 py-4 rounded-full text-sm uppercase tracking-wide hover:opacity-90 transition-opacity">
                Send message
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
