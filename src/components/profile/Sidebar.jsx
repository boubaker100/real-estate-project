"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, PlusSquare, User, CreditCard, Menu, X } from "lucide-react";
import { useState } from "react";
import { useMediaQuery } from "@/hooks/isMobile";
import { useScroll } from "@/hooks/isScrolled";
import SidebarContent from "./SideBarContent";



export default function Sidebar() {
  const pathname = usePathname();
  const isMobile = useMediaQuery();      // true إذا الشاشة صغيرة
  const [open, setOpen] = useState(false);
  const isScrolled = useScroll();
  


  

  return (
    <>
      {/* ====== شريط علوي للهاتف ====== */}
      {isMobile && (
        <div className={"fixed left-0 right-0 z-40 flex items-center justify-between bg-primary p-8 text-white shadow-2xl"
        +(isScrolled ? " top-16 " : " top-20")}>
          <h1 className="font-bold text-xl">Dashboard</h1>
          <button onClick={() => setOpen(true)}>
            <Menu size={28} />
          </button>
        </div>
      )}

      {/* ====== Sidebar Desktop ====== */}
      {!isMobile && (
        <aside className="w-64 bg-primary  rounded-tr-lg rounded-br-lg text-white shadow-lg p-6 flex flex-col min-h-screen">
          <SidebarContent />
        </aside>
      )}

    
      {isMobile && open && (
        <>
          {/* خلفية داكنة لإغلاق القائمة عند النقر */}
          <div
            onClick={() => setOpen(false)}
            className="fixed inset-0 bg-black/50 z-40"
          ></div>

          <aside className="fixed top-0 left-0 z-50 w-64 h-full bg-primary text-white shadow-lg p-6 flex flex-col">
            <SidebarContent />
          </aside>
        </>
      )}
    </>
  );
}
