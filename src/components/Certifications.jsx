import React, { useEffect, useState } from 'react';
import { Award, CheckCircle2, ShieldCheck, FileCheck, X, ArrowRight } from 'lucide-react';
import logisticsImg from '../assets/images/logistics.png';

const certifications = [
  {
    id: 1,
    code: 'ISO 9001:2015',
    title: 'Quality Management System',
    issuer: 'Bureau of Indian Standards / Global ISO',
    year: 'Certified',
    icon: ShieldCheck,
    detail: 'Certified compliance for rigorous quality management systems across steel distribution, inventory tracking, and precision coil slitting.',
  },
  {
    id: 2,
    code: 'Tier-1 Mill Partner',
    title: 'Authorized Mill Distributor',
    issuer: 'Tata Steel & AM/NS Network',
    year: 'Authorized',
    icon: Award,
    detail: 'Official authorized stockist and channel partner providing full mill test certificates and 100% traceable sourcing from primary steel producers.',
  },
  {
    id: 3,
    code: 'BIS 2062 / 10748',
    title: 'BIS & Structural Compliance',
    issuer: 'National Standards Council of India',
    year: 'Compliant',
    icon: CheckCircle2,
    detail: 'Strict adherence to national specifications for structural hot-rolled coils, cold-rolled sheets, and high-tensile steel requirements.',
  },
  {
    id: 4,
    code: 'MSME Excellence',
    title: 'Industry Trade & Supply Leadership',
    issuer: 'Chamber of Commerce & Industry',
    year: 'Recognized',
    icon: FileCheck,
    detail: 'Recognition for dependable logistics execution, sustainable warehousing, and long-standing partnership across India’s core sectors.',
  },
];

export default function Certifications() {
  const [selectedCertification, setSelectedCertification] = useState(null);

  useEffect(() => {
    if (!selectedCertification) return undefined;

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') setSelectedCertification(null);
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [selectedCertification]);

  return (
    <section
      id="certifications"
      className="relative isolate overflow-hidden bg-[#3b52a4] px-6 py-16 text-white sm:px-10 lg:px-16 lg:py-20 select-none"
    >
      {/* Background image & gradient overlay matching ANM logo blue (#3b52a4) */}
      <img
        src={logisticsImg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center opacity-25"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-br from-[#3b52a4]/95 via-[#344994]/95 to-[#24346e]/95"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-2.5 font-badge text-xs font-bold uppercase tracking-[0.2em] text-[#f36f35]">
              ANM ISPAT
            </p>
            <h2 className="font-heading text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl">
              Global Standards, Industry Recognition
            </h2>
            <p className="mt-2 text-sm text-blue-100/80 max-w-xl">
              Ensuring certified grade integrity, strict traceability, and ISO-compliant operations at every stage.
            </p>
          </div>

          <a
            href="/achievements"
            className="inline-flex w-fit items-center gap-3 rounded-full border border-white/60 bg-white/10 px-5 py-2.5 font-heading text-xs font-bold text-white backdrop-blur-sm transition-all hover:bg-white hover:text-[#3b52a4] shadow-md shrink-0"
          >
            <span>View All Certifications</span>
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-sm text-[#3b52a4]">
              &rarr;
            </span>
          </a>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((cert) => {
            const Icon = cert.icon;
            return (
              <article
                key={cert.id}
                className="group relative cursor-pointer rounded-2xl bg-white p-6 text-left text-[#1f1f1f] shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_35px_rgba(0,0,0,0.25)] flex flex-col justify-between"
                onClick={() => setSelectedCertification(cert)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedCertification(cert);
                  }
                }}
              >
                <div>
                  {/* Top Bar: Icon + Code Badge */}
                  <div className="flex items-center justify-between gap-3 mb-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#eef2ff] text-[#3b52a4] transition-colors group-hover:bg-[#3b52a4] group-hover:text-white">
                      <Icon size={22} strokeWidth={2.2} />
                    </div>
                    <span className="rounded-full bg-blue-50 px-2.5 py-1 font-badge text-[10px] font-extrabold uppercase tracking-wider text-[#3b52a4]">
                      {cert.year}
                    </span>
                  </div>

                  {/* Code Tag */}
                  <span className="font-badge text-[11px] font-bold uppercase tracking-wider text-[#f36f35] block mb-1">
                    {cert.code}
                  </span>

                  {/* Title */}
                  <h3 className="font-heading text-lg font-black text-[#111827] leading-snug group-hover:text-[#3b52a4] transition-colors mb-2">
                    {cert.title}
                  </h3>

                  {/* Issuer */}
                  <p className="font-body text-xs font-semibold text-gray-500 mb-3">
                    {cert.issuer}
                  </p>

                  {/* Detail */}
                  <p className="font-body text-xs text-gray-600 leading-relaxed">
                    {cert.detail}
                  </p>
                </div>

                {/* Bottom link prompt */}
                <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between text-[#3b52a4] text-xs font-bold group-hover:text-[#f36f35] transition-colors">
                  <span>View Details</span>
                  <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
                </div>
              </article>
            );
          })}
        </div>
      </div>

      {/* Certification Details Modal */}
      {selectedCertification && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-5 backdrop-blur-sm animate-fadeIn"
          role="dialog"
          aria-modal="true"
          onClick={() => setSelectedCertification(null)}
        >
          <div
            className="relative w-full max-w-xl rounded-2xl bg-white p-6 sm:p-8 text-[#1f1f1f] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedCertification(null)}
              className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-all hover:bg-[#3b52a4] hover:text-white"
              aria-label="Close certificate preview"
            >
              <X size={18} />
            </button>

            {/* Certificate Header Banner */}
            <div className="border-b border-gray-100 pb-5 mb-5 flex items-center gap-4">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#eef2ff] text-[#3b52a4]">
                <selectedCertification.icon size={30} strokeWidth={2.2} />
              </div>
              <div>
                <span className="font-badge text-xs font-bold uppercase tracking-wider text-[#f36f35]">
                  {selectedCertification.code} • {selectedCertification.year}
                </span>
                <h2 className="font-heading text-xl sm:text-2xl font-black text-[#111827]">
                  {selectedCertification.title}
                </h2>
              </div>
            </div>

            {/* Certificate Body */}
            <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
              <div className="bg-[#f8f9fa] rounded-xl p-4 border border-gray-100">
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-1">
                  Certifying Authority / Partner
                </span>
                <p className="font-bold text-[#111827]">
                  {selectedCertification.issuer}
                </p>
              </div>

              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-gray-400 block mb-1">
                  Scope of Certification & Compliance
                </span>
                <p className="text-gray-700 font-medium">
                  {selectedCertification.detail}
                </p>
              </div>

              <div className="rounded-xl border border-blue-100 bg-blue-50/60 p-4 text-xs text-[#24346e] flex items-center gap-3">
                <CheckCircle2 size={20} className="shrink-0 text-[#3b52a4]" />
                <p>
                  Official documentation, test certificates, and compliance reports are supplied directly with every dispatch.
                </p>
              </div>
            </div>

            <div className="mt-6 flex justify-end">
              <button
                type="button"
                onClick={() => setSelectedCertification(null)}
                className="rounded-lg bg-[#3b52a4] px-5 py-2.5 font-badge text-xs font-bold text-white transition-colors hover:bg-[#2e4082]"
              >
                Close Preview
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
