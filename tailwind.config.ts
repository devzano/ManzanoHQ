// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    // keep these if you also have non-src folders:
    './app/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        neon: '#20F8FF',
        ink: '#0B0E14',
        carbon: '#111318',
      },
      fontFamily: {
        komigo: ["var(--font-komigo)", "ui-sans-serif", "system-ui"],
        momo: ["var(--font-momo)", "ui-sans-serif", "system-ui"],
        lato: ["var(--font-lato)", "ui-sans-serif", "system-ui"],

        // Treat visual variants as separate families:
        oups: ["var(--font-oups)", "ui-sans-serif", "system-ui"],
        'oups-outline': ["var(--font-oups-outline)", "ui-sans-serif", "system-ui"],
        'oups-clean': ["var(--font-oups-clean)", "ui-sans-serif", "system-ui"],

        kablam: ["var(--font-kablam)", "ui-sans-serif", "system-ui"],
        'kablam-fill': ["var(--font-kablam-fill)", "ui-sans-serif", "system-ui"],

        // optional sans stack if you use it
        // sans: ['var(--font-sans)'],
      },
      boxShadow: {
        glow: '0 0 40px rgba(32, 248, 255, 0.35)',
        innerglow: 'inset 0 0 40px rgba(32, 248, 255, 0.15)'
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at center, rgba(32,248,255,0.25) 0.5px, transparent 1px)',
      },
    },
  },
  plugins: [],
};

export default config;