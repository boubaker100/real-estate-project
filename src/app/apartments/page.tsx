"use client";
import { useState } from "react";
import FlatsList from "@/components/listings/FlatsList";
import CustomPagination from "@/components/ui/CustomPagination";
import { LatLngExpression } from "leaflet";
import FilterForm from "@/components/flats/Filter/FilterForm";
import { applyFilters } from "@/utils/filterLogic";
import { Filters } from "@/types";
import { citiesData, propertiesData } from "@/data";
import Image from "next/image";
import FlatsHomeText from "@/components/flats/FlatsHomeText";
import dynamic from "next/dynamic";

const MapComponent = dynamic(() => import("@/components/Map/MapComponent"), {
  ssr: false,
});

export default function Home() {
  const [filteredData, setFilteredData] = useState(propertiesData);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // ✅ مركز افتراضي (الجزائر العاصمة)
  const defaultCenter: LatLngExpression = [36.7538, 3.0588];
  const [mapCenter, setMapCenter] = useState<LatLngExpression>([...defaultCenter]);

  const handleFilter = (filters: Filters) => {
    // فلترة العقارات
    const filtered = applyFilters(filters).filter(item => item.ImageUrl);
    setFilteredData(filtered);
    setCurrentPage(1);

    console.log("location:", filters.location);

    // ✅ تحريك الخريطة إذا تم اختيار مدينة
    if (filters.location) {
      const selectedCity = citiesData.find(
        city => city.name.toLowerCase() === filters.location.toLowerCase()
      );
      if (selectedCity) {
      
        setMapCenter([selectedCity.latitude, selectedCity.longitude]);
      } else {
        setMapCenter([...defaultCenter]);
      }
    } else {
      setMapCenter([...defaultCenter]);
    }
  };

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentData = filteredData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="w-screen h-full">
      <Image
        src="/assets/homepage/home_photo.webp"
        alt="home photo"
        width={1920}
        height={1080}
        className="w-screen h-5/6 xl:h-[80vh] object-cover z-0"
      />

      <div className="absolute top-0 left-0 w-full flex flex-col items-center justify-center z-0">
        <FlatsHomeText />
      </div>

      <div className="w-5/6 md:w-1/2 mx-auto mt-40 sm:mt-60 z-10">
        <FilterForm onFilter={handleFilter} />
      </div>

      <div className="z-10 w-5/6 mx-auto mt-10">
        {/*   لإعادة تهيئة الخريطة عند تغير المركز */}
        <MapComponent
          flats={filteredData}
          center={mapCenter}
          key={Array.isArray(mapCenter) ? mapCenter.join(",") : String(mapCenter)}
        />
      </div>

      <FlatsList data={currentData} />

      {totalPages > 1 && (
        <CustomPagination
          totalPages={totalPages}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      )}
    </div>
  );
}
