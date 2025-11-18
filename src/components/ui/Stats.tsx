// components/ui/Stats.tsx
'use client';

import { motion } from 'framer-motion';
import { ACCENT_RGB, PRIMARY_RGB } from '@/lib/brand';

type Stat = { label: string; value: string; note?: string };

const stats: Stat[] = [
  {
    label: 'Products Shipped',
    value: '1',
    note: 'Manzanos PopShop — the first step in the ManzanoHQ ecosystem.',
  },
  {
    label: 'Years Designing & Building',
    value: '2+',
    note: 'Focused on polished interfaces, motion, and modern product flows.',
  },
];

type StatsProps = {
  className?: string;
  compact?: boolean;
};

export default function Stats({ className, compact }: StatsProps = {}) {
  const baseClasses = compact
    ? 'grid grid-cols-1 gap-3 sm:gap-3'
    : 'grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4';

  const containerClass = [baseClasses, className ?? ''].join(' ').trim();

  return (
    <div className={containerClass}>
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ y: 14, opacity: 0, filter: 'blur(6px)' }}
          whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          transition={{
            duration: 0.45,
            delay: 0.05 * i,
            ease: [0.22, 1, 0.36, 1],
          }}
          viewport={{ once: true, amount: 0.3 }}
          className={[
            'relative rounded-3xl overflow-hidden isolate',
            'p-4 sm:p-5 backdrop-blur-xl bg-white/5 border border-white/10',
            'flex flex-col gap-1.5',
            'min-h-[140px] sm:min-h-[150px]',
          ].join(' ')}
          style={{
            borderColor: `rgba(${PRIMARY_RGB},0.25)`,
          }}
        >
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 rounded-3xl"
            style={{
              inset: '-1px',
              background:
                'linear-gradient(115deg, transparent 0%, rgba(255,255,255,0.10) 40%, transparent 75%)',
              maskImage: 'linear-gradient(#000,#000)',
              WebkitMaskImage: 'linear-gradient(#000,#000)',
            }}
          />

          <div className="relative z-10 flex flex-col gap-1.5">
            <div className="text-[11px] uppercase tracking-[0.16em] text-white/50">
              {s.label}
            </div>

            <div className="text-2xl sm:text-3xl font-semibold">
              {s.value}
            </div>

            {s.note && (
              <div className="text-xs sm:text-sm text-white/60 leading-relaxed">
                {s.note}
              </div>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  );
}