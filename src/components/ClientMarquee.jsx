import React from 'react';

import astrumLogo from '../assets/images/tata-astrum.png';
import astrumSuperLogo from '../assets/images/tata-astrum-super.png';
import steeliumLogo from '../assets/images/tata-steelium.png';
import steeliumSuperLogo from '../assets/images/tata-steelium-super.png';
import koshLogo from '../assets/images/tata-kosh.png';
import wironLogo from '../assets/images/tata-wiron.png';
import galvanoLogo from '../assets/images/galvano.png';

const clientLogos = [
  { name: 'Tata Astrum', sub: 'HR SHEETS AND COILS', src: astrumLogo },
  { name: 'Galvano', sub: 'COATED PRODUCTS', src: galvanoLogo },
  { name: 'Tata Astrum Super', sub: 'HR SHEETS', src: astrumSuperLogo },
  { name: 'Tata Steelium Super', sub: 'CR SHEETS', src: steeliumSuperLogo },
  { name: 'Tata Steelium', sub: 'CR SHEETS AND COILS', src: steeliumLogo },
  { name: 'Tata Kosh', sub: 'NAAM EK. KAAM ANEK.', src: koshLogo },
  { name: 'Tata Wiron', sub: '#STRENGTHENINGTOMORROW', src: wironLogo },
];

function MarqueeLogo({ logo }) {
  return (
    <div className="group flex items-center justify-center px-8 sm:px-14 shrink-0">
      <img
        src={logo.src}
        alt={logo.name}
        className="anm-marquee-logo h-11 sm:h-14 lg:h-[4.5rem] w-auto object-contain"
      />
    </div>
  );
}

export default function ClientMarquee() {
  const doubledLogos = [...clientLogos, ...clientLogos];

  return (
    <section className="anm-marquee relative bg-white pt-8 sm:pt-8 pb-12 sm:pb-16 overflow-hidden">
      <h2 className="text-center text-sm sm:text-base font-light tracking-widest text-gray-500 mb-6">
        Our Clients
      </h2>
      <div className="anm-marquee-mask overflow-hidden">
        <div className="anm-marquee-track">
          {doubledLogos.map((logo, index) => (
            <MarqueeLogo key={index} logo={logo} />
          ))}
        </div>
      </div>
    </section>
  );
}