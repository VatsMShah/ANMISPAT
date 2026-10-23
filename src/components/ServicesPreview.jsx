import { useState, useRef, useEffect, useCallback } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import consumerDurablesImage from '../assets/industry-images/consumer-durables.jpg';
import automotiveMobilityImage from '../assets/industry-images/automotive-mobility.jpg';
import industrialMachineryImage from '../assets/industry-images/industrial-machinery.jpg';
import agricultureImage from '../assets/industry-images/agriculture.jpg';
import retailConsumerImage from '../assets/industry-images/retail-consumer.jpg';
import miningConstructionImage from '../assets/industry-images/mining-construction.jpg';

const industries = [
  { name: 'Consumer Durables & Appliances', image: consumerDurablesImage },
  { name: 'Automotive & Mobility', image: automotiveMobilityImage },
  { name: 'Industrial Machinery & Engineering', image: industrialMachineryImage },
  { name: 'Agriculture', image: agricultureImage },
  { name: 'Retail & Consumer', image: retailConsumerImage },
  { name: 'Mining & Construction Equipment', image: miningConstructionImage },
];

export default function ServicesPreview() {
  const shouldReduceMotion = useReducedMotion();
  const scrollRef = useRef(null);
  const isDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftStartRef = useRef(0);
  const hasDraggedRef = useRef(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  // Triple industries for infinite bidirectional scrolling
  const displayedIndustries = [...industries, ...industries, ...industries];

  // Auto-scroll loop
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // Center scroll on middle set initially
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

  const handleCardClick = (e) => {
    if (hasDraggedRef.current) {
      e.preventDefault();
    }
  };

  return (
    <section id="services" className="bg-[#f4f5f7] py-16 sm:py-20 lg:py-24 overflow-hidden select-none">
      <div className="mx-auto max-w-7xl px-6 sm:px-10 lg:px-16">
        <motion.div
          className="mb-10 grid gap-5 lg:mb-12 lg:grid-cols-[1fr_0.7fr] lg:items-end"
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <p className="mb-3 font-badge text-xs font-bold uppercase tracking-[0.2em] text-[#f36f35]">Where we make a difference</p>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-[#111827] sm:text-4xl lg:text-5xl">
              Industries we <span className="text-[#f36f35]">serve.</span>
            </h2>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between lg:gap-6">
            <p className="max-w-lg text-sm leading-7 text-[#4c4c4c]">
              Steel solutions for the sectors building, connecting and powering our world.
            </p>
            <Link
              to="/services"
              className="inline-flex shrink-0 items-center gap-2 font-badge text-sm font-bold text-[#1f1f1f] transition-colors hover:text-[#e05d23]"
            >
              Explore all industries
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Interactive Sliding & Drag/Wheel Carousel */}
      <div className="relative w-full overflow-hidden">
        <style>{`
          .industry-scroll-container::-webkit-scrollbar {
            display: none;
          }
          .industry-scroll-container {
            -ms-overflow-style: none;
            scrollbar-width: none;
          }
          .industry-mask {
            -webkit-mask-image: linear-gradient(to right, transparent, #000 3%, #000 97%, transparent);
            mask-image: linear-gradient(to right, transparent, #000 3%, #000 97%, transparent);
          }
          @media (max-width: 640px) {
            .industry-mask {
              -webkit-mask-image: none;
              mask-image: none;
            }
          }
        `}</style>
        
        <div className="industry-mask py-3">
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
            className={`industry-scroll-container flex gap-5 overflow-x-auto pl-4 cursor-grab ${
              isDragging ? 'cursor-grabbing active:cursor-grabbing' : ''
            }`}
            style={{ willChange: 'scroll-position' }}
          >
            {displayedIndustries.map((industry, index) => (
              <Link
                to="/services"
                key={`${industry.name}-${index}`}
                onClick={handleCardClick}
                draggable={false}
                className="group relative block w-[280px] sm:w-[340px] lg:w-[390px] shrink-0 aspect-[4/3] overflow-hidden rounded-2xl bg-[#1f1f1f] shadow-[0_8px_24px_rgba(31,31,31,0.1)] transition-transform duration-300 hover:-translate-y-1.5 select-none"
              >
                <img
                  src={industry.image}
                  alt={industry.name}
                  loading="lazy"
                  draggable={false}
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 pointer-events-none select-none"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/85 via-[#111827]/25 to-transparent transition-opacity duration-300 group-hover:from-[#111827]/90" />
                <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-3 text-white sm:inset-x-6 sm:bottom-6">
                  <h3 className="font-heading text-lg sm:text-xl lg:text-2xl font-extrabold leading-snug line-clamp-2">
                    {industry.name}
                  </h3>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/55 bg-white/10 transition-colors group-hover:border-[#f36f35] group-hover:bg-[#f36f35]">
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
