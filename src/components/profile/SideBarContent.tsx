import { usePathname } from "next/navigation";
import Link from "next/link";
import { LayoutDashboard, PlusSquare, User, CreditCard, Menu, X } from "lucide-react";
import { useState } from "react";
import { useMediaQuery } from "@/hooks/isMobile";



const menuItems = [
  { name: "Status", href: "/profile", icon: LayoutDashboard },
  { name: "Add Property", href: "/profile/add-property", icon: PlusSquare },
  { name: "Edit Profile", href: "/profile/edit-profile", icon: User },
  { name: "Plans", href: "/profile/plans", icon: CreditCard },
];

export default function  SidebarContent(){
  const pathname = usePathname();
   
  const [open, setOpen] = useState(false);
  
  const isMobile= useMediaQuery(); 

return(
    <>
      <div className="relative border-b-2 w-full pl-5 pb-2 mb-20 py-8 flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Dashboard</h2>
        {isMobile && (
          <button onClick={() => setOpen(false)} className="text-white">
            <X size={24} />
          </button>
        )}
      </div>

      <ul className="space-y-2 flex-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const active = pathname === item.href;
          return (
            <li key={item.name}>
              <Link
                href={item.href}
                onClick={() => isMobile && setOpen(false)}
                className={`flex items-center gap-3 py-3 px-4 rounded-lg font-medium transition-colors duration-200
                  ${
                    active
                      ? "bg-blue-600 text-white"
                      : "text-gray-300 hover:bg-blue-600 hover:text-white"
                  }`}
              >
                <Icon size={20} />
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="mt-auto text-sm text-gray-400 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Real Estate App
      </div>
    </>
)
}