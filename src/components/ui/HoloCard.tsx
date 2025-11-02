// components/ui/HoloCard.tsx
'use client';

import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ACCENT_RGB, PRIMARY_RGB } from '@/lib/brand';
import * as React from 'react';

type Props = {
  title: string;
  desc: string;
  icon: React.ReactNode;
  delay?: number;
  href?: string;
  className?: string;
  badge?: string;
  eyebrow?: string;
  variant?: 'default' | 'link';
};

export default function HoloCard({
  title,
  desc,
  icon,
  delay = 0,
  href,
  className,
  badge,
  eyebrow,
  variant = 'default',
}: Props) {
  const Container: any = href ? motion.a : motion.div;

  // 3D hover tilt
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const tX = useSpring(rx, { stiffness: 150, damping: 12 });
  const tY = useSpring(ry, { stiffness: 150, damping: 12 });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = e.currentTarget as HTMLDivElement;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    rx.set((py - 0.5) * -6);
    ry.set((px - 0.5) * 6);
  }
  function onLeave() { rx.set(0); ry.set(0); }

  // Shine sweep
  const shineX = useTransform(ry, [-6, 6], ["0%", "100%"]);

  return (
    <Container
      href={href}
      target={href ? '_blank' : undefined}
      rel={href ? 'noreferrer' : undefined}
      initial={{ y: 24, opacity: 0, filter: 'blur(6px)' }}
      whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ type: 'spring', stiffness: 70, damping: 14, delay }}
      whileHover={{ scale: 1.02, boxShadow: `0 0 40px rgba(${ACCENT_RGB},0.25)` }}
      className={[
        "relative rounded-3xl p-6 flex flex-col gap-3 backdrop-blur-xl bg-white/5 border border-white/10 focus:outline-none focus-visible:ring-2",
        "focus-visible:ring-white/40",
        href ? "cursor-pointer" : "",
        className ?? ""
      ].join(" ").trim()}
      style={{ borderColor: `rgba(${PRIMARY_RGB},0.25)`, rotateX: tX as any, rotateY: tY as any }}
      aria-label={href ? title : undefined}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {/* Shine */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-3xl"
        style={{
          background:
            `linear-gradient(115deg, transparent 0%, rgba(255,255,255,0.12) 40%, transparent 70%)`,
          maskImage: "linear-gradient(#000,#000)",
          WebkitMaskImage: "linear-gradient(#000,#000)",
          translateX: shineX
        }}
      />

      {/* Eyebrow + Badge */}
      <div className="flex items-center gap-2 min-h-[24px]">
        {eyebrow && <span className="text-xs uppercase tracking-wider text-white/50">{eyebrow}</span>}
        {badge && (
          <span
            className="text-xs px-2 py-0.5 rounded-full bg-white/5 border"
            style={{ borderColor: `rgba(${ACCENT_RGB},0.35)` }}
          >
            {badge}
          </span>
        )}
      </div>

      <div
        className="w-12 h-12 rounded-2xl bg-white/5 border flex items-center justify-center"
        style={{
          borderColor: `rgba(${ACCENT_RGB},0.45)`,
          boxShadow: `0 0 40px rgba(${ACCENT_RGB},0.25)`,
        }}
        aria-hidden
      >
        {icon}
      </div>

      <h3 className="text-xl font-semibold tracking-wide">{title}</h3>
      <p className="text-white/70 leading-relaxed">{desc}</p>

      {variant === 'link' && href && (
        <div className="inline-flex items-center gap-2 text-white/80 mt-2">
          <span className="text-sm font-medium">Learn more</span>
          <span aria-hidden>→</span>
        </div>
      )}
    </Container>
  );
}
