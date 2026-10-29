import React, { useState } from 'react';
import productsCta from '../assets/images/products-cta.jpg';

export default function QuoteSection() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) return;

    // Simulate successful submission
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', service: '' });
    }, 4000);
  };

  return (
    <section className="relative isolate overflow-hidden py-16 sm:py-20 lg:py-24 text-white">
      {/* Background Image with Lighter Dark Tone Overlay (70% light dark tone, 30% normal image) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 -z-10">
        <img
          src={productsCta}
          alt="Steel warehouse and coils"
          loading="lazy"
          className="h-full w-full object-cover object-[center_40%]"
        />
        {/* 70% lighter dark tone on left for clean legibility, transitioning to 30% normal unshaded image on right */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(8, 12, 22, 0.52) 0%, rgba(8, 12, 22, 0.40) 55%, rgba(8, 12, 22, 0.20) 72%, rgba(8, 12, 22, 0.05) 85%, transparent 100%)',
          }}
        />
      </div>

      {/* Content Container - Expanded to full wide desktop width */}
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="w-full max-w-[1180px]">

          {/* Heading */}
          <h2 className="text-[28px] sm:text-[34px] md:text-[38px] font-extrabold tracking-tight text-white leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.6)]">
            Request Your <span className="text-[#f95d1a]">Custom Quote</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-1.5 text-[14px] sm:text-[16px] font-medium text-white drop-shadow-[0_1px_6px_rgba(0,0,0,0.6)]">
            Backed by <span className="text-[#f95d1a] font-bold">Abhay Ispat</span> , built on reliability.
          </p>

          {/* Solid Orange Quote Form Box - Broadened width */}
          <div className="mt-6 sm:mt-7 w-full bg-[#f95d1a] px-6 py-6 sm:px-8 sm:py-7 lg:px-10 lg:py-8 shadow-[0_20px_50px_rgba(0,0,0,0.35)] rounded-[2px]">

            {/* Inner Title */}
            <h3 className="text-xl sm:text-[23px] font-extrabold text-white tracking-tight">
              Get your free quote today
            </h3>

            {/* Subtle Divider Line */}
            <div className="my-4 h-px w-full bg-white/30" />

            {/* Submission Notification */}
            {submitted ? (
              <div className="py-4 text-center font-bold text-white text-sm sm:text-base bg-black/25 rounded px-4">
                ✓ Thank you! Your quote request has been submitted. Our team will contact you shortly.
              </div>
            ) : (
              /* Quote Form - Spacious 4-column layout */
              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[1.1fr_1fr_1.35fr_auto] gap-3.5 sm:gap-4 items-end"
              >
                {/* Full Name */}
                <div className="flex flex-col">
                  <label className="mb-1.5 text-[11px] sm:text-xs font-semibold text-white tracking-wide">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="h-[44px] w-full rounded-[2px] bg-white px-3.5 text-xs sm:text-[13.5px] text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-black/40 transition-all shadow-sm"
                  />
                </div>

                {/* Phone */}
                <div className="flex flex-col">
                  <label className="mb-1.5 text-[11px] sm:text-xs font-semibold text-white tracking-wide">
                    Phone
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Your phone number"
                    required
                    className="h-[44px] w-full rounded-[2px] bg-white px-3.5 text-xs sm:text-[13.5px] text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-black/40 transition-all shadow-sm"
                  />
                </div>

                {/* Service Type */}
                <div className="flex flex-col">
                  <label className="mb-1.5 text-[11px] sm:text-xs font-semibold text-white tracking-wide">
                    Service Type:
                  </label>
                  <div className="relative">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="h-[44px] w-full appearance-none rounded-[2px] bg-white px-3.5 pr-8 text-xs sm:text-[13.5px] text-gray-700 outline-none focus:ring-2 focus:ring-black/40 transition-all shadow-sm cursor-pointer"
                    >
                      <option value="">-- Select your service --</option>
                      <option value="Hot Rolled (HR) Coil">Hot Rolled (HR) Coil</option>
                      <option value="HR Sheet/Plate">HR Sheet/Plate</option>
                      <option value="HRPO Coil">HRPO Coil</option>
                      <option value="HRSPO Coil">HRSPO Coil</option>
                      <option value="Cold Rolled Coil">Cold Rolled Coil</option>
                      <option value="Galvanized Plain(GP)">Galvanized Plain(GP)</option>
                    </select>

                    {/* Custom Dropdown Chevron */}
                    <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-600">
                      <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="flex flex-col">
                  <button
                    type="submit"
                    className="h-[44px] rounded-[2px] bg-[#111827] px-6 sm:px-8 text-xs sm:text-[13.5px] font-bold text-white transition-all duration-200 hover:bg-black active:scale-[0.98] shadow-sm whitespace-nowrap cursor-pointer"
                  >
                    Get Your Free Quote
                  </button>
                </div>
              </form>
            )}

          </div>

        </div>
      </div>
    </section>
  );
}

