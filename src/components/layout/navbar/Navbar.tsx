"use client";

import { useState } from "react";
import Image from "next/image";
import Logo from "/public/assets/navbar/menu_logo.svg";
import { useScroll } from "@/hooks/isScrolled";
import { useMediaQuery } from "@/hooks/isMobile";
import { MenuIcon, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import AuthButtons from "./AuthButtons";
import UserMenu from "./UserMenu";
import Menu from "./Menu/Menu";
import { useAuthStore } from "@/store/AuthStore";

const Navbar = () => {
  const isScrolled = useScroll();
  const isMobile = useMediaQuery();
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuthStore();

  return (
    <div className="relative z-50 flex items-center justify-center">
      <div
        className={
          "fixed flex items-center bg-slate-50 pl-2 transitions zoom-in-100 " +
          (isScrolled ? "top-0 w-full py-2" : "top-10 w-11/12 lg:w-3/4 rounded-full")
        }
      >
        {isMobile ? (
          <>
            {/* Logo */}
            <div className="flex items-center mr-10 w-2/12">
              <Image src={Logo} alt="Logo" height={isScrolled ? 55 : 80} width={isScrolled ? 55 : 80} />
              Company
            </div>
          

            {/* open menu */}
            <div className="w-10/12 flex items-center justify-end">  
           <div className="mr-4 mt-1.5">
            {user?<UserMenu/>:""}
            </div>
              <button onClick={() => setIsOpen(true)}>
                <MenuIcon className="mr-4" />
              </button>
          
            </div>

            {/* right menu */}
            <AnimatePresence>
              {isOpen && (
                <>
                  <motion.div
                    className="fixed inset-0 z-40"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                  />

                  <motion.div
                    className="fixed right-0 top-0 h-full w-64 bg-white shadow-lg p-6 z-50"
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <button
                      onClick={() => setIsOpen(false)}
                      className="absolute right-4 top-4"
                    >
                      <X />
                    </button>

                    <div className="mt-10 flex flex-col gap-6">
                      <Menu />
                      {user ? "" : <AuthButtons />}
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </>
        ) : (
          <>
            {/* Logo */}
            <div className="flex items-center mr-10 w-2/12">
              <Image src={Logo} alt="Logo" height={isScrolled ? 55 : 80} width={isScrolled ? 55 : 80} />
              <div className="max-[1400px]:hidden">Company</div>
            </div>

            {/* desktop menu */}
            <div className="w-10/12 xl:w-8/12 flex justify-center items-center gap-8">
              <Menu />
              {user ? <UserMenu /> : <AuthButtons />}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
