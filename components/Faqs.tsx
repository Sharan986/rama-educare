"use client";

import React, { useState } from "react";
import { FiPlus, FiMinus, FiArrowRight } from "react-icons/fi";

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What services do educational consultancies offer?",
    answer:
      "They help students choose suitable colleges, guide with applications, scholarships, documentation, and provide overall admission support.",
  },
  {
    question: "Do you help with scholarship applications?",
    answer:
      "Yes, we guide you in finding relevant scholarships and assist with the application and documentation process.",
  },
  {
    question: "Can you guarantee university admission?",
    answer:
      "No consultancy can guarantee admission, but we maximize your chances with expert guidance and profile evaluation.",
  },
  {
    question: "Do you assist with student visa applications?",
    answer:
      "Yes, we assist with visa documentation, interview preparation, and the overall visa application process.",
  },
  {
    question: "What services do educational consultancies offer?",
    answer:
      "We provide help in university selection, course selection, documentation, scholarship assistance, and visa support.",
  },
  {
    question: "Do you help with scholarship applications?",
    answer:
      "Absolutely! We help identify eligible scholarships and ensure your application is strong and complete.",
  },
];

const FAQsSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 w-full relative">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-medium mb-2">Frequently Asked Questions</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Quick answers to your most common questions.
        </p>
      </div>

      {/* FAQ List */}
      <div className="max-w-2xl mx-auto px-4 flex flex-col gap-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white border rounded-2xl px-6 py-4 shadow-sm cursor-pointer transition hover:shadow-md"
            onClick={() => toggleFAQ(index)}
          >
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-medium">{faq.question}</h3>
              {openIndex === index ? (
                <FiMinus className="text-xl" />
              ) : (
                <FiPlus className="text-xl" />
              )}
            </div>

            {/* ANSWER SECTION */}
            {openIndex === index && (
              <p className="mt-3 text-gray-600 transition-all">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>

    </section>
  );
};

export default FAQsSection;
