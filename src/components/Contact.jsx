import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Mail,
  ArrowRight,
  CheckCircle,
} from 'lucide-react';
import PageHero from './PageHero.jsx';
import contactHeroBg from '../assets/images/steel-trading.png';

export default function Contact() {
  const [formState, setFormState] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('submitting');

    setTimeout(() => {
      setFormState('success');
    }, 1200);
  };

  return (
    <main className="overflow-hidden bg-white">
      {/* Hero Section - Compact Banner Matching Reference Mockup */}
      <PageHero
        title="Contact Us"
        subtitle="ANM ISPAT"
        exploreText="Explore Contact Us"
        exploreLink="/"
        bgImage={contactHeroBg}
        imageAlt="Contact Us Banner"
      />

      <section
        id="contact"
        className="relative overflow-hidden bg-white pt-14 pb-24 md:pt-16 md:pb-28"
      >
      {/* =====================================================
          ANIMATIONS
      ===================================================== */}

      <style>{`
        @keyframes contactFadeUp {
          from {
            opacity: 0;
            transform: translateY(28px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes contactLineGrow {
          from {
            opacity: 0;
            transform: scaleX(0);
            transform-origin: left;
          }
          to {
            opacity: 1;
            transform: scaleX(1);
            transform-origin: left;
          }
        }

        .contact-fade-up {
          animation: contactFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }

        .contact-delay-100 {
          animation-delay: 100ms;
        }

        .contact-delay-200 {
          animation-delay: 200ms;
        }

        .contact-line {
          animation: contactLineGrow 0.7s ease forwards;
        }
        .contact-button {
          position: relative;
          overflow: hidden;
          height: 3rem;
          padding: 0 0.5rem 0 1.5rem;
          border: none;
          border-radius: 1.5rem;
          background: #ff9a6b;
          color: #fff;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 1rem;
          box-shadow: 0 10px 25px rgba(243, 111, 53, 0.18);
          transition:
            transform 0.3s ease,
            box-shadow 0.3s ease;
        }

        .contact-button::before {
          content: "";
          position: absolute;
          inset: 0;
          transform: scaleX(0);
          transform-origin: left;
          border-radius: inherit;
          background: #f36f35;
          transition: transform 0.475s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .contact-button:hover::before {
          transform: scaleX(1);
        }

        .contact-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 16px 35px rgba(243, 111, 53, 0.28);
        }

        .contact-button:active {
          transform: translateY(0);
        }

        .contact-button:disabled {
          cursor: not-allowed;
          opacity: 0.6;
          transform: none;
        }

        .contact-button-content {
          position: relative;
          z-index: 1;
          display: inline-flex;
          align-items: center;
          gap: 0.85rem;
        }

        .contact-button-arrow {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 2.25rem;
          height: 2.25rem;
          border-radius: 999px;
          background: rgba(255, 255, 255, 0.18);
          color: #fff;
          transition:
            background 0.3s ease,
            transform 0.3s ease;
        }

        .contact-button:hover .contact-button-arrow {
          background: rgba(255, 255, 255, 0.26);
          transform: translateX(3px);
        }          
      `}</style>

      {/* =====================================================
          BACKGROUND ATMOSPHERE
      ===================================================== */}

      {/* Soft top-right gray glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-40
          -top-40
          h-[560px]
          w-[560px]
          rounded-full
          bg-[#f4f5f7]
          opacity-80
          blur-[110px]
        "
      />

      {/* Soft center-right glow behind form */}
      <div
        className="
          pointer-events-none
          absolute
          right-[8%]
          top-[28%]
          h-[380px]
          w-[380px]
          rounded-full
          bg-[#f4f5f7]
          opacity-60
          blur-[120px]
        "
      />

      {/* Very subtle orange glow */}
      <div
        className="
          pointer-events-none
          absolute
          -bottom-48
          left-[28%]
          h-[420px]
          w-[420px]
          rounded-full
          bg-[#f36f35]
          opacity-[0.045]
          blur-[130px]
        "
      />

      {/* =====================================================
          FADED GEOMETRIC BACKGROUND
          Similar to the reference design
      ===================================================== */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-90px]
          left-[-80px]
          h-[250px]
          w-[700px]
          rotate-[-18deg]
          bg-[#f4f5f7]/70
          blur-[1px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-145px]
          left-[40px]
          h-[210px]
          w-[620px]
          rotate-[-18deg]
          bg-[#f36f35]/[0.035]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          bottom-[-205px]
          left-[190px]
          h-[220px]
          w-[580px]
          rotate-[-18deg]
          bg-[#f4f5f7]/80
        "
      />

      {/* Small top-left accent shape */}
      <div
        className="
          pointer-events-none
          absolute
          left-[-70px]
          top-[18%]
          h-[180px]
          w-[180px]
          rounded-full
          border
          border-[#f4f5f7]
          opacity-70
        "
      />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 md:px-10 lg:px-12">

        {/* =====================================================
            MAIN GRID
        ===================================================== */}

        <div className="grid grid-cols-1 items-start gap-14 lg:grid-cols-12 lg:gap-16 xl:gap-24">

          {/* =====================================================
              LEFT COLUMN
          ===================================================== */}

          <div className="opacity-0 contact-fade-up lg:col-span-5">

            {/* Section Label */}
            <div className="mb-6 flex items-center gap-4">
              <span
                className="
                  block
                  h-[2px]
                  w-[42px]
                  rounded-full
                  bg-[#f36f35]
                "
              />

              <p className="font-badge text-[11px] font-bold uppercase tracking-[0.18em] text-[#f36f35]">
                Get in touch
              </p>
            </div>

            {/* Heading */}
            <h2
              className="
                max-w-[650px]
                text-[44px]
                font-extrabold
                leading-[1.02]
                tracking-[-0.045em]
                text-[#1f1f1f]
                sm:text-[52px]
                md:text-[58px]
                lg:text-[60px]
                xl:text-[68px]
              "
            >
              Let's build something
              <br />
              <span className="text-[#f36f35]">
                great together.
              </span>
            </h2>

            {/* Description */}
            <p
              className="
                mt-7
                max-w-[540px]
                text-[15px]
                leading-7
                text-[#4c4c4c]
                sm:text-[16px]
                md:mt-8
                md:text-[17px]
              "
            >
              Whether you have a question about our steel products,
              need a custom industrial solution, or want to explore a
              partnership, our team is ready to assist you.
            </p>

            {/* =====================================================
                CONTACT DETAILS
            ===================================================== */}

            <div className="mt-10 md:mt-12">

              {/* Headquarters */}
              <div className="group relative flex items-start gap-5">

                <div
                  className="
                    relative z-10
                    flex h-14 w-14 shrink-0
                    items-center justify-center
                    rounded-[18px]
                    border border-[#f36f35]/10
                    bg-[#f36f35]/[0.07]
                    shadow-sm
                    transition-all duration-300
                    group-hover:border-[#f36f35]/20
                    group-hover:bg-[#f36f35]/10
                    group-hover:shadow-md
                  "
                >
                  <MapPin
                    size={21}
                    strokeWidth={1.8}
                    className="
                      text-[#f36f35]
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  />
                </div>

                <div className="pt-0.5">
                  <h4 className="font-badge text-[11px] font-bold uppercase tracking-[0.12em] text-[#1f1f1f]">
                    Headquarters
                  </h4>

                  <p className="mt-1.5 text-[15px] leading-6 text-[#4c4c4c]">
                    Corporate Office, Ispat Tower
                    <br />
                    Main Road, India
                  </p>
                </div>

                {/* Vertical connector */}
                <span
                  className="
                    absolute
                    left-[27px]
                    top-[58px]
                    h-[38px]
                    w-px
                    bg-gradient-to-b
                    from-[#f36f35]/20
                    to-transparent
                  "
                />
              </div>

              {/* Phone */}
              <div className="group relative mt-8 flex items-start gap-5">

                <div
                  className="
                    relative z-10
                    flex h-14 w-14 shrink-0
                    items-center justify-center
                    rounded-[18px]
                    border border-[#f36f35]/10
                    bg-[#f36f35]/[0.07]
                    shadow-sm
                    transition-all duration-300
                    group-hover:border-[#f36f35]/20
                    group-hover:bg-[#f36f35]/10
                    group-hover:shadow-md
                  "
                >
                  <Phone
                    size={20}
                    strokeWidth={1.8}
                    className="
                      text-[#f36f35]
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  />
                </div>

                <div className="pt-0.5">
                  <h4 className="font-badge text-[11px] font-bold uppercase tracking-[0.12em] text-[#1f1f1f]">
                    Phone
                  </h4>

                  <p className="mt-1.5 text-[15px] leading-6 text-[#4c4c4c]">
                    (123) 456-7890
                    <br />
                    <span className="text-[12px] font-medium text-[#6b7280]">
                      Mon-Fri, 9am - 6pm
                    </span>
                  </p>
                </div>

                {/* Vertical connector */}
                <span
                  className="
                    absolute
                    left-[27px]
                    top-[58px]
                    h-[38px]
                    w-px
                    bg-gradient-to-b
                    from-[#f36f35]/20
                    to-transparent
                  "
                />
              </div>

              {/* Email */}
              <div className="group mt-8 flex items-start gap-5">

                <div
                  className="
                    flex h-14 w-14 shrink-0
                    items-center justify-center
                    rounded-[18px]
                    border border-[#f36f35]/10
                    bg-[#f36f35]/[0.07]
                    shadow-sm
                    transition-all duration-300
                    group-hover:border-[#f36f35]/20
                    group-hover:bg-[#f36f35]/10
                    group-hover:shadow-md
                  "
                >
                  <Mail
                    size={20}
                    strokeWidth={1.8}
                    className="
                      text-[#f36f35]
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  />
                </div>

                <div className="pt-0.5">
                  <h4 className="font-badge text-[11px] font-bold uppercase tracking-[0.12em] text-[#1f1f1f]">
                    Email
                  </h4>

                  <p className="mt-1.5 text-[15px] leading-6 text-[#4c4c4c]">
                    support@fixflow.com
                    <br />
                    <span className="text-[12px] font-medium text-[#6b7280]">
                      24/7 Support Available
                    </span>
                  </p>
                </div>

              </div>
            </div>
          </div>


          {/* =====================================================
              RIGHT COLUMN / FORM
          ===================================================== */}

          <div className="opacity-0 contact-fade-up contact-delay-200 lg:col-span-7">

            <div
              className="
                group
                relative
                overflow-hidden
                rounded-[30px]
                border
                border-[#d8dbe0]
                bg-gradient-to-br
                from-[#f4f5f7]
                via-[#f7f8f9]
                to-[#eef0f2]
                p-7
                shadow-[0_24px_70px_rgba(31,31,31,0.055)]
                transition-all
                duration-500
                hover:shadow-[0_28px_80px_rgba(31,31,31,0.075)]

                sm:p-9
                md:p-11
                lg:p-12
              "
            >

              {/* Card glow - top right */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -right-20
                  -top-24
                  h-[280px]
                  w-[280px]
                  rounded-full
                  bg-white
                  opacity-90
                  blur-3xl
                  transition-transform
                  duration-1000
                  group-hover:scale-110
                "
              />

              {/* Card orange glow - bottom right */}
              <div
                className="
                  pointer-events-none
                  absolute
                  -bottom-24
                  -right-16
                  h-[220px]
                  w-[220px]
                  rounded-full
                  bg-[#f36f35]
                  opacity-[0.055]
                  blur-3xl
                "
              />

              {/* Decorative orange line */}
              <div
                className="
                  pointer-events-none
                  absolute
                  right-0
                  top-0
                  h-[2px]
                  w-28
                  bg-gradient-to-l
                  from-[#f36f35]/50
                  to-transparent
                "
              />

              <div className="relative z-10">

                <h3
                  className="
                    text-[24px]
                    font-bold
                    tracking-[-0.025em]
                    text-[#1f1f1f]
                    md:text-[27px]
                  "
                >
                  Send us a message
                </h3>

                {/* =================================================
                    SUCCESS STATE
                ================================================= */}

                {formState === 'success' ? (
                  <div className="flex flex-col items-center justify-center py-20 text-center">

                    <div
                      className="
                        flex h-20 w-20
                        items-center justify-center
                        rounded-full
                        border border-[#f36f35]/20
                        bg-[#f36f35]/10
                        shadow-inner
                      "
                    >
                      <CheckCircle
                        className="h-10 w-10 text-[#f36f35]"
                        strokeWidth={1.8}
                      />
                    </div>

                    <h4 className="mt-6 text-2xl font-bold text-[#1f1f1f]">
                      Message Received
                    </h4>

                    <p className="mt-2 max-w-sm text-[15px] leading-6 text-[#4c4c4c]">
                      We've received your request and will get back to you shortly.
                    </p>

                    <button
                      onClick={() => setFormState('idle')}
                      className="
                        mt-7
                        flex
                        items-center
                        gap-2
                        text-sm
                        font-bold
                        text-[#f36f35]
                        transition-all
                        duration-300
                        hover:gap-3
                        hover:underline
                      "
                    >
                      <span>Send another message</span>
                      <ArrowRight size={15} />
                    </button>

                  </div>
                ) : (

                  /* =================================================
                      FORM
                  ================================================= */

                  <form
                    onSubmit={handleSubmit}
                    className="mt-8 space-y-6"
                  >

                    {/* Name + Email */}
                    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">

                      <div className="space-y-2">
                        <label
                          htmlFor="name"
                          className="
                            font-badge
                            text-[10px]
                            font-bold
                            uppercase
                            tracking-[0.12em]
                            text-[#1f1f1f]
                          "
                        >
                          Full Name
                        </label>

                        <input
                          type="text"
                          id="name"
                          required
                          placeholder="John Doe"
                          className="
                            w-full
                            rounded-xl
                            border
                            border-transparent
                            bg-white
                            px-5
                            py-4
                            text-[15px]
                            text-[#1f1f1f]
                            shadow-[0_2px_6px_rgba(31,31,31,0.04)]
                            outline-none
                            transition-all
                            duration-300
                            placeholder:text-[#9aa3b5]
                            hover:shadow-[0_4px_12px_rgba(31,31,31,0.06)]
                            focus:border-[#f36f35]
                            focus:shadow-[0_6px_20px_rgba(243,111,53,0.08)]
                          "
                        />
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="
                            font-badge
                            text-[10px]
                            font-bold
                            uppercase
                            tracking-[0.12em]
                            text-[#1f1f1f]
                          "
                        >
                          Email Address
                        </label>

                        <input
                          type="email"
                          id="email"
                          required
                          placeholder="john@company.com"
                          className="
                            w-full
                            rounded-xl
                            border
                            border-transparent
                            bg-white
                            px-5
                            py-4
                            text-[15px]
                            text-[#1f1f1f]
                            shadow-[0_2px_6px_rgba(31,31,31,0.04)]
                            outline-none
                            transition-all
                            duration-300
                            placeholder:text-[#9aa3b5]
                            hover:shadow-[0_4px_12px_rgba(31,31,31,0.06)]
                            focus:border-[#f36f35]
                            focus:shadow-[0_6px_20px_rgba(243,111,53,0.08)]
                          "
                        />
                      </div>

                    </div>

                    {/* Inquiry */}
                    <div className="space-y-2">
                      <label
                        htmlFor="subject"
                        className="
                          font-badge
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.12em]
                          text-[#1f1f1f]
                        "
                      >
                        Inquiry Type
                      </label>

                      <div className="relative">
                        <select
                          id="subject"
                          required
                          defaultValue=""
                          className="
                            w-full
                            appearance-none
                            rounded-xl
                            border
                            border-transparent
                            bg-white
                            px-5
                            py-4
                            pr-12
                            text-[15px]
                            text-[#1f1f1f]
                            shadow-[0_2px_6px_rgba(31,31,31,0.04)]
                            outline-none
                            transition-all
                            duration-300
                            hover:shadow-[0_4px_12px_rgba(31,31,31,0.06)]
                            focus:border-[#f36f35]
                            focus:shadow-[0_6px_20px_rgba(243,111,53,0.08)]
                            cursor-pointer
                          "
                        >
                          <option value="" disabled>
                            Select an option...
                          </option>

                          <option value="sales">
                            Sales &amp; Pricing
                          </option>

                          <option value="support">
                            Technical Support
                          </option>

                          <option value="partnership">
                            Partnership Opportunities
                          </option>

                          <option value="other">
                            Other
                          </option>
                        </select>

                        <svg
                          className="
                            pointer-events-none
                            absolute
                            right-5
                            top-1/2
                            h-4
                            w-4
                            -translate-y-1/2
                            fill-current
                            text-[#8993a5]
                          "
                          viewBox="0 0 20 20"
                          aria-hidden="true"
                        >
                          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                        </svg>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label
                        htmlFor="message"
                        className="
                          font-badge
                          text-[10px]
                          font-bold
                          uppercase
                          tracking-[0.12em]
                          text-[#1f1f1f]
                        "
                      >
                        Your Message
                      </label>

                      <textarea
                        id="message"
                        required
                        rows={5}
                        placeholder="Tell us about your project or inquiry..."
                        className="
                          w-full
                          resize-none
                          rounded-xl
                          border
                          border-transparent
                          bg-white
                          px-5
                          py-4
                          text-[15px]
                          text-[#1f1f1f]
                          shadow-[0_2px_6px_rgba(31,31,31,0.04)]
                          outline-none
                          transition-all
                          duration-300
                          placeholder:text-[#9aa3b5]
                          hover:shadow-[0_4px_12px_rgba(31,31,31,0.06)]
                          focus:border-[#f36f35]
                          focus:shadow-[0_6px_20px_rgba(243,111,53,0.08)]
                        "
                      />
                    </div>

                    {/* =================================================
                        NEW ORANGE CTA
                    ================================================= */}

                    <div className="pt-2">

                    <button
                      type="submit"
                      disabled={formState === 'submitting'}
                      className="contact-button"
                    >
                      <span className="contact-button-content">
                        <span>
                          {formState === 'submitting' ? 'Sending...' : 'Send Message'}
                        </span>

                        <span className="contact-button-arrow">
                          <ArrowRight
                            size={16}
                            strokeWidth={2.3}
                          />
                        </span>
                      </span>
                    </button>

                    </div>
                  </form>
                )}

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  </main>
  );
}