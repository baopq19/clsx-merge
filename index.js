// clsx-merge: Combine clsx and tailwind-merge utilities
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Utility function that combines clsx and tailwind-merge
 * First processes conditional classes with clsx, then merges Tailwind classes with twMerge
 * 
 * @param {...any} classes - Arguments to be processed by clsx and then twMerge
 * @returns {string} - The merged class string
 */
function cn(...classes) {
  return twMerge(clsx(...classes));
}

export default cn; 