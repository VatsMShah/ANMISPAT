import React from 'react';

import journeyImg1 from '../assets/images/steel-trading.png';
import journeyImg2 from '../assets/images/second-sec-right-new.jpg';
import journeyImg3 from '../assets/images/steel-processing.png';
import journeyImg4 from '../assets/images/logistics.png';

export default function OurJourney() {
  const milestones = [
    {
      year: '2000',
      type: 'outline',
      title: 'Foundations in Steel Trading',
      description:
        'Establishing deep-rooted trade partnerships across western India, supplying quality hot rolled and structural steel with unmatched speed, transparency, and personal commitment.',
      image: journeyImg1,
      imageAlt: 'ANM Ispat founding steel trading and warehouse operations',
    },
    {
      year: '2015',
      type: 'solid',
      title: 'Incorporation of ANM ISPAT',
      description:
        'Officially incorporated as ANM ISPAT PRIVATE LIMITED, expanding with central warehousing hubs, high-capacity inventory, and authorized Tier-1 mill dealerships.',
      image: journeyImg2,
      imageAlt: 'ANM Ispat official company incorporation and warehouse expansion',
    },
    {
      year: '2020',
      type: 'outline',
      title: 'Advanced Processing & Value Addition',
      description:
        'Upgraded in-house processing capabilities including precision coil slitting, custom cut-to-length sheets, and strict QA protocols to serve demanding manufacturing clients.',
      image: journeyImg3,
      imageAlt: 'State of the art steel processing and coil cut-to-length lines',
    },
    {
      year: '2025',
      type: 'solid',
      title: 'Nationwide Scale & Industry Leadership',
      description:
        'Recognized as a powerhouse steel distributor, powering over 2,500+ landmark projects across infrastructure, defense, railways, power, and automotive mobility.',
      image: journeyImg4,
      imageAlt: 'Nationwide logistics network and steel supply fleet',
    },
  ];

  return (
    <section id="our-journey" className="relative w-full overflow-hidden bg-white py-16 sm:py-20 md:py-24 border-t border-gray-100">
      {/* Background Subtle Ambient Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-orange-50/50 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-50/40 rounded-full blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 md:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center justify-center gap-3 mb-3">
            <span className="w-8 h-[2px] bg-[#f36f35] rounded-full" />
            <span className="font-badge text-xs font-extrabold tracking-widest uppercase text-[#f36f35]">
              OUR JOURNEY
            </span>
            <span className="w-8 h-[2px] bg-[#f36f35] rounded-full" />
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#111827] tracking-tight leading-[1.15]">
            Milestones of Trust & <span className="text-[#f36f35]">Excellence</span>
          </h2>

          <p className="mt-4 text-[#666666] text-sm sm:text-base leading-relaxed">
            From our founding roots to becoming one of India&apos;s leading steel distribution networks, discover the story behind our continuous progress.
          </p>
        </div>

        {/* Milestone Rows with Overlapping Numbers */}
        <div className="space-y-20 sm:space-y-24 md:space-y-28">
          {milestones.map((item, index) => {
            const isEven = index % 2 === 1; // index 1 & 3: Content Left, Image Right

            return (
              <div
                key={item.year}
                className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-14 lg:gap-20 items-center relative"
              >
                {/* Visual / Image Block with Overlapping Year Badge */}
                <div
                  className={`relative ${
                    isEven ? 'md:order-2' : 'md:order-1'
                  }`}
                >
                  {/* Image Card Container */}
                  <div className="relative overflow-hidden rounded-[22px] border-2 border-white bg-gray-50 shadow-[0_12px_32px_rgba(0,0,0,0.08)] transition-all duration-500 hover:shadow-[0_22px_45px_rgba(243,111,53,0.15)] hover:-translate-y-1">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      className="w-full h-[240px] sm:h-[300px] md:h-[340px] object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
                      loading="lazy"
                    />
                    {/* Subtle corner badge accent */}
                    <div className="absolute top-4 left-4 w-2.5 h-2.5 rounded-full bg-[#f36f35]/80 shadow-[0_0_8px_rgba(243,111,53,0.8)]" />
                  </div>

                  {/* Overlapping Year Graphic - Overlaps the bottom corner of the image across into the neighboring column */}
                  <div
                    className={`
                      hidden md:block
                      absolute
                      z-20
                      pointer-events-none
                      select-none
                      bottom-1 lg:bottom-2
                      ${isEven ? 'left-0 -translate-x-1/2' : 'right-0 translate-x-1/2'}
                    `}
                  >
                    {item.type === 'outline' ? (
                      <span className="relative block text-[80px] lg:text-[100px] xl:text-[112px] font-black leading-none tracking-tight select-none">
                        {/* Outer high-contrast white stroke with ambient shadow for dark photography legibility */}
                        <span
                          aria-hidden="true"
                          className="absolute inset-0 text-transparent"
                          style={{
                            WebkitTextStroke: '5px #ffffff',
                            filter: 'drop-shadow(0 2px 10px rgba(0,0,0,0.45))',
                          }}
                        >
                          {item.year}
                        </span>
                        {/* Inner dark slate stroke for crisp contrast on light background */}
                        <span
                          className="relative text-transparent"
                          style={{
                            WebkitTextStroke: '2px #1e293b',
                          }}
                        >
                          {item.year}
                        </span>
                      </span>
                    ) : (
                      <span
                        className="block text-[80px] lg:text-[100px] xl:text-[112px] font-black leading-none tracking-tight text-[#f36f35]"
                        style={{
                          filter: 'drop-shadow(0 4px 14px rgba(0,0,0,0.25))',
                        }}
                      >
                        {item.year}
                      </span>
                    )}
                  </div>
                </div>

                {/* Content Block */}
                <div
                  className={`flex flex-col justify-center ${
                    isEven
                      ? 'md:order-1 md:text-right md:items-end'
                      : 'md:order-2 md:text-left md:items-start'
                  }`}
                >
                  {/* Heading */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-tight leading-snug">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-3 text-sm sm:text-[15px] text-[#555e6d] leading-[1.65] max-w-md">
                    {item.description}
                  </p>

                  {/* Mobile-only Year Graphic */}
                  <div className="md:hidden mt-4 select-none">
                    {item.type === 'outline' ? (
                      <span className="relative block text-6xl font-black leading-none tracking-tight select-none">
                        <span
                          aria-hidden="true"
                          className="absolute inset-0 text-transparent"
                          style={{
                            WebkitTextStroke: '4px #ffffff',
                            filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.35))',
                          }}
                        >
                          {item.year}
                        </span>
                        <span
                          className="relative text-transparent"
                          style={{
                            WebkitTextStroke: '2px #1e293b',
                          }}
                        >
                          {item.year}
                        </span>
                      </span>
                    ) : (
                      <span className="block text-6xl font-black leading-none tracking-tight text-[#f36f35]">
                        {item.year}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
