import React from 'react';

import clientLogo1 from '../assets/clients-images/1.png';
import clientLogo2 from '../assets/clients-images/2.png';
import clientLogo3 from '../assets/clients-images/3.png';
import clientLogo4 from '../assets/clients-images/4.png';
import clientLogo5 from '../assets/clients-images/5.png';
import clientLogo6 from '../assets/clients-images/6.png';
import clientLogo7 from '../assets/clients-images/7.png';

const clientLogos = [
  { name: 'Tata Motors', src: clientLogo1 },
  { name: 'Mahindra', src: clientLogo2 },
  { name: 'Lodha', src: clientLogo3 },
  { name: 'Maruti Suzuki', src: clientLogo4 },
  { name: 'Adani Realty', src: clientLogo5 },
  { name: 'Raymond Realty', src: clientLogo6 },
  { name: 'Oberoi Realty', src: clientLogo7 },
];

function MarqueeLogo({ logo }) {
  return (
    <div className="group flex items-center justify-center px-8 sm:px-14 shrink-0">
      <img
        src={logo.src}
        alt={logo.name}
        className="anm-marquee-logo h-14 sm:h-20 lg:h-[6rem] w-auto object-contain"
      />
    </div>
  );
}

export default function ClientMarquee() {
  const doubledLogos = [...clientLogos, ...clientLogos];

  return (
    <section className="anm-marquee relative bg-white pt-8 sm:pt-8 pb-6 sm:pb-8 overflow-hidden">
      <h2 className="text-center text-sm sm:text-base font-light tracking-widest text-gray-500 mb-3">
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