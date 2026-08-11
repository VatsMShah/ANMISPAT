//Services.jsx
import React from 'react';

import steelTradingImg from '../assets/images/steel-trading.png';
import logisticsImg from '../assets/images/logistics.png';
import processingImg from '../assets/images/steel-processing.png';
import industrialSupplyImg from '../assets/images/industrial-supply.png';

export default function Services() {
  return (
    <>
      <style>{`
        @keyframes anm-services-fade {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .anm-services-fade {
          animation: anm-services-fade 1.35s
            cubic-bezier(0.22, 1, 0.36, 1) both;
        }

        .anm-service-image {
          transition:
            transform 1.2s cubic-bezier(0.22, 1, 0.36, 1),
            filter 0.8s ease;
        }

        .anm-service-card:hover .anm-service-image {
          transform: scale(1.06);
          filter: saturate(1.08);
        }

        .anm-service-overlay {
          transition: background 0.7s ease;
        }

        .anm-service-card:hover .anm-service-overlay {
          background:
            linear-gradient(
              to top,
              rgba(0, 0, 0, 0.68) 0%,
              rgba(0, 0, 0, 0.12) 55%,
              rgba(242, 92, 43, 0.06) 100%
            );
        }

        .anm-service-arrow {
          transition: transform 0.4s
            cubic-bezier(0.22, 1, 0.36, 1);
        }

        .anm-service-more:hover .anm-service-arrow {
          transform: translate(3px, -3px);
        }

        .anm-service-more {
          transition:
            background-color 0.35s ease,
            color 0.35s ease,
            border-color 0.35s ease,
            transform 0.35s ease;
        }

        .anm-service-more:hover {
          transform: translateY(-3px);
        }

        @media (prefers-reduced-motion: reduce) {
          .anm-services-fade {
            animation: none;
          }

          .anm-service-image,
          .anm-service-more,
          .anm-service-arrow {
            transition: none;
          }
        }
      `}</style>

      <section
        id="services"
        className="relative w-full overflow-hidden bg-white"
      >

        {/* =====================================================
            SERVICES MOSAIC
        ===================================================== */}

        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3
            lg:grid-rows-[350px_350px]
          "
        >

          {/* ===================================================
              CARD 1 — STEEL TRADING
          =================================================== */}

          <article
            className="
              anm-service-card
              anm-services-fade
              relative
              min-h-[300px]
              overflow-hidden
              lg:col-start-1
              lg:row-start-1
            "
            style={{ animationDelay: '0.1s' }}
          >

            <img
              src={steelTradingImg}
              alt="Steel trading"
              className="
                anm-service-image
                absolute
                inset-0
                h-full
                w-full
                object-cover
              "
            />

            <div
              aria-hidden="true"
              className="absolute inset-0 bg-black/30"
            />

            <div
              className="
                anm-service-overlay
                absolute
                inset-0
                bg-gradient-to-t
                from-black/60
                via-black/5
                to-black/5
              "
            />

            <div
              className="
                relative
                z-10
                flex
                h-full
                flex-col
                items-center
                justify-center
                gap-7
                px-6
                text-center
              "
            >

              <h3
                className="
                  font-heading
                  text-2xl
                  font-semibold
                  tracking-tight
                  text-white
                  drop-shadow-lg
                  sm:text-3xl
                "
              >
                Steel Trading
              </h3>

              <a
                href="#contact"
                className="
                  anm-service-more
                  inline-flex
                  items-center
                  gap-2.5
                  border
                  border-brand-orange
                  bg-brand-orange/90
                  px-5
                  py-2.5
                  font-heading
                  text-[10px]
                  font-bold
                  tracking-[0.12em]
                  text-white
                  backdrop-blur-sm
                "
              >
                MORE

                <span className="anm-service-arrow text-sm">
                  ↗
                </span>
              </a>

            </div>
          </article>


          {/* ===================================================
              CENTER ORANGE INFORMATION PANEL
          =================================================== */}

          <div
            className="
              anm-services-fade
              relative
              z-20
              flex
              min-h-[500px]
              items-center
              justify-center
              overflow-hidden
              bg-gradient-to-br
              from-brand-accent
              via-brand-orange
              to-brand-orange
              px-8
              py-14
              md:col-span-2
              lg:col-span-1
              lg:col-start-2
              lg:row-span-2
              lg:row-start-1
            "
            style={{ animationDelay: '0.2s' }}
          >

            {/* Subtle technical dot texture */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                opacity-[0.08]
              "
              style={{
                backgroundImage:
                  'radial-gradient(rgba(255,255,255,.9) .7px, transparent .7px)',
                backgroundSize: '13px 13px',
              }}
            />

            <div
              className="
                relative
                z-10
                w-full
                max-w-[310px]
                text-center
              "
            >

              <p
                className="
                  mb-4
                  font-badge
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.2em]
                  text-white/70
                "
              >
                ANM ISPAT
              </p>

              <h2
                className="
                  font-heading
                  text-[3rem]
                  font-extrabold
                  leading-[0.88]
                  tracking-[-0.06em]
                  text-white
                  sm:text-[3.5rem]
                  lg:text-[3rem]
                  xl:text-[3.6rem]
                "
              >
                INDUSTRIES WE
                <br />
                SERVE
              </h2>

              <div
                className="
                  mx-auto
                  my-6
                  h-0.5
                  w-10
                  bg-white/70
                "
              />

              <p
                className="
                  font-body
                  mb-5
                  text-[11px]
                  leading-[1.7]
                  text-white/90
                "
              >
                ANM Ispat delivers dependable steel solutions
                and industrial support services built around
                quality, efficiency and long-term relationships.
              </p>

              <p
                className="
                  font-body
                  mb-6
                  text-[11px]
                  leading-[1.7]
                  text-white/90
                "
              >
                From sourcing and supply to logistics and
                project requirements, we work closely with
                businesses to deliver the right material at
                the right time.
              </p>

              <a
                href="#contact"
                className="
                  inline-flex
                  items-center
                  gap-2.5
                  border
                  border-white/70
                  bg-brand-dark
                  px-5
                  py-2.5
                  font-heading
                  text-[10px]
                  font-bold
                  tracking-[0.1em]
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:bg-white
                  hover:text-brand-orange
                "
              >
                ALL SERVICES

                <span>
                  ↗
                </span>
              </a>

            </div>
          </div>


          {/* ===================================================
              CARD 2 — PROCESSING
          =================================================== */}

          <article
            className="
              anm-service-card
              anm-services-fade
              relative
              min-h-[300px]
              overflow-hidden
              md:col-start-2
              md:row-start-1
              lg:col-start-3
              lg:row-start-1
            "
            style={{ animationDelay: '0.3s' }}
          >

            <img
              src={processingImg}
              alt="Steel processing"
              className="
                anm-service-image
                absolute
                inset-0
                h-full
                w-full
                object-cover
              "
            />

            <div
              aria-hidden="true"
              className="absolute inset-0 bg-black/30"
            />

            <div
              className="
                anm-service-overlay
                absolute
                inset-0
                bg-gradient-to-t
                from-black/60
                via-black/5
                to-transparent
              "
            />

            <div
              className="
                relative
                z-10
                flex
                h-full
                flex-col
                items-center
                justify-center
                gap-7
                px-6
                text-center
              "
            >

              <h3
                className="
                  font-heading
                  text-2xl
                  font-semibold
                  tracking-tight
                  text-white
                  drop-shadow-lg
                  sm:text-3xl
                "
              >
                Steel Processing
              </h3>

              <a
                href="#contact"
                className="
                  anm-service-more
                  inline-flex
                  items-center
                  gap-2.5
                  border
                  border-brand-orange
                  bg-brand-orange/90
                  px-5
                  py-2.5
                  font-heading
                  text-[10px]
                  font-bold
                  tracking-[0.12em]
                  text-white
                "
              >
                MORE

                <span className="anm-service-arrow text-sm">
                  ↗
                </span>
              </a>

            </div>
          </article>


          {/* ===================================================
              CARD 3 — LOGISTICS
          =================================================== */}

          <article
            className="
              anm-service-card
              anm-services-fade
              relative
              min-h-[300px]
              overflow-hidden
              md:col-start-1
              md:row-start-2
              lg:col-start-1
              lg:row-start-2
            "
            style={{ animationDelay: '0.4s' }}
          >

            <img
              src={logisticsImg}
              alt="Steel logistics"
              className="
                anm-service-image
                absolute
                inset-0
                h-full
                w-full
                object-cover
              "
            />

            <div
              aria-hidden="true"
              className="absolute inset-0 bg-black/30"
            />

            <div
              className="
                anm-service-overlay
                absolute
                inset-0
                bg-gradient-to-t
                from-black/65
                via-black/10
                to-transparent
              "
            />

            <div
              className="
                relative
                z-10
                flex
                h-full
                flex-col
                items-center
                justify-center
                gap-7
                px-6
                text-center
              "
            >

              <h3
                className="
                  font-heading
                  text-2xl
                  font-semibold
                  tracking-tight
                  text-white
                  drop-shadow-lg
                  sm:text-3xl
                "
              >
                Logistics
              </h3>

              <a
                href="#contact"
                className="
                  anm-service-more
                  inline-flex
                  items-center
                  gap-2.5
                  border
                  border-brand-orange
                  bg-brand-orange/90
                  px-5
                  py-2.5
                  font-heading
                  text-[10px]
                  font-bold
                  tracking-[0.12em]
                  text-white
                "
              >
                MORE

                <span className="anm-service-arrow text-sm">
                  ↗
                </span>
              </a>

            </div>
          </article>


          {/* ===================================================
              CARD 4 — INDUSTRIAL SUPPLY
          =================================================== */}

          <article
            className="
              anm-service-card
              anm-services-fade
              relative
              min-h-[300px]
              overflow-hidden
              md:col-start-2
              md:row-start-2
              lg:col-start-3
              lg:row-start-2
            "
            style={{ animationDelay: '0.5s' }}
          >

            <img
              src={industrialSupplyImg}
              alt="Industrial steel supply"
              className="
                anm-service-image
                absolute
                inset-0
                h-full
                w-full
                object-cover
              "
            />

            <div
              aria-hidden="true"
              className="absolute inset-0 bg-black/30"
            />

            <div
              className="
                anm-service-overlay
                absolute
                inset-0
                bg-gradient-to-t
                from-black/65
                via-black/10
                to-transparent
              "
            />

            <div
              className="
                relative
                z-10
                flex
                h-full
                flex-col
                items-center
                justify-center
                gap-7
                px-6
                text-center
              "
            >

              <h3
                className="
                  font-heading
                  text-2xl
                  font-semibold
                  tracking-tight
                  text-white
                  drop-shadow-lg
                  sm:text-3xl
                "
              >
                Industrial Supply
              </h3>

              <a
                href="#contact"
                className="
                  anm-service-more
                  inline-flex
                  items-center
                  gap-2.5
                  border
                  border-brand-orange
                  bg-brand-orange/90
                  px-5
                  py-2.5
                  font-heading
                  text-[10px]
                  font-bold
                  tracking-[0.12em]
                  text-white
                "
              >
                MORE

                <span className="anm-service-arrow text-sm">
                  ↗
                </span>
              </a>

            </div>
          </article>

        </div>
      </section>
    </>
  );
}