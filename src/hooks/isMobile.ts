"use client";
import { useState, useEffect } from "react";

export const useMediaQuery = () => {
    const [isMobile, setIsMobile] = useState(false);

    const handleScreenSize = () => {
        window.innerWidth > 768 ? setIsMobile(false) : setIsMobile(true)
    }

    useEffect(()=>{
        handleScreenSize();
        window.addEventListener('resize', handleScreenSize);
        return () => {
            window.removeEventListener('resize', handleScreenSize)
        }
    },[])

    return isMobile
}