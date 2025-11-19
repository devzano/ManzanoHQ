// components/legal/LegalCard.tsx
import type { ReactNode } from "react";
import { ACCENT_RGB } from "@/lib/brand";

type LegalCardProps = {
  title: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  lastUpdated?: string;
};

export default function LegalCard({
  title,
  subtitle,
  children,
  className = "",
  lastUpdated,
}: LegalCardProps) {
  return (
    <article
      className={`rounded-3xl border bg-white/5 backdrop-blur-xl p-5 sm:p-6 lg:p-8 text-white/90 shadow-[0_18px_40px_rgba(0,0,0,0.65)] ${className}`}
      style={{ borderColor: `rgba(${ACCENT_RGB},0.35)` }}
    >
      <header className="mb-4 sm:mb-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-white/40">
              Legal
            </p>
            <h1 className="mt-1 text-2xl sm:text-3xl font-semibold tracking-tight">
              {title}
            </h1>
            {subtitle && (
              <p className="mt-1 text-sm text-white/60 max-w-2xl">
                {subtitle}
              </p>
            )}
          </div>

          {lastUpdated && (
            <p className="text-[11px] sm:text-xs text-white/60 text-right shrink-0">
              <span className="font-semibold">Last updated:</span>{" "}
              {lastUpdated}
            </p>
          )}
        </div>
      </header>

      <div className="prose prose-invert prose-sm sm:prose-base max-w-none">
        {children}
      </div>
    </article>
  );
}