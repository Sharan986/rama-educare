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
      "We start with a personalised consultation to understand your goals, background, and preferences.",
  },
  {
    id: 2,
    title: "Strategy & Preparation",
    description:
      "We develop a clear roadmap with timelines and required steps.",
  },
  {
    id: 3,
    title: "Application Submission",
    description: "We help you submit applications correctly and on time.",
  },
  {
    id: 4,
    title: "Final Guidance",
    description:
      "Interview prep, offer selection, visa support, pre-arrival help.",
  },
];

// ----------------------
// MAIN COMPONENT
// ----------------------
export default function Work() {
  return (
    <section className="py-20 w-full flex flex-col items-center">

      {/* ---------- HEADER ---------- */}
      <h2 className="text-5xl font-medium text-center">How we work?</h2>
      <p className="mt-2 text-gray-500 text-center">
        Guiding you through every step with clarity and support.
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

  // Different circle colors
  const circleColors = ["#3b82f6", "#ef4444", "#10b981", "#f59e0b"];

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
          w-[420px] p-8 bg-white shadow-lg rounded-xl absolute top-8 ml-15 mr-15 z-10
          ${isLeft ? "left-[15%]" : "right-[15%]"}
        `}
      >
        <h3 className="text-xl font-semibold">{step.title}</h3>
        <p className="mt-2 text-gray-600">{step.description}</p>
      </motion.div>

    </div>
  );
}
