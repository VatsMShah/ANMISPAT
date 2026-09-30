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
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#f4f5f7] rounded-full blur-[100px] opacity-60 -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#f36f35] rounded-full blur-[120px] opacity-[0.05] translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 relative z-10">
        
        {/* Top Header */}
        <div className="mb-14 md:mb-20">
          <span className="block w-[42px] h-[3px] bg-[#f36f35] rounded-[20px] mb-5" />
          <p className="font-badge text-xs font-bold tracking-widest uppercase text-[#f36f35] mb-3">
            Get in touch
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#1f1f1f] tracking-tight max-w-3xl">
            Let's build something <br className="hidden md:block"/>
            <span className="text-[#f36f35]">great together.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left Column: Contact Info */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <p className="text-[17px] leading-relaxed text-[#4c4c4c] mb-10 max-w-md">
                Whether you have a question about our steel products, need a custom industrial solution, or want to explore a partnership, our team is ready to assist you.
              </p>

              <div className="space-y-8">
                {/* Info Item 1 */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-[#f4f5f7] flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-[#f36f35]">
                    <MapPin size={20} className="text-[#f36f35] transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-[#1f1f1f] mb-1">Headquarters</h4>
                    <p className="text-[#4c4c4c] text-[15px] leading-relaxed">
                      Corporate Office, Ispat Tower<br/>
                      Main Road, India
                    </p>
                  </div>
                </div>

                {/* Info Item 2 */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-[#f4f5f7] flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-[#f36f35]">
                    <Phone size={20} className="text-[#f36f35] transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-[#1f1f1f] mb-1">Phone</h4>
                    <p className="text-[#4c4c4c] text-[15px] leading-relaxed">
                      (123) 456-7890<br/>
                      <span className="text-sm opacity-80">Mon-Fri, 9am - 6pm</span>
                    </p>
                  </div>
                </div>

                {/* Info Item 3 */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-[#f4f5f7] flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-[#f36f35]">
                    <Mail size={20} className="text-[#f36f35] transition-colors duration-300 group-hover:text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-[#1f1f1f] mb-1">Email</h4>
                    <p className="text-[#4c4c4c] text-[15px] leading-relaxed">
                      support@fixflow.com<br/>
                      <span className="text-sm opacity-80">24/7 Support Available</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#f4f5f7] rounded-[30px] p-8 md:p-12 relative overflow-hidden group">
              {/* Form abstract shape */}
              <div className="absolute -top-24 -right-24 w-48 h-48 bg-white opacity-40 rounded-full blur-3xl pointer-events-none transition-transform duration-[2s] group-hover:scale-150" />
              
              <h3 className="text-2xl font-bold text-[#1f1f1f] mb-8 relative z-10">
                Send us a message
              </h3>

              {formState === 'success' ? (
                <div className="flex flex-col items-center justify-center py-12 text-center transition-all duration-500 relative z-10">
                  <div className="w-16 h-16 bg-[#f36f35]/10 rounded-full flex items-center justify-center mb-4">
                    <CheckCircle className="text-[#f36f35] w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-[#1f1f1f] mb-2">Message Received</h4>
                  <p className="text-[#4c4c4c]">We'll get back to you as soon as possible.</p>
                  <button 
                    onClick={() => setFormState('idle')}
                    className="mt-6 text-[#f36f35] font-bold text-sm hover:underline focus:outline-none"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="relative z-10 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2 group/input">
                      <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-[#1f1f1f] transition-colors group-focus-within/input:text-[#f36f35]">Full Name</label>
                      <input 
                        type="text" 
                        id="name"
                        required
                        className="w-full bg-white border-0 border-b-2 border-transparent focus:border-[#f36f35] rounded-xl px-5 py-4 text-[15px] text-[#1f1f1f] focus:outline-none transition-all shadow-sm placeholder:text-gray-400 hover:shadow-md focus:shadow-md"
                        placeholder="John Doe"
                      />
                    </div>
                    
                    {/* Email */}
                    <div className="space-y-2 group/input">
                      <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-[#1f1f1f] transition-colors group-focus-within/input:text-[#f36f35]">Email Address</label>
                      <input 
                        type="email" 
                        id="email"
                        required
                        className="w-full bg-white border-0 border-b-2 border-transparent focus:border-[#f36f35] rounded-xl px-5 py-4 text-[15px] text-[#1f1f1f] focus:outline-none transition-all shadow-sm placeholder:text-gray-400 hover:shadow-md focus:shadow-md"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  {/* Subject */}
                  <div className="space-y-2 group/input">
                    <label htmlFor="subject" className="text-xs font-bold uppercase tracking-wider text-[#1f1f1f] transition-colors group-focus-within/input:text-[#f36f35]">Inquiry Type</label>
                    <select 
                      id="subject"
                      required
                      defaultValue=""
                      className="w-full bg-white border-0 border-b-2 border-transparent focus:border-[#f36f35] rounded-xl px-5 py-4 text-[15px] text-[#1f1f1f] focus:outline-none transition-all shadow-sm appearance-none cursor-pointer hover:shadow-md focus:shadow-md"
                    >
                      <option value="" disabled>Select an option...</option>
                      <option value="sales">Sales & Pricing</option>
                      <option value="support">Technical Support</option>
                      <option value="partnership">Partnership Opportunities</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div className="space-y-2 group/input">
                    <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-[#1f1f1f] transition-colors group-focus-within/input:text-[#f36f35]">Your Message</label>
                    <textarea 
                      id="message"
                      required
                      rows="4"
                      className="w-full bg-white border-0 border-b-2 border-transparent focus:border-[#f36f35] rounded-xl px-5 py-4 text-[15px] text-[#1f1f1f] focus:outline-none transition-all shadow-sm placeholder:text-gray-400 resize-none hover:shadow-md focus:shadow-md"
                      placeholder="Tell us about your project or inquiry..."
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button 
                      type="submit" 
                      disabled={formState === 'submitting'}
                      className="hero-cta-btn w-full md:w-auto px-10 py-4 disabled:opacity-70 disabled:cursor-not-allowed group/btn"
                    >
                      <span className="hero-cta-btn-text">
                        {formState === 'submitting' ? 'Sending...' : 'Send Message'}
                        <ArrowRight size={18} className={`transition-transform duration-300 ${formState === 'submitting' ? '' : 'group-hover/btn:translate-x-1'}`} />
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
