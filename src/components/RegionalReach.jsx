import React, { useState } from 'react';
import { indiaMapData } from '../assets/data/indiaMapData';

export default function RegionalReach() {
  const [activeHubId, setActiveHubId] = useState('mh');

  const hubs = [
    {
      id: 'mh',
      name: 'Maharashtra',
      city: 'Mumbai & Pune Hub',
      role: 'Headquarters & Central Stockyard',
      x: 175,
      y: 440,
    },
    {
      id: 'gj',
      name: 'Gujarat',
      city: 'Ahmedabad & Surat',
      role: 'Major Industrial Processing & Supply',
      x: 66,
      y: 355,
    },
    {
      id: 'rj',
      name: 'Rajasthan',
      city: 'Jaipur & Western Belt',
      role: 'Infrastructure & EPC Distribution',
      x: 120,
      y: 260,
    },
    {
      id: 'mp',
      name: 'Madhya Pradesh',
      city: 'Indore & Central Belt',
      role: 'Heavy Engineering Supply Corridor',
      x: 215,
      y: 320,
    },
  ];

  const highlightedStateIds = new Set(['mh', 'gj', 'rj', 'mp']);

  return (
    <section id="regional-reach" className="relative w-full overflow-hidden bg-white py-16 sm:py-20 md:py-24 border-t border-gray-100">
      
      {/* Subtle Architectural Grid Lines */}
      <div className="absolute inset-0 pointer-events-none max-w-[1280px] mx-auto px-6 sm:px-8 md:px-12 grid grid-cols-2 md:grid-cols-4 h-full">
        <div className="border-r border-gray-100 h-full opacity-60" />
        <div className="border-r border-gray-100 h-full opacity-60" />
        <div className="border-r border-gray-100 h-full opacity-60 hidden md:block" />
        <div className="h-full hidden md:block" />
      </div>

      <div className="max-w-[1240px] mx-auto px-6 sm:px-8 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

          {/* =====================================================
              LEFT COLUMN: Headings & Office Details Card
          ====================================================== */}
          <div className="lg:col-span-5 flex flex-col justify-center">

            {/* Eyebrow Label */}
            <span className="font-badge text-xs sm:text-[13px] font-extrabold tracking-widest uppercase text-[#f36f35] block mb-3">
              Get Directions
            </span>

            {/* Section Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-[42px] font-black text-[#111827] tracking-tight leading-[1.12] mb-8">
              Our Services Reach Industries Across India
            </h2>

            {/* Office Contact Card (Matching reference styling) */}
            <div className="bg-[#f8f9fa] rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)]">
              
              <h3 className="text-lg sm:text-xl font-black text-[#111827] mb-5 tracking-tight">
                Mumbai Head Office
              </h3>

              <div className="space-y-4 text-sm sm:text-[15px] text-[#4b5563]">
                
                {/* Phone */}
                <div className="flex items-center gap-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#fff1eb] text-[#f36f35]">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <a href="tel:+917304656254" className="hover:text-[#f36f35] font-semibold transition-colors">
                    +91 7304656254
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#fff1eb] text-[#f36f35]">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <a href="mailto:enquiry@anmispat.com" className="hover:text-[#f36f35] font-medium transition-colors">
                    enquiry@anmispat.com
                  </a>
                </div>

                {/* Address */}
                <div className="flex items-start gap-3.5">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#fff1eb] text-[#f36f35] mt-0.5">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <p className="leading-relaxed font-medium">
                    Platinum Building, Jawahar Road, Ghatkopar East, Mumbai – 400077
                  </p>
                </div>

              </div>

              {/* Contact Us CTA Button */}
              <div className="mt-7">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2.5 bg-[#f36f35] hover:bg-[#e05d23] text-white font-badge font-extrabold text-xs tracking-wider uppercase px-6 py-3.5 rounded-lg transition-all duration-300 shadow-md shadow-[#f36f35]/25 hover:shadow-lg hover:shadow-[#f36f35]/35 cursor-pointer"
                >
                  <span>Contact Us</span>
                  <span className="text-sm font-normal">↗</span>
                </a>
              </div>

            </div>

          </div>

          {/* =====================================================
              RIGHT COLUMN: Zoomed In India Map with Key State Dots
          ====================================================== */}
          <div className="lg:col-span-7 flex flex-col justify-center relative">
            
            <div className="relative w-full max-w-[560px] mx-auto py-4">

              {/* Responsive SVG Container for India Map */}
              <svg
                viewBox={indiaMapData.viewBox}
                className="w-full h-auto drop-shadow-sm select-none"
                style={{ maxHeight: '520px' }}
                aria-label="Map of India highlighting strategic hubs in Maharashtra, Madhya Pradesh, Rajasthan, and Gujarat"
              >
                {/* State Paths */}
                {indiaMapData.locations.map((loc) => {
                  const isHighlighted = highlightedStateIds.has(loc.id);
                  const isActive = activeHubId === loc.id;

                  return (
                    <path
                      key={loc.id}
                      d={loc.path}
                      id={loc.id}
                      className="transition-colors duration-300"
                      fill={
                        isActive
                          ? '#fed7aa'
                          : isHighlighted
                          ? '#fbd5c6'
                          : '#e2e8f0'
                      }
                      stroke="#ffffff"
                      strokeWidth="1.2"
                      onMouseEnter={() => {
                        if (isHighlighted) setActiveHubId(loc.id);
                      }}
                    />
                  );
                })}

                {/* State Interactive Pulsing Dots (Matching reference black/ring dots) */}
                {hubs.map((hub) => {
                  const isActive = activeHubId === hub.id;

                  return (
                    <g
                      key={hub.id}
                      className="cursor-pointer group"
                      onMouseEnter={() => setActiveHubId(hub.id)}
                      onClick={() => setActiveHubId(hub.id)}
                    >
                      {/* Pulsing Outer Ripple Animation */}
                      <circle
                        cx={hub.x}
                        cy={hub.y}
                        r="14"
                        className="fill-[#f36f35]/25 animate-ping"
                        style={{
                          transformOrigin: `${hub.x}px ${hub.y}px`,
                          animationDuration: '2.5s',
                        }}
                      />

                      {/* Translucent Outer Ring */}
                      <circle
                        cx={hub.x}
                        cy={hub.y}
                        r="8"
                        className={`transition-all duration-300 ${
                          isActive
                            ? 'fill-[#f36f35]/20 stroke-[#f36f35] stroke-[2]'
                            : 'fill-black/10 stroke-[#111827] stroke-[1.5]'
                        }`}
                      />

                      {/* Solid Center Dot */}
                      <circle
                        cx={hub.x}
                        cy={hub.y}
                        r="3.5"
                        className={`transition-colors duration-300 ${
                          isActive ? 'fill-[#f36f35]' : 'fill-[#111827]'
                        }`}
                      />

                      {/* State Label Text Tag in SVG */}
                      <g
                        transform={`translate(${
                          hub.id === 'gj' ? hub.x - 12 : hub.x + 12
                        }, ${hub.y + 4})`}
                        className={`pointer-events-none transition-opacity duration-300 ${
                          isActive ? 'opacity-100' : 'opacity-85'
                        }`}
                      >
                        <rect
                          x={hub.id === 'gj' ? -80 : 0}
                          y="-14"
                          width="84"
                          height="20"
                          rx="4"
                          fill="rgba(17, 24, 39, 0.88)"
                          className="drop-shadow-sm"
                        />
                        <text
                          x={hub.id === 'gj' ? -38 : 42}
                          y="-1"
                          textAnchor="middle"
                          fill="#ffffff"
                          fontSize="9.5"
                          fontWeight="700"
                          fontFamily="sans-serif"
                        >
                          {hub.name}
                        </text>
                      </g>
                    </g>
                  );
                })}
              </svg>

            </div>

            {/* Bottom Stat Block (Matching 1000+ stat from reference) */}
            <div className="mt-4 sm:mt-6 pt-6 border-t border-gray-100 flex items-center justify-between flex-wrap gap-4 max-w-[560px] mx-auto w-full">
              <div className="flex items-center gap-4">
                <span className="text-4xl sm:text-5xl font-black text-[#111827] tracking-tight leading-none">
                  1000+
                </span>
                <p className="text-xs sm:text-sm text-gray-500 font-medium leading-snug max-w-[280px]">
                  Total enterprise clients and landmark projects supplied across our industrial network.
                </p>
              </div>

              {/* Active Hub Quick Details Pill */}
              {activeHubId && (
                <div className="text-right hidden sm:block">
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#f36f35] block">
                    Active Hub
                  </span>
                  <span className="text-xs font-bold text-[#111827]">
                    {hubs.find((h) => h.id === activeHubId)?.city}
                  </span>
                </div>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
