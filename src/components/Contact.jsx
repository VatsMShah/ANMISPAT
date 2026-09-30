import React, { useState } from 'react';
import { MapPin, Phone, Mail, ArrowRight, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [formState, setFormState] = useState('idle'); // idle, submitting, success

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('submitting');
    setTimeout(() => {
      setFormState('success');
    }, 1200);
  };

  return (
    <section id="contact" className="relative bg-white pt-20 pb-28 border-t border-[#d8dbe0] overflow-hidden">
      {/* Inline styles for custom entrance animations */}
      <style>{`
        @keyframes contactFadeUp {
          from {
            opacity: 0;
            transform: translateY(24px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-up {
          animation: contactFadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-delay-100 { animation-delay: 100ms; }
        .animate-delay-200 { animation-delay: 200ms; }
        .animate-delay-300 { animation-delay: 300ms; }
      `}</style>

      {/* Background Glow Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f4f5f7] rounded-full blur-[100px] opacity-60 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#f36f35] rounded-full blur-[120px] opacity-[0.07] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Top Header */}
        <div className="mb-14 md:mb-20 opacity-0 animate-fade-up">
          <span className="block w-[42px] h-[3px] bg-[#f36f35] rounded-[20px] mb-5" />
          <p className="font-badge text-xs font-bold tracking-widest uppercase text-[#f36f35] mb-3">
            Get in touch
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1f1f1f] tracking-tight max-w-3xl leading-[1.15]">
            Let's build something <br className="hidden md:block"/>
            <span className="text-[#f36f35]">great together.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          
          {/* Left Column: Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between opacity-0 animate-fade-up animate-delay-100">
            <div>
              <p className="text-[17px] leading-relaxed text-[#4c4c4c] mb-10 max-w-md">
                Whether you have a question about our steel products, need a custom industrial solution, or want to explore a partnership, our team is ready to assist you.
              </p>

              <div className="space-y-6">
                {/* Info Item 1 */}
                <div className="flex items-start gap-5 p-4 -ml-4 rounded-2xl transition-all duration-300 hover:bg-[#f4f5f7]/60 group cursor-default">
                  <div className="w-12 h-12 rounded-2xl bg-[#f4f5f7] border border-gray-100 flex items-center justify-center shrink-0 shadow-sm transition-all duration-300 group-hover:bg-[#f36f35] group-hover:border-[#f36f35] group-hover:shadow-md group-hover:scale-105">
                    <MapPin size={20} className="text-[#f36f35] transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#1f1f1f] mb-1 font-badge">Headquarters</h4>
                    <p className="text-[#4c4c4c] text-[15px] leading-relaxed">
                      Corporate Office, Ispat Tower<br/>
                      Main Road, India
                    </p>
                  </div>
                </div>

                {/* Info Item 2 */}
                <div className="flex items-start gap-5 p-4 -ml-4 rounded-2xl transition-all duration-300 hover:bg-[#f4f5f7]/60 group cursor-default">
                  <div className="w-12 h-12 rounded-2xl bg-[#f4f5f7] border border-gray-100 flex items-center justify-center shrink-0 shadow-sm transition-all duration-300 group-hover:bg-[#f36f35] group-hover:border-[#f36f35] group-hover:shadow-md group-hover:scale-105">
                    <Phone size={20} className="text-[#f36f35] transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#1f1f1f] mb-1 font-badge">Phone</h4>
                    <p className="text-[#4c4c4c] text-[15px] leading-relaxed">
                      (123) 456-7890<br/>
                      <span className="text-xs font-medium text-gray-500">Mon-Fri, 9am - 6pm</span>
                    </p>
                  </div>
                </div>

                {/* Info Item 3 */}
                <div className="flex items-start gap-5 p-4 -ml-4 rounded-2xl transition-all duration-300 hover:bg-[#f4f5f7]/60 group cursor-default">
                  <div className="w-12 h-12 rounded-2xl bg-[#f4f5f7] border border-gray-100 flex items-center justify-center shrink-0 shadow-sm transition-all duration-300 group-hover:bg-[#f36f35] group-hover:border-[#f36f35] group-hover:shadow-md group-hover:scale-105">
                    <Mail size={20} className="text-[#f36f35] transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-[#1f1f1f] mb-1 font-badge">Email</h4>
                    <p className="text-[#4c4c4c] text-[15px] leading-relaxed">
                      support@fixflow.com<br/>
                      <span className="text-xs font-medium text-gray-500">24/7 Support Available</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form Container */}
          <div className="lg:col-span-7 opacity-0 animate-fade-up animate-delay-200">
            <div className="bg-[#f4f5f7] rounded-[32px] p-8 md:p-12 relative overflow-hidden group border border-gray-200/50 shadow-xl shadow-black/[0.02]">
              
              {/* Soft decorative background spotlight */}
              <div className="absolute -top-24 -right-24 w-60 h-60 bg-white/70 rounded-full blur-2xl pointer-events-none transition-transform duration-1000 group-hover:scale-125" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-[#f36f35]/5 rounded-full blur-xl pointer-events-none" />

              <h3 className="text-2xl font-bold text-[#1f1f1f] mb-8 relative z-10 tracking-tight">
                Send us a message
              </h3>

              {formState === 'success' ? (
                <div className="flex flex-col items-center justify-center py-16 text-center transition-all duration-500 relative z-10 animate-fade-up">
                  <div className="w-20 h-20 bg-[#f36f35]/10 border border-[#f36f35]/20 rounded-full flex items-center justify-center mb-5 shadow-inner">
                    <CheckCircle className="text-[#f36f35] w-10 h-10" />
                  </div>
                  <h4 className="text-2xl font-bold text-[#1f1f1f] mb-2">Message Received</h4>
                  <p className="text-[#4c4c4c] max-w-sm">We've received your request and will get back to you shortly.</p>
                  <button 
                    onClick={() => setFormState('idle')}
                    className="mt-8 text-[#f36f35] font-bold text-sm hover:underline focus:outline-none transition-all flex items-center gap-2"
                  >
                    <span>Send another message</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2 group/input">
                      <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-[#1f1f1f] transition-colors group-focus-within/input:text-[#f36f35] font-badge">
                        Full Name
                      </label>
                      <input 
                        type="text" 
                        id="name"
                        required
                        className="w-full bg-white border border-transparent focus:border-[#f36f35] rounded-xl px-5 py-4 text-[15px] text-[#1f1f1f] focus:outline-none transition-all duration-300 shadow-sm placeholder:text-gray-400 hover:shadow-md focus:shadow-lg focus:shadow-[#f36f35]/5"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    {/* Email */}
                    <div className="space-y-2 group/input">
                      <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-[#1f1f1f] transition-colors group-focus-within/input:text-[#f36f35] font-badge">
                        Email Address
                      </label>
                      <input 
                        type="email" 
                        id="email"
                        required
                        className="w-full bg-white border border-transparent focus:border-[#f36f35] rounded-xl px-5 py-4 text-[15px] text-[#1f1f1f] focus:outline-none transition-all duration-300 shadow-sm placeholder:text-gray-400 hover:shadow-md focus:shadow-lg focus:shadow-[#f36f35]/5"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-2 group/input">
                    <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-[#1f1f1f] transition-colors group-focus-within/input:text-[#f36f35] font-badge">
                      Inquiry Type
                    </label>
                    <div className="relative">
                      <select 
                        id="subject"
                        required
                        defaultValue=""
                        className="w-full bg-white border border-transparent focus:border-[#f36f35] rounded-xl px-5 py-4 text-[15px] text-[#1f1f1f] focus:outline-none transition-all duration-300 shadow-sm appearance-none cursor-pointer hover:shadow-md focus:shadow-lg focus:shadow-[#f36f35]/5 pr-12"
                      >
                        <option value="" disabled>Select an option...</option>
                        <option value="sales">Sales & Pricing</option>
                        <option value="support">Technical Support</option>
                        <option value="partnership">Partnership Opportunities</option>
                        <option value="other">Other</option>
                      </select>
                      <div className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
                        <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2 group/input">
                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-[#1f1f1f] transition-colors group-focus-within/input:text-[#f36f35] font-badge">
                      Your Message
                    </label>
                    <textarea 
                      id="message"
                      required
                      rows="4"
                      className="w-full bg-white border border-transparent focus:border-[#f36f35] rounded-xl px-5 py-4 text-[15px] text-[#1f1f1f] focus:outline-none transition-all duration-300 shadow-sm placeholder:text-gray-400 resize-none hover:shadow-md focus:shadow-lg focus:shadow-[#f36f35]/5"
                      placeholder="Tell us about your project or inquiry..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button 
                      type="submit" 
                      disabled={formState === 'submitting'}
                      className="hero-cta-btn w-full md:w-auto px-10 py-4 disabled:opacity-70 disabled:cursor-not-allowed group/btn shadow-lg shadow-[#f36f35]/20 hover:shadow-xl hover:shadow-[#f36f35]/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 rounded-xl"
                    >
                      <span className="hero-cta-btn-text flex items-center justify-center gap-2">
                        <span>{formState === 'submitting' ? 'Sending...' : 'Send Message'}</span>
                        <ArrowRight size={18} className={`transition-transform duration-300 ${formState === 'submitting' ? 'animate-pulse' : 'group-hover/btn:translate-x-1.5'}`} />
                      </span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}