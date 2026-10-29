import React, { useEffect, useState, useRef, useCallback } from 'react';
import { X, Award, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

import award1Img from '../assets/awards-images/award-1.png';
import award2Img from '../assets/awards-images/award-2.png';
import award3Img from '../assets/awards-images/award-3.png';
import award4Img from '../assets/awards-images/award-4.png';
import award5Img from '../assets/awards-images/award-5.png';

const awardsData = [
  {
    id: 1,
    image: award1Img,
    title: 'Best Brands 2025',
    issuer: 'The Economic Times / ET Edge',
    category: 'Colorshine recognised as one of the Best Brands',
    imgClassName: '',
    shadowWidth: 'w-32 sm:w-40',
  },
  {
    id: 2,
    image: award2Img,
    title: 'Star Performer of The Year',
    issuer: 'AM/NS Steel Star',
    category: 'Abhay Ispat (India) Pvt. Ltd. - Central',
    // Rotate +2.3deg to level the angled bottom edge flush with the ground line
    imgClassName: 'rotate-[2.3deg] origin-bottom',
    shadowWidth: 'w-36 sm:w-44',
  },
  {
    id: 3,
    image: award3Img,
    title: 'Retail Rockstar',
    issuer: 'Tata Steel (Tata Kosh)',
    category: 'Top Performing ASO (ANM Ispat Pvt. Ltd. : Mumbai)',
    imgClassName: '',
    shadowWidth: 'w-24 sm:w-28',
  },
  {
    id: 4,
    image: award4Img,
    title: 'Steel Distributor of the Year',
    issuer: 'BCC&I & Tata Steel',
    category: 'Manufacturing & MSME Excellence Award (ANM Ispat Pvt. Ltd.)',
    // Slight leveling and custom shadow for faceted crystal stand
    imgClassName: 'rotate-[0.6deg] origin-bottom',
    shadowWidth: 'w-28 sm:w-34',
  },
  {
    id: 5,
    image: award5Img,
    title: 'Market Development of LC Grades',
    issuer: 'Tata Steel (Manthan)',
    category: 'Special Appreciation Winner (ANM Ispat Pvt. Ltd., Mumbai)',
    imgClassName: '',
    shadowWidth: 'w-32 sm:w-38',
  },
];

export default function Awards() {
  const [selectedAward, setSelectedAward] = useState(null);
  const scrollRef = useRef(null);
  const isDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftStartRef = useRef(0);
  const hasDraggedRef = useRef(false);
  const scrollPosRef = useRef(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Triple the awards array for seamless bidirectional infinite scrolling
  const displayedAwards = [...awardsData, ...awardsData, ...awardsData];

  // Auto-scroll loop using JS float accumulator to ensure smooth sliding on all displays
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    if (el.scrollLeft === 0 && el.scrollWidth > 0) {
      el.scrollLeft = el.scrollWidth / 3;
      scrollPosRef.current = el.scrollLeft;
    } else {
      scrollPosRef.current = el.scrollLeft;
    }

    let animationFrameId;
    let lastTime = performance.now();
    // 38px/sec gives an elegant, readable sliding pace
    const baseSpeed = 38;

    const step = (now) => {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      if (!isDownRef.current && !isHovered && el) {
        scrollPosRef.current += baseSpeed * dt;
        const oneThird = el.scrollWidth / 3;

        if (oneThird > 0) {
          if (scrollPosRef.current >= oneThird * 2) {
            scrollPosRef.current -= oneThird;
          } else if (scrollPosRef.current <= 0) {
            scrollPosRef.current += oneThird;
          }
        }

        el.scrollLeft = scrollPosRef.current;
      }

      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    const handleGlobalRelease = () => {
      isDownRef.current = false;
      setIsDragging(false);
    };

    window.addEventListener('mouseup', handleGlobalRelease);
    window.addEventListener('touchend', handleGlobalRelease);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mouseup', handleGlobalRelease);
      window.removeEventListener('touchend', handleGlobalRelease);
    };
  }, [isHovered]);

  // Infinite wrap-around check on manual scroll / wheel
  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const oneThird = el.scrollWidth / 3;
    if (oneThird <= 0) return;

    if (el.scrollLeft >= oneThird * 2) {
      el.scrollLeft -= oneThird;
    } else if (el.scrollLeft <= 5) {
      el.scrollLeft += oneThird;
    }
    scrollPosRef.current = el.scrollLeft;
  }, []);

  // Slide left or right by 1 award
  const handleSlide = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const cardEl = el.querySelector('.award-card');
    const stepAmount = cardEl ? cardEl.offsetWidth + 24 : 330;
    scrollPosRef.current += direction * stepAmount;

    const oneThird = el.scrollWidth / 3;
    if (oneThird > 0) {
      if (scrollPosRef.current >= oneThird * 2) {
        scrollPosRef.current -= oneThird;
      } else if (scrollPosRef.current <= 0) {
        scrollPosRef.current += oneThird;
      }
    }

    el.scrollTo({
      left: scrollPosRef.current,
      behavior: 'smooth',
    });
  };

  // Pointer Drag handlers (unified for mouse & touch)
  const handlePointerDown = (e) => {
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    const el = scrollRef.current;
    if (!el) return;
    isDownRef.current = true;
    setIsDragging(true);
    startXRef.current = e.pageX - el.offsetLeft;
    scrollLeftStartRef.current = el.scrollLeft;
    scrollPosRef.current = el.scrollLeft;
    hasDraggedRef.current = false;
  };

  const handlePointerMove = (e) => {
    if (!isDownRef.current) return;
    const el = scrollRef.current;
    if (!el) return;
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startXRef.current) * 1.6;
    if (Math.abs(walk) > 5) {
      hasDraggedRef.current = true;
    }
    el.scrollLeft = scrollLeftStartRef.current - walk;
    scrollPosRef.current = el.scrollLeft;
  };

  const handlePointerUpOrLeave = (e) => {
    if (e?.pointerType !== 'touch') {
      setIsHovered(false);
    }
    isDownRef.current = false;
    setIsDragging(false);
  };

  const handlePointerEnter = (e) => {
    if (e.pointerType === 'touch') return;
    setIsHovered(true);
  };

  const handleCardClick = (award) => {
    if (!hasDraggedRef.current) {
      setSelectedAward(award);
    }
  };

  // Close modal on Escape
  useEffect(() => {
    if (!selectedAward) return undefined;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedAward(null);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedAward]);

  return (
    <section id="awards" className="relative w-full overflow-hidden font-sans border-t border-b border-gray-200 bg-[#edf1f5] pt-16 sm:pt-20 select-none">
      
      {/* Focused Center Orange Backlight Glow behind Trophies on the Wall (Matching Reference Image) */}
      <div
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-[100px] sm:top-[120px] w-[650px] sm:w-[950px] lg:w-[1150px] h-[360px] sm:h-[440px] rounded-full blur-3xl opacity-90 z-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 65%, rgba(243, 111, 53, 0.45) 0%, rgba(251, 146, 60, 0.25) 35%, rgba(254, 215, 170, 0.12) 60%, transparent 75%)',
        }}
      />
      <div
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-[140px] sm:top-[160px] w-[420px] sm:w-[620px] h-[220px] sm:h-[280px] rounded-full blur-2xl opacity-75 z-0"
        style={{
          background: 'radial-gradient(ellipse at 50% 70%, rgba(243, 111, 53, 0.38) 0%, rgba(255, 154, 98, 0.18) 45%, transparent 70%)',
        }}
      />

      <div className="max-w-[1280px] mx-auto px-6 sm:px-8 relative z-20 pb-8 sm:pb-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <p className="mb-3 font-badge text-xs font-bold uppercase tracking-[0.2em] text-[#f36f35]">
              OUR ACCOLADES
            </p>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black text-[#111827] tracking-tight leading-[1.15] mb-3">
              Recognized for <span className="text-[#f36f35]">Excellence & Quality</span>
            </h2>

            <p className="text-sm sm:text-[15px] text-[#555555] leading-relaxed">
              Our commitment to quality, safety, and cutting-edge industrial supply has earned us prestigious recognition from Tata Steel, AM/NS, and industry bodies.
            </p>
          </div>

          <a
            href="/achievements"
            className="inline-flex w-fit items-center gap-2.5 rounded-full border border-gray-300 bg-white px-5 py-2.5 font-badge text-xs font-bold text-[#111827] shadow-sm hover:border-[#f36f35] hover:text-[#f36f35] hover:shadow-md transition-all duration-300 shrink-0"
          >
            <span>View All Accolades</span>
            <ArrowRight size={14} className="text-[#f36f35]" />
          </a>
        </div>

      </div>

      {/* Infinite Continuous Sliding Carousel (In one frame exactly 4 awards) */}
      <div className="relative w-full overflow-hidden">
        {/* The White Base Surface (Horizon line starts behind the trophies; floor extends to bottom) */}
        <div className="absolute inset-x-0 bottom-0 top-[160px] sm:top-[180px] bg-white border-t border-gray-200/90 shadow-[0_-4px_25px_rgba(0,0,0,0.03)] z-0 pointer-events-none" />

        <style>{`
          .awards-scroll-container::-webkit-scrollbar {
            display: none;
          }
          .awards-scroll-container {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .awards-mask {
            -webkit-mask-image: linear-gradient(to right, transparent, #000 2%, #000 98%, transparent);
            mask-image: linear-gradient(to right, transparent, #000 2%, #000 98%, transparent);
          }
          @media (max-width: 640px) {
            .awards-mask {
              -webkit-mask-image: none;
              mask-image: none;
            }
          }
        `}</style>

        {/* 4-Awards Constrained Frame */}
        <div className="max-w-[1380px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="relative">
            {/* Carousel Navigation Arrow Controls */}
            <button
              type="button"
              onClick={() => handleSlide(-1)}
              aria-label="Previous award"
              className="absolute -left-2 sm:-left-4 md:-left-5 top-[125px] sm:top-[140px] z-20 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-gray-200 bg-white/95 backdrop-blur-sm text-gray-700 shadow-md transition-all duration-200 hover:border-[#f36f35] hover:text-[#f36f35] hover:scale-105 hover:shadow-lg focus:outline-none cursor-pointer"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => handleSlide(1)}
              aria-label="Next award"
              className="absolute -right-2 sm:-right-4 md:-right-5 top-[125px] sm:top-[140px] z-20 flex h-10 w-10 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-gray-200 bg-white/95 backdrop-blur-sm text-gray-700 shadow-md transition-all duration-200 hover:border-[#f36f35] hover:text-[#f36f35] hover:scale-105 hover:shadow-lg focus:outline-none cursor-pointer"
            >
              <ChevronRight className="h-5 w-5" />
            </button>

            <div className="awards-mask py-4 overflow-hidden">
              <div
                ref={scrollRef}
                onScroll={handleScroll}
                onPointerEnter={handlePointerEnter}
                onPointerLeave={handlePointerUpOrLeave}
                onPointerDown={handlePointerDown}
                onPointerMove={handlePointerMove}
                onPointerUp={handlePointerUpOrLeave}
                className={`awards-scroll-container flex items-start gap-4 sm:gap-5 md:gap-6 lg:gap-6 overflow-x-auto cursor-grab ${
                  isDragging ? 'cursor-grabbing active:cursor-grabbing' : ''
                }`}
                style={{ willChange: 'scroll-position' }}
              >
                {displayedAwards.map((award, index) => (
                  <div
                    key={`${award.id}-${index}`}
                    onClick={() => handleCardClick(award)}
                    className="award-card group flex flex-col items-center w-[85%] sm:w-[calc((100%-20px)/2)] md:w-[calc((100%-48px)/3)] lg:w-[calc((100%-72px)/4)] shrink-0 cursor-pointer select-none px-2 transition-transform duration-300 hover:-translate-y-2 text-center"
                  >
                    {/* Trophy sitting firmly on the white surface */}
                    <div className="relative w-full h-[240px] sm:h-[270px] flex flex-col items-center justify-end pb-0">
                      {/* Trophy Image with custom leveling */}
                      <img
                        src={award.image}
                        alt={award.title}
                        draggable={false}
                        className={`max-h-[220px] sm:max-h-[250px] w-auto object-contain transition-transform duration-500 ease-out group-hover:scale-105 pointer-events-none drop-shadow-[0_4px_10px_rgba(0,0,0,0.08)] z-10 ${award.imgClassName || ''}`}
                      />

                      {/* Realistic Ground Contact Shadow cast onto the white surface */}
                      <div className={`${award.shadowWidth || 'w-28 sm:w-36'} h-2.5 bg-black/60 rounded-[100%] blur-[2px] -mt-1 z-10 transition-all duration-300 group-hover:scale-95 group-hover:bg-black/40`} />
                      <div className="w-40 sm:w-48 h-4 bg-black/20 rounded-[100%] blur-md -mt-2 z-0 transition-all duration-300 group-hover:w-44" />
                      <div className="w-48 sm:w-56 h-6 bg-[#f36f35]/15 rounded-[100%] blur-xl -mt-3 z-0" />
                    </div>

                    {/* Content below trophy on the white surface */}
                    <div className="mt-4 pb-6 flex flex-col items-center max-w-[260px]">
                      <span className="font-badge text-[10.5px] font-bold uppercase tracking-wider text-[#f36f35] block mb-1">
                        {award.issuer}
                      </span>
                      
                      <h3 className="font-heading text-base sm:text-lg font-black text-[#111827] leading-snug group-hover:text-[#f36f35] transition-colors line-clamp-2">
                        {award.title}
                      </h3>
                      
                      <p className="mt-1 font-body text-xs text-gray-500 line-clamp-2 leading-relaxed">
                        {award.category}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* High-Resolution Award Details Modal */}
      {selectedAward && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm animate-fadeIn"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedAward(null)}
        >
          <div
            className="relative w-full max-w-lg rounded-2xl bg-white p-6 sm:p-8 text-[#1f1f1f] shadow-2xl flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedAward(null)}
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all hover:bg-[#f36f35] hover:text-white"
              aria-label="Close award modal"
            >
              <X size={18} />
            </button>

            {/* High-Res Trophy Image */}
            <div className="relative flex items-center justify-center w-full h-72 sm:h-80 bg-gradient-to-b from-[#f8f9fa] to-[#edf0f5] rounded-xl p-6 mb-5 border border-gray-100 shadow-inner">
              <img
                src={selectedAward.image}
                alt={selectedAward.title}
                className="max-h-full max-w-full object-contain drop-shadow-xl"
              />
            </div>

            <div className="text-center w-full">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#fdeee9] text-[#f36f35] font-badge text-xs font-bold uppercase tracking-wider mb-2">
                <Award size={14} className="text-[#f36f35]" />
                {selectedAward.issuer}
              </div>
              
              <h2 className="font-heading text-2xl font-black text-[#111827] mt-1 mb-2">
                {selectedAward.title}
              </h2>
              
              <p className="text-sm text-gray-600 font-medium leading-relaxed max-w-md mx-auto">
                {selectedAward.category}
              </p>
            </div>
          </div>
        </div>
      )}

    </section>
  );
}