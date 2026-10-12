import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';
import anmLogo from '../assets/logo/anm.png';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-100 shadow-sm">
      <div className="max-w-[1400px] mx-auto px-6 py-3 flex items-center justify-between">
        
        {/* 1. Far Left - Social Icons */}
        <div className="flex items-center gap-4 text-gray-800">
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

        {/* 2. Left Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-gray-600">
          <Link to="/" className="group relative inline-flex items-center text-gray-600 transition-colors duration-300 ease-out hover:text-[#f36f35] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#f36f35] after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100">Home</Link>
          <a href="/about" className="group relative inline-flex items-center text-gray-600 transition-colors duration-300 ease-out hover:text-[#f36f35] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#f36f35] after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100">About</a>
          <Link to="/products" className="group relative inline-flex items-center text-gray-600 transition-colors duration-300 ease-out hover:text-[#f36f35] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#f36f35] after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100">Products</Link>
          <Link to="/achievements" className="group relative inline-flex items-center text-gray-600 transition-colors duration-300 ease-out hover:text-[#f36f35] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#f36f35] after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100">Achievements</Link>
        </nav>

        {/* 3. Center - Logo Block */}
        <Link to="/" className="flex flex-col items-center justify-center hover:opacity-90 transition-opacity">
          <img
            src={anmLogo}
            alt="ANM Ispat logo"
            className="h-14 w-auto object-contain"
          />
        </Link>

        {/* 4. Right Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-semibold text-gray-600">
          <a href="/#services" className="group relative inline-flex items-center text-gray-600 transition-colors duration-300 ease-out hover:text-[#f36f35] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#f36f35] after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100">Services</a>
          <a href="/#csr" className="group relative inline-flex items-center text-gray-600 transition-colors duration-300 ease-out hover:text-[#f36f35] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#f36f35] after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100">CSR</a>
          <Link to="/careers" className="group relative inline-flex items-center text-gray-600 transition-colors duration-300 ease-out hover:text-[#f36f35] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#f36f35] after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100">Careers</Link>
          <Link to="/contact" className="group relative inline-flex items-center text-gray-600 transition-colors duration-300 ease-out hover:text-[#f36f35] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#f36f35] after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100">Contact</Link>
        </nav>

        {/* 5. Far Right - Pill CTA Button */}
        <a 
          href="tel:+1245678900" 
          className="bg-[#f36f35] hover:brightness-95 text-white text-sm font-bold px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-2"
        >
          <Phone size={15} className="fill-current" />
          <span>(124) 567 8900</span>
        </a>

      </div>
    </header>
  );
}