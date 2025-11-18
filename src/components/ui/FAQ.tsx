// components/ui/FAQ.tsx
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

type QA = { q: string; a: string };

const faqs: QA[] = [
  {
    q: "What does ManzanoHQ actually build?",
    a: "We design and build high-polish digital products — apps, storefronts, and the UI systems behind them. Right now that includes Manzanos PopShop, with more products planned under the ManzanoHQ ecosystem.",
  },
  {
    q: "How do we get started working together?",
    a: "Start with a short brief: what you’re trying to build, who it’s for, and any timeline or constraints. From there, we’ll suggest a starting scope, rough milestones, and whether it makes more sense as a one-off build or a longer-term partnership.",
  },
  {
    q: "Who is a good fit to work with ManzanoHQ?",
    a: "Founders, small teams, and family businesses that care about polish, storytelling, and user experience. If you want something that feels thoughtfully designed instead of templated, we’re usually a good fit.",
  },
  {
    q: "Do you handle both design and development?",
    a: "Yes. ManzanoHQ is design-led but full-stack: we handle UX, UI, motion, and the actual build — from app screens and flows to data models, integrations, and storefront logic.",
  },
  {
    q: "Can you help with App Store / Play Store / web deployments?",
    a: "Yes. We can set up builds, provisioning, basic analytics, and deploy to the App Store, Google Play, or web hosts like Vercel. We prefer to ship something real, not just hand off static screens.",
  },
  {
    q: "Do you offer post-launch support or ongoing work?",
    a: "Yes. The ideal setup is a small ongoing retainer that covers fixes, upgrades, and incremental improvements. That way the product can evolve instead of being a one-and-done launch.",
  },
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
              <span className="font-medium text-sm sm:text-base">
                {f.q}
              </span>
              <span className="ml-4 text-white/60 text-lg leading-none">
                {isOpen ? '–' : '+'}
              </span>
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
                  <div className="pt-3 text-white/70 text-sm leading-relaxed">
                    {f.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}