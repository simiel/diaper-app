import ProductCard from "./ProductCard";

const products = [
  {
    id: "1",
    name: "Diaper Products",
    price: "GHS 10.00",
    image: "/diaper1.png",
    imageAlt: "Diaper Product 1",
  },
  {
    id: "2",
    name: "Diaper Products",
    price: "GHS 10.00",
    image: "/diaper2.png",
    imageAlt: "Diaper Product 2",
  },
  {
    id: "3",
    name: "Diaper Products",
    price: "GHS 10.00",
    image: "/diaper3.png",
    imageAlt: "Diaper Product 3",
  },
  {
    id: "4",
    name: "Diaper Products",
    price: "GHS 10.00",
    image: "/diaper2.png",
    imageAlt: "Diaper Product 4",
  },
  {
    id: "5",
    name: "Diaper Products",
    price: "GHS 10.00",
    image: "/diaper1.png",
    imageAlt: "Diaper Product 5",
  },
  {
    id: "6",
    name: "Diaper Products",
    price: "GHS 10.00",
    image: "/diaper2.png",
    imageAlt: "Diaper Product 6",
  },
];

export default function ProductsSection() {
  return (
    <section className="relative w-full py-20 bg-gradient-to-b from-[#fee1eb] to-white overflow-hidden">
      {/* Cloud decorations */}
      <div className="absolute bottom-0 left-0 w-full h-32">
        <div className="absolute bottom-0 left-[-79px] w-[805px] h-[579px] opacity-30">
          <svg viewBox="0 0 805 579" fill="none" className="w-full h-full">
            <path
              d="M0 200C0 89.543 89.543 0 200 0H605C715.457 0 805 89.543 805 200V579H0V200Z"
              fill="white"
              fillOpacity="0.8"
            />
          </svg>
        </div>
        <div className="absolute bottom-0 right-[-79px] w-[805px] h-[579px] opacity-30">
          <svg viewBox="0 0 805 579" fill="none" className="w-full h-full">
            <path
              d="M0 200C0 89.543 89.543 0 200 0H605C715.457 0 805 89.543 805 200V579H0V200Z"
              fill="white"
              fillOpacity="0.8"
            />
          </svg>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="font-['Anton'] text-4xl sm:text-6xl md:text-8xl lg:text-[102px] leading-tight lg:leading-[101px] uppercase text-[#522260] text-center mb-16">
          Our products
        </h2>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-16">
          {products.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
}
