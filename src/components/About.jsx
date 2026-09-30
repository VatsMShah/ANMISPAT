import React from 'react';
import AboutOverviewSection from './AboutOverviewSection';
import WorkProcess from './WorkProcess.jsx';

// Replace with your actual hero background & section image paths
import aboutHeroBg from '../assets/images/about-hero.png'; 
import coreValuesBg from '../assets/images/core-values-engineers.png';

export default function About() {
  return (
    <main className="relative w-full overflow-hidden font-sans">
      
      {/* Inline Entrance Animations */}
      <style>{`
        @keyframes aboutFadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-about-fade {
          animation: aboutFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-delay-100 { animation-delay: 100ms; }
        .animate-delay-200 { animation-delay: 200ms; }
      `}</style>

      {/* Hero Section - Centered Vertically Across Screen Ratios */}
      <section className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden bg-[#0a1120]">
        
        {/* Full-width Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src={aboutHeroBg} 
            alt="About Us Hero" 
            className="w-full h-full object-cover object-center"
          />
          
          {/* Dark Blue-ish Tint Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a1120]/90 via-[#0a1120]/65 to-[#0a1120]/20 z-10" />
        </div>

        {/* Content Container - Vertically Centered */}
        <div className="max-w-[1280px] w-full mx-auto px-6 sm:px-8 md:px-12 relative z-20 py-24 my-auto">
          <div className="max-w-2xl text-left">
            
            {/* Minimal Brand Accent Badge */}
            <div className="opacity-0 animate-about-fade mb-6">
              <div className="inline-flex items-center gap-3">
                <span className="w-8 h-[3px] bg-[#f36f35] rounded-full" />
                <span className="font-badge text-xs font-extrabold tracking-widest uppercase text-[#f36f35]">
                  ABOUT OUR COMPANY
                </span>
              </div>
            </div>

            {/* Clean, Minimalist Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-[58px] font-extrabold text-white leading-[1.1] tracking-tight mb-6 opacity-0 animate-about-fade animate-delay-100">
              We imagine a world <br />
              <span className="text-[#f36f35]">built on purpose.</span>
            </h1>

            {/* Refined Body Subtext */}
            <p className="text-gray-300 text-base md:text-lg leading-relaxed font-normal mb-8 max-w-xl opacity-0 animate-about-fade animate-delay-100">
              Where the vast majority of people wake up inspired, feel confident wherever they are, and end the day fulfilled by the work they do.
            </p>
          </div>
        </div>

      </section>

      <AboutOverviewSection/>
      <WorkProcess/>

      {/* CORE VALUES & MISSION / VISION SECTION */}
      <section id="core-values" className="bg-white py-20 px-6 overflow-hidden">
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-stretch">
          
          {/* LEFT COLUMN: Feature Image with Dark Tint Overlay & Attached Corner Badge */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden min-h-[420px] lg:min-h-[500px] shadow-lg">
            <img 
              src={coreValuesBg} 
              alt="Engineers working" 
              className="absolute inset-0 w-full h-full object-cover object-center"
            />
            
            {/* Slight Dark Tint Overlay Across the Entire Left Section */}
            <div className="absolute inset-0 bg-black/30 z-10" />

            {/* Attached Bottom-Right Corner Block with Low Blur & Opacity */}
            <div className="absolute bottom-0 right-0 z-20 w-44 h-44 sm:w-48 sm:h-48 bg-black/25 backdrop-blur-sm rounded-tl-2xl border-t border-l border-white/20 p-6 flex flex-col justify-center items-center text-center">
              <span className="text-5xl sm:text-6xl font-extrabold text-white tracking-tight leading-none mb-1 drop-shadow-sm">
                25
              </span>
              <p className="text-base sm:text-lg font-bold text-white leading-tight drop-shadow-sm">
                Years of
              </p>
              <p className="text-xs sm:text-sm font-medium text-gray-200 drop-shadow-sm">
                Experience
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN: Content & Mission / Vision Cards */}
          <div className="lg:col-span-7 flex flex-col justify-between pt-2">
            
            {/* Top Text Content */}
            <div className="mb-10">
              <span className="font-badge text-xs font-extrabold tracking-widest uppercase text-[#f36f35] block mb-3">
                Core Values
              </span>
              
              <h2 className="text-3xl md:text-4xl lg:text-[42px] font-extrabold text-[#111827] tracking-tight leading-tight mb-4 max-w-xl">
                Trusted Global Partner For Manufacturing And Construction
              </h2>

              <p className="text-sm md:text-base text-[#666666] leading-relaxed font-normal mb-8 max-w-2xl">
                With a wealth of experience and a strong commitment to excellence, we have consistently built a reputation as a trusted partner for businesses worldwide.
              </p>

              {/* Quote CTA Button */}
              <a 
                href="/contact"
                className="inline-flex items-center gap-3 bg-[#f36f35] hover:bg-[#e05d23] text-white font-badge font-extrabold text-xs tracking-wider uppercase px-7 py-3.5 rounded-lg transition-all duration-300 shadow-md shadow-[#f36f35]/20 hover:shadow-lg hover:shadow-[#f36f35]/30 cursor-pointer"
              >
                <span>Get Your Free Quote</span>
                <span className="text-base font-normal">↗</span>
              </a>
            </div>

            {/* Bottom Split Block: Mission & Vision Cards */}
            <div className="bg-[#f8f9fa] rounded-2xl p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 gap-8 border border-gray-100">
              
              {/* Our Mission */}
              <div className="flex flex-col items-start pr-0 sm:pr-4 sm:border-r border-gray-200/80">
                <div className="w-12 h-12 rounded-xl bg-[#fdeee9] flex items-center justify-center text-[#f36f35] mb-4">
                  {/* Target / Goal Icon */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="9" strokeWidth="2" />
                    <circle cx="12" cy="12" r="5" strokeWidth="2" />
                    <circle cx="12" cy="12" r="1" fill="currentColor" />
                  </svg>
                </div>
                <h3 className="text-lg font-extrabold text-[#111827] mb-2 tracking-tight">
                  Our Mission
                </h3>
                <p className="text-xs md:text-sm text-[#666666] leading-relaxed">
                  Empowering businesses with high-quality services for sustainable growth.
                </p>
              </div>

              {/* Our Vision */}
              <div className="flex flex-col items-start pl-0 sm:pl-4">
                <div className="w-12 h-12 rounded-xl bg-[#fdeee9] flex items-center justify-center text-[#f36f35] mb-4">
                  {/* Lightbulb / Vision Icon */}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3a7 7 0 00-7 7c0 2.38 1.13 4.496 2.89 5.86a2 2 0 01.71 1.54V18a1 1 0 001 1h4a1 1 0 001-1v-.6a2 2 0 01.71-1.54A7 7 0 0019 10a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-extrabold text-[#111827] mb-2 tracking-tight">
                  Our Vision
                </h3>
                <p className="text-xs md:text-sm text-[#666666] leading-relaxed">
                  To lead globally in industrial services, with new standards.
                </p>
              </div>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
}