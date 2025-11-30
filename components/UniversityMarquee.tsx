import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity"

const UniversityMarquee = () => {
  // Placeholder university logos - replace src with actual university logo paths
  const universities = [
    { name: "University 1", logo: "/universities/uni1.png" },
    { name: "University 2", logo: "/universities/uni2.png" },
    { name: "University 3", logo: "/universities/uni3.png" },
    { name: "University 4", logo: "/universities/uni4.png" },
    { name: "University 5", logo: "/universities/uni5.png" },
    { name: "University 6", logo: "/universities/uni6.png" },
    { name: "University 7", logo: "/universities/uni7.png" },
    { name: "University 8", logo: "/universities/uni8.png" },
    { name: "University 9", logo: "/universities/uni9.png" },
    { name: "University 10", logo: "/universities/uni10.png" },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-[#FAFAFA] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 text-center sm:mb-16">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white px-4 py-2 shadow-sm">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B] sm:text-sm">
              Partner Universities
            </span>
          </div>
          <h2 className="text-3xl font-bold text-[#1B4F8C] sm:text-4xl lg:text-5xl">
            Get Seats in Top Universities Across India
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#64748B] sm:text-lg">
            All courses, all streams—your gateway to premier institutions nationwide and abroad.
          </p>
        </div>

        {/* Scrolling University Logos */}
        <div className="relative">
          <ScrollVelocityContainer className="py-8">
            {/* First Row - Scrolling Right */}
            <ScrollVelocityRow baseVelocity={1} direction={1}>
              <div className="flex items-center gap-12 px-6">
                {universities.map((uni, idx) => (
                  <div
                    key={`row1-${idx}`}
                    className="flex h-20 w-32 shrink-0 items-center justify-center rounded-lg border border-[#E2E8F0] bg-white p-4 shadow-sm sm:h-24 sm:w-40"
                  >
                    <img
                      src={uni.logo}
                      alt={uni.name}
                      className="max-h-full max-w-full object-contain grayscale transition-all duration-300 hover:grayscale-0"
                    />
                  </div>
                ))}
              </div>
            </ScrollVelocityRow>

            {/* Second Row - Scrolling Left */}
            <ScrollVelocityRow baseVelocity={1} direction={-1}>
              <div className="flex items-center gap-12 px-6">
                {universities.map((uni, idx) => (
                  <div
                    key={`row2-${idx}`}
                    className="flex h-20 w-32 shrink-0 items-center justify-center rounded-lg border border-[#E2E8F0] bg-white p-4 shadow-sm sm:h-24 sm:w-40"
                  >
                    <img
                      src={uni.logo}
                      alt={uni.name}
                      className="max-h-full max-w-full object-contain grayscale transition-all duration-300 hover:grayscale-0"
                    />
                  </div>
                ))}
              </div>
            </ScrollVelocityRow>
          </ScrollVelocityContainer>
        </div>

        {/* Bottom Info */}
        <div className="mt-12 text-center sm:mt-16">
          <p className="text-sm text-[#64748B] sm:text-base">
            Recognized partnerships with leading private universities across India
          </p>
        </div>
      </div>
    </section>
  );
};

export default UniversityMarquee;