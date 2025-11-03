// components/ui/Stats.tsx
'use client';

import { motion } from 'framer-motion';

type Stat = { label: string; value: string; note?: string };

const stats: Stat[] = [
  { label: 'Shipped apps', value: '12+' },
  { label: 'Avg. Lighthouse Perf', value: '95+' },
  { label: 'Platforms', value: 'iOS • Android • Web' },
  { label: 'Years', value: '8+' },
];

export default function Stats() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
      {stats.map((s, i) => (
        <motion.div
          key={s.label}
          initial={{ y: 14, opacity: 0, filter: 'blur(6px)' }}
          whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.45, delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.3 }}
          className="rounded-2xl border bg-white/5 p-4 sm:p-5"
          style={{ borderColor: 'rgba(255,255,255,0.12)' }}
        >
          <div className="text-2xl sm:text-3xl font-bold">{s.value}</div>
          <div className="text-white/70 text-sm mt-1">{s.label}</div>
          {s.note && <div className="text-white/50 text-xs mt-1">{s.note}</div>}
        </motion.div>
      ))}
    </div>
  );
}
