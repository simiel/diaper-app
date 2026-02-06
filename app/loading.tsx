export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[var(--background)]">
      <div className="flex flex-col items-center gap-4">
        <div className="h-16 w-16 rounded-full border-2 border-[var(--color-line)] border-t-[var(--color-primary)] animate-spin" />
        <p className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
          Loading
        </p>
      </div>
    </div>
  );
}
