"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import { 
  ArrowRight, 
  CodeXml, 
  Bot, 
  TrendingUp, 
  Layers, 
  ArrowUpRight 
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useSite } from "@/context/SiteContext";

export function HeroSection() {
  const { language } = useLanguage();
  const { data } = useSite();
  const hero = data?.hero;
  const isBn = language === "bn";

  // CMS Content with bespoke high-end fallbacks
  const badgeText = isBn
    ? (hero?.badge || "ডিজিটাল আর্কিটেকচার ও ওয়েব ইঞ্জিনিয়ারিং")
    : (hero?.badge || "High-Performance Web Engineering");

  const titlePart1 = isBn
    ? (hero?.titlePart1Bn || "ভবিষ্যতের নতুন দিগন্ত গড়ুন")
    : (hero?.titlePart1 || "Build the Future with");

  const titleHighlight = isBn
    ? (hero?.titleGradientBn || "উন্নত ওয়েব ইঞ্জিনিয়ারিংয়ে")
    : (hero?.titleGradient || "Advanced Web Engineering");

  const description = isBn
    ? (hero?.descriptionBn || "WebZen Bangladesh আধুনিক ব্র্যান্ড ও এন্টারপ্রাইজের জন্য তৈরি করে আল্ট্রা-ফাস্ট ওয়েব আর্কিটেকচার, কাস্টম ড্যাশবোর্ড এবং হাই-কনভার্সন ডিজিটাল প্ল্যাটফর্ম।")
    : (hero?.description || "WebZen Bangladesh architects ultra-fast web platforms, bespoke UI/UX architecture, scalable dashboards, and high-converting digital products.");

  const primaryCta = isBn
    ? (hero?.primaryCtaTextBn || "প্রজেক্ট শুরু করুন")
    : (hero?.primaryCtaText || "Get Started");

  const secondaryCta = isBn
    ? "কেস স্টাডি দেখুন"
    : "Explore Features";

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const navHeight = 80;
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
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
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
      className="relative min-h-screen flex flex-col items-center justify-between overflow-hidden bg-[#050505] pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-20"
    >
      {/* ─── Center-Aligned Typography & Hero Action Cluster (Image 1 pattern) ─── */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-20 flex flex-col items-center max-w-4xl mx-auto px-4 sm:px-6 text-center"
      >
        {/* Top Capsule Badge with Glowing Red Indicator */}
        <motion.div variants={itemVariants} className="mb-5 sm:mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-radiant-pill border border-white/[0.12] shadow-[0_4px_20px_rgba(255,56,35,0.15)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF3823] opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF3823] shadow-[0_0_8px_#FF3823]" />
            </span>
            <span className={`text-[11px] font-semibold tracking-[0.16em] uppercase text-neutral-200 ${isBn ? "font-bangla-ui tracking-normal" : ""}`}>
              {badgeText}
            </span>
          </div>
        </motion.div>

        {/* Center-Aligned Bold Headline with Crimson-Orange Gradient Highlight */}
        <motion.h1
          variants={itemVariants}
          className={`text-4xl sm:text-6xl lg:text-[4.25rem] leading-[1.18] sm:leading-[1.14] tracking-[-0.035em] ${
            isBn ? "font-bangla-display font-black" : "font-display font-black"
          }`}
        >
          <span className="block text-white pb-1">
            {titlePart1}
          </span>
          <span className="block text-gradient-hero mt-1 sm:mt-2 pb-2 sm:pb-3 drop-shadow-[0_4px_30px_rgba(255,56,35,0.4)]">
            {titleHighlight}
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className={`mt-6 text-neutral-400 text-sm sm:text-base lg:text-lg max-w-2xl leading-relaxed font-normal ${
            isBn ? "font-bangla-body" : ""
          }`}
        >
          {description}
        </motion.p>

        {/* Action Buttons: Crimson Pill with Arrow + Dark Glass Pill */}
        <motion.div
          variants={itemVariants}
          className="mt-8 sm:mt-10 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, "#contact")}
          >
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className={`pill-btn-primary group pl-6 pr-2.5 py-2.5 text-xs sm:text-sm font-bold tracking-wider uppercase flex items-center gap-3.5 shadow-[0_12px_32px_-4px_rgba(255,56,35,0.6)] ${
                isBn ? "font-bangla-ui text-sm tracking-normal" : ""
              }`}
            >
              <span>{primaryCta}</span>
              <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 transition-transform duration-300 shadow-inner">
                <ArrowRight className="w-4 h-4 text-white" />
              </span>
            </motion.button>
          </a>

          <a
            href="#projects"
            onClick={(e) => handleSmoothScroll(e, "#projects")}
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className={`pill-btn-glass px-6 py-3 text-xs sm:text-sm font-semibold tracking-wider uppercase text-neutral-300 hover:text-white ${
                isBn ? "font-bangla-ui text-sm tracking-normal" : ""
              }`}
            >
              <span>{secondaryCta}</span>
            </motion.button>
          </a>
        </motion.div>
      </motion.div>

      {/* ─── Central Glowing 3D-Style Orb & 4 Floating Glassmorphic Cards (Image 1 pattern) ─── */}
      <div className="relative w-full max-w-6xl mx-auto px-4 sm:px-6 mt-12 sm:mt-16 flex items-center justify-center">
        
        {/* ═══ 4 Floating Glassmorphic Feature Cards (Asymmetric Left & Right) ═══ */}

        {/* Card 1: Top-Left (Full-Stack Web) */}
        <div className="hidden lg:block absolute left-2 xl:left-6 top-[8%] z-30 animate-float-1">
          <motion.div 
            whileHover={{ y: -4, scale: 1.02 }}
            className="w-64 p-4 rounded-2xl glass-radiant border border-white/[0.08] hover:border-[#FF3823]/40 group transition-all duration-300"
          >
            <div className="flex items-start justify-between">
              <div className="w-9 h-9 rounded-xl bg-[#FF3823]/15 border border-[#FF3823]/30 flex items-center justify-center shadow-[0_0_15px_rgba(255,56,35,0.25)]">
                <CodeXml className="w-4 h-4 text-[#FF3823]" />
              </div>
              <span className="w-6 h-6 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:bg-[#FF3823]/20 group-hover:border-[#FF3823]/40 transition-colors">
                <ArrowUpRight className="w-3 h-3 text-neutral-400 group-hover:text-[#FF3823]" />
              </span>
            </div>
            <h4 className={`text-white text-sm font-bold mt-3 group-hover:text-[#FF3823] transition-colors ${isBn ? "font-bangla-ui" : "font-display"}`}>
              {isBn ? "ফুল-স্ট্যাক ওয়েব অ্যাপস" : "Full-Stack Web"}
            </h4>
            <p className={`text-[11px] text-neutral-400 mt-1 leading-relaxed ${isBn ? "font-bangla-body" : ""}`}>
              {isBn ? "Next.js আর্কিটেকচার ও সাব-সেকেন্ড পেজ লোড।" : "Modern Next.js platforms with sub-second TTFB."}
            </p>
          </motion.div>
        </div>

        {/* Card 2: Bottom-Left (Automation & AI) */}
        <div className="hidden lg:block absolute left-4 xl:left-8 bottom-[14%] z-30 animate-float-2">
          <motion.div 
            whileHover={{ y: -4, scale: 1.02 }}
            className="w-64 p-4 rounded-2xl glass-radiant border border-white/[0.08] hover:border-[#FF3823]/40 group transition-all duration-300"
          >
            <div className="flex items-start justify-between">
              <div className="w-9 h-9 rounded-xl bg-[#FF3823]/15 border border-[#FF3823]/30 flex items-center justify-center shadow-[0_0_15px_rgba(255,56,35,0.25)]">
                <Bot className="w-4 h-4 text-[#FF3823]" />
              </div>
              <span className="w-6 h-6 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:bg-[#FF3823]/20 group-hover:border-[#FF3823]/40 transition-colors">
                <ArrowUpRight className="w-3 h-3 text-neutral-400 group-hover:text-[#FF3823]" />
              </span>
            </div>
            <h4 className={`text-white text-sm font-bold mt-3 group-hover:text-[#FF3823] transition-colors ${isBn ? "font-bangla-ui" : "font-display"}`}>
              {isBn ? "অটোমেশন ও AI সিস্টেম" : "Automation & AI"}
            </h4>
            <p className={`text-[11px] text-neutral-400 mt-1 leading-relaxed ${isBn ? "font-bangla-body" : ""}`}>
              {isBn ? "ওয়ার্কফ্লো অটোমেশন ও স্মার্ট ইন্টেলিজেন্ট পাইপলাইন।" : "Streamline manual operations with intelligent workflows."}
            </p>
          </motion.div>
        </div>

        {/* Card 3: Top-Right (Cloud & Analytics) */}
        <div className="hidden lg:block absolute right-2 xl:right-6 top-[10%] z-30 animate-float-3">
          <motion.div 
            whileHover={{ y: -4, scale: 1.02 }}
            className="w-64 p-4 rounded-2xl glass-radiant border border-white/[0.08] hover:border-[#FF3823]/40 group transition-all duration-300"
          >
            <div className="flex items-start justify-between">
              <div className="w-9 h-9 rounded-xl bg-[#FF3823]/15 border border-[#FF3823]/30 flex items-center justify-center shadow-[0_0_15px_rgba(255,56,35,0.25)]">
                <TrendingUp className="w-4 h-4 text-[#FF3823]" />
              </div>
              <span className="w-6 h-6 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:bg-[#FF3823]/20 group-hover:border-[#FF3823]/40 transition-colors">
                <ArrowUpRight className="w-3 h-3 text-neutral-400 group-hover:text-[#FF3823]" />
              </span>
            </div>
            <h4 className={`text-white text-sm font-bold mt-3 group-hover:text-[#FF3823] transition-colors ${isBn ? "font-bangla-ui" : "font-display"}`}>
              {isBn ? "ক্লাউড ও অ্যানালিটিক্স" : "Cloud Analytics"}
            </h4>
            <p className={`text-[11px] text-neutral-400 mt-1 leading-relaxed ${isBn ? "font-bangla-body" : ""}`}>
              {isBn ? "রিয়েল-টাইম সিস্টেম ট্র্যাকিং ও ৯৯.৯৯% আপটাইম SLA।" : "Gain real-time actionable metrics and high uptime."}
            </p>
          </motion.div>
        </div>

        {/* Card 4: Bottom-Right (Integrations & bKash) */}
        <div className="hidden lg:block absolute right-4 xl:right-8 bottom-[16%] z-30 animate-float-1">
          <motion.div 
            whileHover={{ y: -4, scale: 1.02 }}
            className="w-64 p-4 rounded-2xl glass-radiant border border-white/[0.08] hover:border-[#FF3823]/40 group transition-all duration-300"
          >
            <div className="flex items-start justify-between">
              <div className="w-9 h-9 rounded-xl bg-[#FF3823]/15 border border-[#FF3823]/30 flex items-center justify-center shadow-[0_0_15px_rgba(255,56,35,0.25)]">
                <Layers className="w-4 h-4 text-[#FF3823]" />
              </div>
              <span className="w-6 h-6 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center group-hover:bg-[#FF3823]/20 group-hover:border-[#FF3823]/40 transition-colors">
                <ArrowUpRight className="w-3 h-3 text-neutral-400 group-hover:text-[#FF3823]" />
              </span>
            </div>
            <h4 className={`text-white text-sm font-bold mt-3 group-hover:text-[#FF3823] transition-colors ${isBn ? "font-bangla-ui" : "font-display"}`}>
              {isBn ? "API ও পেমেন্ট গেটওয়ে" : "API & Integrations"}
            </h4>
            <p className={`text-[11px] text-neutral-400 mt-1 leading-relaxed ${isBn ? "font-bangla-body" : ""}`}>
              {isBn ? "বিকাশ, নগদ, স্ট্রাইপ ও কাস্টম ওয়েবহুক সেটআপ।" : "Seamlessly connect payment gateways and microservices."}
            </p>
          </motion.div>
        </div>

        {/* ═══ The Centerpiece: Illuminated Wireframe Energy Globe with Orbiting Rings ═══ */}
        <div className="relative w-[340px] sm:w-[440px] md:w-[480px] h-[340px] sm:h-[440px] md:h-[480px] flex items-center justify-center select-none my-6 sm:my-8">
          
          {/* Intense Crimson Energy Backlight Glow */}
          <div 
            className="absolute inset-0 rounded-full animate-core-pulse pointer-events-none"
            style={{
              background: "radial-gradient(circle, rgba(255, 56, 35, 0.45) 0%, rgba(255, 106, 0, 0.25) 40%, rgba(200, 20, 10, 0.08) 65%, transparent 75%)",
              filter: "blur(60px)",
            }}
          />

          {/* 3D Dark Illuminated Planetary Sphere */}
          <div className="relative w-[260px] sm:w-[340px] md:w-[380px] h-[260px] sm:h-[340px] md:h-[380px] rounded-full overflow-hidden shadow-[0_0_80px_rgba(255,56,35,0.45),inset_0_0_50px_rgba(255,56,35,0.6)] border border-[#FF3823]/40">
            {/* Sphere surface texture with dark gradient */}
            <div 
              className="absolute inset-0 rounded-full"
              style={{
                background: "radial-gradient(circle at 45% 40%, #1A0A08 0%, #0D0504 55%, #050202 100%)",
              }}
            />

            {/* Glowing red latitude/longitude wireframe rings & points */}
            <svg className="absolute inset-0 w-full h-full opacity-85" viewBox="0 0 200 200">
              <defs>
                <radialGradient id="globeGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#FF6A00" stopOpacity="0.8" />
                  <stop offset="60%" stopColor="#FF3823" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="#800A05" stopOpacity="0.1" />
                </radialGradient>
              </defs>

              {/* Concentric latitude circles */}
              <ellipse cx="100" cy="100" rx="95" ry="95" fill="none" stroke="rgba(255, 56, 35, 0.35)" strokeWidth="0.8" />
              <ellipse cx="100" cy="100" rx="90" ry="70" fill="none" stroke="rgba(255, 56, 35, 0.3)" strokeWidth="0.75" />
              <ellipse cx="100" cy="100" rx="80" ry="45" fill="none" stroke="rgba(255, 56, 35, 0.3)" strokeWidth="0.75" />
              <ellipse cx="100" cy="100" rx="65" ry="20" fill="none" stroke="rgba(255, 56, 35, 0.35)" strokeWidth="0.75" />
              
              {/* Longitude ellipses */}
              <ellipse cx="100" cy="100" rx="28" ry="95" fill="none" stroke="rgba(255, 56, 35, 0.35)" strokeWidth="0.75" />
              <ellipse cx="100" cy="100" rx="58" ry="95" fill="none" stroke="rgba(255, 56, 35, 0.3)" strokeWidth="0.75" />
              <ellipse cx="100" cy="100" rx="85" ry="95" fill="none" stroke="rgba(255, 56, 35, 0.25)" strokeWidth="0.75" />
              <line x1="100" y1="5" x2="100" y2="195" stroke="rgba(255, 106, 0, 0.5)" strokeWidth="1" strokeDasharray="2 3" />
              <line x1="5" y1="100" x2="195" y2="100" stroke="rgba(255, 106, 0, 0.5)" strokeWidth="1" strokeDasharray="2 3" />

              {/* Glowing continent nodes & interconnecting light bursts */}
              <circle cx="85" cy="75" r="2.5" fill="#FFA000" className="animate-ping" style={{ animationDuration: "3s" }} />
              <circle cx="85" cy="75" r="2.5" fill="#FFA000" />
              <circle cx="120" cy="95" r="2.5" fill="#FF3823" className="animate-ping" style={{ animationDuration: "2.5s" }} />
              <circle cx="120" cy="95" r="2.5" fill="#FF3823" />
              <circle cx="105" cy="135" r="2.5" fill="#FF5C35" />
              <circle cx="60" cy="110" r="2.5" fill="#FF3823" />
              <circle cx="140" cy="70" r="2.5" fill="#FFA000" />
              <circle cx="75" cy="140" r="2" fill="#FF5C35" />

              {/* Network connecting lines */}
              <path d="M 85 75 Q 100 85 120 95" fill="none" stroke="rgba(255, 149, 0, 0.6)" strokeWidth="0.9" />
              <path d="M 120 95 Q 110 115 105 135" fill="none" stroke="rgba(255, 56, 35, 0.6)" strokeWidth="0.9" />
              <path d="M 85 75 Q 70 90 60 110" fill="none" stroke="rgba(255, 56, 35, 0.5)" strokeWidth="0.9" />
              <path d="M 85 75 Q 110 70 140 70" fill="none" stroke="rgba(255, 149, 0, 0.5)" strokeWidth="0.9" />
            </svg>

            {/* Glowing equator horizon light */}
            <div 
              className="absolute bottom-0 inset-x-0 h-1/2 pointer-events-none"
              style={{
                background: "linear-gradient(to top, rgba(255, 56, 35, 0.35) 0%, transparent 80%)",
              }}
            />
          </div>

          {/* ═══ 3D Tilted Orbiting Light Rings with Rotating Starlight Beads ═══ */}
          
          {/* Ring 1: Primary Equatorial Orbit */}
          <div 
            className="absolute w-[360px] sm:w-[460px] md:w-[500px] h-[360px] sm:h-[460px] md:h-[500px] rounded-full pointer-events-none animate-orbit-1"
            style={{
              border: "1.5px solid rgba(255, 56, 35, 0.45)",
              boxShadow: "0 0 20px rgba(255, 56, 35, 0.35), inset 0 0 20px rgba(255, 56, 35, 0.2)",
            }}
          >
            {/* Orbiting Light Bead */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_12px_#FF3823,0_0_20px_#FFA000]" />
          </div>

          {/* Ring 2: Angled Polar Orbit */}
          <div 
            className="absolute w-[340px] sm:w-[430px] md:w-[470px] h-[340px] sm:h-[430px] md:h-[470px] rounded-full pointer-events-none animate-orbit-2"
            style={{
              border: "1.5px solid rgba(255, 106, 0, 0.4)",
              boxShadow: "0 0 18px rgba(255, 106, 0, 0.3)",
            }}
          >
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2.5 h-2.5 rounded-full bg-[#FFA000] shadow-[0_0_10px_#FFA000]" />
          </div>

          {/* Ring 3: Counter Tilt Orbit */}
          <div 
            className="absolute w-[380px] sm:w-[480px] md:w-[520px] h-[380px] sm:h-[480px] md:h-[520px] rounded-full pointer-events-none animate-orbit-3"
            style={{
              border: "1px dashed rgba(255, 149, 0, 0.35)",
            }}
          >
            <div className="absolute top-1/2 right-0 translate-x-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-white shadow-[0_0_8px_#FF3823]" />
          </div>

        </div>

      </div>

      {/* ─── Bottom Sleek Horizontal Glassmorphic Stats Bar (Image 1 pattern) ─── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-20 max-w-4xl w-full mx-auto px-4 sm:px-6 mt-6 sm:mt-10"
      >
        <div className="p-3.5 sm:p-4 rounded-2xl sm:rounded-full glass-radiant-pill border border-white/[0.1] shadow-[0_16px_40px_rgba(0,0,0,0.8)] flex flex-col md:flex-row items-center justify-between gap-4 sm:gap-6">
          
          {/* Left: Avatar Stack & Brand Trust */}
          <div className="flex items-center gap-3">
            <div className="flex -space-x-2 overflow-hidden shrink-0">
              <img className="inline-block h-7 w-7 rounded-full ring-2 ring-[#050505] object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Client 1" />
              <img className="inline-block h-7 w-7 rounded-full ring-2 ring-[#050505] object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" alt="Client 2" />
              <img className="inline-block h-7 w-7 rounded-full ring-2 ring-[#050505] object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80" alt="Client 3" />
            </div>
            <span className={`text-xs font-semibold text-neutral-300 ${isBn ? "font-bangla-ui" : ""}`}>
              {isBn ? "বিশ্বস্ত ৫০+ ব্র্যান্ড ও স্টার্টআপ" : "Trusted by 50+ ambitious brands"}
            </span>
          </div>

          {/* Right: 4 Metrics with Radiant Values */}
          <div className="flex items-center justify-between sm:justify-end gap-5 sm:gap-8 w-full md:w-auto text-center font-mono">
            <div>
              <div className="text-sm sm:text-base font-extrabold text-[#FF3823] drop-shadow-[0_0_8px_rgba(255,56,35,0.6)]">
                99.9%
              </div>
              <div className="text-[10px] text-neutral-400 uppercase tracking-wider">
                {isBn ? "আপটাইম" : "Uptime"}
              </div>
            </div>

            <div className="h-6 w-px bg-white/10" />

            <div>
              <div className="text-sm sm:text-base font-extrabold text-white">
                250+
              </div>
              <div className="text-[10px] text-neutral-400 uppercase tracking-wider">
                {isBn ? "লাইভ সাইট" : "Live Sites"}
              </div>
            </div>

            <div className="h-6 w-px bg-white/10" />

            <div>
              <div className="text-sm sm:text-base font-extrabold text-[#FFA000]">
                50+
              </div>
              <div className="text-[10px] text-neutral-400 uppercase tracking-wider">
                {isBn ? "ভেঞ্চার" : "Ventures"}
              </div>
            </div>

            <div className="h-6 w-px bg-white/10" />

            <div>
              <div className="text-sm sm:text-base font-extrabold text-white">
                24/7
              </div>
              <div className="text-[10px] text-neutral-400 uppercase tracking-wider">
                {isBn ? "সাপোর্ট" : "Support"}
              </div>
            </div>
          </div>

        </div>
      </motion.div>

    </section>
  );
}
