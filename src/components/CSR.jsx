import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, ArrowUpRight, Building2, ChevronLeft, ChevronRight, MapPin, ShieldCheck, Sparkles, X } from "lucide-react";

const PROJECT_PERIOD = "Illustrative placeholder";
const UNSPLASH = {
  education: [
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=85",
    "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1600&q=85",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=1600&q=85",
  ],
  healthcare: [
    "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=85",
    "https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=1600&q=85",
    "https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1600&q=85",
  ],
  environment: [
    "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=1600&q=85",
    "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1600&q=85",
    "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1600&q=85",
  ],
  community: [
    "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=1600&q=85",
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1600&q=85",
    "https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?auto=format&fit=crop&w=1600&q=85",
  ],
  elderCare:
    "https://media.gettyimages.com/id/1761327319/photo/home-caregiver-talking-to-a-senior-woman-at-nursing-home.jpg?s=612x612&w=0&k=20&c=kO0ZCNyP1RRW-1tQ9p-e1mv_gtj9nhuvWu7jGf03yfg=",
};

const HERO_SITES = [
  {
    id: "site-01",
    tag: "FIG 01.1",
    title: "District Primary School Infrastructure Upgrade",
    location: "Representative rural district, India",
    image: UNSPLASH.education[0],
    clause: "Schedule VII, Clause (ii)",
  },
  {
    id: "site-02",
    tag: "FIG 01.2",
    title: "Metropolitan Health & Diagnostic Camp",
    location: "Representative metropolitan area, India",
    image: UNSPLASH.healthcare[0],
    clause: "Schedule VII, Clause (i)",
  },
  {
    id: "site-03",
    tag: "FIG 01.3",
    title: "Regional Reforestation & Ecology Drive",
    location: "Representative regional district, India",
    image: UNSPLASH.environment[0],
    clause: "Schedule VII, Clause (iv)",
  },
];

const FIELD_IMAGES = [
  ...UNSPLASH.education,
  ...UNSPLASH.healthcare.slice(0, 2),
  ...UNSPLASH.environment.slice(0, 2),
  UNSPLASH.community[0],
];

const METRICS = [
  { value: "8+", label: "Schools supported", note: "District Primary School Infrastructure Upgrade - Phase II", period: PROJECT_PERIOD },
  { value: "1,000+", label: "Students reached", note: "Community Learning & Scholarship Programme", period: PROJECT_PERIOD },
  { value: "20+", label: "Health camps held", note: "Metropolitan Health & Diagnostic Camp", period: PROJECT_PERIOD },
  { value: "5,000+", label: "Trees planted", note: "Regional Reforestation & Ecology Drive", period: PROJECT_PERIOD },
];

