// components/ui/DynamicMeshBackground.tsx
'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ACCENT_RGB } from '@/lib/brand';

type MeshConfig = {
  background: string;
  primary: string;
  secondary: string;
};

const MESH_PRESETS: MeshConfig[] = [
  {
    background: `
      radial-gradient(1200px 800px at 8% 12%, rgba(${ACCENT_RGB},0.16), transparent 35%),
      radial-gradient(900px 600px at 92% 18%, rgba(${ACCENT_RGB},0.12), transparent 40%),
      radial-gradient(700px 500px at 50% 92%, rgba(59,130,246,0.14), transparent 45%),
      linear-gradient(180deg, #020617 0%, #020617 50%, #020617 100%)
    `,
    primary: 'rgba(56,189,248,1)',  // cyan
    secondary: 'rgba(59,130,246,1)', // blue
  },
  {
    background: `
      radial-gradient(1100px 700px at 10% 10%, rgba(34,211,238,0.20), transparent 36%),
      radial-gradient(900px 650px at 85% 20%, rgba(56,189,248,0.16), transparent 42%),
      radial-gradient(800px 550px at 40% 90%, rgba(45,212,191,0.18), transparent 48%),
      linear-gradient(180deg, #020617 0%, #020617 40%, #020617 100%)
    `,
    primary: 'rgba(34,211,238,1)',   // teal
    secondary: 'rgba(45,212,191,1)', // teal/green
  },
  {
    background: `
      radial-gradient(1200px 800px at 12% 8%, rgba(168,85,247,0.22), transparent 36%),
      radial-gradient(900px 600px at 88% 18%, rgba(236,72,153,0.18), transparent 40%),
      radial-gradient(700px 500px at 50% 90%, rgba(59,130,246,0.16), transparent 46%),
      linear-gradient(180deg, #020617 0%, #020617 55%, #020617 100%)
    `,
    primary: 'rgba(168,85,247,1)',   // purple
    secondary: 'rgba(236,72,153,1)', // magenta
  },
  {
    background: `
      radial-gradient(1200px 800px at 5% 15%, rgba(59,130,246,0.22), transparent 35%),
      radial-gradient(900px 600px at 95% 20%, rgba(79,70,229,0.18), transparent 42%),
      radial-gradient(700px 500px at 50% 90%, rgba(37,99,235,0.18), transparent 48%),
      linear-gradient(180deg, #020617 0%, #020617 60%, #020617 100%)
    `,
    primary: 'rgba(59,130,246,1)',   // blue
    secondary: 'rgba(79,70,229,1)',  // indigo
  },
];

export default function DynamicMeshBackground() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * MESH_PRESETS.length);
    setIndex(randomIndex);
  }, []);

  useEffect(() => {
    if (typeof document === 'undefined') return;
    const { primary, secondary } = MESH_PRESETS[index];

    const root = document.documentElement;
    root.style.setProperty('--mesh-primary', primary);
    root.style.setProperty('--mesh-secondary', secondary);
  }, [index]);

  const { background } = MESH_PRESETS[index];

  return (
    <>
      {/* Main mesh gradient */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{ background }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      />

      {/* Soft grid / noise layer */}
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 opacity-60"
        style={{
          backgroundImage:
            'radial-gradient(rgba(148,163,184,0.18) 1px, transparent 1px)',
          backgroundSize: '24px 24px',
          mixBlendMode: 'screen',
        }}
      />
    </>
  );
}
