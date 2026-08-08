//ClientStrip.jsx
import React from 'react';

// Replace these imports with your actual logo image paths in src/assets/images/logos/
// e.g., import astrumLogo from '../assets/images/logos/astrum.png';

export default function ClientStrip() {
  // Array of client logos (or fallback text styled to match if image assets aren't added yet)
  const clientLogos = [
    { name: 'Tata Astrum', sub: 'HR SHEETS AND COILS', color: 'text-[#00529b]' },
    { name: 'Galvano', sub: 'COATED PRODUCTS', color: 'text-[#00529b]' },
    { name: 'Tata Astrum Super', sub: 'HR SHEETS', color: 'text-[#4c4c4c]' },
    { name: 'Tata Steelium Super', sub: 'CR SHEETS', color: 'text-[#f25c2b]' },
    { name: 'Tata Steelium', sub: 'CR SHEETS AND COILS', color: 'text-[#00529b]' },
    { name: 'Tata Kosh', sub: 'NAAM EK. KAAM ANEK.', color: 'text-[#00529b]' },
    { name: 'Tata Wiron', sub: '#STRENGTHENINGTOMORROW', color: 'text-[#70ad47]' },
  ];

  return (
    <div className="relative z-30 max-w-[1320px] mx-auto px-4 -mt-12 sm:-mt-16">
      <div className="bg-white rounded-t-2xl sm:rounded-t-3xl shadow-xl border-t border-x border-gray-100 px-6 sm:px-10 py-6">
        <div className="flex flex-wrap items-center justify-between gap-6 md:gap-8">
          
          {/* If you have the image files saved in public/ or src/assets/ */}
          {/* You can replace this mapping with <img> tags: */}
          {/* <img src={logo.src} alt={logo.name} className="h-10 sm:h-12 object-contain" /> */}

          {clientLogos.map((logo, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <span className={`font-black text-sm sm:text-base tracking-tight font-heading ${logo.color}`}>
                {logo.name}
              </span>
              <span className="text-[9px] font-bold tracking-wider text-gray-500 font-badge mt-0.5 uppercase">
                {logo.sub}
              </span>
            </div>
          ))}

        </div>
      </div>
    </div>
  );
}