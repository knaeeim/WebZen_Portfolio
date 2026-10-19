"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
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
    ? (hero?.badge || "আপনার ডিজিটাল গ্রোথ পার্টনার")
    : (hero?.badge || "Your Digital Growth Partner");

  const titleLine1 = isBn
    ? (hero?.titlePart1Bn || hero?.titlePart1 || "ওয়ান-স্টপ ডিজিটাল")
    : (hero?.titlePart1 || "One-Stop Digital");

  const subtitle = isBn
    ? (hero?.descriptionBn || hero?.description || "ওয়েব ডেভেলপমেন্ট। UI/UX ডিজাইন। ব্র্যান্ডিং ও গ্রোথ। সব এক ছাদের নিচে।")
    : (hero?.description || "Design · Branding · Web Architecture · Cloud Marketing. All under one roof.");

  const ctaText = isBn
    ? (hero?.primaryCtaTextBn || hero?.primaryCtaText || "যোগাযোগ করুন")
    : (hero?.primaryCtaText || "Let's Collaborate");

  const ctaLink = hero?.primaryCtaLink || "#contact";

  // Smooth scroll handler
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const navHeight = 72;
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
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
      },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden bg-[#000000]"
    >
      {/* ─── Ambient Studio Glow Background ─── */}
      {/* Intense warm golden & amber glow behind laptop & bottom */}
      <div
        className="absolute bottom-0 right-0 w-[650px] sm:w-[900px] h-[550px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at 80% 80%, rgba(255, 184, 0, 0.18) 0%, rgba(234, 120, 20, 0.10) 40%, transparent 70%)",
          filter: "blur(90px)",
        }}
      />
      
      {/* Subtle top-left fill */}
      <div
        className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[400px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255, 255, 255, 0.02) 0%, transparent 70%)",
          filter: "blur(70px)",
        }}
      />

      {/* ─── Main Content Canvas ─── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 flex-1 flex flex-col justify-center max-w-7xl mx-auto w-full px-5 sm:px-8 lg:px-10 pt-28 sm:pt-36 lg:pt-38 pb-10"
      >
        
        {/* Top Capsule Badge */}
        <motion.div variants={itemVariants} className="mb-4 sm:mb-6">
          <span
            className={`inline-flex items-center gap-2 px-4 py-1.5 sm:px-5 sm:py-2 rounded-full text-xs sm:text-xs font-bold tracking-wider uppercase border transition-all duration-300 ${isBn ? "font-bangla-ui" : ""}`}
            style={{
              color: "#FFB800",
              borderColor: "rgba(255, 184, 0, 0.35)",
              background: "rgba(255, 184, 0, 0.05)",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#FFB800] animate-pulse" />
            <span>{badgeText}</span>
          </span>
        </motion.div>

        {/* ─── Split Grid: Left Poster Typography + Right Backlit Laptop ─── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* ══ Left Column: Creative Studio Headline ══ */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Massive Typography matching reference poster */}
            <motion.h1
              variants={itemVariants}
              className={`leading-[0.98] sm:leading-[0.94] tracking-[-0.035em] ${isBn ? "font-bangla-display" : "font-display font-black"}`}
            >
              {/* Line 1: Pure White ("One-Stop" or "Let's Scale") */}
              <span className="block text-white text-[clamp(2.7rem,7.5vw,5.8rem)] drop-shadow-[0_4px_40px_rgba(0,0,0,0.9)]">
                {titleLine1}
              </span>

              {/* Line 2 & 3: Signature "(→) STUDIO" lockup */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-2 sm:mt-3">
                {/* Golden Circular Badge with Black Arrow (→) from reference poster */}
                <span 
                  className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full shadow-[0_0_30px_rgba(255,184,0,0.4)] shrink-0 transition-transform hover:scale-105 duration-300"
                  style={{
                    background: "#FFB800",
                    color: "#000000",
                  }}
                >
                  <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 text-black stroke-[2.5]" />
                </span>

                {/* Outlined STUDIO typography */}
                <span 
                  className="text-[clamp(2.7rem,7.5vw,5.8rem)] font-display font-light uppercase text-outline-studio"
                  style={{
                    color: "transparent",
                    WebkitTextStroke: "1.8px #FFB800",
                    letterSpacing: "0.06em",
                  }}
                >
                  {isBn ? "স্টুডিও" : "STUDIO"}
                </span>
              </div>
            </motion.h1>

            {/* Hairline Divider Line from poster */}
            <motion.div variants={itemVariants} className="mt-6 sm:mt-8">
              <div className="w-full max-w-xl h-[1px] bg-white/[0.15]" />
            </motion.div>

            {/* Sub-headline directly under hairline: "Design · Branding · Marketing" */}
            <motion.div variants={itemVariants} className="mt-4 sm:mt-5 flex items-center justify-between max-w-xl">
              <p className={`text-neutral-400 text-xs sm:text-sm lg:text-base font-normal tracking-wide ${isBn ? "font-bangla-body" : ""}`}>
                {subtitle}
              </p>
            </motion.div>

            {/* Primary Action Button */}
            <motion.div variants={itemVariants} className="mt-7 sm:mt-9 flex items-center gap-4">
              <a
                href={ctaLink}
                onClick={(e) => handleSmoothScroll(e, ctaLink)}
                className="group"
              >
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center gap-3 px-7 sm:px-9 py-3.5 sm:py-4 rounded-full text-sm sm:text-base font-black tracking-wide uppercase transition-all duration-300 cursor-pointer shadow-[0_8px_30px_rgba(255,184,0,0.35)] hover:shadow-[0_12px_45px_rgba(255,184,0,0.55)] ${isBn ? "font-bangla-ui" : ""}`}
                  style={{
                    background: "linear-gradient(135deg, #FFB800 0%, #F59E0B 50%, #EA7814 100%)",
                    color: "#000000",
                  }}
                >
                  <span>{ctaText}</span>
                  <span className="flex items-center justify-center w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black text-[#FFB800] transition-transform duration-300 group-hover:translate-x-1">
                    <ArrowRight className="w-4 h-4 text-[#FFB800]" />
                  </span>
                </motion.button>
              </a>

              {/* Direct WhatsApp Quick Chat */}
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:flex items-center gap-2 px-5 py-3.5 rounded-full border border-white/10 hover:border-white/20 bg-white/[0.03] text-neutral-300 hover:text-white text-xs font-semibold tracking-wider uppercase transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>WhatsApp</span>
              </a>
            </motion.div>

          </div>

          {/* ══ Right Column: Sleek Metallic Laptop with Intense Orange/Gold Backlit Glow ══ */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-5 relative flex items-center justify-center lg:justify-end"
          >
            {/* Ambient Backlit Halo under laptop */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(circle at 60% 60%, rgba(255, 184, 0, 0.28) 0%, rgba(234, 120, 20, 0.12) 50%, transparent 75%)",
                filter: "blur(60px)",
                transform: "scale(1.1)",
              }}
            />

            {/* Laptop Image Frame */}
            <div className="relative w-full max-w-[500px] lg:max-w-[580px]">
              <Image
                src="/images/hero-laptop.jpg"
                alt="WebZen Studio MacBook with golden ambient backlit glow"
                width={1280}
                height={720}
                priority
                className="w-full h-auto object-contain drop-shadow-[0_25px_60px_rgba(255,184,0,0.2)]"
                style={{
                  filter: "brightness(1.05) contrast(1.08)",
                }}
              />

              {/* Reflection hairline beneath laptop */}
              <div
                className="absolute -bottom-1 left-[15%] right-[15%] h-[1px]"
                style={{
                  background: "linear-gradient(90deg, transparent 0%, rgba(255, 184, 0, 0.5) 50%, transparent 100%)",
                }}
              />
            </div>
          </motion.div>

        </div>

        {/* ─── Bottom Bar matching the reference poster ─── */}
        <motion.div
          variants={itemVariants}
          className="mt-12 sm:mt-16 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          {/* Bottom-left: WhatsApp icon + Phone number from poster */}
          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-xs sm:text-sm text-neutral-400 hover:text-white transition-colors group"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366] group-hover:scale-110 transition-transform" />
              <span className="font-mono text-neutral-300 font-medium tracking-wider">{contactPhone}</span>
            </a>
            <span className="text-neutral-700 hidden sm:inline">|</span>
            <span className={`text-neutral-500 text-xs ${isBn ? "font-bangla-body" : ""}`}>
              {isBn ? "উচ্চাকাঙ্ক্ষী ব্যবসার জন্য বিশ্বমানের সল্যুশন।" : "Built for bold, scalable brands."}
            </span>
          </div>

          {/* Bottom-right: Minimalist Orange/Golden Dot Grid + Brand Signature */}
          <div className="flex items-center gap-6">
            <div className="grid grid-cols-5 gap-1.5">
              {Array.from({ length: 20 }).map((_, i) => (
                <span
                  key={i}
                  className="w-1.5 h-1.5 rounded-full"
                  style={{
                    backgroundColor: "#FFB800",
                    opacity: 0.6 + (i % 5) * 0.08,
                  }}
                />
              ))}
            </div>

            <span className="font-display font-black text-sm text-neutral-400 tracking-wider">
              webzen<span className="text-[#FFB800]">.bd</span>
            </span>
          </div>
        </motion.div>

      </motion.div>

      {/* Subtle fade to next section */}
      <div 
        className="h-16 w-full pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, #000000)",
        }}
      />
    </section>
  );
}
