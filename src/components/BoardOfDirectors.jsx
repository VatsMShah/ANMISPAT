import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Plus, X, CheckCircle2 } from 'lucide-react';
import PageHero from './PageHero.jsx';

import aboutHeroBg from '../assets/images/about-banner-new.jpg';
import vineshMehtaImg from '../assets/images/vinesh-mehta-card.jpg';
import abhayMehtaImg from '../assets/images/abhay-mehta-card.jpg';

const directorsData = [
  {
    id: 'vinesh-mehta',
    name: 'MR. VINESH MEHTA',
    designation: 'DIRECTOR, ANM ISPAT',
    image: vineshMehtaImg,
    imagePosition: 'object-center',
    // Half info displayed on the card preview
    previewBio:
      "Mr. Vinesh Mehta, a towering figure in the steel industry, is driven by a philosophy of the 5 D's: Determination, Dedication, Dynamism, Discipline, and Devotion. His journey into the steel industry began at a remarkably young age in 1976, when he first ventured into the bustling alleys of Masjid Bandar, demonstrating his early passion and commitment to the steel trade.",
    // Full info displayed inside the modal
    fullBio: [
      "Mr. Vinesh Mehta, a towering figure in the steel industry, is driven by a philosophy of the 5 D's: Determination, Dedication, Dynamism, Discipline, and Devotion.",
      "His journey into the steel industry began at a remarkably young age in 1976, when he first ventured into the bustling alleys of Masjid Bandar, demonstrating his early passion and commitment to the steel trade.",
      "Mr. Mehta's visionary leadership played a pivotal role in transitioning from traders to establishing two proprietary firms: Abhay Enterprises and Abhay Steel Private Limited. These ventures were later merged and restructured into Abhay Ispat India Private Limited in 2002, marking a significant evolution in their business model, a testament to his strategic foresight.",
    ],
    pillarsTitle: "The 5 D's Philosophy",
    pillars: [
      'Determination',
      'Dedication',
      'Dynamism',
      'Discipline',
      'Devotion',
    ],
  },
  {
    id: 'abhay-mehta',
    name: 'MR. ABHAY MEHTA',
    designation: 'DIRECTOR, ANM ISPAT',
    image: abhayMehtaImg,
    imagePosition: 'object-[center_18%]',
    // Half info displayed on the card preview
    previewBio:
      "Mr. Abhay Mehta, Director of ANM Ispat, is a cornerstone of the company's operational excellence, supply chain resilience, and enduring customer relationships. Driven by a commitment to ethical governance and modern infrastructure, his leadership ensures precision, reliability, and continuous expansion across India's industrial landscape.",
    // Full info displayed inside the modal
    fullBio: [
      "Mr. Abhay Mehta, Director of ANM Ispat, brings extensive experience, operational rigor, and strategic depth to the organization, anchoring its core values of integrity, quality, and long-term customer partnerships.",
      "Under his stewardship alongside the board, the company has scaled its distribution footprint, modernized its service center infrastructure, and forged strong alliances with India's premier primary steel producers.",
      "His commitment to sustainable growth, proactive market adaptation, and customer-first execution has been instrumental in positioning ANM Ispat as one of the most reliable and trusted steel partners in the region.",
    ],
    pillarsTitle: 'Core Leadership Pillars',
    pillars: [
      'Operational Rigor',
      'Supply Chain Resilience',
      'Strategic Partnerships',
      'Ethical Governance',
      'Customer-First Culture',
    ],
  },
];

