// components/legal/LegalModal.tsx
"use client";

import type { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import LegalCard from "./LegalCard";

type LegalModalProps = {
  open: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export default function LegalModal({
  open,
  onClose,
  title,
  subtitle,
  children,
}: LegalModalProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[60] flex items-center justify-center px-4 sm:px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/70 backdrop-blur-md"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Modal content */}
          <motion.div
            className="relative z-[61] w-full max-w-3xl max-h-[80vh] sm:max-h-[85vh] flex flex-col"
            initial={{ y: 24, opacity: 0, scale: 0.96 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 24, opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Close button */}
            <button
              type="button"
              onClick={onClose}
              className="absolute right-3 top-3 z-10 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/60 text-white/70 hover:bg-black/80 hover:text-white transition"
              aria-label="Close legal dialog"
            >
              <X size={16} />
            </button>

            <div className="overflow-hidden rounded-3xl border border-white/15 bg-slate-950/90 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
              <div className="max-h-[80vh] overflow-y-auto p-4 sm:p-6 lg:p-8">
                <LegalCard title={title} subtitle={subtitle} className="border-none bg-transparent p-0 shadow-none">
                  {children}
                </LegalCard>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
