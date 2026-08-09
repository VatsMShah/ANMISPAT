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
          <h2 className="anm-text-fade text-2xl md:text-3xl font-extrabold text-[#3b52a4] leading-snug tracking-tight text-left mb-8">
            Leading the Steel Industry
            <br />
            with Vision &amp; Excellence
          </h2>
          <div className="anm-text-fade flex items-center gap-8 sm:gap-12" style={{ animationDelay: '0.3s' }}>
            <div>
              <p className="text-3xl md:text-4xl font-black text-[#3b52a4] leading-none tabular-nums">
                <CountUp target={75} />
                <span className="text-brand-accent">+</span>
              </p>
              <p className="text-[11px] sm:text-xs font-medium text-gray-500 tracking-wide uppercase mt-1.5">
                Years of Legacy
              </p>
            </div>
            <div className="w-px h-10 bg-brand-border" />
            <div>
              <p className="text-3xl md:text-4xl font-black text-[#3b52a4] leading-none tabular-nums">
                <CountUp target={5000} />
                <span className="text-brand-accent">+</span>
              </p>
              <p className="text-[11px] sm:text-xs font-medium text-gray-500 tracking-wide uppercase mt-1.5">
                Industries Served
              </p>
            </div>
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
        className="anm-section-fade absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-auto object-contain pointer-events-none"
      />
    </section>
    </>
  );
}