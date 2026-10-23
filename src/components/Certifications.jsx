import React, { useEffect, useState, useRef, useCallback } from 'react';
import { X, ArrowRight, Award } from 'lucide-react';
import logisticsImg from '../assets/images/logistics.png';

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
    category: 'Colorshine recognised as one of the Best Brands - 2025',
    year: '2025',
  },
  {
    id: 2,
    image: award2Img,
    title: 'Star Performer of The Year',
    issuer: 'AM/NS Steel Star',
    category: 'Abhay Ispat (India) Pvt. Ltd. - Central',
    year: '2024',
  },
  {
    id: 3,
    image: award3Img,
    title: 'Retail Rockstar',
    issuer: 'Tata Steel (Tata Kosh)',
    category: 'Top Performing ASO (ANM Ispat Pvt. Ltd. : Mumbai)',
    year: '2020',
  },
  {
    id: 4,
    image: award4Img,
    title: 'Steel Distributor of the Year',
    issuer: 'BCC&I & Tata Steel',
    category: 'Manufacturing & MSME Excellence Award (ANM Ispat Pvt. Ltd.)',
    year: '2021-22',
  },
  {
    id: 5,
    image: award5Img,
    title: 'Market Development of LC Grades',
    issuer: 'Tata Steel (Manthan)',
    category: 'Special Appreciation Winner (ANM Ispat Pvt. Ltd., Mumbai)',
    year: '2023-24',
  },
];

