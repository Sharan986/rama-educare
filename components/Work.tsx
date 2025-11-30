  "use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef } from "react";

// ----------------------
// STEP DATA
// ----------------------
interface Step {
  id: number;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    id: 1,
    title: "Consulting & Assessment",
    description:
      "We understand your entrance exam results, academic profile, and career goals to create a personalized counseling roadmap.",
  },
  {
    id: 2,
    title: "University Selection",
    description:
      "Based on your results and preferences, we shortlist the best-fit universities and courses across India.",
  },
  {
    id: 3,
    title: "Application & Documentation",
    description: "Our team assists with application forms, document compilation, and timely submission to selected universities.",
  },
  {
    id: 4,
    title: "Admission & Enrollment",
    description:
      "We guide you through counseling rounds, seat allocation, and final enrollment to secure your admission.",
  },
];

// ----------------------
// MAIN COMPONENT
// ----------------------
export default function Work() {
  return (
    <section className="py-20 w-full flex flex-col items-center bg-white">

      {/* ---------- HEADER ---------- */}
      <h2 className="text-4xl font-bold text-center text-[#1B4F8C]">How We Work</h2>
      <p className="mt-4 text-[#64748B] text-center text-lg max-w-2xl">
        Our streamlined 4-step process to guide you from counseling to admission.
      </p>

      {/* ---------- TIMELINE CONTAINER ---------- */}
      <div className="relative mt-16 flex flex-col items-center">

        {/* Vertical Line */}
        <div className="absolute top-0 left-1/2 w-1 bg-gray-200 h-full -translate-x-1/2" />

        {/* All Steps */}
        {steps.map((step, index) => (
          <WorkStep key={step.id} step={step} index={index} />
        ))}
      </div>

      {/* ---------- CTA BUTTON ---------- */}
      <div className="mt-16 text-center">
        <button className="bg-[#F9A825] hover:bg-[#f5a000] text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200">
          Start Your Journey
        </button>
      </div>
    </section>
  );
}

// ----------------------
// INDIVIDUAL STEP
// ----------------------
function WorkStep({ step, index }: { step: Step; index: number }) {
  const ref = useRef(null);

  // Tracks visibility inside viewport
  const isInView = useInView(ref, {
    amount: 0.4, // 40% must be visible
    once: false, // allow re-animation on scroll
  });

  // Animation controller
  const controls = useAnimation();

  // Determine left or right side
  const isLeft = index % 2 === 1;

  // Different circle colors - alternating navy and gold
  const circleColors = ["#1B4F8C", "#F9A825", "#1B4F8C", "#F9A825"];

  // ----------------------
  // SHOW/HIDE ON SCROLL
  // ----------------------
  useEffect(() => {
    if (isInView) {
      controls.start("visible");   // Fade IN when in view
    } else {
      controls.start("hidden");    // Fade OUT when out of view
    }
  }, [isInView, controls]);

  return (
    <div
      ref={ref}
      className="relative w-full py-28"
    >

      {/* ------------------------------------
         STEP CIRCLE (center)
      -------------------------------------- */}
      <motion.div
        animate={controls}
        initial="hidden"
        variants={{
          hidden: { scale: 0.4, opacity: 0 },
          visible: { scale: 1.2, opacity: 1 },
        }}
        transition={{ duration: 0.4 }}
        className="absolute left-1/2 -translate-x-1/2 top-0 w-12 h-12 rounded-full 
                   flex items-center justify-center text-white font-bold shadow-lg z-20"
        style={{ backgroundColor: circleColors[index] }}
      >
        {step.id}
      </motion.div>

      {/* ------------------------------------
         STEP CARD (left or right)
      -------------------------------------- */}
      <motion.div
        animate={controls}
        initial="hidden"
        variants={{
          hidden: { opacity: 0, x: isLeft ? -100 : 100 }, // slide from side
          visible: { opacity: 1, x: 20 },
        }}
        transition={{ duration: 0.9 }}
        className={`
          w-[420px] p-8 bg-white border border-[#E2E8F0] shadow-lg rounded-xl absolute top-8 ml-15 mr-15 z-10
          ${isLeft ? "left-[15%]" : "right-[15%]"}
        `}
      >
        <h3 className="text-xl font-semibold text-[#1B4F8C]">{step.title}</h3>
        <p className="mt-2 text-[#64748B]">{step.description}</p>
      </motion.div>

    </div>
  );
}
