// lib/motion.ts
'use client';

import type { Variants } from "framer-motion";

export const easeOutCubic = [0.22, 1, 0.36, 1] as const;

export const fadeUpVariant = (delay = 0): Variants => ({
  hidden: { y: 24, opacity: 0, filter: "blur(6px)" },
  show: {
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: easeOutCubic, delay },
  },
});

export const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  show: {
    opacity: 1,
    transition: { delayChildren: 0.08, staggerChildren: 0.06 },
  },
};

export const item: Variants = {
  hidden: { y: 18, opacity: 0 },
  show: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.45, ease: easeOutCubic },
  },
};