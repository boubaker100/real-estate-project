"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { cities } from "@/utils/Constants";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = () => {
    if (query.trim() !== "") {
      router.push(`/apartments?city=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className="w-98 flex items-center justify-center">
      <div className="relative w-full ">
        <input
          type="text"
          placeholder="Enter city name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          list="cities"
          className="outline-none px-3 w-96 h-20 rounded pr-20"
        />

       
        <button
          onClick={handleSearch}
          className="absolute right-0 top-0 h-full px-6 border-l border-gray-300 flex items-center justify-center rounded-r"
        >
          <Search size={20} className="text-gray-600" />
        </button>
      </div>

      <datalist id="cities">
        {cities.map((city, i) => (
          <option key={i} value={city.value} />
        ))}
      </datalist>
    </div>
  );
}
    
