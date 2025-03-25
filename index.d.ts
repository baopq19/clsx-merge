/**
 * Utility function that combines clsx and tailwind-merge
 * First processes conditional classes with clsx, then merges Tailwind classes with twMerge
 * 
 * @param classes - Arguments to be processed by clsx and then twMerge
 * @returns The merged class string
 */
declare function cn(...classes: any[]): string;

export default cn; 