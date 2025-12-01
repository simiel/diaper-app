
const features = [
  {
    icon: 'feather',
    title: 'Natural Materials',
    description: 'Made with organic and natural materials'
  },
  {
    icon: 'pattern',
    title: 'Unique Design',
    description: 'Specially designed for comfort'
  },
  {
    icon: 'idea',
    title: 'Innovative',
    description: 'Latest technology for better protection'
  },
  {
    icon: 'verified',
    title: 'Verified Quality',
    description: 'Tested and approved by experts'
  },
  {
    icon: 'brain',
    title: 'Smart Features',
    description: 'Advanced features for your baby'
  },
  {
    icon: 'clean-skin',
    title: 'Skin Friendly',
    description: 'Gentle on your baby\'s sensitive skin'
  },
];

export default function FeaturesSection() {
  return (
    <section className="relative w-full py-20 bg-gradient-to-b from-white to-[#fee1eb] overflow-hidden">
      {/* Cloud decorations */}
      <div className="absolute bottom-0 left-0 w-full h-32">
        <div className="absolute bottom-0 left-[-153px] w-[805px] h-[579px] opacity-30">
          <svg viewBox="0 0 805 579" fill="none" className="w-full h-full">
            <path d="M0 200C0 89.543 89.543 0 200 0H605C715.457 0 805 89.543 805 200V579H0V200Z" fill="white" fillOpacity="0.8"/>
          </svg>
        </div>
        <div className="absolute bottom-0 right-[-153px] w-[805px] h-[579px] opacity-30">
          <svg viewBox="0 0 805 579" fill="none" className="w-full h-full">
            <path d="M0 200C0 89.543 89.543 0 200 0H605C715.457 0 805 89.543 805 200V579H0V200Z" fill="white" fillOpacity="0.8"/>
          </svg>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h2 className="font-['Anton'] text-4xl sm:text-6xl md:text-8xl lg:text-[102px] leading-tight lg:leading-[101px] uppercase text-[#522260] text-center mb-4">
          Pure hug Features
        </h2>
        <p className="text-xl text-center text-black mb-16 max-w-[1034px] mx-auto">
          Explore the technology and the features of your baby Protection
        </p>

        {/* Central Product Image */}
        <div className="relative w-full max-w-[580px] h-[544px] mx-auto mb-16">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-[707px] h-[707px] rounded-full bg-[#fee1eb] opacity-50 -z-10"></div>
            <div className="w-[933px] h-[933px] rounded-full bg-[#fee1eb] opacity-30 -z-20 absolute"></div>
          </div>
          <div className="relative w-full h-full">
            <div className="absolute inset-0 bg-gradient-to-br from-white to-[#fee1eb] rounded-full flex items-center justify-center">
              <div className="text-[#522260] font-bold text-xl text-center">
                Pure Hug<br />Diaper
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-[#522260] rounded-full flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-white rounded-full"></div>
              </div>
              <h3 className="font-semibold text-lg text-[#522260] mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

