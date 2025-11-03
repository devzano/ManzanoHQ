// components/ui/Testimonials.tsx
'use client';

import { motion } from 'framer-motion';

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  avatar?: string;
};

const items: Testimonial[] = [
  { quote: "They sweat the micro-interactions. It feels premium.", name: "Alex R.", role: "Product Lead" },
  { quote: "Fast, clear communication and a strong eye for detail.", name: "Jamie T.", role: "Founder" },
  { quote: "Performance + polish — exactly what we needed.", name: "Priya S.", role: "Engineering Manager" },
];

export default function Testimonials() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
      {items.map((t, i) => (
        <motion.figure
          key={t.name}
          initial={{ y: 18, opacity: 0, filter: 'blur(6px)' }}
          whileInView={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          transition={{ duration: 0.45, delay: 0.06 * i, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true, amount: 0.25 }}
          className="rounded-3xl border bg-white/5 p-5 sm:p-6"
          style={{ borderColor: 'rgba(255,255,255,0.12)' }}
        >
          <blockquote className="text-white/90 leading-relaxed">“{t.quote}”</blockquote>
          <figcaption className="mt-4 flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-white/10 border border-white/10 overflow-hidden" />
            <div className="text-sm">
              <div className="font-medium">{t.name}</div>
              <div className="text-white/60">{t.role}</div>
            </div>
          </figcaption>
        </motion.figure>
      ))}
    </div>
  );
}
