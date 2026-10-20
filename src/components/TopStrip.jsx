import React from 'react';
import { MapPin, Mail, FileText } from 'lucide-react';

export default function TopStrip() {
  return (
    <div className="bg-[#f36f35] text-white text-xs py-2 px-4 sm:px-6">
      <div className="max-w-[1400px] mx-auto flex flex-wrap justify-center items-center gap-x-6 gap-y-2 font-medium">
        <div className="flex items-center gap-1.5">
          <MapPin size={13} className="shrink-0 text-white/90" />
          <span>Platinum Building, Jawahar Road, Ghatkopar East, Mumbai – 400077</span>
        </div>
        <a 
          href="mailto:enquiry@anmispat.com" 
          className="flex items-center gap-1.5 hover:underline transition-opacity"
        >
          <Mail size={13} className="shrink-0 text-white/90" />
          <span>enquiry@anmispat.com</span>
        </a>
        <div className="flex items-center gap-1.5">
          <FileText size={13} className="shrink-0 text-white/90" />
          <span><strong className="font-semibold">TAX ID:</strong> 27AANCA2927N2Z5</span>
        </div>
      </div>
    </div>
  );
}