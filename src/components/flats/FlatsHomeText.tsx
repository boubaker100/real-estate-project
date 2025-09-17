"use client";

import { useMediaQuery } from "@/hooks/isMobile";
import React from "react";

const FlatsHomeText = () => {
  const isMobile = useMediaQuery();

  return (
    <div className="z-40 w-screen aspect-video xl:h-[80vh] flex justify-center items-center flex-col absolute top-0 left-0">
      {isMobile ? (
        <h1
          className="text-7xl font-bold"
          style={{ color: "transparent", WebkitTextStroke: "3px black" }}
        >
          Appartment
        </h1>
      ) : (
        <h1
          className="text-9xl font-bold"
          style={{ color: "transparent", WebkitTextStroke: "2px black" }}
        >
          Appartment
        </h1>
      )}
    </div>
  );
};

export default FlatsHomeText;



 



