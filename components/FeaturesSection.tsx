"use client";

import { useState } from "react";
import Image from "next/image";

const features = [
  {
    icon: "feather",
    title: "Natural Materials",
    description: "Made with organic and natural materials",
    angle: -30, // 11 o'clock position
  },
  {
    icon: "pattern",
    title: "Unique Design",
    description: "Specially designed for comfort",
    angle: 30, // 1 o'clock position
  },
  {
    icon: "clean-skin",
    title: "Skin Friendly",
    description: "Gentle on your baby's sensitive skin",
    angle: 90, // 3 o'clock position
  },
  {
    icon: "brain",
    title: "Smart Features",
    description: "Advanced features for your baby",
    angle: 150, // 5 o'clock position
  },
  {
    icon: "verified",
    title: "Verified Quality",
    description: "Tested and approved by experts",
    angle: 210, // 7 o'clock position
  },
  {
    icon: "idea",
    title: "Innovative",
    description: "Latest technology for better protection",
    angle: 270, // 9 o'clock position
  },
];

// Icon SVG Components
const FeatherIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path
      d="M20 5L15 15L5 20L15 25L20 35L25 25L35 20L25 15L20 5Z"
      stroke="white"
      strokeWidth="2"
      fill="none"
    />
    <path
      d="M20 10L17 17L10 20L17 23L20 30L23 23L30 20L23 17L20 10Z"
      fill="white"
      opacity="0.3"
    />
  </svg>
);

const PatternIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <circle cx="20" cy="20" r="18" stroke="white" strokeWidth="2" fill="none" />
    <path
      d="M10 20 Q20 10 30 20 Q20 30 10 20"
      stroke="white"
      strokeWidth="2"
      fill="none"
    />
    <circle cx="15" cy="15" r="2" fill="white" />
    <circle cx="25" cy="15" r="2" fill="white" />
    <circle cx="15" cy="25" r="2" fill="white" />
    <circle cx="25" cy="25" r="2" fill="white" />
  </svg>
);

const CrownIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path d="M8 25L12 15L20 18L28 15L32 25L8 25Z" fill="white" />
    <path
      d="M12 15L8 25M20 18L12 15M20 18L28 15M28 15L32 25"
      stroke="#522260"
      strokeWidth="1.5"
    />
    <circle cx="10" cy="12" r="2" fill="#FFD700" />
    <circle cx="20" cy="10" r="2.5" fill="#FFD700" />
    <circle cx="30" cy="12" r="2" fill="#FFD700" />
    <path d="M20 10L18 8L20 6L22 8Z" fill="#FFD700" />
  </svg>
);

const BrainIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path
      d="M20 8C24 8 28 10 30 14C32 18 30 22 28 24C30 26 32 30 30 32C28 34 24 32 20 32C16 32 12 34 10 32C8 30 10 26 12 24C10 22 8 18 10 14C12 10 16 8 20 8Z"
      fill="white"
    />
    <circle cx="16" cy="18" r="2" fill="#522260" />
    <circle cx="24" cy="18" r="2" fill="#522260" />
    <path d="M14 24Q20 28 26 24" stroke="#522260" strokeWidth="2" fill="none" />
  </svg>
);

const ShieldIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path
      d="M20 5L10 10V18C10 25 15 30 20 35C25 30 30 25 30 18V10L20 5Z"
      fill="white"
      stroke="#522260"
      strokeWidth="1.5"
    />
    <path
      d="M16 20L19 23L24 16"
      stroke="#522260"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LightbulbIcon = () => (
  <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
    <path
      d="M20 8C16 8 13 11 13 15C13 17 14 19 15 21C16 23 17 25 17 28H23C23 25 24 23 25 21C26 19 27 17 27 15C27 11 24 8 20 8Z"
      fill="white"
    />
    <rect x="18" y="28" width="4" height="6" fill="white" />
    <rect x="16" y="34" width="8" height="2" fill="white" />
    <path
      d="M20 8V5M15 10L13 8M25 10L27 8"
      stroke="#522260"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

const getIconComponent = (iconName: string) => {
  switch (iconName) {
    case "feather":
      return <FeatherIcon />;
    case "pattern":
      return <PatternIcon />;
    case "clean-skin":
      return <CrownIcon />;
    case "brain":
      return <BrainIcon />;
    case "verified":
      return <ShieldIcon />;
    case "idea":
      return <LightbulbIcon />;
    default:
      return null;
  }
};

export default function FeaturesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Circle dimensions
  const centerX = 400;
  const centerY = 400;
  const outerRadius = 320; // Outer dashed circle for icons

  // Calculate position on circle
  const getIconPosition = (angle: number) => {
    const radian = (angle * Math.PI) / 180;
    const x = centerX + outerRadius * Math.cos(radian);
    const y = centerY + outerRadius * Math.sin(radian);
    return { x, y };
  };

  return (
    <section className="relative w-full py-20 bg-[#FEF4F2] overflow-hidden">
      {/* Green clouds at top */}
      {/* <div className="absolute top-0 left-0 w-full h-40 overflow-hidden">
        <div className="absolute top-[-50px] left-[-100px] w-[400px] h-[200px] opacity-40">
          <svg viewBox="0 0 400 200" fill="none" className="w-full h-full">
            <path
              d="M0 100C0 44.772 44.772 0 100 0H300C355.228 0 400 44.772 400 100V200H0V100Z"
              fill="#4CAF50"
            />
          </svg>
        </div>
        <div className="absolute top-[-30px] right-[-80px] w-[350px] h-[180px] opacity-40">
          <svg viewBox="0 0 350 180" fill="none" className="w-full h-full">
            <path
              d="M0 90C0 40.276 40.276 0 90 0H260C309.724 0 350 40.276 350 90V180H0V90Z"
              fill="#4CAF50"
            />
          </svg>
        </div>
      </div> */}

      {/* Dark purple band at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-24 bg-[#522260]"></div>

      {/* White clouds scattered */}
      <div className="absolute top-1/3 right-0 w-64 h-48 opacity-30">
        <svg viewBox="0 0 256 192" fill="none" className="w-full h-full">
          <path
            d="M0 96C0 43.008 43.008 0 96 0H160C212.992 0 256 43.008 256 96V192H0V96Z"
            fill="white"
            fillOpacity="0.8"
          />
        </svg>
      </div>
      <div className="absolute bottom-32 left-0 w-56 h-40 opacity-30">
        <svg viewBox="0 0 224 160" fill="none" className="w-full h-full">
          <path
            d="M0 80C0 35.817 35.817 0 80 0H144C188.183 0 224 35.817 224 80V160H0V80Z"
            fill="white"
            fillOpacity="0.8"
          />
        </svg>
      </div>

      {/* Decorative "P" letters */}
      <div className="absolute top-20 left-10 text-[#522260] opacity-10 font-['Anton'] text-[200px] leading-none pointer-events-none">
        P
      </div>
      <div className="absolute bottom-40 right-10 text-[#522260] opacity-10 font-['Anton'] text-[150px] leading-none pointer-events-none">
        P
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Title */}
        <h2 className="font-['Anton'] text-4xl sm:text-6xl md:text-8xl lg:text-[102px] leading-tight lg:leading-[101px] uppercase text-[#522260] text-center mb-4">
          Pure hug Features
        </h2>
        <p className="text-xl text-center text-black mb-16 max-w-[1034px] mx-auto">
          Explore the technology and the features of your baby Protection
        </p>

        {/* Circular Feature Display */}
        <div className="relative w-full max-w-[800px] h-[800px] mx-auto">
          {/* SVG Container for precise positioning */}
          <svg width="800" height="800" className="absolute inset-0">
            {/* Dashed circle */}
            <circle
              cx={centerX}
              cy={centerY}
              r={outerRadius}
              fill="none"
              stroke="#522260"
              strokeWidth="2"
              strokeDasharray="8 8"
              opacity="0.3"
            />
          </svg>

          {/* Central Diaper Image Circle */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full bg-[#EAD8D0] shadow-2xl flex items-center justify-center overflow-hidden border-4 border-white">
            <div className="relative w-[320px] h-[320px]">
              <Image
                src="/feature-diaper.png"
                alt="Pure Hug Diaper"
                fill
                className="object-contain p-4"
                unoptimized
              />
            </div>
          </div>

          {/* Feature Icons positioned on dashed circle */}
          {features.map((feature, index) => {
            const pos = getIconPosition(feature.angle);
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={index}
                className="absolute"
                style={{
                  left: `${pos.x}px`,
                  top: `${pos.y}px`,
                  transform: "translate(-50%, -50%)",
                }}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Icon Circle */}
                <div
                  className={`relative w-[70px] h-[70px] rounded-full bg-[#522260] flex items-center justify-center cursor-pointer transition-all duration-300 shadow-lg ${
                    isHovered
                      ? "scale-125 shadow-2xl ring-4 ring-[#522260]/20"
                      : "hover:scale-110"
                  }`}
                >
                  <div className="text-white transform transition-transform duration-300">
                    {getIconComponent(feature.icon)}
                  </div>
                </div>

                {/* Tooltip/Popup on hover */}
                {isHovered && (
                  <div
                    className={`absolute w-56 bg-white rounded-xl shadow-2xl p-4 z-50 animate-fadeIn ${
                      feature.angle >= 0 && feature.angle < 180
                        ? "bottom-full mb-4 left-1/2 -translate-x-1/2"
                        : "top-full mt-4 left-1/2 -translate-x-1/2"
                    }`}
                  >
                    <h3 className="font-semibold text-[#522260] text-base mb-2 text-center">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600 text-center leading-relaxed">
                      {feature.description}
                    </p>
                    {/* Arrow pointing to icon */}
                    <div
                      className={`absolute left-1/2 transform -translate-x-1/2 w-0 h-0 ${
                        feature.angle >= 0 && feature.angle < 180
                          ? "top-full border-l-4 border-r-4 border-t-4 border-transparent border-t-white"
                          : "bottom-full border-l-4 border-r-4 border-b-4 border-transparent border-b-white"
                      }`}
                    ></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translate(-50%, -10px);
          }
          to {
            opacity: 1;
            transform: translate(-50%, 0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
      `}</style>
    </section>
  );
}
