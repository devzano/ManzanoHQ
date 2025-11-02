// app/page.tsx
'use client';

import Image from "next/image";
import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionTemplate } from "framer-motion";
import { Sparkles, Boxes, ShoppingBag, Wand2, ArrowRight, ArrowUpRightSquare } from "lucide-react";

import NeonButton from "@/components/ui/NeonButton";
import HireForm from "@/components/ui/HireForm";
import HireDialog from "@/components/ui/HireDialog";
import HoloCard from "@/components/ui/HoloCard";
import { PRIMARY_HEX, ACCENT_HEX, ACCENT_RGB, PRIMARY_RGB } from "@/lib/brand";

// New imports
import { fadeUpVariant, staggerContainer, item } from "@/lib/motion";
import Magnetic from "@/components/ui/Magnetic";
import TiltCard from "@/components/ui/TiltCard";
import FloatingOrbs from "@/components/ui/FloatingOrbs";
import Beams from "@/components/ui/Beams";
import Marquee from "@/components/ui/Marquee";
import SectionTitle from "@/components/ui/SectionTitle";

export default function Home() {
  const pageRef = useRef<HTMLDivElement>(null);

  // Progress fully reaches 1 at bottom
  const { scrollYProgress } = useScroll({ target: pageRef, offset: ["start start", "end end"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 20, mass: 0.2 });

  // Parallax mesh
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
  const glow = useMotionTemplate`0 0 ${useTransform(scrollYProgress, [0, 1], [30, 60])}px rgba(${ACCENT_RGB}, 0.35)`;

  return (
    <div ref={pageRef} className="relative min-h-screen w-full bg-black text-white">
      {/* 100% Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] z-50 origin-left"
        style={{ scaleX: progress, background: `linear-gradient(90deg, ${PRIMARY_HEX}, ${ACCENT_HEX})` }}
      />

      {/* Background layers */}
      <motion.div aria-hidden className="pointer-events-none fixed inset-0 -z-10" style={{ y: bgTranslate1, ...meshStyle }} />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed inset-0 -z-10 opacity-60"
        style={{ y: bgTranslate2, backgroundImage: "radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)", backgroundSize: "24px 24px" }}
      />
      <FloatingOrbs />
      <Beams />

      {/* NAV */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.05 }}
        className="w-full py-6 px-6 md:px-10 flex items-center justify-between"
        aria-label="Primary"
      >
        <Link href="/" className="flex items-center gap-3">
          <motion.div
            className="relative h-9 w-9 rounded-xl overflow-hidden"
            animate={{ boxShadow: [`0 0 30px rgba(${ACCENT_RGB},0.25)`, `0 0 60px rgba(${ACCENT_RGB},0.45)`, `0 0 30px rgba(${ACCENT_RGB},0.25)`] }}
            transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            style={{ outline: `1px solid rgba(${ACCENT_RGB},0.5)` }}
          >
            <Image src="/images/logo/logoMain.png" alt="ManzanoHQ icon" fill sizes="36px" priority />
          </motion.div>
        </Link>
      </motion.nav>

      <main>
        {/* HERO */}
        <section id="hero" className="px-6 md:px-10 pt-10 md:pt-16 pb-10">
          <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10 items-center">
            <motion.div variants={fadeUpVariant(0.05)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} className="md:col-span-7">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 border bg-white/5" style={{ borderColor: `rgba(${ACCENT_RGB},0.35)` }}>
                <Sparkles size={16} />
                <span className="text-white/80">Apps • Commerce • Design Systems</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight">ManzanoHQ</h1>

              <motion.p className="mt-4 text-xl text-white/80" variants={item} initial="hidden" animate="show">
                Headquarters for the products we build and the experiences we ship.
              </motion.p>

              <motion.div className="mt-8 flex flex-wrap gap-4" variants={staggerContainer} initial="hidden" animate="show">
                <motion.div variants={item}>
                  <NeonButton title="explore products" onClick={() => document.querySelector('#products')?.scrollIntoView({ behavior: 'smooth' })} />
                </motion.div>
                <motion.div variants={item}>
                  <button
                    className="px-6 py-3 rounded-2xl border text-white/80 font-semibold transition hover:bg-white/5"
                    style={{ borderColor: `rgba(${ACCENT_RGB},0.35)` }}
                    onClick={() => document.querySelector('#pillars')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    what we do
                  </button>
                </motion.div>
              </motion.div>

              <div className="mt-8">
                <Marquee />
              </div>
            </motion.div>

            <motion.div variants={fadeUpVariant(0.12)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} className="md:col-span-5">
              <TiltCard className="will-change-transform">
                <div
                  className="w-full h-80 md:h-104 rounded-4xl backdrop-blur-xl bg-white/5 border relative flex items-center justify-center"
                  style={{ borderColor: `rgba(${PRIMARY_RGB},0.25)`, boxShadow: glow as any }}
                >
                  <motion.div
                    animate={{ y: [0, -10, 0, 8, 0] }}
                    transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                    className="relative h-32 w-56 md:h-40 md:w-72"
                  >
                    <Image
                      src="/images/logo/logoInvertAlpha.png"
                      alt="ManzanoHQ mark"
                      fill
                      sizes="(max-width: 768px) 224px, 288px"
                      className="object-contain"
                      priority
                    />
                  </motion.div>

                  {/* morphing glow blob */}
                  <motion.div
                    aria-hidden
                    className="absolute -z-10 inset-0 rounded-4xl"
                    style={{ background: `radial-gradient(120px 120px at 70% 30%, rgba(${ACCENT_RGB},0.2), transparent 60%)` }}
                    animate={{ scale: [1, 1.04, 1], rotate: [0, 5, -3, 0] }}
                    transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }}
                  />
                </div>
              </TiltCard>
            </motion.div>
          </div>
        </section>

        {/* WHAT WE DO */}
        <section id="pillars" className="px-6 md:px-10 py-10 md:py-16">
          <div className="max-w-6xl mx-auto">
            <SectionTitle title="What we do" subtitle="Pillars we invest in" />
            <motion.div className="grid md:grid-cols-3 gap-6 mt-8" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.3 }}>
              <motion.div variants={item}>
                <HoloCard eyebrow="Pillar" badge="Apps" title="Crafted consumer & creator apps" desc="We design and build performant, delightful apps with a focus on polish, animation, and longevity." icon={<Boxes size={22} />} />
              </motion.div>
              <motion.div variants={item}>
                <HoloCard eyebrow="Pillar" badge="Commerce" title="Product & storefront experiences" desc="From catalog to checkout—cohesive flows, analytics, and growth loops that convert." icon={<ShoppingBag size={22} />} />
              </motion.div>
              <motion.div variants={item}>
                <HoloCard eyebrow="Pillar" badge="Design Systems" title="Reusable UI + motion language" desc="Glassy surfaces, neon accents, and a modular motion kit—built once, reused across brands." icon={<Wand2 size={22} />} />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* PRODUCTS HUB */}
        <section id="products" className="px-6 md:px-10 py-10 md:py-16">
          <div className="max-w-6xl mx-auto">
            <SectionTitle title="Products" subtitle="Explore the ecosystem" />
            <motion.div className="grid md:grid-cols-3 gap-6 mt-8" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.35 }}>
              <motion.div variants={item}>
                <HoloCard variant="link" eyebrow="Flagship" badge="PopShop" title="Manzanos PopShop" desc="Collectible Pops & merch with wishlists, tracking, themed UI, and a smooth checkout." icon={<ArrowUpRightSquare size={18} />} href="/popshop" />
              </motion.div>
              <motion.div variants={item}>
                <HoloCard variant="link" eyebrow="App" badge="Recipe" title="RecipeRealm" desc="A modern recipe manager with AI formatting, nutrition badges, and sharing." icon={<ArrowUpRightSquare size={18} />} href="/recipes" />
              </motion.div>
              <motion.div variants={item}>
                <HoloCard variant="link" eyebrow="Games" badge="Logiqo" title="Logiqo" desc="Cross-platform puzzle & board games with online play and dynamic boards." icon={<ArrowUpRightSquare size={18} />} href="/logiqo" />
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* WHY MANZANOHQ */}
        <section id="why" className="px-6 md:px-10 py-10 md:py-16">
          <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10 items-center">
            <motion.div variants={fadeUpVariant(0.05)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} className="md:col-span-6">
              <SectionTitle title="Why ManzanoHQ" subtitle="Design-led, shipping-focused" />
              <ul className="mt-6 space-y-3 text-white/75 leading-relaxed">
                <li>• Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, natus veniam aliquam a ut dolorem, impedit molestias eveniet ducimus vero reprehenderit velit, sapiente itaque ex commodi. Aliquam deleniti unde dignissimos.</li>
                <li>• Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure repellendus fugit esse perferendis. Cumque saepe praesentium amet soluta nam sunt! Tempore unde corrupti delectus fugiat consectetur non optio? Quos, corrupti.</li>
                <li>• Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eaque, ut sequi sunt quibusdam corrupti beatae sapiente eligendi dolores possimus? Quis vel voluptas repudiandae, eaque accusamus laudantium similique quibusdam vitae.</li>
              </ul>
            </motion.div>

            <motion.div variants={fadeUpVariant(0.12)} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.4 }} className="md:col-span-6">
              <div className="rounded-3xl p-6 md:p-8 backdrop-blur-xl bg-white/5 border" style={{ borderColor: `rgba(${ACCENT_RGB},0.35)` }}>
                <div className="flex flex-wrap gap-3 text-sm text-white/80">
                  {["Blank", "Lorem", "Ipsum", "Test", "Pow", "Wow"].map((t) => (
                    <span key={t} className="px-3 py-1 rounded-full border border-white/15 bg-white/5">{t}</span>
                  ))}
                </div>
                <div className="mt-6 text-white/70">
                  lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* SHOWCASE */}
        <section id="showcase" className="px-6 md:px-10 py-10 md:py-16">
          <div className="max-w-6xl mx-auto">
            <SectionTitle title="Showcase" subtitle="subtitle" />
            <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8" variants={staggerContainer} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.25 }}>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <motion.div key={i} variants={item} whileHover={{ scale: 1.03 }} className="aspect-square rounded-2xl overflow-hidden border bg-white/5" style={{ borderColor: `rgba(${PRIMARY_RGB},0.2)` }}>
                  <Image src={`/images/logo/devzano.png`} alt={`Showcase ${i}`} width={800} height={800} className="w-full h-full object-cover" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* CONTACT / CTA with Magnetic action */}
        <section id="contact" className="px-6 md:px-10 pb-20">
          <div className="max-w-6xl mx-auto">
            <div className="rounded-3xl p-8 md:p-12 backdrop-blur-xl bg-white/5 border" style={{ borderColor: `rgba(${ACCENT_RGB},0.35)` }}>
              <h3 className="text-2xl md:text-3xl font-bold">Have something in mind?</h3>
              <p className="mt-3 text-white/70 max-w-3xl">Share a brief and we’ll respond with scope, timeline, and next steps.</p>
              <div className="mt-6 flex items-center gap-4">
                <Magnetic>
                  <NeonButton title="Start the conversation" onClick={() => setOpenHire(true)} />
                </Magnetic>
                <a
                  href="mailto:rmanzano.se@gmail.com"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl border text-white/80 font-semibold hover:bg-white/5 transition"
                  style={{ borderColor: `rgba(${ACCENT_RGB},0.35)` }}
                >
                  Email us <ArrowRight size={16} />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="px-6 md:px-10 pb-10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 border-t border-white/10 pt-6 text-white/50">
          <span>© {new Date().getFullYear()} ManzanoHQ</span>
          <div className="flex items-center gap-4">
            <a className="hover:text-white transition" href="/brand">Brand</a>
            <a className="hover:text-white transition" href="/privacy">Privacy</a>
            <a className="hover:text-white transition" href="/terms">Terms</a>
          </div>
        </div>
      </footer>

      {/* Floating CTA */}
      <motion.button
        aria-label="Open project form"
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.4 }}
        className="fixed bottom-6 right-6 z-40"
        onClick={() => setOpenHire(true)}
      >
        <div
          className="px-5 py-3 rounded-full font-semibold shadow-2xl border text-white backdrop-blur-md"
          style={{
            background: `linear-gradient(90deg, rgba(61,63,143,0.28), rgba(13,79,163,0.28))`,
            borderColor: `rgba(${ACCENT_RGB},0.35)`,
          }}
        >
          Work with ManzanoHQ
        </div>
      </motion.button>

      {/* MODAL */}
      <HireDialog open={openHire} onClose={() => setOpenHire(false)} title="Tell us about your project">
        <HireForm />
      </HireDialog>
    </div>
  );
}