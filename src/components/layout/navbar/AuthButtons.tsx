"use client";

import Link from "next/link";

const AuthButtons = () => {
  return (
    <div className="flex gap-4 ml-6">
      <Link
        href="/login"
        className="px-4 py-2 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition"
      >
        Login
      </Link>
      <Link
        href="/register"
        className="px-4 py-2 rounded-full border border-blue-600 text-blue-600 hover:bg-blue-50 transition"
      >
        Register
      </Link>
    </div>
  );
};

export default AuthButtons;
