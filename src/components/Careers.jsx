import { useState } from 'react';
import { ArrowDown, ArrowRight, BriefcaseBusiness, Compass, Handshake, Lightbulb, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import teamImage from '../assets/images/core-values-engineers.png';

const principles = [
  {
    label: 'Bring your craft',
    title: 'Good work starts with care.',
    description: 'From technical expertise to the details that keep an operation moving, we value thoughtful work and a commitment to doing it well.',
    icon: Compass,
  },
  {
    label: 'Make progress together',
    title: 'Better outcomes are shared.',
    description: 'Strong partnerships are part of how we work. We value people who communicate clearly, support one another, and keep commitments.',
    icon: Handshake,
  },
  {
    label: 'Keep improving',
    title: 'Stay curious about what is next.',
    description: 'Industrial work keeps changing. We welcome practical ideas that improve quality, service, and the way teams solve problems.',
    icon: Lightbulb,
  },
];

export default function Careers() {
  const [activePrinciple, setActivePrinciple] = useState(0);
  const selectedPrinciple = principles[activePrinciple];
  const PrincipleIcon = selectedPrinciple.icon;

  return (
    <main className="overflow-hidden bg-white text-[#1f1f1f]">
      <section className="relative isolate min-h-[550px] overflow-hidden bg-[#111923] px-6 py-20 sm:px-10 lg:min-h-[620px] lg:px-16">
        <img src={teamImage} alt="Engineers collaborating on industrial work" className="absolute inset-0 -z-20 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-[#111923]/95 via-[#111923]/80 to-[#111923]/35" />
        <div className="mx-auto flex min-h-[410px] max-w-7xl items-center lg:min-h-[470px]">
          <div className="max-w-3xl animate-[career-rise_700ms_cubic-bezier(.16,1,.3,1)_both]">
            <p className="mb-5 flex items-center gap-3 font-badge text-xs font-bold uppercase tracking-[0.2em] text-white/75">
              <span className="h-[2px] w-9 bg-[#f36f35]" />
              Careers at ANM Ispat
            </p>
            <h1 className="font-heading text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl lg:text-7xl">
              Build work that <span className="text-[#f36f35]">moves industry.</span>
            </h1>
            <p className="mt-6 max-w-xl text-sm leading-7 text-white/75 sm:text-base">
              Bring your perspective to a team focused on dependable steel solutions, strong partnerships, and work done with purpose.
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a href="#opportunities" className="inline-flex w-fit items-center gap-3 bg-[#f36f35] px-6 py-3.5 font-badge text-xs font-bold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#dc5d27]">
                Explore opportunities <ArrowDown size={16} />
              </a>
              <span className="text-xs font-medium text-white/60">A team shaped by craft, care, and collaboration</span>
            </div>
          </div>
        </div>
        <span className="absolute bottom-0 left-0 h-1 w-full origin-left animate-[career-rule_1.1s_ease-out_forwards] bg-[#f36f35]" />
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="mb-3 font-badge text-xs font-bold uppercase tracking-[0.2em] text-[#f36f35]">The way we work</p>
            <h2 className="font-heading text-3xl font-extrabold leading-tight text-[#171c22] sm:text-4xl">A place for practical thinkers and people who follow through.</h2>
            <p className="mt-5 text-sm leading-7 text-[#646b73]">Our work depends on trust: in the materials we supply, in the expertise we bring, and in the people beside us. We value a grounded, collaborative approach to making that trust real.</p>
            <Link to="/about" className="mt-7 inline-flex items-center gap-3 border-b border-[#f36f35] pb-2 font-badge text-xs font-bold uppercase tracking-[0.12em] text-[#1f1f1f] transition-colors hover:text-[#f36f35]">
              Get to know us <ArrowRight size={16} />
            </Link>
          </div>

          <div className="border-t border-[#dfe3e7]">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              const isActive = activePrinciple === index;
              return (
                <button
                  key={principle.label}
                  type="button"
                  onClick={() => setActivePrinciple(index)}
                  aria-pressed={isActive}
                  className={`flex w-full items-center gap-4 border-b border-[#dfe3e7] py-5 text-left transition-colors sm:py-6 ${isActive ? 'text-[#f36f35]' : 'text-[#555d65] hover:text-[#f36f35]'}`}
                >
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center border ${isActive ? 'border-[#f36f35] bg-[#fff4ee]' : 'border-[#dfe3e7]'}`}><Icon size={18} /></span>
                  <span className="flex-1 font-heading text-base font-bold sm:text-lg">{principle.label}</span>
                  <span className="font-badge text-xs font-semibold tabular-nums text-[#969ca2]">0{index + 1}</span>
                </button>
              );
            })}
            <div key={selectedPrinciple.title} className="flex gap-4 py-7 animate-[career-rise_400ms_cubic-bezier(.16,1,.3,1)_both]">
              <PrincipleIcon className="mt-1 shrink-0 text-[#f36f35]" size={21} />
              <div>
                <h3 className="font-heading text-xl font-extrabold text-[#1f1f1f]">{selectedPrinciple.title}</h3>
                <p className="mt-2 max-w-xl text-sm leading-7 text-[#646b73]">{selectedPrinciple.description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="opportunities" className="border-y border-[#dfe3e7] bg-[#f4f5f7] px-6 py-16 sm:px-10 lg:px-16 lg:py-20">
        <div className="mx-auto grid max-w-7xl gap-9 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <p className="mb-3 font-badge text-xs font-bold uppercase tracking-[0.2em] text-[#f36f35]">Current opportunities</p>
            <h2 className="font-heading text-3xl font-extrabold leading-tight text-[#171c22] sm:text-4xl">No open roles at the moment.</h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-[#646b73]">We don’t have any published vacancies right now. If you’d like to be considered for future opportunities, introduce yourself and tell us where you could make a difference.</p>
          </div>
          <div className="border-l-2 border-[#f36f35] bg-white px-6 py-6 sm:px-8 sm:py-8">
            <div className="flex items-center gap-3 text-[#f36f35]"><BriefcaseBusiness size={20} /><span className="font-badge text-[10px] font-bold uppercase tracking-[0.16em]">Stay in touch</span></div>
            <h3 className="mt-4 font-heading text-xl font-extrabold text-[#1f1f1f]">Start a conversation with our team.</h3>
            <p className="mt-2 text-sm leading-6 text-[#646b73]">Share your interests and experience through our contact page.</p>
            <Link to="/contact" className="mt-6 inline-flex items-center gap-3 bg-[#f36f35] px-5 py-3 font-badge text-xs font-bold uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#dc5d27]">
              Contact ANM Ispat <Mail size={15} />
            </Link>
          </div>
        </div>
      </section>
      <style>{`
        @keyframes career-rise { from { opacity: 0; transform: translateY(18px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes career-rule { from { transform: scaleX(0); } to { transform: scaleX(1); } }
        @media (prefers-reduced-motion: reduce) { .animate-\\[career-rise_700ms_cubic-bezier\\(.16\\,1\\,.3\\,1\\)_both\\], .animate-\\[career-rise_400ms_cubic-bezier\\(.16\\,1\\,.3\\,1\\)_both\\], .animate-\\[career-rule_1\\.1s_ease-out_forwards\\] { animation: none; } }
      `}</style>
    </main>
  );
}