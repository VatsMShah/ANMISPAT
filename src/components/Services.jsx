import { animate, motion, useMotionValue, useReducedMotion, useTransform } from 'framer-motion';
import { useEffect, useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  Building2,
  Handshake,
  Layers3,
  ListChecks,
  Quote,
  Shield,
  TrainFront,
  Zap,
} from 'lucide-react';
import { Link } from 'react-router-dom';

import constructionImage from '../assets/industry-images/CONSTRUCTION.jpg';
import defenceImage from '../assets/industry-images/DEFENCE.jpg';
import powerImage from '../assets/industry-images/POWER.jpg';
import railwayImage from '../assets/industry-images/RAILWAY.jpg';

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
];

const materials = [
  'Hot rolled coils, sheets & plates',
  'Pickled and oiled coils',
  'Cold rolled coils',
  'Galvanized steel',
];

const impactStats = [
  { value: '04', label: 'Industries served', detail: 'Construction, defence, power and railway', icon: Building2 },
  { value: '12', label: 'Application examples', detail: 'Three practical use cases for each sector', icon: ListChecks },
  { value: '04', label: 'Steel product families', detail: 'A focused range for varied project needs', icon: Layers3 },
  { value: '01', label: 'Connected supply partner', detail: 'Support from enquiry through delivery', icon: Handshake },
];

