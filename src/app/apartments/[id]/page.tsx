"use client";

import React, { useEffect, useState } from "react";
import { propertiesData } from "@/data";
import { Property } from "@/types";

import HeroImage from "@/components/flats/FlatSinglePage/HeroImage";
import FlatInfoCard from "@/components/flats/FlatSinglePage/FlatInfoCard";
import FlatDescription from "@/components/flats/FlatSinglePage/FlatDescription";
import MapComponent from "@/components/Map/MapComponent";
import PropertyTimeline from "@/components/flats/FlatSinglePage/PropertyTimeline";
import PropertyGallery from "@/components/flats/FlatSinglePage/PropertyGallery";
import ContactForm from "@/components/flats/FlatSinglePage/ContactForm";

type FlatProps = { params: Promise<{ id: string }> };

export default function FlatSinglePage({ params }: FlatProps) {
  const [flatData, setFlatData] = useState<Property | null>(null);

  useEffect(() => {
    (async () => {
      const { id } = await params;
      const flat = propertiesData.find(item => item.id.toString() === id);
      setFlatData(flat || null);
    })();
  }, [params]);

  if (!flatData) {
    return (
      <div className="flex relative top-12 justify-center items-center h-64">
        <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="w-screen">
      <HeroImage url={flatData.ImageUrl} />

      <div className="flex flex-col lg:flex-row lg:justify-center lg:gap-6">
        <FlatInfoCard flat={flatData} />
        {flatData.coordinates && (
          <div className="w-5/6 sm:w-2/3 md:w-1/2 ">
            <MapComponent flats={[flatData]} center={flatData.coordinates as [number, number]} />
          </div>
        )}
      </div>

      <FlatDescription text={flatData.description} />
      <PropertyTimeline />
      <PropertyGallery />
      <ContactForm />
    </div>
  );
}
