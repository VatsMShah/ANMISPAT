import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight, Sparkles, Heart, BookOpen, Flag, ShieldCheck } from 'lucide-react';

import csrHeroBg from '../assets/images/mission-vision.png';

// Downloaded images from Google Drive
import schoolAssemblyImg from '../assets/csr-images/csr-1.png';
import ceremonyImg from '../assets/csr-images/csr-2.jpg';
import goshalaFrameImg from '../assets/csr-images/csr-3.jpg';
import eyeCampImg from '../assets/csr-images/csr-4.png';
import womenDigitalTrainingImg from '../assets/csr-images/csr-5.png';
import oxygenConcentratorImg from '../assets/csr-images/csr-6.png';
import goshalaRoofImg from '../assets/csr-images/csr-goshala-roof.png';

const CSR_CATEGORIES = [
  {
    id: 'education',
    name: 'Education',
    icon: BookOpen,
    description: 'Empowering children and women through foundational schooling, digital literacy, and student recognition programmes.',
    items: [
      {
        id: 'edu-1',
        title: 'Rural School Assembly & Education Support',
        subtitle: 'Supporting district schools with essential supplies and educational infrastructure.',
        src: schoolAssemblyImg,
      },
      {
        id: 'edu-2',
        title: 'Women Digital Literacy & Vocational Skills Training',
        subtitle: 'Equipping rural women with modern computer literacy and employability skills.',
        src: womenDigitalTrainingImg,
      },
      {
        id: 'edu-3',
        title: 'Community Education & Student Recognition',
        subtitle: 'Felicitation and encouragement awards for deserving students.',
        src: ceremonyImg,
      },
    ],
  },
  {
    id: 'community',
    name: 'Community Upliftment',
    icon: Heart,
    description: 'Direct grassroots initiatives in animal welfare, healthcare access, and community infrastructure.',
    items: [
      {
        id: 'comm-1',
        title: 'Goshala AP',
        subtitle: 'Durable metal roofing and structural shelter built for cattle welfare in Andhra Pradesh.',
        src: goshalaRoofImg,
      },
      {
        id: 'comm-2',
        title: 'Goshala AP - Metal Roofing & Structural Fabrication',
        subtitle: 'Fabricating heavy-duty steel roof frames for rural cattle shelter protection.',
        src: goshalaFrameImg,
      },
      {
        id: 'comm-3',
        title: 'Community Vision Screening & Eye Care Camp',
        subtitle: 'Free diagnostic eye checkups, cataract support, and spectacles distribution.',
        src: eyeCampImg,
      },
    ],
  },
  {
    id: 'nation',
    name: 'Service to Nation',
    icon: Flag,
    description: 'Stepping forward during critical health emergencies and humanitarian relief efforts across India.',
    items: [
      {
        id: 'nat-1',
        title: 'Emergency Healthcare & Oxygen Concentrator Relief',
        subtitle: 'Procuring and donating medical-grade oxygen concentrators during peak health crises.',
        src: oxygenConcentratorImg,
      },
      {
        id: 'nat-2',
        title: 'Community Health Infrastructure Relief',
        subtitle: 'Providing rapid equipment support and medical aid to frontline healthcare facilities.',
        src: eyeCampImg,
      },
    ],
  },
];

