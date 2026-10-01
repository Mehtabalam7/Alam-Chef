import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Year professional culinary career began; 2026 → 29 years. */
const CAREER_START_YEAR = 1997

export function getYearsOfExperience(now = new Date()) {
  return Math.max(0, now.getFullYear() - CAREER_START_YEAR)
}
