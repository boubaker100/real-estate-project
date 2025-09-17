"use client";

import React from "react";
import Link from "next/link";

const FirstSection = () => {
  return (
    <section className="shadow-2xl  relative w-screen h-screen bg-gradient-to-br from-sky-700 via-indigo-800 to-gray-900 overflow-hidden flex items-center justify-center px-6 sm:px-12">
      {/* نصف دائرة يسار الشاشة */}
      <div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-[80vmin] h-[80vmin] rounded-full 
                   bg-gradient-to-br from-sky-400 to-indigo-600 opacity-80 
                   -translate-x-1/3 shadow-2xl"
      />

     
      <div className="relative  z-10 grid grid-cols-1 md:grid-cols-2 items-center gap-12 w-full max-w-6xl">
       
        <div className="flex flex-col items-center md:items-start text-center md:text-left text-white">
          <h1 className="text-4xl sm:text-6xl font-extrabold leading-tight mb-4">
            Welcome!
          </h1>
          <p className="text-lg max-w-sm">
            Find your dream property with us. Explore, connect, and start your next chapter today.
          </p>
        </div>

        {/*  المعلومات والأزرار */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left text-white">
          <h2 className="text-3xl sm:text-5xl font-bold mb-6">
            Modern Real Estate Platform
          </h2>
          <p className="text-gray-200 mb-8 max-w-md">
            Discover premium listings across Algeria and beyond. Whether you want to buy, rent, or sell, we help you every step of the way.
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4">
            <Link
              href="/apartments"
              className="bg-sky-500 hover:bg-sky-600 text-white px-6 py-3 rounded-full font-medium transition"
            >
              Browse Properties
            </Link>
            <a
              href="#contact"
              className="border border-white hover:bg-white hover:text-sky-600 px-6 py-3 rounded-full font-medium transition"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
