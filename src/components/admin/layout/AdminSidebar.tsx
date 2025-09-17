"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Users, Home, Flag, CreditCard, Settings } from "lucide-react";

const items = [
  { name: "Dashboard", href: "/admin", icon: LayoutDashboard },
  { name: "Users", href: "/admin/users", icon: Users },
  { name: "Listings", href: "/admin/listings", icon: Home },
  { name: "Moderation", href: "/admin/moderation", icon: Flag },
  { name: "Payments", href: "/admin/payments", icon: CreditCard },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  return (
    <aside className="w-72 bg-slate-800 border-r rounded-tr-lg">
      <div className="p-6 border-b">
        <h2 className="text-lg text-white font-bold">Admin Panel</h2>
      </div>
      <nav className="p-4 space-y-1">
        {items.map(i => {
          const Icon = i.icon;
          const active = pathname === i.href;
          return (
            <Link
              key={i.name}
              href={i.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg
                ${active ? "bg-blue-800 text-white" : "text-white hover:bg-slate-500 "}`}>
              <Icon size={18} />
              <span>{i.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
