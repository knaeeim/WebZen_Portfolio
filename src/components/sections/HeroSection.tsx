"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Sparkles, Zap, ShieldCheck, ChevronDown, Compass } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useSite } from "@/context/SiteContext";

export function HeroSection() {
  const { language } = useLanguage();
  const { data } = useSite();
  const hero = data?.hero;
  const isBn = language === "bn";

  // CMS-synced content with bespoke Zen fallbacks
  const badgeText = isBn
    ? (hero?.badge || "ডিজিটাল আর্কিটেকচার ও ওয়েব ইঞ্জিনিয়ারিং")
    : (hero?.badge || "Digital Architecture & Web Engineering");

  const titleLine1 = isBn
    ? (hero?.titlePart1Bn || hero?.titlePart1 || "প্রশান্তির ছোঁয়ায়")
    : (hero?.titlePart1 || "Pure Zen &");

  const titleAccent = isBn
    ? (hero?.titleGradientBn || hero?.titleGradient || "উন্নত ওয়েব আর্কিটেকচার।")
    : (hero?.titleGradient || "Modern Technology.");

  const subtitle = isBn
    ? (hero?.descriptionBn || hero?.description || "আমরা তৈরি করি শান্তিময়, গতিশীল এবং ঘর্ষণহীন ডিজিটাল অভিজ্ঞতা। জটিল প্রযুক্তিকে সহজ ও নান্দনিক রূপ দিয়ে আপনার ব্র্যান্ডকে পৌঁছে দিই বিশ্বমানে।")
    : (hero?.description || "We craft frictionless, hyper-performant digital experiences and bespoke web applications. Merging extreme minimalism with advanced engineering to empower ambitious global brands.");

  const ctaText = isBn
    ? (hero?.primaryCtaTextBn || hero?.primaryCtaText || "প্রজেক্ট শুরু করুন")
    : (hero?.primaryCtaText || "Initiate Your Project");

  const ctaLink = hero?.primaryCtaLink || "#contact";

  // Smooth scroll handler
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const navHeight = 85;
        const targetPos = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({ top: targetPos, behavior: "smooth" });
        window.history.pushState(null, "", href);
      }
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 24, filter: "blur(4px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-between overflow-hidden bg-[#060813] pt-32 sm:pt-40 lg:pt-44 pb-14 sm:pb-16"
    >
      {/* ─── Ethereal Aurora Center Glow Backdrop ─── */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[1100px] h-[550px] sm:h-[750px] pointer-events-none rounded-full"
        style={{
          background: "radial-gradient(ellipse at center, rgba(45, 212, 191, 0.14) 0%, rgba(129, 140, 248, 0.12) 35%, rgba(192, 132, 252, 0.08) 60%, transparent 75%)",
          filter: "blur(120px)",
        }}
        aria-hidden="true"
      />

      {/* ─── Main Sensory Content Monument ─── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex-1 flex flex-col items-center justify-center max-w-5xl mx-auto w-full px-5 sm:px-8 text-center"
      >
        {/* Top Floating Zen Pill Capsule */}
        <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-3 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full glass-zen-pill border border-white/[0.12] shadow-[0_12px_32px_rgba(0,0,0,0.5)]">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#2DD4BF] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#2DD4BF] shadow-[0_0_10px_#2DD4BF]" />
            </span>
            <span className={`text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-neutral-200 ${isBn ? "font-bangla-ui tracking-normal" : ""}`}>
              {badgeText}
            </span>
            <span className="hidden sm:inline text-neutral-600 font-mono">•</span>
            <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/[0.06] text-[#2DD4BF] font-bold border border-[#2DD4BF]/25">
              DHAKA & GLOBAL
            </span>
          </div>
        </motion.div>

        {/* ─── Bold Centered Typographic Monument: Communicating Zen & Tech ─── */}
        <motion.h1
          variants={itemVariants}
          className={`leading-[1.02] sm:leading-[0.98] tracking-[-0.04em] ${isBn ? "font-bangla-display" : "font-display font-extrabold"}`}
        >
          {/* Line 1: Pure Zen Starlight White with High-End Depth */}
          <span className="block text-white text-[clamp(2.5rem,6.8vw,5.5rem)] text-gradient-zen drop-shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
            {titleLine1}
          </span>

          {/* Line 2: Breathing Liquid Aurora Gradient */}
          <span className="block text-[clamp(2.5rem,6.8vw,5.5rem)] text-gradient-aurora mt-2 sm:mt-3 drop-shadow-[0_8px_32px_rgba(45,212,191,0.25)]">
            {titleAccent}
          </span>
        </motion.h1>

        {/* ─── Zen Subheadline with Pure Readability & Breathable Margin ─── */}
        <motion.p
          variants={itemVariants}
          className={`mt-7 sm:mt-9 text-neutral-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-2xl font-normal ${isBn ? "font-bangla-body" : ""}`}
        >
          {subtitle}
        </motion.p>

        {/* ─── Interactive Fluid CTA Cluster ─── */}
        <motion.div variants={itemVariants} className="mt-9 sm:mt-11 flex flex-wrap items-center justify-center gap-4 sm:gap-5">
          {/* Primary Aurora Action Button */}
          <a
            href={ctaLink}
            onClick={(e) => handleSmoothScroll(e, ctaLink)}
          >
            <motion.button
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ y: 0, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
              className={`aurora-btn-primary px-8 sm:px-10 py-4 text-xs sm:text-sm font-extrabold tracking-[0.16em] uppercase gap-3 shadow-[0_16px_40px_-8px_rgba(45,212,191,0.4)] ${isBn ? "font-bangla-ui tracking-normal text-sm" : ""}`}
            >
              <span>{ctaText}</span>
              <span className="flex items-center justify-center w-6 h-6 rounded-full bg-black/20 text-[#030712] shadow-inner">
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </motion.button>
          </a>

          {/* Secondary Frosted Zen Glass Button */}
          <a
            href="#projects"
            onClick={(e) => handleSmoothScroll(e, "#projects")}
          >
            <motion.button
              whileHover={{ y: -3, scale: 1.02 }}
              whileTap={{ y: 0, scale: 0.96 }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
              className={`aurora-btn-glass px-7 sm:px-9 py-4 text-xs sm:text-sm font-semibold tracking-[0.16em] uppercase gap-2.5 ${isBn ? "font-bangla-ui tracking-normal text-sm" : ""}`}
            >
              <span>{isBn ? "নির্বাচিত কাজ দেখুন" : "Explore Works"}</span>
              <span className="w-2 h-2 rounded-full bg-[#2DD4BF] shadow-[0_0_8px_#2DD4BF]" />
            </motion.button>
          </a>
        </motion.div>

        {/* ─── Quiet Zen Verification Strip: Calm Hairline Divider Metrics ─── */}
        <motion.div
          variants={itemVariants}
          className="mt-14 sm:mt-16 w-full max-w-3xl px-6 py-4 rounded-full glass-zen-pill border border-white/[0.08] shadow-[0_16px_40px_rgba(0,0,0,0.4)] flex flex-wrap items-center justify-around gap-4 sm:gap-6"
        >
          <div className="flex items-center gap-2.5 text-xs text-neutral-300 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2DD4BF] shadow-[0_0_6px_#2DD4BF]" />
            <span className="font-semibold text-white">99%</span>
            <span className="text-neutral-400">{isBn ? "ক্লায়েন্ট সন্তুষ্টি" : "Client Satisfaction"}</span>
          </div>

          <span className="hidden sm:inline text-neutral-700">/</span>

          <div className="flex items-center gap-2.5 text-xs text-neutral-300 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#818CF8] shadow-[0_0_6px_#818CF8]" />
            <span className="font-semibold text-white">50+</span>
            <span className="text-neutral-400">{isBn ? "প্রজেক্ট ডেলিভারি" : "Ventures Shipped"}</span>
          </div>

          <span className="hidden sm:inline text-neutral-700">/</span>

          <div className="flex items-center gap-2.5 text-xs text-neutral-300 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C084FC] shadow-[0_0_6px_#C084FC]" />
            <span className="font-semibold text-white">&lt; 0.2s</span>
            <span className="text-neutral-400">{isBn ? "TTFB পারফরম্যান্স" : "TTFB Latency"}</span>
          </div>

          <span className="hidden sm:inline text-neutral-700">/</span>

          <div className="flex items-center gap-2.5 text-xs text-neutral-300 font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] shadow-[0_0_6px_#38BDF8]" />
            <span className="font-semibold text-white">24/7</span>
            <span className="text-neutral-400">{isBn ? "ইনস্ট্যান্ট সাপোর্ট" : "Zen Support"}</span>
          </div>
        </motion.div>
      </motion.div>

      {/* ─── Zen Bottom Scroll Indicator ─── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="relative z-10 flex flex-col items-center gap-2 select-none pt-4"
      >
        <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-neutral-400">
          SCROLL TO EXPLORE
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-white/20 flex items-start justify-center p-1.5"
        >
          <span className="w-1 h-1.5 rounded-full bg-[#2DD4BF] shadow-[0_0_6px_#2DD4BF]" />
        </motion.div>
      </motion.div>
    </section>
  );
}
