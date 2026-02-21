// components/ui/TopNav.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import React, { Suspense, useEffect, useMemo, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { usePathname, useSearchParams } from 'next/navigation';

import { ACCENT_RGB } from '@/lib/brand';
import AppImages from '@/constants/images';

type TopNavProps = {
  /** Force-hide the right side actions (Products + Contact) */
  hideActions?: boolean;
};

// This MUST be wrapped in <Suspense> anywhere it renders.
function LegalModalDetector({ onChange }: { onChange: (v: boolean) => void }) {
  const searchParams = useSearchParams();

  const isLegalModal = useMemo(() => {
    const modal = (searchParams?.get('modal') ?? '').toLowerCase();
    return (
      modal === 'privacy' ||
      modal === 'terms' ||
      modal === 'legal' ||
      searchParams?.get('legal') === '1'
    );
  }, [searchParams]);

  useEffect(() => {
    onChange(isLegalModal);
  }, [isLegalModal, onChange]);

  return null;
}

export default function TopNav({ hideActions }: TopNavProps) {
  const { scrollY } = useScroll();

  const pathname = usePathname();
  const [isLegalModal, setIsLegalModal] = useState(false);

  // numeric -> numeric
  const borderOpacity = useTransform(scrollY, [0, 80], [0, 0.12]);
  const y = useTransform(scrollY, [0, 40], [0, -6]);

  // numeric -> string CSS with useTransform mapper (instead of `.to`)
  const borderColor = useTransform(borderOpacity, (o) => `rgba(255,255,255,${o})`);

  // ---- Legal detection (pages + modals) ----
  const isLegalPath =
    pathname === '/privacy' ||
    pathname === '/terms' ||
    pathname.startsWith('/legal');

  const shouldHideActions = hideActions ?? (isLegalPath || isLegalModal);

  return (
    <motion.header style={{ y }} className="fixed top-0 left-0 right-0 z-50" aria-label="Primary">
      {/* Query-param detection is isolated behind Suspense to satisfy Next */}
      <Suspense fallback={null}>
        <LegalModalDetector onChange={setIsLegalModal} />
      </Suspense>

      <motion.div
        style={{ borderBottomColor: borderColor }}
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
                src={AppImages.logoInvertAlpha}
                alt="ManzanoHQ icon"
                fill
                sizes="(max-width: 640px) 32px, 36px"
                priority
              />
            </motion.div>
          </Link>

          {!shouldHideActions && (
            <div className="hidden sm:flex items-center gap-4 text-sm">
              <Link href="#products" className="text-white/80 hover:text-white transition">
                Products
              </Link>

              <a
                href="https://rubenmanzano.com"
                className="rounded-xl border px-3 py-1.5 bg-white/5 hover:bg-white/10 transition"
                style={{ borderColor: `rgba(${ACCENT_RGB},0.35)` }}
              >
                Contact
              </a>
            </div>
          )}
        </nav>
      </motion.div>
    </motion.header>
  );
}