const servicePillars = [
  {
    title: 'Clear product guidance',
    description: 'Get help navigating steel formats and matching your requirements to the right product enquiry.',
    icon: BadgeCheck,
  },
  {
    title: 'Thoughtful coordination',
    description: 'Keep specifications, timelines and delivery needs aligned as your project moves forward.',
    icon: ListChecks,
  },
  {
    title: 'Support for your sector',
    description: 'Discuss the applications and operating demands that make your industry distinct.',
    icon: Handshake,
  },
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
      <section className="relative isolate overflow-hidden border-b border-[#e8e9eb] bg-[#f8f9fa]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_76%_28%,rgba(243,111,53,0.12),transparent_32%),linear-gradient(rgba(31,31,31,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(31,31,31,0.025)_1px,transparent_1px)] bg-[size:auto,40px_40px,40px_40px]"
        />
        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-14 sm:px-10 sm:py-16 lg:grid-cols-12 lg:gap-10 lg:px-16 lg:py-20">
          <motion.div
            className="lg:col-span-6"
            initial={shouldReduceMotion ? false : 'hidden'}
            animate="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.1 } },
            }}
          >
            <motion.nav
              aria-label="Breadcrumb"
              className="mb-8 flex items-center gap-2 text-xs text-[#667085]"
              variants={{
                hidden: { opacity: 0, y: 10 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <Link to="/" className="transition-colors hover:text-[#f36f35]">Home</Link>
              <span aria-hidden="true">/</span>
              <span className="text-[#111827]">Industries we serve</span>
            </motion.nav>

            <motion.p
              className="mb-5 flex items-center gap-3 font-badge text-xs font-bold uppercase tracking-[0.2em] text-[#f36f35]"
              variants={{
                hidden: { opacity: 0, y: 12 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <span className="h-[2px] w-9 bg-[#f36f35]" />
              Steel, shaped around your sector
            </motion.p>

            <motion.h1
              className="max-w-2xl font-heading text-4xl font-extrabold leading-[1.08] tracking-tight text-[#111827] sm:text-5xl lg:text-6xl"
              variants={{
                hidden: { opacity: 0, y: 22 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              Industries that
              <br />
              <span className="text-[#f36f35]">move us forward.</span>
            </motion.h1>

            <motion.p
              className="mt-6 max-w-xl text-sm leading-7 text-[#4c4c4c] sm:text-base"
              variants={{
                hidden: { opacity: 0, y: 16 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              From construction and rail to power and defence, we connect businesses with steel products,
              processing support and dependable supply for the work that keeps industry moving.
            </motion.p>

            <motion.div
              className="mt-8 flex flex-wrap items-center gap-3"
              variants={{
                hidden: { opacity: 0, y: 14 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <a
                href="#industry-list"
                className="inline-flex items-center gap-2 rounded-lg bg-[#f36f35] px-5 py-3 font-badge text-sm font-bold text-white transition-colors hover:bg-[#e05d23] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f36f35]"
              >
                Explore industries
                <ArrowDown className="h-4 w-4" />
              </a>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 rounded-lg border border-[#d8dbe0] bg-white px-5 py-3 font-badge text-sm font-bold text-[#1f1f1f] transition-colors hover:border-[#f36f35] hover:text-[#e05d23] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f36f35]"
              >
                Talk to our team
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative lg:col-span-6"
            initial={shouldReduceMotion ? false : { opacity: 0, x: 24, scale: 0.98 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.75, delay: shouldReduceMotion ? 0 : 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white bg-white p-2 shadow-[0_20px_55px_rgba(31,31,31,0.12)]">
              <img
                src={constructionImage}
                alt="Steel construction and infrastructure"
                className="h-full w-full rounded-xl object-cover"
              />
              <div className="absolute inset-2 rounded-xl bg-gradient-to-t from-[#111827]/65 via-transparent to-transparent" />
              <div className="absolute bottom-7 left-7 right-7 flex items-end justify-between gap-4 text-white sm:bottom-9 sm:left-9 sm:right-9">
                <div>
                  <span className="font-badge text-[10px] font-bold uppercase tracking-[0.18em] text-white/75">One trusted supply partner</span>
                  <p className="mt-2 font-heading text-xl font-extrabold sm:text-2xl">Built for what comes next.</p>
                </div>
                <span className="hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/45 bg-white/10 backdrop-blur sm:flex">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>
            </div>
            <div className="absolute -bottom-5 -left-3 rounded-xl border border-[#fbd8cb] bg-white px-4 py-3 shadow-[0_10px_30px_rgba(31,31,31,0.1)] sm:-left-6 sm:px-5">
              <span className="block font-badge text-[9px] font-bold uppercase tracking-[0.16em] text-[#f36f35]">Across essential sectors</span>
              <span className="mt-1 block font-heading text-sm font-extrabold text-[#111827]">Reliable steel. Real-world demands.</span>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-b border-[#e3e5e8] bg-[#f4f5f7] px-6 py-14 sm:px-10 sm:py-16 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <motion.div className="mb-8 text-center" {...reveal}>
            <p className="mb-3 font-badge text-xs font-bold uppercase tracking-[0.2em] text-[#f36f35]">
              A snapshot of our focus
            </p>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-[#111827] sm:text-4xl">
              Industry insight, at a glance.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {impactStats.map((stat, index) => {
              const Icon = stat.icon;

              return (
                <motion.article
                  key={stat.label}
                  className="group rounded-2xl border border-[#e3e5e8] bg-white p-6 text-[#1f1f1f] shadow-[0_6px_22px_rgba(31,31,31,0.045)] transition-colors duration-500 hover:border-[#f36f35] hover:bg-[#f36f35] sm:p-7"
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={shouldReduceMotion ? undefined : { y: -7, scale: 1.015 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.55,
                    delay: shouldReduceMotion ? 0 : index * 0.07,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <div className="flex items-center justify-between">
                    <Icon className="h-7 w-7 text-[#f36f35] transition-colors duration-500 group-hover:text-white" aria-hidden="true" />
                    <span className="font-badge text-[10px] font-bold uppercase tracking-[0.16em] text-[#9298a1] transition-colors duration-500 group-hover:text-white/75">
                      0{index + 1}
                    </span>
                  </div>
                  <p className="mt-7 font-heading text-5xl font-extrabold leading-none tracking-tight tabular-nums transition-colors duration-500 group-hover:text-white sm:text-6xl">
                    <AnimatedStatValue value={Number(stat.value)} reduceMotion={shouldReduceMotion} />
                  </p>
                  <h3 className="mt-4 font-heading text-base font-bold transition-colors duration-500 group-hover:text-white sm:text-lg">{stat.label}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#646b73] transition-colors duration-500 group-hover:text-white/80">
                    {stat.detail}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

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
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <motion.article
                  key={industry.number}
                  className="group overflow-hidden rounded-2xl border border-[#e3e5e8] bg-white shadow-[0_5px_18px_rgba(31,31,31,0.04)] transition-shadow duration-300 hover:shadow-[0_16px_38px_rgba(31,31,31,0.1)]"
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.16 }}
                  transition={{ duration: shouldReduceMotion ? 0 : 0.6, delay: shouldReduceMotion ? 0 : index * 0.07, ease: [0.16, 1, 0.3, 1] }}
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
                      {industry.number} / 04
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
        </div>
      </section>

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

      <section className="border-y border-[#e3e5e8] bg-white px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <motion.div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12" {...reveal}>
            <p className="mb-3 font-badge text-xs font-bold uppercase tracking-[0.2em] text-[#f36f35]">
              Built around your priorities
            </p>
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-[#111827] sm:text-4xl">
              A dependable customer experience.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#646b73] sm:text-base">
              Strong partnerships start with clear conversations. Here is what you can expect when you work with our team.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {servicePillars.map((pillar, index) => {
              const Icon = pillar.icon;

              return (
                <motion.article
                  key={pillar.title}
                  className="group relative flex h-full flex-col rounded-2xl border border-[#e5e7eb] bg-[#f4f5f7] p-6 transition-colors duration-300 hover:border-[#f7b69a] hover:bg-white sm:p-7"
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={shouldReduceMotion ? undefined : { y: -6 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: shouldReduceMotion ? 0 : 0.55,
                    delay: shouldReduceMotion ? 0 : index * 0.08,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                >
                  <Quote className="h-6 w-6 fill-[#f36f35] text-[#f36f35]" aria-hidden="true" />
                  <p className="mt-5 flex-1 text-base leading-7 text-[#4c4c4c] sm:text-lg">
                    {pillar.description}
                  </p>
                  <div className="mt-7 flex items-center gap-4 border-t border-[#e3e5e8] pt-5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-4 border-white bg-[#fce6dc] text-[#f36f35] shadow-sm transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h3 className="font-heading text-base font-bold text-[#1f1f1f]">{pillar.title}</h3>
                      <p className="mt-1 font-badge text-[10px] font-bold uppercase tracking-[0.14em] text-[#858b94]">
                        Our commitment
                      </p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 sm:px-10 sm:py-20 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-6 rounded-2xl bg-[#1f1f1f] p-7 text-white sm:p-10 lg:flex-row lg:items-center lg:justify-between lg:p-12">
          <div className="max-w-2xl">
            <p className="mb-3 font-badge text-xs font-bold uppercase tracking-[0.2em] text-[#ff986d]">Let’s move your project forward</p>
            <h2 className="font-heading text-2xl font-extrabold leading-tight sm:text-3xl">Have a requirement in mind?</h2>
            <p className="mt-3 text-sm leading-7 text-white/70">
              Tell us about your application, product needs and delivery schedule. Our team can help you find
              the right next step.
            </p>
          </div>
          <Link
            to="/contact"
            className="inline-flex shrink-0 items-center justify-between gap-8 rounded-lg bg-[#f36f35] px-5 py-3.5 font-badge text-sm font-bold text-white transition-colors hover:bg-[#e05d23] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f36f35]"
          >
            Discuss your requirement
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
