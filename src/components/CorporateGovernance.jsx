import React, { useState, useEffect } from 'react';
import { Plus, Minus } from 'lucide-react';
import PageHero from './PageHero.jsx';

import aboutHeroBg from '../assets/images/about-banner-new.jpg';

const governancePolicies = [
  {
    id: 'work-authorization',
    title: 'Work Authorization',
    category: 'Operational Safety',
    description:
      'Strict Permit-to-Work (PTW) protocols must be validated and signed off before commencing any high-risk task. Pre-job hazard briefings ensure technicians follow designated safety clearances.',
  },
  {
    id: 'inspection-risk-assessment',
    title: 'Inspection and Risk Assessment',
    category: 'Risk Mitigation',
    description:
      'Hazard Identification and Risk Assessments (HIRA) are conducted before operating machinery or handling coils. Daily pre-shift audits verify structural safety and equipment integrity.',
  },
  {
    id: 'safety-control-systems',
    title: 'Safety Control Systems',
    category: 'Engineering & Safeguards',
    description:
      'Automated fail-safe engineering controls, emergency trip-wires, and light curtains safeguard every processing line. Overload cut-offs and emergency stops are routinely tested and calibrated.',
  },
  {
    id: 'prohibition-alcohol-drugs',
    title: 'Prohibition on Alcohol and Drugs',
    category: 'Code of Conduct',
    description:
      'ANM Ispat strictly enforces a zero-tolerance substance policy across all processing centers, yards, and logistics fleets. Random screenings and site entry controls maintain a 100% sober workplace.',
  },
  {
    id: 'confined-space-entry',
    title: 'Confined Space Entry',
    category: 'Critical Protocols',
    description:
      'Entry into enclosed storage vessels, pits, and subterranean conduits requires atmospheric multi-gas testing and forced ventilation. Dedicated standby watchmen ensure continuous entrant safety.',
  },
  {
    id: 'working-at-height',
    title: 'Working at Height',
    category: 'Critical Protocols',
    description:
      'Certified dual-lanyard fall arrest harnesses and green-tagged scaffolding are mandatory for all tasks performed above 1.8 meters. Perimeter edge netting and lifelines are strictly enforced.',
  },
  {
    id: 'energy-isolation',
    title: 'Energy Isolation (Lockout Tagout)',
    category: 'Maintenance Governance',
    description:
      'Physical de-energization and multi-lock hasps (LOTO) are mandatory across electrical, hydraulic, and pneumatic lines prior to servicing. Zero-energy states must be physically verified before entry.',
  },
  {
    id: 'hot-work-precautions',
    title: 'Hot Work Precautions',
    category: 'Fire Prevention',
    description:
      'All cutting, welding, and grinding activities require a 10-meter combustible-free radius, spark containment screens, and gas testing. Dedicated fire watch personnel remain on duty throughout.',
  },
  {
    id: 'vehicle-safety',
    title: 'Vehicle Safety',
    category: 'Logistics & Traffic',
    description:
      'On-site traffic rules enforce a 15 km/h speed limit, segregated pedestrian walkways, and operational reverse alarms. Loading bay trailer wheel chocks and lockouts prevent unintended vehicle roll.',
  },
  {
    id: 'lifting-operations',
    title: 'Lifting Operations',
    category: 'Material Handling',
    description:
      'Engineered rigging protocols, Safe Working Load (SWL) limits, and non-destructive wire testing govern all overhead coil cranes. Red exclusion zones are enforced beneath all live rigging.',
  },
  {
    id: 'incident-reporting',
    title: 'Incident Reporting',
    category: 'Compliance & Improvement',
    description:
      'All near-misses, injuries, and property damage must be digitally reported within 60 minutes for rapid emergency response. Multidisciplinary root cause analysis ensures immediate preventive actions.',
  },
];

