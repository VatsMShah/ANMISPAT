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
    <style>{`
      @keyframes anm-section-fade {
        from { opacity: 0; }
        to { opacity: 1; }
      }
      .anm-section-fade {
        animation: anm-section-fade 1.5s ease-out both;
      }
      @keyframes anm-text-fade {
        from { opacity: 0; transform: translateY(20px); }
        to { opacity: 1; transform: translateY(0); }
      }
      .anm-text-fade {
        animation: anm-text-fade 1.2s ease-out both;
      }
    `}</style>
    <section className="relative w-full bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 h-[640px]">
        <div className="flex flex-col items-start justify-start px-8 sm:px-14 lg:px-20 pt-10 bg-white">
          <h2 className="anm-text-fade text-xl md:text-2xl font-extrabold text-[#3b52a4] leading-snug tracking-tight text-left mb-8">
            Leading the Steel Industry
            <br />
            with Vision &amp; Excellence
          </h2>
          <div className="anm-text-fade grid w-full max-w-xl grid-cols-2 gap-x-6 gap-y-7 sm:gap-x-10 sm:gap-y-8" style={{ animationDelay: '0.3s' }}>
            {stats.map(({ target, suffix, label }) => (
              <div key={label} className="min-w-0">
                <p className="text-lg sm:text-xl md:text-2xl font-black text-brand-accent leading-none tabular-nums">
                  <CountUp target={target} />
                  <span className="text-[#3b52a4]">{suffix}</span>
                </p>
                <p className="mt-1.5 max-w-[11rem] text-[10px] sm:text-[11px] font-bold text-gray-500 tracking-wide uppercase leading-tight">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-start gap-6 px-8 sm:px-14 lg:px-20 pt-10 bg-gradient-to-b from-[#FF7414] via-[#F56718] to-[#D94B18]">
          <div className="anm-text-fade" style={{ animationDelay: '0.2s' }}>
            <p className="font-badge text-xs font-bold tracking-widest uppercase text-white/80 mb-1.5">
              Our Mission
            </p>
            <p className="text-sm md:text-base text-white/95 leading-relaxed max-w-md">
              Delivering reliable steel products and processing solutions
              that power industry across India.
            </p>
          </div>
          <div className="anm-text-fade" style={{ animationDelay: '0.4s' }}>
            <p className="font-badge text-xs font-bold tracking-widest uppercase text-white/80 mb-1.5">
              Our Vision
            </p>
            <p className="text-sm md:text-base text-white/95 leading-relaxed max-w-md">
              To lead the industry with innovation, integrity, and
              unmatched excellence in steel.
            </p>
          </div>
        </div>
      </div>

      <img
        src={missionVisionImg}
        alt="Mission & Vision"
        className="anm-section-fade absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1320px] h-auto object-contain pointer-events-none"
      />
    </section>
    </>
  );
}