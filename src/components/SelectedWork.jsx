//SelectedWork.jsx
import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import steelCoilImage from '../assets/images/steel-coil-second-sec.png';
import steelSupplyImage from '../assets/images/industrial-supply.png';
import steelProcessingImage from '../assets/images/steel-processing.png';
import steelTradingImage from '../assets/images/steel-trading.png';

const projects = [
  {
    name: 'HR Coil',
    image: steelCoilImage,
    thickness: '1.60–16.00 mm',
    width: '1250, 1500, 1830 & 2000 mm',
    grade: 'E250A/BR, E350A/C, IS10748 (GR1, GR2), CHQ, BSK46, 550MC, 600MC, 700MC',
    badge: 'Hot rolled',
  },
  {
    name: 'HR Sheet / Plate',
    image: steelSupplyImage,
    thickness: '1.60–25.00 mm',
    width: '1250 & 1500 mm',
    grade: 'E250A, IS10748 (GR2)',
    badge: 'Sheet & plate',
  },
  {
    name: 'HRPO Coil',
    image: steelProcessingImage,
    thickness: '1.60–5.00 mm',
    width: '1250 mm',
    grade: 'IS1079D, E250A, E34',
    badge: 'Pickled & oiled',
  },
  {
    name: 'HRSPO Coil',
    image: steelCoilImage,
    thickness: '1.60–3.00 mm',
    width: '1250 mm',
    grade: 'IS1079D',
    badge: 'Pickled & oiled',
  },
  {
    name: 'CR Coil',
    image: steelProcessingImage,
    thickness: '0.50–3.15 mm',
    width: '1250, 1500 & 1540 mm',
    grade: 'IS513D (DQ)',
    badge: 'Cold rolled',
  },
  {
    name: 'GP',
    image: steelTradingImage,
    thickness: '0.19–1.25 mm & above',
    width: '900–1540 mm',
    grade: 'GLK1, GLR1 (soft), GLK2 (120 GSM), GK09',
    badge: 'Galvanized',
  },
];

function MagneticProductsButton() {
  const buttonRef = useRef(null);

  const handlePointerMove = (event) => {
    if (event.pointerType === 'touch' || !buttonRef.current) return;
    const bounds = buttonRef.current.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width - 0.5) * 8;
    const y = ((event.clientY - bounds.top) / bounds.height - 0.5) * 8;
    buttonRef.current.style.setProperty('--magnet-x', `${x}px`);
    buttonRef.current.style.setProperty('--magnet-y', `${y}px`);
  };

  const resetPosition = () => {
    buttonRef.current?.style.setProperty('--magnet-x', '0px');
    buttonRef.current?.style.setProperty('--magnet-y', '0px');
  };

  return (
    <Link
      ref={buttonRef}
      to="/products"
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPosition}
      className="group relative mx-auto mt-7 inline-flex items-center gap-3 overflow-hidden rounded-full bg-brand-dark px-7 py-3.5 font-badge text-sm font-bold text-white shadow-[0_10px_26px_rgba(31,31,31,0.16)] transition-[transform,background-color,box-shadow] duration-300 hover:bg-brand-orange hover:shadow-[0_14px_30px_rgba(243,111,53,0.35)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-orange active:scale-[0.97]"
      style={{ transform: 'translate3d(var(--magnet-x, 0px), var(--magnet-y, 0px), 0)' }}
    >
      <span className="absolute inset-0 origin-left scale-x-0 bg-gradient-to-r from-brand-orange via-[#ff9a68] to-brand-orange transition-transform duration-500 group-hover:scale-x-100" />
      <span className="pointer-events-none absolute -left-1/2 top-0 h-full w-1/3 -skew-x-12 bg-white/20 opacity-0 transition-all duration-700 group-hover:left-full group-hover:opacity-100" />
      <span className="relative">Explore Our Products</span>
      <ChevronRight aria-hidden="true" className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" />
    </Link>
  );
}

