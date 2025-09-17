"use client";

import React, { useState } from "react";
import Image from "next/image";

export default function ContactsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
   
    console.log("Form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="min-h-screen flex flex-col lg:flex-row items-center justify-center bg-gray-50 px-6 py-12">
      {/* Left Side – Contact Info */}
      <div className="lg:w-1/2 w-full flex flex-col space-y-6 lg:pr-12 mb-12 lg:mb-0">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Contact Us</h1>
        <p className="text-gray-600">
          We’d love to hear from you. Reach out to us for inquiries or
          collaboration opportunities.
        </p>

        <div className="space-y-4 text-gray-700">
          <p>
            <span className="font-semibold">Address:</span> Algiers, Algeria
          </p>
          <p>
            <span className="font-semibold">Phone:</span> +213 555 123 456
          </p>
          <p>
            <span className="font-semibold">Email:</span> info@realestate.dz
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-xl shadow-lg p-6 mt-6 space-y-4"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            rows={5}
            className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold rounded-lg py-3 hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Right Side – Image */}
      <div className="lg:w-1/2 w-full flex justify-center">
        <Image
          src="/images/contact-office.jpg" 
          alt="Contact illustration"
          width={600}
          height={450}
          className="rounded-2xl shadow-md object-cover"
        />
      </div>
    </section>
  );
}
