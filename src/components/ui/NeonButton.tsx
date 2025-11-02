// components/ui/NeonButton.tsx
'use client';

import { motion } from 'framer-motion';
import { ACCENT_RGB } from '@/lib/brand';

type Props = {
  title: string;
  href?: string;
  onClick?: () => void;
  className?: string;
};

export default function NeonButton({ title, href, onClick, className }: Props) {
  const Cmp: any = href ? motion.a : motion.button;

  return (
    <Cmp
      href={href}
      onClick={onClick}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.98 }}
      className={
        `relative inline-flex items-center justify-center px-6 py-3 rounded-2xl
         border border-white/10 bg-white/5 text-white font-semibold tracking-wide
         overflow-hidden transition hover:bg-white/10 ${className ?? ''}`.trim()
      }
      style={{
        boxShadow: `0 0 0 1px rgba(${ACCENT_RGB},0.35), inset 0 0 28px rgba(${ACCENT_RGB},0.20)`,
      }}
    >
      {/* subtle conic glow */}
      <span
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          background: `conic-gradient(from 0deg, rgba(${ACCENT_RGB},0), rgba(${ACCENT_RGB},0.6), rgba(${ACCENT_RGB},0))`,
        }}
      />
      {title}
    </Cmp>
  );
}