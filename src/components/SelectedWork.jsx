//SelectedWork.jsx
import React from 'react';
import productVideo from '../assets/images/product-section.mp4';

const projects = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
];

export default function SelectedWork() {
  return (
    <section id="our-range" className="bg-brand-footer pt-10 md:pt-14 pb-16 md:pb-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-14">
          <span className="block w-[42px] h-[3px] bg-brand-orange rounded-[20px] mx-auto mb-5" />
          <p className="font-badge text-xs font-bold tracking-widest uppercase text-brand-orange mb-3">
            Built For Every Requirement
          </p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-brand-dark tracking-tight max-w-3xl mx-auto">
            Our <span className="text-brand-orange">Products</span>
          </h2>
          <p className="max-w-[650px] mx-auto mt-5 text-[15px] leading-relaxed text-brand-body">
            From structural steel to industrial requirements, our portfolio is
            designed around the needs of modern businesses.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((item) => (
            <div
              key={item.id}
              className="bg-[#f36f35] rounded-[25px] h-[320px] relative overflow-hidden transition-all duration-500 ease-out hover:-translate-y-1.5 shadow-[0_4px_20px_rgba(0,0,0,0.025)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.07)]"
            >
              <video
                src={productVideo}
                muted
                loop
                playsInline
                autoPlay
                preload="metadata"
                className="absolute inset-0 h-full w-full object-cover scale-[0.97]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}