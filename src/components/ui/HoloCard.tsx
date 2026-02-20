// components/ui/HoloCard.tsx
'use client';

import Image, { type StaticImageData } from 'next/image';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ACCENT_RGB, PRIMARY_RGB } from '@/lib/brand';
import * as React from 'react';

type IconSource = StaticImageData | string;

type ClickAction = {
  href?: string; // opened via window.open (never rendered as <a>)
  onClick?: (e: React.MouseEvent) => void;
  target?: '_blank' | '_self';
  rel?: string; // kept for API compatibility; not used directly
  ariaLabel?: string;
};

type Props = {
  title: string;
  desc: string;
  icon?: React.ReactNode;
  iconSrc?: IconSource;
  iconAlt?: string;
  iconSize?: number;

  iconShape?: 'rounded' | 'circle' | 'none';
  iconBgClassName?: string;

  delay?: number;
  href?: string;
  className?: string;

  eyebrow?: string; // default label: "Open App"
  badge?: string;   // default label: "Open Site"

  eyebrowAction?: ClickAction;
  badgeAction?: ClickAction;

  variant?: 'default' | 'link';
};

function stopCardNav(e: React.MouseEvent) {
  e.preventDefault();
  e.stopPropagation();
}

function ActionPill({
  label,
  action,
  subtle,
}: {
  label: string;
  action?: ClickAction;
  subtle?: boolean;
}) {
  const isClickable = !!(action?.href || action?.onClick);
  if (!isClickable) return null;

  return (
    <button
      type="button"
      aria-label={action?.ariaLabel ?? label}
      className={[
        'appearance-none border text-left',
        'px-2.5 py-1 rounded-full text-xs font-medium',
        'transition select-none cursor-pointer',
        subtle
          ? 'bg-white/5 text-white/70 border-white/10 hover:bg-white/10'
          : 'bg-white/10 text-white/85 border-white/15 hover:bg-white/15',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40',
      ].join(' ')}
      onClick={(e) => {
        stopCardNav(e);

        action?.onClick?.(e);

        if (action?.href) {
          const target = action.target ?? '_blank';
          window.open(action.href, target, 'noopener,noreferrer');
        }
      }}
    >
      {label}
      <span className="ml-1.5 opacity-70" aria-hidden>
        →
      </span>
    </button>
  );
}

export default function HoloCard({
  title,
  desc,
  icon,
  iconSrc,
  iconAlt,
  iconSize = 28,
  iconShape = 'rounded',
  iconBgClassName,
  delay = 0,
  href,
  className,
  eyebrow,
  badge,
  eyebrowAction,
  badgeAction,
}: Props) {
  const Container: any = href ? motion.a : motion.div;

  // 3D hover tilt
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const tX = useSpring(rx, { stiffness: 150, damping: 12 });
  const tY = useSpring(ry, { stiffness: 150, damping: 12 });

  function onMove(e: React.MouseEvent<HTMLDivElement>) {
    const el = e.currentTarget as HTMLDivElement;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    rx.set((py - 0.5) * -6);
    ry.set((px - 0.5) * 6);
  }
  function onLeave() {
    rx.set(0);
    ry.set(0);
  }

  const shineX = useTransform(ry, [-6, 6], ['0%', '100%']);

  const imgRoundClass =
    iconShape === 'circle' ? 'rounded-full' : iconShape === 'rounded' ? 'rounded-xl' : '';

  const IconChip =
    iconShape === 'none'
      ? React.Fragment
      : (props: { children: React.ReactNode }) => (
          <div
            className={[
              'flex items-center justify-center bg-white/5 border overflow-hidden shrink-0',
              iconShape === 'circle' ? 'h-12 w-12 rounded-full' : 'h-12 w-12 rounded-2xl',
              iconBgClassName ?? '',
            ]
              .join(' ')
              .trim()}
            style={{
              borderColor: `rgba(${ACCENT_RGB},0.35)`,
              boxShadow: `0 0 30px rgba(${ACCENT_RGB},0.2)`,
            }}
            aria-hidden
          >
            {props.children}
          </div>
        );

  const openAppLabel = eyebrow?.trim() || 'Open App';
  const openSiteLabel = badge?.trim() || 'Open Site';

  return (
    <Container
      href={href}
      target={href ? '_blank' : undefined}
      rel={href ? 'noreferrer' : undefined}
      initial={{ y: 24, opacity: 0, filter: 'blur(6px)' }}
      whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ type: 'spring', stiffness: 70, damping: 14, delay }}
      whileHover={{ scale: 1.01, boxShadow: `0 0 40px rgba(${ACCENT_RGB},0.22)` }}
      className={[
        // medium-tall “square card” vibe
        'relative rounded-3xl overflow-hidden isolate transform-gpu will-change-transform',
        'p-6 flex flex-col justify-between',
        'min-h-[220px] sm:min-h-[240px] lg:min-h-[260px]',
        'backdrop-blur-xl bg-white/5 border border-white/10',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40',
        href ? 'cursor-pointer' : '',
        className ?? '',
      ]
        .join(' ')
        .trim()}
      style={{
        borderColor: `rgba(${PRIMARY_RGB},0.25)`,
        rotateX: tX as any,
        rotateY: tY as any,
      }}
      aria-label={href ? title : undefined}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      {/* shine */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-3xl will-change-transform"
        style={{
          inset: '-1px',
          background:
            'linear-gradient(115deg, transparent 0%, rgba(255,255,255,0.12) 40%, transparent 70%)',
          maskImage: 'linear-gradient(#000,#000)',
          WebkitMaskImage: 'linear-gradient(#000,#000)',
          translateX: shineX,
        }}
      />

      {/* TOP: icon + app name */}
      <div className="flex items-center gap-3">
        {iconShape === 'none' ? (
          <>
            {icon
              ? icon
              : iconSrc && (
                  <Image
                    src={iconSrc}
                    alt={iconAlt ?? title}
                    width={iconSize}
                    height={iconSize}
                    className={`object-contain ${imgRoundClass}`}
                  />
                )}
          </>
        ) : (
          <IconChip>
            {icon
              ? icon
              : iconSrc && (
                  <Image
                    src={iconSrc}
                    alt={iconAlt ?? title}
                    width={iconSize}
                    height={iconSize}
                    className={`object-contain ${imgRoundClass}`}
                  />
                )}
          </IconChip>
        )}

        <h3 className="min-w-0 text-lg sm:text-xl font-semibold tracking-wide leading-tight truncate">
          {title}
        </h3>
      </div>

      {/* MIDDLE: description */}
      <p className="mt-3 text-white/70 leading-relaxed textLimit3">
        {desc}
      </p>

      {/* BOTTOM: CTAs (in place of “Learn more”) */}
      {(eyebrowAction || badgeAction) ? (
        <div className="mt-5 flex items-center gap-2">
          <ActionPill label={openAppLabel} action={eyebrowAction} />
          <ActionPill label={openSiteLabel} action={badgeAction} subtle />
        </div>
      ) : (
        <div className="mt-5 h-8" aria-hidden />
      )}
    </Container>
  );
}