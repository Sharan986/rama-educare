"use client";

import React from "react";

interface ServiceItem {
  title: string;
  desc: string;
  label: string;
}

const services: ServiceItem[] = [
  {
    title: "University Admission Counseling",
    desc: "Expert post-entrance counseling to identify and secure admission to universities perfectly aligned with your academic profile and career aspirations.",
    label: "COUNSELING",
  },
  {
    title: "Admission Assistance",
    desc: "Complete support through the admission process, from university selection to final enrollment, ensuring a smooth journey.",
    label: "ASSISTANCE",
  },
  {
    title: "Documentation Support",
    desc: "Comprehensive help with all application paperwork, ensuring documents are complete, accurate, and submitted on time.",
    label: "DOCUMENTATION",
  },
  {
    title: "Profile Building",
    desc: "Professional guidance in crafting compelling personal statements and essays that showcase your unique strengths and experiences.",
    label: "PROFILE",
  },
  {
    title: "Career Counseling",
    desc: "One-on-one mentorship to explore career paths, set realistic goals, and create a strategic roadmap for your educational future.",
    label: "CAREER",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="relative w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 text-center sm:mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-[#FAFAFA] px-4 py-2 shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B] sm:text-sm">
              What We Offer
            </span>
          </div>
          <h2 className="text-3xl font-bold text-[#1B4F8C] sm:text-4xl lg:text-5xl">
            Our Services
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#64748B] sm:text-lg">
            Comprehensive support to simplify your university admission journey
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 3).map((service, idx) => (
            <div
              key={idx}
              className="overflow-hidden rounded-xl border border-[#E2E8F0] bg-[#FAFAFA] p-8 transition-shadow duration-300 hover:shadow-md"
            >
              {/* Label */}
              <div className="mb-4">
                <span className="inline-block rounded-lg border border-[#E2E8F0] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                  {service.label}
                </span>
              </div>

              {/* Title */}
              <h3 className="mb-3 text-xl font-bold text-[#1B4F8C] sm:text-2xl">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-[#64748B] sm:text-base">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Second Row - Centered */}
        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-auto lg:max-w-[66.666%] lg:grid-cols-2">
          {services.slice(3).map((service, idx) => (
            <div
              key={idx + 3}
              className="overflow-hidden rounded-xl border border-[#E2E8F0] bg-[#FAFAFA] p-8 transition-shadow duration-300 hover:shadow-md"
            >
              {/* Label */}
              <div className="mb-4">
                <span className="inline-block rounded-lg border border-[#E2E8F0] bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#64748B]">
                  {service.label}
                </span>
              </div>

              {/* Title */}
              <h3 className="mb-3 text-xl font-bold text-[#1B4F8C] sm:text-2xl">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-sm leading-relaxed text-[#64748B] sm:text-base">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center sm:mt-16">
          <p className="mb-4 text-sm text-[#64748B] sm:text-base">
            Need personalized guidance for your admission journey?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-[#F9A825] px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all duration-300 hover:bg-[#F9A825]/90 hover:shadow-md sm:px-8 sm:py-4 sm:text-base"
          >
            Contact Us Today
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
