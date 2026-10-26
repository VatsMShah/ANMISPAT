import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import navinMehtaImg from '../assets/images/navin-mehta.png';

export default function FounderChairman() {
  // Ensure page scrolls to top on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative w-full overflow-hidden font-sans bg-white text-[#111827]">
      
      {/* =====================================================
          1. FOUNDER PHOTO COVERING WHOLE SECTION
          The founder photo covers the entire section background.
          Left side: Quote and signature ("Mr. Navin Mehta")
          Right side: Timeline text ("1953 - 2022")
      ====================================================== */}
      <section className="relative w-full overflow-hidden bg-[#e9eff4] border-b border-gray-200 min-h-[580px] sm:min-h-[640px] md:min-h-[700px] lg:min-h-[780px] xl:min-h-[820px] flex items-center">
        
        {/* Full-bleed Founder Photo Background */}
        <div className="absolute inset-0 z-0">
          <img
            src={navinMehtaImg}
            alt="Mr. Navin Mehta - Founder Chairman"
            className="w-full h-full object-cover object-[52%_center] select-none"
          />
          {/* Gentle vignette to ensure razor-sharp typography against glass reflections */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/40 via-transparent to-white/40 pointer-events-none" />
        </div>

        {/* Content Container Overlaying the Photo */}
        <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 py-12 sm:py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
            
            {/* -------------------------------------------------
                LEFT SIDE: QUOTE & SIGNATURE
                Directly matching uploaded reference image
            -------------------------------------------------- */}
            <div className="lg:col-span-5 flex flex-col justify-center">
              
              <div className="bg-white/80 backdrop-blur-sm p-6 sm:p-8 rounded-2xl border border-white/70 shadow-sm lg:bg-transparent lg:backdrop-blur-none lg:p-0 lg:border-0 lg:shadow-none max-w-[460px]">
                
                {/* Decorative Opening Double Quote */}
                <div className="text-gray-900 mb-2 sm:mb-4">
                  <svg className="w-10 h-10 sm:w-12 sm:h-12 text-[#1f2937] fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* The Quote Statement */}
                <blockquote className="text-xl sm:text-2xl lg:text-[26px] font-sans font-medium text-[#111827] leading-[1.38] tracking-tight drop-shadow-sm">
                  Vision does not only see the invisible; it makes the invisible visible through relentless pursuit.
                </blockquote>

                {/* Decorative Closing Double Quote */}
                <div className="flex justify-end mt-2 pr-2">
                  <svg className="w-10 h-10 sm:w-12 sm:h-12 text-[#1f2937] fill-current rotate-180" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>

                {/* Stately Serif Signature Name */}
                <div className="mt-6 sm:mt-8 pt-2">
                  <div className="font-serif">
                    <span className="block text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#1f2937] leading-[1.05] tracking-tight drop-shadow-sm">
                      Mr. Navin
                    </span>
                    <span className="block text-4xl sm:text-5xl lg:text-[54px] font-bold text-[#1f2937] leading-[1.05] tracking-tight pl-10 sm:pl-16 drop-shadow-sm">
                      Mehta
                    </span>
                  </div>
                </div>

              </div>

            </div>

            {/* -------------------------------------------------
                CENTER: SPACER
                Leaves Mr. Navin Mehta's portrait clearly visible
            -------------------------------------------------- */}
            <div className="hidden lg:block lg:col-span-3 min-h-[300px]" aria-hidden="true" />

            {/* -------------------------------------------------
                RIGHT SIDE: TIMELINE TEXT (1953 - 2022)
                Directly matching uploaded reference image
            -------------------------------------------------- */}
            <div className="lg:col-span-4 flex items-center justify-start lg:justify-end">
              <div className="bg-white/75 backdrop-blur-sm px-6 py-3 rounded-2xl border border-white/60 shadow-sm lg:bg-transparent lg:backdrop-blur-none lg:p-0 lg:border-0 lg:shadow-none">
                <span className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] xl:text-[76px] font-bold text-[#242424] tracking-tight font-sans select-none leading-none drop-shadow-sm">
                  1953 - 2022
                </span>
              </div>
            </div>

          </div>
        </div>

      </section>

      {/* =====================================================
          3. SECTION 2: EDITORIAL CONTENT (Based on Design Reference)
          Style Reference: Antique paper / ivory background (#FAF7F2),
          terracotta italic serif headline, 2-column editorial layout
          with strategic bolding and highlight callout.
      ====================================================== */}
      <section className="relative py-16 sm:py-24 bg-[#FAF7F2] text-[#2c2c2c] overflow-hidden border-b border-[#ebdcd0]">
        
        {/* Subtle Decorative Geometric Cut in Top-Right Corner (like reference image) */}
        <div className="absolute top-0 right-0 w-48 sm:w-72 h-20 sm:h-28 bg-[#ece5dc] -skew-y-6 origin-top-right -z-0 opacity-40 pointer-events-none" />

        <div className="max-w-[1360px] mx-auto px-6 sm:px-8 md:px-12 relative z-10">
          
          {/* Section Eyebrow & Main Terracotta Serif Italic Headline */}
          <div className="mb-10 sm:mb-14">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-[#b83e28]/85 block mb-2">
              A Legacy Built on Vision, Integrity &amp; Excellence
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-serif italic text-[#BA3C2A] font-semibold leading-[1.22] max-w-5xl tracking-tight">
              His foresight built more than a company —<br className="hidden sm:inline" />
              it built the values that guide ANM Ispat into its future
            </h2>
          </div>

          {/* 2-Column Editorial Grid with Bold Emphasis */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 lg:gap-16 text-[15px] sm:text-[16px] leading-[1.8] text-[#3d3d3d]">
            
            {/* COLUMN 1 */}
            <div className="space-y-6">
              <p>
                The story of ANM Ispat is deeply rooted in the vision and values of{' '}
                <strong className="font-bold text-[#111111]">Mr. Navin Mehta</strong>, a distinguished leader whose{' '}
                <strong className="font-bold text-[#111111]">discipline, foresight, and unwavering commitment</strong> to the steel industry helped shape a lasting legacy.
              </p>

              <p>
                His journey in steel representation began in 1972, driven by a{' '}
                <strong className="font-bold text-[#111111]">passion for the industry</strong> and a belief in{' '}
                <strong className="font-bold text-[#111111]">building relationships founded on trust</strong>. With the establishment of Abhay Enterprise in 1978, he laid the groundwork for an enterprise that would evolve into a respected name in the steel sector, guided by the principles of{' '}
                <strong className="font-bold text-[#111111]">transparency, ethical business practices, and long-term vision</strong>.
              </p>

              <p>
                For Mr. Mehta, success was never measured by scale alone. It was defined by the{' '}
                <strong className="font-bold text-[#111111]">strength of relationships</strong>, the{' '}
                <strong className="font-bold text-[#111111]">integrity of every transaction</strong>, and the ability to create lasting value for customers, employees, and business partners. His meticulous approach to management,{' '}
                <strong className="font-bold text-[#111111]">financial discipline</strong>, and forward-thinking leadership established a culture where{' '}
                <strong className="font-bold text-[#111111]">sustainable growth went hand in hand with accountability</strong>.
              </p>
            </div>

            {/* COLUMN 2 */}
            <div className="space-y-6">
              <p>
                His vision extended beyond building businesses. He sought to contribute to{' '}
                <strong className="font-bold text-[#111111]">India's industrial progress</strong> by strengthening the steel value chain and fostering an environment where{' '}
                <strong className="font-bold text-[#111111]">trust, reliability, and excellence</strong> remained at the heart of every endeavour.
              </p>

              <p>
                Today, the values championed by Mr. Navin Mehta continue to inspire the next generation, shaping the ethos and aspirations of{' '}
                <strong className="font-bold text-[#111111]">ANM Ispat</strong> as it looks towards the future. His legacy serves as a reminder that enduring institutions are built not merely through ambition, but through{' '}
                <strong className="font-bold text-[#111111]">principles that stand the test of time</strong>.
              </p>

              <p>
                His philosophy remains timeless:{' '}
                <strong className="font-bold text-[#111111]">
                  Dream Big. Innovate Continuously. Act with Purpose. Plan for Tomorrow. Strive for Excellence.
                </strong>
              </p>

              <p>
                At ANM Ispat, this{' '}
                <strong className="font-bold text-[#111111]">enduring spirit of vision and integrity</strong> continues to guide the journey ahead —{' '}
                <strong className="font-bold text-[#111111]">honouring a legacy while building new possibilities</strong> for the future of steel.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          4. FOOTER TRIBUTE NAVIGATION
      ====================================================== */}
      <section className="py-12 bg-white">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-8 md:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-gray-900">
              Discover More About ANM Ispat
            </h4>
            <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
              Explore our journey, infrastructure, and nationwide supply chain capabilities.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 text-gray-700 text-xs sm:text-sm font-bold hover:border-[#f36f35] hover:text-[#f36f35] transition-colors"
            >
              About Overview
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#f36f35] text-white text-xs sm:text-sm font-bold hover:brightness-95 shadow-sm transition-all"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
