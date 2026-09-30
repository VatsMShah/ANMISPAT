import React from 'react';

const teamMembers = [
  {
    name: 'Arjun Mehta',
    role: 'Leadership',
    description:
      'Driving strategic growth, building strong partnerships, and shaping the long-term direction of the organization.',
    image:
      'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg',
  },
  {
    name: 'Priya Shah',
    role: 'Operations',
    description:
      'Ensuring seamless operations, efficient processes, and consistent quality across every project we deliver.',
    image:
      'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg',
  },
  {
    name: 'Rohan Desai',
    role: 'Project Management',
    description:
      'Keeping projects on track through precise coordination, clear communication, and a strong focus on client expectations.',
    image:
      'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg',
  },
  {
    name: 'Ananya Rao',
    role: 'Engineering',
    description:
      'Turning technical expertise into practical industrial solutions built around precision, reliability, and performance.',
    image:
      'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg',
  },
];

export default function OurTeam() {
  return (
    <section
      id="our-team"
      className="relative w-full min-h-screen overflow-hidden bg-[#faf8f6] px-5 py-16 sm:px-8 md:py-20 lg:px-12 lg:py-24"
    >

      {/* =====================================================
          SOFT, ELEGANT BACKGROUND ATMOSPHERE (NON-GAUDY)
      ===================================================== */}

      {/* Primary ambient light bloom - muted warm cream/peach */}
      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          -top-[120px]
          h-[600px]
          w-[1000px]
          -translate-x-1/2
          rounded-full
          bg-radial
          from-[#ffede4]
          via-[#fff5ef]
          to-transparent
          blur-[120px]
          opacity-80
        "
      />

      {/* Soft secondary side warmth */}
      <div
        className="
          pointer-events-none
          absolute
          -right-[10%]
          top-[20%]
          h-[450px]
          w-[450px]
          rounded-full
          bg-[#fff0e6]
          blur-[100px]
          opacity-60
        "
      />

      {/* Subtle vertical light stripes with soft edge fade */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-[420px]
          opacity-[0.06]
        "
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              90deg,
              #111827 0px,
              #111827 1px,
              transparent 1px,
              transparent 64px
            )
          `,
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
        }}
      />

      {/* =====================================================
          CONTENT CONTAINER
      ===================================================== */}
      <div className="relative z-10 mx-auto max-w-[1280px]">

        {/* =================================================
            HEADER SECTION
        ================================================= */}
        <div className="mx-auto max-w-[760px] text-center">

          {/* Eyebrow Pill Badge */}
          <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-[#f36f35]/20 bg-[#fff5f0] px-4 py-1.5 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#f36f35]" />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#e0561b]">
              Our Team
            </span>
          </div>

          {/* Headline */}
          <h2
            className="
              text-[36px]
              font-extrabold
              leading-[1.1]
              tracking-[-0.04em]
              text-[#111827]
              sm:text-[44px]
              md:text-[52px]
              lg:text-[56px]
            "
          >
            A team built for{' '}
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-[#e0561b] via-[#f36f35] to-[#f78f5e] bg-clip-text text-transparent">
              precision and progress.
            </span>
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto
              mt-4
              max-w-[620px]
              text-[13px]
              font-normal
              leading-[1.7]
              text-[#64748b]
              md:text-[14px]
            "
          >
            Meet the people bringing together industry experience, technical expertise,
            and a shared commitment to delivering dependable industrial solutions.
          </p>

        </div>

        {/* =================================================
            TEAM CARDS GRID
        ================================================= */}
        <div
          className="
            mt-12
            grid
            grid-cols-1
            gap-6
            sm:grid-cols-2
            lg:grid-cols-4
          "
        >
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="
                group
                flex
                flex-col
                overflow-hidden
                rounded-[20px]
                border
                border-gray-200/60
                bg-white
                shadow-[0_4px_20px_rgba(0,0,0,0.03)]
                transition-all
                duration-500
                ease-out
                hover:-translate-y-2
                hover:border-[#f36f35]/30
                hover:shadow-[0_20px_40px_rgba(243,111,53,0.08)]
              "
            >

              {/* Photo Area */}
              <div className="relative aspect-[1.05/1] w-full overflow-hidden bg-[#f1f5f9]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="
                    h-full
                    w-full
                    object-cover
                    object-center
                    transition-transform
                    duration-700
                    ease-out
                    group-hover:scale-105
                  "
                />

                {/* Subtle Image Vignette Gradient */}
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-40" />
              </div>

              {/* Information Area */}
              <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
                <div>
                  {/* Role Tag */}
                  <div className="mb-2 flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#f36f35] opacity-0 transition-opacity duration-300 group-hover:opacity-75"></span>
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-[#f36f35]"></span>
                    </span>

                    <span className="text-[10px] font-extrabold uppercase tracking-[0.14em] text-[#e0561b]">
                      {member.role}
                    </span>
                  </div>

                  {/* Name */}
                  <h3 className="text-[18px] font-extrabold leading-tight tracking-[-0.02em] text-[#111827]">
                    {member.name}
                  </h3>

                  {/* Description */}
                  <p className="mt-2.5 text-[12px] leading-[1.65] text-[#64748b] transition-colors duration-300 group-hover:text-[#475569]">
                    {member.description}
                  </p>
                </div>
              </div>

            </article>
          ))}
        </div>

        {/* =================================================
            BOTTOM ACCENT DETAIL
        ================================================= */}
        <div className="mt-12 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-gradient-to-r from-transparent to-[#f36f35]/30" />
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#f36f35]" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#f36f35]/40" />
            <span className="h-1.5 w-1.5 rounded-full bg-[#f36f35]/20" />
          </div>
          <span className="h-px w-12 bg-gradient-to-l from-transparent to-[#f36f35]/30" />
        </div>

      </div>
    </section>
  );
}