import React from 'react';

export default function AboutOverview() {
  return (
    <section className="relative w-full bg-white py-16 lg:py-24 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#3b52a4] mb-4 tracking-tight">
          Leading the Steel Industry with Vision & Excellence
        </h2>

        <p className="text-sm md:text-base text-[#4c4c4c] leading-relaxed max-w-3xl mx-auto mb-6">
          ANM's wide product range and end-to-end solutions have made it India's largest private sector dealer in the Iron and Steel Industry. ANM Ispat is a key distribution and sheet-metal processing arm of the Abhay Ispat Group — a 75+ year legacy enterprise in India's steel industry.
        </p>

        <div className="flex items-center justify-center gap-3 my-4">
          <div className="flex items-center">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#f25c2b]/40" />
            <div className="w-2.5 h-2.5 rotate-45 bg-[#3b52a4]" />
          </div>

<div className="button-borders">
            <a
              href="#about"
              className="primary-button block"
            >
              About us
            </a>
          </div>

          <div className="flex items-center">
            <div className="w-2.5 h-2.5 rotate-45 bg-[#3b52a4]" />
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#f25c2b]/40" />
          </div>
        </div>
      </div>
    </section>
  );
}