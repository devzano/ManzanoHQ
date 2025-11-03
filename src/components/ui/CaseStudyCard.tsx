// components/site/CaseStudyCard.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ACCENT_RGB, PRIMARY_RGB } from '@/lib/brand';

type Props = {
  href: string;
  cover: string;
  title: string;
  tags: string[];
  blurb: string;
  kpis?: { label: string; value: string }[];
};

export default function CaseStudyCard({ href, cover, title, tags, blurb, kpis = [] }: Props) {
  return (
    <motion.article
      whileHover={{ scale: 1.01 }}
      className="group relative overflow-hidden rounded-3xl border bg-white/5"
      style={{ borderColor: `rgba(${PRIMARY_RGB},0.2)` }}
    >
      {/* cover */}
      <div className="relative h-56 sm:h-72 lg:h-80">
        <Image src={cover} alt={title} fill priority sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      </div>

      {/* content */}
      <div className="p-5 sm:p-6">
        <div className="flex flex-wrap gap-2 text-xs text-white/80">
          {tags.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 rounded-full border bg-white/5"
              style={{ borderColor: `rgba(${ACCENT_RGB},0.35)` }}
            >
              {t}
            </span>
          ))}
        </div>

        <h3 className="mt-3 text-xl font-semibold">{title}</h3>
        <p className="mt-2 text-white/70">{blurb}</p>

        {!!kpis.length && (
          <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-3">
            {kpis.map((k) => (
              <div key={k.label} className="rounded-xl border bg-white/5 p-3 text-sm" style={{ borderColor: 'rgba(255,255,255,0.12)' }}>
                <div className="text-white/50">{k.label}</div>
                <div className="text-white font-medium mt-0.5">{k.value}</div>
              </div>
            ))}
          </div>
        )}

        <Link
          href={href}
          className="mt-5 inline-flex items-center gap-2 rounded-xl border px-4 py-2 bg-white/5 hover:bg-white/10 transition"
          style={{ borderColor: `rgba(${ACCENT_RGB},0.35)` }}
        >
          Read the case →
        </Link>
      </div>
    </motion.article>
  );
}