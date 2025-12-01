import Link from 'next/link';
import Image from 'next/image';

interface ProductCardProps {
  id: string;
  name: string;
  price: string;
  image: string;
  imageAlt?: string;
}

export default function ProductCard({ id, name, price, image, imageAlt = "Product" }: ProductCardProps) {
  return (
    <div className="relative bg-white rounded-[47px] shadow-[0px_4px_7.4px_0px_#fee1eb] p-6 flex flex-col items-center">
      {/* Product Image */}
      <div className="relative w-full h-[238px] mb-6 -mt-12">
        <Image
          src={`https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=359&h=238&fit=crop&q=80&sig=${id}`}
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
          <svg width="21" height="21" viewBox="0 0 21 21" fill="none">
            <path d="M8 4l8 6.5-8 6.5V4z" fill="currentColor"/>
          </svg>
        </Link>
        <button className="flex items-center justify-center w-[65px] h-[65px] bg-[#522260] text-white rounded-full hover:opacity-90 transition-opacity">
          <span className="font-['Roboto'] font-extralight text-[64px] leading-[27.5px]">+</span>
        </button>
      </div>
    </div>
  );
}

