"use client";

import React from "react";
import { motion } from "framer-motion";
import { 
  ArrowUpRight, 
  CodeXml, 
  Bot, 
  Palette, 
  ShieldCheck, 
  Zap, 
  Server, 
  TrendingUp, 
  CheckCircle2, 
  Globe, 
  Monitor, 
  ArrowRight,
  Layers,
  Lock
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useSite } from "@/context/SiteContext";

export function ServicesSection() {
  const { language } = useLanguage();
  const { data } = useSite();
  const isBn = language === "bn";

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
      step: "01",
      numberText: "01 •",
      side: "left",
      annotationTitle: isBn ? "ফুল-স্ট্যাক ওয়েব ইঞ্জিনিয়ারিং" : "Full-Stack Web Architecture",
      annotationDesc: isBn 
        ? "Next.js ও ক্লাউড প্রাকৃতি দিয়ে সাব-সেকেন্ড পেজ লোড ও ভবিষ্যৎমুখী আর্কিটেকচার।" 
        : "Next.js platforms with sub-second page loads and bespoke API architecture.",
      icon: Globe,
      cardTitle: isBn ? "ফুল-স্ট্যাক ওয়েব আর্কিটেকচার" : "Full-Stack Web Architecture",
      cardDomain: "webzen.bd/web-architecture",
      status: isBn ? "সক্রিয় সিস্টেম" : "Active System",
      statusColor: "emerald",
      badgeText: "NEXT.JS 16",
      tags: isBn 
        ? ["কাস্টম আর্কিটেকচার", "অটোমেটেড CI/CD", "লাইটহাউস ৯৫+"] 
        : ["Custom Architecture", "Automated CI/CD", "Lighthouse 95+"]
    },
    {
      step: "02",
      numberText: "02 •",
      side: "right",
      annotationTitle: isBn ? "AI ওয়ার্কফ্লো ও অটোমেশন" : "AI Workflows & Automation",
      annotationDesc: isBn 
        ? "অটোনোমাস LLM এজেন্টস ও স্মার্ট ইন্টেলিজেন্ট পাইপলাইন দিয়ে সময় ও ব্যয় সাশ্রয়।" 
        : "Autonomous LLM agents and semantic pipelines to automate complex workflows.",
      icon: Bot,
      cardTitle: isBn ? "AI ও প্রসেস অটোমেশন" : "AI & Process Automation",
      cardDomain: "webzen.bd/ai-workflows",
      status: isBn ? "অটোমেটেড" : "Resolved",
      statusColor: "emerald",
      badgeText: "SMART AGENTS",
      tags: isBn 
        ? ["AI এজেন্টস", "অটোমেটেড পাইপলাইন", "ভেক্টর সার্চ"] 
        : ["AI Agents", "Automated Pipelines", "Smart Analytics"]
    },
    {
      step: "03",
      numberText: "03 •",
      side: "left",
      annotationTitle: isBn ? "রেডিয়েন্ট UI/UX ডিজাইন" : "Radiant UI/UX Architecture",
      annotationDesc: isBn 
        ? "চোখ ধাঁধানো নিয়ন গ্লাস ও ৬০fps মাইক্রো-ইন্টারঅ্যাকশন দিয়ে আধুনিক ব্র্যান্ডিং।" 
        : "Elevate your brand with award-winning aesthetics, micro-interactions, and 60fps physics.",
      icon: Palette,
      cardTitle: isBn ? "UI/UX ও ডিজাইন সিস্টেমস" : "UI/UX & Design Systems",
      cardDomain: "webzen.bd/uiux-design",
      status: isBn ? "পিক্সেল-পারফেক্ট" : "Pixel-Perfect",
      statusColor: "emerald",
      badgeText: "60FPS MOTION",
      tags: isBn 
        ? ["ইন্টারঅ্যাক্টিভ প্রোটোটাইপ", "ডিজাইন সিস্টেম", "A/B অপ্টিমাইজড"] 
        : ["Interactive Prototypes", "Design System", "A/B Tested"]
    },
    {
      step: "04",
      numberText: "04 •",
      side: "right",
      annotationTitle: isBn ? "ক্লাউড স্কেলিং ও পেমেন্ট সিকিউরিটি" : "Cloud & BD Payment Security",
      annotationDesc: isBn 
        ? "বিকাশ, নগদ, স্ট্রাইপ ও এন্টারপ্রাইজ AWS ক্লাউড সিকিউরিটি দিয়ে নিরবচ্ছিন্ন লেনদেন।" 
        : "Instant checkout with bKash, Nagad, Stripe, and enterprise SSL encryption.",
      icon: Lock,
      cardTitle: isBn ? "ক্লাউড ও পেমেন্ট গেটওয়ে" : "Cloud & Payment Gateways",
      cardDomain: "webzen.bd/fintech-cloud",
      status: isBn ? "সুরক্ষিত ও এনক্রিপ্টেড" : "Active & Encrypted",
      statusColor: "emerald",
      badgeText: "BKASH / SSL",
      tags: isBn 
        ? ["বিকাশ ও নগদ API", "ইনস্ট্যান্ট ওয়েবহুক", "ক্লাউড ক্লাস্টারিং"] 
        : ["bKash & Nagad API", "Instant Webhooks", "Zero-Downtime"]
    }
  ];

  return (
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden scroll-mt-20 bg-[#050505] z-10">
      
      {/* Background ambient lighting - Soft Crimson & Amber Glow */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[550px] pointer-events-none rounded-full" 
        style={{
          background: "radial-gradient(circle, rgba(255, 106, 0, 0.12) 0%, rgba(255, 56, 35, 0.08) 40%, transparent 70%)",
          filter: "blur(130px)",
        }}
        aria-hidden="true" 
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* ═══ Header Area (Matching Reference Layout: Eyebrow + Headline on Left, Status Card on Right) ═══ */}
        <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-8 mb-16 sm:mb-20">
          
          {/* Left Column: Eyebrow, Heading, Subhead */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl"
          >
            {/* Orange Eyebrow Badge */}
            <div className="text-[11px] font-mono font-bold tracking-[0.2em] text-[#FF6A00] uppercase mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#FF6A00] shadow-[0_0_8px_#FF6A00]" />
              <span>{isBn ? "সার্ভিস আর্কিটেকচার ব্লুপ্রিন্ট" : "INFRASTRUCTURE MAP"}</span>
            </div>

            {/* Massive Bold Headline */}
            <h2 className={`text-4xl sm:text-5xl lg:text-[3.5rem] text-white font-black tracking-tight leading-[1.08] ${isBn ? "font-bangla-display" : "font-display"}`}>
              {isBn ? (
                <>
                  কনসেপ্ট থেকে <br className="hidden sm:inline" />
                  <span className="text-gradient-hero">লাইভ ডেপ্লয়মেন্ট</span>
                </>
              ) : (
                <>
                  From Concept <br className="hidden sm:inline" />
                  <span className="text-gradient-hero">to Deployed</span>
                </>
              )}
            </h2>

            {/* Subhead */}
            <p className={`mt-4 text-sm sm:text-base text-neutral-400 font-normal leading-relaxed ${isBn ? "font-bangla-body" : ""}`}>
              {isBn
                ? "কীভাবে আপনার ডিজিটাল আইডিয়া ওয়েবজেন বাংলাদেশের উন্নত ক্লাউড ইঞ্জিনিয়ারিং ও সিকিউর প্রোটোকলের মাধ্যমে লাইভ ওয়েবসাইটে রূপান্তরিত হয়।"
                : "How your vision transforms into an ultra-fast, live web platform through modern engineering, DNS routing, and secure protocols."}
            </p>
          </motion.div>

          {/* Right Column: Top Status Glass Card (Matching Reference Image) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="w-full lg:w-[360px] shrink-0"
          >
            <div className="p-5 sm:p-6 rounded-2xl glass-radiant border border-white/[0.1] shadow-[0_15px_35px_rgba(0,0,0,0.8)]">
              
              {/* Header: Icon + Title + Registered Status */}
              <div className="flex items-center gap-3.5 pb-4 border-b border-white/[0.08]">
                <div className="w-12 h-12 rounded-full border border-[#FF6A00]/40 bg-[#FF6A00]/10 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(255,106,0,0.3)]">
                  <Globe className="w-5 h-5 text-[#FF6A00]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white font-mono">webzen.bd</div>
                  <div className="text-[11px] text-neutral-400 font-medium">
                    {isBn ? "এন্টারপ্রাইজ ওয়েব আর্কিটেকচার" : "Registered Architecture"}
                  </div>
                </div>
              </div>

              {/* 4 Checklist Items with Orange Checkmarks */}
              <div className="pt-4 space-y-2.5">
                {[
                  isBn ? "সাব-সেকেন্ড টিটিএফবি ও এজ রাউটিং" : "Sub-second TTFB & Edge Routing",
                  isBn ? "অটোমেটেড সিআই/সিডি পাইপলাইন" : "Automated CI/CD Pipeline",
                  isBn ? "গ্লোবাল প্রোপাগেশন ও সিডিএন" : "Propagation Global & CDN",
                  isBn ? "সিকিউর বিকাশ ও কার্ড গেটওয়ে" : "Connection & SSL Established"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-xs text-neutral-300">
                    <CheckCircle2 className="w-4 h-4 text-[#FF6A00] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

            </div>
          </motion.div>

        </div>

        {/* ═══ The S-Curve Flow Architecture (Center Cards with Alternating Notes & Glowing Wires) ═══ */}
        <div className="relative my-8 sm:my-14">
          
          {/* Step 01: Full-Stack Web (Left Note, Center Card) */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-4 md:gap-0">
              
              {/* Left Annotation Note */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="md:col-span-4 flex flex-col md:items-end md:text-right order-2 md:order-1"
              >
                <div className="max-w-[260px]">
                  <div className="text-xs font-mono font-bold text-[#FF6A00] uppercase tracking-wider mb-1">
                    {steps[0].numberText} {steps[0].annotationTitle}
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                    {steps[0].annotationDesc}
                  </p>
                </div>
              </motion.div>

              {/* Dotted Connector Line (Desktop) */}
              <div className="hidden md:flex md:col-span-1 items-center justify-end pr-2 order-2">
                <span className="w-full border-t border-dashed border-[#FF6A00]/50" />
                <span className="w-2 h-2 rounded-full bg-[#FF6A00] shadow-[0_0_8px_#FF6A00] shrink-0 ml-1" />
              </div>

              {/* Center Card */}
              <motion.div 
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="md:col-span-6 md:col-start-6 max-w-md w-full mx-auto order-1 md:order-3"
              >
                <div className="p-5 rounded-2xl glass-radiant border border-white/[0.1] hover:border-[#FF6A00]/40 transition-all duration-300 shadow-[0_12px_32px_rgba(0,0,0,0.85)]">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full border border-[#FF6A00]/40 bg-[#FF6A00]/10 flex items-center justify-center shrink-0 shadow-[0_0_16px_rgba(255,106,0,0.25)]">
                      <Globe className="w-6 h-6 text-[#FF6A00]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-base font-bold text-white tracking-wide truncate">
                          {steps[0].cardTitle}
                        </h4>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.04] text-neutral-400 border border-white/10">
                          {steps[0].badgeText}
                        </span>
                      </div>
                      <div className="text-xs font-mono text-neutral-400 mt-0.5 truncate">
                        {steps[0].cardDomain}
                      </div>
                      <div className="mt-2.5 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/60 border border-white/[0.08] text-[11px] font-medium text-emerald-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34D399]" />
                        <span>{steps[0].status}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="hidden md:block md:col-span-1" />

            </div>

            {/* Glowing S-Curve Wire: From Bottom Center of Card 1 -> Right -> Down -> Left into Top Center of Card 2 */}
            <div className="relative w-full h-16 sm:h-20 flex items-center justify-center my-1 pointer-events-none">
              <svg className="w-full h-full max-w-[540px] overflow-visible" viewBox="0 0 540 80" fill="none">
                <defs>
                  <filter id="glow-orange-1" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <path
                  d="M 270 0 L 270 20 Q 270 30 280 30 L 410 30 Q 420 30 420 40 L 420 50 Q 420 60 410 60 L 280 60 Q 270 60 270 70 L 270 80"
                  stroke="#FF6A00"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter="url(#glow-orange-1)"
                  opacity="0.95"
                />
                <circle r="3.5" fill="#FFFFFF">
                  <animateMotion
                    path="M 270 0 L 270 20 Q 270 30 280 30 L 410 30 Q 420 30 420 40 L 420 50 Q 420 60 410 60 L 280 60 Q 270 60 270 70 L 270 80"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </circle>
              </svg>
            </div>
          </div>

          {/* Step 02: AI Workflows & Automation (Center Card, Right Note) */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-4 md:gap-0">
              
              <div className="hidden md:block md:col-span-1" />

              {/* Center Card */}
              <motion.div 
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="md:col-span-6 max-w-md w-full mx-auto"
              >
                <div className="p-5 rounded-2xl glass-radiant border border-white/[0.1] hover:border-[#FF6A00]/40 transition-all duration-300 shadow-[0_12px_32px_rgba(0,0,0,0.85)]">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full border border-[#FF6A00]/40 bg-[#FF6A00]/10 flex items-center justify-center shrink-0 shadow-[0_0_16px_rgba(255,106,0,0.25)]">
                      <span className="text-xl font-black text-[#FF6A00] font-mono">A</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-base font-bold text-white tracking-wide truncate">
                          {steps[1].cardTitle}
                        </h4>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.04] text-neutral-400 border border-white/10">
                          {steps[1].badgeText}
                        </span>
                      </div>
                      <div className="text-xs font-mono text-neutral-400 mt-0.5 truncate">
                        {steps[1].cardDomain}
                      </div>
                      <div className="mt-2.5 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/60 border border-white/[0.08] text-[11px] font-medium text-emerald-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34D399]" />
                        <span>{steps[1].status}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Dotted Connector Line (Desktop) */}
              <div className="hidden md:flex md:col-span-1 items-center justify-start pl-2">
                <span className="w-2 h-2 rounded-full bg-[#FF6A00] shadow-[0_0_8px_#FF6A00] shrink-0 mr-1" />
                <span className="w-full border-t border-dashed border-[#FF6A00]/50" />
              </div>

              {/* Right Annotation Note */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="md:col-span-4 flex flex-col md:items-start md:text-left"
              >
                <div className="max-w-[260px]">
                  <div className="text-xs font-mono font-bold text-[#FF6A00] uppercase tracking-wider mb-1">
                    {steps[1].numberText} {steps[1].annotationTitle}
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                    {steps[1].annotationDesc}
                  </p>
                </div>
              </motion.div>

            </div>

            {/* Glowing S-Curve Wire: From Bottom Center of Card 2 -> Left -> Down -> Right into Top Center of Card 3 */}
            <div className="relative w-full h-16 sm:h-20 flex items-center justify-center my-1 pointer-events-none">
              <svg className="w-full h-full max-w-[540px] overflow-visible" viewBox="0 0 540 80" fill="none">
                <defs>
                  <filter id="glow-orange-2" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <path
                  d="M 270 0 L 270 20 Q 270 30 260 30 L 130 30 Q 120 30 120 40 L 120 50 Q 120 60 130 60 L 260 60 Q 270 60 270 70 L 270 80"
                  stroke="#FF6A00"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter="url(#glow-orange-2)"
                  opacity="0.95"
                />
                <circle r="3.5" fill="#FFFFFF">
                  <animateMotion
                    path="M 270 0 L 270 20 Q 270 30 260 30 L 130 30 Q 120 30 120 40 L 120 50 Q 120 60 130 60 L 260 60 Q 270 60 270 70 L 270 80"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </circle>
              </svg>
            </div>
          </div>

          {/* Step 03: Radiant UI/UX Design (Left Note, Center Card) */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-4 md:gap-0">
              
              {/* Left Annotation Note */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="md:col-span-4 flex flex-col md:items-end md:text-right order-2 md:order-1"
              >
                <div className="max-w-[260px]">
                  <div className="text-xs font-mono font-bold text-[#FF6A00] uppercase tracking-wider mb-1">
                    {steps[2].numberText} {steps[2].annotationTitle}
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                    {steps[2].annotationDesc}
                  </p>
                </div>
              </motion.div>

              {/* Dotted Connector Line (Desktop) */}
              <div className="hidden md:flex md:col-span-1 items-center justify-end pr-2 order-2">
                <span className="w-full border-t border-dashed border-[#FF6A00]/50" />
                <span className="w-2 h-2 rounded-full bg-[#FF6A00] shadow-[0_0_8px_#FF6A00] shrink-0 ml-1" />
              </div>

              {/* Center Card */}
              <motion.div 
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="md:col-span-6 md:col-start-6 max-w-md w-full mx-auto order-1 md:order-3"
              >
                <div className="p-5 rounded-2xl glass-radiant border border-white/[0.1] hover:border-[#FF6A00]/40 transition-all duration-300 shadow-[0_12px_32px_rgba(0,0,0,0.85)]">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full border border-[#FF6A00]/40 bg-[#FF6A00]/10 flex items-center justify-center shrink-0 shadow-[0_0_16px_rgba(255,106,0,0.25)]">
                      <span className="text-xs font-black text-[#FF6A00] font-mono">UI/UX</span>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-base font-bold text-white tracking-wide truncate">
                          {steps[2].cardTitle}
                        </h4>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.04] text-neutral-400 border border-white/10">
                          {steps[2].badgeText}
                        </span>
                      </div>
                      <div className="text-xs font-mono text-neutral-400 mt-0.5 truncate">
                        {steps[2].cardDomain}
                      </div>
                      <div className="mt-2.5 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/60 border border-white/[0.08] text-[11px] font-medium text-emerald-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34D399]" />
                        <span>{steps[2].status}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="hidden md:block md:col-span-1" />

            </div>

            {/* Glowing S-Curve Wire: From Bottom Center of Card 3 -> Right -> Down -> Left into Top Center of Card 4 */}
            <div className="relative w-full h-16 sm:h-20 flex items-center justify-center my-1 pointer-events-none">
              <svg className="w-full h-full max-w-[540px] overflow-visible" viewBox="0 0 540 80" fill="none">
                <defs>
                  <filter id="glow-orange-3" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <path
                  d="M 270 0 L 270 20 Q 270 30 280 30 L 410 30 Q 420 30 420 40 L 420 50 Q 420 60 410 60 L 280 60 Q 270 60 270 70 L 270 80"
                  stroke="#FF6A00"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  filter="url(#glow-orange-3)"
                  opacity="0.95"
                />
                <circle r="3.5" fill="#FFFFFF">
                  <animateMotion
                    path="M 270 0 L 270 20 Q 270 30 280 30 L 410 30 Q 420 30 420 40 L 420 50 Q 420 60 410 60 L 280 60 Q 270 60 270 70 L 270 80"
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </circle>
              </svg>
            </div>
          </div>

          {/* Step 04: Cloud & BD Payments Security (Center Card, Right Note) */}
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-12 items-center gap-4 md:gap-0">
              
              <div className="hidden md:block md:col-span-1" />

              {/* Center Card */}
              <motion.div 
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -4, scale: 1.01 }}
                className="md:col-span-6 max-w-md w-full mx-auto"
              >
                <div className="p-5 rounded-2xl glass-radiant border border-white/[0.1] hover:border-[#FF6A00]/40 transition-all duration-300 shadow-[0_12px_32px_rgba(0,0,0,0.85)]">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full border border-[#FF6A00]/40 bg-[#FF6A00]/10 flex items-center justify-center shrink-0 shadow-[0_0_16px_rgba(255,106,0,0.25)]">
                      <Lock className="w-6 h-6 text-[#FF6A00]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-base font-bold text-white tracking-wide truncate">
                          {steps[3].cardTitle}
                        </h4>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.04] text-neutral-400 border border-white/10">
                          {steps[3].badgeText}
                        </span>
                      </div>
                      <div className="text-xs font-mono text-neutral-400 mt-0.5 truncate">
                        {steps[3].cardDomain}
                      </div>
                      <div className="mt-2.5 inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/60 border border-white/[0.08] text-[11px] font-medium text-emerald-400">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34D399]" />
                        <span>{steps[3].status}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Dotted Connector Line (Desktop) */}
              <div className="hidden md:flex md:col-span-1 items-center justify-start pl-2">
                <span className="w-2 h-2 rounded-full bg-[#FF6A00] shadow-[0_0_8px_#FF6A00] shrink-0 mr-1" />
                <span className="w-full border-t border-dashed border-[#FF6A00]/50" />
              </div>

              {/* Right Annotation Note */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="md:col-span-4 flex flex-col md:items-start md:text-left"
              >
                <div className="max-w-[260px]">
                  <div className="text-xs font-mono font-bold text-[#FF6A00] uppercase tracking-wider mb-1">
                    {steps[3].numberText} {steps[3].annotationTitle}
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                    {steps[3].annotationDesc}
                  </p>
                </div>
              </motion.div>

            </div>

            {/* Straight Vertical Circuit Line to Destination Node */}
            <div className="relative w-full h-16 sm:h-20 flex items-center justify-center my-1 pointer-events-none">
              <svg className="w-full h-full max-w-[540px] overflow-visible" viewBox="0 0 540 80" fill="none">
                <defs>
                  <filter id="glow-orange-4" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="3" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <line
                  x1="270"
                  y1="0"
                  x2="270"
                  y2="80"
                  stroke="#FF6A00"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  filter="url(#glow-orange-4)"
                  opacity="0.95"
                />
                <circle r="3.5" fill="#FFFFFF">
                  <animate
                    attributeName="cy"
                    from="0"
                    to="80"
                    dur="1.8s"
                    repeatCount="indefinite"
                  />
                  <animate
                    attributeName="cx"
                    values="270;270"
                    dur="1.8s"
                    repeatCount="indefinite"
                  />
                </circle>
              </svg>
            </div>
          </div>

          {/* ═══ Radiant Destination Node: "Your Web Platform / Delivered Securely" ═══ */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex flex-col items-center text-center mt-2"
          >
            {/* Glowing Circular Node */}
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 rounded-full bg-[#FF6A00]/30 blur-2xl animate-pulse" />
              <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-[#FF6A00] bg-[#140804] flex items-center justify-center shadow-[0_0_40px_rgba(255,106,0,0.65),inset_0_0_20px_rgba(255,106,0,0.4)]">
                <Monitor className="w-9 h-9 sm:w-11 sm:h-11 text-[#FF6A00] drop-shadow-[0_0_12px_rgba(255,106,0,0.8)]" />
              </div>
            </div>

            {/* Destination Title & Subtitle */}
            <h3 className={`mt-5 text-xl sm:text-2xl font-bold text-white tracking-tight ${isBn ? "font-bangla-display" : "font-display"}`}>
              {isBn ? "আপনার লাইভ ওয়েব প্ল্যাটফর্ম" : "Your Web Platform"}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1 font-medium">
              {isBn ? "১০০% নিরাপদ ও সর্বোচ্চ গতিতে লাইভ" : "Delivered Securely & Scalable"}
            </p>

            {/* Direct CTA Button */}
            <div className="mt-6">
              <a 
                href="#contact" 
                onClick={(e) => handleSmoothScroll(e, "#contact")}
              >
                <motion.button 
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="pill-btn-primary pl-6 pr-2.5 py-2.5 text-xs font-bold tracking-wider uppercase flex items-center gap-3 shadow-[0_10px_30px_rgba(255,56,35,0.45)]"
                >
                  <span>{isBn ? "প্রজেক্টের আর্কিটেকচার শুরু করুন" : "Initiate Architecture"}</span>
                  <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                    <ArrowRight className="w-3.5 h-3.5 text-white" />
                  </span>
                </motion.button>
              </a>
            </div>
          </motion.div>

        </div>

        {/* ═══ Bottom Feature Tray: 4 Pillars (Secure, Fast, Reliable, Scalable) ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 sm:mt-24 p-6 sm:p-8 rounded-2xl glass-radiant border border-white/[0.1] shadow-[0_15px_40px_rgba(0,0,0,0.85)]"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            
            {/* Pillar 1: Secure */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2.5 mb-2">
                <ShieldCheck className="w-5 h-5 text-[#FF6A00]" />
                <span className="text-sm font-bold text-white tracking-wide">
                  {isBn ? "সর্বোচ্চ নিরাপত্তা" : "Secure"}
                </span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                {isBn 
                  ? "এন্ড-টু-এন্ড এনক্রিপশন ও সংরক্ষিত API এন্ডপয়েন্ট আপনার ব্যবহারকারী ও ডেটা নিরাপদ রাখে।" 
                  : "End-to-end encryption protects your users, transactions, and enterprise data."}
              </p>
            </div>

            {/* Pillar 2: Fast */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2.5 mb-2">
                <Zap className="w-5 h-5 text-[#FF6A00]" />
                <span className="text-sm font-bold text-white tracking-wide">
                  {isBn ? "সাব-সেকেন্ড স্পিড" : "Fast"}
                </span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                {isBn 
                  ? "Next.js এজ রাউটিং ও ক্যাশিং নিশ্চিত করে মিলি-সেকেন্ডে পেজ লোড ও ব্রাউজিং গতি।" 
                  : "Optimized DNS routing and edge caching ensure quick, sub-second global delivery."}
              </p>
            </div>

            {/* Pillar 3: Reliable */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2.5 mb-2">
                <Server className="w-5 h-5 text-[#FF6A00]" />
                <span className="text-sm font-bold text-white tracking-wide">
                  {isBn ? "নির্ভরযোগ্য আর্কিটেকচার" : "Reliable"}
                </span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                {isBn 
                  ? "রিডান্ড্যান্ট ক্লাউড ক্লাস্টার ও অটোমেটেড হেলথ-চেক দিয়ে ৯৯.৯% আপটাইম গ্যারান্টি।" 
                  : "Redundant infrastructure and automated health checks ensure 99.9% uptime."}
              </p>
            </div>

            {/* Pillar 4: Scalable */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2.5 mb-2">
                <TrendingUp className="w-5 h-5 text-[#FF6A00]" />
                <span className="text-sm font-bold text-white tracking-wide">
                  {isBn ? "স্কেলিং ক্যাপাসিটি" : "Scalable"}
                </span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                {isBn 
                  ? "ব্যবসার প্রবৃদ্ধির সাথে সাথে হাজার থেকে মিলিয়ন ভিজিটর সহজে হ্যান্ডেল করার ক্ষমতা।" 
                  : "Built to seamlessly grow with your business traffic, users, and enterprise needs."}
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
