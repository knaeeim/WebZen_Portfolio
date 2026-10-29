"use client";

import React, { useState } from "react";
import { useSite } from "@/context/SiteContext";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowUpRight, 
  Globe, 
  CheckCircle2, 
  ExternalLink, 
  Rocket, 
  ShieldCheck, 
  Zap, 
  Palette, 
  TrendingUp, 
  ArrowRight,
  Activity,
  GraduationCap,
  Users,
  Building2,
  FolderGit2,
  ShoppingBag
} from "lucide-react";

export function ProjectsSection() {
  const { data } = useSite();
  const { language } = useLanguage();
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

  const projectSteps = [
    {
      step: "01",
      numberText: "01 •",
      side: "left",
      annotationTitle: isBn ? "ই-কমার্স ও ওমনিচ্যানেল POS" : "E-Commerce & Omnichannel POS",
      annotationDesc: isBn
        ? "দ্বিভাষিক অর্গানিক শপ, সেন্ট্রাল ইনভেন্টরি পুলিং, ক্লাউড POS ও Steadfast কুরিয়ার অটোমেশন।"
        : "Bilingual organic store, central inventory sync, cloud POS, and Steadfast courier automation.",
      icon: ShoppingBag,
      title: "ShankhapushpiBD.com",
      domain: "shankhapushpibd.com",
      status: isBn ? "লাইভ শপ ও ক্লাউড POS" : "Live Store • Cloud POS",
      badgeText: "FLAGSHIP POS",
      client: isBn ? "শঙ্খপুষ্পী অর্গানিকস" : "Shankhapushpi BD",
      liveUrl: "https://shankhapushpibd.com/bn",
      tags: ["Next.js 15", "PostgreSQL", "Cloud POS", "Steadfast API"]
    },
    {
      step: "02",
      numberText: "02 •",
      side: "right",
      annotationTitle: isBn ? "হেলথটেক ও ডক্টর বুকিং OS" : "HealthTech & Doctor Booking OS",
      annotationDesc: isBn
        ? "সহজ ৩ ধাপে ডক্টর সিরিয়াল বুকিং, অ্যাটমিক স্লট লক, প্রকৃতি পরীক্ষা ও ডক্টর এডমিন OS।"
        : "Online doctor appointments, atomic concurrency lock, clinical intake, and doctor admin OS.",
      icon: Activity,
      title: "DevojyotiDutta.com",
      domain: "devojyotidutta.com",
      status: isBn ? "১,২০০+ সফল সিরিয়াল বুকিং" : "1,200+ Bookings • Active",
      badgeText: "HEALTHTECH",
      client: isBn ? "ডা. দেবজ্যোতি দত্ত (B.A.M.S.)" : "Devojyoti Dutta (B.A.M.S.)",
      liveUrl: "https://www.devojyotidutta.com",
      tags: ["HealthTech", "Next.js 15", "PostgreSQL", "Coolify VPS"]
    },
    {
      step: "03",
      numberText: "03 •",
      side: "left",
      annotationTitle: isBn ? "একাডেমিক ও রিসার্চ প্ল্যাটফর্ম" : "Academic & Research Platform",
      annotationDesc: isBn
        ? "BIGD ব্র্যাক ইউনিভার্সিটির গবেষকের একাডেমিক পেপার ও ইন্টারঅ্যাক্টিভ ওয়েভ ক্যানভাস শোকেস।"
        : "Official academic research portal for BIGD, BRAC University with real-time wave canvas.",
      icon: GraduationCap,
      title: "imranh.me",
      domain: "www.imranh.me",
      status: isBn ? "১০০% লাইভ রিসার্চ পোর্টাল" : "100% Live Academic Showcase",
      badgeText: "ACADEMIC",
      client: isBn ? "ইমরান হোসেন (BIGD, BRACU)" : "Imran Hossain (BIGD, BRACU)",
      liveUrl: "https://www.imranh.me",
      tags: ["Research", "Next.js 16", "Wave Canvas", "Academic SEO"]
    },
    {
      step: "04",
      numberText: "04 •",
      side: "right",
      annotationTitle: isBn ? "এডুটেক ও টিউটর মার্কেটপ্লেস" : "EdTech & Tutor Marketplace",
      annotationDesc: isBn
        ? "শিক্ষার্থী ও সার্টিফাইড টিউটরদের ওয়ান-অন-ওয়ান সেশন শিডিউলিং, RBAC ড্যাশবোর্ড ও সিকিউর পেমেন্ট।"
        : "Tutor marketplace connecting students with verified educators for 1-on-1 scheduled sessions.",
      icon: Users,
      title: "Skill-Bridge Enterprise",
      domain: "skillbridge.vercel.app",
      status: isBn ? "লাইভ এডুটেক প্ল্যাটফর্ম" : "Live Marketplace • Verified",
      badgeText: "EDUTECH",
      client: isBn ? "SkillBridge EdTech" : "SkillBridge EdTech",
      liveUrl: "https://skill-bridge-client-taupe.vercel.app/",
      tags: ["Next.js", "Express.js", "PostgreSQL", "Prisma ORM"]
    }
  ];

  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden scroll-mt-20 bg-[#050505] z-10">
      
      {/* Background ambient lighting - Soft Crimson & Amber Glow */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[550px] pointer-events-none rounded-full" 
        style={{
          background: "radial-gradient(circle, rgba(255, 56, 35, 0.12) 0%, rgba(255, 106, 0, 0.08) 40%, transparent 70%)",
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
              <span>{isBn ? "প্রজেক্ট ডেপ্লয়মেন্ট ম্যাপ" : "PRODUCTION PIPELINE"}</span>
            </div>

            {/* Massive Bold Headline */}
            <h2 className={`text-4xl sm:text-5xl lg:text-[3.5rem] text-white font-black tracking-tight leading-[1.18] sm:leading-[1.15] pb-1 ${isBn ? "font-bangla-display" : "font-display"}`}>
              {isBn ? (
                <>
                  আর্কিটেকচার থেকে <br className="hidden sm:inline" />
                  <span className="text-gradient-hero">লাইভ প্রোডাকশনে</span>
                </>
              ) : (
                <>
                  From Architecture <br className="hidden sm:inline" />
                  <span className="text-gradient-hero">to Live Production</span>
                </>
              )}
            </h2>

            {/* Subhead */}
            <p className={`mt-4 text-sm sm:text-base text-neutral-400 font-normal leading-relaxed ${isBn ? "font-bangla-body" : ""}`}>
              {isBn
                ? "ওয়েবজেন বাংলাদেশ নির্মিত প্রতিটি প্রজেক্ট ক্লাউড ইনফ্রাস্ট্রাকচারে লাইভ হোস্টেড এবং বিশ্বজুড়ে ব্যবহারকারীদের দ্বারা ব্যবহৃত।"
                : "Explore production-grade digital applications built by WebZen Bangladesh—engineered with precision, validated by metrics, and deployed live on the global internet."}
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
              
              {/* Header: Icon + Title + Status */}
              <div className="flex items-center gap-3.5 pb-4 border-b border-white/[0.08]">
                <div className="w-12 h-12 rounded-full border border-[#FF6A00]/40 bg-[#FF6A00]/10 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(255,106,0,0.3)]">
                  <FolderGit2 className="w-5 h-5 text-[#FF6A00]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white font-mono">live-production.io</div>
                  <div className="text-[11px] text-neutral-400 font-medium">
                    {isBn ? "ভেরিফায়েড লাইভ ক্লায়েন্ট পোর্টফোলিও" : "Verified Deployments"}
                  </div>
                </div>
              </div>

              {/* 4 Checklist Items with Orange Checkmarks */}
              <div className="pt-4 space-y-2.5">
                {[
                  isBn ? "শঙ্খপুষ্পী (shankhapushpibd.com — ক্লাউড POS)" : "ShankhapushpiBD.com (Omnichannel Cloud POS)",
                  isBn ? "DevojyotiDutta.com (১,২০০+ সফল সিরিয়াল বুকিং)" : "DevojyotiDutta.com (1,200+ Clinical Bookings)",
                  isBn ? "imranh.me (BIGD একাডেমিক ও রিসার্চ)" : "ImranH.me (BIGD Academic & Research)",
                  isBn ? "Skill-Bridge Enterprise (এডটেক মার্কেটপ্লেস)" : "Skill-Bridge Enterprise (EdTech Ecosystem)"
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
          
          {/* Step 01: DevojyotiDutta.com (Left Note, Center Card) */}
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
                    {projectSteps[0].numberText} {projectSteps[0].annotationTitle}
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                    {projectSteps[0].annotationDesc}
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
                      <ShoppingBag className="w-6 h-6 text-[#FF6A00]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-base font-bold text-white tracking-wide truncate">
                          {projectSteps[0].title}
                        </h4>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.04] text-[#FF6A00] border border-[#FF6A00]/30 font-bold">
                          {projectSteps[0].badgeText}
                        </span>
                      </div>
                      <div className="text-xs font-mono text-neutral-400 mt-0.5 truncate">
                        {projectSteps[0].domain}
                      </div>
                      <div className="mt-2.5 flex items-center justify-between gap-2">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/60 border border-white/[0.08] text-[11px] font-medium text-emerald-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34D399]" />
                          <span>{projectSteps[0].status}</span>
                        </div>
                        {projectSteps[0].liveUrl && (
                          <a
                            href={projectSteps[0].liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[11px] font-bold text-[#FF6A00] hover:text-white transition-colors"
                          >
                            <span>Live</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        )}
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
                  <filter id="glow-orange-p1" x="-20%" y="-20%" width="140%" height="140%">
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
                  filter="url(#glow-orange-p1)"
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

          {/* Step 02: imranh.me (Center Card, Right Note) */}
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
                      <Activity className="w-6 h-6 text-[#FF6A00]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-base font-bold text-white tracking-wide truncate">
                          {projectSteps[1].title}
                        </h4>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.04] text-[#FF6A00] border border-[#FF6A00]/30 font-bold">
                          {projectSteps[1].badgeText}
                        </span>
                      </div>
                      <div className="text-xs font-mono text-neutral-400 mt-0.5 truncate">
                        {projectSteps[1].domain}
                      </div>
                      <div className="mt-2.5 flex items-center justify-between gap-2">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/60 border border-white/[0.08] text-[11px] font-medium text-emerald-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34D399]" />
                          <span>{projectSteps[1].status}</span>
                        </div>
                        {projectSteps[1].liveUrl && (
                          <a
                            href={projectSteps[1].liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[11px] font-bold text-[#FF6A00] hover:text-white transition-colors"
                          >
                            <span>Live</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        )}
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
                    {projectSteps[1].numberText} {projectSteps[1].annotationTitle}
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                    {projectSteps[1].annotationDesc}
                  </p>
                </div>
              </motion.div>

            </div>

            {/* Glowing S-Curve Wire: From Bottom Center of Card 2 -> Left -> Down -> Right into Top Center of Card 3 */}
            <div className="relative w-full h-16 sm:h-20 flex items-center justify-center my-1 pointer-events-none">
              <svg className="w-full h-full max-w-[540px] overflow-visible" viewBox="0 0 540 80" fill="none">
                <defs>
                  <filter id="glow-orange-p2" x="-20%" y="-20%" width="140%" height="140%">
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
                  filter="url(#glow-orange-p2)"
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

          {/* Step 03: Mentora (SkillBridge) (Left Note, Center Card) */}
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
                    {projectSteps[2].numberText} {projectSteps[2].annotationTitle}
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                    {projectSteps[2].annotationDesc}
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
                      <GraduationCap className="w-6 h-6 text-[#FF6A00]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-base font-bold text-white tracking-wide truncate">
                          {projectSteps[2].title}
                        </h4>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.04] text-[#FF6A00] border border-[#FF6A00]/30 font-bold">
                          {projectSteps[2].badgeText}
                        </span>
                      </div>
                      <div className="text-xs font-mono text-neutral-400 mt-0.5 truncate">
                        {projectSteps[2].domain}
                      </div>
                      <div className="mt-2.5 flex items-center justify-between gap-2">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/60 border border-white/[0.08] text-[11px] font-medium text-emerald-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34D399]" />
                          <span>{projectSteps[2].status}</span>
                        </div>
                        {projectSteps[2].liveUrl && (
                          <a
                            href={projectSteps[2].liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[11px] font-bold text-[#FF6A00] hover:text-white transition-colors"
                          >
                            <span>Live</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        )}
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
                  <filter id="glow-orange-p3" x="-20%" y="-20%" width="140%" height="140%">
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
                  filter="url(#glow-orange-p3)"
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

          {/* Step 04: House Manager (Center Card, Right Note) */}
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
                      <Users className="w-6 h-6 text-[#FF6A00]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-base font-bold text-white tracking-wide truncate">
                          {projectSteps[3].title}
                        </h4>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.04] text-[#FF6A00] border border-[#FF6A00]/30 font-bold">
                          {projectSteps[3].badgeText}
                        </span>
                      </div>
                      <div className="text-xs font-mono text-neutral-400 mt-0.5 truncate">
                        {projectSteps[3].domain}
                      </div>
                      <div className="mt-2.5 flex items-center justify-between gap-2">
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-black/60 border border-white/[0.08] text-[11px] font-medium text-emerald-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_#34D399]" />
                          <span>{projectSteps[3].status}</span>
                        </div>
                        {projectSteps[3].liveUrl && (
                          <a
                            href={projectSteps[3].liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 text-[11px] font-bold text-[#FF6A00] hover:text-white transition-colors"
                          >
                            <span>Live</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </a>
                        )}
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
                    {projectSteps[3].numberText} {projectSteps[3].annotationTitle}
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                    {projectSteps[3].annotationDesc}
                  </p>
                </div>
              </motion.div>

            </div>

            {/* Straight Vertical Circuit Line to Destination Node */}
            <div className="relative w-full h-16 sm:h-20 flex items-center justify-center my-1 pointer-events-none">
              <svg className="w-full h-full max-w-[540px] overflow-visible" viewBox="0 0 540 80" fill="none">
                <defs>
                  <filter id="glow-orange-p4" x="-20%" y="-20%" width="140%" height="140%">
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
                  filter="url(#glow-orange-p4)"
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

          {/* ═══ Radiant Destination Node: "Your Next Venture / Ready for Global Deployment" ═══ */}
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
                <Rocket className="w-9 h-9 sm:w-11 sm:h-11 text-[#FF6A00] drop-shadow-[0_0_12px_rgba(255,106,0,0.8)]" />
              </div>
            </div>

            {/* Destination Title & Subtitle */}
            <h3 className={`mt-5 text-xl sm:text-2xl font-bold text-white tracking-tight ${isBn ? "font-bangla-display" : "font-display"}`}>
              {isBn ? "আপনার পরবর্তী প্রজেক্ট" : "Your Next Venture"}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1 font-medium">
              {isBn ? "ওয়েবজেনের সাথে এখনই লাইভ করুন" : "Ready for Global Production Deployment"}
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
                  <span>{isBn ? "প্রজেক্ট আলোচনা শুরু করুন" : "Start Your Project"}</span>
                  <span className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                    <ArrowRight className="w-3.5 h-3.5 text-white" />
                  </span>
                </motion.button>
              </a>
            </div>
          </motion.div>

        </div>

        {/* ═══ Bottom Feature Tray: 4 Pillars (100% Live URLs, Sub-Second Speed, Bespoke UI/UX, Proven ROI) ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 sm:mt-24 p-6 sm:p-8 rounded-2xl glass-radiant border border-white/[0.1] shadow-[0_15px_40px_rgba(0,0,0,0.85)]"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            
            {/* Pillar 1: Verified Live URLs */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2.5 mb-2">
                <CheckCircle2 className="w-5 h-5 text-[#FF6A00]" />
                <span className="text-sm font-bold text-white tracking-wide">
                  {isBn ? "ভেরিফায়েড লাইভ সাইট" : "100% Live Production"}
                </span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                {isBn 
                  ? "প্রতিটি প্রজেক্ট ক্লাউড সার্ভারে লাইভ হোস্ট করা এবং যে কোনো স্থান থেকে সরাসরি ব্রাউজ করা যায়।" 
                  : "Every project is actively deployed, verified, and accessible globally on production cloud servers."}
              </p>
            </div>

            {/* Pillar 2: Sub-Second Speed */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2.5 mb-2">
                <Zap className="w-5 h-5 text-[#FF6A00]" />
                <span className="text-sm font-bold text-white tracking-wide">
                  {isBn ? "সাব-সেকেন্ড পারফরম্যান্স" : "Sub-Second Speed"}
                </span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                {isBn 
                  ? "Next.js SSR এবং এজ সিডিএন ক্যাশিং নিশ্চিত করে বিদ্যুৎগতির ট্রানজিশন ও লোড টাইম।" 
                  : "Next.js server-side streaming and edge caching deliver instantaneous, friction-free loading."}
              </p>
            </div>

            {/* Pillar 3: Bespoke UI/UX */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2.5 mb-2">
                <Palette className="w-5 h-5 text-[#FF6A00]" />
                <span className="text-sm font-bold text-white tracking-wide">
                  {isBn ? "ইউনিক হ্যান্ডক্রাফটেড ডিজাইন" : "Bespoke UI/UX"}
                </span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                {isBn 
                  ? "কোনো সাধারণ টেমপ্লেট নয়—প্রতিটি ক্লায়েন্টের ব্র্যান্ড আইডেন্টিটির সাথে মিল রেখে কাস্টম ডিজাইন।" 
                  : "Zero generic templates—handcrafted design systems with radiant dark aesthetics tailored to each client."}
              </p>
            </div>

            {/* Pillar 4: Proven ROI */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2.5 mb-2">
                <TrendingUp className="w-5 h-5 text-[#FF6A00]" />
                <span className="text-sm font-bold text-white tracking-wide">
                  {isBn ? "পরিমাপযোগ্য ব্যবসায়িক ফলাফল" : "High Business Impact"}
                </span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                {isBn 
                  ? "১,২০০+ অনলাইন বুকিং ও সফল ইউজার অনবোর্ডিংয়ের মাধ্যমে ক্লায়েন্টের ব্যবসায় নিশ্চিত প্রবৃদ্ধি।" 
                  : "Delivering real patient bookings, automated customer flows, and measurable business conversion."}
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
