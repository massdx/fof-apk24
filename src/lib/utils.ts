import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import Lenis from "@studio-freight/lenis";
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function scrollTo({target} :{target:string }) {
  const lenis = new Lenis();
  lenis.scrollTo(target);
}