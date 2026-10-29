import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, ChevronDown, Menu, X } from 'lucide-react';
import anmLogo from '../assets/logo/anm.png';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isAboutActive = location.pathname === '/about' || location.pathname.startsWith('/about/');
  const isCsrActive = location.pathname === '/csr' || location.pathname.startsWith('/csr/');

  const [isAboutOpen, setIsAboutOpen] = useState(isAboutActive);
  const [isCsrOpen, setIsCsrOpen] = useState(isCsrActive);

  // Close mobile menu whenever navigation occurs
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Keep accordion open when navigating to a child page
  useEffect(() => {
    if (isAboutActive) setIsAboutOpen(true);
    if (isCsrActive) setIsCsrOpen(true);
  }, [location.pathname, isAboutActive, isCsrActive]);

  // Close mobile menu if screen resizes to desktop width (lg: 1024px)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="sticky top-0 z-50 relative bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between">
        
        {/* 1. Far Left - Social Icons (Desktop only) */}
        <div className="hidden lg:flex items-center gap-4 text-gray-800">
          <a href="#" aria-label="Facebook" className="text-gray-800 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-110 hover:text-[#f36f35]">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
          </a>
          <a href="#" aria-label="Instagram" className="text-gray-800 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-110 hover:text-[#f36f35]">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </a>
          <a href="#" aria-label="LinkedIn" className="text-gray-800 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-110 hover:text-[#f36f35]">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </a>
          <a href="#" aria-label="YouTube" className="text-gray-800 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:scale-110 hover:text-[#f36f35]">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
        </div>

        {/* 2. Left Nav Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-gray-600">
          <Link to="/" className="group relative inline-flex items-center text-gray-600 transition-colors duration-300 ease-out hover:text-[#f36f35] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#f36f35] after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100">Home</Link>
          {/* About with Sub-page Dropdown */}
          <div className="relative group/about py-1">
            <Link 
              to="/about" 
              className="group relative inline-flex items-center gap-1 text-gray-600 transition-colors duration-300 ease-out hover:text-[#f36f35] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#f36f35] after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100"
            >
              <span>About Us</span>
              <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover/about:rotate-180 text-gray-400 group-hover/about:text-[#f36f35]" />
            </Link>

            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 pt-2 w-56 opacity-0 pointer-events-none translate-y-1.5 group-hover/about:opacity-100 group-hover/about:pointer-events-auto group-hover/about:translate-y-0 transition-all duration-200 z-50">
              <div className="bg-white rounded-xl shadow-[0_12px_32px_rgba(0,0,0,0.12)] border border-gray-100 p-1.5 overflow-hidden">
                <Link
                  to="/about"
                  className="block px-3.5 py-2.5 rounded-lg text-xs font-semibold text-gray-700 hover:bg-[#fff5f0] hover:text-[#f36f35] transition-colors"
                >
                  About Overview
                </Link>
                <Link
                  to="/about/founder-chairman"
                  className="block px-3.5 py-2.5 rounded-lg text-xs font-semibold text-gray-700 hover:bg-[#fff5f0] hover:text-[#f36f35] transition-colors"
                >
                  Founder Chairman
                </Link>
                <Link
                  to="/about/board-of-directors"
                  className="block px-3.5 py-2.5 rounded-lg text-xs font-semibold text-gray-700 hover:bg-[#fff5f0] hover:text-[#f36f35] transition-colors"
                >
                  Board of Directors
                </Link>
                <Link
                  to="/about/corporate-governance"
                  className="block px-3.5 py-2.5 rounded-lg text-xs font-semibold text-gray-700 hover:bg-[#fff5f0] hover:text-[#f36f35] transition-colors"
                >
                  Corporate Governance
                </Link>
              </div>
            </div>
          </div>
          <Link to="/products" className="group relative inline-flex items-center text-gray-600 transition-colors duration-300 ease-out hover:text-[#f36f35] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#f36f35] after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100">Products</Link>
          <Link to="/achievements" className="group relative inline-flex items-center text-gray-600 transition-colors duration-300 ease-out hover:text-[#f36f35] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#f36f35] after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100">Achievements</Link>
        </nav>

        {/* 3. Center - Logo Block */}
        <Link to="/" className="flex flex-col items-center justify-center hover:opacity-90 transition-opacity">
          <img
            src={anmLogo}
            alt="ANM Ispat logo"
            className="h-11 sm:h-14 w-auto object-contain"
          />
        </Link>

        {/* 4. Right Nav Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-gray-600">
          <Link to="/services" className="group relative inline-flex items-center text-gray-600 transition-colors duration-300 ease-out hover:text-[#f36f35] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#f36f35] after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100">Industries</Link>
          
          {/* CSR with Sub-page Dropdown */}
          <div className="relative group/csr py-1">
            <Link 
              to="/csr" 
              className="group relative inline-flex items-center gap-1 text-gray-600 transition-colors duration-300 ease-out hover:text-[#f36f35] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#f36f35] after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100"
            >
              <span>CSR</span>
              <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover/csr:rotate-180 text-gray-400 group-hover/csr:text-[#f36f35]" />
            </Link>

            {/* Dropdown Menu */}
            <div className="absolute top-full left-0 pt-2 w-56 opacity-0 pointer-events-none translate-y-1.5 group-hover/csr:opacity-100 group-hover/csr:pointer-events-auto group-hover/csr:translate-y-0 transition-all duration-200 z-50">
              <div className="bg-white rounded-xl shadow-[0_12px_32px_rgba(0,0,0,0.12)] border border-gray-100 p-1.5 overflow-hidden">
                <Link
                  to="/csr"
                  className="block px-3.5 py-2.5 rounded-lg text-xs font-semibold text-gray-700 hover:bg-[#fff5f0] hover:text-[#f36f35] transition-colors"
                >
                  CSR Overview
                </Link>
                <Link
                  to="/csr/initiatives"
                  className="block px-3.5 py-2.5 rounded-lg text-xs font-semibold text-gray-700 hover:bg-[#fff5f0] hover:text-[#f36f35] transition-colors"
                >
                  CSR Initiatives
                </Link>
              </div>
            </div>
          </div>

          <Link to="/careers" className="group relative inline-flex items-center text-gray-600 transition-colors duration-300 ease-out hover:text-[#f36f35] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#f36f35] after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100">Careers</Link>
          <Link to="/contact" className="group relative inline-flex items-center text-gray-600 transition-colors duration-300 ease-out hover:text-[#f36f35] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#f36f35] after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100">Contact</Link>
        </nav>

        {/* 5. Far Right - Pill CTA Button & Mobile Hamburger Toggle */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a 
            href="tel:+917304656254" 
            className="bg-[#f36f35] hover:brightness-95 text-white text-xs sm:text-sm font-bold px-3.5 py-2 sm:px-5 sm:py-2.5 rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-1.5 sm:gap-2"
          >
            <Phone size={14} className="fill-current" />
            <span className="hidden sm:inline">+91 7304656254</span>
            <span className="sm:hidden font-semibold">Call</span>
          </a>

          {/* Mobile Menu Button (< lg) */}
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileMenuOpen}
            className="lg:hidden w-10 h-10 rounded-xl bg-gray-50 hover:bg-[#fff5ee] border border-gray-200 text-gray-800 hover:text-[#f36f35] hover:border-[#f36f35]/30 flex items-center justify-center transition-all duration-200 cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#f36f35]"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5 text-[#f36f35]" strokeWidth={2.5} />
            ) : (
              <Menu className="w-5 h-5" strokeWidth={2.5} />
            )}
          </button>
        </div>

      </div>

      {/* =====================================================
          MOBILE NAVIGATION DRAWER (< lg screens)
          Slide-down full navigation menu with accordion dropdowns
      ====================================================== */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop overlay */}
          <div
            className="lg:hidden fixed inset-0 -z-10 bg-black/50 backdrop-blur-xs transition-opacity duration-200"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer container */}
          <div
            className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-200 shadow-2xl max-h-[calc(100dvh-75px)] overflow-y-auto px-5 py-5 sm:px-8 sm:py-6"
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="flex flex-col divide-y divide-gray-100">
              
              {/* Home */}
              <div className="pb-2">
                <Link
                  to="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-2.5 text-base font-bold transition-colors ${
                    location.pathname === '/' ? 'text-[#f36f35]' : 'text-gray-900 hover:text-[#f36f35]'
                  }`}
                >
                  <span>Home</span>
                  {location.pathname === '/' && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f36f35]" />
                  )}
                </Link>
              </div>

              {/* About Us (Accordion) */}
              <div className="py-2">
                <button
                  type="button"
                  onClick={() => setIsAboutOpen(!isAboutOpen)}
                  className={`w-full flex items-center justify-between py-2 text-base font-bold transition-colors text-left cursor-pointer focus:outline-none ${
                    isAboutActive ? 'text-[#f36f35]' : 'text-gray-900 hover:text-[#f36f35]'
                  }`}
                >
                  <span>About Us</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isAboutOpen ? 'rotate-180 text-[#f36f35]' : 'text-gray-400'
                    }`}
                  />
                </button>

                {isAboutOpen && (
                  <div className="pl-3 pr-2 pt-1 pb-2 space-y-1 bg-[#fafbfc] rounded-xl my-1 border border-gray-100">
                    <Link
                      to="/about"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block py-2 px-2.5 text-sm font-semibold rounded-lg transition-colors ${
                        location.pathname === '/about'
                          ? 'text-[#f36f35] bg-[#fff5ee] font-bold'
                          : 'text-gray-700 hover:text-[#f36f35] hover:bg-[#fff5ee]'
                      }`}
                    >
                      About Overview
                    </Link>
                    <Link
                      to="/about/founder-chairman"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block py-2 px-2.5 text-sm font-semibold rounded-lg transition-colors ${
                        location.pathname === '/about/founder-chairman'
                          ? 'text-[#f36f35] bg-[#fff5ee] font-bold'
                          : 'text-gray-700 hover:text-[#f36f35] hover:bg-[#fff5ee]'
                      }`}
                    >
                      Founder Chairman
                    </Link>
                    <Link
                      to="/about/board-of-directors"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block py-2 px-2.5 text-sm font-semibold rounded-lg transition-colors ${
                        location.pathname === '/about/board-of-directors'
                          ? 'text-[#f36f35] bg-[#fff5ee] font-bold'
                          : 'text-gray-700 hover:text-[#f36f35] hover:bg-[#fff5ee]'
                      }`}
                    >
                      Board of Directors
                    </Link>
                    <Link
                      to="/about/corporate-governance"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block py-2 px-2.5 text-sm font-semibold rounded-lg transition-colors ${
                        location.pathname === '/about/corporate-governance'
                          ? 'text-[#f36f35] bg-[#fff5ee] font-bold'
                          : 'text-gray-700 hover:text-[#f36f35] hover:bg-[#fff5ee]'
                      }`}
                    >
                      Corporate Governance
                    </Link>
                  </div>
                )}
              </div>

              {/* Products */}
              <div className="py-2">
                <Link
                  to="/products"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-2 text-base font-bold transition-colors ${
                    location.pathname === '/products' ? 'text-[#f36f35]' : 'text-gray-900 hover:text-[#f36f35]'
                  }`}
                >
                  <span>Products</span>
                  {location.pathname === '/products' && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f36f35]" />
                  )}
                </Link>
              </div>

              {/* Achievements */}
              <div className="py-2">
                <Link
                  to="/achievements"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-2 text-base font-bold transition-colors ${
                    location.pathname === '/achievements' ? 'text-[#f36f35]' : 'text-gray-900 hover:text-[#f36f35]'
                  }`}
                >
                  <span>Achievements</span>
                  {location.pathname === '/achievements' && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f36f35]" />
                  )}
                </Link>
              </div>

              {/* Industries */}
              <div className="py-2">
                <Link
                  to="/services"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-2 text-base font-bold transition-colors ${
                    location.pathname === '/services' ? 'text-[#f36f35]' : 'text-gray-900 hover:text-[#f36f35]'
                  }`}
                >
                  <span>Industries</span>
                  {location.pathname === '/services' && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f36f35]" />
                  )}
                </Link>
              </div>

              {/* CSR (Accordion) */}
              <div className="py-2">
                <button
                  type="button"
                  onClick={() => setIsCsrOpen(!isCsrOpen)}
                  className={`w-full flex items-center justify-between py-2 text-base font-bold transition-colors text-left cursor-pointer focus:outline-none ${
                    isCsrActive ? 'text-[#f36f35]' : 'text-gray-900 hover:text-[#f36f35]'
                  }`}
                >
                  <span>CSR</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      isCsrOpen ? 'rotate-180 text-[#f36f35]' : 'text-gray-400'
                    }`}
                  />
                </button>

                {isCsrOpen && (
                  <div className="pl-3 pr-2 pt-1 pb-2 space-y-1 bg-[#fafbfc] rounded-xl my-1 border border-gray-100">
                    <Link
                      to="/csr"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block py-2 px-2.5 text-sm font-semibold rounded-lg transition-colors ${
                        location.pathname === '/csr'
                          ? 'text-[#f36f35] bg-[#fff5ee] font-bold'
                          : 'text-gray-700 hover:text-[#f36f35] hover:bg-[#fff5ee]'
                      }`}
                    >
                      CSR Overview
                    </Link>
                    <Link
                      to="/csr/initiatives"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`block py-2 px-2.5 text-sm font-semibold rounded-lg transition-colors ${
                        location.pathname === '/csr/initiatives'
                          ? 'text-[#f36f35] bg-[#fff5ee] font-bold'
                          : 'text-gray-700 hover:text-[#f36f35] hover:bg-[#fff5ee]'
                      }`}
                    >
                      CSR Initiatives
                    </Link>
                  </div>
                )}
              </div>

              {/* Careers */}
              <div className="py-2">
                <Link
                  to="/careers"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-2 text-base font-bold transition-colors ${
                    location.pathname === '/careers' ? 'text-[#f36f35]' : 'text-gray-900 hover:text-[#f36f35]'
                  }`}
                >
                  <span>Careers</span>
                  {location.pathname === '/careers' && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f36f35]" />
                  )}
                </Link>
              </div>

              {/* Contact */}
              <div className="pt-2">
                <Link
                  to="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-2 text-base font-bold transition-colors ${
                    location.pathname === '/contact' ? 'text-[#f36f35]' : 'text-gray-900 hover:text-[#f36f35]'
                  }`}
                >
                  <span>Contact</span>
                  {location.pathname === '/contact' && (
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f36f35]" />
                  )}
                </Link>
              </div>

            </nav>

            {/* Mobile Footer & Quick Call in Drawer */}
            <div className="mt-6 pt-5 border-t border-gray-100 flex flex-col gap-3">
              <a
                href="tel:+917304656254"
                className="w-full py-3 rounded-xl bg-[#f36f35] text-white text-center font-bold text-sm shadow-md flex items-center justify-center gap-2 hover:brightness-95 transition-all"
              >
                <Phone size={15} className="fill-current" />
                <span>Call Us: +91 7304656254</span>
              </a>

              {/* Social Icons inside Mobile Drawer */}
              <div className="flex items-center justify-center gap-5 pt-2 text-gray-600">
                <a href="#" aria-label="Facebook" className="hover:text-[#f36f35] transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a href="#" aria-label="Instagram" className="hover:text-[#f36f35] transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#" aria-label="LinkedIn" className="hover:text-[#f36f35] transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" aria-label="YouTube" className="hover:text-[#f36f35] transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
              </div>
            </div>

          </div>
        </>
      )}
    </header>
  );
}
