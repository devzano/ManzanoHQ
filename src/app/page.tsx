// app/page.tsx
'use client';

import Image from "next/image";
import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionTemplate,
} from "framer-motion";
import {
  Sparkles,
  Boxes,
  ShoppingBag,
  Wand2,
  ArrowRight,
  ArrowUpRightSquare,
} from "lucide-react";

import TopNav from "@/components/ui/TopNav";
import NeonButton from "@/components/ui/NeonButton";
import HireForm from "@/components/ui/HireForm";
import HireDialog from "@/components/ui/HireDialog";
import HoloCard from "@/components/ui/HoloCard";
import { PRIMARY_HEX, ACCENT_HEX, ACCENT_RGB, PRIMARY_RGB } from "@/lib/brand";
import { fadeUpVariant, staggerContainer, item } from "@/lib/motion";
import Magnetic from "@/components/ui/Magnetic";
import TiltCard from "@/components/ui/TiltCard";
import FloatingOrbs from "@/components/ui/FloatingOrbs";
import Beams from "@/components/ui/Beams";
import SectionTitle from "@/components/ui/SectionTitle";
import LogosBar from "@/components/ui/LogoBar";
import Stats from "@/components/ui/Stats";
import Testimonials from "@/components/ui/Testimonials";
import FAQ from "@/components/ui/FAQ";
import CaseStudyCard from "@/components/ui/CaseStudyCard";
import AppImages from "@/constants/images";

