"use client";

import React from "react";

type ValueItem = {
  title: string;
  description: string;
 
};

const values: ValueItem[] = [
  {
    title: "Trust",
    description: "Honest guidance for a secure and truly confident journey.Honest guidance for a secure and truly confident journey.",
 
  },
  {
    title: "Excellence",
    description:
      "Dedicated to top-tier support and outstanding academic results.Honest guidance for a secure and truly confident journey.",
   
  },
  {
    title: "Commitment",
    description:
      "Focused on your success, every step of the way forward.Honest guidance for a secure and truly confident journey.",
    
  },
  {
    title: "Global Perspective",
    description:
      "Connecting you to endless learning opportunities.Honest guidance for a secure and truly confident journey.",
    
  },
];

export default function Values() {
  return (
    <section className="w-full mt-60  ">
      <div className=" ">
        <h2 className="text-5xl font-medium text-gray-900 text-center">Our Values</h2>
        <p className="text-gray-600 mt-2 mb-12 text-center text-xl">
          Trust, excellence, commitment, and a global outlook define our approach.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 ">
          {values.map((item, index) => (
            <div
              key={index}
              className="relative  border rounded-2xl p-6 h-70 shadow-sm hover:shadow-md transition"
            >
              {/* Content */}
              <h3 className="text-2xl font-semibold text-gray-900">{item.title}</h3>
              <p className="text-gray-600 mt-2">{item.description}</p>

            </div>
          ))}
        </div>
      </div>

    
    </section>
  );
}
