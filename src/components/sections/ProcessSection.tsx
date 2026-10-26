"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Check, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2
} from "lucide-react";

export function ProcessSection() {
  const { language } = useLanguage();
  const isBn = language === "bn";

  const [activeStep, setActiveStep] = useState<number | null>(null);

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

  const steps = [
    {
      id: 0,
      label: isBn ? "অ্যাড (AD)" : "AD",
      title: isBn ? "টার্গেটেড অ্যাড ও ট্রাফিক" : "Ad Creative & Traffic",
      subtitle: isBn ? "হাই-কনভার্টিং ক্যাম্পেইন আর্কিটেকচার" : "High-ROI Audience Acquisition",
      desc: isBn
        ? "টার্গেটেড অ্যাড ক্রিয়েটিভ, সঠিক ট্র্যাকিং পিক্সেল ও সাইকোলজিক্যাল হুক দিয়ে প্রিমিয়াম ট্রাফিক ল্যান্ডিং পেজে ড্রাইভ করা।"
        : "Engineered ad creatives, high-converting copy hooks, and precision tracking pixels driving verified high-intent buyer traffic.",
      btnText: isBn ? "ক্লিক করুন" : "Click Here",
      tag: "STEP 01"
    },
    {
      id: 1,
      label: isBn ? "ল্যান্ডিং পেজ (LANDING PAGE)" : "LANDING PAGE",
      title: isBn ? "হাই-স্পিড ল্যান্ডিং পেজ" : "Bespoke Landing Page",
      subtitle: isBn ? "সাব-সেকেন্ড লোডিং ও ৬০fps প্রিভিউ" : "Sub-second TTFB & 60fps UI/UX",
      desc: isBn
        ? "Next.js ১৬ দিয়ে তৈরি আল্ট্রা-ফাস্ট ল্যান্ডিং পেজ—যা সাব-সেকেন্ডে লোড হয় এবং ভিজিটরকে নিমিষেই বায়ারে রূপান্তর করে।"
        : "Ultra-fast Next.js 16 landing experiences built with persuasive typography, responsive layouts, and psychological conversion triggers.",
      btnText: isBn ? "শুরু করুন" : "Get Started",
      tag: "STEP 02"
    },
    {
      id: 2,
      label: isBn ? "ফর্ম (FORM)" : "FORM",
      title: isBn ? "জিরো-ফ্রিকশন লিড ক্যাপচার" : "Frictionless Capture Form",
      subtitle: isBn ? "অটোমেটেড ডাটাবেস ও ওয়েবহুক" : "Real-time Validation & DB Sync",
      desc: isBn
        ? "কোনো ড্রপ-অফ ছাড়াই ইনস্ট্যান্ট ইনপুট ভ্যালিডেশন, অটো-ফিল এবং রিয়েল-টাইম ডাটাবেস সিঙ্ক নিশ্চিত করে সর্বোচ্চ সাবমিশন রেট।"
        : "Zero-friction lead capture forms with instant field validation, smart autofill, and automatic API webhooks for maximum conversion rate.",
      btnText: isBn ? "সাবমিট" : "Submit",
      tag: "STEP 03"
    },
    {
      id: 3,
      label: isBn ? "কনফার্মেশন (CONFIRMATION)" : "CONFIRMATION",
      title: isBn ? "সফল কনফার্মেশন ও অনবোর্ডিং" : "Instant Confirmation & SLA",
      subtitle: isBn ? "স্বয়ংক্রিয় এসএমএস ও ইমেইল অনবোর্ডিং" : "Automated SMS/Email Webhooks",
      desc: isBn
        ? "সাবমিশন সম্পন্ন হওয়ামাত্রই তাৎক্ষণিক কনফার্মেশন স্ক্রিন, স্বয়ংক্রিয় ইমেইল/এসএমএস অ্যালার্ট এবং দীর্ঘমেয়াদি কাস্টমার রিটেনশন।"
        : "Instant dynamic confirmation screens, automated customer onboarding webhooks, and long-term retention triggers built on 99.9% uptime SLA.",
      btnText: isBn ? "ভেরিফাইড সফল" : "Confirmed",
      tag: "STEP 04"
    }
  ];

  return (
    <section id="process" className="relative py-24 sm:py-32 overflow-hidden scroll-mt-20 bg-[#050505] z-10 select-none">
      
      {/* ═══ Background Ambient Radiant Lighting (Crimson & Amber Glow) ═══ */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[950px] h-[550px] sm:h-[700px] pointer-events-none rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255, 56, 35, 0.15) 0%, rgba(255, 106, 0, 0.08) 40%, transparent 75%)",
          filter: "blur(120px)",
        }}
        aria-hidden="true" 
      />

      {/* ═══ Ambient Diamond Sparkle in Bottom Right (Matching Reference) ═══ */}
      <div className="absolute bottom-8 right-8 sm:bottom-12 sm:right-12 pointer-events-none opacity-40 hover:opacity-80 transition-opacity">
        <svg className="w-8 h-8 sm:w-10 sm:h-10 text-white fill-white drop-shadow-[0_0_12px_rgba(255,56,35,0.7)]" viewBox="0 0 24 24">
          <path d="M12 0L14.8 9.2L24 12L14.8 14.8L12 24L9.2 14.8L0 12L9.2 9.2L12 0Z" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* ═══ Top Statement Headline (Matching Reference Pattern) ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 sm:mb-24"
        >
          {/* Main Statement Quote */}
          <h2 className={`text-3xl sm:text-5xl lg:text-[3.75rem] font-black text-white tracking-tight leading-[1.18] sm:leading-[1.15] pb-1 ${isBn ? "font-bangla-display" : "font-display"}`}>
            {isBn ? (
              <>“সফলতা একটি ধারাবাহিক প্রসেস।”</>
            ) : (
              <>“Conversions Are a Process.”</>
            )}
          </h2>

          {/* Subtitle */}
          <p className={`mt-3.5 text-base sm:text-xl font-normal text-neutral-300 tracking-wide ${isBn ? "font-bangla-body" : ""}`}>
            {isBn ? (
              <>
                কোডিং কেবল পুরো <span className="text-gradient-hero font-semibold">সিস্টেমের একটি অংশ</span> মাত্র।
              </>
            ) : (
              <>
                Pages are just one <span className="text-gradient-hero font-semibold">part of the system.</span>
              </>
            )}
          </p>
        </motion.div>

        {/* ═══ The Wave Pipeline Grid (4 Elevated Cards with Floating S-Wave Beam) ═══ */}
        <div className="relative w-full max-w-6xl mx-auto py-8">
          
          {/* ─── Glowing Neon Wave Path (SVG) Weaving through all 4 Cards ─── */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-64 pointer-events-none hidden lg:block overflow-visible z-10">
            <svg className="w-full h-full overflow-visible" viewBox="0 0 1100 240" fill="none">
              <defs>
                <filter id="wave-glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="5" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <linearGradient id="waveGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FF3823" stopOpacity="0.3" />
                  <stop offset="20%" stopColor="#FF3823" stopOpacity="0.95" />
                  <stop offset="50%" stopColor="#FF6A00" stopOpacity="0.95" />
                  <stop offset="80%" stopColor="#FFA000" stopOpacity="0.95" />
                  <stop offset="100%" stopColor="#FF3823" stopOpacity="0.4" />
                </linearGradient>
              </defs>

              {/* Glowing Thick Wave Underlay */}
              <path
                d="M -50 160 C 80 160 110 160 170 160 C 230 160 260 60 380 60 C 500 60 530 180 650 180 C 770 180 800 50 920 50 C 990 50 1040 50 1150 50"
                stroke="url(#waveGrad)"
                strokeWidth="8"
                strokeLinecap="round"
                opacity="0.35"
                filter="url(#wave-glow)"
              />

              {/* Crisp Neon Core Wave Beam */}
              <path
                d="M -50 160 C 80 160 110 160 170 160 C 230 160 260 60 380 60 C 500 60 530 180 650 180 C 770 180 800 50 920 50 C 990 50 1040 50 1150 50"
                stroke="url(#waveGrad)"
                strokeWidth="2.8"
                strokeLinecap="round"
                filter="url(#wave-glow)"
              />

              {/* Animated Traveling Data Pulse Beads along Wave */}
              <circle r="4" fill="#FFFFFF">
                <animateMotion
                  path="M -50 160 C 80 160 110 160 170 160 C 230 160 260 60 380 60 C 500 60 530 180 650 180 C 770 180 800 50 920 50 C 990 50 1040 50 1150 50"
                  dur="4s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle r="4" fill="#FFA000">
                <animateMotion
                  path="M -50 160 C 80 160 110 160 170 160 C 230 160 260 60 380 60 C 500 60 530 180 650 180 C 770 180 800 50 920 50 C 990 50 1040 50 1150 50"
                  dur="4s"
                  begin="2s"
                  repeatCount="indefinite"
                />
              </circle>
            </svg>
          </div>

          {/* ─── 4 Staggered / Stepped Elevated Cards ─── */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 items-center relative z-20">
            
            {/* ═══ CARD 1: AD (Base Level) ═══ */}
            <div 
              onMouseEnter={() => setActiveStep(0)}
              onMouseLeave={() => setActiveStep(null)}
              className="relative flex flex-col items-center lg:translate-y-8 group transition-transform duration-500 hover:-translate-y-2 cursor-pointer"
            >
              {/* Top Step Eyebrow Label (Matches Reference Image) */}
              <div className="text-[12px] font-mono font-bold tracking-[0.2em] text-neutral-300 uppercase mb-3 text-center">
                {steps[0].label}
              </div>

              {/* Card Container */}
              <div className={`relative w-full max-w-[260px] p-4 rounded-2xl transition-all duration-300 ${
                activeStep === 0
                  ? "bg-[#180806] border-2 border-[#FF3823] shadow-[0_0_35px_rgba(255,56,35,0.6)]"
                  : "glass-radiant border border-white/[0.12] hover:border-[#FF3823]/50 shadow-[0_20px_45px_rgba(0,0,0,0.85)]"
              }`}>
                {/* Inside Mockup UI: Ad Creative Banner (Landscape) */}
                <div className="w-full h-36 rounded-xl bg-gradient-to-b from-[#2A100B] to-[#120504] p-3 border border-white/[0.08] flex flex-col justify-between mb-3 overflow-hidden shadow-inner">
                  {/* Visual banner thumbnail with mountain & sun creative */}
                  <div className="w-full h-20 rounded-lg bg-gradient-to-tr from-[#3B120E] via-[#5C1A14] to-[#2B0E0A] border border-white/10 p-2 relative overflow-hidden flex flex-col justify-between">
                    {/* Glowing Sun vector */}
                    <div className="w-5 h-5 rounded-full bg-gradient-to-r from-[#FFA000] to-[#FF6A00] shadow-[0_0_10px_#FFA000] ml-auto" />
                    
                    {/* Mountain silhouette vector */}
                    <div className="absolute inset-x-0 bottom-0 h-9 flex items-end">
                      <svg className="w-full h-full text-[#FF3823]/40 fill-current" viewBox="0 0 100 40" preserveAspectRatio="none">
                        <polygon points="0,40 25,12 45,30 75,5 100,40" />
                      </svg>
                      <svg className="w-full h-full text-[#FFA000]/30 fill-current absolute inset-0" viewBox="0 0 100 40" preserveAspectRatio="none">
                        <polygon points="10,40 38,18 58,32 88,14 100,40" />
                      </svg>
                    </div>

                    <div className="relative z-10">
                      <span className="text-[8px] font-mono uppercase bg-black/50 text-[#FFA000] px-1.5 py-0.5 rounded border border-white/10 font-bold">
                        CREATIVE
                      </span>
                    </div>
                  </div>

                  {/* 3 Text Placeholder Bars (Mimicking Ad Copy) */}
                  <div className="space-y-1.5 my-auto">
                    <div className="w-4/5 h-2 rounded-full bg-white/30" />
                    <div className="w-full h-1.5 rounded-full bg-white/15" />
                    <div className="w-3/5 h-1.5 rounded-full bg-white/15" />
                  </div>
                </div>

                {/* Pill Button: Click Here */}
                <div className="mt-2">
                  <button className="w-full py-2.5 rounded-full bg-gradient-to-r from-[#FF3823] to-[#FF6A00] text-white text-[12px] font-bold tracking-wide shadow-[0_6px_20px_rgba(255,56,35,0.45)] hover:brightness-110 transition-all flex items-center justify-center gap-1.5 cursor-pointer">
                    <span>{steps[0].btnText}</span>
                  </button>
                </div>
              </div>

              {/* Glossy Floor Mirror Reflection */}
              <div className="w-full max-w-[260px] h-14 mt-1 opacity-20 pointer-events-none overflow-hidden blur-[1px] transform scale-y-[-1] mask-radial hidden lg:block">
                <div className="w-full h-full p-4 rounded-2xl glass-radiant border border-white/10 bg-gradient-to-b from-white/10 to-transparent" />
              </div>
            </div>

            {/* ═══ CARD 2: LANDING PAGE (Elevated Higher Up) ═══ */}
            <div 
              onMouseEnter={() => setActiveStep(1)}
              onMouseLeave={() => setActiveStep(null)}
              className="relative flex flex-col items-center lg:-translate-y-10 group transition-transform duration-500 hover:-translate-y-16 cursor-pointer"
            >
              {/* Top Step Eyebrow Label (Matches Reference Image) */}
              <div className="text-[12px] font-mono font-bold tracking-[0.2em] text-neutral-300 uppercase mb-3 text-center">
                {steps[1].label}
              </div>

              {/* Card Container */}
              <div className={`relative w-full max-w-[260px] p-4 rounded-2xl transition-all duration-300 ${
                activeStep === 1
                  ? "bg-[#180806] border-2 border-[#FF6A00] shadow-[0_0_35px_rgba(255,106,0,0.6)]"
                  : "glass-radiant border border-white/[0.12] hover:border-[#FF6A00]/50 shadow-[0_25px_50px_rgba(0,0,0,0.9)]"
              }`}>
                {/* Inside Mockup UI: Landing Page Preview with Phone & Headline */}
                <div className="w-full h-36 rounded-xl bg-gradient-to-b from-[#2A100B] to-[#120504] p-3 border border-white/[0.08] flex flex-col justify-between mb-3 overflow-hidden shadow-inner">
                  {/* Headline: Headline with products !! */}
                  <div className="text-center">
                    <span className="text-[11px] font-bold text-white tracking-tight leading-tight block">
                      {isBn ? "Headline with products !!" : "Headline with products !!"}
                    </span>
                  </div>

                  {/* Device mockup preview (Smartphone) */}
                  <div className="relative mx-auto w-20 h-20 rounded-xl bg-gradient-to-tr from-[#FF3823]/25 to-[#FFA000]/20 border border-[#FF6A00]/40 flex flex-col items-center justify-between p-1 shadow-lg">
                    {/* Phone speaker notch */}
                    <div className="w-6 h-1 rounded-full bg-white/40" />
                    {/* Product visual inside phone */}
                    <div className="w-9 h-9 rounded-lg bg-[#0E0503] border border-white/10 flex items-center justify-center p-1">
                      <Sparkles className="w-4 h-4 text-[#FFA000]" />
                    </div>
                    {/* Skeleton text bar inside phone */}
                    <div className="w-10 h-1 rounded-full bg-white/30" />
                  </div>

                  <div className="w-16 h-1.5 rounded-full bg-white/20 mx-auto" />
                </div>

                {/* Pill Button: Get Started */}
                <div className="mt-2">
                  <button className="w-full py-2.5 rounded-full bg-gradient-to-r from-[#FF6A00] to-[#FFA000] text-white text-[12px] font-bold tracking-wide shadow-[0_6px_20px_rgba(255,106,0,0.45)] hover:brightness-110 transition-all flex items-center justify-center gap-1.5 cursor-pointer">
                    <span>{steps[1].btnText}</span>
                  </button>
                </div>
              </div>

              {/* Glossy Floor Mirror Reflection */}
              <div className="w-full max-w-[260px] h-14 mt-1 opacity-20 pointer-events-none overflow-hidden blur-[1px] transform scale-y-[-1] mask-radial hidden lg:block">
                <div className="w-full h-full p-4 rounded-2xl glass-radiant border border-white/10 bg-gradient-to-b from-white/10 to-transparent" />
              </div>
            </div>

            {/* ═══ CARD 3: FORM (Dipping Lower Down) ═══ */}
            <div 
              onMouseEnter={() => setActiveStep(2)}
              onMouseLeave={() => setActiveStep(null)}
              className="relative flex flex-col items-center lg:translate-y-12 group transition-transform duration-500 hover:translate-y-4 cursor-pointer"
            >
              {/* Top Step Eyebrow Label (Matches Reference Image) */}
              <div className="text-[12px] font-mono font-bold tracking-[0.2em] text-neutral-300 uppercase mb-3 text-center">
                {steps[2].label}
              </div>

              {/* Card Container */}
              <div className={`relative w-full max-w-[260px] p-4 rounded-2xl transition-all duration-300 ${
                activeStep === 2
                  ? "bg-[#180806] border-2 border-[#FFA000] shadow-[0_0_35px_rgba(255,160,0,0.6)]"
                  : "glass-radiant border border-white/[0.12] hover:border-[#FFA000]/50 shadow-[0_20px_45px_rgba(0,0,0,0.85)]"
              }`}>
                {/* Inside Mockup UI: Input Form Interface (Name, Email fields) */}
                <div className="w-full h-36 rounded-xl bg-gradient-to-b from-[#2A100B] to-[#120504] p-3 border border-white/[0.08] flex flex-col justify-between mb-3 overflow-hidden shadow-inner">
                  {/* Subtle top placeholder bar */}
                  <div className="w-12 h-1.5 rounded-full bg-white/20 mx-auto mb-1" />

                  {/* Input Field 1: Name */}
                  <div className="space-y-0.5">
                    <span className="text-[9px] font-medium text-neutral-300 px-0.5">
                      {isBn ? "নাম (Name)" : "Name"}
                    </span>
                    <div className="w-full h-6 rounded-md bg-white/[0.95] border border-white/20 px-2 flex items-center text-[9px] text-neutral-500 shadow-sm font-sans">
                      Khairul Islam
                    </div>
                  </div>

                  {/* Input Field 2: Email */}
                  <div className="space-y-0.5">
                    <span className="text-[9px] font-medium text-neutral-300 px-0.5">
                      {isBn ? "ইমেইল (Email)" : "Email"}
                    </span>
                    <div className="w-full h-6 rounded-md bg-white/[0.95] border border-white/20 px-2 flex items-center text-[9px] text-neutral-500 shadow-sm font-sans">
                      contact@webzen.agency
                    </div>
                  </div>
                </div>

                {/* Pill Button: Submit */}
                <div className="mt-2">
                  <button className="w-full py-2.5 rounded-full bg-gradient-to-r from-[#FFA000] to-[#FF6A00] text-white text-[12px] font-bold tracking-wide shadow-[0_6px_20px_rgba(255,160,0,0.45)] hover:brightness-110 transition-all flex items-center justify-center gap-1.5 cursor-pointer">
                    <span>{steps[2].btnText}</span>
                  </button>
                </div>
              </div>

              {/* Glossy Floor Mirror Reflection */}
              <div className="w-full max-w-[260px] h-14 mt-1 opacity-20 pointer-events-none overflow-hidden blur-[1px] transform scale-y-[-1] mask-radial hidden lg:block">
                <div className="w-full h-full p-4 rounded-2xl glass-radiant border border-white/10 bg-gradient-to-b from-white/10 to-transparent" />
              </div>
            </div>

            {/* ═══ CARD 4: CONFIRMATION (Elevated Higher Up) ═══ */}
            <div 
              onMouseEnter={() => setActiveStep(3)}
              onMouseLeave={() => setActiveStep(null)}
              className="relative flex flex-col items-center lg:-translate-y-12 group transition-transform duration-500 hover:-translate-y-18 cursor-pointer"
            >
              {/* Top Step Eyebrow Label (Matches Reference Image) */}
              <div className="text-[12px] font-mono font-bold tracking-[0.2em] text-neutral-300 uppercase mb-3 text-center">
                {steps[3].label}
              </div>

              {/* Card Container */}
              <div className={`relative w-full max-w-[260px] p-4 rounded-2xl transition-all duration-300 ${
                activeStep === 3
                  ? "bg-[#180806] border-2 border-[#FF3823] shadow-[0_0_35px_rgba(255,56,35,0.6)]"
                  : "glass-radiant border border-white/[0.12] hover:border-[#FF3823]/50 shadow-[0_25px_50px_rgba(0,0,0,0.9)]"
              }`}>
                {/* Inside Mockup UI: Thank You! You're In. with Big Checkmark */}
                <div className="w-full h-36 rounded-xl bg-gradient-to-b from-[#2A100B] to-[#120504] p-3 border border-white/[0.08] flex flex-col items-center justify-between text-center mb-3 overflow-hidden shadow-inner">
                  {/* Headline: Thank You! You're In. */}
                  <div>
                    <div className="text-[12px] font-black text-white tracking-tight leading-tight">
                      Thank You!
                    </div>
                    <div className="text-[12px] font-black text-white tracking-tight leading-tight">
                      You&apos;re In.
                    </div>
                  </div>

                  {/* Big Glowing Radiant Checkmark Circle (Matches Reference Image) */}
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#FF3823] via-[#FF6A00] to-[#FFA000] p-0.5 shadow-[0_0_25px_rgba(255,56,35,0.7)] flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-[#180503] flex items-center justify-center">
                      <Check className="w-6 h-6 text-white stroke-[3.5]" />
                    </div>
                  </div>

                  <div className="w-14 h-1.5 rounded-full bg-white/20 mx-auto" />
                </div>

                {/* Pill Status / Button */}
                <div className="mt-2">
                  <button className="w-full py-2.5 rounded-full bg-gradient-to-r from-[#FF3823] to-[#FF6A00] text-white text-[12px] font-bold tracking-wide shadow-[0_6px_20px_rgba(255,56,35,0.45)] hover:brightness-110 transition-all flex items-center justify-center gap-1.5 cursor-pointer">
                    <span>{steps[3].btnText}</span>
                    <CheckCircle2 className="w-3.5 h-3.5 text-white" />
                  </button>
                </div>
              </div>

              {/* Glossy Floor Mirror Reflection */}
              <div className="w-full max-w-[260px] h-14 mt-1 opacity-20 pointer-events-none overflow-hidden blur-[1px] transform scale-y-[-1] mask-radial hidden lg:block">
                <div className="w-full h-full p-4 rounded-2xl glass-radiant border border-white/10 bg-gradient-to-b from-white/10 to-transparent" />
              </div>
            </div>

          </div>

        </div>

        {/* ─── Active Hover Telemetry Description Box ─── */}
        <div className="h-20 sm:h-24 flex items-center justify-center mt-10 text-center max-w-xl px-4 z-20">
          <AnimatePresence mode="wait">
            {activeStep !== null ? (
              <motion.div
                key={activeStep}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="p-4 rounded-2xl glass-radiant border border-[#FF3823]/40 text-xs sm:text-sm text-neutral-200 shadow-[0_10px_30px_rgba(255,56,35,0.25)]"
              >
                <span className="text-white font-bold mr-1.5 text-gradient-hero">
                  {steps[activeStep].title}:
                </span>
                {steps[activeStep].desc}
              </motion.div>
            ) : (
              <motion.div
                key="default"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-xs text-neutral-400 font-mono flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-[#FF3823] animate-pulse shadow-[0_0_8px_#FF3823]" />
                <span>
                  {isBn 
                    ? "যেকোনো ধাপের ওপর কার্সার রাখুন সম্পূর্ণ মেথোডোলজি ও ডেলিভারি বিবরণ দেখতে" 
                    : "Hover over any stage to view our engineering execution and delivery specifications"}
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ─── Direct Consultation Action CTA ─── */}
        <div className="mt-8 z-20">
          <a
            href="#contact"
            onClick={(e) => handleSmoothScroll(e, "#contact")}
          >
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              className="pill-btn-primary pl-7 pr-3 py-3 text-xs sm:text-sm font-bold tracking-wider uppercase flex items-center gap-3 shadow-[0_10px_35px_rgba(255,56,35,0.5)]"
            >
              <span>{isBn ? "আমাদের সাথে প্রজেক্ট শুরু করুন" : "Start Your Project"}</span>
              <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                <ArrowRight className="w-3.5 h-3.5 text-white" />
              </span>
            </motion.button>
          </a>
        </div>

      </div>
    </section>
  );
}
