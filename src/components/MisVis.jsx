import React from 'react';
import missionVisionImg from '../assets/images/mission-vision.png';

function CountUp({ target, duration = 3500 }) {
  const [value, setValue] = React.useState(0);

  React.useEffect(() => {
    let raf;
    const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

    const run = () => {
      const start = performance.now();
      const tick = (now) => {
        const progress = Math.min((now - start) / duration, 1);
        setValue(Math.round(easeOutCubic(progress) * target));
        if (progress < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
    };

    run();
    const interval = setInterval(run, 15000);
    return () => {
      cancelAnimationFrame(raf);
      clearInterval(interval);
    };
  }, [target, duration]);

  return <>{value}</>;
}

export default function MisVis() {
  const stats = [
    { target: 1970, suffix: '', label: 'Established Since' },
    { target: 16, suffix: '', label: 'Total Sq Feet' },
    { target: 20, suffix: '+', label: 'Total Processing Capacity' },
    { target: 6000, suffix: '+', label: 'Product Portfolio' },
    { target: 5000, suffix: '+', label: 'Projects Completed' },
    { target: 400000, suffix: '+ m²', label: 'Random' },
  ];

  return (
    <section
      id="misvis"
      className="relative w-full bg-white overflow-hidden pb-64 sm:pb-80 md:pb-0"
      style={{
        minHeight: 'clamp(760px, calc(32.6vw + 350px), 1250px)',
      }}
    >
      {/* Layer 1: Background columns split (Left: White, Right: Brand Orange #f36f35) */}
      <div className="absolute inset-0 z-0 grid grid-cols-1 md:grid-cols-2 h-full pointer-events-none">
        <div className="bg-white w-full h-full" />
        <div className="bg-[#f36f35] w-full h-full hidden md:block" />
      </div>

      {/* Layer 2: Factory Image (Spanning full width, anchored to bottom, apex strictly below text) */}
      <img
        src={missionVisionImg}
        alt="ANM Ispat Manufacturing Plant"
        className="absolute bottom-0 left-0 w-full h-[280px] sm:h-[360px] md:h-full object-cover object-bottom pointer-events-none z-10 block"
      />

      {/* Layer 3: Text content (Strictly in the upper sky zone, no overlap) */}
      <div className="relative z-20 max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 h-full">
        
        {/* Left Column (White Sky): Headline & 6 Stats */}
        <div className="flex flex-col items-start justify-start px-6 sm:px-10 lg:px-14 xl:px-16 pt-8 sm:pt-10 lg:pt-12">
          {/* Section Headline */}
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-[2.2rem] font-black text-[#111827] leading-[1.18] tracking-tight text-left mb-6 drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]">
            Leading the Steel Industry
            <br />
            with <span className="text-[#3b52a4]">Vision &amp; Excellence</span>
          </h2>

          {/* 6 Stats: 2 Columns without lines */}
          <div className="grid w-full max-w-lg grid-cols-2 gap-x-6 sm:gap-x-10 gap-y-4 sm:gap-y-5">
            {stats.map(({ target, suffix, label }) => (
              <div key={label} className="min-w-0">
                <p className="font-heading text-2xl sm:text-3xl font-black text-[#f36f35] leading-none tabular-nums drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]">
                  <CountUp target={target} />
                  <span className="text-[#3b52a4]">{suffix}</span>
                </p>
                <p className="mt-1.5 text-xs font-bold text-gray-800 tracking-wider uppercase leading-tight font-badge drop-shadow-[0_1px_1px_rgba(255,255,255,0.95)]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column (Orange Sky): Mission & Vision stacked vertically */}
        <div className="flex flex-col justify-start px-6 sm:px-10 lg:px-14 xl:px-16 pt-8 sm:pt-10 lg:pt-12">
          <div className="flex flex-col gap-6 max-w-lg bg-[#f36f35] p-6 rounded-2xl md:bg-transparent md:p-0 md:rounded-none shadow-lg md:shadow-none">
            {/* Our Mission */}
            <div>
              <span className="inline-block px-3 py-1 rounded bg-white/20 backdrop-blur-sm text-white text-xs font-bold tracking-widest uppercase font-badge mb-2">
                Our Mission
              </span>
              <p className="text-base sm:text-lg text-white font-semibold leading-relaxed">
                Delivering reliable steel products and processing solutions that power industry across India.
              </p>
            </div>

            {/* Our Vision */}
            <div>
              <span className="inline-block px-3 py-1 rounded bg-white/20 backdrop-blur-sm text-white text-xs font-bold tracking-widest uppercase font-badge mb-2">
                Our Vision
              </span>
              <p className="text-base sm:text-lg text-white font-semibold leading-relaxed">
                To lead the industry with innovation, integrity, and unmatched excellence in steel.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}