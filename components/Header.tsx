export default function Header() {
  const items = [
    "Free delivery in Accra over GHS 80",
    "Breathable, plant‑based softness",
    "Dermatologist tested",
    "12‑hour leak‑lock core",
  ];

  return (
    <header className="w-full bg-white border-b border-[var(--color-line)]">
      <div className="bg-[#1c1f1d] text-white">
        <div className="marquee py-3">
          <div className="marquee-track">
            {[...items, ...items].map((item, index) => (
              <div key={index} className="flex items-center gap-3 px-6">
                <span className="text-xs uppercase tracking-[0.2em]">
                  {item}
                </span>
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]"></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
