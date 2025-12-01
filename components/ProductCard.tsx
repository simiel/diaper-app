import Link from "next/link";
import Image from "next/image";

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  image: string;
  imageAlt?: string;
}

export default function ProductCard({
  id,
  name,
  price,
  image,
  imageAlt = "Product",
}: ProductCardProps) {
  return (
    <div className="relative bg-white rounded-[47px] shadow-[0px_4px_7.4px_0px_#fee1eb] p-6 flex flex-col items-center">
      {/* Product Image */}
      <div className="relative w-full h-[238px] mb-6 -mt-12">
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
        <h3 className="font-semibold text-[32px] leading-9 text-[#522260] tracking-[-0.64px]">
          {name}
        </h3>
        <p className="font-semibold text-[32px] leading-9 text-[#522260] tracking-[-0.64px]">
          {price}
        </p>
      </div>

      {/* Action Buttons */}
      <div className="w-full flex items-center gap-4">
        <Link
          href={`/products/${id}`}
          className="flex-1 flex items-center justify-center gap-1 bg-[#522260] text-white px-6 py-4 rounded-full font-['Anton'] text-xl uppercase hover:opacity-90 transition-opacity"
        >
          Shop now
          <svg
            width="21"
            height="21"
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
        <button className="flex items-center justify-center w-[65px] h-[65px] bg-[#522260] text-white rounded-full hover:opacity-90 transition-opacity">
          <span className="font-['Roboto'] font-extralight text-[64px] leading-[27.5px]">
            +
          </span>
        </button>
      </div>
    </div>
  );
}
