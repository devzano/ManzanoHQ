// components/site/Beams.tsx
'use client';

import React from "react";
import { ACCENT_RGB, PRIMARY_RGB } from "@/lib/brand";

export default function Beams() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          background:
            "repeating-linear-gradient(70deg, rgba(255,255,255,0.025) 0px, rgba(255,255,255,0.025) 2px, transparent 2px, transparent 8px)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10"
        style={{
          maskImage: "radial-gradient(circle at 30% 30%, black 20%, transparent 60%)",
          WebkitMaskImage: "radial-gradient(circle at 30% 30%, black 20%, transparent 60%)",
          animation: "beamSlide 16s linear infinite",
          background: `linear-gradient(90deg, rgba(${ACCENT_RGB},0.07), rgba(${PRIMARY_RGB},0.07))`,
        }}
      />
    </>
  );
}