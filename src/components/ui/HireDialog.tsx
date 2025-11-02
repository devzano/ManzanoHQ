// components/ui/HireDialog.tsx
'use client';

import { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type Props = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
};

export default function HireDialog({ open, onClose, title = 'Start a project', children }: Props) {
  // lock scroll when open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  function onBackdrop(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) onClose();
  }

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose();
    }
    if (open) window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onMouseDown={onBackdrop}
          aria-modal="true"
          role="dialog"
          aria-labelledby="hire-title"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Dialog card */}
          <motion.div
            className="relative max-w-2xl w-full rounded-3xl border bg-white/5 text-white backdrop-blur-xl p-6 md:p-8"
            style={{ borderColor: 'rgba(255,255,255,0.12)' }}
            initial={{ y: 16, scale: 0.98, opacity: 0.6, filter: 'blur(4px)' }}
            animate={{ y: 0, scale: 1, opacity: 1, filter: 'blur(0px)' }}
            exit={{ y: 16, scale: 0.98, opacity: 0, filter: 'blur(4px)' }}
            transition={{ type: 'spring', stiffness: 120, damping: 16 }}
          >
            <div className="flex items-start justify-between gap-4">
              <h2 id="hire-title" className="text-2xl md:text-3xl font-bold tracking-tight">
                {title}
              </h2>
              <button
                onClick={onClose}
                aria-label="Close"
                className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-sm hover:bg-white/10"
              >
                Esc
              </button>
            </div>

            <div className="mt-6">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
