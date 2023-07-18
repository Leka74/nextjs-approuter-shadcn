import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getTime = () => {
  return new Promise((resolve) => {
    resolve(new Date().toLocaleString());
  });
}
