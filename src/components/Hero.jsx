import React from 'react';
import { ArrowRight } from 'lucide-react';
import heroVideo from '../assets/images/hero-video.mp4';

export default function Hero() {
  return (
    <section className="relative w-full h-[calc(100dvh-105px)] min-h-[580px] overflow-hidden bg-brand-dark">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover object-center z-0"
      >
        <source src={heroVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Dark Overlay for Text Legibility */}
      <div className="absolute inset-0 bg-black/60 z-10" />

      {/* Foreground Hero Content Container */}
      <div className="relative z-20 max-w-[1400px] h-full mx-auto pl-6 pr-6 flex flex-col justify-between pt-10 pb-6">
        
        {/* Main Text Block */}
        <div className="max-w-3xl mt-4 sm:mt-8">
          {/* Badge */}
          <p className="text-xs font-bold tracking-widest uppercase font-badge mb-4">
            <span className="text-white/80">AS A KEY ARM OF </span>
            <span className="text-[#ff5c2b]">ABHAY ISPAT</span>
          </p>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.12] tracking-tight mb-5">
            Delivering The <br />
            <span className="text-[#ff5c2b]">Backbone Of</span> <br />
            Modern Infrastructure
          </h1>

          {/* Subtitle */}
          <p className="text-gray-200 text-base md:text-lg mb-8 max-w-xl font-normal leading-relaxed">
            Delivering more than steel, ANM Ispat provides precision processing, 
            dependable supply, and trusted service to industries.
          </p>

          {/* CTA Group */}
          <div className="flex flex-wrap items-center gap-4">
            <a
              href="#quote"
              className="bg-gradient-to-r from-[#ff6b3d] via-[#ff5c2b] to-[#ff8a5f] text-white font-bold text-sm px-7 py-3.5 rounded shadow-lg hover:shadow-orange-500/25 hover:-translate-y-0.5 transition-all flex items-center gap-2"
            >
              <span>Get a Free Quote</span>
              <ArrowRight size={16} />
            </a>

            <a
              href="#contact"
              className="bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold text-sm px-7 py-3.5 rounded hover:bg-white/20 transition-all"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}