import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Merges Tailwind CSS classes with clsx and tailwind-merge
 * This utility is essential for building flexible, reusable components
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
