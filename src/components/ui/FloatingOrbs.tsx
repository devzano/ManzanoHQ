// components/site/FloatingOrbs.tsx
'use client';

import { motion } from "framer-motion";
import { ACCENT_RGB } from "@/lib/brand";

export default function FloatingOrbs() {
  const orbs = [
    { s: 120, o: 0.18, x: "8%", y: "20%", d: 10 },
    { s: 180, o: 0.16, x: "78%", y: "18%", d: 12 },
    { s: 140, o: 0.14, x: "50%", y: "82%", d: 14 },
    { s: 90,  o: 0.16, x: "18%", y: "70%", d: 11 },
  ];
  return (
    <>
      {orbs.map((o, i) => (
        <motion.div
          key={i}
          aria-hidden
          className="pointer-events-none fixed -z-10 rounded-full"
          style={{
            width: o.s, height: o.s, left: o.x, top: o.y,
            background: `radial-gradient(circle at 30% 30%, rgba(${ACCENT_RGB},${o.o}), transparent 60%)`,
            filter: "blur(20px)"
          }}
          animate={{ y: [0, -10, 0, 8, 0] }}
          transition={{ repeat: Infinity, duration: o.d, ease: "easeInOut", delay: i * 0.6 }}
        />
      ))}
    </>
  );
}
