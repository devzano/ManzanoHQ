// app/(site)/page.tsx
'use client';

import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionTemplate } from "framer-motion";
import { Sparkles } from "lucide-react";

import TopNav from "@/components/ui/TopNav";
import NeonButton from "@/components/ui/NeonButton";
import HireForm from "@/components/ui/HireForm";
import HireDialog from "@/components/ui/HireDialog";
import HoloCard from "@/components/ui/HoloCard";
import { PRIMARY_HEX, ACCENT_HEX, ACCENT_RGB, PRIMARY_RGB } from "@/lib/brand";
import { fadeUpVariant, staggerContainer, item } from "@/lib/motion";
import TiltCard from "@/components/ui/TiltCard";
import SectionTitle from "@/components/ui/SectionTitle";
import LogosBar from "@/components/ui/LogoBar";
import Stats from "@/components/ui/Stats";
import FAQ from "@/components/ui/FAQ";
import AppImages from "@/constants/images";
import CaseStudyCard from "@/components/ui/CaseStudyCard";
import Testimonials from "@/components/ui/Testimonials";
import ContactSection from "@/components/ui/ContactSection";

export default function Home() {
  const pageRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: pageRef,
    offset: ["start start", "end end"],
  });
  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    mass: 0.2,
  });

  const [openHire, setOpenHire] = useState(false);

  const glow = useMotionTemplate`0 0 ${useTransform(
    scrollYProgress,
    [0, 1],
    [30, 60]
  )}px rgba(${ACCENT_RGB}, 0.35)`;

  // app/(site)/page.tsx (inside Home component file)

  // put these near the top of the file (constants are fine too)
  const IOS_APP_STORE = "https://apps.apple.com/us/app/manzanos-popshop/id6747915168";
  const ANDROID_PLAY_STORE =
    "https://play.google.com/store/apps/details?id=com.devzano.manzanospopshop";

  const MPS_DEEP_LINK = "manzanospopshop://";

  // simple UA detection (no extra imports)
  function isIOS() {
    if (typeof navigator === "undefined") return false;
    return /iPad|iPhone|iPod/.test(navigator.userAgent) || (navigator.platform === "MacIntel" && (navigator as any).maxTouchPoints > 1);
  }
  function isAndroid() {
    if (typeof navigator === "undefined") return false;
    return /Android/.test(navigator.userAgent);
  }

  function openMpsAppWithFallback() {
    // desktop: just go to website
    if (typeof window === "undefined") return;

    const fallback = isIOS() ? IOS_APP_STORE : isAndroid() ? ANDROID_PLAY_STORE : "https://www.manzanospopshop.com";

    // attempt deep link
    window.location.href = MPS_DEEP_LINK;

    // fallback after a short delay
    window.setTimeout(() => {
      window.location.href = fallback;
    }, 900);
  }

  return (
    <div
      ref={pageRef}
      className="relative z-10 min-h-screen w-full text-white"
    >
      <TopNav />

      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] z-50 origin-left"
        style={{
          scaleX: progress,
          background: 'linear-gradient(90deg, var(--mesh-primary), var(--mesh-secondary))',
        }}
      />

      <main>
        {/* HERO */}
        <section className="pt-20 sm:pt-24 px-4 sm:px-6 lg:px-10 pb-4 sm:pb-6">
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
                  Apps • Commerce
                </span>
              </div>

              <h1
                className="text-4xl sm:text-5xl lg:text-7xl tracking-tight leading-[1.05] text-balance"
                style={{ fontFamily: "var(--font-lato)" }}
              >
                <span className="sr-only">ManzanoHQ — Apps & Commerce</span>

                <span className="relative inline-block w-[220px] sm:w-[280px] lg:w-[360px]">
                  <Image
                    src={AppImages.logoWordedAlt}
                    alt="ManzanoHQ"
                    className="w-full h-auto object-contain"
                    priority
                  />
                </span>
              </h1>

              <motion.p
                className="mt-3 sm:mt-4 text-lg sm:text-xl text-white/80"
                variants={item}
                initial="hidden"
                animate="show"
              >
                Headquarters for the products we build and the experiences we ship.
              </motion.p>

              {/* <motion.div
                className="mt-6 sm:mt-8 flex flex-wrap gap-3 sm:gap-4"
                variants={staggerContainer}
                initial="hidden"
                animate="show"
              >
                <motion.div variants={item}>
                  <NeonButton
                    title="explore products"
                    onClick={() =>
                      document
                        .querySelector("#products")
                        ?.scrollIntoView({ behavior: "smooth" })
                    }
                  />
                </motion.div>
              </motion.div> */}

              <div className="mt-6 sm:mt-8">
                <div className="mx-auto w-full max-w-7xl">
                  <div className="text-white/50 text-sm mb-3">
                    Trusted Tools We Build With
                  </div>
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
                      src={AppImages.logoInvertAlpha}
                      alt="ManzanoHQ mark"
                      fill
                      sizes="(max-width: 640px) 160px, (max-width: 1024px) 224px, 288px"
                      className="object-contain"
                      priority
                    />
                  </motion.div>

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

        {/* PRODUCTS HUB + STATS */}
        <section id="products" className="px-4 sm:px-6 lg:px-10 py-10 lg:py-16">
          <div className="mx-auto w-full max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
              {/* LEFT: Products column (HORIZONTAL SCROLL) */}
              <motion.div
                className="lg:col-span-8 flex flex-col gap-4"
                variants={fadeUpVariant(0.05)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
                <SectionTitle title="Products" subtitle="Explore the ecosystem" />

                <div
                  className="relative rounded-3xl border bg-white/5 backdrop-blur-xl p-4 sm:p-5 overflow-hidden"
                  style={{ borderColor: `rgba(${PRIMARY_RGB},0.25)` }}
                >
                  <div className="h-auto max-h-[285px] lg:h-[285px] overflow-x-auto overflow-y-hidden pr-1">
                    <motion.div
                      className="flex gap-4 sm:gap-5"
                      variants={staggerContainer}
                      initial="hidden"
                      whileInView="show"
                      viewport={{ once: true, amount: 0.3 }}
                    >
                      <motion.div
                        variants={item}
                        className="w-[260px] sm:w-[280px] lg:w-[320px] shrink-0"
                      >
                        <HoloCard
                          title="Manzanos PopShop"
                          desc="Collectible Pops & merch with wishlists, tracking, themed UI, and a smooth checkout."
                          iconSrc={AppImages.mpsIcon}
                          iconAlt="Manzanos PopShop"
                          iconSize={26}
                          iconShape="rounded"
                          href="https://www.manzanospopshop.com"
                          eyebrow="Open App"
                          badge="Open Site"
                          badgeAction={{
                            href: "https://www.manzanospopshop.com",
                            ariaLabel: "Open Manzanos PopShop website",
                          }}
                          eyebrowAction={{
                            onClick: () => openMpsAppWithFallback(),
                            ariaLabel: "Open Manzanos PopShop app",
                          }}
                        />
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>

              {/* RIGHT: Snapshot / Stats column (VERTICAL SCROLL) */}
              <motion.div
                className="lg:col-span-4 flex flex-col gap-4"
                variants={fadeUpVariant(0.08)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.3 }}
              >
                <SectionTitle title="Snapshot" subtitle="ManzanoHQ in numbers" />

                <div
                  className="relative rounded-3xl border bg-white/5 backdrop-blur-xl p-4 sm:p-5 overflow-hidden"
                  style={{ borderColor: `rgba(${PRIMARY_RGB},0.25)` }}
                >
                  <div className="h-auto max-h-[285px] lg:h-[285px] overflow-y-auto pr-1">
                    <Stats compact />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* WHY MANZANOHQ */}
        {/* <section id="why" className="px-4 sm:px-6 lg:px-10 py-10 lg:py-16">
          <div className="mx-auto w-full max-w-7xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <motion.div
              variants={fadeUpVariant(0.05)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="lg:col-span-6"
            >
              <SectionTitle
                title="Why ManzanoHQ"
                subtitle="Design-led, shipping-focused"
              />
              <ul className="mt-5 sm:mt-6 space-y-2.5 sm:space-y-3 text-white/75 leading-relaxed">
                <li>• Lorem ipsum dolor sit amet, consectetur adipisicing elit…</li>
                <li>• Lorem ipsum dolor sit amet consectetur adipisicing elit…</li>
                <li>• Lorem ipsum dolor sit amet consectetur adipisicing elit…</li>
              </ul>
            </motion.div>

            <motion.div
              variants={fadeUpVariant(0.12)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.4 }}
              className="lg:col-span-6"
            >
              <div
                className="rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 backdrop-blur-xl bg-white/5 border"
                style={{ borderColor: `rgba(${ACCENT_RGB},0.35)` }}
              >
                <div className="flex flex-wrap gap-2.5 sm:gap-3 text-sm text-white/80">
                  {["Blank", "Lorem", "Ipsum", "Test", "Pow", "Wow"].map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full border border-white/15 bg-white/5"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-4 sm:mt-6 text:white/70">
                  lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore…
                </div>
              </div>
            </motion.div>
          </div>
        </section> */}

        {/* SHOWCASE */}
        {/* <section id="showcase" className="px-4 sm:px-6 lg:px-10 py-10 lg:py-16">
          <div className="mx-auto w-full max-w-7xl">
            <SectionTitle title="Showcase" subtitle="subtitle" />
            <motion.div
              className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6 mt-6 sm:mt-8"
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.25 }}
            >
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <motion.div
                  key={i}
                  variants={item}
                  whileHover={{ scale: 1.03 }}
                  className="aspect-square rounded-2xl overflow-hidden border bg-white/5"
                  style={{ borderColor: `rgba(${PRIMARY_RGB},0.2)` }}
                >
                  <Image
                    src={AppImages.dev}
                    alt={`Showcase ${i}`}
                    width={800}
                    height={800}
                    className="w-full h-full object-cover"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    priority={i <= 2}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section> */}

        {/* FAQ */}
        {/* <section className="px-4 sm:px-6 lg:px-10 py-10 lg:py-16">
          <div className="mx-auto w-full max-w-7xl">
            <SectionTitle title="FAQ" subtitle="Good to know" />
            <div className="mt-6 sm:mt-8">
              <FAQ />
            </div>
          </div>
        </section> */}

        {/* CONTACT / CTA + Newsletter on the left */}
        <ContactSection onOpenHire={() => setOpenHire(true)} />
      </main>

      {/* FOOTER */}
      <footer className="px-4 sm:px-6 lg:px-10 pb-8 sm:pb-10">
        <div className="mx-auto w-full max-w-7xl flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 border-t border-white/10 pt-5 sm:pt-6 text-white/50">
          <span>© {new Date().getFullYear()} ManzanoHQ</span>
          <div className="flex items-center gap-4">
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
          className="px-4 sm:px-5 py-3 rounded-full font-semibold shadow-2xl border text:white backdrop-blur-md"
          style={{
            background:
              "linear-gradient(90deg, rgba(61,63,143,0.28), rgba(13,79,163,0.28))",
            borderColor: `rgba(${ACCENT_RGB},0.35)`,
          }}
        >
          Work with ManzanoHQ
        </div>
      </motion.button>

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