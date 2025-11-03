// tailwind.config.ts

import type { Config } from 'tailwindcss';
// import { fontFamily } from 'tailwindcss/defaultTheme';
// import nativewind from 'nativewind/preset';


const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  presets: [],
  theme: {
    extend: {
      colors: {
        neon: '#20F8FF',
        ink: '#0B0E14',
        carbon: '#111318',
      },
      fontFamily: {
        sans: [
          'var(--font-sans)',
          // ...fontFamily.sans,
        ],
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