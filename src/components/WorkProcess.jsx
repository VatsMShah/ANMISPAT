import React from 'react';

import WorkProcess1 from '../assets/images/WorkProcess1.png';
import WorkProcess2 from '../assets/images/WorkProcess2.png';
import WorkProcess3 from '../assets/images/WorkProcess3.png';

export default function WorkProcess() {
  const steps = [
    {
      number: '01',
      label: 'Consultation & Planning',
      title: 'Shaping the Foundation of Success',
      description:
        'We begin by thoroughly understanding your needs, defining clear goals, and crafting solution.',
      image: WorkProcess1,
    },
    {
      number: '02',
      label: 'Execution & Implementation',
      title: 'Transforming Ideas into Tangible Results',
      description:
        'Our team applies advanced techniques, innovative technology, and precise execution.',
      image: WorkProcess2,
    },
    {
      number: '03',
      label: 'Delivery & Support',
      title: 'Committed to Quality and Continued Growth',
      description:
        'We deliver projects on time, provide continuous support, and ensure your complete satisfaction.',
      image: WorkProcess3,
    },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-white py-14 sm:py-16 md:py-20">

      {/* =====================================================
          INLINE STYLES
      ====================================================== */}
      <style>{`
        @keyframes processFadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes processLine {
          from {
            stroke-dashoffset: 1000;
          }

          to {
            stroke-dashoffset: 0;
          }
        }

        .process-fade {
          opacity: 0;
          animation:
            processFadeUp
            0.8s
            cubic-bezier(0.16, 1, 0.3, 1)
            forwards;
        }

        .process-delay-100 {
          animation-delay: 100ms;
        }

        .process-delay-200 {
          animation-delay: 200ms;
        }

        .process-delay-300 {
          animation-delay: 300ms;
        }

        .process-path {
          stroke-dasharray: 12 10;
          stroke-dashoffset: 1000;
          animation:
            processLine
            2s
            cubic-bezier(0.16, 1, 0.3, 1)
            forwards;
        }

        /* Direct image animation */
        .process-image {
          transition:
            transform 500ms cubic-bezier(0.16, 1, 0.3, 1),
            filter 500ms ease;
        }

        .process-step:hover .process-image {
          transform: translateY(-8px) scale(1.025);

          filter:
            drop-shadow(0 22px 28px rgba(0, 0, 0, 0.13))
            drop-shadow(0 4px 8px rgba(243, 111, 53, 0.08));
        }

        /* Connection point */
        .process-dot {
          transition:
            transform 300ms ease,
            box-shadow 300ms ease;
        }

        .process-step:hover .process-dot {
          transform: scale(1.15);

          box-shadow:
            0 0 0 7px rgba(243, 111, 53, 0.10);
        }

        @media (max-width: 767px) {
          .process-desktop-path {
            display: none;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .process-fade,
          .process-path {
            animation: none;
            opacity: 1;
          }

          .process-image,
          .process-dot {
            transition: none;
          }
        }
      `}</style>


      {/* =====================================================
          MAIN CONTAINER
      ====================================================== */}
      <div className="relative max-w-[1240px] w-full mx-auto px-6 sm:px-8 lg:px-10">


        {/* =====================================================
            HEADER
        ====================================================== */}
        <div className="process-fade mb-10 md:mb-12">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-4">

            <span className="w-8 h-[2px] rounded-full bg-[#f36f35]" />

            <span className="text-[11px] sm:text-xs font-extrabold tracking-[0.16em] uppercase text-[#f36f35]">
              Our Work Process
            </span>

          </div>


          {/* Heading + Description */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 lg:gap-16">

            <h2
              className="
                m-0
                max-w-[720px]
                text-[42px]
                sm:text-5xl
                md:text-[58px]
                lg:text-[64px]
                font-extrabold
                leading-[0.98]
                tracking-[-0.045em]
                text-[#171717]
              "
            >
              From Ideas to{' '}

              <span className="text-[#f36f35]">
                Impact
              </span>
            </h2>


            <p
              className="
                m-0
                max-w-[360px]
                border-l
                border-[#dedede]
                pl-5
                text-sm
                md:text-[15px]
                leading-[1.65]
                text-[#777]
              "
            >
              A structured, collaborative, and results-driven process
              to turn your vision into reality.
            </p>

          </div>

        </div>


        {/* =====================================================
            PROCESS
        ====================================================== */}
        <div className="relative">


          {/* ===================================================
              DESKTOP CONNECTING PATH
          ==================================================== */}
          <div
            className="
              process-desktop-path
              pointer-events-none
              absolute
              left-[8%]
              right-[8%]
              top-[125px]
              h-[100px]
              z-0
            "
          >

            <svg
              className="w-full h-full overflow-visible"
              viewBox="0 0 1000 120"
              preserveAspectRatio="none"
              fill="none"
              aria-hidden="true"
            >

              <path
                className="process-path"
                d="
                  M0 62
                  C145 115 205 115 330 54
                  C440 3 500 5 610 60
                  C735 120 810 108 1000 34
                "
                stroke="#f36f35"
                strokeWidth="2"
                strokeLinecap="round"
                opacity="0.45"
              />

            </svg>

          </div>


          {/* ===================================================
              STEP GRID
          ==================================================== */}
          <div
            className="
              grid
              grid-cols-1
              md:grid-cols-3
              gap-10
              md:gap-7
              lg:gap-12
              relative
              z-10
            "
          >

            {steps.map((step, index) => (

              <article
                key={step.number}
                className={`
                  process-step
                  process-fade
                  process-delay-${(index + 1) * 100}
                  relative
                  min-w-0
                  ${index === 1 ? 'md:pt-6' : ''}
                `}
              >

                {/* =========================================
                    VISUAL
                ========================================== */}
                <div
                  className="
                    relative
                    h-[200px]
                    sm:h-[215px]
                    flex
                    items-center
                    justify-center
                  "
                >

                  {/* Giant background number */}
                  <span
                    className="
                      absolute
                      left-0
                      top-0
                      z-[-1]
                      text-[88px]
                      sm:text-[96px]
                      font-extrabold
                      leading-none
                      tracking-[-0.08em]
                      text-[#f36f35]/[0.11]
                      select-none
                    "
                  >
                    {step.number}
                  </span>


                  {/* =======================================
                      DIRECT 3D IMAGE
                  ======================================== */}
                  <div
                    className="
                      relative
                      w-[225px]
                      h-[165px]
                      flex
                      items-center
                      justify-center
                    "
                  >

                    <img
                      src={step.image}
                      alt=""
                      className="
                        process-image
                        w-full
                        h-full
                        object-contain
                        block
                        drop-shadow-[0_18px_25px_rgba(0,0,0,0.10)]
                      "
                    />

                  </div>


                  {/* =======================================
                      CONNECTION DOT
                  ======================================== */}
                  <span
                    className="
                      process-dot
                      absolute
                      bottom-[4px]
                      w-4
                      h-4
                      rounded-full
                      border-[4px]
                      border-[#f36f35]
                      bg-white
                      shadow-[0_0_0_5px_rgba(243,111,53,0.07)]
                    "
                  />

                </div>


                {/* =================================================
                    CONTENT
                ================================================== */}
                <div className="pt-1 pr-2">

                  {/* Label */}
                  <div
                    className="
                      mb-2.5
                      text-[10px]
                      sm:text-[11px]
                      font-extrabold
                      tracking-[0.13em]
                      uppercase
                      text-[#f36f35]
                    "
                  >
                    {step.label}
                  </div>


                  {/* Title */}
                  <h3
                    className="
                      m-0
                      mb-2.5
                      max-w-[340px]
                      text-[21px]
                      sm:text-[22px]
                      md:text-[23px]
                      font-extrabold
                      leading-[1.15]
                      tracking-[-0.025em]
                      text-[#181818]
                    "
                  >
                    {step.title}
                  </h3>


                  {/* Description */}
                  <p
                    className="
                      m-0
                      max-w-[340px]
                      text-[13px]
                      sm:text-sm
                      leading-[1.6]
                      text-[#777]
                    "
                  >
                    {step.description}
                  </p>

                </div>

              </article>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}