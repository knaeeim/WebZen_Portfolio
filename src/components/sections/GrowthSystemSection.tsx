"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Monitor, 
  Search, 
  TrendingUp, 
  MessageCircle, 
  ArrowUpRight,
  Sparkles,
  BarChart3,
  Activity,
  Layers
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useSite } from "@/context/SiteContext";

export function GrowthSystemSection() {
  const { language } = useLanguage();
  const { data } = useSite();
  const isBn = language === "bn";

  const [activeModule, setActiveModule] = useState<string | null>(null);

  const contactPhone = data?.footer?.phone || data?.contact?.phone || "+880 1886-932936";
  const rawWhatsapp = data?.contact?.whatsapp || "+8801886932936";
  const whatsappNumber = rawWhatsapp.replace(/[^0-9]/g, "");

  const modules = [
    {
      id: "website",
      title: isBn ? "ওয়েবসাইট" : "Website",
      icon: Monitor,
      position: "top-left",
      subtitle: isBn ? "হাই-স্পিড নেক্সট.জেএস প্ল্যাটফর্ম" : "High-speed Next.js 16 Platform",
      metric: isBn ? "০.৩ সেকেন্ড লোড টাইম" : "0.3s Page Load • 99% Score",
      description: isBn
        ? "সাব-সেকেন্ড পেজ লোড, মোবাইল-ফার্স্ট আর্কিটেকচার ও ১০০% রেসপন্সিভ ডিজাইন যা ভিজিটরকে কাস্টমারে রূপান্তর করে।"
        : "Sub-second TTFB, mobile-first responsiveness, and frictionless UI/UX engineered for maximum conversion."
    },
    {
      id: "google",
      title: isBn ? "গুগল ও এসইও" : "Google",
      icon: Search,
      position: "top-right",
      subtitle: isBn ? "অর্গানিক সার্চ ও টেকনিক্যাল এসইও" : "Organic Search & Technical SEO",
      metric: isBn ? "টপ পেজ ইনডেক্সিং" : "Top Rank Keywords • Schema Sync",
      description: isBn
        ? "ক্লিন স্কিমা মার্কআপ, দ্রুত ইনডেক্সিং এবং সার্চ ইঞ্জিন অপ্টিমাইজেশন দিয়ে গুগল সার্চের শীর্ষে অবস্থান।"
        : "Automated schema markup, rich search snippets, and technical SEO structure to capture high-intent buyers."
    },
    {
      id: "ads",
      title: isBn ? "অ্যাডস ও ফানেল" : "Ads",
      icon: TrendingUp,
      position: "bottom-left",
      subtitle: isBn ? "হাই-কনভার্সন ক্যাম্পেইন ট্র্যাকিং" : "High-ROAS Landing Page Funnels",
      metric: isBn ? "৩.৫ গুণ বেশি সেলস" : "3.5x Conversion Uplift",
      description: isBn
        ? "টার্গেটেড মেটা ও গুগল অ্যাডসের জন্য অপ্টিমাইজড ল্যান্ডিং পেজ যা প্রতি ক্লিকে সর্বোচ্চ সেলস এনে দেয়।"
        : "Conversion-focused sales landing pages built to maximize ad spend return and lower acquisition cost."
    },
    {
      id: "whatsapp",
      title: isBn ? "হোয়াটসঅ্যাপ" : "WhatsApp",
      icon: MessageCircle,
      position: "bottom-right",
      subtitle: isBn ? "ইনস্ট্যান্ট কাস্টমার সিআরএম" : "Direct Customer CRM Integration",
      metric: isBn ? "ইনস্ট্যান্ট চ্যাট কানেক্ট" : "Instant Inbound Leads • 24/7",
      description: isBn
        ? "১-ক্লিকে সরাসরি হোয়াটসঅ্যাপে কাস্টমার চ্যাট, সেলস লিড ক্যাপচার এবং ইনস্ট্যান্ট কনভার্সন সিস্টেম।"
        : "One-tap direct chat triggers, automated lead routing, and instant client consultations."
    }
  ];

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-[#050505] z-10 select-none">
      
      {/* ═══ Background Ambient Electric Blue / Cyan Glow (Inspired by Reference) ═══ */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[900px] h-[500px] sm:h-[700px] pointer-events-none rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(14, 116, 244, 0.22) 0%, rgba(2, 60, 160, 0.12) 40%, rgba(5, 5, 5, 0.8) 75%)",
          filter: "blur(90px)",
        }}
        aria-hidden="true" 
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* ═══ Top Branding & Statement (Image: “Growth Isn't Random.” It's built on systems.) ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-12 sm:mb-16"
        >
          {/* Brand Mark */}
          <div className="inline-flex items-center gap-2 mb-4">
            <div className="w-7 h-7 rounded-xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center shadow-[0_0_12px_rgba(59,130,246,0.4)]">
              <span className="font-display font-black text-blue-400 text-sm">W</span>
            </div>
            <span className="text-xs font-mono font-bold tracking-wider text-neutral-300">
              webzen<span className="text-blue-400">.bd</span>
            </span>
          </div>

          {/* Main Statement Quote */}
          <h2 className={`text-3xl sm:text-5xl lg:text-[3.25rem] font-black text-white tracking-tight leading-[1.1] ${isBn ? "font-bangla-display" : "font-display"}`}>
            {isBn ? (
              <>“গ্রোথ কোনো কাকতালীয় বিষয় নয়।”</>
            ) : (
              <>“Growth Isn’t Random.”</>
            )}
          </h2>

          {/* Subtitle */}
          <p className={`mt-3 text-base sm:text-xl font-normal text-blue-200/80 tracking-wide ${isBn ? "font-bangla-body" : ""}`}>
            {isBn ? "এটি সুপরিকল্পিত টেকনিক্যাল সিস্টেমের ফসল।" : "It’s built on systems."}
          </p>
        </motion.div>

        {/* ═══ The Radial Ecosystem Diagram (Image: Center "Your Business" + 4 Glass Modules) ═══ */}
        <div className="relative w-full max-w-[560px] sm:max-w-[620px] aspect-square flex items-center justify-center my-4">
          
          {/* Ambient Glowing Outer Orbit Rings */}
          <div className="absolute inset-4 sm:inset-6 rounded-full border border-blue-500/20 pointer-events-none shadow-[0_0_50px_rgba(30,100,240,0.15)]" />
          <div className="absolute inset-14 sm:inset-18 rounded-full border border-blue-400/25 pointer-events-none" />

          {/* ─── SVG Curved Energy Connection Tracks (Connecting Center to 4 Modules) ─── */}
          <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none" viewBox="0 0 600 600">
            <defs>
              <filter id="neon-blue-glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <linearGradient id="blueBeamGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#38BDF8" stopOpacity="0.9" />
                <stop offset="50%" stopColor="#2563EB" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#1D4ED8" stopOpacity="0.4" />
              </linearGradient>
            </defs>

            {/* Track 1: Center (300, 300) to Top-Left (150, 150) */}
            <path
              d="M 300 240 C 230 240 180 200 160 170"
              stroke="#38BDF8"
              strokeWidth="2.5"
              fill="none"
              filter="url(#neon-blue-glow)"
              opacity={activeModule === "website" ? "1" : "0.75"}
            />
            <path
              d="M 240 300 C 240 230 200 180 170 160"
              stroke="#38BDF8"
              strokeWidth="2.5"
              fill="none"
              filter="url(#neon-blue-glow)"
              opacity={activeModule === "website" ? "1" : "0.75"}
            />

            {/* Track 2: Center (300, 300) to Top-Right (450, 150) */}
            <path
              d="M 300 240 C 370 240 420 200 440 170"
              stroke="#38BDF8"
              strokeWidth="2.5"
              fill="none"
              filter="url(#neon-blue-glow)"
              opacity={activeModule === "google" ? "1" : "0.75"}
            />
            <path
              d="M 360 300 C 360 230 400 180 430 160"
              stroke="#38BDF8"
              strokeWidth="2.5"
              fill="none"
              filter="url(#neon-blue-glow)"
              opacity={activeModule === "google" ? "1" : "0.75"}
            />

            {/* Track 3: Center (300, 300) to Bottom-Left (150, 450) */}
            <path
              d="M 300 360 C 230 360 180 400 160 430"
              stroke="#38BDF8"
              strokeWidth="2.5"
              fill="none"
              filter="url(#neon-blue-glow)"
              opacity={activeModule === "ads" ? "1" : "0.75"}
            />
            <path
              d="M 240 300 C 240 370 200 420 170 440"
              stroke="#38BDF8"
              strokeWidth="2.5"
              fill="none"
              filter="url(#neon-blue-glow)"
              opacity={activeModule === "ads" ? "1" : "0.75"}
            />

            {/* Track 4: Center (300, 300) to Bottom-Right (450, 450) */}
            <path
              d="M 300 360 C 370 360 420 400 440 430"
              stroke="#38BDF8"
              strokeWidth="2.5"
              fill="none"
              filter="url(#neon-blue-glow)"
              opacity={activeModule === "whatsapp" ? "1" : "0.75"}
            />
            <path
              d="M 360 300 C 360 370 400 420 430 440"
              stroke="#38BDF8"
              strokeWidth="2.5"
              fill="none"
              filter="url(#neon-blue-glow)"
              opacity={activeModule === "whatsapp" ? "1" : "0.75"}
            />

            {/* Animated traveling data pulses */}
            <circle r="3" fill="#FFFFFF">
              <animateMotion
                path="M 300 240 C 230 240 180 200 160 170"
                dur="2.5s"
                repeatCount="indefinite"
              />
            </circle>
            <circle r="3" fill="#FFFFFF">
              <animateMotion
                path="M 300 240 C 370 240 420 200 440 170"
                dur="2.8s"
                repeatCount="indefinite"
              />
            </circle>
            <circle r="3" fill="#FFFFFF">
              <animateMotion
                path="M 300 360 C 230 360 180 400 160 430"
                dur="2.4s"
                repeatCount="indefinite"
              />
            </circle>
            <circle r="3" fill="#FFFFFF">
              <animateMotion
                path="M 300 360 C 370 360 420 400 440 430"
                dur="2.6s"
                repeatCount="indefinite"
              />
            </circle>
          </svg>

          {/* ─── Center Core: "Your Business" (Illuminated Multi-Ring Orb) ─── */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-30 flex items-center justify-center cursor-pointer group"
          >
            {/* Outer Blue Glow Halo */}
            <div className="absolute w-44 sm:w-56 h-44 sm:h-56 rounded-full bg-blue-500/25 blur-2xl group-hover:bg-blue-400/35 transition-all duration-500" />
            
            {/* Outer Glass Ring */}
            <div className="relative w-36 sm:w-44 h-36 sm:h-44 rounded-full p-2.5 sm:p-3 border-2 border-blue-400/40 shadow-[0_0_40px_rgba(59,130,246,0.5),inset_0_0_25px_rgba(59,130,246,0.3)] bg-gradient-to-b from-[#1E40AF]/40 to-[#0A1024]/80 backdrop-blur-xl flex items-center justify-center">
              
              {/* Inner Radiant Beveled Core */}
              <div className="w-full h-full rounded-full border border-blue-300/60 bg-gradient-to-b from-[#1D4ED8] via-[#0F172A] to-[#020617] flex flex-col items-center justify-center text-center p-3 shadow-inner group-hover:scale-105 transition-transform duration-300">
                <span className={`text-base sm:text-xl font-black text-white tracking-tight leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)] ${isBn ? "font-bangla-display" : "font-display"}`}>
                  {isBn ? "আপনার ব্যবসা" : "Your Business"}
                </span>
                <span className="text-[9px] sm:text-[10px] font-mono text-blue-300 tracking-wider mt-1 uppercase">
                  {isBn ? "গ্রোথ ইঞ্জিন" : "Core Engine"}
                </span>
              </div>
            </div>
          </motion.div>

          {/* ─── 4 Satellite Glassmorphic Modules (Website, Google, Ads, WhatsApp) ─── */}
          
          {/* 1. Top-Left: Website */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: -30 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            onMouseEnter={() => setActiveModule("website")}
            onMouseLeave={() => setActiveModule(null)}
            className="absolute top-2 sm:top-6 left-2 sm:left-6 z-30"
          >
            <div className={`w-28 sm:w-36 h-28 sm:h-36 rounded-2xl sm:rounded-3xl p-3 sm:p-4 flex flex-col items-center justify-center text-center transition-all duration-300 cursor-pointer ${
              activeModule === "website"
                ? "bg-blue-950/80 border-2 border-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.6)] scale-105"
                : "bg-[#0A1024]/85 border border-white/[0.12] hover:border-blue-400/60 shadow-[0_15px_35px_rgba(0,0,0,0.8)] hover:scale-105"
            } backdrop-blur-xl`}>
              <div className="w-9 sm:w-11 h-9 sm:h-11 rounded-xl bg-blue-500/15 border border-blue-400/30 flex items-center justify-center mb-2 shadow-[0_0_12px_rgba(59,130,246,0.3)]">
                <Monitor className="w-5 sm:w-6 h-5 sm:h-6 text-blue-400" />
              </div>
              <span className={`text-xs sm:text-sm font-bold text-white tracking-wide ${isBn ? "font-bangla-ui" : "font-display"}`}>
                {modules[0].title}
              </span>
            </div>
          </motion.div>

          {/* 2. Top-Right: Google */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: -30 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            onMouseEnter={() => setActiveModule("google")}
            onMouseLeave={() => setActiveModule(null)}
            className="absolute top-2 sm:top-6 right-2 sm:right-6 z-30"
          >
            <div className={`w-28 sm:w-36 h-28 sm:h-36 rounded-2xl sm:rounded-3xl p-3 sm:p-4 flex flex-col items-center justify-center text-center transition-all duration-300 cursor-pointer ${
              activeModule === "google"
                ? "bg-blue-950/80 border-2 border-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.6)] scale-105"
                : "bg-[#0A1024]/85 border border-white/[0.12] hover:border-blue-400/60 shadow-[0_15px_35px_rgba(0,0,0,0.8)] hover:scale-105"
            } backdrop-blur-xl`}>
              <div className="w-9 sm:w-11 h-9 sm:h-11 rounded-xl bg-blue-500/15 border border-blue-400/30 flex items-center justify-center mb-2 shadow-[0_0_12px_rgba(59,130,246,0.3)]">
                <Search className="w-5 sm:w-6 h-5 sm:h-6 text-blue-400" />
              </div>
              <span className={`text-xs sm:text-sm font-bold text-white tracking-wide ${isBn ? "font-bangla-ui" : "font-display"}`}>
                {modules[1].title}
              </span>
            </div>
          </motion.div>

          {/* 3. Bottom-Left: Ads */}
          <motion.div
            initial={{ opacity: 0, x: -30, y: 30 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            onMouseEnter={() => setActiveModule("ads")}
            onMouseLeave={() => setActiveModule(null)}
            className="absolute bottom-2 sm:bottom-6 left-2 sm:left-6 z-30"
          >
            <div className={`w-28 sm:w-36 h-28 sm:h-36 rounded-2xl sm:rounded-3xl p-3 sm:p-4 flex flex-col items-center justify-center text-center transition-all duration-300 cursor-pointer ${
              activeModule === "ads"
                ? "bg-blue-950/80 border-2 border-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.6)] scale-105"
                : "bg-[#0A1024]/85 border border-white/[0.12] hover:border-blue-400/60 shadow-[0_15px_35px_rgba(0,0,0,0.8)] hover:scale-105"
            } backdrop-blur-xl`}>
              <div className="w-9 sm:w-11 h-9 sm:h-11 rounded-xl bg-blue-500/15 border border-blue-400/30 flex items-center justify-center mb-2 shadow-[0_0_12px_rgba(59,130,246,0.3)]">
                <TrendingUp className="w-5 sm:w-6 h-5 sm:h-6 text-blue-400" />
              </div>
              <span className={`text-xs sm:text-sm font-bold text-white tracking-wide ${isBn ? "font-bangla-ui" : "font-display"}`}>
                {modules[2].title}
              </span>
            </div>
          </motion.div>

          {/* 4. Bottom-Right: WhatsApp */}
          <motion.div
            initial={{ opacity: 0, x: 30, y: 30 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.25 }}
            onMouseEnter={() => setActiveModule("whatsapp")}
            onMouseLeave={() => setActiveModule(null)}
            className="absolute bottom-2 sm:bottom-6 right-2 sm:right-6 z-30"
          >
            <div className={`w-28 sm:w-36 h-28 sm:h-36 rounded-2xl sm:rounded-3xl p-3 sm:p-4 flex flex-col items-center justify-center text-center transition-all duration-300 cursor-pointer ${
              activeModule === "whatsapp"
                ? "bg-blue-950/80 border-2 border-blue-400 shadow-[0_0_30px_rgba(59,130,246,0.6)] scale-105"
                : "bg-[#0A1024]/85 border border-white/[0.12] hover:border-blue-400/60 shadow-[0_15px_35px_rgba(0,0,0,0.8)] hover:scale-105"
            } backdrop-blur-xl`}>
              <div className="w-9 sm:w-11 h-9 sm:h-11 rounded-xl bg-blue-500/15 border border-blue-400/30 flex items-center justify-center mb-2 shadow-[0_0_12px_rgba(59,130,246,0.3)]">
                <MessageCircle className="w-5 sm:w-6 h-5 sm:h-6 text-blue-400" />
              </div>
              <span className={`text-xs sm:text-sm font-bold text-white tracking-wide ${isBn ? "font-bangla-ui" : "font-display"}`}>
                {modules[3].title}
              </span>
            </div>
          </motion.div>

          {/* ─── 3 Floating Analytics Widgets (Matching Reference Diagram Details) ─── */}

          {/* Left Mini Widget: Circular Progress Donut */}
          <div className="hidden sm:flex absolute left-[-16px] top-1/2 -translate-y-1/2 z-20 flex-col items-center">
            <div className="p-2 sm:p-2.5 rounded-xl bg-[#0A1024]/90 border border-blue-400/20 backdrop-blur-md shadow-lg flex items-center gap-2">
              <div className="w-5 h-5 rounded-full border-2 border-blue-400 border-t-transparent animate-spin" style={{ animationDuration: "6s" }} />
              <div className="space-y-0.5">
                <div className="w-6 h-1 rounded-full bg-blue-400/60" />
                <div className="w-4 h-1 rounded-full bg-blue-400/30" />
              </div>
            </div>
          </div>

          {/* Right Mini Widget: Frosted Bar Chart Card */}
          <div className="hidden sm:flex absolute right-[-16px] top-1/2 -translate-y-1/2 z-20 flex-col items-center">
            <div className="p-2 sm:p-2.5 rounded-xl bg-[#0A1024]/90 border border-blue-400/20 backdrop-blur-md shadow-lg flex items-end gap-1.5 h-10 w-12 justify-center pb-1">
              <div className="w-1.5 h-3 bg-blue-400/40 rounded-sm" />
              <div className="w-1.5 h-5 bg-blue-400/70 rounded-sm" />
              <div className="w-1.5 h-7 bg-blue-400 rounded-sm shadow-[0_0_6px_#60A5FA]" />
            </div>
          </div>

          {/* Bottom Center Mini Widget: Glowing Line Chart Card */}
          <div className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 z-20">
            <div className="px-3 py-1.5 rounded-xl bg-[#0A1024]/90 border border-blue-400/20 backdrop-blur-md shadow-lg flex items-center gap-2">
              <Activity className="w-4 h-4 text-blue-400" />
              <span className="text-[10px] font-mono text-blue-300 font-bold">LIVE SYNC</span>
            </div>
          </div>

        </div>

        {/* ─── Active Hover Description Card ─── */}
        <div className="h-14 sm:h-16 flex items-center justify-center mt-4 text-center max-w-lg px-4">
          <AnimatePresence mode="wait">
            {activeModule ? (
              <motion.div
                key={activeModule}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="text-xs sm:text-sm text-blue-200/90 font-medium"
              >
                <span className="text-white font-bold mr-1.5">
                  {modules.find(m => m.id === activeModule)?.subtitle}:
                </span>
                {modules.find(m => m.id === activeModule)?.description}
              </motion.div>
            ) : (
              <motion.div
                key="default"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-xs text-neutral-400 font-mono flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
                <span>
                  {isBn 
                    ? "সিস্টেমের উপাদানগুলো দেখতে যেকোনো কার্ডে হোভার করুন" 
                    : "Hover over any module to see how it integrates with your business"}
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* ─── Bottom Contact Line (Image: WhatsApp: +91... | Website: ...) ─── */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full max-w-2xl mt-8 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-neutral-400 font-mono"
        >
          {/* WhatsApp Direct */}
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-blue-400 transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-blue-400" />
            <span>WhatsApp: {contactPhone}</span>
          </a>

          <div className="hidden sm:block h-3 w-px bg-white/10" />

          {/* Website Link */}
          <a
            href="https://webzenbd.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-blue-400 transition-colors"
          >
            <span>Website: webzenbd.com</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-blue-400" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
