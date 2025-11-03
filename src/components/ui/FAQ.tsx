'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type QA = { q: string; a: string };

const faqs: QA[] = [
  { q: "What do you build?", a: "High-polish apps (iOS, Android, Web), storefronts, and reusable UI/motion systems." },
  { q: "How do we get started?", a: "Share a brief. We’ll respond with scope, milestones, and a fixed or milestone-based quote." },
  { q: "Do you handle deployments?", a: "Yep. App Store/Play, Vercel, Render, Cloudflare, plus CI/CD, feature flags, and analytics." },
  { q: "Do you offer post-launch support?", a: "We prefer retainers that cover fixes, upgrades, and small enhancements each month." },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/5">
      {faqs.map((f, i) => {
        const isOpen = open === i;
        return (
          <div key={f.q} className="p-4 sm:p-5">
            <button
              className="w-full flex items-center justify-between text-left"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
            >
              <span className="font-medium">{f.q}</span>
              <span className="ml-4 text-white/60">{isOpen ? '–' : '+'}</span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  className="overflow-hidden"
                >
                  <div className="pt-3 text-white/70">{f.a}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
