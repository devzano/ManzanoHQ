// src/lib/fonts.ts
import localFont from "next/font/local";

/** Komigo (single file) */
export const komigo = localFont({
  src: [{ path: "../assets/fonts/komigo/komigo3D.ttf", weight: "400", style: "normal" }],
  variable: "--font-komigo",
  display: "swap",
  preload: true,
});

/** Lato (single file) */
export const lato = localFont({
  src: [{ path: "../assets/fonts/lato/lato.ttf", weight: "400", style: "normal" }],
  variable: "--font-lato",
  display: "swap",
  preload: true,
});

/** Momo (single file) */
export const momo = localFont({
  src: [{ path: "../assets/fonts/momo/momo.ttf", weight: "400", style: "normal" }],
  variable: "--font-momo",
  display: "swap",
  preload: true,
});

/** Oups variants as separate families */
export const oups = localFont({
  src: [{ path: "../assets/fonts/oups/oups.otf", weight: "400", style: "normal" }],
  variable: "--font-oups",
  display: "swap",
  preload: true,
});

export const oupsOutline = localFont({
  src: [{ path: "../assets/fonts/oups/oups_outline.otf", weight: "400", style: "normal" }],
  variable: "--font-oups-outline",
  display: "swap",
  preload: true,
});

export const oupsClean = localFont({
  src: [{ path: "../assets/fonts/oups/oups_clean.otf", weight: "400", style: "normal" }],
  variable: "--font-oups-clean",
  display: "swap",
  preload: true,
});

/** Ka Blam variants as separate families */
export const kaBlam = localFont({
  src: [{ path: "../assets/fonts/ka_blam/ka_blam.ttf", weight: "400", style: "normal" }],
  variable: "--font-kablam",
  display: "swap",
  preload: true,
});

export const kaBlamFill = localFont({
  src: [{ path: "../assets/fonts/ka_blam/ka_blam_fill.ttf", weight: "400", style: "normal" }],
  variable: "--font-kablam-fill",
  display: "swap",
  preload: true,
});