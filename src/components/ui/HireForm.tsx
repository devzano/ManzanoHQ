// components/ui/HireForm.tsx
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import NeonButton from '@/components/ui/NeonButton';
import { ACCENT_RGB } from '@/lib/brand';

type FormState = 'idle' | 'submitting' | 'success' | 'error';

export default function HireForm() {
  const [state, setState] = useState<FormState>('idle');
  const [error, setError] = useState<string>('');

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError('');
    setState('submitting');

    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    // Minimal client-side validation
    const name = String(data.name || '').trim();
    const email = String(data.email || '').trim();
    const about = String(data.about || '').trim();
    const budget = String(data.budget || '').trim();
    const message = String(data.message || '').trim();

    if (!name || !email || !message) {
      setError('Please fill name, email, and a short message.');
      setState('idle');
      return;
    }

    try {
      const res = await fetch('/api/hire', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, about, budget, message }),
      });

      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j?.error || 'Failed to send message.');
      }

      setState('success');
      form.reset();
    } catch (err: any) {
      setError(err.message || 'Something went wrong.');
      setState('error');
    }
  }

  const borderStyle = { borderColor: `rgba(${ACCENT_RGB},0.35)` };

  return (
    <motion.form
      onSubmit={onSubmit}
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="w-full max-w-lg space-y-4"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="name"
          placeholder="Your name"
          className="w-full rounded-xl bg-white/5 border px-4 py-3 outline-none focus:ring-2 focus:ring-white/20"
          style={borderStyle}
          required
        />
        <input
          name="email"
          placeholder="Email"
          type="email"
          className="w-full rounded-xl bg-white/5 border px-4 py-3 outline-none focus:ring-2 focus:ring-white/20"
          style={borderStyle}
          required
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          name="about"
          placeholder="What are you building?"
          className="w-full rounded-xl bg-white/5 border px-4 py-3 outline-none focus:ring-2 focus:ring-white/20"
          style={borderStyle}
        />
        <select
          name="budget"
          className="w-full rounded-xl bg-white/5 border px-4 py-3 outline-none focus:ring-2 focus:ring-white/20"
          style={borderStyle}
          defaultValue=""
        >
          <option value="" disabled>Budget range</option>
          <option>&lt; $1k</option>
          <option>$1k – $5k</option>
          <option>$5k – $10k</option>
          <option>$10k+</option>
        </select>
      </div>

      <textarea
        name="message"
        placeholder="Briefly describe your project or request…"
        className="w-full min-h-32 rounded-xl bg-white/5 border px-4 py-3 outline-none focus:ring-2 focus:ring-white/20"
        style={borderStyle}
        required
      />

      {error && (
        <div className="text-sm text-red-300">{error}</div>
      )}

      <div className="flex items-center gap-3">
        <NeonButton title={state === 'submitting' ? 'Sending…' : 'Send message'} />
        {state === 'success' && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-white/80"
          >
            Thanks! I’ll reply shortly.
          </motion.span>
        )}
      </div>
    </motion.form>
  );
}