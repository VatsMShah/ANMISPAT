import { useState } from 'react';
import { ArrowDown, ArrowRight, Award, BadgeCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import trophyImage from '../assets/awards-images/trophy-sample.png';
import logisticsImage from '../assets/images/logistics.png';

const recognitions = [
  {
    title: 'Excellence in Fabrication',
    category: 'Craft & precision',
    description: 'Recognized for top-tier manufacturing precision and high-grade safety standards.',
  },
  {
    title: 'Industrial Innovation',
    category: 'Progress & ideas',
    description: 'Honored for pioneering sustainable metal processing techniques and smart solutions.',
  },
  {
    title: 'Quality Benchmark',
    category: 'Quality & consistency',
    description: 'Awarded for maintaining global ISO standards across large-scale infrastructure.',
  },
  {
    title: 'Best Corporate Supplier',
    category: 'Partnership & trust',
    description: 'Voted top reliable partner for industrial infrastructure, supply chains, and trust.',
  },
];

export default function Achievements() {
  const [activeRecognition, setActiveRecognition] = useState(0);
  const activeItem = recognitions[activeRecognition];

  return (
    <main className="overflow-hidden bg-white text-[#1f1f1f]">
      <section className="relative isolate flex min-h-[530px] items-end overflow-hidden bg-[#101923] px-6 pb-16 pt-24 sm:px-10 lg:min-h-[610px] lg:px-16 lg:pb-20">
        <img src={logisticsImage} alt="Steel products prepared for delivery" className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#111923]/95 via-[#111923]/75 to-[#111923]/25" />
        <div className="absolute bottom-0 left-0 h-1 w-full origin-left animate-[achievement-rule_1.1s_ease-out_forwards] bg-[#f36f35]" />
        <div className="mx-auto w-full max-w-7xl animate-[achievement-rise_700ms_cubic-bezier(.16,1,.3,1)_both]">
          <p className="mb-5 flex items-center gap-3 font-badge text-xs font-bold uppercase tracking-[0.2em] text-white/75">
            <span className="h-[2px] w-9 bg-[#f36f35]" />
            Recognition, earned through the work
          </p>
          <h1 className="max-w-3xl font-heading text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-7xl">
            Progress worth <span className="text-[#f36f35]">recognizing.</span>
          </h1>
          <p className="mt-6 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
            A closer look at the recognition behind our commitment to quality, dependable partnerships, and better ways of working.
          </p>
          <a href="#recognition" className="mt-9 inline-flex items-center gap-3 border-b border-white/35 pb-2 text-sm font-semibold text-white transition-colors hover:border-[#f36f35] hover:text-[#ff986d]">
            Explore our recognition <ArrowDown size={16} />
          </a>
        </div>
      </section>

      <section id="recognition" className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 grid gap-5 lg:grid-cols-[1fr_0.7fr] lg:items-end">
            <div>
              <p className="mb-3 font-badge text-xs font-bold uppercase tracking-[0.2em] text-[#f36f35]">A record of commitment</p>
              <h2 className="max-w-2xl font-heading text-3xl font-extrabold leading-tight text-[#171c22] sm:text-4xl lg:text-5xl">
                Every recognition tells a story of people, process, and purpose.
              </h2>
            </div>
            <p className="max-w-lg text-sm leading-7 text-[#646b73] lg:justify-self-end">
              Select a recognition to see the principle behind it. The standard is not a finish line; it is how we approach the next project.
            </p>
          </div>

          <div className="grid overflow-hidden border border-[#dfe3e7] lg:grid-cols-[0.9fr_1.1fr]">
            <div className="relative flex min-h-[360px] items-center justify-center overflow-hidden bg-[#f4f5f7] p-8 sm:min-h-[460px]">
              <div className="absolute inset-0 opacity-50" style={{ backgroundImage: 'linear-gradient(rgba(31,31,31,.045) 1px, transparent 1px), linear-gradient(90deg, rgba(31,31,31,.045) 1px, transparent 1px)', backgroundSize: '38px 38px' }} />
              <div className="absolute left-8 top-8 flex items-center gap-2 font-badge text-[10px] font-bold uppercase tracking-[0.16em] text-[#747b83]">
                <Award size={15} className="text-[#f36f35]" />
                Featured recognition
              </div>
              <div key={activeItem.title} className="relative flex w-full flex-col items-center text-center animate-[achievement-rise_450ms_cubic-bezier(.16,1,.3,1)_both]">
                <div className="mb-5 flex h-24 w-24 items-center justify-center rounded-full border border-[#f36f35]/25 bg-white shadow-[0_12px_35px_rgba(31,31,31,.08)]">
                  <img src={trophyImage} alt="" aria-hidden="true" className="h-16 w-16 object-contain" />
                </div>
                <p className="font-badge text-[10px] font-bold uppercase tracking-[0.18em] text-[#f36f35]">{activeItem.category}</p>
                <h3 className="mt-3 max-w-md font-heading text-2xl font-extrabold leading-tight text-[#171c22] sm:text-3xl">{activeItem.title}</h3>
                <p className="mt-4 max-w-md text-sm leading-7 text-[#646b73]">{activeItem.description}</p>
              </div>
              <span className="absolute bottom-7 right-7 font-badge text-xs font-semibold tabular-nums text-[#90969c]">
                {String(activeRecognition + 1).padStart(2, '0')} <span className="mx-1 text-[#f36f35]">/</span> {String(recognitions.length).padStart(2, '0')}
              </span>
            </div>

            <div className="flex flex-col divide-y divide-[#e5e8eb] bg-white">
              {recognitions.map((recognition, index) => {
                const isActive = activeRecognition === index;
                return (
                  <button
                    key={recognition.title}
                    type="button"
                    onClick={() => setActiveRecognition(index)}
                    aria-pressed={isActive}
                    className={`group flex flex-1 items-center gap-4 px-6 py-6 text-left transition-colors sm:px-9 sm:py-8 ${isActive ? 'bg-[#fff8f4]' : 'hover:bg-[#f8f9fa]'}`}
                  >
                    <span className={`flex h-10 w-10 shrink-0 items-center justify-center border text-xs font-bold transition-colors ${isActive ? 'border-[#f36f35] bg-[#f36f35] text-white' : 'border-[#dfe3e7] text-[#777f87] group-hover:border-[#f36f35] group-hover:text-[#f36f35]'}`}>
                      {String(index + 1).padStart(2, '0')}
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block font-badge text-[10px] font-bold uppercase tracking-[0.15em] text-[#858c93]">{recognition.category}</span>
                      <span className={`mt-1 block font-heading text-base font-bold sm:text-lg ${isActive ? 'text-[#1f1f1f]' : 'text-[#555d65]'}`}>{recognition.title}</span>
                    </span>
                    <ArrowRight size={18} className={`shrink-0 transition-all ${isActive ? 'translate-x-0 text-[#f36f35]' : '-translate-x-1 text-[#aeb4ba] group-hover:translate-x-0 group-hover:text-[#f36f35]'}`} />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-[#e4e7ea] bg-[#f4f5f7] px-6 py-16 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-7 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex max-w-2xl gap-4">
            <BadgeCheck className="mt-1 shrink-0 text-[#f36f35]" size={25} />
            <div>
              <h2 className="font-heading text-xl font-extrabold text-[#1f1f1f] sm:text-2xl">Built on standards. Strengthened by trust.</h2>
              <p className="mt-2 text-sm leading-6 text-[#646b73]">Learn more about the people and principles behind our work.</p>
            </div>
          </div>
          <Link to="/about" className="inline-flex w-fit items-center gap-3 border-b border-[#f36f35] pb-2 font-badge text-xs font-bold uppercase tracking-[0.12em] text-[#1f1f1f] transition-colors hover:text-[#f36f35]">
            Meet ANM Ispat <ArrowRight size={16} />
          </Link>
        </div>
      </section>
      <style>{`
        @keyframes achievement-rise { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes achievement-rule { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @media (prefers-reduced-motion: reduce) { .animate-\\[achievement-rise_700ms_cubic-bezier\\(.16\\,1\\,.3\\,1\\)_both\\], .animate-\\[achievement-rise_450ms_cubic-bezier\\(.16\\,1\\,.3\\,1\\)_both\\], .animate-\\[achievement-rule_1\\.1s_ease-out_forwards\\] { animation: none; } }
      `}</style>
    </main>
  );
}