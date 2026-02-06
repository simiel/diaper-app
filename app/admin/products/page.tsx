export default function AdminProductsPage() {
  return (
    <section className="space-y-6">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
          Products
        </p>
        <h1 className="text-4xl text-[var(--color-ink)]">Manage products</h1>
      </div>
      <div className="bg-white border border-[var(--color-line)] rounded-3xl p-6">
        <p className="text-[var(--color-muted)]">
          This is where admins will add products, set pricing, and upload images.
          We’ll wire this to Neon + Prisma next.
        </p>
      </div>
    </section>
  );
}