const PILLARS = [
  {
    id: "education",
    code: "01",
    title: "Rural education",
    clause: "Item (ii)",
    clauseText: "Promoting education, including special education and employment-enhancing vocational skills.",
    partner: "Representative education programme partner",
    location: "Representative district, India",
    sdg: "SDG 4 – Quality education",
    summary:
      "Illustrative school programme covering facility improvements, learning resources and student support.",
    activities: [
      "District Primary School Infrastructure Upgrade - Phase II",
      "Community Learning & Digital Access Programme",
      "Rural Student Scholarship Initiative",
      "Youth Skills & Vocational Training Project",
    ],
    images: [
      { src: UNSPLASH.education[0], title: "District Primary School Infrastructure Upgrade - Phase II" },
      { src: UNSPLASH.education[1], title: "Community Learning & Digital Access Programme" },
      { src: UNSPLASH.education[2], title: "Rural Student Scholarship Initiative" },
    ],
  },
  {
    id: "healthcare",
    code: "02",
    title: "Urban healthcare",
    clause: "Item (i)",
    clauseText: "Eradicating hunger, poverty and malnutrition; promoting health care, including preventive health care.",
    partner: "Representative community health partner",
    location: "Representative metropolitan area, India",
    sdg: "SDG 3 – Good health and well-being",
    summary:
      "Illustrative community health services offering screenings, diagnostics and preventive care.",
    activities: [
      "Metropolitan Health & Diagnostic Camp",
      "Community Vision Screening Initiative",
      "Preventive Wellness Outreach Programme",
      "Essential Medical Access Project",
    ],
    images: [
      { src: UNSPLASH.healthcare[0], title: "Metropolitan Health & Diagnostic Camp" },
      { src: UNSPLASH.healthcare[1], title: "Community Vision Screening Initiative" },
      { src: UNSPLASH.healthcare[2], title: "Preventive Wellness Outreach Programme" },
    ],
  },
  {
    id: "elder",
    code: "03",
    title: "Elder care",
    clause: "Item (iii)",
    clauseText: "Setting up old age homes, day care centres and other facilities for senior citizens.",
    partner: "Representative senior care programme partner",
    location: "Representative community, India",
    sdg: "SDG 3 and SDG 10 – Health and reduced inequalities",
    summary:
      "Illustrative support for senior wellbeing, accessible facilities and community green spaces.",
    activities: [
      "Senior Wellbeing & Accessible Care Initiative",
      "Community Day-Centre Improvement Project",
      "Regional Reforestation & Ecology Drive",
    ],
    images: [
      { src: UNSPLASH.elderCare, title: "Senior Wellbeing & Accessible Care Initiative" },
      { src: UNSPLASH.environment[0], title: "Regional Reforestation & Ecology Drive" },
      { src: UNSPLASH.environment[1], title: "Community Green Space Restoration Project" },
    ],
  },
  {
    id: "special",
    code: "04",
    title: "Special needs support",
    clause: "Item (ii)",
    clauseText: "Promoting education, including special education among differently-abled persons.",
    partner: "Representative inclusion programme partner",
    location: "Representative regional community, India",
    sdg: "SDG 4 and SDG 10 – Education and reduced inequalities",
    summary:
      "Illustrative community support focused on accessibility, inclusion and shared resources.",
    activities: [
      "Accessible Community Resource Centre Project",
      "Mobility & Independent Living Support Programme",
      "Community Inclusion and Essential Relief Initiative",
    ],
    images: [
      { src: UNSPLASH.community[0], title: "Accessible Community Resource Centre Project" },
      { src: UNSPLASH.community[1], title: "Mobility & Independent Living Support Programme" },
      { src: UNSPLASH.community[2], title: "Community Inclusion Initiative" },
    ],
  },
];

const REGIONS = [
  { project: "District Primary School Infrastructure Upgrade - Phase II", work: "School facilities and learning resources", pillar: "Rural education" },
  { project: "Metropolitan Health & Diagnostic Camp", work: "Preventive screening and community care", pillar: "Urban healthcare" },
  { project: "Regional Reforestation & Ecology Drive", work: "Tree planting and habitat restoration", pillar: "Environment" },
];

const GOVERNANCE = [
  { term: "Statutory basis", detail: "Programmes are selected under Schedule VII of Section 135, Companies Act, 2013." },
  { term: "Implementation partners", detail: "Partner names are placeholders for illustrative programme examples." },
  { term: "Project locations", detail: "Location labels are representative placeholders, not verified project sites." },
  { term: "Project verification", detail: "Add verified implementation details and supporting documentation before publication." },
  { term: "Reporting period", detail: "Dates and reporting periods are intentionally omitted from this sample content." },
];

const EASE = "ease-[cubic-bezier(0.16,1,0.3,1)]";
const ACCENT_BAR = `pointer-events-none absolute inset-y-0 left-0 w-0.5 origin-top scale-y-0 bg-[#f36f35] transition-transform duration-200 ${EASE} group-hover:scale-y-100 group-focus-visible:scale-y-100`;

