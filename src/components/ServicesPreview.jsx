import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import constructionImage from '../assets/industry-images/CONSTRUCTION.jpg';
import defenceImage from '../assets/industry-images/DEFENCE.jpg';
import powerImage from '../assets/industry-images/POWER.jpg';
import railwayImage from '../assets/industry-images/RAILWAY.jpg';

const industries = [
  { name: 'Construction', image: constructionImage },
  { name: 'Defence', image: defenceImage },
  { name: 'Power', image: powerImage },
  { name: 'Railway', image: railwayImage },
];

export default function ServicesPreview() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="services" className="bg-[#f4f5f7] px-6 py-16 sm:px-10 sm:py-20 lg:px-16 lg:py-24">
      <div className="mx-auto max-w-7xl">
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

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.55, delay: shouldReduceMotion ? 0 : index * 0.07, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link
                to="/services"
                className="group relative block aspect-[4/3] overflow-hidden rounded-2xl bg-[#1f1f1f] shadow-[0_8px_24px_rgba(31,31,31,0.1)]"
              >
                <img
                  src={industry.image}
                  alt=""
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111827]/75 via-[#111827]/10 to-transparent transition-opacity duration-300 group-hover:from-[#111827]/85" />
                <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-3 text-white sm:inset-x-6 sm:bottom-6">
                  <h3 className="font-heading text-xl font-extrabold sm:text-2xl">{industry.name}</h3>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/55 bg-white/10 transition-colors group-hover:border-[#f36f35] group-hover:bg-[#f36f35]">
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