export default function SelectedWork() {
  const [activeIndex, setActiveIndex] = useState(2);
  const dragStartX = useRef(null);

  const moveCarousel = (direction) => {
    setActiveIndex((currentIndex) =>
      (currentIndex + direction + projects.length) % projects.length,
    );
  };

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((currentIndex) => (currentIndex + 1) % projects.length);
    }, 4000);

    return () => window.clearInterval(intervalId);
  }, []);

  const handlePointerDown = (event) => {
    if (event.target.closest('a, button')) return;

    dragStartX.current = event.clientX;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const handlePointerUp = (event) => {
    if (dragStartX.current === null) return;

    const dragDistance = event.clientX - dragStartX.current;
    dragStartX.current = null;

    if (Math.abs(dragDistance) >= 45) {
      moveCarousel(dragDistance < 0 ? 1 : -1);
    }
  };

  return (
    <section id="our-range" className="bg-brand-footer pt-10 md:pt-14 pb-16 md:pb-20 px-4 md:px-8">
      <div className="w-full max-w-[1380px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-14">
          <span className="block w-[42px] h-[3px] bg-brand-orange rounded-[20px] mx-auto mb-5" />
          <p className="font-badge text-xs font-bold tracking-widest uppercase text-brand-orange mb-3">
            Built For Every Requirement
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight max-w-3xl mx-auto">
            Our <span className="text-brand-orange">Products</span>
          </h2>
          <p className="max-w-[650px] mx-auto mt-5 text-[15px] leading-relaxed text-brand-body">
            From structural steel to industrial requirements, our portfolio is
            designed around the needs of modern businesses.
          </p>
          <MagneticProductsButton />
        </div>

        <div className="relative mx-auto w-full max-w-[1380px] px-2 sm:px-4">
          <div
            role="region"
            aria-roledescription="carousel"
            aria-label="Product collection"
            aria-live="polite"
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerCancel={() => {
              dragStartX.current = null;
            }}
            className="flex h-[450px] md:h-[475px] cursor-grab touch-pan-y select-none items-center justify-center gap-3 overflow-hidden px-1 py-4 active:cursor-grabbing md:gap-4 lg:gap-5"
          >
            {[-2, -1, 0, 1, 2].map((offset) => {
              const projectIndex =
                (activeIndex + offset + projects.length) % projects.length;
              const project = projects[projectIndex];
              const isActive = offset === 0;
              const visibility =
                offset === 0
                  ? 'flex'
                  : Math.abs(offset) === 1
                    ? 'hidden md:flex'
                    : 'hidden lg:flex';

              return (
                <article
                  key={project.name}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${project.name}${isActive ? ', selected' : ''}`}
                  aria-current={isActive ? 'true' : undefined}
                  className={`group ${visibility} h-[410px] md:h-[435px] min-w-0 shrink-0 flex-col overflow-hidden rounded-[22px] border border-brand-border/70 bg-white shadow-[0_8px_28px_rgba(31,31,31,0.07)] transition-[transform,opacity,box-shadow,width] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                    isActive
                      ? 'z-10 w-[min(82vw,330px)] scale-100 shadow-[0_20px_48px_rgba(31,31,31,0.15)] ring-2 ring-brand-orange/20'
                      : 'w-[28%] scale-[0.92] opacity-80 hover:opacity-100 lg:w-[17%] xl:w-[18%]'
                  }`}
                >
                  <div className="relative mx-3 mt-3 flex h-[150px] md:h-[160px] shrink-0 items-center justify-center overflow-hidden rounded-[15px] bg-[#f4f5f7]">
                    <span className="absolute left-3 top-3 z-[1] rounded-full bg-white/90 px-2.5 py-1 font-badge text-[9px] font-bold uppercase tracking-[0.08em] text-brand-orange shadow-sm">
                      {project.badge}
                    </span>
                    <img
                      src={project.image}
                      alt={`${project.name} steel product placeholder`}
                      className={`h-full w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                        project.image === steelCoilImage
                          ? 'object-contain p-3'
                          : 'object-cover'
                      }`}
                    />
                    <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-dark/10 via-transparent to-transparent" />
                  </div>

                  <div className="flex flex-1 flex-col px-4 pb-4 pt-3 md:px-5 overflow-hidden">
                    <div className="h-[46px] flex items-center">
                      <h3 className="font-heading font-bold leading-tight text-brand-dark text-lg md:text-[20px] line-clamp-2">
                        {project.name}
                      </h3>
                    </div>

                    <dl className="mt-2.5 space-y-2">
                      <div>
                        <dt className="font-badge text-[9px] font-bold uppercase tracking-[0.12em] text-brand-orange">
                          Thickness range
                        </dt>
                        <dd className="mt-0.5 text-[11px] leading-snug text-brand-body truncate">
                          {project.thickness}
                        </dd>
                      </div>
                      <div>
                        <dt className="font-badge text-[9px] font-bold uppercase tracking-[0.12em] text-brand-orange">
                          Width range
                        </dt>
                        <dd className="mt-0.5 text-[11px] leading-snug text-brand-body truncate">
                          {project.width}
                        </dd>
                      </div>
                      <div>
                        <dt className="font-badge text-[9px] font-bold uppercase tracking-[0.12em] text-brand-orange">
                          Grades
                        </dt>
                        <dd className="mt-0.5 line-clamp-2 text-[11px] leading-snug text-brand-body">
                          {project.grade}
                        </dd>
                      </div>
                    </dl>

                    <a
                      href="#contact"
                      className="mt-auto inline-flex w-fit items-center justify-center rounded-full bg-brand-orange px-4 py-2 font-badge text-[11px] font-semibold text-white transition-colors hover:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
                    >
                      Enquire
                      <ChevronRight aria-hidden="true" className="ml-1 h-3.5 w-3.5" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>

          <button
            type="button"
            aria-label="Previous product"
            onClick={() => moveCarousel(-1)}
            className="absolute left-0 top-1/2 z-20 flex h-10 w-10 -translate-x-1/4 -translate-y-1/2 items-center justify-center rounded-full border border-brand-border bg-white text-brand-dark shadow-md transition hover:border-brand-orange hover:text-brand-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange md:-translate-x-1/2 cursor-pointer"
          >
            <ChevronLeft aria-hidden="true" className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next product"
            onClick={() => moveCarousel(1)}
            className="absolute right-0 top-1/2 z-20 flex h-10 w-10 translate-x-1/4 -translate-y-1/2 items-center justify-center rounded-full border border-brand-border bg-white text-brand-dark shadow-md transition hover:border-brand-orange hover:text-brand-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange md:translate-x-1/2 cursor-pointer"
          >
            <ChevronRight aria-hidden="true" className="h-5 w-5" />
          </button>
        </div>

        <div role="group" aria-label="Choose a product" className="mt-1 flex justify-center gap-2">
          {projects.map((project, index) => (
            <button
              key={project.name}
              type="button"
              aria-label={`Show ${project.name}`}
              aria-current={index === activeIndex ? 'true' : undefined}
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange ${
                index === activeIndex
                  ? 'w-6 bg-brand-orange'
                  : 'w-2.5 bg-brand-border hover:bg-brand-orange/60'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}