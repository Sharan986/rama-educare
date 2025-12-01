import React from 'react';

const WhyChooseUs = () => {
  const reasons = [
    {
      title: "Personalized Guidance",
      description: "Expert counseling tailored to your academic background, career goals, and financial considerations—not generic recommendations.",
      stat: "1:1",
      label: "Mentorship",
      icon: "PERSONALIZED"
    },
    {
      title: "15+ Years of Excellence",
      description: "Trusted expertise since 2010, helping 500+ students secure admissions to premier universities across India with personalized guidance and support.",
      stat: "5000+",
      label: "Students Guided",
      icon: "EXPERIENCE"
    },
    {
      title: "Complete Transparency",
      description: "Honest, clear guidance with full transparency in college selection, application processes, and financial planning.",
      stat: "100%",
      label: "Transparent Process",
      icon: "TRUST"
    },
    {
      title: "End-to-End Support",
      description: "From entrance exam counseling to document preparation and admission formalities—we're with you at every step.",
      stat: "24/7",
      label: "Dedicated Support",
      icon: "SUPPORT"
    },
    {
      title: "University Network",
      description: "Recognized partnerships with 50+ top private universities, unlocking guaranteed admission pathways.",
      stat: "100+",
      label: "Partner Universities",
      icon: "NETWORK"
    },
    {
      title: "Scholarship Assistance",
      description: "Expert support in securing financial aid and scholarships worth crores, making education affordable.",
      stat: "₹2Cr+",
      label: "Scholarships Secured",
      icon: "SCHOLARSHIPS"
    }
  ];

  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 text-center sm:mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-[#FAFAFA] px-4 py-2 shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B] sm:text-sm">
              Why Choose Us
            </span>
          </div>
          <h2 className="text-3xl font-bold text-[#1B4F8C] sm:text-4xl lg:text-5xl">
            Your Trusted Partner in Education
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#64748B] sm:text-lg">
            At RAMA Educare, we understand that choosing the right college is one of life's most impactful decisions. That's why we provide personalized guidance rooted in clarity, honesty, and complete transparency.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-xl border border-[#E2E8F0] bg-[#FAFAFA] p-6 transition-shadow duration-300 hover:shadow-md sm:p-8"
            >
              {/* Icon Label */}
              <div className="mb-4">
                <span className="inline-block rounded-lg border border-[#E2E8F0] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                  {reason.icon}
                </span>
              </div>

              {/* Title */}
              <h3 className="mb-3 text-xl font-bold text-[#1B4F8C] sm:text-2xl">
                {reason.title}
              </h3>

              {/* Description */}
              <p className="mb-4 text-sm leading-relaxed text-[#64748B] sm:text-base">
                {reason.description}
              </p>

              {/* Stat */}
              <div className="flex items-baseline gap-2 border-t border-[#E2E8F0] pt-4">
                <span className="text-2xl font-bold text-[#F9A825]">
                  {reason.stat}
                </span>
                <span className="text-sm font-medium text-[#64748B]">
                  {reason.label}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Message */}
        <div className="mx-auto mt-12 max-w-3xl text-center sm:mt-16">
          <p className="text-base leading-relaxed text-[#334155] sm:text-lg">
            With full-time support, continuous follow-ups, and dedicated mentorship, you are never alone in your journey. RAMA Educare ensures you always have a trusted partner supporting your educational future.
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;