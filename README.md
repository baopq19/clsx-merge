# clsx-merge

A lightweight utility that combines [clsx](https://www.npmjs.com/package/clsx) and [tailwind-merge](https://www.npmjs.com/package/tailwind-merge) for efficient Tailwind CSS class handling.

## What It Does

This package combines two powerful utilities:

1. **clsx**: Processes conditional class expressions and joins them
2. **tailwind-merge**: Intelligently merges Tailwind CSS classes, resolving conflicts

## Installation

```bash
npm install clsx-merge
# or
yarn add clsx-merge
# or
pnpm add clsx-merge
```

## Usage

```js
import cn from 'clsx-merge'

// Basic usage
cn('px-2 py-1 bg-red hover:bg-dark-red', 'p-3 bg-[#B91C1C]');
// → 'hover:bg-dark-red p-3 bg-[#B91C1C]'

// With conditional classes
cn(
  'text-white', 
  isActive && 'font-bold', 
  { 'bg-blue-500': isPrimary, 'bg-gray-500': !isPrimary }
);
// → dynamically merges and resolves Tailwind classes based on conditions

// Arrays are also supported
cn(['flex', 'flex-col'], [isVisible && 'opacity-100']);
```

The result is a single utility that lets you write conditional Tailwind classes without style conflicts.

## Why Use It?

- I founded that peoples combine these 2 all the time, so I created this one for convinient

## License

MIT 