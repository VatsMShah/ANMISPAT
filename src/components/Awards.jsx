import React from 'react';

// Import your local trophy image
import trophySample from '../assets/awards-images/trophy-sample.png';

const awardsData = [
  {
    id: 1,
    title: 'Excellence in Fabrication',
    description: 'Recognized for top-tier manufacturing precision and high-grade safety standards.',
    image: trophySample,
    alt: 'Excellence in Fabrication Award'
  },
  {
    id: 2,
    title: 'Industrial Innovation',
    description: 'Honored for pioneering sustainable metal processing techniques and smart solutions.',
    image: trophySample,
    alt: 'Industrial Innovation Award'
  },
  {
    id: 3,
    title: 'Quality Benchmark',
    description: 'Awarded for maintaining global ISO standards across large-scale infrastructure.',
    image: trophySample,
    alt: 'Quality Benchmark Award'
  },
  {
    id: 4,
    title: 'Best Corporate Supplier',
    description: 'Voted top reliable partner for industrial infrastructure, supply chains, and trust.',
    image: trophySample,
    alt: 'Best Corporate Supplier Award'
  }
];

export default function Awards() {
  return (
    <section id="awards" className="relative w-full overflow-hidden font-sans border-t border-b border-gray-200">
      
      {/* UPPER HALF: Backdrop Wall */}
      <div className="relative bg-[#f8f9fa] pt-20 pb-0 px-6">
        
        {/* Soft Radial Backlight Glow behind trophies */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[900px] h-[300px] bg-gradient-to-t from-[#fde8dc]/80 via-[#fde8dc]/30 to-transparent rounded-full blur-3xl pointer-events-none" />

        {/* Section Header */}
        <div className="max-w-[1280px] mx-auto text-center relative z-10 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#fdeee9] border border-[#fbd8cb] mb-4">
            <span className="w-2 h-2 rounded-full bg-[#f36f35] animate-pulse" />
            <span className="font-badge text-[11px] font-extrabold tracking-widest uppercase text-[#f36f35]">
              OUR ACCOLADES
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-extrabold text-[#111827] tracking-tight leading-tight mb-3">
            Recognized for <span className="text-[#f36f35]">Excellence & Quality</span>
          </h2>

          <p className="text-sm md:text-[15px] text-[#666666] leading-relaxed max-w-xl mx-auto">
            Our commitment to quality, safety, and cutting-edge industrial solutions has earned us prestigious recognition across global manufacturing standards.
          </p>
        </div>

        {/* Trophy Row Alignment */}
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-20">
          {awardsData.map((award) => (
            <div 
              key={award.id} 
              className="flex flex-col items-center group cursor-default"
            >
              <div className="relative w-full h-52 md:h-60 flex flex-col items-center justify-end">
                
                {/* Trophy Image (Bottom edge aligned directly to the seam) */}
                <img 
                  src={award.image} 
                  alt={award.alt}
                  className="max-h-44 md:max-h-52 object-contain relative z-20 transition-transform duration-500 ease-out group-hover:-translate-y-2 group-hover:scale-102"
                />

                {/* --- SHADOW SYSTEM FOR PLATFORM REALISM --- */}
                
                {/* 1. Tight Ground Contact Shadow (Dark core directly under the base) */}
                <div className="w-24 h-1.5 bg-black/50 rounded-[100%] blur-[1.5px] relative z-20 -mt-1 transition-all duration-500 group-hover:w-20 group-hover:bg-black/30 group-hover:scale-95" />

                {/* 2. Soft Floor Ambient Drop Shadow (Spreads out onto the white platform below) */}
                <div className="w-36 h-4 bg-black/20 rounded-[100%] blur-md relative z-10 -mt-3.5 transition-all duration-500 group-hover:w-44 group-hover:bg-[#f36f35]/20 group-hover:blur-lg" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PLATFORM HORIZON SEAM: Sharp border line acting as the shelf edge */}
      <div className="w-full border-t border-gray-300/80 shadow-[0_6px_16px_rgba(0,0,0,0.04)] relative z-30" />

      {/* LOWER HALF: White Platform Base for Titles & Copy */}
      <div className="bg-white pt-8 pb-20 px-6 relative z-10">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {awardsData.map((award) => (
            <div key={award.id} className="flex flex-col items-center px-4">
              <h3 className="text-lg font-extrabold text-[#111827] mb-2 tracking-tight group-hover:text-[#f36f35] transition-colors">
                {award.title}
              </h3>
              <p className="text-xs text-[#666666] leading-relaxed max-w-[220px]">
                {award.description}
              </p>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}