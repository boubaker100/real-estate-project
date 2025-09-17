"use client";

import React from "react";
import Image from "next/image";
import ContactBg from "/public/assets/homepage/contact_background.webp";
import ContactBgMobile from "/public/assets/homepage/contact_background_mobile.webp";
import { useMediaQuery } from "@/hooks/isMobile";

const ImagesBackgroundContactSection = () => {
  const isMobile = useMediaQuery();

  return (
    <>
      {isMobile ? (
        <Image
          src={ContactBgMobile}
          alt="Contact Background Fancy Building"
          width={1200}
          height={1000}
          className="z-0 w-full h-full"
        />
      ) : (
        <Image
          src={ContactBg}
          alt="Contact Background Fancy Building"
          width={1200}
          height={1000}
          className="z-0 w-full h-full"
        />
      )}
    </>
  );
};

export default ImagesBackgroundContactSection;
