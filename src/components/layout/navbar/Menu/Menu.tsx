import { usePathname } from "next/navigation";
import Link from "next/link";
import { MenuItems } from "@/data";

const Menu = () => {
  const pathname = usePathname();

  return (
    <ul className="flex gap-2 lg:gap-6 items-center flex-col md:flex-row">
      {MenuItems.map((item) => {
        const isActive = pathname === item.site_url; 

        return (
          <li key={item.site_name} className="list-none">
            <Link
              href={item.site_url}
              className={`
                block px-6  sm:px-8 sm:py-2 rounded-full text-lg sm:text-xl font-medium transition-all duration-300
                ${isActive 
                  ? "bg-gradient-to-r from-[#008EF4] to-[#005BB5] text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gradient-to-r hover:from-blue-100 hover:to-blue-200 hover:text-gray-900"}
              `}
            >
              {item.site_name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
