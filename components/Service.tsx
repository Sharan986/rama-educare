"use client";

import React, { JSX } from "react";
import { FiArrowRight } from "react-icons/fi";
import {
  FaUniversity,
  FaMoneyBillWave,
  FaPassport,
  FaUserEdit,
  FaUsers,
} from "react-icons/fa";

interface ServiceItem {
  title: string;
  desc: string;
  icon: JSX.Element;
  bg: string;
}

const services: ServiceItem[] = [
  {
    title: "University Placement",
    desc: "We help students identify suitable universities based on their academic profile and career goals.",
    icon: <FaUniversity className="text-xl text-green-700" />,
    bg: "bg-green-100",
  },
  {
    title: "Scholarships",
    desc: "We help students identify suitable universities based on their academic profile and career goals.",
    icon: <FaMoneyBillWave className="text-xl text-orange-700" />,
    bg: "bg-orange-100",
  },
  {
    title: "Visa Support",
    desc: "We help students identify suitable universities based on their academic profile and career goals.",
    icon: <FaPassport className="text-xl text-blue-700" />,
    bg: "bg-blue-100",
  },
  {
    title: "Personal Statement",
    desc: "We help students identify suitable universities based on their academic profile and career goals.",
    icon: <FaUserEdit className="text-xl text-purple-700" />,
    bg: "bg-purple-100",
  },
  {
    title: "Career Counseling",
    desc: "We help students identify suitable universities based on their academic profile and career goals.",
    icon: <FaUsers className="text-xl text-pink-700" />,
    bg: "bg-pink-100",
  },
];

const ServicesSection: React.FC = () => {
  return (
    <section className="mt-60 mb-60 w-full">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-5xl font-medium mb-2">Our Services</h2>
        <p className="text-gray-600  ">
          Simplifying applications with tailored assistance.
        </p>
      </div>

      {/* GRID SYSTEM */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 ">
        {services.map((service, idx) => (
          <div
            key={idx}
            className="p-8 border rounded-2xl shadow-sm bg-white hover:shadow-md transition"
          >
            {/* Icon Box */}
            <div
              className={`w-18 h-16 flex items-center justify-center rounded-xl mb-6 ${service.bg}`}
            >
              {service.icon}
            </div>

            {/* Title */}
            <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>

            {/* Description */}
            <p className="text-gray-600 mb-6">{service.desc}</p>

            {/* Button */}
            <button className="flex items-center gap-2 text-lg font-medium text-gray-800 hover:underline">
              Service Details <FiArrowRight />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