export default function BoardOfDirectors() {
  const [activeModalDirector, setActiveModalDirector] = useState(null);

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Lock body scroll when modal is open and handle Escape key
  useEffect(() => {
    if (activeModalDirector) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e) => {
        if (e.key === 'Escape') {
          setActiveModalDirector(null);
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = 'unset';
        window.removeEventListener('keydown', handleKeyDown);
      };
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [activeModalDirector]);

  const vineshMehta = directorsData[0];
  const abhayMehta = directorsData[1];

  return (
    <main className="relative w-full overflow-hidden font-sans bg-[#fbfcfd] text-[#111827]">
      {/* =====================================================
          SECTION 1: HERO SECTION
          Standard Hero Section matching all other pages
      ====================================================== */}
      <PageHero
        title="Board of Directors"
        subtitle="ANM ISPAT"
        exploreText="Explore Leadership"
        exploreLink="/"
        bgImage={aboutHeroBg}
        imageAlt="Board of Directors Banner"
      />

      {/* Intro Header Section */}
      <section className="pt-14 sm:pt-16 pb-6 px-6 sm:px-10 lg:px-14 max-w-6xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f36f35]/10 border border-[#f36f35]/25 text-[#f36f35] text-xs font-bold tracking-widest uppercase mb-4">
          Executive Leadership
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#111827] tracking-tight">
          Guiding ANM Ispat with Vision, Scale &amp; Integrity
        </h2>
        <p className="mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Driven by decades of steel craftsmanship, strategic innovation, and steadfast commitment to client success.
        </p>
      </section>

      {/* =====================================================
          SECTION 2: MR. VINESH MEHTA
          Brand Color Themed Card:
          Left: Full portrait photo
          Right: Warm brand-tinted container with Name, Designation, Half Info & Plus button
      ====================================================== */}
      <section className="py-8 sm:py-12 px-6 sm:px-10 lg:px-14">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-[0_12px_45px_rgba(243,111,53,0.08)] border border-gray-100 hover:border-[#f36f35]/35 hover:shadow-[0_18px_55px_rgba(243,111,53,0.14)] transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              {/* Left Column: Photo */}
              <div className="lg:col-span-6 relative min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] overflow-hidden bg-gray-100">
                <img
                  src={vineshMehta.image}
                  alt={vineshMehta.name}
                  className={`w-full h-full object-cover ${vineshMehta.imagePosition} transition-transform duration-500 hover:scale-[1.02]`}
                />
                {/* Subtle light gradient transition on desktop */}
                <div className="hidden lg:block absolute inset-y-0 right-0 w-16 bg-gradient-to-r from-transparent to-white/90 pointer-events-none" />
              </div>

              {/* Right Column: Brand Theme Content */}
              <div className="lg:col-span-6 p-7 sm:p-10 lg:p-12 xl:p-14 bg-gradient-to-br from-white via-[#fffaf6] to-[#fff3eb] flex flex-col justify-between">
                <div>
                  {/* Name */}
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111827] tracking-wider uppercase font-sans">
                    {vineshMehta.name}
                  </h3>

                  {/* Designation */}
                  <div className="mt-2.5 mb-6 sm:mb-8 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#f36f35]" />
                    <p className="text-xs sm:text-sm font-bold tracking-[0.18em] text-[#f36f35] uppercase">
                      {vineshMehta.designation}
                    </p>
                  </div>

                  {/* Half Info (Preview Text) */}
                  <p className="text-[#4b5563] text-sm sm:text-base leading-relaxed font-normal">
                    {vineshMehta.previewBio}
                  </p>
                </div>

                {/* Circular Plus Button to open modal */}
                <div className="mt-8 pt-4 flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() => setActiveModalDirector(vineshMehta)}
                    aria-label={`Read full biography of ${vineshMehta.name}`}
                    className="group flex items-center gap-3.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#f36f35] focus:ring-offset-2 rounded-full"
                  >
                    <div className="w-11 h-11 rounded-full bg-[#f36f35] group-hover:bg-[#e0561b] text-white flex items-center justify-center transition-all duration-300 shadow-[0_4px_14px_rgba(243,111,53,0.35)] group-hover:shadow-[0_6px_20px_rgba(243,111,53,0.5)] group-hover:scale-110">
                      <Plus
                        className="w-5 h-5 text-white"
                        strokeWidth={2.5}
                      />
                    </div>
                    <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-gray-700 group-hover:text-[#f36f35] transition-colors duration-200">
                      Read Full Bio
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 3: MR. ABHAY MEHTA
          Brand Color Themed Card (Reversed Layout):
          Left Column (Desktop): Warm brand-tinted container with Name, Designation, Half Info & Plus button
          Right Column (Desktop): Full portrait photo
      ====================================================== */}
      <section className="py-8 sm:py-12 pb-16 sm:pb-24 px-6 sm:px-10 lg:px-14">
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-[0_12px_45px_rgba(243,111,53,0.08)] border border-gray-100 hover:border-[#f36f35]/35 hover:shadow-[0_18px_55px_rgba(243,111,53,0.14)] transition-all duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              
              {/* Left Column on Desktop / Bottom on Mobile: Brand Theme Content */}
              <div className="order-2 lg:order-1 lg:col-span-6 p-7 sm:p-10 lg:p-12 xl:p-14 bg-gradient-to-br from-white via-[#fffaf6] to-[#fff3eb] flex flex-col justify-between">
                <div>
                  {/* Name */}
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#111827] tracking-wider uppercase font-sans">
                    {abhayMehta.name}
                  </h3>

                  {/* Designation */}
                  <div className="mt-2.5 mb-6 sm:mb-8 flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#f36f35]" />
                    <p className="text-xs sm:text-sm font-bold tracking-[0.18em] text-[#f36f35] uppercase">
                      {abhayMehta.designation}
                    </p>
                  </div>

                  {/* Half Info (Preview Text) */}
                  <p className="text-[#4b5563] text-sm sm:text-base leading-relaxed font-normal">
                    {abhayMehta.previewBio}
                  </p>
                </div>

                {/* Circular Plus Button to open modal */}
                <div className="mt-8 pt-4 flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() => setActiveModalDirector(abhayMehta)}
                    aria-label={`Read full biography of ${abhayMehta.name}`}
                    className="group flex items-center gap-3.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#f36f35] focus:ring-offset-2 rounded-full"
                  >
                    <div className="w-11 h-11 rounded-full bg-[#f36f35] group-hover:bg-[#e0561b] text-white flex items-center justify-center transition-all duration-300 shadow-[0_4px_14px_rgba(243,111,53,0.35)] group-hover:shadow-[0_6px_20px_rgba(243,111,53,0.5)] group-hover:scale-110">
                      <Plus
                        className="w-5 h-5 text-white"
                        strokeWidth={2.5}
                      />
                    </div>
                    <span className="text-xs sm:text-sm font-bold tracking-wider uppercase text-gray-700 group-hover:text-[#f36f35] transition-colors duration-200">
                      Read Full Bio
                    </span>
                  </button>
                </div>
              </div>

              {/* Right Column on Desktop / Top on Mobile: Photo */}
              <div className="order-1 lg:order-2 lg:col-span-6 relative min-h-[380px] sm:min-h-[440px] lg:min-h-[480px] overflow-hidden bg-gray-100">
                <img
                  src={abhayMehta.image}
                  alt={abhayMehta.name}
                  className={`w-full h-full object-cover ${abhayMehta.imagePosition} transition-transform duration-500 hover:scale-[1.02]`}
                />
                {/* Subtle left gradient transition on desktop */}
                <div className="hidden lg:block absolute inset-y-0 left-0 w-16 bg-gradient-to-l from-transparent to-white/90 pointer-events-none" />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          INTERACTIVE MODAL: FULL DIRECTOR INFORMATION
          Mounted directly into document.body via createPortal
          Light Brand Color Theme matching the website palette
      ====================================================== */}
      {activeModalDirector &&
        createPortal(
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="director-modal-title"
            className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/60 backdrop-blur-sm transition-all duration-300"
            onClick={() => setActiveModalDirector(null)}
          >
            {/* Modal Container */}
            <div
              className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-white text-[#111827] rounded-3xl border border-gray-100 shadow-[0_25px_70px_rgba(0,0,0,0.25)] p-6 sm:p-10 my-auto transition-transform duration-300"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Brand Accent Bar on Top */}
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#f36f35] via-[#ff9865] to-[#f36f35] rounded-t-3xl" />

              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveModalDirector(null)}
                aria-label="Close biography modal"
                className="absolute top-5 right-5 sm:top-6 sm:right-6 w-10 h-10 rounded-full bg-gray-100 hover:bg-[#f36f35] text-gray-500 hover:text-white flex items-center justify-center transition-colors duration-200 cursor-pointer focus:outline-none"
              >
                <X className="w-5 h-5" strokeWidth={2.5} />
              </button>

              {/* Modal Header: Director Portrait Thumbnail & Title */}
              <div className="flex items-center gap-4 sm:gap-6 pr-12">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden border-2 border-[#f36f35]/25 shadow-md flex-shrink-0 bg-gray-100">
                  <img
                    src={activeModalDirector.image}
                    alt={activeModalDirector.name}
                    className={`w-full h-full object-cover ${activeModalDirector.imagePosition}`}
                  />
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#f36f35]/10 text-[11px] font-bold text-[#f36f35] uppercase tracking-wider mb-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f36f35]" />
                    {activeModalDirector.designation}
                  </div>
                  <h3
                    id="director-modal-title"
                    className="text-2xl sm:text-3xl font-extrabold text-[#111827] tracking-wider uppercase font-sans"
                  >
                    {activeModalDirector.name}
                  </h3>
                </div>
              </div>

              {/* Divider */}
              <div className="h-px w-full bg-gray-100 my-6 sm:my-8" />

              {/* Modal Body: Full Biography Paragraphs */}
              <div className="space-y-4 sm:space-y-5 text-[#374151] text-sm sm:text-base leading-relaxed font-normal">
                {activeModalDirector.fullBio.map((paragraph, idx) => (
                  <p key={idx} className="text-justify">
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Modal Highlights / Core Pillars */}
              {activeModalDirector.pillars && (
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <h4 className="text-xs sm:text-sm font-bold uppercase tracking-[0.18em] text-[#111827] mb-3 sm:mb-4">
                    {activeModalDirector.pillarsTitle}
                  </h4>
                  <div className="flex flex-wrap gap-2.5">
                    {activeModalDirector.pillars.map((pillar, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#fff5ee] border border-[#f36f35]/25 text-xs sm:text-sm font-semibold text-[#f36f35] hover:bg-[#f36f35] hover:text-white transition-colors"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#f36f35]" />
                        {pillar}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>,
          document.body
        )}
    </main>
  );
}
