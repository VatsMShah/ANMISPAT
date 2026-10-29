import React, { useEffect, useState } from 'react';
import { Target, Compass } from 'lucide-react';

import engineerImage from '../assets/images/about-feature-new.png';
import abstractPattern from '../assets/images/about-abstract-orange.png';

export default function AboutOverviewSection() {
  const [years, setYears] = useState(25);

  useEffect(() => {
    let animationFrame;
    let restartTimeout;

    const duration = 1200;

    const animateCounters = () => {
      const startTime = performance.now();

      const update = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const easedProgress = 1 - Math.pow(1 - progress, 4);

        setYears(Math.round(25 * easedProgress));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(update);
        }
      };

      animationFrame = requestAnimationFrame(update);
    };

    const interval = setInterval(() => {
      cancelAnimationFrame(animationFrame);

      setYears(0);

      restartTimeout = setTimeout(() => {
        animateCounters();
      }, 80);
    }, 15000);

    return () => {
      cancelAnimationFrame(animationFrame);
      clearInterval(interval);
      clearTimeout(restartTimeout);
    };
  }, []);

  return (
    <section
      id="about-overview"
      className="relative overflow-hidden bg-white px-6 py-12 md:px-10 md:py-16 lg:px-14 lg:py-18"
    >
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-start gap-12 lg:grid-cols-[1fr_1fr] lg:gap-10">

        {/* =====================================================
            LEFT CONTENT
        ===================================================== */}
        <div className="relative z-10">

          {/* Main Heading */}
          <h2 className="max-w-[650px] text-[34px] font-extrabold leading-[1.12] tracking-[-0.035em] sm:text-[38px] md:text-[42px] lg:text-[46px]">
            <span className="block text-[#f36f35]">
              Built on Trust,
            </span>

            <span className="block text-[#111827]">
              Driven by Steel Expertise
            </span>
          </h2>


          {/* Description */}
          <div className="mt-6 flex max-w-[600px] items-start gap-4">

            <div className="h-[62px] w-[62px] shrink-0 overflow-hidden rounded-[15px] shadow-[0_5px_18px_rgba(0,0,0,0.08)]">
              <img
                src={abstractPattern}
                alt="Engineering abstract"
                className="h-full w-full object-cover"
              />
            </div>

            <p className="text-[13px] leading-[1.6] text-[#4b5563] sm:text-[14px]">
              ANM ISPAT PRIVATE LIMITED was founded in 2015 and has steadily grown into a trusted steel industry player through dependable supply, expanding dealership capabilities, and ethical business practices.
            </p>

          </div>


          {/* =================================================
              MISSION & VISION CARDS (ELEVATED DESIGN)
          ================================================= */}
          <div className="mt-8 flex flex-col gap-4 max-w-[600px]">

            {/* Mission Card */}
            <div className="group relative overflow-hidden rounded-[18px] border border-gray-100/90 bg-gradient-to-r from-[#fff7f2] via-white to-white p-4 sm:p-5 shadow-[0_6px_20px_rgba(243,111,53,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(243,111,53,0.12)] hover:border-[#f36f35]/30">
              {/* Left Accent Bar */}
              <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-[#f36f35] to-[#ff9865] rounded-l-full" />

              <div className="flex items-start gap-4 pl-1">
                {/* Icon Tile */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-white text-[#f36f35] shadow-[0_4px_12px_rgba(243,111,53,0.14)] border border-[#f36f35]/20 transition-transform duration-300 group-hover:scale-105">
                  <Target className="h-[22px] w-[22px]" strokeWidth={2.2} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#f36f35]/10 px-2.5 py-0.5 text-[11px] font-black uppercase tracking-widest text-[#f36f35]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#f36f35] animate-pulse" />
                      Our Mission
                    </span>
                  </div>

                  <p className="mt-2 text-[13.5px] sm:text-[14px] font-medium leading-[1.55] text-[#374151]">
                    Empowering businesses with high-quality services for sustainable growth.
                  </p>
                </div>
              </div>
            </div>

            {/* Vision Card */}
            <div className="group relative overflow-hidden rounded-[18px] border border-gray-100/90 bg-gradient-to-r from-[#f4f7fd] via-white to-white p-4 sm:p-5 shadow-[0_6px_20px_rgba(59,82,164,0.05)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_rgba(59,82,164,0.12)] hover:border-[#3b52a4]/30">
              {/* Left Accent Bar */}
              <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-[#3b52a4] to-[#6384db] rounded-l-full" />

              <div className="flex items-start gap-4 pl-1">
                {/* Icon Tile */}
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[12px] bg-white text-[#3b52a4] shadow-[0_4px_12px_rgba(59,82,164,0.14)] border border-[#3b52a4]/20 transition-transform duration-300 group-hover:scale-105">
                  <Compass className="h-[22px] w-[22px]" strokeWidth={2.2} />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[#3b52a4]/10 px-2.5 py-0.5 text-[11px] font-black uppercase tracking-widest text-[#3b52a4]">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#3b52a4]" />
                      Our Vision
                    </span>
                  </div>

                  <p className="mt-2 text-[13.5px] sm:text-[14px] font-medium leading-[1.55] text-[#374151]">
                    To lead globally in industrial services with new standards.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>


        {/* =====================================================
            RIGHT — HIGH-END MODERN INDUSTRIAL COMPOSITE
        ===================================================== */}
        <div className="relative flex w-full flex-col items-center justify-start lg:items-end">

          {/* Ambient Warm Radial Background Glow */}
          <div className="pointer-events-none absolute top-1/2 left-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-[#fff0e8] via-[#fdeee9] to-transparent blur-3xl opacity-80" />

          {/* MAIN HERO IMAGE - Enlarged, starts in parallel with 'Built on Trust' and ends flush with the Vision Card */}
          <div className="group relative z-20 flex w-full max-w-[390px] sm:max-w-[430px] lg:max-w-[460px] h-[430px] sm:h-[470px] lg:h-[490px] items-start justify-center transition-all duration-500 hover:-translate-y-1 -mt-2 lg:-mt-3">
            <img
              src={engineerImage}
              alt="Industrial Engineering Specialist"
              className="h-full w-full object-contain object-top drop-shadow-[0_20px_35px_rgba(0,0,0,0.18)] transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>


          {/* =================================================
              STATS CARD (25+ YEARS)
          ================================================= */}
          <div
            className="
              absolute
              bottom-[-16px]
              left-1/2
              z-30
              w-[280px]
              -translate-x-1/2
              sm:w-[320px]
              lg:left-[-8%]
              lg:translate-x-0
            "
          >
            <div
              className="
                rounded-[20px]
                border
                border-gray-100
                bg-white
                px-6
                py-5
                shadow-[0_20px_50px_rgba(0,0,0,0.13)]
              "
            >

              {/* Animated Stats - 25+ Years (Enlarged) */}
              <div className="flex items-baseline gap-2.5">

                <span
                  className="
                    text-[48px] sm:text-[54px]
                    font-black
                    leading-none
                    tracking-tight
                    text-[#f36f35]
                  "
                >
                  {years}+
                </span>

                <span
                  className="
                    text-[24px] sm:text-[26px]
                    font-extrabold
                    leading-none
                    tracking-tight
                    text-[#111827]
                  "
                >
                  Years
                </span>

              </div>


              {/* Divider */}
              <div className="my-3.5 h-px bg-gray-100" />


              {/* Card Heading */}
              <h3
                className="
                  text-[17px]
                  font-extrabold
                  leading-[1.2]
                  tracking-[-0.025em]
                  text-[#111827]
                "
              >
                Decades of Trust & Excellence.
              </h3>


              {/* Card Description */}
              <p
                className="
                  mt-1.5
                  text-[12px]
                  leading-[1.55]
                  text-[#667085]
                "
              >
                Combining over 25 years of technical expertise with a commitment to safety, precision, and client satisfaction.
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}