import Link from "next/link";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr]">
        <aside className="border-r border-[var(--color-line)] bg-white p-6">
          <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)] mb-6">
            Admin
          </p>
          <nav className="space-y-3 text-sm">
            <Link href="/admin" className="block text-[var(--color-ink)]">
              Overview
            </Link>
            <Link href="/admin/products" className="block text-[var(--color-ink)]">
              Products
            </Link>
            <Link href="/admin/blog" className="block text-[var(--color-ink)]">
              Blog
            </Link>
            <Link href="/admin/settings" className="block text-[var(--color-ink)]">
              Settings
            </Link>
          </nav>
        </aside>
        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}