export default function Certifications() {
  const [selectedAward, setSelectedAward] = useState(null);
  const scrollRef = useRef(null);
  const isDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftStartRef = useRef(0);
  const hasDraggedRef = useRef(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Triple the awards array for seamless bidirectional infinite scrolling
  const displayedAwards = [...awardsData, ...awardsData, ...awardsData];

  // Auto-scroll loop
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    if (el.scrollLeft === 0) {
      el.scrollLeft = el.scrollWidth / 3;
    }

    let animationFrameId;
    const speed = 0.8;

    const step = () => {
      if (!isDownRef.current && !isHovered && el) {
        el.scrollLeft += speed;
        const oneThird = el.scrollWidth / 3;
        if (el.scrollLeft >= oneThird * 2) {
          el.scrollLeft -= oneThird;
        } else if (el.scrollLeft <= 0) {
          el.scrollLeft += oneThird;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isHovered]);

  // Infinite wrap-around check on manual scroll / wheel
  const handleScroll = useCallback(() => {
    const el = scrollRef.current;
    if (!el) return;
    const oneThird = el.scrollWidth / 3;
    if (el.scrollLeft >= oneThird * 2) {
      el.scrollLeft -= oneThird;
    } else if (el.scrollLeft <= 5) {
      el.scrollLeft += oneThird;
    }
  }, []);

  // Mouse Drag handlers
  const handleMouseDown = (e) => {
    const el = scrollRef.current;
    if (!el) return;
    isDownRef.current = true;
    setIsDragging(true);
    startXRef.current = e.pageX - el.offsetLeft;
    scrollLeftStartRef.current = el.scrollLeft;
    hasDraggedRef.current = false;
  };

  const handleMouseMove = (e) => {
    if (!isDownRef.current) return;
    const el = scrollRef.current;
    if (!el) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = (x - startXRef.current) * 1.6;
    if (Math.abs(walk) > 5) {
      hasDraggedRef.current = true;
    }
    el.scrollLeft = scrollLeftStartRef.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    isDownRef.current = false;
    setIsDragging(false);
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
    <section
      id="certifications"
      className="relative isolate overflow-hidden bg-[#3b52a4] px-6 py-12 text-white sm:px-10 lg:px-16 lg:py-16 select-none"
    >
      {/* Background image & gradient overlay matching ANM logo blue (#3b52a4) */}
      <img
        src={logisticsImg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-25"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#3b52a4]/95 via-[#344994]/95 to-[#24346e]/95" aria-hidden="true" />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2.5 font-badge text-xs font-bold uppercase tracking-[0.2em] text-[#f36f35]">
              ANM ISPAT
            </p>
            <h2 className="font-heading text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
              Global standards, industry recognition
            </h2>
          </div>
          <a
            href="/achievements"
            className="inline-flex w-fit items-center gap-3 rounded-full border border-white/60 bg-white/10 px-5 py-2.5 font-heading text-xs font-bold text-white backdrop-blur-sm transition-all hover:bg-white hover:text-[#3b52a4] shadow-md"
          >
            View All Achievements
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-sm text-[#3b52a4]">
              &rarr;
            </span>
          </a>
        </div>
      </div>

      {/* Infinite Continuous Sliding & Interactive Scroll Carousel */}
      <div className="relative w-full overflow-hidden mt-4">
        <style>{`
          .awards-scroll-container::-webkit-scrollbar {
            display: none;
          }
          .awards-scroll-container {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .awards-mask {
            -webkit-mask-image: linear-gradient(to right, transparent, #000 2.5%, #000 97.5%, transparent);
            mask-image: linear-gradient(to right, transparent, #000 2.5%, #000 97.5%, transparent);
          }
          @media (max-width: 640px) {
            .awards-mask {
              -webkit-mask-image: none;
              mask-image: none;
            }
          }
        `}</style>

        <div className="awards-mask py-4">
          <div
            ref={scrollRef}
            onScroll={handleScroll}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
              setIsHovered(false);
              handleMouseUpOrLeave();
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            className={`awards-scroll-container flex gap-6 overflow-x-auto pl-4 cursor-grab ${
              isDragging ? 'cursor-grabbing active:cursor-grabbing' : ''
            }`}
            style={{ willChange: 'scroll-position' }}
          >
            {displayedAwards.map((award, index) => (
              <article
                key={`${award.id}-${index}`}
                onClick={() => handleCardClick(award)}
                className="group relative block w-[280px] sm:w-[320px] lg:w-[340px] shrink-0 cursor-pointer rounded-2xl bg-white p-5 text-left text-[#1f1f1f] shadow-2xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_35px_rgba(0,0,0,0.25)] select-none"
              >
                {/* Trophy Image Showcase */}
                <div className="relative flex items-center justify-center h-52 sm:h-56 w-full rounded-xl bg-gradient-to-b from-[#f8f9fa] to-[#eef1f6] p-4 overflow-hidden mb-4 border border-gray-100">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,82,164,0.08)_0%,transparent_70%)]" />
                  <img
                    src={award.image}
                    alt={award.title}
                    draggable={false}
                    className="max-h-full max-w-full object-contain drop-shadow-md transition-transform duration-500 ease-out group-hover:scale-105 pointer-events-none"
                  />
                  <span className="absolute top-3 right-3 rounded-full bg-white/90 backdrop-blur-sm px-2.5 py-0.5 font-badge text-[10px] font-bold text-[#3b52a4] shadow-sm">
                    {award.year}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <Award size={13} className="text-[#f36f35]" />
                    <span className="font-badge text-[10px] font-bold uppercase tracking-wider text-[#3b52a4]">
                      {award.issuer}
                    </span>
                  </div>
                  <h3 className="font-heading text-lg font-extrabold text-[#111827] leading-tight group-hover:text-[#3b52a4] transition-colors line-clamp-1">
                    {award.title}
                  </h3>
                  <p className="mt-1.5 font-body text-xs text-gray-500 line-clamp-2 leading-relaxed">
                    {award.category}
                  </p>
                </div>
              </article>
            ))}
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
            className="relative w-full max-w-xl rounded-2xl bg-white p-6 sm:p-8 text-[#1f1f1f] shadow-2xl flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedAward(null)}
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all hover:bg-[#3b52a4] hover:text-white"
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
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#3b52a4]/10 text-[#3b52a4] font-badge text-xs font-bold uppercase tracking-wider mb-2">
                <Award size={14} className="text-[#f36f35]" />
                {selectedAward.issuer} • {selectedAward.year}
              </div>
              <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-[#111827] mt-1 mb-2">
                {selectedAward.title}
              </h2>
              <p className="text-sm sm:text-base text-gray-600 font-medium leading-relaxed max-w-md mx-auto">
                {selectedAward.category}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
