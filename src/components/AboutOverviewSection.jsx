import React, { useEffect, useState } from 'react';

import engineerImage from '../assets/images/about-overview-engineer.png';
import abstractPattern from '../assets/images/about-abstract-orange.png';

export default function AboutOverviewSection() {
  const [years, setYears] = useState(0);
  const [commitment, setCommitment] = useState(0);

  useEffect(() => {
    let animationFrame;
    let restartTimeout;

    const duration = 1400;

    const animateCounters = () => {
      const startTime = performance.now();

      const update = (currentTime) => {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const easedProgress = 1 - Math.pow(1 - progress, 4);

        setYears(Math.round(25 * easedProgress));
        setCommitment(Math.round(100 * easedProgress));

        if (progress < 1) {
          animationFrame = requestAnimationFrame(update);
        }
      };

      animationFrame = requestAnimationFrame(update);
    };

    animateCounters();

    const interval = setInterval(() => {
      cancelAnimationFrame(animationFrame);

      setYears(0);
      setCommitment(0);

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
      className="relative overflow-hidden bg-white px-6 py-10 md:px-10 md:py-12 lg:px-14 lg:py-14"
    >
      <div className="mx-auto grid max-w-[1180px] grid-cols-1 items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-10">

        {/* =====================================================
            LEFT CONTENT
        ===================================================== */}
        <div className="relative z-10">

          {/* Main Heading */}
          <h2 className="max-w-[650px] text-[38px] font-extrabold leading-[1] tracking-[-0.045em] sm:text-[44px] md:text-[50px] lg:text-[54px]">
            <span className="block text-[#f36f35]">
              Driving scale through
            </span>

            <span className="block text-[#111827]">
              intelligent steel distribution.
            </span>
          </h2>


          {/* Description */}
          <div className="mt-6 flex max-w-[600px] items-center gap-4">

            <div className="h-[62px] w-[62px] shrink-0 overflow-hidden rounded-[15px] shadow-[0_5px_18px_rgba(0,0,0,0.08)]">
              <img
                src={abstractPattern}
                alt="Engineering abstract"
                className="h-full w-full object-cover"
              />
            </div>

            <p className="text-[13px] leading-[1.55] text-[#4b5563] md:text-[14px]">
              We empower global enterprises by delivering world-class
              manufacturing precision, sustainable engineering solutions,
              and uncompromised industrial quality across every project.
            </p>

          </div>


          {/* =================================================
              SMALL STATS
          ================================================= */}
          <div className="mt-6 flex flex-wrap gap-3">

            {/* ISO 9001 */}
            <div className="flex items-center gap-3 rounded-[15px] border border-gray-100 bg-white px-3.5 py-2.5 shadow-[0_5px_18px_rgba(0,0,0,0.04)]">

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px] bg-[#fff1eb] text-[#f36f35]">
                <svg
                  className="h-[18px] w-[18px]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>

              <div>
                <h4 className="text-[15px] font-extrabold leading-none text-[#111827]">
                  ISO 9001
                </h4>

                <p className="mt-1 text-[10px] font-medium text-[#667085]">
                  Global Quality Certified
                </p>
              </div>

            </div>


            {/* Projects */}
            <div className="flex items-center gap-3 rounded-[15px] border border-gray-100 bg-white px-3.5 py-2.5 shadow-[0_5px_18px_rgba(0,0,0,0.04)]">

              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[11px] bg-[#fff1eb] text-[#f36f35]">
                <svg
                  className="h-[18px] w-[18px]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0h5m-5 0V11m0 0h5m-5 0H7"
                  />
                </svg>
              </div>

              <div>
                <h4 className="text-[15px] font-extrabold leading-none text-[#111827]">
                  2,500+
                </h4>

                <p className="mt-1 text-[10px] font-medium text-[#667085]">
                  Projects Completed
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

          {/* Architectural Blueprint Dot Grid */}
          <div
            className="absolute right-4 top-6 h-[180px] w-[180px] opacity-25"
            style={{
              backgroundImage: 'radial-gradient(#111827 1.2px, transparent 1.2px)',
              backgroundSize: '16px 16px',
            }}
          />

          {/* Decorative Corner Framing Element */}
          <div className="absolute right-2 top-2 h-24 w-24 rounded-tr-3xl border-r-2 border-t-2 border-[#f36f35]/40" />


          {/* MAIN HERO IMAGE CONTAINER */}
          <div className="group relative z-20 h-[430px] w-[320px] sm:w-[350px] overflow-hidden rounded-[28px] border-4 border-white bg-[#0f172a] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.25)] transition-all duration-500 hover:-translate-y-1">
            
            <img
              src={engineerImage}
              alt="Industrial Engineering Specialist"
              className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
            />

          </div>


          {/* =================================================
              STATS CARD (UNTOUCHED LOGIC & STRUCTURE)
          ================================================= */}
          <div
            className="
              absolute
              bottom-[-10px]
              left-1/2
              z-40
              w-[280px]
              -translate-x-1/2
              sm:w-[315px]
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
                px-5
                py-5
                shadow-[0_20px_50px_rgba(0,0,0,0.13)]
              "
            >

              {/* Animated Stats */}
              <div className="flex items-center gap-7">

                <span
                  className="
                    text-[28px]
                    font-extrabold
                    leading-none
                    tracking-[-0.04em]
                    text-[#f36f35]
                  "
                >
                  {years}+
                </span>

                <span
                  className="
                    text-[28px]
                    font-extrabold
                    leading-none
                    tracking-[-0.04em]
                    text-[#f36f35]
                  "
                >
                  {commitment}%
                </span>

              </div>


              {/* Divider */}
              <div className="my-4 h-px bg-gray-100" />


              {/* Card Heading */}
              <h3
                className="
                  text-[18px]
                  font-extrabold
                  leading-[1.15]
                  tracking-[-0.025em]
                  text-[#111827]
                "
              >
                Decades of Trust & Excellence.
              </h3>


              {/* Card Description */}
              <p
                className="
                  mt-2
                  text-[11px]
                  leading-[1.55]
                  text-[#667085]
                "
              >
                Combining over 25 years of technical expertise with a 100%
                commitment to safety, precision, and client satisfaction.
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}