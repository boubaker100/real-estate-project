"use client";

import { useState } from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ name, phone, email, password });
  };

  return (
    <div
      className="relative min-h-screen flex pb-44 justify-center bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/Login/Loginbg.jpg')" }}
    >
      {/* تظليل داكن */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* الفورم */}
      <div className="relative top-40 z-10 w-lg md:w-2/5 px-8 py-10 bg-white/10 rounded-2xl shadow-xl backdrop-blur-md">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          Create an account
        </h1>

        <form onSubmit={handleRegister} className="space-y-6">
          {/* الرقم والاسم تع اليوزر*/}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-200 mb-1">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border border-gray-300/40 rounded-lg px-4 py-2 bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="block text-gray-200 mb-1">Phone</label>
              <input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border border-gray-300/40 rounded-lg px-4 py-2 bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="+213 6XX XX XX XX"
              />
            </div>
          </div>

          {/* والاميل والباسووورد*/}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-200 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-gray-300/40 rounded-lg px-4 py-2 bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="example@email.com"
              />
            </div>
            <div>
              <label className="block text-gray-200 mb-1">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-gray-300/40 rounded-lg px-4 py-2 bg-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="********"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>

        {/* فاصل */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-400/50"></div>
          <span className="px-3 text-gray-300 text-sm">OR</span>
          <div className="flex-grow border-t border-gray-400/50"></div>
        </div>

        {/* تسجيل عبر السوشيال */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="flex items-center justify-center gap-2 w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition">
            <FaGoogle className="text-lg" /> Continue with Google
          </button>
          <button className="flex items-center justify-center gap-2 w-full bg-blue-700 text-white py-2 rounded-lg font-semibold hover:bg-blue-800 transition">
            <FaFacebook className="text-lg" /> Continue with Facebook
          </button>
        </div>

        <p className="text-center text-gray-200 mt-6 text-sm">
          Already have an account?{" "}
          <a href="/login" className="text-blue-400 hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}