export default function CSRInitiatives() {
  const [activeTab, setActiveTab] = useState('community');
  const [currentIndex, setCurrentIndex] = useState(0);

  const activeCategory = CSR_CATEGORIES.find((c) => c.id === activeTab) || CSR_CATEGORIES[0];
  const items = activeCategory.items;

  // When switching tabs, reset slider index
  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    setCurrentIndex(0);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  // Safe slide indices for 3-card coverflow view
  const prevIndex = (currentIndex - 1 + items.length) % items.length;
  const nextIndex = (currentIndex + 1) % items.length;

  return (
    <main className="relative w-full overflow-hidden bg-white font-sans">
      
      {/* =====================================================
          1. HERO SECTION (Identical to About & Products: ~30% Viewport)
      ====================================================== */}
      <section className="relative w-full h-[30vh] min-h-[220px] max-h-[300px] flex flex-col justify-end overflow-hidden bg-[#0a1120]">
        
        {/* Full-width Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={csrHeroBg} 
            alt="CSR Banner" 
            className="w-full h-full object-cover object-center"
          />
          {/* Subtle Dark Overlay for Legibility */}
          <div className="absolute inset-0 bg-black/55 z-10" />
        </div>

        {/* Content Container - Bottom Left Aligned, ONLY "CSR" */}
        <div className="max-w-[1280px] w-full mx-auto px-6 sm:px-8 md:px-12 relative z-20 pb-7 sm:pb-9">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight uppercase leading-none drop-shadow-md">
            CSR
          </h1>
        </div>

      </section>


      {/* =====================================================
          2. CONTENT SECTION (Retrieved from CSR page)
      ====================================================== */}
      <section className="relative border-b border-gray-100 bg-[#fbfbfb] py-14 sm:py-20">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Heading & Philosophy */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-[#fbd8cb] bg-[#fff1eb] px-3.5 py-1.5 font-badge text-[11px] font-bold uppercase tracking-[0.18em] text-[#e05d23] mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                Purpose-Driven Responsibility
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#111827] tracking-tight leading-[1.12]">
                Giving back to the society{' '}
                <span className="text-[#f36f35]">we operate in.</span>
              </h2>

              <p className="mt-5 text-base sm:text-lg font-medium leading-relaxed text-[#1f2937]">
                A business operates within a community, never in isolation. The society we work in must
                benefit and grow alongside us.
              </p>

              <div className="mt-4 space-y-3 text-sm sm:text-[15px] leading-relaxed text-[#555]">
                <p>
                  Our CSR work builds trust with customers, partners, and institutions at district, state,
                  and national levels. We measure success by tangible results delivered on the ground,
                  not just declarations.
                </p>
                <p>
                  All initiatives align with Schedule VII under Section 135 of the Companies Act, 2013,
                  spanning quality education, healthcare, community welfare, and emergency service to
                  the nation.
                </p>
              </div>
            </div>

            {/* Right Column: Three Pillar Highlights */}
            <div className="lg:col-span-5 flex flex-col gap-3.5">
              
              <div className="p-5 rounded-2xl bg-white border border-gray-200/80 shadow-sm transition-all hover:border-[#f36f35]/40 hover:shadow-md">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-orange-50 text-[#f36f35] flex items-center justify-center">
                    <BookOpen className="w-4 h-4" />
                  </div>
                  <h3 className="font-heading font-bold text-base text-[#111827]">Education &amp; Literacy</h3>
                </div>
                <p className="text-xs sm:text-sm text-[#666] leading-relaxed">
                  Support for rural school infrastructure, student recognition, and digital literacy training.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-gray-200/80 shadow-sm transition-all hover:border-[#f36f35]/40 hover:shadow-md">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-orange-50 text-[#f36f35] flex items-center justify-center">
                    <Heart className="w-4 h-4" />
                  </div>
                  <h3 className="font-heading font-bold text-base text-[#111827]">Community Upliftment</h3>
                </div>
                <p className="text-xs sm:text-sm text-[#666] leading-relaxed">
                  Direct welfare, cattle shelter construction (Goshala AP), and preventive vision care camps.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-gray-200/80 shadow-sm transition-all hover:border-[#f36f35]/40 hover:shadow-md">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-orange-50 text-[#f36f35] flex items-center justify-center">
                    <Flag className="w-4 h-4" />
                  </div>
                  <h3 className="font-heading font-bold text-base text-[#111827]">Service to Nation</h3>
                </div>
                <p className="text-xs sm:text-sm text-[#666] leading-relaxed">
                  Emergency relief and vital life-saving oxygen concentrator donations during national health crises.
                </p>
              </div>

            </div>

          </div>
        </div>
      </section>


      {/* =====================================================
          3. CLASSIFIED IMAGES CAROUSEL (Exact Match to User Design)
      ====================================================== */}
      <section className="relative py-14 sm:py-20 bg-[#f4f5f7] overflow-hidden">
        
        {/* Subtle Background Pattern */}
        <div 
          className="pointer-events-none absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: 'radial-gradient(#111827 1.5px, transparent 1.5px)',
            backgroundSize: '24px 24px',
          }}
        />

        <div className="relative max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Header */}
          <div className="text-center mb-8 sm:mb-10">
            <span className="font-badge text-xs font-bold uppercase tracking-[0.18em] text-[#f36f35]">
              Field Gallery &amp; Initiatives
            </span>
            <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#111827] tracking-tight">
              On-Ground Impact in Action
            </h2>
          </div>

          {/* =================================================
              TOP TAB BAR (Matching screenshot: Dark Bar with Underline)
          ================================================== */}
          <div className="max-w-[760px] mx-auto mb-10 sm:mb-14">
            <div className="bg-[#303030] rounded-lg sm:rounded-xl p-1.5 flex items-center justify-center sm:justify-around shadow-md">
              {CSR_CATEGORIES.map((cat) => {
                const isActive = cat.id === activeTab;
                return (
                  <button
                    key={cat.id}
                    onClick={() => handleTabChange(cat.id)}
                    className={`
                      relative flex-1 py-3 px-3 sm:px-6 text-center text-xs sm:text-sm font-semibold transition-all duration-300
                      ${isActive ? 'text-white' : 'text-gray-400 hover:text-gray-200'}
                    `}
                  >
                    <span>{cat.name}</span>
                    
                    {/* Active White Underline Indicator matching user's uploaded image */}
                    {isActive && (
                      <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-white rounded-full transition-all duration-300" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>


          {/* =================================================
              CAROUSEL / 3D COVERFLOW SLIDER
          ================================================== */}
          <div className="relative flex flex-col items-center justify-center">
            
            {/* Cards Showcase Area */}
            <div className="relative w-full max-w-[1050px] h-[280px] sm:h-[380px] md:h-[430px] flex items-center justify-center overflow-hidden">
              
              {/* LEFT CARD (Peeking in) */}
              {items.length > 1 && (
                <div
                  onClick={handlePrev}
                  className="
                    absolute left-[-2%] sm:left-[2%] md:left-[5%]
                    w-[220px] sm:w-[320px] md:w-[380px]
                    h-[210px] sm:h-[300px] md:h-[340px]
                    rounded-2xl overflow-hidden
                    shadow-md cursor-pointer
                    opacity-50 hover:opacity-75
                    transition-all duration-500 ease-out
                    transform -translate-x-1/4 sm:-translate-x-12 scale-90
                    z-10
                  "
                >
                  <img
                    src={items[prevIndex].src}
                    alt={items[prevIndex].title}
                    className="w-full h-full object-cover object-center pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                </div>
              )}

              {/* CENTER ACTIVE CARD */}
              <div
                key={`${activeTab}-${currentIndex}`}
                className="
                  relative z-20
                  w-[92%] sm:w-[540px] md:w-[620px]
                  h-[240px] sm:h-[340px] md:h-[380px]
                  rounded-2xl overflow-hidden
                  shadow-2xl border-2 border-white/60
                  transition-all duration-500 ease-out
                  animate-fadeIn
                "
              >
                <img
                  src={items[currentIndex].src}
                  alt={items[currentIndex].title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
                />

                {/* Subtle bottom shadow vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* RIGHT CARD (Peeking in) */}
              {items.length > 1 && (
                <div
                  onClick={handleNext}
                  className="
                    absolute right-[-2%] sm:right-[2%] md:right-[5%]
                    w-[220px] sm:w-[320px] md:w-[380px]
                    h-[210px] sm:h-[300px] md:h-[340px]
                    rounded-2xl overflow-hidden
                    shadow-md cursor-pointer
                    opacity-50 hover:opacity-75
                    transition-all duration-500 ease-out
                    transform translate-x-1/4 sm:translate-x-12 scale-90
                    z-10
                  "
                >
                  <img
                    src={items[nextIndex].src}
                    alt={items[nextIndex].title}
                    className="w-full h-full object-cover object-center pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                </div>
              )}

              {/* NAVIGATION BUTTON: LEFT (<) */}
              {items.length > 1 && (
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Previous photo"
                  className="
                    absolute left-4 sm:left-12 md:left-20 z-30
                    w-10 h-10 sm:w-12 sm:h-12
                    rounded-full bg-black/60 hover:bg-black/90
                    text-white shadow-lg backdrop-blur-sm
                    flex items-center justify-center
                    transition-all duration-200 hover:scale-110
                  "
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              )}

              {/* NAVIGATION BUTTON: RIGHT (>) */}
              {items.length > 1 && (
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Next photo"
                  className="
                    absolute right-4 sm:right-12 md:right-20 z-30
                    w-10 h-10 sm:w-12 sm:h-12
                    rounded-full bg-black/60 hover:bg-black/90
                    text-white shadow-lg backdrop-blur-sm
                    flex items-center justify-center
                    transition-all duration-200 hover:scale-110
                  "
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              )}

            </div>


            {/* =================================================
                CARD CAPTION (Centered directly below image, matching screenshot)
            ================================================== */}
            <div className="text-center mt-5 sm:mt-6 px-4 max-w-xl">
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-[#111827]">
                {items[currentIndex].title}
              </h3>
              {items[currentIndex].subtitle && (
                <p className="mt-1 text-xs sm:text-sm text-[#666] leading-relaxed">
                  {items[currentIndex].subtitle}
                </p>
              )}

              {/* Dot Indicators */}
              {items.length > 1 && (
                <div className="flex items-center justify-center gap-2 mt-4">
                  {items.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      aria-label={`Go to slide ${i + 1}`}
                      className={`h-2 rounded-full transition-all duration-300 ${
                        i === currentIndex ? 'w-6 bg-[#f36f35]' : 'w-2 bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

          </div>

        </div>
      </section>


      {/* =====================================================
          4. FOOTER CALLOUT / STATUTORY NOTE
      ====================================================== */}
      <section className="bg-white py-12 border-t border-gray-100">
        <div className="max-w-[1240px] mx-auto px-6 sm:px-8 text-center">
          <p className="font-badge text-xs uppercase tracking-widest text-[#888]">
            Compliance &amp; Governance
          </p>
          <p className="mt-2 text-sm text-[#555] max-w-2xl mx-auto">
            All programmes adhere to Section 135 of the Companies Act, 2013 and Schedule VII norms. For comprehensive annual CSR audit reports or institutional partnership inquiries, please contact our team.
          </p>
          <div className="mt-5">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#f36f35] px-6 py-2.5 font-badge text-xs font-bold text-white shadow-md transition-all hover:bg-[#111827]"
            >
              Get In Touch With CSR Team
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
