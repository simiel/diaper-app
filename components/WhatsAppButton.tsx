import Link from "next/link";

const phoneNumber = "233200000000";
const message = encodeURIComponent(
  "Hi Pure Hug team! I’d love help choosing the right diaper size."
);

export default function WhatsAppButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link
        href={`https://wa.me/${phoneNumber}?text=${message}`}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 rounded-full bg-[#25D366] text-white px-5 py-3 shadow-lg hover:shadow-xl transition-all"
        aria-label="Chat on WhatsApp"
      >
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M20.52 3.48A11.78 11.78 0 0 0 12 0C5.4 0 .08 5.33.08 11.92c0 2.1.55 4.16 1.6 5.98L0 24l6.3-1.65a11.9 11.9 0 0 0 5.7 1.45h.01c6.6 0 11.92-5.33 11.92-11.92 0-3.18-1.24-6.16-3.41-8.4Zm-8.5 18.3h-.01a9.9 9.9 0 0 1-5.06-1.38l-.36-.21-3.74.98 1-3.64-.24-.37a9.88 9.88 0 0 1-1.52-5.25c0-5.47 4.46-9.93 9.95-9.93 2.65 0 5.15 1.03 7.03 2.9a9.9 9.9 0 0 1 2.91 7.03c0 5.48-4.46 9.94-9.96 9.94Zm5.45-7.44c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.93 1.17-.17.2-.35.22-.64.08-.3-.15-1.27-.47-2.41-1.5-.9-.8-1.5-1.8-1.67-2.1-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.9-2.2-.24-.58-.48-.5-.66-.5h-.56c-.2 0-.52.08-.8.37-.27.3-1.05 1.02-1.05 2.5 0 1.47 1.08 2.9 1.23 3.1.15.2 2.12 3.25 5.14 4.56.72.31 1.28.5 1.72.64.72.23 1.37.2 1.88.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
          </svg>
        </span>
        <div className="text-left">
          <p className="text-xs uppercase tracking-[0.2em] text-white/80">
            WhatsApp
          </p>
          <p className="text-sm font-semibold">Chat with us</p>
        </div>
      </Link>
    </div>
  );
}
