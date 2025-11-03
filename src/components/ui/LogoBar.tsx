// components/ui/LogosBar.tsx
'use client';

import Image from 'next/image';
import AppImages from '@/constants/images';
import { ACCENT_RGB } from '@/lib/brand';

const logos = [
  { name: 'Next.js',   src: AppImages.nextJS },
  { name: 'Expo',      src: AppImages.expo },
  { name: 'Stripe',    src: AppImages.stripe },
  { name: 'Supabase',  src: AppImages.supabase },
  { name: 'Xcode',     src: AppImages.xcode },
  { name: 'VS Code',   src: AppImages.vsCode },
] as const;

export default function LogosBar() {
  const row = [...logos, ...logos];

  return (
    <div
      className="group relative overflow-hidden rounded-2xl border bg-white/5 backdrop-blur-xl"
      style={{
        borderColor: 'rgba(255,255,255,0.08)',
        boxShadow: `0 0 0 1px rgba(255,255,255,0.03), inset 0 0 28px rgba(${ACCENT_RGB},0.08)`,
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 animate-logos-shine"
        style={{
          maskImage: 'linear-gradient(transparent, black 20%, black 80%, transparent)',
          WebkitMaskImage: 'linear-gradient(transparent, black 20%, black 80%, transparent)',
          background:
            'linear-gradient(100deg, transparent 0%, rgba(255,255,255,0.06) 35%, transparent 65%)',
          transform: 'translateX(-40%)',
        }}
      />

      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-linear-to-r from-black/40 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-linear-to-l from-black/40 to-transparent" />

      <div className="flex items-center gap-8 sm:gap-10 px-5 sm:px-6 py-3 sm:py-4 will-change-transform animate-marquee group-hover:[animation-play-state:paused]">
        {row.map((l, i) => (
          <div key={`${l.name}-${i}`} className="relative">
            <div
              className="rounded-xl border bg-white/5 px-3 sm:px-4 py-2 sm:py-2.5 transition hover:bg-white/10 hover:shadow-2xl hover:scale-[1.04]"
              style={{
                borderColor: 'rgba(255,255,255,0.10)',
                boxShadow: `0 0 0 1px rgba(255,255,255,0.02)`,
                minWidth: '62px',
              }}
            >
              <Image
                src={l.src}
                alt={l.name}
                className="h-6 sm:h-8 w-auto object-contain"
                sizes="(max-width: 640px) 25vw, (max-width: 1024px) 15vw, 10vw"
                priority={i === 0}
              />
            </div>
            <div
              aria-hidden
              className="absolute -inset-px rounded-xl opacity-0 transition-opacity group-hover:opacity-100 pointer-events-none"
              style={{ boxShadow: `0 0 22px rgba(${ACCENT_RGB},0.10)` }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}