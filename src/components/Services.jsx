import { animate, motion, useMotionValue, useReducedMotion, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Building2,
  Handshake,
  Layers3,
  ListChecks,
  Shield,
  TrainFront,
  Zap,
  Car,
  Settings,
  Tv,
  Sprout,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import PageHero from './PageHero.jsx';
import PrioritiesSection from './PrioritiesSection.jsx';

import industrialSupplyImage from '../assets/images/industrial-supply.png';
import constructionImage from '../assets/industry-images/CONSTRUCTION.jpg';
import defenceImage from '../assets/industry-images/DEFENCE.jpg';
import powerImage from '../assets/industry-images/POWER.jpg';
import railwayImage from '../assets/industry-images/RAILWAY.jpg';
import automotiveMobilityImage from '../assets/industry-images/automotive-mobility.jpg';
import industrialMachineryImage from '../assets/industry-images/industrial-machinery.jpg';
import consumerDurablesImage from '../assets/industry-images/consumer-durables.jpg';
import agricultureImage from '../assets/industry-images/agriculture.jpg';

const industries = [
  {
    number: '01',
    name: 'Construction',
    description:
      'Steel for the structures, components and fabrication work that shape the built environment.',
    applications: ['Structural fabrication', 'Building components', 'Roofing & cladding'],
    image: constructionImage,
    imageAlt: 'Construction site with structural steel in progress',
    icon: Building2,
  },
  {
    number: '02',
    name: 'Defence',
    description:
      'Dependable material supply for specialist fabrication and infrastructure requirements.',
    applications: ['Equipment fabrication', 'Facility infrastructure', 'Industrial components'],
    image: defenceImage,
    imageAlt: 'Defence and industrial equipment',
    icon: Shield,
  },
  {
    number: '03',
    name: 'Power',
    description:
      'Steel products supporting the fabrication and infrastructure behind energy generation and distribution.',
    applications: ['Plant infrastructure', 'Fabricated structures', 'Electrical enclosures'],
    image: powerImage,
    imageAlt: 'Power infrastructure and energy generation',
    icon: Zap,
  },
  {
    number: '04',
    name: 'Railway',
    description:
      'Material for rail infrastructure, workshops and the fabrication needs that keep networks moving.',
    applications: ['Rail infrastructure', 'Workshop fabrication', 'Maintenance components'],
    image: railwayImage,
    imageAlt: 'Railway infrastructure',
    icon: TrainFront,
  },
  {
    number: '05',
    name: 'Automotive & Mobility',
    description:
      'High-strength steel coils and sheets engineered for vehicle chassis, structural frames, and automotive components.',
    applications: ['Chassis & structural frames', 'Body panels & stamping', 'Commercial vehicle fabrication'],
    image: automotiveMobilityImage,
    imageAlt: 'Automotive manufacturing and chassis assembly',
    icon: Car,
  },
  {
    number: '06',
    name: 'Industrial Machinery & Engineering',
    description:
      'Precision-processed steel plates and heavy-gauge coils designed for heavy industrial machinery, equipment bases, and mechanical assemblies.',
    applications: ['Heavy machinery bases', 'Gear & drive assemblies', 'Industrial process equipment'],
    image: industrialMachineryImage,
    imageAlt: 'Heavy industrial machinery fabrication',
    icon: Settings,
  },
  {
    number: '07',
    name: 'Consumer Durables & Appliances',
    description:
      'Surface-critical cold rolled and galvanized steel coils tailored for home appliances, electrical casings, and consumer goods.',
    applications: ['White goods & HVAC', 'Electrical panel enclosures', 'Precision sheet metal stamping'],
    image: consumerDurablesImage,
    imageAlt: 'Consumer durable components and appliances',
    icon: Tv,
  },
  {
    number: '08',
    name: 'Agriculture',
    description:
      'Durable, wear-resistant steel for tractors, harvesting machinery, irrigation systems, and farm storage silos.',
    applications: ['Tractor & implement frames', 'Harvester wear components', 'Silos & storage infrastructure'],
    image: agricultureImage,
    imageAlt: 'Agricultural machinery and farming equipment',
    icon: Sprout,
  },
];

const materials = [
  'Hot rolled coils, sheets & plates',
  'Pickled and oiled coils',
  'Cold rolled coils',
  'Galvanized steel',
];

const impactStats = [
  { value: '08', label: 'Industries served', detail: 'Construction, defence, energy, mobility & engineering', icon: Building2 },
  { value: '24', label: 'Application examples', detail: 'Three practical use cases for each sector', icon: ListChecks },
  { value: '04', label: 'Steel product families', detail: 'A focused range for varied project needs', icon: Layers3 },
  { value: '01', label: 'Connected supply partner', detail: 'Support from enquiry through delivery', icon: Handshake },
];

function AnimatedStatValue({ value, reduceMotion }) {
  const count = useMotionValue(reduceMotion ? value : 0);
  const roundedCount = useTransform(count, (latest) => String(Math.round(latest)).padStart(2, '0'));
  const [displayValue, setDisplayValue] = useState(
    String(reduceMotion ? value : 0).padStart(2, '0'),
  );

  useEffect(() => {
    if (reduceMotion) {
      count.set(value);
      return undefined;
    }

    const startCount = () => {
      count.set(0);
      return animate(count, value, {
        duration: 1.6,
        ease: [0.16, 1, 0.3, 1],
      });
    };

    let animation = startCount();
    const intervalId = window.setInterval(() => {
      animation.stop();
      animation = startCount();
    }, 15000);

    return () => {
      window.clearInterval(intervalId);
      animation.stop();
    };
  }, [count, reduceMotion, value]);

  useEffect(() => {
    const unsubscribe = roundedCount.on('change', setDisplayValue);
    return unsubscribe;
  }, [roundedCount]);

  const visibleValue = reduceMotion ? String(value).padStart(2, '0') : displayValue;
  return <span aria-label={`${value}+`} aria-live="off">{visibleValue}+</span>;
}

export default function Services() {
  const shouldReduceMotion = useReducedMotion();
  const [showAllIndustries, setShowAllIndustries] = useState(false);

  const reveal = {
    initial: shouldReduceMotion ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.18 },
    transition: {
      duration: shouldReduceMotion ? 0 : 0.65,
      ease: [0.16, 1, 0.3, 1],
    },
  };

  return (
    <main className="overflow-hidden bg-white text-[#1f1f1f]">
      {/* Hero Section - Compact Banner Matching Reference Mockup */}
      <PageHero
        title="Industries"
        subtitle="ANM ISPAT"
        exploreText="Explore Industries"
        exploreLink="/"
        bgImage={industrialSupplyImage}
        imageAlt="Industries Banner"
      />

      <section className="border-b border-[#e3e5e8] bg-white px-6 py-14 sm:px-10 sm:py-16 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {impactStats.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.label}
                  className="rounded-2xl border border-[#e3e5e8] bg-[#f8f9fa] p-6 shadow-[0_4px_16px_rgba(31,31,31,0.03)] transition-colors duration-200 hover:border-[#f36f35]/40 hover:bg-white sm:p-7"
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : index * 0.08, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-heading text-4xl font-extrabold tracking-tight text-[#171c22] sm:text-5xl">
                      <AnimatedStatValue value={Number.parseInt(item.value, 10)} reduceMotion={shouldReduceMotion} />
                    </span>
                    <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-[#f36f35] shadow-sm">
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>
                  <h3 className="mt-4 font-heading text-base font-bold text-[#1f1f1f]">{item.label}</h3>
                  <p className="mt-1 text-xs leading-5 text-[#646b73]">{item.detail}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =====================================================
          SECTION 3: INDUSTRIES WE SERVE
          Initially 4 cards shown. Clicking "Explore All Industries"
          reveals the other 4 cards in the exact same design.
      ====================================================== */}
      <section id="industry-list" className="scroll-mt-24 px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            className="mb-10 grid gap-5 lg:mb-14 lg:grid-cols-[1fr_0.7fr] lg:items-end"
            {...reveal}
          >
            <div>
              <p className="mb-3 font-badge text-xs font-bold uppercase tracking-[0.2em] text-[#f36f35]">Industries we serve</p>
              <h2 className="max-w-2xl font-heading text-3xl font-extrabold leading-tight tracking-tight text-[#111827] sm:text-4xl lg:text-5xl">
                Different challenges.
                <span className="block text-[#f36f35]">One dependable standard.</span>
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-7 text-[#646b73] lg:justify-self-end">
              Every sector has its own specifications, schedules and supply pressures. Our role is to make
              steel sourcing and support simpler, from first enquiry through delivery.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {(showAllIndustries ? industries : industries.slice(0, 4)).map((industry, index) => {
              const Icon = industry.icon;
              return (
                <motion.article
                  key={industry.number}
                  className="group overflow-hidden rounded-2xl border border-[#e3e5e8] bg-white shadow-[0_5px_18px_rgba(31,31,31,0.04)] transition-shadow duration-300 hover:shadow-[0_16px_38px_rgba(31,31,31,0.1)]"
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : (index >= 4 ? (index - 4) * 0.08 : index * 0.06), ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="relative aspect-[16/8] overflow-hidden bg-[#f4f5f7]">
                    <img
                      src={industry.image}
                      alt={industry.imageAlt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/40 to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-90" />
                    <span className="absolute left-5 top-5 rounded-full border border-white/50 bg-white/90 px-3 py-1 font-badge text-[10px] font-bold tracking-[0.16em] text-[#1f1f1f] backdrop-blur">
                      {industry.number} / 08
                    </span>
                    <span className="absolute bottom-5 right-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#f36f35] text-white shadow-lg transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1">
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>
                  <div className="p-6 sm:p-8">
                    <div className="flex flex-wrap items-baseline justify-between gap-3">
                      <h3 className="font-heading text-2xl font-extrabold tracking-tight text-[#111827] sm:text-3xl">{industry.name}</h3>
                      <span className="font-badge text-[10px] font-bold uppercase tracking-[0.14em] text-[#f36f35]">Industry focus</span>
                    </div>
                    <p className="mt-3 max-w-xl text-sm leading-7 text-[#646b73]">{industry.description}</p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {industry.applications.map((application) => (
                        <li
                          key={application}
                          className="rounded-full border border-[#e3e5e8] bg-[#f8f9fa] px-3 py-1.5 text-xs font-medium text-[#4c4c4c]"
                        >
                          {application}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.article>
              );
            })}
          </div>

          {/* Toggle Button: Explore All Industries */}
          <div className="mt-12 sm:mt-14 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAllIndustries(!showAllIndustries)}
              className="group inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-white border-2 border-[#f36f35] text-[#f36f35] font-badge text-sm font-bold uppercase tracking-wider hover:bg-[#f36f35] hover:text-white transition-all duration-300 shadow-[0_4px_16px_rgba(243,111,53,0.12)] hover:shadow-[0_8px_24px_rgba(243,111,53,0.28)] hover:-translate-y-0.5 cursor-pointer"
            >
              <span>{showAllIndustries ? 'Show Less Industries' : 'Explore All Industries'}</span>
              <ArrowDown
                className={`w-4 h-4 transition-transform duration-300 ${
                  showAllIndustries ? 'rotate-180' : 'group-hover:translate-y-0.5'
                }`}
              />
            </button>
          </div>
        </div>
      </section>

      {/* Materials Range Section */}
      <section className="border-y border-[#e3e5e8] bg-[#f8f9fa] px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-12 lg:items-center">
          <motion.div className="lg:col-span-5" {...reveal}>
            <p className="mb-3 font-badge text-xs font-bold uppercase tracking-[0.2em] text-[#f36f35]">Steel that fits the work</p>
            <h2 className="font-heading text-3xl font-extrabold leading-tight tracking-tight text-[#111827] sm:text-4xl">
              The right material is where progress starts.
            </h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-[#646b73]">
              Explore the steel formats and grades available across our product range, then speak with our
              team about the needs of your application.
            </p>
            <Link
              to="/products"
              className="mt-7 inline-flex items-center gap-2 font-badge text-sm font-bold text-[#1f1f1f] transition-colors hover:text-[#e05d23]"
            >
              Explore our products
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
          <motion.ul
            className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-6 lg:col-start-7"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            {materials.map((material, index) => (
              <li key={material} className="flex items-center gap-4 rounded-xl border border-[#e3e5e8] bg-white p-4 shadow-[0_4px_14px_rgba(31,31,31,0.035)] sm:p-5">
                <span className="font-badge text-xs font-bold tabular-nums text-[#f36f35]">0{index + 1}</span>
                <span className="font-heading text-sm font-bold text-[#1f1f1f]">{material}</span>
              </li>
            ))}
          </motion.ul>
        </div>
      </section>

      {/* Built around your priorities (Testimonial / Customer Experience Section) */}
      <PrioritiesSection />
    </main>
  );
}
