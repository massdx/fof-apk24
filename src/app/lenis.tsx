"use client";
import Lenis from "@studio-freight/lenis";
import Script from "next/script";
import { Children, ReactNode, useEffect } from "react";


const LenisScroll = () => {

   
    useEffect(() => {
        const lenis = new Lenis();
      
        lenis.on("scroll", (e: any) => {
         
        });
      
        function raf(time: any) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
      
        requestAnimationFrame(raf);
      }, []);
  return <>
   
  </>;
};

export default LenisScroll;
