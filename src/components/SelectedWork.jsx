//SelectedWork.jsx
import React from 'react';
import { Layers, Zap, Triangle, Moon } from 'lucide-react';

const projects = [
  {
    id: 1,
    bgColor: 'bg-brand-orange',
    textColor: 'text-white',
    subTextColor: 'text-white/80',
    logo: (
      <div className="flex items-center gap-2 font-bold text-lg">
        <span className="flex gap-0.5">
          <span className="w-2 h-2 rounded-full bg-white"></span>
          <span className="w-2 h-2 rounded-full bg-white"></span>
        </span>
        svaa
      </div>
    ),
    title: 'Svaa Banking App',
    category: 'UI/UX Design',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=800&auto=format&fit=crop',
    imageAlt: 'Svaa Banking Mobile Interface',
    imgClassName: 'w-[55%] rounded-[20px] shadow-2xl rotate-[-12deg] translate-x-4 translate-y-6',
  },
  {
    id: 2,
    bgColor: 'bg-brand-dark',
    textColor: 'text-white',
    subTextColor: 'text-gray-400',
    logo: (
      <div className="flex items-center gap-2 font-bold text-lg">
        <Zap className="w-5 h-5 fill-current" />
        Nexora
      </div>
    ),
    title: 'Nexora Website',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800&auto=format&fit=crop',
    imageAlt: 'Nexora Laptop Mockup',
    imgClassName: 'w-[75%] object-cover object-left rounded-l-lg shadow-2xl translate-x-2 translate-y-4',
  },
  {
    id: 3,
    bgColor: 'bg-white border border-black/5',
    textColor: 'text-brand-dark',
    subTextColor: 'text-brand-body',
    logo: <div className="font-bold text-xl tracking-tight">Bloom</div>,
    title: 'Bloom Brand Identity',
    category: 'Branding',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?q=80&w=800&auto=format&fit=crop',
    imageAlt: 'Bloom Product Container',
    imgClassName: 'w-[50%] h-[85%] object-cover rounded-xl shadow-lg translate-y-4',
  },
  {
    id: 4,
    bgColor: 'bg-brand-accent',
    textColor: 'text-white',
    subTextColor: 'text-white/80',
    logo: <div className="font-bold text-xl">Echo</div>,
    title: 'Echo Headphones',
    category: 'Product Design',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?q=80&w=800&auto=format&fit=crop',
    imageAlt: 'Echo Wireless Headphones',
    imgClassName: 'w-[65%] object-contain drop-shadow-2xl translate-x-2 translate-y-2',
  },
  {
    id: 5,
    bgColor: 'bg-brand-dark',
    textColor: 'text-white',
    subTextColor: 'text-gray-400',
    logo: (
      <div className="flex items-center gap-2 font-bold text-lg">
        <Triangle className="w-4 h-4 fill-current rotate-180" />
        Altitude
      </div>
    ),
    title: 'Altitude Campaign',
    category: 'Digital Campaign',
    image: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop',
    imageAlt: 'Mountain Peak',
    imgClassName: 'w-[65%] h-[90%] object-cover rounded-t-2xl shadow-xl translate-y-4',
  },
  {
    id: 6,
    bgColor: 'bg-white border border-black/5',
    textColor: 'text-brand-dark',
    subTextColor: 'text-brand-body',
    logo: <div className="font-bold text-xl tracking-wide">Lune Studio</div>,
    title: 'Lune Studio Website',
    category: 'Web Design',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop',
    imageAlt: 'Architectural Sliding Door',
    imgClassName: 'w-[55%] h-[85%] object-cover rounded-tl-2xl shadow-md translate-y-4',
  },
];

export default function SelectedWork() {
  return (
    <section className="bg-brand-footer pt-10 md:pt-14 pb-16 md:pb-20 px-4 md:px-8">
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
              className={`${item.bgColor} ${item.textColor} rounded-[25px] p-6 h-[320px] relative overflow-hidden flex flex-col justify-between transition-all duration-500 ease-out hover:-translate-y-1.5 shadow-[0_4px_20px_rgba(0,0,0,0.025)] hover:shadow-[0_20px_45px_rgba(0,0,0,0.07)]`}
            >
              {/* Top Content (Logo, Title, Category) */}
              <div className="z-10 max-w-[55%]">
                <div className="mb-6">{item.logo}</div>
                <h3 className="text-xl font-bold font-heading leading-snug mb-1">
                  {item.title}
                </h3>
                <p className={`text-sm ${item.subTextColor} font-medium`}>
                  {item.category}
                </p>
              </div>

              {/* Image Asset positioned bottom right */}
              <div className="absolute bottom-0 right-0 top-0 left-0 flex items-end justify-end p-2 pointer-events-none">
                <img
                  src={item.image}
                  alt={item.imageAlt}
                  className={item.imgClassName}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}