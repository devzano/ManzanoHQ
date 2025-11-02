// components/site/TiltCard.tsx
'use client';

import React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import clsx from "clsx";

export default function TiltCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const tX = useSpring(rx, { stiffness: 120, damping: 12 });
  const tY = useSpring(ry, { stiffness: 120, damping: 12 });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = e.currentTarget as HTMLDivElement;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    rx.set((py - 0.5) * -10);
    ry.set((px - 0.5) * 10);
  }
  function onLeave() {
    rx.set(0);
    ry.set(0);
  }

  return (
    <motion.div
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{ rotateX: tX as any, rotateY: tY as any }}
      className={clsx(className)}
    >
      {children}
    </motion.div>
  );
}