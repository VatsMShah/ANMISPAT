import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import heroVideo from '../assets/images/hero-video.mp4';
import tataAstrumLogo from '../assets/images/tata-astrum.png';
import galvanoLogo from '../assets/images/galvano.png';
import tataAstrumSuperLogo from '../assets/images/tata-astrum-super.png';
import tataSteeliumSuperLogo from '../assets/images/tata-steelium-super.png';
import tataSteeliumLogo from '../assets/images/tata-steelium.png';
import tataKoshLogo from '../assets/images/tata-kosh.png';
import tataWironLogo from '../assets/images/tata-wiron.png';

export default function Hero() {
  return (
    <section id="home" className="relative w-full h-[calc(100dvh-105px)] min-h-[620px] overflow-hidden bg-brand-dark flex flex-col justify-between">
      {/* SVG clipPath for rounded slanted client strip */}
      <svg width="0" height="0" aria-hidden="true" className="absolute">
        <defs>
          <clipPath id="clientStripRounded" clipPathUnits="objectBoundingBox">
            <path d="M 0.037 0 H 0.963 A 0.012 0.16 0 0 1 0.975 0.03 L 1 1 H 0 L 0.025 0.03 A 0.012 0.16 0 0 1 0.037 0 Z" />
          </clipPath>
        </defs>
      </svg>
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
      <div className="relative z-20 max-w-[1400px] w-full mx-auto px-6 sm:px-12 lg:px-16 my-auto pt-6 pb-6">
        <div className="max-w-3xl text-left flex flex-col items-start">
          {/* Badge */}
          <p className="text-xs sm:text-sm font-bold tracking-widest uppercase font-badge mb-4 text-left">
            <span className="text-white/90">A KEY ARM OF </span>
            <span className="text-[#ff3838] font-extrabold tracking-[0.16em] drop-shadow-[0_2px_8px_rgba(0,0,0,0.85)]">
              ABHAY ISPAT GROUP
            </span>
          </p>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.12] tracking-tight mb-5 text-left">
            Delivering The <br />
            <span className="text-[#f36f35]">Backbone Of</span> <br />
            Modern Infrastructure
          </h1>

          {/* Subtitle */}
          <p className="text-gray-200 text-base md:text-lg mb-8 max-w-xl font-normal leading-relaxed text-left">
            Delivering more than steel, ANM Ispat provides precision processing, 
            dependable supply, and trusted service to industries.
          </p>

          {/* CTA Group */}
          <div className="flex flex-wrap items-center justify-start gap-4">
            <a
              href="#quote"
              className="bg-gradient-to-r from-[#f36f35] via-[#f36f35] to-[#f36f35] text-white font-bold text-sm px-7 py-3.5 rounded shadow-lg hover:shadow-[#f36f35]/25 hover:-translate-y-0.5 transition-all flex items-center gap-2"
            >
              <span>Get a Free Quote</span>
              <ArrowRight size={16} />
            </a>

            <Link
              to="/contact"
              className="bg-white/10 backdrop-blur-sm border border-white/30 text-white font-semibold text-sm px-7 py-3.5 rounded hover:bg-white/20 transition-all"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </div>

      {/* Pinned White Custom Slanted Client Logo Card */}
      <div className="relative z-20 w-full max-w-[1400px] mx-auto px-2 sm:px-6">
        <div className="bg-white custom-client-strip shadow-2xl px-8 sm:px-14 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm font-bold font-badge tracking-wider">
            {/* Tata Astrum */}
            <div className="flex flex-col items-center transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-110 cursor-pointer group">
              <div className="h-10 sm:h-12 w-auto transition-all duration-300 group-hover:drop-shadow-lg">
                <img src={tataAstrumLogo} alt="TATA ASTRUM" className="h-full w-auto object-contain" />
              </div>
            </div>
            
            {/* Galvano */}
            <div className="flex flex-col items-center transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-110 cursor-pointer group">
              <div className="h-10 sm:h-12 w-auto transition-all duration-300 group-hover:drop-shadow-lg">
                <img src={galvanoLogo} alt="Galvano" className="h-full w-auto object-contain" />
              </div>
            </div>

            {/* Tata Astrum Super */}
            <div className="flex flex-col items-center transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-110 cursor-pointer group">
              <div className="h-10 sm:h-12 w-auto transition-all duration-300 group-hover:drop-shadow-lg">
                <img src={tataAstrumSuperLogo} alt="TATA ASTRUM SUPER" className="h-full w-auto object-contain" />
              </div>
            </div>

            {/* Tata Steelium Super */}
            <div className="flex flex-col items-center transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-110 cursor-pointer group">
              <div className="h-10 sm:h-12 w-auto transition-all duration-300 group-hover:drop-shadow-lg">
                <img src={tataSteeliumSuperLogo} alt="STEELIUM SUPER" className="h-full w-auto object-contain" />
              </div>
            </div>

            {/* Tata Steelium */}
            <div className="flex flex-col items-center transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-110 cursor-pointer group">
              <div className="h-10 sm:h-12 w-auto transition-all duration-300 group-hover:drop-shadow-lg">
                <img src={tataSteeliumLogo} alt="TATA STEELIUM" className="h-full w-auto object-contain" />
              </div>
            </div>

            {/* Tata Kosh */}
            <div className="flex flex-col items-center transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-110 cursor-pointer group">
              <div className="h-10 sm:h-12 w-auto transition-all duration-300 group-hover:drop-shadow-lg">
                <img src={tataKoshLogo} alt="TATA KOSH" className="h-full w-auto object-contain" />
              </div>
            </div>

            {/* Tata Wiron */}
            <div className="flex flex-col items-center transition-all duration-300 ease-out hover:-translate-y-2 hover:scale-110 cursor-pointer group">
              <div className="h-10 sm:h-12 w-auto transition-all duration-300 group-hover:drop-shadow-lg">
                <img src={tataWironLogo} alt="TATA WIRON" className="h-full w-auto object-contain" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}