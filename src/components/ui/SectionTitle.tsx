// components/site/SectionTitle.tsx
'use client';

export default function SectionTitle({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div>
      {subtitle && <div className="text-sm uppercase tracking-wider text-white/50">{subtitle}</div>}
      <h2 className="text-3xl md:text-4xl font-bold mt-1">{title}</h2>
    </div>
  );
}