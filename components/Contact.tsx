"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    entranceExam: "",
    rank: "",
    percentage: "",
    school: "",
    preferredCourse: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = { name: "", email: "", phone: "" };
    let isValid = true;

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      isValid = false;
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
      isValid = false;
    }

    // Phone validation
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\s/g, ""))) {
      newErrors.phone = "Please enter a valid 10-digit phone number";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

 const handleSubmit = (e: FormEvent) => {
  e.preventDefault();
  if (!validateForm()) return;

  // Build WhatsApp message
  const message =
    `*New Counseling Request*\n\n` +
    `*Name:* ${formData.name}\n` +
    `*Email:* ${formData.email}\n` +
    `*Phone:* ${formData.phone}\n` +
    `*City:* ${formData.city || "N/A"}\n` +
    `*Entrance Exam:* ${formData.entranceExam || "N/A"}\n` +
    `*Rank:* ${formData.rank || "N/A"}\n` +
    `*Percentage:* ${formData.percentage || "N/A"}\n` +
    `*School:* ${formData.school || "N/A"}\n` +
    `*Preferred Course:* ${formData.preferredCourse || "N/A"}\n` +
    `*Message:* ${formData.message || "N/A"}`;

  // Your WhatsApp number here (use only digits)
  const phoneNumber = "919031733144"; // <--- CHANGE TO YOUR NUMBER

  // Redirect to WhatsApp with message
  const whatsappURL = `https://wa.me/${+919031733144}?text=${encodeURIComponent(
    message
  )}`;

  window.open(whatsappURL, "_blank");

  // Reset form
  setFormData({
    name: "",
    email: "",
    phone: "",
    city: "",
    entranceExam: "",
    rank: "",
    percentage: "",
    school: "",
    preferredCourse: "",
    message: "",
  });
};

  return (
    <section className="py-16 md:py-24 bg-[#FAFAFA] px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-2 bg-white border border-[#E2E8F0] rounded-full mb-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#64748B] sm:text-sm">
              Get In Touch
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#1B4F8C] mt-3">
            Request Free Counseling
          </h2>
          <p className="text-[#64748B] mt-4 text-base md:text-lg max-w-2xl mx-auto">
            Fill out the form below and our expert counselors will get back to you within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white border border-[#E2E8F0] rounded-xl p-6 md:p-8 shadow-sm">
              {/* Name and Email */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-[#334155] mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${
                      errors.name ? "border-red-500" : "border-[#E2E8F0]"
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B4F8C] text-[#334155]`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-[#334155] mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${
                      errors.email ? "border-red-500" : "border-[#E2E8F0]"
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B4F8C] text-[#334155]`}
                    placeholder="your.email@example.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>

              {/* Phone and City */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-[#334155] mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border ${
                      errors.phone ? "border-red-500" : "border-[#E2E8F0]"
                    } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B4F8C] text-[#334155]`}
                    placeholder="10-digit mobile number"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="city" className="block text-sm font-semibold text-[#334155] mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B4F8C] text-[#334155]"
                    placeholder="Your city"
                  />
                </div>
              </div>

              {/* Entrance Exam and Preferred Course */}
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="entranceExam" className="block text-sm font-semibold text-[#334155] mb-2">
                    Entrance Exam Taken
                  </label>
                  <select
                    id="entranceExam"
                    name="entranceExam"
                    value={formData.entranceExam}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B4F8C] text-[#334155]"
                  >
                    <option value="">Select exam</option>
                    <option value="JEE Main">JEE Main</option>
                    <option value="JEE Advanced">JEE Advanced</option>
                    <option value="NEET">NEET</option>
                    <option value="BITSAT">BITSAT</option>
                    <option value="VITEEE">VITEEE</option>
                    <option value="KIITEE">KIITEE</option>
                    <option value="MET">MET</option>
                    <option value="WBJEE">WBJEE</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="preferredCourse" className="block text-sm font-semibold text-[#334155] mb-2">
                    Preferred Course/University
                  </label>
                  <input
                    type="text"
                    id="preferredCourse"
                    name="preferredCourse"
                    value={formData.preferredCourse}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B4F8C] text-[#334155]"
                    placeholder="e.g., B.Tech CSE, MBBS"
                  />
                </div>
              </div>

              {/* Rank, Percentage, and School */}
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div>
                  <label htmlFor="rank" className="block text-sm font-semibold text-[#334155] mb-2">
                    Entrance Exam Rank
                  </label>
                  <input
                    type="text"
                    id="rank"
                    name="rank"
                    value={formData.rank}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B4F8C] text-[#334155]"
                    placeholder="Your rank"
                  />
                </div>

                <div>
                  <label htmlFor="percentage" className="block text-sm font-semibold text-[#334155] mb-2">
                    12th Percentage
                  </label>
                  <input
                    type="text"
                    id="percentage"
                    name="percentage"
                    value={formData.percentage}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B4F8C] text-[#334155]"
                    placeholder="e.g., 85%"
                  />
                </div>

                <div>
                  <label htmlFor="school" className="block text-sm font-semibold text-[#334155] mb-2">
                    School Name
                  </label>
                  <input
                    type="text"
                    id="school"
                    name="school"
                    value={formData.school}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B4F8C] text-[#334155]"
                    placeholder="Your school"
                  />
                </div>
              </div>

              {/* Message */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-semibold text-[#334155] mb-2">
                  Message / Query
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-[#E2E8F0] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1B4F8C] text-[#334155] resize-none"
                  placeholder="Tell us about your goals and how we can help..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#F9A825] hover:bg-[#f5a000] text-white font-semibold px-8 py-4 rounded-lg transition-colors duration-200"
              >
                Request Counseling
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[#1B4F8C] mb-4">Contact Information</h3>
              
              <div className="space-y-4">
                <div>
                  <p className="text-sm font-semibold text-[#334155] mb-1">Office Address</p>
                  <p className="text-[#64748B] text-sm">
                    Jamshedpur, Jharkhand<br />
                    India
                  </p>
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#334155] mb-1">Phone</p>
                  <a href="tel:+911234567890" className="text-[#1B4F8C] text-sm hover:underline">
                    +91 12345 67890
                  </a>
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#334155] mb-1">Email</p>
                  <a href="mailto:info@ramaeducare.com" className="text-[#1B4F8C] text-sm hover:underline">
                    info@ramaeducare.com
                  </a>
                </div>

                <div>
                  <p className="text-sm font-semibold text-[#334155] mb-1">Working Hours</p>
                  <p className="text-[#64748B] text-sm">
                    24/7 Support Available<br />
                    Call or email anytime
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-[#1B4F8C] mb-3">Quick Response</h3>
              <p className="text-[#64748B] text-sm">
                We typically respond to all inquiries within 24 hours. For urgent matters, please call us directly.
              </p>
            </div>
          </div>
        </div>

        {/* Google Maps Section */}
        <div className="mt-12">
          <div className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden shadow-sm">
            <div className="p-6 border-b border-[#E2E8F0]">
              <h3 className="text-xl font-semibold text-[#1B4F8C]">Our Location</h3>
              <p className="text-[#64748B] mt-2 text-sm">
                Visit our office in Jamshedpur for in-person counseling sessions.
              </p>
            </div>
            <div className="w-full h-[400px] md:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.8762817733844!2d86.1853!3d22.8046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDQ4JzE2LjYiTiA4NsKwMTEnMDcuMSJF!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                // className="grayscale hover:grayscale-0 transition-all duration-300"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
