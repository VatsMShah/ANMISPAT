import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

import vineshMehtaWideImg from '../assets/images/vinesh-mehta-wide.jpg';
import abhayMehtaWideImg from '../assets/images/abhay-mehta-wide.jpg';

export default function BoardOfDirectors() {
  // Ensure page scrolls to top on navigation
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative w-full overflow-hidden font-sans bg-white text-[#2d3748]">
      
      {/* =====================================================
          SECTION 1: VINESH MEHTA
          Similar to Founder Chairman:
          - The photo covers the WHOLE section
          - Vinesh Mehta is on the left of the photo
          - Upon the photo, text is placed on the right side
          - "Chairman's Message" is replaced with "Vinesh Mehta"
      ====================================================== */}
      <section className="relative w-full overflow-hidden bg-[#e9eff4] border-b border-gray-200 min-h-[620px] sm:min-h-[680px] md:min-h-[740px] lg:min-h-[800px] xl:min-h-[860px] flex items-center">
        
        {/* Full-bleed Photo Background covering the entire section */}
        <div className="absolute inset-0 z-0">
          <img
            src={vineshMehtaWideImg}
            alt="Vinesh Mehta - Director"
            className="w-full h-full object-cover object-[25%_center] lg:object-center select-none"
          />
          {/* Subtle gradient overlay to guarantee razor-sharp text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-white/10 to-white/70 lg:to-white/60 pointer-events-none" />
        </div>

        {/* Content Container Overlaying the Photo */}
        <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 py-12 sm:py-16 md:py-20">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* -------------------------------------------------
                LEFT SIDE: SPACER (Leaves Vinesh Mehta's portrait clearly visible)
            -------------------------------------------------- */}
            <div className="hidden lg:block lg:col-span-5 min-h-[300px]" aria-hidden="true" />

            {/* -------------------------------------------------
                RIGHT SIDE: "VINESH MEHTA" TITLE & CONTENT
                Placing the text directly upon the photo
            -------------------------------------------------- */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              
              <div className="bg-white/85 backdrop-blur-md p-6 sm:p-10 rounded-2xl border border-white/70 shadow-lg lg:bg-transparent lg:backdrop-blur-none lg:p-0 lg:border-0 lg:shadow-none max-w-2xl">
                
                {/* Header Title: "Vinesh Mehta" (replaces Chairman's Message) */}
                <div className="mb-6 sm:mb-8">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#2D3748] tracking-tight font-sans drop-shadow-sm">
                    Vinesh Mehta
                  </h2>
                  <div className="mt-2.5 flex items-center gap-2">
                    <span className="h-[2px] w-8 bg-[#f36f35]" />
                    <p className="text-xs uppercase tracking-widest font-bold text-[#f36f35]">
                      Board of Directors
                    </p>
                  </div>
                </div>

                {/* Eyebrow Label (matching reference "2014 RESULTS" styling) */}
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#718096] mb-3">
                  Strategic Vision &amp; Leadership
                </div>

                {/* Main Statement / Paragraph */}
                <p className="text-xl sm:text-2xl lg:text-[25px] font-normal text-[#1A202C] leading-[1.4] tracking-tight mb-8 font-sans drop-shadow-sm">
                  At ANM Ispat, our commitment is centered on delivering enduring value, fostering resilient partnerships, and building a scalable, technology-driven platform that supports India's industrial and infrastructure expansion.
                </p>

                {/* Bulleted Highlights (Styled exactly like reference design) */}
                <div className="space-y-6">
                  
                  {/* Metric 1 */}
                  <div className="pl-1">
                    <p className="text-lg sm:text-xl font-normal text-[#1A202C] leading-snug drop-shadow-sm">
                      • <span className="italic font-medium">Leadership across</span>{' '}
                      <span className="italic font-bold text-[#111827]">50+ steel categories &amp; grades</span>
                    </p>
                    <p className="italic text-xs sm:text-sm text-[#4A5568] mt-0.5 pl-4">
                      (comprehensive supply chain network spanning major industrial hubs across India)
                    </p>
                  </div>

                  {/* Metric 2 */}
                  <div className="pl-1">
                    <p className="text-lg sm:text-xl font-normal text-[#1A202C] leading-snug drop-shadow-sm">
                      • <span className="italic font-medium">Trusted partnerships with</span>{' '}
                      <span className="italic font-bold text-[#111827]">premier primary steel producers</span>
                    </p>
                    <p className="italic text-xs sm:text-sm text-[#4A5568] mt-0.5 pl-4">
                      (authorized processing, distribution, and value-added supply chain execution)
                    </p>
                  </div>

                  {/* Metric 3 */}
                  <div className="pl-1">
                    <p className="text-lg sm:text-xl font-normal text-[#1A202C] leading-snug drop-shadow-sm">
                      • <span className="italic font-medium">Strong foundation of</span>{' '}
                      <span className="italic font-bold text-[#111827]">growth &amp; ethical governance</span>
                    </p>
                    <p className="italic text-xs sm:text-sm text-[#4A5568] mt-0.5 pl-4">
                      (building long-term customer trust through transparent trade and discipline)
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          SECTION 2: ABHAY MEHTA
          Similar to Founder Chairman:
          - The photo covers the WHOLE section
          - Abhay Mehta is on the right of the photo
          - Upon the photo, text is placed on the left side
      ====================================================== */}
      <section className="relative w-full overflow-hidden bg-[#e9eff4] border-b border-gray-200 min-h-[620px] sm:min-h-[680px] md:min-h-[740px] lg:min-h-[800px] xl:min-h-[860px] flex items-center">
        
        {/* Full-bleed Photo Background covering the entire section */}
        <div className="absolute inset-0 z-0">
          <img
            src={abhayMehtaWideImg}
            alt="Abhay Mehta - Director"
            className="w-full h-full object-cover object-[75%_center] lg:object-center select-none"
          />
          {/* Subtle gradient overlay to guarantee razor-sharp text legibility */}
          <div className="absolute inset-0 bg-gradient-to-l from-black/20 via-white/10 to-white/70 lg:to-white/60 pointer-events-none" />
        </div>

        {/* Content Container Overlaying the Photo */}
        <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 sm:px-10 lg:px-14 xl:px-16 py-12 sm:py-16 md:py-20">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* -------------------------------------------------
                LEFT SIDE: "ABHAY MEHTA" TITLE & CONTENT (Mirrored)
                Placing the text directly upon the photo
            -------------------------------------------------- */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              
              <div className="bg-white/85 backdrop-blur-md p-6 sm:p-10 rounded-2xl border border-white/70 shadow-lg lg:bg-transparent lg:backdrop-blur-none lg:p-0 lg:border-0 lg:shadow-none max-w-2xl">
                
                {/* Header Title: "Abhay Mehta" */}
                <div className="mb-6 sm:mb-8">
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-normal text-[#2D3748] tracking-tight font-sans drop-shadow-sm">
                    Abhay Mehta
                  </h2>
                  <div className="mt-2.5 flex items-center gap-2">
                    <span className="h-[2px] w-8 bg-[#f36f35]" />
                    <p className="text-xs uppercase tracking-widest font-bold text-[#f36f35]">
                      Board of Directors
                    </p>
                  </div>
                </div>

                {/* Eyebrow Label */}
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#718096] mb-3">
                  Operational Excellence &amp; Supply Chain
                </div>

                {/* Main Statement / Paragraph */}
                <p className="text-xl sm:text-2xl lg:text-[25px] font-normal text-[#1A202C] leading-[1.4] tracking-tight mb-8 font-sans drop-shadow-sm">
                  Driving operational discipline and modern supply chain innovation, we ensure that every customer receives tailored steel solutions with speed, precision, and uncompromised quality.
                </p>

                {/* Bulleted Highlights (Styled exactly like reference design) */}
                <div className="space-y-6">
                  
                  {/* Metric 1 */}
                  <div className="pl-1">
                    <p className="text-lg sm:text-xl font-normal text-[#1A202C] leading-snug drop-shadow-sm">
                      • <span className="italic font-medium">Precision processing with</span>{' '}
                      <span className="italic font-bold text-[#111827]">cut-to-length &amp; custom slitting</span>
                    </p>
                    <p className="italic text-xs sm:text-sm text-[#4A5568] mt-0.5 pl-4">
                      (tailored steel dimensions engineered to exact industrial manufacturing tolerances)
                    </p>
                  </div>

                  {/* Metric 2 */}
                  <div className="pl-1">
                    <p className="text-lg sm:text-xl font-normal text-[#1A202C] leading-snug drop-shadow-sm">
                      • <span className="italic font-medium">Just-In-Time supply with</span>{' '}
                      <span className="italic font-bold text-[#111827]">nationwide logistical reach</span>
                    </p>
                    <p className="italic text-xs sm:text-sm text-[#4A5568] mt-0.5 pl-4">
                      (rapid turnaround and dedicated fleet reducing downtime for critical projects)
                    </p>
                  </div>

                  {/* Metric 3 */}
                  <div className="pl-1">
                    <p className="text-lg sm:text-xl font-normal text-[#1A202C] leading-snug drop-shadow-sm">
                      • <span className="italic font-medium">Deep customer relationships across</span>{' '}
                      <span className="italic font-bold text-[#111827]">major industrial sectors</span>
                    </p>
                    <p className="italic text-xs sm:text-sm text-[#4A5568] mt-0.5 pl-4">
                      (partnering with leading automotive, infrastructure, engineering, and OEM leaders)
                    </p>
                  </div>

                </div>

              </div>

            </div>

            {/* -------------------------------------------------
                RIGHT SIDE: SPACER (Leaves Abhay Mehta's portrait clearly visible)
            -------------------------------------------------- */}
            <div className="hidden lg:block lg:col-span-5 min-h-[300px]" aria-hidden="true" />

          </div>

        </div>

      </section>

      {/* =====================================================
          BOTTOM DISCOVERY BANNER
      ====================================================== */}
      <section className="py-12 bg-white border-t border-gray-200">
        <div className="max-w-[1360px] mx-auto px-6 sm:px-10 lg:px-16 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h4 className="text-lg font-bold text-gray-900">
              Explore More of ANM Ispat Leadership
            </h4>
            <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
              Learn about our Founder Chairman, our journey, and nationwide steel capabilities.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <Link
              to="/about/founder-chairman"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-gray-300 text-gray-700 text-xs sm:text-sm font-bold hover:border-[#f36f35] hover:text-[#f36f35] transition-colors"
            >
              Founder Chairman
            </Link>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#f36f35] text-white text-xs sm:text-sm font-bold hover:brightness-95 shadow-sm transition-all"
            >
              <span>Explore Products</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
