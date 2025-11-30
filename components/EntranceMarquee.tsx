"use client"

import LogoLoop from '@/components/LogoLoop';

const EntranceMarquee = () => {
    const entranceExams = [
        { src: "/logo.png", alt: "JEE Main & Advanced", href: "#" },
        { src: "/logo.png", alt: "NEET", href: "#" },
        { src: "/logo.png", alt: "CUET", href: "#" },
        { src: "/logo.png", alt: "BITSAT", href: "#" },
        { src: "/logo.png", alt: "COMEDK", href: "#" },
        { src: "/logo.png", alt: "WBJEE", href: "#" },
        { src: "/logo.png", alt: "CLAT", href: "#" },
        { src: "/logo.png", alt: "GMAT", href: "#" },
        { src: "/logo.png", alt: "GATE", href: "#" },
        { src: "/logo.png", alt: "XAT", href: "#" },
        { src: "/logo.png", alt: "SAT", href: "#" },
        { src: "/logo.png", alt: "MHTCET", href: "#" },
        { src: "/logo.png", alt: "IISER IAT", href: "#" },
        { src: "/logo.png", alt: "KCET", href: "#" },
    ];

    return (
        <section className="relative w-full overflow-hidden bg-[#FAFAFA] py-16 sm:py-20 lg:py-24">
            {/* Section Header */}
            <div className="mx-auto mb-12 max-w-4xl px-4 text-center sm:mb-16 sm:px-6">
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white px-4 py-2 shadow-sm">
                    <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B] sm:text-sm">
                        Admission Counseling
                    </span>
                </div>
                <h2 className="text-3xl font-bold text-[#1B4F8C] sm:text-4xl lg:text-5xl">
                    Expert Guidance After Your Results
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-[#64748B] sm:text-lg">
                    Specialized post-entrance counseling for admission to top universities across India
                </p>
            </div>

            {/* Logo Loop */}
            <div className="relative">
                {/* Gradient fade overlays - updated to match off-white background */}
                <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-32 bg-linear-to-r from-[#FAFAFA] to-transparent sm:w-40" />
                <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-32 bg-linear-to-l from-[#FAFAFA] to-transparent sm:w-40" />
                
                <div className="relative overflow-hidden py-8">
                    <LogoLoop
                        logos={entranceExams}
                        speed={60}
                        direction="left"
                        logoHeight={64}
                        gap={80}
                        hoverSpeed={20}
                        scaleOnHover
                        pauseOnHover
                        fadeOut={false}
                        ariaLabel="Supported entrance examinations"
                        // className="grayscale transition-all hover:grayscale-0"
                    />
                </div>
            </div>

            {/* Bottom Info */}
            <div className="mx-auto mt-12 max-w-2xl px-4 text-center sm:mt-16">
                <p className="text-sm text-[#64748B] sm:text-base">
                    Counseling support for all major entrance examination results
                </p>
            </div>
        </section>
    );
}

export default EntranceMarquee;