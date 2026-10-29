import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Quote, BadgeCheck, ListChecks, Handshake } from 'lucide-react';

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

export default function PrioritiesSection() {
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
  );
}