export default function Home() {
  const pageRef = useRef<HTMLDivElement>(null);

  // Scroll progress for top bar
  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ["start start", "end end"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    mass: 0.2,
  });

  // Parallax background layers
  const bgTranslate1 = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const bgTranslate2 = useTransform(scrollYProgress, [0, 1], [0, 70]);

  const meshStyle = useMemo(
    () => ({
      background:
        `radial-gradient(1200px 800px at 8% 12%, rgba(${ACCENT_RGB},0.12), transparent 35%),` +
        `radial-gradient(900px 600px at 92% 18%, rgba(${ACCENT_RGB},0.10), transparent 40%),` +
        `radial-gradient(700px 500px at 50% 92%, rgba(${PRIMARY_RGB},0.10), transparent 45%),` +
        `linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0))`,
    }),
    []
  );

  const [openHire, setOpenHire] = useState(false);

  // Scroll-reactive glow around hero mark
  const glow = useMotionTemplate`0 0 ${useTransform(
    scrollYProgress,
    [0, 1],
    [30, 60]
  )}px rgba(${ACCENT_RGB}, 0.35)`;

  return (
    <div ref={pageRef} className="relative min-h-screen w-full bg-black text-white">
      <TopNav />

      {/* 100% Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] z-50 origin-left"
        style={{
          scaleX: progress,
          background: `linear-gradient(90deg, ${PRIMARY_HEX}, ${ACCENT_HEX})`,
        }}
      />

      {/* Background layers */}
      <motion.div aria-hidden className="pointer-events-none fixed inset-0 -z-10" style={{ y: bgTranslate1, ...meshStyle }} />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 opacity-60"
        style={{
          y: bgTranslate2,
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <FloatingOrbs />
      <Beams />

      <main>
        {/* HERO */}
        {/* add top padding to clear fixed nav */}
        <section className="pt-20 sm:pt-24 px-4 sm:px-6 lg:px-10 pb-8 sm:pb-10">
          <div className="mx-auto w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left */}
            <motion.div
              variants={fadeUpVariant(0.05)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="lg:col-span-7"
            >
              <div
                className="mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 border bg-white/5"
                style={{ borderColor: `rgba(${ACCENT_RGB},0.35)` }}
              >
                <Sparkles size={16} />
                <span className="text-white/80 text-sm sm:text-base">
                  Apps • Commerce • Design Systems
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold tracking-tight leading-[1.05] text-balance">
                ManzanoHQ
              </h1>

              <motion.p
                className="mt-3 sm:mt-4 text-lg sm:text-xl text-white/80"
                variants={item}
                initial="hidden"
                animate="show"
              >
                Headquarters for the products we build and the experiences we ship.
              </motion.p>

              <motion.div
                className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4"
                variants={staggerContainer}
                initial="hidden"
                animate="show"
              >
                <motion.div variants={item}>
                  <NeonButton
                    title="explore products"
                    onClick={() =>
                      document.querySelector("#products")?.scrollIntoView({ behavior: "smooth" })
                    }
                  />
                </motion.div>
                <motion.div variants={item}>
                  <button
                    className="px-5 sm:px-6 py-3 rounded-2xl border text-white/80 font-semibold transition hover:bg-white/5"
                    style={{ borderColor: `rgba(${ACCENT_RGB},0.35)` }}
                    onClick={() =>
                      document.querySelector("#pillars")?.scrollIntoView({ behavior: "smooth" })
                    }
                  >
                    what we do
                  </button>
                </motion.div>
              </motion.div>

              <div className="mt-6 sm:mt-8">
                <div className="mx-auto w-full max-w-7xl">
                  <div className="text-white/50 text-sm mb-3">Trusted tools we build with</div>
                  <LogosBar />
                </div>
              </div>
            </motion.div>

            {/* Right */}
            <motion.div
              variants={fadeUpVariant(0.12)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="lg:col-span-5"
            >
              <TiltCard className="will-change-transform">
                <div
                  className="w-full h-64 sm:h-80 lg:h-104 rounded-4xl backdrop-blur-xl bg-white/5 border relative flex items-center justify-center"
                  style={{
                    borderColor: `rgba(${PRIMARY_RGB},0.25)`,
                    boxShadow: glow as any,
                  }}
                >
                  <motion.div
                    animate={{ y: [0, -10, 0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                    className="relative h-24 w-40 sm:h-32 sm:w-56 lg:h-40 lg:w-72"
                  >
                    <Image
                      src="/images/logo/logoInvertAlpha.png"
                      alt="ManzanoHQ mark"
                      fill
                      sizes="(max-width: 640px) 160px, (max-width: 1024px) 224px, 288px"
                      className="object-contain"
                      priority
                    />
                  </motion.div>

                  {/* morphing glow blob */}
                  <motion.div
                    aria-hidden
                    className="absolute -z-10 inset-0 rounded-4xl"
                    style={{
                      background: `radial-gradient(120px 120px at 70% 30%, rgba(${ACCENT_RGB},0.2), transparent 60%)`,
                    }}
                    animate={{ scale: [1, 1.04, 1], rotate: [0, 5, -3, 0] }}
                    transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
                  />
                </div>
              </TiltCard>
            </motion.div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="px-4 sm:px-6 lg:px-10 pb-8 sm:pb-10">
        <div className="mx-auto w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 border-t border-white/10 pt-5 sm:pt-6 text-white/50">
          <span>© {new Date().getFullYear()} ManzanoHQ</span>
          <div className="flex items-center gap-4">
            <a className="hover:text-white transition" href="/brand">
              Brand
            </a>
            <a className="hover:text-white transition" href="/privacy">
              Privacy
            </a>
            <a className="hover:text-white transition" href="/terms">
              Terms
            </a>
          </div>
        </div>
      </footer>

      {/* Floating CTA (safe-area aware) */}
      <motion.button
        aria-label="Open project form"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        className="fixed right-4 sm:right-6 z-40"
        style={{
          bottom: "max(env(safe-area-inset-bottom, 0px), theme(spacing.6))",
        }}
        onClick={() => setOpenHire(true)}
      >
        <div
          className="px-4 sm:px-5 py-3 rounded-full font-semibold shadow-2xl border text-white backdrop-blur-md"
          style={{
            background:
              "linear-gradient(90deg, rgba(61,63,143,0.28), rgba(13,79,163,0.28))",
            borderColor: `rgba(${ACCENT_RGB},0.35)`,
          }}
        >
          Work with ManzanoHQ
        </div>
      </motion.button>

      {/* MODAL */}
      <HireDialog
        open={openHire}
        onClose={() => setOpenHire(false)}
        title="Tell us about your project"
      >
        <HireForm />
      </HireDialog>
    </div>
  );
}