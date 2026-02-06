export default function AdminPage() {
  return (
    <section className="space-y-6">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
          Overview
        </p>
        <h1 className="text-4xl text-[var(--color-ink)]">Store dashboard</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Total orders", value: "—" },
          { label: "Revenue", value: "—" },
          { label: "Active products", value: "—" },
        ].map((card) => (
          <div
            key={card.label}
            className="bg-white border border-[var(--color-line)] rounded-3xl p-6"
          >
            <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
              {card.label}
            </p>
            <p className="text-2xl text-[var(--color-ink)] mt-4">
              {card.value}
            </p>
          </div>
        ))}
      </div>
      <div className="bg-white border border-[var(--color-line)] rounded-3xl p-6">
        <h2 className="text-xl text-[var(--color-ink)] mb-2">
          Next steps
        </h2>
        <p className="text-[var(--color-muted)]">
          Connect your database, add products, and publish your first blog post.
        </p>
      </div>
    </section>
  );
}
