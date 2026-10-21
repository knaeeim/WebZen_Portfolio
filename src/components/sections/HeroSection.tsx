"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, Sparkles, Rocket, Zap, ShieldCheck } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useSite } from "@/context/SiteContext";
import Image from "next/image";

export function HeroSection() {
  const { language } = useLanguage();
  const { data } = useSite();
  const hero = data?.hero;
  const isBn = language === "bn";

  const contactPhone = data?.footer?.phone || data?.contact?.phone || "+880 1886-932936";
  const rawWhatsapp = data?.contact?.whatsapp || "+8801886932936";
  const whatsappNumber = rawWhatsapp.replace(/[^0-9]/g, "");

  // CMS-synced content with intelligent fallbacks
  const badgeText = isBn
    ? (hero?.badge || "নেক্সট-জেন ৩ডি ক্লে আর্কিটেকচার")
    : (hero?.badge || "Next-Gen 3D Clay Engineering");

  const titleLine1 = isBn
    ? (hero?.titlePart1Bn || hero?.titlePart1 || "স্পর্শযোগ্য ডিজিটাল")
    : (hero?.titlePart1 || "Tactile Digital");

  const titleAccent = isBn
    ? (hero?.titleGradientBn || hero?.titleGradient || "ক্লে স্টুডিও।")
    : (hero?.titleGradient || "Clay Studio.");

  const subtitle = isBn
    ? (hero?.descriptionBn || hero?.description || "আমরা তৈরি করি স্পর্শযোগ্য ওয়েব অ্যাপ্লিকেশন, ইনফ্লেটেড থ্রিডি ইন্টারফেস এবং হাই-কনভার্টিং ডিজিটাল প্রোডাক্ট যা ব্যবহারকারীকে মুগ্ধ করবে।")
    : (hero?.description || "We craft tactile web applications, inflated 3D digital products, and ultra-responsive enterprise software designed with bouncy physics and pure visual joy.");

  const ctaText = isBn
    ? (hero?.primaryCtaTextBn || hero?.primaryCtaText || "প্রজেক্ট শুরু করুন")
    : (hero?.primaryCtaText || "Launch Your Project");

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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.96 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        stiffness: 240,
        damping: 18,
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#0F1117] pt-28 sm:pt-36 lg:pt-40 pb-12"
    >
      {/* ─── Tactile Clay Ambient Lighting Background ─── */}
      {/* Top-right soft neon coral ambient aura */}
      <div
        className="absolute top-1/4 right-0 w-[600px] h-[600px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255, 92, 53, 0.14) 0%, rgba(255, 92, 53, 0.04) 45%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />
      
      {/* Bottom-left soft violet aura */}
      <div
        className="absolute bottom-1/4 left-0 w-[550px] h-[550px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(124, 58, 237, 0.14) 0%, rgba(124, 58, 237, 0.03) 50%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />

      {/* ─── Main Content Canvas ─── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-10"
      >
        
        {/* Top Floating 3D Clay Capsule Badge */}
        <motion.div variants={itemVariants} className="mb-4 sm:mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-2 sm:px-5 sm:py-2.5 rounded-full bg-[#181B24] border border-white/10 shadow-[0_8px_20px_rgba(0,0,0,0.5),inset_2px_2px_4px_rgba(255,255,255,0.14),inset_-2px_-2px_4px_rgba(0,0,0,0.6)]">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5C35] shadow-[0_0_8px_rgba(255,92,53,0.8)] animate-pulse" />
            <span className={`text-xs sm:text-xs font-black tracking-wider uppercase text-neutral-200 ${isBn ? "font-bangla-ui" : ""}`}>
              {badgeText}
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#FF5C35]/20 text-[#FF5C35] font-bold border border-[#FF5C35]/30">
              CLAY 3D UI
            </span>
          </div>
        </motion.div>

        {/* ─── Split Grid: Left Chunky Typography + Right 3D Clay Sculpture ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* ══ Left Column: Puffy Friendly Headline & Spring Buttons ══ */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Big Friendly Rounded Typography with Soft 3D Styling */}
            <motion.h1
              variants={itemVariants}
              className={`leading-[0.98] sm:leading-[0.95] tracking-[-0.035em] ${isBn ? "font-bangla-display" : "font-display font-black"}`}
            >
              {/* Line 1: Pure White Puffy Headline */}
              <span className="block text-white text-[clamp(2.8rem,7.5vw,5.6rem)] text-clay-3d">
                {titleLine1}
              </span>

              {/* Line 2: Inflated Coral-to-Violet Clay Gradient */}
              <span className="block text-[clamp(2.8rem,7.5vw,5.6rem)] text-gradient-hero mt-1 sm:mt-2 text-clay-3d">
                {titleAccent}
              </span>
            </motion.h1>

            {/* Sub-headline with friendly readability */}
            <motion.p
              variants={itemVariants}
              className={`mt-6 sm:mt-7 text-neutral-300 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl font-normal ${isBn ? "font-bangla-body" : ""}`}
            >
              {subtitle}
            </motion.p>

            {/* Floating 3D Clay Capsule Tags */}
            <motion.div variants={itemVariants} className="mt-6 flex flex-wrap items-center gap-2.5 sm:gap-3">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181B24] border border-white/10 text-xs font-semibold text-neutral-300 shadow-[0_6px_16px_rgba(0,0,0,0.45),inset_2px_2px_3px_rgba(255,255,255,0.12),inset_-2px_-2px_4px_rgba(0,0,0,0.6)]">
                <Sparkles className="w-3.5 h-3.5 text-[#FF5C35]" />
                <span>99% Client Retention</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181B24] border border-white/10 text-xs font-semibold text-neutral-300 shadow-[0_6px_16px_rgba(0,0,0,0.45),inset_2px_2px_3px_rgba(255,255,255,0.12),inset_-2px_-2px_4px_rgba(0,0,0,0.6)]">
                <Rocket className="w-3.5 h-3.5 text-[#8B5CF6]" />
                <span>50+ Ventures Shipped</span>
              </div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#181B24] border border-white/10 text-xs font-semibold text-neutral-300 shadow-[0_6px_16px_rgba(0,0,0,0.45),inset_2px_2px_3px_rgba(255,255,255,0.12),inset_-2px_-2px_4px_rgba(0,0,0,0.6)]">
                <Zap className="w-3.5 h-3.5 text-[#10B981]" />
                <span>0.2s TTFB Performance</span>
              </div>
            </motion.div>

            {/* Tactile Chunky Clay Buttons with Spring Kinetics */}
            <motion.div variants={itemVariants} className="mt-8 sm:mt-10 flex flex-wrap items-center gap-4">
              {/* Primary Coral Clay Button */}
              <a
                href={ctaLink}
                onClick={(e) => handleSmoothScroll(e, ctaLink)}
              >
                <motion.button
                  whileHover={{ y: -4, scale: 1.03 }}
                  whileTap={{ y: 0, scale: 0.94 }}
                  transition={{ type: "spring", stiffness: 260, damping: 15 }}
                  className={`clay-btn-coral px-8 sm:px-9 py-4 rounded-full text-sm sm:text-base font-black tracking-wide uppercase gap-3 shadow-[0_16px_36px_rgba(255,92,53,0.45)] ${isBn ? "font-bangla-ui" : ""}`}
                >
                  <span>{ctaText}</span>
                  <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black/30 text-white shadow-inner">
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </motion.button>
              </a>

              {/* Secondary Slate Clay Button */}
              <a
                href="#projects"
                onClick={(e) => handleSmoothScroll(e, "#projects")}
              >
                <motion.button
                  whileHover={{ y: -4, scale: 1.03 }}
                  whileTap={{ y: 0, scale: 0.94 }}
                  transition={{ type: "spring", stiffness: 260, damping: 15 }}
                  className={`clay-btn-dark px-7 py-4 rounded-full text-sm font-bold tracking-wider uppercase gap-2.5 ${isBn ? "font-bangla-ui" : ""}`}
                >
                  <span>{isBn ? "আমাদের কাজ দেখুন" : "Explore Works"}</span>
                  <span className="w-2 h-2 rounded-full bg-[#8B5CF6]" />
                </motion.button>
              </a>
            </motion.div>

          </div>

          {/* ══ Right Column: Floating 3D Clay Laptop Sculpture with Overlaid Pods ══ */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 relative flex items-center justify-center"
          >
            {/* Background Multi-layered Clay Halo */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(circle at 50% 50%, rgba(255, 92, 53, 0.22) 0%, rgba(124, 58, 237, 0.16) 40%, transparent 70%)",
                filter: "blur(60px)",
                transform: "scale(1.15)",
              }}
            />

            {/* Chunky Inflated 3D Clay Frame with Gentle Floating Physics */}
            <div className="relative w-full max-w-[520px] rounded-[36px] overflow-hidden bg-[#181B24] border border-white/[0.12] shadow-[20px_28px_60px_rgba(0,0,0,0.7),inset_4px_4px_8px_rgba(255,255,255,0.18),inset_-5px_-5px_12px_rgba(0,0,0,0.7)] p-4 sm:p-5 group">
              
              {/* Window Titlebar with Clay Dots */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FF5C35] shadow-[inset_1px_1px_2px_rgba(255,255,255,0.5),0_2px_4px_rgba(0,0,0,0.4)]" />
                  <span className="w-3 h-3 rounded-full bg-[#FBBF24] shadow-[inset_1px_1px_2px_rgba(255,255,255,0.5),0_2px_4px_rgba(0,0,0,0.4)]" />
                  <span className="w-3 h-3 rounded-full bg-[#10B981] shadow-[inset_1px_1px_2px_rgba(255,255,255,0.5),0_2px_4px_rgba(0,0,0,0.4)]" />
                </div>
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#12141C] border border-white/5 shadow-inner text-[10px] font-mono text-neutral-300">
                  <span className="w-2 h-2 rounded-full bg-[#FF5C35] animate-pulse" />
                  <span>WEBZEN 3D CLAY STUDIO</span>
                </div>
              </div>

              {/* The Masterpiece 3D Clay Laptop Image */}
              <div className="relative w-full rounded-2xl overflow-hidden shadow-[inset_2px_2px_6px_rgba(0,0,0,0.6)]">
                <Image
                  src="/images/hero-clay.jpg"
                  alt="WebZen 3D Claymorphic Tech Studio Composition"
                  width={1280}
                  height={720}
                  priority
                  className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                />
              </div>

              {/* Floating Overlaid Clay Pod 1 (Top Right) */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="absolute -top-3 -right-3 hidden sm:flex items-center gap-2 px-4 py-2 rounded-2xl bg-[#1E2230] border border-white/10 shadow-[0_12px_24px_rgba(0,0,0,0.6),inset_2px_2px_4px_rgba(255,255,255,0.2),inset_-3px_-3px_6px_rgba(0,0,0,0.6)]"
              >
                <div className="w-6 h-6 rounded-xl bg-[#FF5C35] flex items-center justify-center text-white shadow-sm">
                  <Sparkles className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-[11px] font-black text-white">Tactile UI</div>
                  <div className="text-[9px] text-neutral-400 font-mono">Inflated 3D</div>
                </div>
              </motion.div>

              {/* Floating Overlaid Clay Pod 2 (Bottom Left) */}
              <motion.div
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-3 -left-3 hidden sm:flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#1E2230] border border-white/10 shadow-[0_12px_24px_rgba(0,0,0,0.6),inset_2px_2px_4px_rgba(255,255,255,0.2),inset_-3px_-3px_6px_rgba(0,0,0,0.6)]"
              >
                <div className="w-6 h-6 rounded-xl bg-[#8B5CF6] flex items-center justify-center text-white shadow-sm">
                  <ShieldCheck className="w-3.5 h-3.5" />
                </div>
                <div>
                  <div className="text-[11px] font-black text-white">Enterprise SLA</div>
                  <div className="text-[9px] text-[#10B981] font-mono font-bold">99.99% Uptime</div>
                </div>
              </motion.div>

            </div>
          </motion.div>

        </div>

        {/* ─── Bottom Bar: Tactile Clay Pill Island ─── */}
        <motion.div
          variants={itemVariants}
          className="mt-12 sm:mt-16 p-4 sm:p-5 rounded-3xl bg-[#181B24] border border-white/[0.08] shadow-[12px_16px_36px_rgba(0,0,0,0.55),inset_2.5px_2.5px_5px_rgba(255,255,255,0.1),inset_-3px_-3px_8px_rgba(0,0,0,0.6)] flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          {/* Bottom-left: WhatsApp Quick Direct Link */}
          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#1E2230] border border-white/10 text-xs text-neutral-200 hover:text-white transition-all shadow-[0_4px_12px_rgba(0,0,0,0.35),inset_1.5px_1.5px_3px_rgba(255,255,255,0.12)] group"
            >
              <MessageCircle className="w-4 h-4 text-[#10B981] group-hover:scale-110 transition-transform" />
              <span className="font-mono text-neutral-200 font-bold">{contactPhone}</span>
            </a>
            <span className="text-neutral-600 hidden sm:inline">•</span>
            <span className={`text-neutral-400 text-xs font-medium ${isBn ? "font-bangla-body" : ""}`}>
              {isBn ? "ইনস্ট্যান্ট কনসালটেশন ও ২৪/৭ রেসপন্স।" : "Tactile depth, smooth kinetics & enterprise agility."}
            </span>
          </div>

          {/* Bottom-right: Playful Clay Spheres & Brand Tag */}
          <div className="flex items-center gap-4">
            <div className="flex items-center -space-x-1.5">
              <span className="w-3.5 h-3.5 rounded-full bg-[#FF5C35] shadow-[inset_1px_1px_2px_rgba(255,255,255,0.6),0_2px_6px_rgba(255,92,53,0.4)]" />
              <span className="w-3.5 h-3.5 rounded-full bg-[#8B5CF6] shadow-[inset_1px_1px_2px_rgba(255,255,255,0.6),0_2px_6px_rgba(124,58,237,0.4)]" />
              <span className="w-3.5 h-3.5 rounded-full bg-[#10B981] shadow-[inset_1px_1px_2px_rgba(255,255,255,0.6),0_2px_6px_rgba(16,185,129,0.4)]" />
              <span className="w-3.5 h-3.5 rounded-full bg-[#FBBF24] shadow-[inset_1px_1px_2px_rgba(255,255,255,0.6),0_2px_6px_rgba(251,191,36,0.4)]" />
            </div>

            <span className="font-display font-black text-sm text-neutral-300">
              webzen<span className="text-[#FF5C35]">.bd</span>
            </span>
          </div>
        </motion.div>

      </motion.div>
    </section>
  );
}
