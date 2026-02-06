export default function AdminSettingsPage() {
  return (
    <section className="space-y-6">
      <div>
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
          Settings
        </p>
        <h1 className="text-4xl text-[var(--color-ink)]">Store settings</h1>
      </div>
      <div className="bg-white border border-[var(--color-line)] rounded-3xl p-6">
        <p className="text-[var(--color-muted)]">
          Payment keys, contact info, and brand settings will live here. We’ll
          connect these fields to the database and secure them with admin auth.
        </p>
      </div>
    </section>
  );
}
