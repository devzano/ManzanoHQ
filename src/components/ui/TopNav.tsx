// components/site/TopNav.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ACCENT_RGB } from '@/lib/brand';

export default function TopNav() {
  const { scrollY } = useScroll();

  // numeric -> numeric
  const bgOpacity = useTransform(scrollY, [0, 80], [0, 1]);
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 0.12]);
  const y = useTransform(scrollY, [0, 40], [0, -6]);

  // numeric -> string CSS with useTransform mapper (instead of `.to`)
  const bgColor = useTransform(bgOpacity, (o) => `rgba(10,10,10,${o})`);
  const borderColor = useTransform(borderOpacity, (o) => `rgba(255,255,255,${o})`);

  return (
    <motion.header
      style={{ y }}
      className="fixed top-0 left-0 right-0 z-50"
      aria-label="Primary"
    >
      <motion.div
        style={{
          backgroundColor: bgColor,
          borderBottomColor: borderColor,
        }}
        className="backdrop-blur-xl border-b will-change-transform"
      >
        <nav className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10 py-3 sm:py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <motion.div
              className="relative h-8 w-8 sm:h-9 sm:w-9 rounded-xl overflow-hidden"
              animate={{
                boxShadow: [
                  `0 0 30px rgba(${ACCENT_RGB},0.25)`,
                  `0 0 60px rgba(${ACCENT_RGB},0.45)`,
                  `0 0 30px rgba(${ACCENT_RGB},0.25)`,
                ],
              }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
              style={{ outline: `1px solid rgba(${ACCENT_RGB},0.5)` }}
            >
              <Image
                src="/images/logo/logoMain.png"
                alt="ManzanoHQ icon"
                fill
                sizes="(max-width: 640px) 32px, 36px"
                priority
              />
            </motion.div>
          </Link>

          {/* <div className="hidden sm:flex items-center gap-4 text-sm">
            <Link href="#products" className="text-white/80 hover:text-white transition">Products</Link>
            <Link href="#pillars" className="text-white/80 hover:text-white transition">What we do</Link>
            <Link href="#showcase" className="text-white/80 hover:text-white transition">Showcase</Link>
            <a
              href="mailto:rmanzano.se@gmail.com"
              className="rounded-xl border px-3 py-1.5 bg-white/5 hover:bg-white/10 transition"
              style={{ borderColor: `rgba(${ACCENT_RGB},0.35)` }}
            >
              Contact
            </a>
          </div> */}
        </nav>
      </motion.div>
    </motion.header>
  );
}