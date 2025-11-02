// components/site/Marquee.tsx
'use client';

export default function Marquee() {
  const items = ["Blank", "Blank", "Blank", "Blank", "Blank", "Blank", "Blank", "Blank"];
  return (
    <>
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5">
        <div className="whitespace-nowrap py-3" style={{ animation: "marquee 18s linear infinite" }}>
          {[...items, ...items].map((t, i) => (
            <span key={i} className="mx-6 text-white/70">{t}</span>
          ))}
        </div>
      </div>
    </>
  );
}