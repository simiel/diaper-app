import Link from "next/link";

export default function ChatC() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link
        href="/contact"
        className="group flex items-center gap-3 rounded-full bg-[var(--color-primary)] text-white px-5 py-3 shadow-lg hover:shadow-xl transition-all"
        aria-label="Chat with a care advisor"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M21 15a4 4 0 0 1-4 4H8l-5 3V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
          </svg>
        </span>
        <div className="text-left">
          <p className="text-xs uppercase tracking-[0.2em] text-white/70">
            ChatC
          </p>
          <p className="text-sm font-semibold">Care Advisor</p>
        </div>
      </Link>
    </div>
  );
}
