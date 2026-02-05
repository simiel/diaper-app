import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  image: string;
  imageAlt?: string;
  tag?: string;
}

export default function ProductCard({
  id,
  name,
  price,
  image,
  imageAlt = "Product",
  tag,
}: ProductCardProps) {
  return (
    <div className="relative bg-white rounded-3xl border border-[var(--color-line)] p-6 flex flex-col items-center hover-lift">
      {/* Product Image */}
      <div className="relative w-full h-[220px] mb-6">
        <Image
          src={image}
          alt={imageAlt}
          fill
          className="object-contain"
          unoptimized
        />
      </div>

      {/* Product Info */}
      <div className="w-full flex flex-col items-start gap-2 mb-6">
        {tag && (
          <span className="text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
            {tag}
          </span>
        )}
        <h3 className="text-2xl text-[var(--color-ink)]">
          {name}
        </h3>
        <p className="text-xl font-semibold text-[var(--color-primary)]">
          {price}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="w-full flex items-center gap-4">
        <Link
          href={`/products/${id}`}
          className="flex-1 flex items-center justify-center gap-2 bg-[var(--color-primary)] text-white px-6 py-3 rounded-full text-sm uppercase tracking-wide hover:opacity-90 transition-opacity"
        >
          Shop now
          <svg
            width="18"
            height="18"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 2.38144V0L13 9.30928V11.9072L0 21V18.6186L11.3226 10.6082L0 2.38144Z"
              fill="white"
            />
            <path
              d="M8 2.38144V0L21 9.30928V11.9072L8 21V18.6186L19.3226 10.6082L8 2.38144Z"
              fill="white"
            />
          </svg>
        </Link>
        <button className="flex items-center justify-center w-[52px] h-[52px] bg-[var(--color-primary-soft)] text-[var(--color-primary)] rounded-full hover:opacity-90 transition-opacity">
          <span className="text-2xl leading-none">+</span>
          <span className="sr-only">Add to cart</span>
        </button>
      </div>
    </div>
  );
}
