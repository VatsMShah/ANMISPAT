import React from 'react';
import { Phone, Mail, Clock } from 'lucide-react';

export default function TopStrip() {
  return (
    <div className="bg-[#ff5c2b] text-white text-xs py-1.5 px-6">
      <div className="max-w-[1400px] mx-auto flex flex-wrap justify-center items-center gap-4 md:gap-6 font-medium">
        <a href="tel:+1234567890" className="flex items-center gap-1.5 hover:opacity-90 transition-opacity">
          <Phone size={13} className="fill-current" />
          (123) 456-7890
        </a>
        <a href="mailto:support@fixflow.com" className="flex items-center gap-1.5 hover:opacity-90 transition-opacity">
          <Mail size={13} />
          support@fixflow.com
        </a>
        <span className="flex items-center gap-1.5">
          <Clock size={13} />
          24/7 Emergency Service
        </span>
      </div>
    </div>
  );
}