export default function CorporateGovernance() {
  // Store expanded item IDs (allow toggling individual or multiple)
  const [expandedItems, setExpandedItems] = useState({
    'work-authorization': true, // Open first item by default
  });

  // Scroll to top on page navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const toggleItem = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <main className="relative w-full overflow-hidden font-sans bg-white text-[#111827]">
      {/* =====================================================
          SECTION 1: HERO SECTION
          Standard Hero Section matching all other pages
      ====================================================== */}
      <PageHero
        title="Corporate Governance"
        subtitle="ANM ISPAT"
        exploreText="Explore Governance"
        exploreLink="/"
        bgImage={aboutHeroBg}
        imageAlt="Corporate Governance Banner"
      />

      {/* =====================================================
          SECTION 2: GOVERNANCE & SAFETY FRAMEWORK
          Intro content + Sleek, Compact Accordion Policy List
      ====================================================== */}
      <section className="py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-14 bg-white">
        <div className="max-w-[1180px] mx-auto">
          
          {/* Header Introduction Content */}
          <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-14">
            
            {/* Eyebrow Label with signature brand orange dashes */}
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-[2px] rounded-full bg-[#f36f35]" />
              <span className="font-badge text-xs font-bold uppercase tracking-[0.2em] text-[#f36f35]">
                Health, Safety &amp; Governance
              </span>
              <span className="w-8 h-[2px] rounded-full bg-[#f36f35]" />
            </div>

            {/* Main Heading */}
            <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#111827] leading-[1.15]">
              Corporate Governance &amp; <span className="text-[#f36f35]">Safety Mandates</span>
            </h2>

            {/* Description Text */}
            <p className="mt-4 sm:mt-5 text-sm sm:text-base leading-relaxed text-[#4c4c4c] font-normal">
              At ANM Ispat, corporate governance and industrial safety form the bedrock of our operational philosophy. We are committed to maintaining the highest benchmarks of accountability, workforce protection, and regulatory discipline across all our coil processing centers and distribution networks.
            </p>
          </div>

          {/* =====================================================
              ACCORDION POLICY LIST (COMPACT SLEEK ROWS)
              Directly matching reference image layout in ANM Ispat brand theme
          ====================================================== */}
          <div className="bg-white rounded-2xl sm:rounded-3xl border border-gray-200/90 shadow-[0_4px_25px_rgba(0,0,0,0.04)] overflow-hidden">
            
            {/* Sub-Header Strip */}
            <div className="px-6 sm:px-8 py-3.5 sm:py-4 bg-gradient-to-r from-[#fff8f3] via-white to-[#fff8f3] border-b border-gray-200/80 flex items-center justify-between">
              <div>
                <h3 className="font-heading text-base sm:text-lg font-bold text-[#111827] tracking-tight">
                  Health, Safety &amp; Environmental (HSE) Protocols
                </h3>
                <p className="text-xs text-gray-500 mt-0.5">
                  Click any policy item to view compliance standards and operating requirements.
                </p>
              </div>
              <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#f36f35]/10 text-[#f36f35] text-[11px] font-bold uppercase tracking-wider font-badge">
                11 Key Protocols
              </span>
            </div>

            {/* Accordion Items List */}
            <div className="divide-y divide-gray-200/80">
              {governancePolicies.map((item, index) => {
                const isOpen = !!expandedItems[item.id];
                return (
                  <div
                    key={item.id}
                    className={`transition-colors duration-150 ${
                      isOpen ? 'bg-[#fffcf9]' : 'hover:bg-[#fafbfc]'
                    }`}
                  >
                    {/* Accordion Row Header Button - Reduced Height */}
                    <button
                      type="button"
                      onClick={() => toggleItem(item.id)}
                      aria-expanded={isOpen}
                      className="w-full px-6 sm:px-8 py-3 sm:py-3.5 flex items-center justify-between text-left cursor-pointer focus:outline-none focus:bg-[#fff7f0] group"
                    >
                      <div className="flex items-center gap-3.5 sm:gap-5 pr-4">
                        {/* Number Index */}
                        <span className="font-badge text-xs sm:text-sm font-bold text-gray-400 tabular-nums w-5">
                          {String(index + 1).padStart(2, '0')}
                        </span>

                        <div>
                          <h4
                            className={`font-heading text-sm sm:text-base lg:text-[17px] font-bold transition-colors duration-150 leading-snug ${
                              isOpen ? 'text-[#f36f35]' : 'text-[#111827] group-hover:text-[#f36f35]'
                            }`}
                          >
                            {item.title}
                          </h4>
                          <span className="text-[10.5px] font-semibold uppercase tracking-wider text-gray-400 font-badge block">
                            {item.category}
                          </span>
                        </div>
                      </div>

                      {/* Plus / Minus Circular Toggle Button - Reduced Size */}
                      <div
                        className={`w-7 h-7 sm:w-7.5 sm:h-7.5 rounded-full flex items-center justify-center transition-all duration-200 flex-shrink-0 ${
                          isOpen
                            ? 'bg-[#f36f35] text-white shadow-sm'
                            : 'bg-[#fff5ee] text-[#f36f35] group-hover:bg-[#f36f35] group-hover:text-white'
                        }`}
                      >
                        {isOpen ? (
                          <Minus className="w-3.5 h-3.5" strokeWidth={2.2} />
                        ) : (
                          <Plus className="w-3.5 h-3.5" strokeWidth={2.2} />
                        )}
                      </div>
                    </button>

                    {/* Accordion Expanded Body - Clean 2-Line Content Without Pointers */}
                    {isOpen && (
                      <div className="px-6 sm:px-8 pb-3.5 pt-0.5 sm:pb-4 border-t border-dashed border-[#f36f35]/20 animate-fadeIn">
                        <p className="text-xs sm:text-sm text-gray-600 leading-relaxed font-normal pl-8 sm:pl-10">
                          {item.description}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
