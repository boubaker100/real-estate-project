"use client";
import { useMediaQuery } from "@/hooks/isMobile";
import SearchBox from "./SearchBox/SearchBox";

const HomeText = () => {
  const isMobile = useMediaQuery();

  return (
   <div className="absolute top-auto sm:top-auto md:top-24 sm:translate-y-0 translate-y-[-10%] bottom-0 z-40 w-screen aspect-video flex justify-center items-start flex-col  px-10 text-center">
  {isMobile ? (
    <h1 className="mt-4 text-4xl sm:text-5xl gap-5 font-bold leading-[60px] text-white drop-shadow-lg">
    
     
       buy, or rent houses.
    </h1>
  ) : (
    <h1 className="text-6xl font-bold text-white leading-[80px] drop-shadow-lg">
 
        buy, or rent house.
    </h1>
  )}
  <div className="mt-6 text-white text-lg drop-shadow-lg"></div>
    <SearchBox />
  </div>


  );
};

export default HomeText;
