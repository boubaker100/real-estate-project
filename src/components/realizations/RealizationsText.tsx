"use client";

import React from "react";
 import { useMediaQuery } from "@/hooks/isMobile";

const RealizationsText = () => {
  const isMobile = useMediaQuery();

  return (
      <div className="z-40 w-screen aspect-video xl:h-[80vh] flex justify-center items-center flex-col absolute top-0 left-0">
      {isMobile ? (
        <h1
          className="text-7xl font-bold"
          style={{ color: "transparent", WebkitTextStroke: "3px black" }}
        >
          Contacts
        </h1>
      ) : (
        <h1
          className="text-9xl font-bold"
          style={{ color: "transparent", WebkitTextStroke: "2px black" }}
        >
          Contacts
        </h1>
      )}
    </div>
  );
};

export default RealizationsText;
