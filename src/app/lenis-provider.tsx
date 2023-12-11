"use client";
import Lenis from "@studio-freight/lenis";
import Script from "next/script";
import { Children, ReactNode, createContext, useEffect } from "react";

export const LenisContext = createContext<Lenis | null>(null);

export const LenisProvider = ({ children }: { children: ReactNode }) => {
  const lenisInstance = new Lenis();

  useEffect(() => {
    function raf(time: any) {
      lenisInstance.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);
  return (
    <LenisContext.Provider value={lenisInstance}>
      {children}
    </LenisContext.Provider>
  );
};
