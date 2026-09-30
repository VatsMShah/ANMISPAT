import React from 'react';
import Hero from './Hero';
import AboutOverview from './AboutOverview';
import ClientMarquee from './ClientMarquee';
import MisVis from './MisVis';
import WhyChooseUs from './WhyChooseUs';
import SelectedWork from './SelectedWork';
import Services from './Services';
import Certifications from './Certifications';

export default function Home() {
  return (
    <main className="relative bg-white w-full overflow-hidden">
      {/* Inline animations for smooth page load transitions */}
      <style>{`
        @keyframes homeFadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-home-fade {
          animation: homeFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-delay-1 { animation-delay: 100ms; }
        .animate-delay-2 { animation-delay: 200ms; }
        .animate-delay-3 { animation-delay: 300ms; }
      `}</style>

      {/* Hero Section */}
      <div className="opacity-0 animate-home-fade">
        <Hero />
      </div>

      {/* About Overview */}
      <div className="opacity-0 animate-home-fade animate-delay-1">
        <AboutOverview />
      </div>

      {/* Client Marquee */}
      <div className="opacity-0 animate-home-fade animate-delay-2">
        <ClientMarquee />
      </div>

      {/* Mission & Vision */}
      <div className="opacity-0 animate-home-fade animate-delay-3">
        <MisVis />
      </div>

      {/* Why Choose Us */}
      <section className="transition-all duration-500">
        <WhyChooseUs />
      </section>

      {/* Selected Work */}
      <section className="transition-all duration-500">
        <SelectedWork />
      </section>

      {/* Services */}
      <section className="transition-all duration-500">
        <Services />
      </section>

      {/* Certifications */}
      <section className="transition-all duration-500">
        <Certifications />
      </section>
    </main>
  );
}