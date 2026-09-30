import React from 'react';
import { ArrowRight } from 'lucide-react';

import bgImage from '../assets/images/about-overview-bg.png';
import leftImg from '../assets/images/second-sec-left.png';
import rightImg from '../assets/images/second-sec-right.png';
import steelCoilImg from '../assets/images/steel-coil-second-sec.png';

export default function AboutOverview() {
  return (
    <>
    <style>{`
      @keyframes anm-fade-up {
        from { opacity: 0; transform: translateY(30px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .anm-load-fade-up {
        animation: anm-fade-up 1.2s ease-out both;
      }
    `}</style>
    <section
      id="company"
      className="relative w-full bg-cover bg-center pt-16 lg:pt-20 pb-0 overflow-hidden flex flex-col justify-between"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* 1. Header Copy & Action Button */}
      <div className="relative max-w-4xl mx-auto px-6 text-center z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#3b52a4] mb-4 tracking-tight">
          Leading the Steel Industry with Vision & Excellence
        </h2>

        <p className="text-sm md:text-base text-[#4c4c4c] leading-relaxed max-w-3xl mx-auto mb-6">
          ANM's wide product range and end-to-end solutions have made it India's largest private sector dealer in the Iron and Steel Industry. ANM Ispat is a key distribution and sheet-metal processing arm of the Abhay Ispat Group - a 75+ year legacy enterprise in India's steel industry.
        </p>

        <div className="flex items-center justify-center gap-3 my-4">
          <div className="flex items-center">
            <div className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#f36f35]/40" />
            <div className="w-2.5 h-2.5 rotate-45 bg-[#3b52a4]" />
          </div>

            <a
              href="#about"
              className="bg-gradient-to-r from-[#f36f35] via-[#f36f35] to-[#f36f35] text-white font-bold text-sm px-7 py-3.5 rounded shadow-lg hover:shadow-[#f36f35]/25 hover:-translate-y-0.5 transition-all flex items-center gap-2"
            >
              <span>About us</span>
              <ArrowRight size={16} />
            </a>

          <div className="flex items-center">
            <div className="w-2.5 h-2.5 rotate-45 bg-[#3b52a4]" />
            <div className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#f36f35]/40" />
          </div>
        </div>
      </div>

      {/* 2. Overlapping Visual Centerpiece - Flush to Bottom */}
      <div className="max-w-[1280px] w-full mx-auto px-6 mt-12 relative flex items-end justify-center h-[280px] sm:h-[340px] anm-load-fade-up">

        {/* RADIAL GLOW RING - Orange arc/halo around top of coil (Layer 0) */}
        <div
          aria-hidden="true"
          className="absolute left-1/2 -translate-x-1/2 top-[-80px] sm:top-[-120px] w-[800px] h-[600px] sm:w-[1000px] sm:h-[750px] lg:w-[1100px] lg:h-[820px] z-0 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 500px 400px at 50% 100%,' +
              'rgba(243, 111, 53, 0) 0%,' +
              'rgba(243, 111, 53, 0) 30%,' +
              'rgba(243, 111, 53, 0.12) 45%,' +
              'rgba(243, 111, 53, 0.22) 55%,' +
              'rgba(243, 111, 53, 0.50) 65%,' +
              'rgba(243, 111, 53, 0.90) 75%,' +
              '#f36f35 82%,' +
              '#f36f35 87%,' +
              'rgba(243, 111, 53, 0.70) 92%,' +
              'rgba(243, 111, 53, 0.25) 97%,' +
              'rgba(243, 111, 53, 0) 100%)',
          }}
        />

        {/* LEFT IMAGE (Layer 1 - z-10) - positioned higher than right */}
        <div className="absolute left-4 md:left-8 lg:left-12 bottom-12 sm:bottom-16 z-10 w-[36%] max-w-[400px] hidden md:block group anm-load-fade-up" style={{ animationDelay: '0.25s' }}>
          <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-white transition-transform duration-500 ease-out group-hover:scale-[1.03] group-hover:-translate-y-2 group-hover:shadow-3xl">
            <img
              src={leftImg}
              alt="Steel Rolling Mill"
              className="w-full h-[240px] sm:h-[270px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        </div>

        {/* CENTRAL STEEL COIL - Orange contour glow */}
        <div className="relative z-30 pointer-events-none flex items-end justify-center h-full">

          {/* Orange glow behind the actual coil silhouette */}
          <img
            src={steelCoilImg}
            alt="Steel Coil"
            className="
              absolute
              w-[520px] sm:w-[620px]
              h-auto
              object-contain
              opacity-90
              blur-[1px]
              drop-shadow-[0_0_8px_rgba(243,111,53,0.95)]
              drop-shadow-[0_0_0px_rgba(243,111,53,1)]
              drop-shadow-[0_0_24px_rgba(243,111,53,0.75)]
              drop-shadow-[0_0_55px_rgba(243,111,53,0.45)]
              scale-[1.015]
            "
            aria-hidden="true"
          />

          {/* Actual steel coil */}
          <img
            src={steelCoilImg}
            alt="Steel Coil"
            className="
              relative
              w-[520px] sm:w-[620px]
              h-auto
              object-contain
              block
              leading-none
              drop-shadow-2xl
              translate-y-[2px]
            "
          />

        </div>

        {/* RIGHT IMAGE (Layer 1 - z-10) */}
        <div className="absolute right-4 md:right-8 lg:right-12 bottom-4 z-10 w-[36%] max-w-[400px] hidden md:block group anm-load-fade-up" style={{ animationDelay: '0.5s' }}>
          <div className="rounded-3xl overflow-hidden shadow-2xl border-2 border-white transition-transform duration-500 ease-out group-hover:scale-[1.03] group-hover:-translate-y-2 group-hover:shadow-3xl">
            <img
              src={rightImg}
              alt="Foundry Ladle"
              className="w-full h-[240px] sm:h-[270px] object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>
        </div>

      </div>
    </section>
    </>
  );
}