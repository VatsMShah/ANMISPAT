//Footer.jsx
import React from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import anmLogo from '../assets/logo/anm.png';

export default function Footer() {
  return (
    <footer className="bg-[#f4f5f7] text-[#1f1f1f] pt-16 pb-8 border-t border-[#d8dbe0]">
      <div className="max-w-[1400px] mx-auto px-6">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12">
          
          {/* Column 1: Brand Logo, Description & Social Links */}
          <div className="space-y-5">
            {/* Logo */}
          <a href="#home" className="inline-flex flex-col items-start hover:opacity-80 transition-opacity duration-300">
            <img
              src={anmLogo}
              alt="ANM Ispat logo"
              className="h-12 w-auto object-contain mb-1"
            />
          </a>
            <p className="text-sm text-[#4c4c4c] leading-relaxed max-w-xs">
              ANM ISPAT delivers premium industrial steel solutions and trusted service nationwide.
            </p>

            {/* Circular Social Buttons */}
            <div className="flex items-center gap-2.5 pt-2">
              <a href="#" aria-label="Facebook" className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-gray-800 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-110 hover:text-[#f25c2b] hover:shadow-md">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="#" aria-label="Instagram" className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-gray-800 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-110 hover:text-[#f25c2b] hover:shadow-md">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-gray-800 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-110 hover:text-[#f25c2b] hover:shadow-md">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className="w-9 h-9 rounded-full bg-white flex items-center justify-center text-gray-800 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:scale-110 hover:text-[#f25c2b] hover:shadow-md">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-[#1f1f1f] mb-5">Quick Links</h3>
            <ul className="space-y-3.5 text-sm text-[#4c4c4c]">
              <li><a href="#home" className="group relative inline-flex text-[#4c4c4c] transition-colors duration-300 ease-out hover:text-[#f25c2b] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#f25c2b] after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100">Home</a></li>
              <li><a href="#company" className="group relative inline-flex text-[#4c4c4c] transition-colors duration-300 ease-out hover:text-[#f25c2b] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#f25c2b] after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100">Company Overview</a></li>
              <li><a href="#products" className="group relative inline-flex text-[#4c4c4c] transition-colors duration-300 ease-out hover:text-[#f25c2b] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#f25c2b] after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100">Our Product Range</a></li>
              <li><a href="#resources" className="group relative inline-flex text-[#4c4c4c] transition-colors duration-300 ease-out hover:text-[#f25c2b] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#f25c2b] after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100">Resources & Catalog</a></li>
              <li><a href="#careers" className="group relative inline-flex text-[#4c4c4c] transition-colors duration-300 ease-out hover:text-[#f25c2b] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#f25c2b] after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100">Careers</a></li>
            </ul>
          </div>

          {/* Column 3: Contact Us */}
          <div>
            <h3 className="text-lg font-bold text-[#1f1f1f] mb-5">Contact Us</h3>
            <ul className="space-y-4 text-sm text-[#4c4c4c]">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-[#f25c2b] shrink-0 mt-0.5" />
                <span>Corporate Office, Ispat Tower, Main Road, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-[#f25c2b] shrink-0" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-[#f25c2b] shrink-0" />
                <span>support@fixflow.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock size={18} className="text-[#f25c2b] shrink-0" />
                <span>24/7 Emergency Support</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-lg font-bold text-[#1f1f1f] mb-5">Newsletter</h3>
            <p className="text-sm text-[#4c4c4c] mb-6 leading-relaxed">
              Subscribe to receive the latest industry insights and updates.
            </p>

            <form onSubmit={(e) => e.preventDefault()} className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white border border-gray-200 rounded-full px-5 py-3 text-sm focus:outline-none focus:border-[#f25c2b] transition-colors shadow-sm"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="w-11 h-11 shrink-0 rounded-full bg-[#f25c2b] text-white flex items-center justify-center hover:bg-[#ff6b3d] transition-colors shadow-md"
              >
                <Send size={16} className="translate-x-[-1px] translate-y-[1px]" />
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar Separator */}
        <div className="border-t border-[#d8dbe0] pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#4c4c4c]">
          <p>© 2026 ANM ISPAT - An Abhay Ispat Enterprise. All Rights Reserved.</p>
          <div className="flex items-center gap-3">
            <a href="#privacy" className="group relative inline-flex text-[#4c4c4c] transition-colors duration-300 ease-out hover:text-[#f25c2b] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#f25c2b] after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100">Privacy Policy</a>
            <span>|</span>
            <a href="#terms" className="group relative inline-flex text-[#4c4c4c] transition-colors duration-300 ease-out hover:text-[#f25c2b] after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-[#f25c2b] after:transition-transform after:duration-300 after:ease-out hover:after:scale-x-100">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}