export default function CSR() {
  const shouldReduceMotion = useReducedMotion();
  const [activeSite, setActiveSite] = useState(HERO_SITES[0]);
  const [activeId, setActiveId] = useState(PILLARS[0].id);
  const [fieldSlide, setFieldSlide] = useState(0);
  const [modalPillar, setModalPillar] = useState(null);
  const [modalSlide, setModalSlide] = useState(0);
  const closeRef = useRef(null);
  const triggerRef = useRef(null);

  const activeIndex = PILLARS.findIndex((p) => p.id === activeId);
  const active = PILLARS[activeIndex];

  const enterTransition = {
    duration: shouldReduceMotion ? 0 : 0.65,
    ease: [0.16, 1, 0.3, 1],
  };

  const openModal = (pillar, e) => {
    triggerRef.current = e.currentTarget;
    setModalPillar(pillar);
    setModalSlide(0);
  };

  const closeModal = () => {
    setModalPillar(null);
    triggerRef.current?.focus();
  };

  useEffect(() => {
    if (!modalPillar) return undefined;
    const count = modalPillar.images.length;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
      else if (e.key === "ArrowLeft") setModalSlide((s) => (s === 0 ? count - 1 : s - 1));
      else if (e.key === "ArrowRight") setModalSlide((s) => (s + 1) % count);
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [modalPillar]);

  const onTabKey = (e) => {
    if (e.key !== "ArrowDown" && e.key !== "ArrowUp") return;
    e.preventDefault();
    const step = e.key === "ArrowDown" ? 1 : -1;
    const next = PILLARS[(activeIndex + step + PILLARS.length) % PILLARS.length];
    setActiveId(next.id);
    document.getElementById(`tab-${next.id}`)?.focus();
  };

  return (
    <main className="bg-white text-[#4c4c4c] selection:bg-[#f36f35] selection:text-white">
      {/* 1. HERO WITH INTERACTIVE FIELD VIEWPORT */}
      <motion.section
        className="relative isolate overflow-hidden border-b border-gray-200 bg-white text-[#4c4c4c]"
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.5 }}
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_78%_48%,rgba(243,111,53,0.09),transparent_38%),linear-gradient(to_right,rgba(31,31,31,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(31,31,31,0.025)_1px,transparent_1px)] bg-[size:auto,4rem_4rem,4rem_4rem]"
        />

        <div className="relative z-10 mx-auto max-w-7xl px-6 pb-14 pt-8 sm:px-10 sm:pb-16 sm:pt-10 lg:px-16 lg:pb-20 lg:pt-12">
          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-12">
            
            {/* Left Content Column */}
            <motion.div
              className="flex flex-col justify-center lg:col-span-6"
              initial={shouldReduceMotion ? false : "hidden"}
              animate="visible"
              variants={{
                hidden: {},
                visible: { transition: { staggerChildren: shouldReduceMotion ? 0 : 0.1 } },
              }}
            >
              <div>
                <motion.nav
                  aria-label="Breadcrumb"
                  className="mb-6 flex items-center gap-2 text-xs text-[#667085]"
                  variants={{
                    hidden: { opacity: 0, y: 12 },
                    visible: { opacity: 1, y: 0, transition: enterTransition },
                  }}
                >
                  <Link to="/" className="transition-colors hover:text-[#f36f35]">Home</Link>
                  <span aria-hidden="true">/</span>
                  <span className="text-[#111827]">CSR and community impact</span>
                </motion.nav>

                <motion.div
                  className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#fbd8cb] bg-[#fff1eb] px-3.5 py-1.5 font-badge text-[10px] font-bold uppercase tracking-[0.18em] text-[#e05d23] sm:text-xs"
                  variants={{
                    hidden: { opacity: 0, y: 14 },
                    visible: { opacity: 1, y: 0, transition: enterTransition },
                  }}
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  Community impact
                </motion.div>

                <motion.h1
                  className="max-w-2xl font-heading text-4xl font-extrabold leading-[1.08] tracking-tight text-[#111827] sm:text-5xl lg:text-6xl"
                  variants={{
                    hidden: { opacity: 0, y: 24 },
                    visible: { opacity: 1, y: 0, transition: enterTransition },
                  }}
                >
                  Measurable impact. <br />
                  <span className="text-[#f36f35]">Built with purpose.</span>
                </motion.h1>

                <motion.p
                  className="mt-5 max-w-xl font-body text-sm leading-7 text-[#4c4c4c] sm:mt-6 sm:text-base sm:leading-7"
                  variants={{
                    hidden: { opacity: 0, y: 18 },
                    visible: { opacity: 1, y: 0, transition: enterTransition },
                  }}
                >
                  Explore illustrative community programmes in education, healthcare and environmental
                  care. Project names, partner details, locations and figures shown here are placeholders;
                  replace them with verified disclosures before publication.
                </motion.p>
              </div>

              {/* Interactive Field Location Selector */}
              <motion.div
                className="mt-8 border-t border-gray-200 pt-6 sm:mt-9 sm:pt-7"
                variants={{
                  hidden: { opacity: 0, y: 14 },
                  visible: { opacity: 1, y: 0, transition: enterTransition },
                }}
              >
                <span className="mb-3 block font-badge text-[10px] font-bold uppercase tracking-[0.18em] text-[#667085] sm:text-[11px]">
                  Explore an impact area
                </span>
                <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
                  {HERO_SITES.map((site) => {
                    const isActive = site.id === activeSite.id;
                    return (
                      <button
                        key={site.id}
                        onClick={() => setActiveSite(site)}
                        className={`relative overflow-hidden rounded-xl border px-3.5 py-3 text-left font-body text-xs transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f36f35] ${
                          isActive
                            ? "border-[#f36f35] bg-[#fff8f4] text-[#111827] font-semibold"
                            : "border-gray-200 bg-[#f8f9fa] text-[#4c4c4c] hover:border-[#f36f35]/50 hover:bg-white hover:text-[#111827]"
                        }`}
                      >
                        {isActive && (
                          <motion.div
                            layoutId="activeHeroTab"
                            className="absolute inset-0 border-l-2 border-[#f36f35] bg-[#f36f35]/[0.06]"
                            transition={{ type: "spring", stiffness: 350, damping: 30 }}
                          />
                        )}
                        <span className="relative block font-badge text-[9px] font-bold uppercase tracking-[0.14em] text-[#e05d23]">{site.tag}</span>
                        <span className="relative mt-1 block truncate font-heading text-xs font-bold">{site.title}</span>
                      </button>
                    );
                  })}
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="mt-6 flex flex-wrap gap-3 sm:mt-7"
                variants={{
                  hidden: { opacity: 0, y: 14 },
                  visible: { opacity: 1, y: 0, transition: enterTransition },
                }}
              >
                <a
                  href="#pillars-section"
                  className="inline-flex items-center gap-2 rounded-lg border border-[#f36f35] bg-[#f36f35] px-5 py-3 font-badge text-sm font-bold text-white transition-colors duration-200 hover:border-[#e05d23] hover:bg-[#e05d23] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f36f35]"
                >
                  View audit matrix
                  <ArrowDown className="h-4 w-4" />
                </a>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-5 py-3 font-badge text-sm font-bold text-[#111827] transition-colors duration-200 hover:border-[#f36f35] hover:bg-[#fff8f4] hover:text-[#e05d23] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f36f35]"
                >
                  Request the annual CSR brief
                  <ArrowUpRight className="h-4 w-4 text-[#667085]" />
                </Link>
              </motion.div>
            </motion.div>

            {/* Right Interactive Photographic Viewport */}
            <div className="flex flex-col lg:col-span-6">
              <div className="relative min-h-[360px] flex-1 overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 shadow-[0_18px_45px_rgba(31,31,31,0.12)] sm:min-h-[430px] lg:min-h-[500px]">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={activeSite.id}
                    src={activeSite.image}
                    alt={activeSite.title}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </AnimatePresence>

                {/* Viewport Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/15 to-transparent" />

                {/* Top Viewport Header */}
                <div className="absolute left-4 right-4 top-4 flex items-center justify-between gap-2 text-xs sm:left-5 sm:right-5 sm:top-5">
                  <span className="rounded-lg border border-gray-200 bg-white/90 px-3 py-1.5 font-badge text-[10px] font-bold uppercase tracking-[0.14em] text-[#e05d23] shadow-sm backdrop-blur-md">
                    {activeSite.tag}
                  </span>
                  <span className="flex max-w-[70%] items-center gap-1.5 rounded-lg border border-gray-200 bg-white/90 px-3 py-1.5 font-body text-[10px] text-[#4c4c4c] shadow-sm backdrop-blur-md sm:text-xs">
                    <MapPin className="h-3 w-3 shrink-0 text-[#f36f35]" />
                    <span className="truncate">{activeSite.location}</span>
                  </span>
                </div>

                {/* Bottom Viewport Caption & Metadata */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white via-white/95 to-white/0 p-5 pt-16 sm:p-7 sm:pt-20">
                  <span className="block font-badge text-[10px] font-bold uppercase tracking-[0.16em] text-[#e05d23] sm:text-[11px]">
                    {activeSite.clause}
                  </span>
                  <h3 className="mt-2 font-heading text-xl font-extrabold leading-tight text-[#111827] sm:text-2xl">
                    {activeSite.title}
                  </h3>
                  <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-gray-200 pt-3 font-body text-[11px] text-[#667085] sm:text-xs">
                    <span className="flex items-center gap-1.5">
                      <Building2 className="h-3.5 w-3.5 text-[#f36f35]" />
                      Illustrative programme
                    </span>
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="h-3.5 w-3.5 text-[#f36f35]" />
                      Sample project details
                    </span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </motion.section>

      {/* 2. PROOF LEDGER */}
      <section aria-label="Audit metric ledger" className="border-b border-gray-200">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-2 border-l border-gray-200 lg:grid-cols-4">
            {METRICS.map((m, index) => (
              <motion.div
                key={m.label}
                className="group relative border-b border-r border-gray-200 bg-[#f8f9fa] p-5 transition-colors duration-200 hover:bg-white sm:p-6 lg:border-b-0"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ ...enterTransition, delay: shouldReduceMotion ? 0 : index * 0.08 }}
              >
                <span aria-hidden="true" className={`csr-motion ${ACCENT_BAR}`} />
                <p className="font-heading text-4xl font-extrabold tracking-tight text-[#111827] sm:text-5xl">{m.value}</p>
                <p className="mt-2 text-sm font-bold text-[#111827] transition-colors duration-200 group-hover:text-[#f36f35]">{m.label}</p>
                <p className="mt-1 text-xs leading-snug text-[#666666]">{m.note}</p>
                <p className="mt-3 inline-block border border-gray-300 px-1.5 py-0.5 font-mono text-[10px] text-[#666666]">{m.period}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PILLAR MATRIX */}
      <section id="pillars-section" className="border-b border-gray-200 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="mb-10 grid gap-4 lg:grid-cols-12"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={enterTransition}
          >
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-[#111827] sm:text-4xl lg:col-span-5">
              Programmes mapped to Schedule VII
            </h2>
            <p className="max-w-xl text-sm leading-relaxed text-[#4c4c4c] sm:text-base lg:col-span-6 lg:col-start-7">
              Each programme is classified under the item of Schedule VII it serves, with its implementing
              partner, location and reporting period.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 overflow-hidden rounded-2xl border border-gray-200 lg:grid-cols-12">
            <div
              role="tablist"
              aria-orientation="vertical"
              aria-label="Programme pillars"
              onKeyDown={onTabKey}
              className="relative border-b border-gray-200 bg-[#f8f9fa] lg:col-span-4 lg:border-b-0 lg:border-r"
            >
              <motion.span
                aria-hidden="true"
                className="pointer-events-none absolute left-0 top-0 z-10 h-20 w-0.5 bg-[#f36f35]"
                animate={{ y: activeIndex * 80 }}
                transition={shouldReduceMotion ? { duration: 0 } : { type: "spring", stiffness: 420, damping: 34 }}
              />
              {PILLARS.map((p) => {
                const selected = p.id === activeId;
                return (
                  <button
                    key={p.id}
                    id={`tab-${p.id}`}
                    role="tab"
                    aria-selected={selected}
                    aria-controls="pillar-panel"
                    tabIndex={selected ? 0 : -1}
                    onClick={() => setActiveId(p.id)}
                    className={`flex h-20 w-full items-center gap-4 overflow-hidden border-b border-gray-200 px-5 text-left transition-colors duration-200 last:border-b-0 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#f36f35] ${
                      selected ? "bg-white" : "bg-[#f8f9fa] hover:bg-white"
                    }`}
                  >
                    <span className="font-mono text-xs text-[#667085]">{p.code}</span>
                    <span>
                      <span className={`block font-heading text-base font-bold ${selected ? "text-[#111827]" : "text-[#4c4c4c]"}`}>
                        {p.title}
                      </span>
                      <span className="block font-mono text-[11px] text-[#667085]">Schedule VII, {p.clause}</span>
                    </span>
                  </button>
                );
              })}
            </div>

            <div id="pillar-panel" role="tabpanel" aria-labelledby={`tab-${active.id}`} className="lg:col-span-8">
              <motion.div
                key={active.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 12, filter: "blur(4px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={enterTransition}
              >
                <div className="border-b border-gray-200 p-6 sm:p-8">
                  <span className="inline-block border border-[#f36f35] px-2 py-0.5 font-mono text-[11px] text-[#f36f35]">
                    Schedule VII, {active.clause}
                  </span>
                  <h3 className="mt-4 font-heading text-2xl font-extrabold text-[#111827] sm:text-3xl">{active.title}</h3>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#4c4c4c] sm:text-base">{active.summary}</p>
                </div>

                <dl className="grid grid-cols-1 sm:grid-cols-2">
                  {[
                    ["Clause text", active.clauseText],
                    ["Implementing partner", active.partner],
                    ["Location", active.location],
                    ["Project period", PROJECT_PERIOD],
                    ["UN SDG alignment", active.sdg],
                  ].map(([term, detail], i) => (
                    <div
                      key={term}
                      className={`border-b border-gray-200 p-5 sm:px-8 ${i % 2 === 0 ? "sm:border-r" : ""} ${i === 0 ? "sm:col-span-2 sm:border-r-0" : ""}`}
                    >
                      <dt className="font-badge text-xs font-bold uppercase tracking-wide text-[#667085]">{term}</dt>
                      <dd className="mt-1 text-sm text-[#111827]">{detail}</dd>
                    </div>
                  ))}
                </dl>

                <ul className="p-6 sm:p-8">
                  {active.activities.map((a) => (
                    <motion.li
                      key={a}
                      className="flex items-center gap-3 border-b border-gray-200 py-2.5 text-sm text-[#1f1f1f] last:border-b-0"
                      initial={shouldReduceMotion ? false : { opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ ...enterTransition, delay: shouldReduceMotion ? 0 : 0.08 }}
                    >
                      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-[#f36f35]" />
                      {a}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. EDITORIAL FIELD STUDY */}
      <section className="border-b border-gray-200 bg-[#f8f9fa] py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 shadow-[0_8px_24px_rgba(17,24,39,0.08)]">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.img
                    key={FIELD_IMAGES[fieldSlide]}
                    src={FIELD_IMAGES[fieldSlide]}
                    alt={`Illustrative field documentation ${fieldSlide + 1} of ${FIELD_IMAGES.length}`}
                    loading="lazy"
                    className="absolute inset-0 h-full w-full object-cover"
                    initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.035 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: shouldReduceMotion ? 1 : 0.99 }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.4, ease: [0.16, 1, 0.3, 1] }}
                  />
                </AnimatePresence>
              </div>
              <div className="flex items-stretch justify-between rounded-b-xl border-x border-b border-gray-200 bg-white">
                <p className="flex items-center px-3 font-mono text-[11px] text-[#666666]">
                  Fig 04.{fieldSlide + 1} – Field documentation, {String(fieldSlide + 1).padStart(2, "0")} / {String(FIELD_IMAGES.length).padStart(2, "0")}
                </p>
                <div className="flex border-l border-gray-200">
                  <button
                    aria-label="Previous photograph"
                    onClick={() => setFieldSlide((s) => (s === 0 ? FIELD_IMAGES.length - 1 : s - 1))}
                    className="flex h-10 w-10 items-center justify-center border-r border-gray-200 transition-colors hover:bg-[#1f1f1f] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#f36f35]"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    aria-label="Next photograph"
                    onClick={() => setFieldSlide((s) => (s + 1) % FIELD_IMAGES.length)}
                    className="flex h-10 w-10 items-center justify-center transition-colors hover:bg-[#1f1f1f] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#f36f35]"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <motion.h2
                className="font-heading text-3xl font-extrabold tracking-tight text-[#111827] sm:text-4xl"
                initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={enterTransition}
              >
                Giving back to the society we operate in
              </motion.h2>
              <p className="mt-5 max-w-2xl text-base font-semibold leading-relaxed text-[#111827]">
                A business operates within a community, never in isolation. The society we work in must
                benefit and grow alongside us.
              </p>
              <div className="mt-5 max-w-2xl space-y-4 text-sm leading-relaxed text-[#4c4c4c] sm:text-base">
                <p>
                  Our CSR work builds trust with customers, partners and institutions at district, state and
                  national levels. We measure it by what is delivered on the ground, not by announcements.
                </p>
                <p>
                  Programmes follow Schedule VII under Section 135 of the Companies Act, 2013, covering
                  hunger and health, education, care for senior citizens, and ecological balance.
                </p>
              </div>

              <h3 className="mt-10 font-badge text-xs font-bold uppercase tracking-widest text-[#667085]">Regional execution</h3>
              <div className="mt-3 border-t border-[#1f1f1f]">
                {REGIONS.map((r, index) => (
                  <motion.div
                    key={r.project}
                    className="grid grid-cols-1 gap-1 border-b border-gray-300 py-3 text-sm sm:grid-cols-12 sm:gap-4"
                    initial={shouldReduceMotion ? false : { opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ ...enterTransition, delay: shouldReduceMotion ? 0 : index * 0.08 }}
                  >
                    <span className="font-bold text-[#111827] sm:col-span-4">{r.project}</span>
                    <span className="text-[#4c4c4c] sm:col-span-5">{r.work}</span>
                    <span className="font-mono text-[11px] leading-5 text-[#666666] sm:col-span-3">{r.pillar}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. FIELD GALLERY */}
      <section id="gallery-section" className="border-b border-gray-200 py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            className="mb-10 grid gap-4 lg:grid-cols-12"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={enterTransition}
          >
            <h2 className="font-heading text-3xl font-extrabold tracking-tight text-[#111827] sm:text-4xl lg:col-span-5">Programme field records</h2>
            <p className="max-w-xl text-sm leading-relaxed text-[#4c4c4c] sm:text-base lg:col-span-6 lg:col-start-7">
              Placeholder photographs for illustrative programmes. Open a record to view its sample project,
              representative location and partner details.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PILLARS.map((p, index) => (
              <motion.button
                key={p.id}
                onClick={(e) => openModal(p, e)}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 24, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={shouldReduceMotion ? undefined : { y: -6, scale: 1.01 }}
                whileTap={shouldReduceMotion ? undefined : { scale: 0.99 }}
                transition={{ ...enterTransition, delay: shouldReduceMotion ? 0 : index * 0.09 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-[#f8f9fa] text-left shadow-[0_5px_18px_rgba(0,0,0,0.04)] transition-all duration-200 hover:bg-white hover:shadow-[0_12px_28px_rgba(17,24,39,0.1)] focus-visible:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#f36f35]"
              >
                <span aria-hidden="true" className={`csr-motion z-10 ${ACCENT_BAR}`} />
                <div className="overflow-hidden border-b border-gray-200 bg-gray-100">
                  <motion.img
                    src={p.images[0].src}
                    alt={p.images[0].title}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover"
                    whileHover={shouldReduceMotion ? undefined : { scale: 1.06 }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.55, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
                <div className="flex flex-1 flex-col p-5">
                  <span className="font-badge text-[11px] font-bold uppercase tracking-wide text-[#f36f35]">Schedule VII, {p.clause}</span>
                  <h3 className="mt-2 font-heading text-lg font-bold text-[#111827] transition-colors duration-200 group-hover:text-[#f36f35] group-focus-visible:text-[#f36f35]">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#666666]">{p.partner}</p>
                  <p className="mt-1 text-xs leading-relaxed text-[#666666]">{p.location}</p>
                  <p className="mt-4 flex items-center justify-between border-t border-gray-200 pt-3 font-mono text-[11px] text-[#666666]">
                    <span>{p.images.length} photographs</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* 6. GOVERNANCE */}
      <section className="border-b border-gray-200 bg-[#f8f9fa] py-14 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <h2 className="font-heading text-3xl font-extrabold tracking-tight text-[#111827] sm:text-4xl">Governance and verification</h2>
              <p className="mt-4 text-sm leading-relaxed text-[#4c4c4c] sm:text-base">
                How we select, deliver and report the programmes above.
              </p>
            </div>
            <dl className="grid grid-cols-1 overflow-hidden rounded-2xl border-l border-t border-gray-300 bg-white shadow-[0_5px_18px_rgba(0,0,0,0.04)] sm:grid-cols-2 lg:col-span-8">
              {GOVERNANCE.map((g, index) => (
                <motion.div
                  key={g.term}
                  className="border-b border-r border-gray-300 p-6"
                  initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ ...enterTransition, delay: shouldReduceMotion ? 0 : index * 0.07 }}
                >
                  <dt className="font-heading text-base font-bold text-[#111827]">{g.term}</dt>
                  <dd className="mt-2 text-sm leading-relaxed text-[#4c4c4c]">{g.detail}</dd>
                </motion.div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* 7. CTA */}
      <motion.section
        className="bg-[#1f1f1f] text-white"
        initial={shouldReduceMotion ? false : { opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: shouldReduceMotion ? 0 : 0.6 }}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 border-x border-white/15 md:grid-cols-12">
            <div className="p-8 sm:p-12 md:col-span-8 md:border-r md:border-white/15">
              <h2 className="font-heading text-2xl font-extrabold sm:text-3xl">Enterprise partnership and compliance inquiries</h2>
              <p className="mt-3 max-w-xl text-sm leading-relaxed text-gray-300">
                Request our annual CSR brief, supporting documentation for vendor due diligence, or discuss a
                joint programme.
              </p>
            </div>
            <div className="flex items-center border-t border-white/15 p-8 sm:p-12 md:col-span-4 md:border-t-0">
              <Link
                to="/contact"
                className="inline-flex w-full items-center justify-between gap-2 rounded-lg border border-white px-5 py-3 font-badge text-sm font-bold text-white transition-colors duration-200 hover:border-[#f36f35] hover:bg-[#f36f35] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f36f35]"
              >
                Contact our team
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </motion.section>

      {/* LIGHTBOX PORTAL */}
      {createPortal(
        <AnimatePresence>
          {modalPillar && (
            <motion.div
              key="csr-lightbox-backdrop"
              className="fixed inset-0 z-[100] flex items-center justify-center bg-[#1f1f1f]/85 p-4 sm:p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.2 }}
              onClick={closeModal}
            >
              <motion.div
                role="dialog"
                aria-modal="true"
                aria-label={`${modalPillar.title} field record`}
                className="w-full max-w-3xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl"
                initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96, y: 18 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.98, y: 10 }}
                transition={{ duration: shouldReduceMotion ? 0 : 0.28, ease: [0.16, 1, 0.3, 1] }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-start justify-between gap-4 border-b border-gray-200 px-5 py-4">
                  <div>
                    <p className="font-mono text-[11px] text-[#667085]">
                      Fig {modalPillar.code}.{modalSlide + 1} – Schedule VII, {modalPillar.clause}
                    </p>
                    <h3 className="mt-1 font-heading text-lg font-bold text-[#111827]">{modalPillar.images[modalSlide].title}</h3>
                  </div>
                  <button
                    ref={closeRef}
                    onClick={closeModal}
                    aria-label="Close field record"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-gray-200 transition-colors hover:bg-[#1f1f1f] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#f36f35]"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </div>

                <div className="relative aspect-[16/10] bg-gray-100">
                  <motion.img
                    key={modalPillar.images[modalSlide].src}
                    src={modalPillar.images[modalSlide].src}
                    alt={modalPillar.images[modalSlide].title}
                    className="h-full w-full object-cover"
                    initial={shouldReduceMotion ? false : { opacity: 0, scale: 1.02 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: shouldReduceMotion ? 0 : 0.3 }}
                  />
                  <button
                    aria-label="Previous photograph"
                    onClick={() => setModalSlide((s) => (s === 0 ? modalPillar.images.length - 1 : s - 1))}
                    className="absolute left-0 top-1/2 flex h-12 w-10 -translate-y-1/2 items-center justify-center border border-gray-200 bg-white/95 text-[#111827] transition-colors hover:bg-[#1f1f1f] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#f36f35]"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    aria-label="Next photograph"
                    onClick={() => setModalSlide((s) => (s + 1) % modalPillar.images.length)}
                    className="absolute right-0 top-1/2 flex h-12 w-10 -translate-y-1/2 items-center justify-center border border-gray-200 bg-white/95 text-[#111827] transition-colors hover:bg-[#1f1f1f] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#f36f35]"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </div>

                <dl className="grid grid-cols-1 border-t border-gray-300 text-xs sm:grid-cols-3">
                  <div className="border-b border-gray-200 px-5 py-3 sm:border-b-0 sm:border-r">
                    <dt className="font-bold text-[#667085]">Implementing partner</dt>
                    <dd className="mt-0.5 text-[#111827]">{modalPillar.partner}</dd>
                  </div>
                  <div className="border-b border-gray-200 px-5 py-3 sm:border-b-0 sm:border-r">
                    <dt className="font-bold text-[#667085]">Location</dt>
                    <dd className="mt-0.5 text-[#111827]">{modalPillar.location}</dd>
                  </div>
                  <div className="px-5 py-3">
                    <dt className="font-bold text-[#667085]">Project period</dt>
                    <dd className="mt-0.5 text-[#111827]">{PROJECT_PERIOD}</dd>
                  </div>
                </dl>

                <div className="flex items-center justify-between border-t border-gray-300 px-5 py-3">
                  <span className="font-mono text-[11px] text-[#666666]">
                    {String(modalSlide + 1).padStart(2, "0")} / {String(modalPillar.images.length).padStart(2, "0")}
                  </span>
                  <div className="flex gap-1.5">
                    {modalPillar.images.map((img, i) => (
                      <button
                        key={img.src}
                        aria-label={`Go to photograph ${i + 1}`}
                        aria-current={i === modalSlide}
                        onClick={() => setModalSlide(i)}
                        className={`h-1.5 transition-all duration-200 ${i === modalSlide ? "w-7 bg-[#f36f35]" : "w-4 bg-gray-300 hover:bg-gray-500"}`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </main>
  );
}