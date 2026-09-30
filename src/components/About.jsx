import React from 'react';
import AboutOverviewSection from './AboutOverviewSection';

// Replace with your actual hero background image path
import aboutHeroBg from '../assets/images/about-hero.png'; 

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
                  OUR PURPOSE
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

            {/* Brand Styled Orange Button */}
            <div className="opacity-0 animate-about-fade animate-delay-200">
              <a 
                href="#learn-more"
                className="bg-[#f36f35] hover:bg-[#e05d23] text-white text-xs font-extrabold tracking-widest uppercase px-8 py-4 rounded-full shadow-[0_10px_25px_rgba(243,111,53,0.35)] hover:shadow-[0_14px_30px_rgba(243,111,53,0.5)] transition-all duration-300 inline-flex items-center justify-center gap-2 group cursor-pointer font-badge hover:-translate-y-0.5 active:translate-y-0"
              >
                <span>LEARN MORE</span>
                <span className="text-white transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>

          </div>
        </div>

      </section>
      <AboutOverviewSection/>
      {/* Place rest of About page content here */}

    </main>
  );
}