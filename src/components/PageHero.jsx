import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown } from 'lucide-react';

export default function PageHero({
  title = 'About Us',
  subtitle = 'ANM ISPAT',
  exploreText,
  exploreLink = '/',
  bgImage,
  imageAlt,
  className = '',
}) {
  const displayExplore = exploreText || `Explore ${title}`;

  return (
    <section
      className={`relative w-full h-[30vh] min-h-[230px] max-h-[320px] flex flex-col justify-end overflow-hidden bg-[#0a1120] ${className}`}
    >
      {/* Full-width Background Image */}
      <div className="absolute inset-0 z-0">
        {bgImage && (
          <img
            src={bgImage}
            alt={imageAlt || `${title} Banner`}
            className="w-full h-full object-cover object-center"
          />
        )}
        {/* Subtle Dark Gradient Overlay for legibility while preserving right-side factory atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/35 z-10" />
      </div>

      {/* Content Container - Bottom Left Aligned */}
      <div className="max-w-[1280px] w-full mx-auto px-6 sm:px-8 md:px-12 relative z-20 pb-7 sm:pb-9">
        {/* Dash + Subtitle */}
        <div className="flex items-center gap-2.5 sm:gap-3 mb-2 sm:mb-2.5">
          <span className="w-7 sm:w-8 h-[2.5px] bg-[#f36f35] rounded-full inline-block" />
          <span className="text-xs sm:text-sm font-semibold tracking-[0.2em] text-white/95 uppercase font-badge">
            {subtitle}
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-none mb-3 sm:mb-3.5 drop-shadow-md">
          {title}
        </h1>

        {/* Explore Button / Link leading to home page */}
        <div>
          <Link
            to={exploreLink}
            className="group inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold text-[#f36f35] hover:text-white transition-colors duration-200 border-b border-[#f36f35]/50 hover:border-white pb-0.5"
          >
            <span>{displayExplore}</span>
            <ArrowDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

