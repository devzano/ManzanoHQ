// components/ui/ContactSection.tsx
'use client';

import { FormEvent, useState } from "react";
import { ArrowRight } from "lucide-react";
import Magnetic from "@/components/ui/Magnetic";
import NeonButton from "@/components/ui/NeonButton";
import { ACCENT_RGB } from "@/lib/brand";

type ContactSectionProps = {
  onOpenHire: () => void;
};

const isValidEmail = (value: string) => {
  // Simple but solid email pattern
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
};

export default function ContactSection({ onOpenHire }: ContactSectionProps) {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;

    // Reset messages for this attempt
    setError(null);
    setSuccess(null);

    const trimmed = email.trim();

    // Basic validators
    if (!trimmed) {
      setError("Please enter your email.");
      return;
    }

    if (!isValidEmail(trimmed)) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: trimmed }),
    })
      .then(async (res) => {
        if (!res.ok) {
          let message = "Subscription failed. Please try again.";
          try {
            const data = await res.json();
            if (data?.error && typeof data.error === "string") {
              message = data.error;
            }
          } catch {
            // ignore JSON errors, use default message
          }
          throw new Error(message);
        }

        // Success
        setEmail("");
        form.reset();
        setSuccess("Thanks for subscribing! Check your inbox soon.");
      })
      .catch((err: unknown) => {
        const message =
          err instanceof Error
            ? err.message
            : "Subscription failed. Please try again.";
        setError(message);
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id="contact" className="px-4 sm:px-6 lg:px-10 pb-20">
      <div className="mx-auto w-full max-w-7xl">
        <div
          className="rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 backdrop-blur-xl bg-white/5 border"
          style={{ borderColor: `rgba(${ACCENT_RGB},0.35)` }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Newsletter (left) */}
            <div className="flex flex-col justify-between border-b border-white/10 pb-6 lg:pb-0 lg:border-b-0 lg:border-r lg:border-white/10 lg:pr-8">
              <div>
                <div className="text-xs uppercase tracking-wider text-white/50">
                  Newsletter
                </div>
                <h4 className="mt-1 text-xl sm:text-2xl font-semibold">
                  Get launch notes &amp; updates
                </h4>
                <p className="mt-2 text-white/70 text-sm sm:text-base">
                  Occasional emails about new releases, case studies, and design tooling.
                </p>
              </div>

              <div className="mt-4 sm:mt-5">
                <form
                  className="flex w-full flex-col sm:flex-row gap-2"
                  onSubmit={handleSubmit}
                  noValidate
                >
                  <input
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="flex-1 rounded-xl bg-white/5 border px-4 py-3 outline-none focus:ring-2 focus:ring-white/20"
                    style={{ borderColor: `rgba(${ACCENT_RGB},0.35)` }}
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      if (error) setError(null);
                      if (success) setSuccess(null);
                    }}
                    required
                  />
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`px-4 py-3 rounded-xl border bg-white/5 font-semibold hover:bg-white/10 transition ${
                      isSubmitting ? "opacity-60 cursor-not-allowed" : ""
                    }`}
                    style={{ borderColor: `rgba(${ACCENT_RGB},0.35)` }}
                  >
                    {isSubmitting ? "Joining..." : "Join"}
                  </button>
                </form>

                {error && (
                  <div className="mt-2 text-xs text-red-400">
                    {error}
                  </div>
                )}
                {success && !error && (
                  <div className="mt-2 text-xs text-emerald-400">
                    {success}
                  </div>
                )}
                {!error && !success && (
                  <div className="mt-2 text-xs text-white/50">
                    No spam. Unsubscribe anytime.
                  </div>
                )}
              </div>
            </div>

            {/* CTA (right) */}
            <div className="lg:pl-8 flex flex-col justify-center pt-2 lg:pt-0">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold">
                Have something in mind?
              </h3>
              <p className="mt-2 sm:mt-3 text-white/70 max-w-3xl">
                Share a brief and we’ll respond with scope, timeline, and next steps.
              </p>
              <div className="mt-5 sm:mt-6 flex flex-wrap items-center gap-3 sm:gap-4">
                <Magnetic>
                  <NeonButton
                    title="Start The Conversation"
                    onClick={onOpenHire}
                  />
                </Magnetic>
                <a
                  href="mailto:manzanohq@gmail.com"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border text-white/80 font-semibold hover:bg-white/5 transition"
                  style={{ borderColor: `rgba(${ACCENT_RGB},0.35)` }}
                >
                  Email Us <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}