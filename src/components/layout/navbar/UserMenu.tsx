"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { User, Heart, LogOut } from "lucide-react";
import { useAuthStore } from "@/store/AuthStore";

const UserMenu = () => {
  const { user, logout } = useAuthStore();
  const [isOpen, setIsOpen] = useState(false);

  if (!user) return null;

  return (
    <div className="relative md:top-1">
      {/* Avatar Button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="focus:outline-none rounded-full overflow-hidden border border-gray-500 hover:border-gray-700 transition"
      >
        <Image
          src="/assets/adverts/flats/flat1.webp"
          alt={"profile"}
          width={50}
          height={50}
          className="rounded-full border sm:w-12 sm:h-12 w-12 h-12 object-cover"
        />


      </button>

      {/* Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-3 md:min-w-72 p-3  w-48 bg-white rounded-xl shadow-lg overflow-hidden z-50"
          >
            {/* User Info */}
            <div className="px-4 py-3 border-b">
              <p className="text-sm font-semibold">{user.name}</p>
              <p className="text-xs text-gray-500">{user.email}</p>
            </div>

            {/* Menu Links */}
            <ul className="flex flex-col text-sm">
              <li>
                <Link
                  href="/profile"
                  className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  <User size={16} /> Profile
                </Link>
              </li>
              <li>
                
              </li>
              <li>
                <button
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                  }}
                  className="flex items-center gap-2 px-4 py-2 text-red-500 hover:bg-gray-100 w-full text-left"
                >
                  <LogOut size={16} /> Logout
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UserMenu;
