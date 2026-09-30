import React, { useEffect, useState } from 'react';

import engineerImage from '../assets/images/about-overview-engineer.png';
import abstractPattern from '../assets/images/about-abstract-orange.png';

export default function AboutOverview() {
  const [years, setYears] = useState(0);
  const [commitment, setCommitment] = useState(0);

  useEffect(() => {
    let animationFrame;
    let restartTimeout;

    const duration = 1600;

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
      className="relative overflow-hidden bg-white px-6 py-14 md:px-10 lg:px-14 lg:py-16"
    >
      <div className="mx-auto grid max-w-[1380px] grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-6">

        {/* =====================================================
            LEFT CONTENT
        ===================================================== */}
        <div className="relative z-10 lg:col-span-7">

          {/* Heading */}
          <h2 className="max-w-[720px] text-[44px] font-extrabold leading-[0.98] tracking-[-0.045em] sm:text-[52px] md:text-[60px] lg:text-[64px]">
            <span className="block text-[#f36f35]">
              Building the future of
            </span>

            <span className="block text-[#111827]">
              industry & infrastructure.
            </span>
          </h2>

          {/* Description */}
          <div className="mt-8 flex max-w-[650px] items-center gap-5">

            <div className="h-[72px] w-[72px] shrink-0 overflow-hidden rounded-[17px] shadow-[0_6px_20px_rgba(0,0,0,0.09)] md:h-[82px] md:w-[82px]">
              <img
                src={abstractPattern}
                alt="Engineering abstract"
                className="h-full w-full object-cover"
              />
            </div>

            <p className="text-[14px] leading-[1.6] text-[#4b5563] md:text-[15px]">
              We empower global enterprises by delivering world-class
              manufacturing precision, sustainable engineering solutions,
              and uncompromised industrial quality across every project.
            </p>
          </div>

          {/* =================================================
              SMALL STATS
          ================================================= */}
          <div className="mt-8 flex flex-wrap gap-4">

            {/* ISO */}
            <div className="flex items-center gap-3 rounded-[18px] border border-gray-100 bg-white px-4 py-3 shadow-[0_7px_25px_rgba(0,0,0,0.045)]">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[13px] bg-[#fff1eb] text-[#f36f35]">
                <svg
                  className="h-5 w-5"
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
                <h4 className="text-[17px] font-extrabold leading-none text-[#111827]">
                  ISO 9001
                </h4>

                <p className="mt-1.5 text-[11px] font-medium text-[#667085]">
                  Global Quality Certified
                </p>
              </div>
            </div>

            {/* Projects */}
            <div className="flex items-center gap-3 rounded-[18px] border border-gray-100 bg-white px-4 py-3 shadow-[0_7px_25px_rgba(0,0,0,0.045)]">

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[13px] bg-[#fff1eb] text-[#f36f35]">
                <svg
                  className="h-5 w-5"
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
                <h4 className="text-[17px] font-extrabold leading-none text-[#111827]">
                  2,500+
                </h4>

                <p className="mt-1.5 text-[11px] font-medium text-[#667085]">
                  Projects Completed
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            RIGHT VISUAL
        ===================================================== */}
        <div className="relative flex h-[570px] items-center justify-center lg:col-span-5">

          {/* Orange layered frame */}
          <div className="absolute right-2 top-1/2 h-[510px] w-[350px] -translate-y-1/2 md:h-[540px] md:w-[375px]">

            <div className="absolute inset-0 rounded-[30px] bg-[#d95b18]" />

            <div className="absolute inset-[9px] rounded-[26px] bg-[#ed6a25]" />

            <div className="absolute inset-[20px] rounded-[22px] border-2 border-[#ff9a62]/60" />

            <div className="absolute inset-[29px] rounded-[19px] bg-gradient-to-br from-[#ff9955] via-[#f36f35] to-[#dc5b20]" />

            {/* Decorative extensions */}
            <div className="absolute -left-[15px] top-[55px] h-[330px] w-[22px] rounded-l-[15px] bg-[#c85216]" />

            <div className="absolute -right-[12px] top-[25px] h-[105px] w-[18px] rounded-r-[12px] bg-[#c85216]" />
          </div>

          {/* Engineer */}
          <div className="relative z-10 h-[470px] w-[315px] overflow-hidden rounded-[22px] shadow-[0_20px_45px_rgba(0,0,0,0.14)] md:h-[500px] md:w-[335px] lg:-translate-y-5">

            <img
              src={engineerImage}
              alt="Industrial Engineering Specialist"
              className="h-full w-full object-cover object-center"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/5" />
          </div>

          {/* =================================================
              FLOATING CARD
          ================================================= */}
          <div className="absolute bottom-[2px] left-1/2 z-30 w-[300px] -translate-x-[48%] md:w-[350px] lg:left-[-25px] lg:translate-x-0">

            <div className="rounded-[25px] border border-gray-100 bg-white px-6 py-6 shadow-[0_20px_55px_rgba(0,0,0,0.13)]">

              {/* Animated numbers */}
              <div className="flex items-center gap-8">

                <span className="text-[30px] font-extrabold leading-none tracking-[-0.04em] text-[#f36f35] md:text-[34px]">
                  {years}+
                </span>

                <span className="text-[30px] font-extrabold leading-none tracking-[-0.04em] text-[#f36f35] md:text-[34px]">
                  {commitment}%
                </span>

              </div>

              <div className="my-4 h-px bg-gray-100" />

              <h3 className="text-[19px] font-extrabold leading-[1.2] tracking-[-0.025em] text-[#111827] md:text-[21px]">
                Decades of Trust & Excellence.
              </h3>

              <p className="mt-3 text-[12px] leading-[1.65] text-[#667085] md:text-[13px]">
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