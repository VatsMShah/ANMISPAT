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
    <>
    <section id="misvis" className="relative w-full bg-white overflow-hidden h-[640px]">
      {/* Layer 1: Background columns split (Lowest: Left White, Right Orange) */}
      <div className="absolute inset-0 z-0 grid grid-cols-1 md:grid-cols-2 h-full pointer-events-none">
        <div className="bg-white w-full h-full" />
        <div className="bg-gradient-to-b from-[#f36f35] via-[#f36f35] to-[#f36f35] w-full h-full" />
      </div>

      {/* Layer 2: Factory Image (Above both columns, spanning end-to-end in full width) */}
      <img
        src={missionVisionImg}
        alt="ANM Ispat Manufacturing Plant"
        className="absolute bottom-0 left-0 w-full h-[360px] sm:h-[400px] lg:h-[430px] object-cover object-bottom pointer-events-none z-10 block"
      />

      {/* Layer 3: Text content (Above image and columns, never obscured or camouflaged) */}
      <div className="relative z-20 grid grid-cols-1 md:grid-cols-2 h-[640px]">
        {/* Left Column: Headline and Stats */}
        <div className="flex flex-col items-start justify-start px-8 sm:px-14 lg:px-20 pt-8 sm:pt-10">
          <h2 className="font-heading text-2xl sm:text-3xl lg:text-[2.1rem] font-extrabold text-[#3b52a4] leading-[1.18] tracking-tight text-left mb-6 drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]">
            Leading the Steel Industry
            <br />
            with Vision &amp; Excellence
          </h2>
          <div className="grid w-full max-w-xl grid-cols-2 gap-x-6 gap-y-5 sm:gap-x-10 sm:gap-y-6">
            {stats.map(({ target, suffix, label }) => (
              <div key={label} className="min-w-0">
                <p className="font-heading text-2xl sm:text-3xl font-black text-brand-accent leading-none tabular-nums drop-shadow-[0_1px_2px_rgba(255,255,255,0.95)]">
                  <CountUp target={target} />
                  <span className="text-[#3b52a4]">{suffix}</span>
                </p>
                <p className="mt-1.5 max-w-[12rem] text-xs font-bold text-gray-800 tracking-wider uppercase leading-tight font-badge drop-shadow-[0_1px_1px_rgba(255,255,255,0.95)]">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Mission & Vision */}
        <div className="flex flex-col justify-start gap-6 sm:gap-7 px-8 sm:px-14 lg:px-20 pt-8 sm:pt-10">
          <div>
            <span className="inline-block px-3 py-1 rounded bg-white/20 backdrop-blur-sm text-white text-xs font-bold tracking-widest uppercase font-badge mb-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
              Our Mission
            </span>
            <p className="text-base sm:text-lg text-white font-semibold leading-relaxed max-w-md drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
              Delivering reliable steel products and processing solutions
              that power industry across India.
            </p>
          </div>
          <div>
            <span className="inline-block px-3 py-1 rounded bg-white/20 backdrop-blur-sm text-white text-xs font-bold tracking-widest uppercase font-badge mb-2 drop-shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
              Our Vision
            </span>
            <p className="text-base sm:text-lg text-white font-semibold leading-relaxed max-w-md drop-shadow-[0_2px_6px_rgba(0,0,0,0.7)]">
              To lead the industry with innovation, integrity, and
              unmatched excellence in steel.
            </p>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}