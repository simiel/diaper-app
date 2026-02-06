export default function AdminBlogPage() {
  return (
    <section className="space-y-6">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
          Blog
        </p>
        <h1 className="text-4xl text-[var(--color-ink)]">Manage blog posts</h1>
      </div>
      <div className="bg-white border border-[var(--color-line)] rounded-3xl p-6">
        <p className="text-[var(--color-muted)]">
          Editors will create, publish, and schedule content here once the CMS
          forms are wired.
        </p>
      </div>
    </section>
  );
}
