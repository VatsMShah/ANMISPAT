import { useState } from 'react';
import { ArrowDown, ArrowRight, Award, BadgeCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from './PageHero.jsx';
import logisticsImage from '../assets/images/logistics.png';

import award1Img from '../assets/awards-images/award-1.png';
import award2Img from '../assets/awards-images/award-2.png';
import award3Img from '../assets/awards-images/award-3.png';
import award4Img from '../assets/awards-images/award-4.png';
import award5Img from '../assets/awards-images/award-5.png';

const recognitions = [
  {
    id: 1,
    title: 'Best Brands 2025',
    category: 'The Economic Times / ET Edge',
    description: 'Recognized by The Economic Times / ET Edge as one of the Best Brands in India, honoring Colorshine for industry leadership, quality, and trust.',
    image: award1Img,
  },
  {
    id: 2,
    title: 'Star Performer of The Year',
    category: 'AM/NS Steel Star',
    description: 'Awarded to Abhay Ispat (India) Pvt. Ltd. - Central by AM/NS India for outstanding sales performance, distribution scale, and reliable customer service.',
    image: award2Img,
  },
  {
    id: 3,
    title: 'Retail Rockstar',
    category: 'Tata Steel (Tata Kosh)',
    description: 'Conferred by Tata Steel upon ANM Ispat Pvt. Ltd. (Mumbai) as the Top Performing Authorized Service Outlet (ASO) for excellence in retail distribution.',
    image: award3Img,
  },
  {
    id: 4,
    title: 'Steel Distributor of the Year',
    category: 'BCC&I & Tata Steel',
    description: 'Manufacturing & MSME Excellence Award presented jointly by BCC&I and Tata Steel to ANM Ispat Pvt. Ltd. for exemplary steel supply chain performance.',
    image: award4Img,
  },
  {
    id: 5,
    title: 'Market Development of LC Grades',
    category: 'Tata Steel (Manthan)',
    description: 'Special Appreciation Winner awarded to ANM Ispat Pvt. Ltd. (Mumbai) at Manthan for exceptional market penetration and development of Low Carbon steel grades.',
    image: award5Img,
  },
];

export default function Achievements() {
  const [activeRecognition, setActiveRecognition] = useState(0);
  const activeItem = recognitions[activeRecognition];

  return (
    <main className="overflow-hidden bg-white text-[#1f1f1f]">
      {/* Hero Section - Compact Banner Matching Reference Mockup */}
      <PageHero
        title="Achievements"
        subtitle="ANM ISPAT"
        exploreText="Explore Achievements"
        exploreLink="/"
        bgImage={logisticsImage}
        imageAlt="Achievements Banner"
      />

      <section id="recognition" className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-5 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <p className="mb-3 font-badge text-xs font-bold uppercase tracking-[0.2em] text-[#f36f35]">A record of commitment</p>
              <h2 className="max-w-2xl font-heading text-3xl font-extrabold leading-tight text-[#171c22] sm:text-4xl lg:text-5xl">
                Every recognition tells a story of people, process, and purpose.
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-7 text-[#646b73] lg:justify-self-end">
              Select a recognition to see the principle behind it. The standard is not a finish line; it is how we approach the next project.
            </p>
          </div>

          <div className="grid overflow-hidden border border-[#dfe3e7] lg:grid-cols-[0.9fr_1.1fr]">
            {/* Left Column: Active Trophy Photo & Details */}
            <div className="relative flex min-h-[460px] sm:min-h-[520px] lg:min-h-[560px] items-center justify-center overflow-hidden bg-[#f4f5f7] p-8 sm:p-10">
              <div className="absolute inset-0 opacity-50" style={{ backgroundImage: 'linear-gradient(rgba(31,31,31,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(31,31,31,.045) 1px, transparent 1px)', backgroundSize: '38px 38px' }} />
              
              <div className="absolute left-8 top-8 flex items-center gap-2 font-badge text-[10px] font-bold uppercase tracking-[0.16em] text-[#747b83]">
                <Award size={15} className="text-[#f36f35]" />
                Featured recognition
              </div>

              <div key={activeItem.id} className="relative flex w-full flex-col items-center text-center animate-[achievement-rise_450ms_cubic-bezier(.16,1,.3,1)_both]">
                {/* Trophy Photo Showcase */}
                <div className="mb-5 flex h-36 w-36 sm:h-44 sm:w-44 items-center justify-center rounded-full border border-[#f36f35]/25 bg-gradient-to-t from-[#fff0ea] via-white to-white shadow-[0_16px_40px_rgba(243,111,53,0.12)]">
                  <img
                    src={activeItem.image}
                    alt={activeItem.title}
                    className="h-28 w-28 sm:h-36 sm:w-36 object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.18)] transition-transform duration-500 hover:scale-105"
                  />
                </div>

                <p className="font-badge text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] text-[#f36f35]">
                  {activeItem.category}
                </p>

                <h3 className="mt-2.5 max-w-md font-heading text-2xl sm:text-3xl font-extrabold leading-tight text-[#171c22]">
                  {activeItem.title}
                </h3>

                <p className="mt-3.5 max-w-md text-sm sm:text-[14.5px] leading-relaxed text-[#5a626a]">
                  {activeItem.description}
                </p>
              </div>

              {/* Counter Indicator */}
              <span className="absolute bottom-7 right-7 font-badge text-xs font-semibold tabular-nums text-[#90969c]">
                {String(activeRecognition + 1).padStart(2, '0')} <span className="mx-1 text-[#f36f35]">/</span> {String(recognitions.length).padStart(2, '0')}
              </span>
            </div>

            {/* Right Column: List of 5 Trophies with Photo Thumbnails */}
            <div className="flex flex-col divide-y divide-[#e5e8eb] bg-white">
              {recognitions.map((recognition, index) => {
                const isActive = activeRecognition === index;
                return (
                  <button
                    key={recognition.id}
                    type="button"
                    onClick={() => setActiveRecognition(index)}
                    aria-pressed={isActive}
                    className={`group flex flex-1 items-center gap-3.5 sm:gap-4 px-5 py-4 sm:px-8 sm:py-5 text-left transition-all duration-200 cursor-pointer ${
                      isActive
                        ? 'bg-[#fff8f4] border-l-4 border-l-[#f36f35]'
                        : 'hover:bg-[#fbfcfd] border-l-4 border-l-transparent'
                    }`}
                  >
                    {/* Index Number */}
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center border text-xs font-bold transition-colors ${
                        isActive
                          ? 'border-[#f36f35] bg-[#f36f35] text-white'
                          : 'border-[#dfe3e7] text-[#777f87] group-hover:border-[#f36f35] group-hover:text-[#f36f35]'
                      }`}
                    >
                      {String(index + 1).padStart(2, '0')}
                    </span>

                    {/* Trophy Thumbnail Preview */}
                    <div
                      className={`flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-lg border p-1 transition-all ${
                        isActive
                          ? 'border-[#f36f35]/30 bg-white shadow-sm'
                          : 'border-gray-200/80 bg-gray-50/80 group-hover:border-[#f36f35]/30 group-hover:bg-white'
                      }`}
                    >
                      <img
                        src={recognition.image}
                        alt={recognition.title}
                        className="h-full w-full object-contain"
                      />
                    </div>

                    {/* Title and Category */}
                    <span className="min-w-0 flex-1">
                      <span className="block font-badge text-[10px] font-bold uppercase tracking-[0.15em] text-[#858c93]">
                        {recognition.category}
                      </span>
                      <span
                        className={`mt-0.5 block font-heading text-base font-bold sm:text-[17px] ${
                          isActive ? 'text-[#1f1f1f]' : 'text-[#555d65] group-hover:text-[#1f1f1f]'
                        }`}
                      >
                        {recognition.title}
                      </span>
                    </span>

                    {/* Arrow Icon */}
                    <ArrowRight
                      size={18}
                      className={`shrink-0 transition-transform ${
                        isActive
                          ? 'translate-x-0 text-[#f36f35]'
                          : '-translate-x-1 text-[#aeb4ba] group-hover:translate-x-0 group-hover:text-[#f36f35]'
                      }`}
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#e4e7ea] bg-[#f4f5f7] px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex max-w-2xl gap-4">
            <BadgeCheck className="mt-1 shrink-0 text-[#f36f35]" size={25} />
            <div>
              <h2 className="font-heading text-xl font-extrabold text-[#1f1f1f] sm:text-2xl">Built on standards. Strengthened by trust.</h2>
              <p className="mt-2 text-sm leading-6 text-[#646b73]">Learn more about the people and principles behind our work.</p>
            </div>
          </div>
          <Link to="/about" className="inline-flex w-fit items-center gap-3 border-b border-[#f36f35] pb-2 font-badge text-xs font-bold uppercase tracking-[0.12em] text-[#1f1f1f] transition-colors hover:text-[#f36f35]">
            Meet ANM Ispat <ArrowRight size={16} />
          </Link>
        </div>
      </section>
      <style>{`
        @keyframes achievement-rise { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes achievement-rule { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @media (prefers-reduced-motion: reduce) { .animate-\\[achievement-rise_700ms_cubic-bezier\\(.16\\,1\\,.3\\,1\\)_both\\], .animate-\\[achievement-rise_450ms_cubic-bezier\\(.16\\,1\\,.3\\,1\\)_both\\], .animate-\\[achievement-rule_1\\.1s_ease-out_forwards\\] { animation: none; } }
      `}</style>
    </main>
  );
}