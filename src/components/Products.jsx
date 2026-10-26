import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Layers,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Steel3DViewer from '../components/Steel3DViewer';
import productHeroImage from '../assets/products-images/products-page-bg.png';
import productsCta from '../assets/images/products-cta.jpg';

const PRODUCTS_DATA = [
  {
    id: 'hr-coil',
    name: 'Hot Rolled (HR) Coil',
    badge: 'High Strength & Formability',
    desc: 'Steel rolled at high temperatures, offering strength, durability and versatility. Widely used in manufacturing, fabrication, construction, infrastructure, automotive components and as a base material for other steel products.',
    thickness: '1.60mm - 16.00mm',
    width: '1250mm, 1500mm, 1830mm & 2000mm',
    grade: 'E250A/BR, E350A/C, IS10748(GR1,GR2), CHQ, BSK46, 550MC, 600MC, 700MC',
    applications: ['Construction', 'Infrastructure', 'Automotive Components', 'Heavy Machinery'],
    images: [
      'https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    id: 'hr-sheet',
    name: 'HR Sheet / Plate',
    badge: 'Structural Heavy Duty',
    desc: 'Flat, hot-rolled steel products known for their strength and versatility. Ideal for structural fabrication, industrial machinery, heavy engineering, construction, equipment manufacturing and infrastructure projects.',
    thickness: '1.60mm - 25.00mm',
    width: '1250mm & 1500mm',
    grade: 'E250A, IS10748(GR2)',
    applications: ['Heavy Engineering', 'Industrial Equipment', 'Structural Fabrication', 'Bridges'],
    images: [
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    id: 'hrpo-coil',
    name: 'HRPO Coil',
    badge: 'Clean Pickled Surface',
    desc: 'Hot-rolled steel with scale and impurities removed by pickling, then oiled to prevent rust during storage and handling. Gives a cleaner surface for automotive components, fabrication and engineering applications.',
    thickness: '1.60mm - 5.00mm',
    width: '1250mm',
    grade: 'IS1079D, E250A, E34',
    applications: ['Automotive Panels', 'Precision Tubing', 'Stamping', 'Appliances'],
    images: [
      'https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    id: 'hrspo-coil',
    name: 'HRSPO Coil',
    badge: 'Enhanced Flatness',
    desc: 'Hot-rolled steel given a light skin-pass rolling to improve flatness, surface finish and dimensional consistency. Suited to fabrication and industrial uses where these qualities matter.',
    thickness: '1.60mm - 3.00mm',
    width: '1250mm',
    grade: 'IS1079D',
    applications: ['Laser Cutting', 'Precision Enclosures', 'High-Tolerance Fabrication'],
    images: [
      'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    id: 'cr-coil',
    name: 'Cold Rolled (CR) Coil',
    badge: 'Mirror Precision & Tolerances',
    desc: 'Steel further rolled at or near room temperature for a smoother finish, tighter tolerances and consistent thickness. Commonly used in automotive parts, appliances, furniture, electrical equipment and precision fabrication.',
    thickness: '0.50mm - 3.15mm',
    width: '1250mm, 1500mm & 1540mm',
    grade: 'IS513D (DQ)',
    applications: ['Automotive Body Parts', 'Electrical Panels', 'Furniture', 'Home Appliances'],
    images: [
      'https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=1200&q=80',
    ],
  },
  {
    id: 'gp-sheet',
    name: 'Galvanized Plain (GP)',
    badge: 'Zinc Coated Corrosion Defense',
    desc: 'Steel coated with zinc for corrosion resistance and rust protection, supplied in plain, unprofiled form. Used in roofing and cladding, ducting, electrical panels, appliances and fabrication, and can be processed further as needed.',
    thickness: '0.19 - 1.25 & Above',
    width: '900 - 1540mm',
    grade: 'GLK1, GLR1 - SOFT, GLK2 (120 GSM), GK09',
    applications: ['Roofing & Cladding', 'HVAC Ducting', 'Control Panels', 'Agricultural Equipment'],
    images: [
      'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&w=1200&q=80',
    ],
  },
];

const PRODUCT_FAMILIES = [
  'Hot Rolled (HR) Coils',
  'Hot Rolled Sheets & Plates',
  'Hot Rolled Pickled & Oiled (HRPO) Coils',
  'Hot Rolled Skin Passed (HRSP) Coils',
  'Cold Rolled (CR) Coils',
  'Galvanized Plain (GP) Steel',
];

const PRODUCT_APPLICATIONS = [
  'Construction',
  'Infrastructure',
  'Fabrication',
  'Automotive',
  'Machinery',
  'Manufacturing',
  'Roofing',
];

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS_DATA[0]);
  const [modalProduct, setModalProduct] = useState(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const modalRef = useRef(null);
  const closeButtonRef = useRef(null);
  const galleryTriggerRef = useRef(null);

  const openProductSlideshow = (product, event) => {
    galleryTriggerRef.current = event.currentTarget;
    setCurrentSlideIndex(0);
    setModalProduct(product);
  };

  const closeProductSlideshow = () => setModalProduct(null);

  const moveGallerySlide = (direction) => {
    setCurrentSlideIndex((index) =>
      (index + direction + modalProduct.images.length) % modalProduct.images.length,
    );
  };

  useEffect(() => {
    if (!modalProduct) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleModalKeyDown = (event) => {
      if (event.key === 'Escape') {
        setModalProduct(null);
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault();
        setCurrentSlideIndex((index) =>
          (index - 1 + modalProduct.images.length) % modalProduct.images.length,
        );
      } else if (event.key === 'ArrowRight') {
        event.preventDefault();
        setCurrentSlideIndex((index) => (index + 1) % modalProduct.images.length);
      } else if (event.key === 'Tab') {
        const focusableElements = modalRef.current?.querySelectorAll('button:not(:disabled)');
        if (!focusableElements?.length) return;

        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        if (event.shiftKey && document.activeElement === firstElement) {
          event.preventDefault();
          lastElement.focus();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
          event.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener('keydown', handleModalKeyDown);

    return () => {
      document.removeEventListener('keydown', handleModalKeyDown);
      document.body.style.overflow = previousOverflow;
      galleryTriggerRef.current?.focus();
    };
  }, [modalProduct]);

  const handleProductTabKeyDown = (event) => {
    const currentIndex = PRODUCTS_DATA.findIndex(
      (product) => product.id === selectedProduct.id,
    );
    let nextIndex;

    switch (event.key) {
      case 'ArrowRight':
        nextIndex = (currentIndex + 1) % PRODUCTS_DATA.length;
        break;
      case 'ArrowLeft':
        nextIndex = (currentIndex - 1 + PRODUCTS_DATA.length) % PRODUCTS_DATA.length;
        break;
      case 'Home':
        nextIndex = 0;
        break;
      case 'End':
        nextIndex = PRODUCTS_DATA.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    setSelectedProduct(PRODUCTS_DATA[nextIndex]);
    event.currentTarget.querySelectorAll('[role="tab"]')[nextIndex]?.focus();
  };

  return (
    <main className="bg-white text-brand-dark selection:bg-brand-orange selection:text-white">
      <style>{`
        @keyframes products-rise-in {
          from { opacity: 0; transform: translateY(22px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes products-detail-in {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes holo-glow {
          0%, 100% { opacity: 0.45; transform: scale(1) rotate(0deg); }
          50% { opacity: 0.75; transform: scale(1.08) rotate(3deg); }
        }
        @keyframes marquee-slide {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .products-rise-in {
          animation: products-rise-in 700ms cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .products-detail-in {
          animation: products-detail-in 420ms cubic-bezier(0.16, 1, 0.3, 1) both;
        }
        .animate-holo-glow {
          animation: holo-glow 9s ease-in-out infinite;
        }
        .animate-marquee {
          display: flex;
          width: max-content;
          animation: marquee-slide 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .products-rise-in, .products-detail-in, .animate-holo-glow, .animate-marquee {
            animation: none;
          }
        }
      `}</style>

      {/* =========================================================================
          HIDDEN SECTIONS (Preserved per request, not deleted)
          Section 1: Hero ("Steel Solutions For A Stronger Tomorrow")
          Section 2: Products Overview ("Steel for a wide range of industrial needs")
          Set condition to true to unhide anytime.
      ========================================================================= */}
      {false && (
        <>
          {/* SECTION 1: HERO */}
          <section className="relative isolate overflow-hidden border-b border-brand-border bg-brand-footer py-12 sm:py-16 lg:py-20">
            <div aria-hidden="true" className="pointer-events-none absolute inset-y-0 right-0 -z-10 hidden w-[58%] lg:block">
              <img src={productHeroImage} alt="" className="h-full w-full object-cover object-center opacity-[0.22] mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-r from-brand-footer via-brand-footer/70 to-brand-footer/10" />
            </div>
            <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-28 -z-10 h-72 w-72 rounded-full border-[32px] border-brand-orange/10 sm:h-96 sm:w-96" />

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="max-w-3xl">
                <div className="products-rise-in inline-flex items-center gap-2 rounded-full border border-brand-orange/30 bg-white/80 px-3.5 py-1 text-xs font-bold uppercase tracking-[0.18em] text-brand-orange shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-orange motion-safe:animate-pulse" />
                  ANM Ispat Product Line
                </div>
                <h1 className="products-rise-in mt-4 font-heading text-4xl font-extrabold leading-[1.04] tracking-tight text-brand-dark [animation-delay:100ms] sm:text-6xl lg:text-7xl">
                  Steel Solutions
                  <br />
                  <span className="text-brand-orange">For A Stronger</span> Tomorrow
                </h1>
                <p className="products-rise-in mt-5 max-w-2xl font-body text-base leading-relaxed text-brand-body [animation-delay:200ms] sm:text-lg">
                  Our comprehensive range includes HR Coils, HR Sheets, HRPO, HRSPO, CR Coils, and Galvanized Plain Steel. Engineered to meet demanding requirements across infrastructure, automotive, fabrication, and machinery sectors.
                </p>
                <div className="products-rise-in mt-6 flex flex-wrap gap-3 [animation-delay:300ms] sm:gap-4">
                  <a href="#interactive-studio" className="group inline-flex items-center justify-center gap-2 rounded-md bg-brand-orange px-6 py-3 font-badge text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-orange sm:px-7 sm:py-3.5">
                    Explore the range
                    <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                  <a href="#specifications-table" className="inline-flex items-center justify-center gap-2 rounded-md border border-brand-border bg-white/90 px-6 py-3 font-badge text-sm font-bold text-brand-dark transition-all duration-300 hover:border-brand-orange hover:text-brand-orange focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-orange sm:px-7 sm:py-3.5">
                    View specifications
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2: PRODUCTS OVERVIEW */}
          <section aria-labelledby="products-overview-heading" className="relative isolate overflow-hidden border-b border-brand-border bg-white py-14 sm:py-16 lg:py-20">
            <div aria-hidden="true" className="pointer-events-none absolute -right-24 -top-20 -z-10 h-72 w-72 rounded-full bg-brand-orange/[0.06] blur-3xl" />
            <div className="mx-auto grid max-w-7xl gap-10 px-6 lg:grid-cols-12 lg:items-center lg:gap-14 lg:px-8">
              <div className="products-rise-in lg:col-span-5">
                <p className="mb-3 flex items-center gap-2 font-badge text-xs font-bold uppercase tracking-[0.18em] text-brand-orange">
                  <Layers aria-hidden="true" className="h-4 w-4" />
                  Our products
                </p>
                <h2 id="products-overview-heading" className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-brand-dark sm:text-4xl">
                  Steel for a wide range of <span className="text-brand-orange">industrial needs.</span>
                </h2>
                <p className="mt-5 font-body text-sm leading-7 text-brand-body sm:text-base">
                  Our product range includes Hot Rolled (HR) Coils, Hot Rolled Sheets and Plates, Hot Rolled Pickled and Oiled (HRPO) Coils, Hot Rolled Skin Passed (HRSP) Coils, Cold Rolled (CR) Coils, and Galvanized Plain (GP) Steel. These products cater to construction, infrastructure, fabrication, automotive components, machinery, manufacturing, and roofing requirements.
                </p>
              </div>

              <div className="products-rise-in lg:col-span-7" style={{ animationDelay: '120ms' }}>
                <div className="relative overflow-hidden rounded-2xl border border-brand-border bg-brand-footer p-5 shadow-sm sm:p-7">
                  <div aria-hidden="true" className="pointer-events-none absolute -right-12 -top-16 h-48 w-48 rounded-full border-[24px] border-brand-orange/[0.08]" />
                  <div className="relative">
                    <div className="mb-5 flex flex-col justify-between gap-2 border-b border-brand-border pb-4 sm:flex-row sm:items-end">
                      <div>
                        <p className="font-badge text-[10px] font-bold uppercase tracking-[0.16em] text-brand-body">Product portfolio</p>
                        <h3 className="mt-1 font-heading text-lg font-bold text-brand-dark sm:text-xl">Six product forms. One dependable range.</h3>
                      </div>
                      <span className="font-badge text-xs font-semibold text-brand-orange">01 / 06</span>
                    </div>
                    <ul className="grid gap-2 sm:grid-cols-2" aria-label="Product families">
                      {PRODUCT_FAMILIES.map((family, index) => (
                        <li key={family} className="group flex min-w-0 items-start gap-3 rounded-xl border border-brand-border/80 bg-white px-3.5 py-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-orange/50 hover:shadow-sm sm:px-4">
                          <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-orange/10 font-badge text-[10px] font-bold tabular-nums text-brand-orange transition-colors group-hover:bg-brand-orange group-hover:text-white">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <span className="min-w-0 break-words font-body text-xs font-semibold leading-relaxed text-brand-dark sm:text-sm">{family}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-5 border-t border-brand-border pt-4">
                      <p className="mb-3 font-badge text-[10px] font-bold uppercase tracking-[0.16em] text-brand-body">Applications across industry</p>
                      <ul className="flex flex-wrap gap-2" aria-label="Product applications">
                        {PRODUCT_APPLICATIONS.map((application) => (
                          <li key={application} className="rounded-full border border-brand-orange/20 bg-brand-orange/5 px-3 py-1.5 font-badge text-[10px] font-semibold text-brand-dark sm:text-xs">{application}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* SECTION 3: INTERACTIVE PRODUCT STUDIO */}
      <section id="interactive-studio" className="relative overflow-hidden border-b border-brand-border bg-white py-10 sm:py-12 lg:py-16">
        <div aria-hidden="true" className="pointer-events-none absolute -left-28 top-36 h-72 w-72 rounded-full bg-brand-orange/[0.06] blur-3xl" />
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="products-rise-in mb-6 flex flex-col justify-between gap-3 md:mb-8 md:flex-row md:items-end">
            <div>
              <p className="font-badge text-xs font-bold uppercase tracking-[0.18em] text-brand-orange">Interactive Catalog</p>
              <h2 className="mt-1 font-heading text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">Explore Product Engineering &amp; Specs</h2>
            </div>
            <p className="mt-2 max-w-md text-sm text-brand-body md:mt-0">Select any product line below to update the 3D viewport and inspect dimensional ranges and steel grades.</p>
          </div>

          <div role="tablist" aria-label="Product lines" onKeyDown={handleProductTabKeyDown} className="mb-6 grid grid-cols-2 gap-2 sm:grid-cols-3 xl:grid-cols-6">
            {PRODUCTS_DATA.map((product, index) => {
              const isActive = selectedProduct.id === product.id;
              return (
                <button
                  key={product.id}
                  id={`product-tab-${product.id}`}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  aria-controls="selected-product-details"
                  tabIndex={isActive ? 0 : -1}
                  onClick={() => setSelectedProduct(product)}
                  className={`products-rise-in group min-w-0 rounded-xl border p-3 text-left font-badge text-[11px] uppercase leading-snug tracking-wider transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange sm:p-3.5 sm:text-xs ${
                    isActive
                      ? 'border-brand-orange bg-brand-orange font-bold text-white shadow-[0_10px_24px_rgba(243,111,53,0.2)]'
                      : 'border-brand-border bg-brand-footer text-brand-dark hover:border-brand-orange hover:bg-white hover:text-brand-orange'
                  }`}
                  style={{ animationDelay: `${350 + index * 55}ms` }}
                >
                  <span className={`mb-1.5 block text-[10px] tabular-nums ${isActive ? 'text-white/75' : 'text-brand-body/60'}`}>{String(index + 1).padStart(2, '0')}</span>
                  <span className="block break-words">{product.name}</span>
                </button>
              );
            })}
          </div>

          <div className="grid grid-cols-1 items-stretch gap-6 lg:grid-cols-12">
            <div className="products-rise-in flex min-w-0 flex-col gap-5 lg:col-span-7">
              <Steel3DViewer activeProduct={selectedProduct.name} />

              <div className="relative overflow-hidden rounded-2xl border border-brand-orange/20 bg-gradient-to-br from-[#FFF8F5] via-[#FFF3EC] to-[#FDE8DD] p-5 shadow-sm sm:p-6">
                <div aria-hidden="true" className="pointer-events-none absolute -right-12 -top-12 h-64 w-64 rounded-full bg-brand-orange/25 blur-3xl animate-holo-glow" />
                <div aria-hidden="true" className="pointer-events-none absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-[#FF9A6B]/30 blur-2xl animate-holo-glow [animation-delay:4s]" />
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(#F36F35_1px,transparent_1px)] [background-size:16px_16px] opacity-[0.08]" />
                <div className="relative z-10 flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
                  <div>
                    <div className="inline-flex items-center gap-2 rounded-full border border-brand-orange/30 bg-white/80 px-3 py-1 font-badge text-xs font-bold uppercase tracking-wider text-brand-orange shadow-sm">
                      <Sparkles className="h-3.5 w-3.5" />
                      Industrial Precision Standard
                    </div>
                    <h4 className="mt-2.5 font-heading text-xl font-extrabold text-brand-dark sm:text-2xl">Engineered to Exacting IS Specifications</h4>
                    <p className="mt-1.5 font-body text-xs leading-relaxed text-brand-body sm:text-sm">Each batch undergoes tight metallurgical control for tensile strength, dimensional tolerances, and uniform surface quality.</p>
                  </div>
                  <div className="flex shrink-0 items-center gap-3 border-t border-brand-orange/20 pt-3 sm:border-l sm:border-t-0 sm:pl-5 sm:pt-0">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-orange text-white shadow-md shadow-brand-orange/20"><Layers className="h-5 w-5" /></div>
                    <div>
                      <span className="block font-badge text-[10px] font-bold uppercase tracking-wider text-brand-body">Quality Control</span>
                      <span className="font-heading text-sm font-extrabold text-brand-dark">100% Verified</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div key={selectedProduct.id} id="selected-product-details" role="tabpanel" aria-labelledby={`product-tab-${selectedProduct.id}`} tabIndex={0} className="products-detail-in flex min-w-0 flex-col rounded-2xl border border-brand-border bg-brand-footer p-5 shadow-sm sm:p-6 lg:col-span-5">
              <div>
                <span className="inline-flex max-w-full rounded-full border border-brand-orange/20 bg-brand-orange/10 px-3 py-1 font-badge text-xs font-semibold uppercase tracking-wider text-brand-orange">{selectedProduct.badge}</span>
                <h3 className="mt-3 break-words font-heading text-2xl font-bold text-brand-dark sm:text-3xl">{selectedProduct.name}</h3>
                <p className="mt-3 font-body text-sm leading-relaxed text-brand-body">{selectedProduct.desc}</p>

                <div className="mt-5 grid min-w-0 grid-cols-1 gap-2.5 sm:grid-cols-2">
                  <div className="min-w-0 rounded-xl border border-brand-border bg-white p-3.5 transition-colors hover:border-brand-orange/50">
                    <span className="block font-badge text-[10px] font-bold uppercase tracking-[0.14em] text-brand-body">Thickness range</span>
                    <span className="mt-1.5 block break-words font-heading text-base font-bold text-brand-orange sm:text-lg">{selectedProduct.thickness}</span>
                  </div>
                  <div className="min-w-0 rounded-xl border border-brand-border bg-white p-3.5 transition-colors hover:border-brand-orange/50">
                    <span className="block font-badge text-[10px] font-bold uppercase tracking-[0.14em] text-brand-body">Width range</span>
                    <span className="mt-1.5 block break-words font-heading text-base font-bold text-brand-dark sm:text-lg">{selectedProduct.width}</span>
                  </div>
                  <div className="min-w-0 rounded-xl border border-brand-border bg-white p-3.5 transition-colors hover:border-brand-orange/50 sm:col-span-2">
                    <span className="block font-badge text-[10px] font-bold uppercase tracking-[0.14em] text-brand-body">Available grades</span>
                    <span className="mt-1.5 block break-words text-sm font-semibold leading-relaxed text-brand-dark [overflow-wrap:anywhere]">{selectedProduct.grade}</span>
                  </div>
                </div>

                <div className="mt-5">
                  <p className="mb-2.5 font-badge text-xs font-bold uppercase tracking-wider text-brand-body">Target Applications</p>
                  <div className="flex flex-wrap gap-2">
                    {selectedProduct.applications.map((app) => (
                      <span key={app} className="inline-flex max-w-full items-start gap-1.5 rounded-md border border-brand-border bg-white px-3 py-1 text-xs text-brand-dark">
                        <CheckCircle2 className="mt-0.5 h-3 w-3 shrink-0 text-brand-orange" />
                        <span className="break-words">{app}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 border-t border-brand-border pt-5 sm:flex-row sm:items-center sm:justify-between">
                <Link to="/contact" className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-orange px-5 py-2.5 text-center font-badge text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-orange sm:w-auto">
                  Inquire for custom size <ArrowUpRight aria-hidden="true" className="h-4 w-4 shrink-0" />
                </Link>
                <span className="font-badge text-xs text-brand-body sm:text-right">IS Quality Assured</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: SPECIFICATIONS MATRIX TABLE */}
      <section id="specifications-table" className="bg-brand-footer py-10 sm:py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="font-badge text-xs font-bold uppercase tracking-[0.18em] text-brand-orange">Technical Reference</p>
            <h2 className="mt-1 font-heading text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl">Full Product Specifications Matrix</h2>
            <p className="mt-2 text-sm text-brand-body">Dimensional tolerances and standardized manufacturing grades for our complete flat steel range.</p>
          </div>
          <div className="mt-8 overflow-x-auto rounded-2xl border border-brand-border bg-white shadow-sm">
            <table className="w-full min-w-[760px] border-collapse text-left">
              <caption className="sr-only">Thickness, width and available grades for each ANM Ispat product</caption>
              <thead>
                <tr className="border-b border-brand-border bg-brand-footer text-xs font-badge uppercase tracking-wider text-brand-dark">
                  <th scope="col" className="px-6 py-3.5">Product</th>
                  <th scope="col" className="px-6 py-3.5">Thickness Range</th>
                  <th scope="col" className="px-6 py-3.5">Width Range</th>
                  <th scope="col" className="px-6 py-3.5">Grade / Quality</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-brand-border font-body text-sm text-brand-body">
                {PRODUCTS_DATA.map((row) => (
                  <tr key={row.id} className="transition-colors hover:bg-brand-footer/50">
                    <td className="px-6 py-3.5 font-heading font-bold text-brand-dark">{row.name}</td>
                    <td className="px-6 py-3.5 font-semibold text-brand-orange">{row.thickness}</td>
                    <td className="px-6 py-3.5">{row.width}</td>
                    <td className="max-w-xs px-6 py-3.5 text-xs leading-relaxed text-brand-body">{row.grade}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 5: PRODUCT SHOWCASE GALLERY */}
      <section className="overflow-hidden border-t border-brand-border bg-white py-12 sm:py-16">
        <div className="mx-auto mb-8 max-w-7xl px-6 text-center lg:px-8">
          <p className="font-badge text-xs font-bold uppercase tracking-[0.18em] text-brand-orange">Visual Catalog</p>
          <h2 className="mt-1 font-heading text-3xl font-bold text-brand-dark sm:text-4xl">Product Showcase Gallery</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-brand-body">A visual overview of our steel product range.</p>
        </div>
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-5 px-6 sm:grid-cols-2 lg:grid-cols-3 lg:px-8">
          {PRODUCTS_DATA.map((product, index) => (
            <article key={product.id} className="group relative isolate min-w-0 overflow-hidden rounded-2xl border border-brand-border bg-brand-footer shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
              <button
                type="button"
                onClick={(event) => openProductSlideshow(product, event)}
                aria-label={`View three images of ${product.name}`}
                className="group/card block w-full cursor-pointer text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-inset focus-visible:outline-brand-orange"
              >
                <div className="relative h-64 overflow-hidden sm:h-72">
                  <img
                    src={product.images[0]}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover/card:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/15 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full border border-white/30 bg-black/35 px-3 py-1 font-badge text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-sm">
                    {String(index + 1).padStart(2, '0')} / 06
                  </span>
                  <span className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1 font-badge text-[10px] font-bold uppercase tracking-wider text-brand-dark opacity-0 transition-opacity group-hover/card:opacity-100 group-focus-visible/card:opacity-100">
                    View gallery
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="mb-1 font-badge text-[10px] font-semibold uppercase tracking-[0.16em] text-white/75">{product.badge}</p>
                    <h3 className="font-heading text-xl font-bold text-white transition-colors group-hover/card:text-brand-orange sm:text-2xl">{product.name}</h3>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-4 p-4 sm:p-5">
                  <p className="min-w-0 text-sm leading-relaxed text-brand-body">{product.thickness}</p>
                  <span className="shrink-0 font-badge text-xs font-semibold text-brand-orange">
                    View images <ChevronRight aria-hidden="true" className="inline h-4 w-4 transition-transform group-hover/card:translate-x-1" />
                  </span>
                </div>
              </button>
              <div className="flex justify-end border-t border-brand-border/70 px-4 py-3 sm:px-5">
                <Link to="/contact" aria-label={`Inquire about ${product.name}`} className="inline-flex shrink-0 items-center gap-2 rounded-lg border border-brand-orange/30 px-3 py-2 font-badge text-xs font-bold text-brand-orange transition-colors hover:bg-brand-orange hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange">
                  Enquire <ArrowUpRight aria-hidden="true" className="h-4 w-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      {modalProduct && (
        createPortal(
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-brand-dark/70 p-4 backdrop-blur-sm sm:p-6"
            onMouseDown={(event) => {
              if (event.target === event.currentTarget) closeProductSlideshow();
            }}
          >
            <section
              ref={modalRef}
              role="dialog"
              aria-modal="true"
              aria-labelledby="product-gallery-modal-title"
              aria-describedby="product-gallery-modal-count"
              className="my-auto w-full max-w-xl overflow-hidden rounded-2xl bg-white shadow-2xl"
            >
              <header className="flex items-center justify-between gap-4 px-4 py-3 sm:px-5">
                <div className="min-w-0">
                  <h2 id="product-gallery-modal-title" className="truncate font-heading text-base font-bold text-brand-dark sm:text-lg">
                    {modalProduct.name}
                  </h2>
                  <p id="product-gallery-modal-count" className="mt-0.5 font-badge text-xs text-brand-body">
                    Image {currentSlideIndex + 1} of 3
                  </p>
                </div>
                <button
                  ref={closeButtonRef}
                  type="button"
                  onClick={closeProductSlideshow}
                  aria-label="Close product gallery"
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-footer text-brand-dark transition-colors hover:bg-brand-orange hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
                >
                  <X aria-hidden="true" className="h-4 w-4" />
                </button>
              </header>

              <div className="relative bg-brand-footer">
                <img
                  key={`${modalProduct.id}-${currentSlideIndex}`}
                  src={modalProduct.images[currentSlideIndex]}
                  alt={`${modalProduct.name} - image ${currentSlideIndex + 1}`}
                  className="aspect-[16/10] max-h-[55vh] w-full object-contain motion-safe:animate-[products-detail-in_300ms_ease-out_both]"
                />
                <button
                  type="button"
                  onClick={() => moveGallerySlide(-1)}
                  aria-label="Previous image"
                  className="absolute left-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-brand-dark shadow-md transition-colors hover:bg-brand-orange hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
                >
                  <ChevronLeft aria-hidden="true" className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => moveGallerySlide(1)}
                  aria-label="Next image"
                  className="absolute right-3 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/95 text-brand-dark shadow-md transition-colors hover:bg-brand-orange hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange"
                >
                  <ChevronRight aria-hidden="true" className="h-5 w-5" />
                </button>
              </div>

              <footer className="flex items-center justify-center gap-2.5 px-4 py-3">
                {modalProduct.images.map((_, index) => (
                  <button
                    key={`${modalProduct.id}-image-${index}`}
                    type="button"
                    onClick={() => setCurrentSlideIndex(index)}
                    aria-label={`Show image ${index + 1} of 3`}
                    aria-current={index === currentSlideIndex ? 'true' : undefined}
                    className={`h-2.5 rounded-full transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-orange ${
                      index === currentSlideIndex ? 'w-7 bg-brand-orange' : 'w-2.5 bg-brand-border hover:bg-brand-body/50'
                    }`}
                  />
                ))}
              </footer>
            </section>
          </div>,
          document.body,
        )
      )}

      {/* SECTION 6: CALL TO ACTION */}
      <section className="relative isolate overflow-hidden bg-brand-dark py-8 text-white sm:py-10 lg:py-12">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
          <img src={productsCta} alt="" loading="lazy" className="h-full w-full object-cover object-right sm:object-center" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-orange via-brand-orange/95 to-brand-orange/40 sm:via-brand-orange/90 sm:to-transparent" />
        </div>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-xl">
            <div className="flex items-center gap-3">
              <span className="h-0.5 w-6 bg-white/80" />
              <p className="font-badge text-xs font-bold uppercase tracking-[0.18em] text-white/90">Need a custom specification?</p>
            </div>
            <h2 className="mt-2 font-heading text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">Let&apos;s Find the Right Steel Solution for Your Need.</h2>
            <div className="mt-5">
              <Link to="/contact" className="group inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-2.5 font-badge text-xs font-bold text-brand-orange shadow-lg transition-all duration-300 hover:bg-brand-dark hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:px-7 sm:py-3 sm:text-sm">
                Get in Touch
                <ArrowRight aria-hidden="true" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
