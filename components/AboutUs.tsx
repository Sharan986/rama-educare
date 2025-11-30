import React from 'react';

const AboutUs = () => {
  const stats = [
    { value: "500+", label: "Students Guided", icon: "STUDENTS" },
    { value: "50+", label: "Partner Universities", icon: "UNIVERSITIES" },
    { value: "₹2Cr+", label: "Scholarships Secured", icon: "SCHOLARSHIPS" },
    { value: "15+", label: "Years of Excellence", icon: "EXPERIENCE" }
  ];

  return (
    <section className="relative w-full bg-[#FAFAFA] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 text-center sm:mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white px-4 py-2 shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B] sm:text-sm">
              About Us
            </span>
          </div>
          <h2 className="text-3xl font-bold text-[#1B4F8C] sm:text-4xl lg:text-5xl">
            RAMA Educare
          </h2>
          <div className="mx-auto mt-4 h-1 w-16 rounded-full bg-[#F9A825]"></div>
        </div>

        {/* Main Content */}
        <div className="mb-16 sm:mb-20">
          <div className="mx-auto max-w-3xl space-y-6 text-center">
            <p className="text-lg leading-relaxed text-[#334155] sm:text-xl">
              Since <span className="font-semibold text-[#1B4F8C]">2010</span>, RAMA Educare has been empowering students across <span className="font-semibold">Jamshedpur, Jharkhand, and pan-India</span> to discover and pursue their ideal academic paths.
            </p>
            <p className="text-base leading-relaxed text-[#64748B] sm:text-lg">
              Our mission is simple: helping students secure admission to the right colleges and courses that align with their dreams, strengths, and career aspirations through expert post-entrance counseling.
            </p>
            <p className="text-base leading-relaxed text-[#64748B] sm:text-lg">
              Recognized and trusted by all major private universities across India, RAMA Educare combines <span className="font-medium text-[#334155]">15+ years of experience</span> with personalized mentorship and a commitment to educational excellence.
            </p>
          </div>
        </div>

        {/* Statistics Grid */}
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-xl border border-[#E2E8F0] bg-white p-6 text-center shadow-sm transition-shadow duration-300 hover:shadow-md md:p-8"
              >
                <div className="mb-2 text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                  {stat.icon}
                </div>
                <div className="mb-2 text-3xl font-bold text-[#1B4F8C] md:text-4xl">
                  {stat.value}
                </div>
                <div className="text-sm font-medium text-[#64748B]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Optional CTA */}
        <div className="mt-12 text-center sm:mt-16">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-[#F9A825] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#F9A825]/90 hover:shadow-md sm:px-8 sm:py-4 sm:text-base"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
