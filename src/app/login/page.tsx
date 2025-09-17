"use client";

import { useState } from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/AuthStore";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = useAuthStore((s) => s.login);
  const router = useRouter();
  console.log("emailuser",email);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // تسجيل دخول وهمي
    login(email, "admin"); // 
    router.push("/admin");
  };
  return (
    <div
      className="relative min-h-screen flex py-36  justify-center bg-cover bg-center bp-2xl"
      style={{ backgroundImage: "url('/assets/Login/Loginbg.jpg')" }}
    >
      {/* طبقة التظليل */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>

      {/* الفورم */}
      <div className=" relative bottom-5 top-16 z-10 w-lg md:w-2/5 px-8 py-7 bg-white/10 rounded-2xl shadow-xl backdrop-blur-md">
        <h1 className="text-3xl font-bold text-white mb-6 text-center">
          Login to your account
        </h1>

        <form onSubmit={handleLogin} className="space-y-6">
          {/* Email */}
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

          {/* Password */}
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

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>

        {/* فاصل */}
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-400/50"></div>
          <span className="px-3 text-gray-300 text-sm">OR</span>
          <div className="flex-grow border-t border-gray-400/50"></div>
        </div>

        {/* أزرار سوشيال */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="flex items-center justify-center gap-2 w-full bg-red-600 text-white py-2 rounded-lg font-semibold hover:bg-red-700 transition">
            <FaGoogle className="text-lg" /> Continue with Google
          </button>
          <button className="flex items-center justify-center gap-2 w-full bg-blue-700 text-white py-2 rounded-lg font-semibold hover:bg-blue-800 transition">
            <FaFacebook className="text-lg" /> Continue with Facebook
          </button>
        </div>

        <p className="text-center text-gray-200 mt-6 text-sm">
          Don’t have an account?{" "}
          <a href="/register" className="text-blue-400 hover:underline">
            Register
          </a>
        </p>
      </div>
    </div>
  );
}
