import React, { useEffect, useState } from 'react';

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
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-10">

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
              MISSION & VISION
          ================================================= */}
          <div className="mt-7 flex flex-col gap-3 max-w-[600px]">

            {/* Mission */}
            <div className="flex items-start gap-3.5 rounded-[15px] border border-gray-100 bg-[#fbfbfc] p-3.5 sm:p-4 shadow-[0_4px_14px_rgba(0,0,0,0.03)] hover:border-[#f36f35]/30 transition-all">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px] bg-[#fff1eb] text-[#f36f35]">
                <svg
                  className="h-[18px] w-[18px]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="12" r="9" strokeWidth="2" />
                  <circle cx="12" cy="12" r="5" strokeWidth="2" />
                  <circle cx="12" cy="12" r="1" fill="currentColor" />
                </svg>
              </div>

              <div>
                <h4 className="text-[13px] font-extrabold uppercase tracking-wider text-[#f36f35]">
                  Mission
                </h4>

                <p className="mt-0.5 text-[13px] sm:text-[14px] leading-[1.5] text-[#374151]">
                  Empowering businesses with high-quality services for sustainable growth.
                </p>
              </div>
            </div>

            {/* Vision */}
            <div className="flex items-start gap-3.5 rounded-[15px] border border-gray-100 bg-[#fbfbfc] p-3.5 sm:p-4 shadow-[0_4px_14px_rgba(0,0,0,0.03)] hover:border-[#3b52a4]/30 transition-all">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px] bg-[#ebf0ff] text-[#3b52a4]">
                <svg
                  className="h-[18px] w-[18px]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>

              <div>
                <h4 className="text-[13px] font-extrabold uppercase tracking-wider text-[#3b52a4]">
                  Vision
                </h4>

                <p className="mt-0.5 text-[13px] sm:text-[14px] leading-[1.5] text-[#374151]">
                  To lead globally in industrial services with new standards.
                </p>
              </div>
            </div>

          </div>

        </div>


        {/* =====================================================
            RIGHT — HIGH-END MODERN INDUSTRIAL COMPOSITE
        ===================================================== */}
        <div className="relative flex h-[500px] w-full items-center justify-center lg:h-[520px]">

          {/* Ambient Warm Radial Background Glow */}
          <div className="absolute top-1/2 left-1/2 h-[380px] w-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-tr from-[#fff0e8] via-[#fdeee9] to-transparent blur-2xl opacity-80" />

          {/* MAIN HERO IMAGE */}
          <div className="group relative z-20 flex h-[430px] w-[330px] sm:w-[360px] items-center justify-center transition-all duration-500 hover:-translate-y-1">
            <img
              src={engineerImage}
              alt="Industrial Engineering Specialist"
              className="h-full w-full object-contain object-center drop-shadow-[0_20px_35px_rgba(0,0,0,0.18)] transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </div>


          {/* =================================================
              STATS CARD (25+ YEARS ENLARGED, 100% REMOVED)
          ================================================= */}
          <div
            className="
              absolute
              bottom-[-10px]
              left-1/2
              z-40
              w-[280px]
              -translate-x-1/2
              sm:w-[320px]
              lg:left-[-5%]
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