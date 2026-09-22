import { useEffect, useState } from 'react';
import logisticsImg from '../assets/images/logistics.png';

const certifications = [
  {
    id: 1,
    title: 'Certificate of Appreciation',
    issuer: 'Placeholder Organization',
    year: '2024',
    detail: 'Recognition for dependable steel supply and service excellence.',
  },
  {
    id: 2,
    title: 'Authorized Distributor',
    issuer: 'Placeholder Industry Partner',
    year: '2023',
    detail: 'Placeholder certification for trusted distribution capability.',
  },
  {
    id: 3,
    title: 'Quality Excellence Award',
    issuer: 'Placeholder Standards Council',
    year: '2022',
    detail: 'Recognition for consistent quality and operational standards.',
  },
  {
    id: 4,
    title: 'Industry Partnership Certificate',
    issuer: 'Placeholder Steel Group',
    year: '2021',
    detail: 'Placeholder certification for long-term industry partnership.',
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
      className="relative isolate overflow-hidden bg-[#075ca8] px-6 py-10 text-white sm:px-10 lg:px-16 lg:py-12"
    >
      <img
        src={logisticsImg}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 -z-20 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 -z-10 bg-[#075ca8]/90" aria-hidden="true" />

      <div className="mx-auto max-w-7xl">
        <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 font-badge text-xs font-semibold uppercase tracking-[0.2em] text-white/70">
              ANM ISPAT
            </p>
            <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
              Global standards, industry recognition
            </h2>
          </div>
          <a
            href="#contact"
            className="inline-flex w-fit items-center gap-3 rounded-full border border-white/70 px-5 py-2.5 font-heading text-xs font-semibold text-white transition-colors hover:bg-white hover:text-[#075ca8]"
          >
            View All Certifications
            <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-sm text-[#075ca8]">
              &rarr;
            </span>
          </a>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map((certification) => (
            <article
              key={certification.id}
              className="animate-certification-card cursor-pointer rounded-[1.25rem] bg-white p-3 text-left text-[#1f1f1f] shadow-2xl transition-transform duration-500 hover:-translate-y-2 focus:outline-none focus:ring-4 focus:ring-white/60 sm:p-4"
              onClick={() => setSelectedCertification(certification)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' || event.key === ' ') {
                  event.preventDefault();
                  setSelectedCertification(certification);
                }
              }}
              role="button"
              tabIndex={0}
              aria-label={`View ${certification.title}`}
            >
              <div className="flex min-h-[250px] flex-col justify-between rounded-xl border border-[#d8dbe0] bg-[#f7f8fa] p-4 sm:min-h-[285px] sm:p-5">
                <div className="flex items-start justify-between gap-2">
                  <span className="font-badge text-[10px] font-bold uppercase tracking-[0.12em] text-[#075ca8]">
                    Certification {String(certification.id).padStart(2, '0')}
                  </span>
                  <span className="font-body text-[10px] font-semibold text-gray-500">
                    {certification.year}
                  </span>
                </div>
                <div>
                  <div className="mb-4 h-1 w-9 bg-[#075ca8]" />
                  <h3 className="font-heading text-lg font-bold leading-tight sm:text-xl">
                    {certification.title}
                  </h3>
                  <p className="mt-2 font-body text-xs font-medium text-gray-600">
                    {certification.issuer}
                  </p>
                  <p className="mt-3 font-body text-xs leading-relaxed text-gray-500">
                    {certification.detail}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {selectedCertification && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#031d3a]/80 p-5 backdrop-blur-sm animate-certification-modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="certification-modal-title"
          onClick={() => setSelectedCertification(null)}
        >
          <div
            className="relative w-full max-w-2xl rounded-2xl bg-white p-4 text-[#1f1f1f] shadow-2xl sm:p-6"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelectedCertification(null)}
              className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#075ca8] text-xl text-white transition-transform hover:scale-105"
              aria-label="Close certificate preview"
            >
              &times;
            </button>

            <div className="flex min-h-[360px] flex-col justify-between border-8 border-double border-[#075ca8]/30 bg-[#fffdf7] p-7 text-center sm:min-h-[460px] sm:p-12">
              <div>
                <p className="font-badge text-xs font-bold uppercase tracking-[0.22em] text-[#075ca8]">
                  ANM ISPAT
                </p>
                <div className="mx-auto mt-5 h-px w-24 bg-[#075ca8]/40" />
              </div>
              <div>
                <p className="font-body text-xs uppercase tracking-[0.18em] text-gray-500">
                  Placeholder certification
                </p>
                <h2 id="certification-modal-title" className="mt-4 font-heading text-2xl font-bold text-[#075ca8] sm:text-4xl">
                  {selectedCertification.title}
                </h2>
                <p className="mt-5 font-body text-sm text-gray-600">
                  Presented by {selectedCertification.issuer}
                </p>
              </div>
              <div>
                <div className="mx-auto mb-4 h-px w-32 bg-gray-300" />
                <p className="font-body text-xs font-semibold uppercase tracking-[0.16em] text-gray-500">
                  {selectedCertification.year}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
