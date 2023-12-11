"use client";


import { Children, ReactNode, createContext, useContext, useEffect } from "react";

import { ReactLenis } from "@studio-freight/react-lenis";

export const LenisProvider = ({ children }: { children: ReactNode }) => {
  const lenisInstance = null;



  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.5, smoothTouch: true }}>
      {children}
      </ReactLenis>
 
  );
};
