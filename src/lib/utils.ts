import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { hospitalityData } from "@/data/hospitality";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const propertyTypes = [...new Set(hospitalityData.map(d => d.propertyType))]
export const propertyYears = [...new Set(hospitalityData.map(d => d.duration))]
