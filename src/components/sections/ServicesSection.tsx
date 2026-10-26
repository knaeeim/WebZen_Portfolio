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
  Lock,
  Activity,
  ShoppingBag,
  Sparkles,
  Check
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useSite } from "@/context/SiteContext";
import { translations } from "@/data/translations";

export function ServicesSection() {
  const { language } = useLanguage();
  const { data } = useSite();
  const isBn = language === "bn";
  const tServices = translations[language].services;

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
      annotationTitle: isBn ? "হেলথটেক ও ডক্টর সিরিয়াল" : "HealthTech & Clinic Architecture",
      annotationDesc: isBn 
        ? "ডাক্তার ও ক্লিনিকের ৩ ধাপে অনলাইন সিরিয়াল বুকিং, চেম্বার শিডিউলিং ও ডিজিটাল প্রেসক্রিপশন।" 
        : "Multi-chamber clinic scheduling, 3-step doctor serial booking, and digital prescription history.",
      icon: Activity,
      cardTitle: isBn ? "হেলথটেক ও ডক্টর সিরিয়াল পোর্টাল" : "HealthTech & Doctor Portals",
      cardDomain: "webzen.bd/healthtech-portal",
      status: isBn ? "স্পেশালাইজড সিস্টেম" : "Specialized System",
      statusColor: "emerald",
      badgeText: "SPECIALIZED",
      tags: isBn 
        ? ["৩ ধাপে ডক্টর সিরিয়াল", "চেম্বার শিডিউলিং", "অটো এসএমএস"] 
        : ["Doctor Serial Booking", "Chamber Scheduling", "SMS Gateway"]
    },
    {
      step: "02",
      numberText: "02 •",
      side: "right",
      annotationTitle: isBn ? "ই-কমার্স ও পেমেন্ট অটোমেশন" : "High-Conversion E-Commerce",
      annotationDesc: isBn 
        ? "বিকাশ, নগদ ও কার্ড ইনস্ট্যান্ট পেমেন্ট গেটওয়ে, অটোমেটিক ক্যাশ মেমো ও রিয়েল-টাইম স্টক।" 
        : "Automated bKash & Nagad payments, instant customer invoices, and real-time inventory.",
      icon: ShoppingBag,
      cardTitle: isBn ? "ই-কমার্স ও অনলাইন শপ" : "High-Conversion E-Commerce",
      cardDomain: "webzen.bd/ecommerce-engine",
      status: isBn ? "অটোমেটেড পেমেন্ট" : "Live Checkout",
      statusColor: "emerald",
      badgeText: "BKASH / NAGAD",
      tags: isBn 
        ? ["বিকাশ ও নগদ গেটওয়ে", "অটোমেটেড ইনভয়েস", "স্টক ম্যানেজমেন্ট"] 
        : ["bKash & Nagad API", "Instant Invoicing", "Inventory Sync"]
    },
    {
      step: "03",
      numberText: "03 •",
      side: "left",
      annotationTitle: isBn ? "লিনাক্স ক্লাউড ও VPS সেটআপ" : "Production VPS Infrastructure",
      annotationDesc: isBn 
        ? "উবুন্টু লিনাক্স VPS, Nginx রিভার্স প্রক্সি, অটো-রিনিউ SSL, PM2 ও ১-ক্লিকে GitHub Actions CI/CD।" 
        : "Robust Ubuntu VPS setup, Nginx reverse proxy, free SSL, PM2 daemon, and automated CI/CD.",
      icon: Server,
      cardTitle: isBn ? "প্রোডাকশন VPS ডেপ্লয়মেন্ট" : "Production VPS Deployment",
      cardDomain: "webzen.bd/vps-deployment",
      status: isBn ? "জিরো-ডাউনটাইম" : "Zero-Downtime",
      statusColor: "emerald",
      badgeText: "LINUX / NGINX",
      tags: isBn 
        ? ["উবুন্টু লিনাক্স VPS", "Nginx রিভার্স প্রক্সি", "ডকার ও SSL"] 
        : ["Ubuntu Linux VPS", "Nginx Reverse Proxy", "Docker & SSL"]
    },
    {
      step: "04",
      numberText: "04 •",
      side: "right",
      annotationTitle: isBn ? "সার্বক্ষণিক সাইট কেয়ার ও ব্যাকআপ" : "Continuous Site Care & SLAs",
      annotationDesc: isBn 
        ? "সার্ভার ডাউন হওয়া বা ডাটা হারানোর ভয় নেই। ২৪/৭ আপটাইম মনিটরিং ও নিয়মিত ক্লাউড ব্যাকআপ।" 
        : "Complete peace of mind with 24/7 uptime monitoring, daily offsite backups, and priority support.",
      icon: ShieldCheck,
      cardTitle: isBn ? "ওয়েবসাইট ম্যানেজমেন্ট ও কেয়ার" : "24/7 Website Management",
      cardDomain: "webzen.bd/site-care",
      status: isBn ? "সার্বক্ষণিক সচল" : "Protected & Active",
      statusColor: "emerald",
      badgeText: "24/7 MONITORING",
      tags: isBn 
        ? ["২৪/৭ আপটাইম মনিটরিং", "প্রতিদিনের ক্লাউড ব্যাকআপ", "বাগ ফিক্সিং সাপোর্ট"] 
        : ["24/7 Uptime SLAs", "Daily Cloud Backups", "Bug Fixes Included"]
    }
  ];

  const getServiceIcon = (id: string) => {
    switch (id) {
      case "srv-healthtech":
        return Activity;
      case "srv-ecommerce":
        return ShoppingBag;
      case "srv-vps":
        return Server;
      case "srv-management":
        return ShieldCheck;
      case "srv-fullstack":
        return CodeXml;
      case "srv-uiux":
        return Palette;
      default:
        return Globe;
    }
  };

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
        
        {/* ═══ Header Area ═══ */}
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
              <span>{isBn ? "স্পেশালাইজড আর্কিটেকচার ও ক্লাউড ইঞ্জিনিয়ারিং" : "SPECIALIZED ARCHITECTURE & CLOUD"}</span>
            </div>

            {/* Massive Bold Headline */}
            <h2 className={`text-4xl sm:text-5xl lg:text-[3.5rem] text-white font-black tracking-tight leading-[1.18] sm:leading-[1.15] pb-1 ${isBn ? "font-bangla-display" : "font-display"}`}>
              {isBn ? (
                <>
                  স্পেশালাইজড ইন <br className="hidden sm:inline" />
                  <span className="text-gradient-hero">হেলথটেক ও ই-কমার্স</span>
                </>
              ) : (
                <>
                  Specialized in <br className="hidden sm:inline" />
                  <span className="text-gradient-hero">HealthTech & E-Commerce</span>
                </>
              )}
            </h2>

            {/* Subhead */}
            <p className={`mt-4 text-sm sm:text-base text-neutral-400 font-normal leading-relaxed ${isBn ? "font-bangla-body" : ""}`}>
              {isBn
                ? "হেলথটেক ডক্টর বুকিং পোর্টাল ও ই-কমার্স প্ল্যাটফর্ম থেকে শুরু করে লিনাক্স VPS ডেপ্লয়মেন্ট ও সার্বক্ষণিক ওয়েবসাইট ম্যানেজমেন্ট—আপনার ব্যবসার প্রতিটি ডিজিটাল প্রয়োজনের পূর্ণাঙ্গ সমাধান।"
                : "From bespoke HealthTech doctor booking portals and high-converting e-commerce engines to production VPS cloud deployment and 24/7 continuous website management."}
            </p>
          </motion.div>

          {/* Right Column: Top Status Glass Card */}
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
                  <Activity className="w-5 h-5 text-[#FF6A00]" />
                </div>
                <div>
                  <div className="text-sm font-bold text-white font-mono">webzen.bd</div>
                  <div className="text-[11px] text-neutral-400 font-medium">
                    {isBn ? "হেলথটেক, ই-কমার্স ও ক্লাউড" : "HealthTech, E-Commerce & Cloud"}
                  </div>
                </div>
              </div>

              {/* 4 Checklist Items with Orange Checkmarks */}
              <div className="pt-4 space-y-2.5">
                {[
                  isBn ? "ডক্টর সিরিয়াল ও চেম্বার শিডিউলিং" : "Doctor Serial & Chamber Booking",
                  isBn ? "বিকাশ ও নগদ অটোমেটেড পেমেন্ট" : "Automated bKash & Nagad Gateways",
                  isBn ? "উবুন্টু লিনাক্স VPS ও Nginx সেটআপ" : "Production Ubuntu VPS & Nginx Setup",
                  isBn ? "২৪/৭ মনিটরিং ও ডেইলি ব্যাকআপ" : "24/7 Monitoring & Cloud Backups"
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
          
          {/* Step 01: HealthTech (Left Note, Center Card) */}
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
                      <Activity className="w-6 h-6 text-[#FF6A00]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-base font-bold text-white tracking-wide truncate">
                          {steps[0].cardTitle}
                        </h4>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#FF3823]/15 text-[#FF3823] border border-[#FF3823]/30 font-bold">
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

            {/* Glowing S-Curve Wire */}
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

          {/* Step 02: E-Commerce (Center Card, Right Note) */}
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
                      <ShoppingBag className="w-6 h-6 text-[#FF6A00]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-base font-bold text-white tracking-wide truncate">
                          {steps[1].cardTitle}
                        </h4>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#FF6A00]/15 text-[#FF6A00] border border-[#FF6A00]/30 font-bold">
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

            {/* Glowing S-Curve Wire */}
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

          {/* Step 03: VPS Deployment (Left Note, Center Card) */}
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
                      <Server className="w-6 h-6 text-[#FF6A00]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-base font-bold text-white tracking-wide truncate">
                          {steps[2].cardTitle}
                        </h4>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.04] text-neutral-400 border border-white/10 font-bold">
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

            {/* Glowing S-Curve Wire */}
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

          {/* Step 04: Website Management (Center Card, Right Note) */}
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
                      <ShieldCheck className="w-6 h-6 text-[#FF6A00]" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-base font-bold text-white tracking-wide truncate">
                          {steps[3].cardTitle}
                        </h4>
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/[0.04] text-neutral-400 border border-white/10 font-bold">
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
              {isBn ? "আপনার লাইভ ওয়েব প্ল্যাটফর্ম" : "Your Live Web Platform"}
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
                  className="pill-btn-primary pl-6 pr-2.5 py-2.5 text-xs font-bold tracking-wider uppercase flex items-center gap-3 shadow-[0_10px_30px_rgba(255,56,35,0.45)] cursor-pointer"
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

        {/* ═══ All Core Services Catalog Grid (Specialized in HealthTech & E-Commerce, VPS, Management) ═══ */}
        <div className="mt-20 sm:mt-28">
          
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-[11px] font-mono font-bold tracking-[0.2em] text-[#FF6A00] uppercase bg-[#FF6A00]/10 border border-[#FF6A00]/25 mb-3 shadow-[0_0_12px_rgba(255,106,0,0.2)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] shadow-[0_0_6px_#FF6A00]" />
              <span>{isBn ? "আমাদের পূর্ণাঙ্গ সেবাসমূহ" : "CORE ENGINEERING SOLUTIONS"}</span>
            </div>

            <h3 className={`text-2xl sm:text-4xl font-black text-white tracking-tight ${isBn ? "font-bangla-display" : "font-display"}`}>
              {isBn ? (
                <>
                  যেসব সার্ভিসে আমরা <span className="text-gradient-hero">বিশেষজ্ঞ</span>
                </>
              ) : (
                <>
                  Specialized Solutions We <span className="text-gradient-hero">Engineer</span>
                </>
              )}
            </h3>

            <p className={`mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed ${isBn ? "font-bangla-body" : ""}`}>
              {isBn 
                ? "হেলথটেক ও ই-কমার্স স্পেশালাইজেশন থেকে শুরু করে লিনাক্স VPS ডেপ্লয়মেন্ট ও সার্বক্ষণিক সাইট কেয়ার—আপনার ডিজিটাল যাত্রার প্রতিটি পদক্ষেপে আমাদের পূর্ণাঙ্গ প্রযুক্তি সেবা।"
                : "From specialized HealthTech portals and automated E-Commerce to production Linux VPS deployment and continuous 24/7 technical management."}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {tServices.items.map((item) => {
              const IconComp = getServiceIcon(item.id);
              const isSpecialized = item.id === "srv-healthtech" || item.id === "srv-ecommerce";
              const isInfrastructure = item.id === "srv-vps" || item.id === "srv-management";

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.6 }}
                  whileHover={{ y: -6 }}
                  className={`glass-radiant rounded-[28px] p-6 sm:p-7 border transition-all duration-300 flex flex-col justify-between group shadow-[0_16px_36px_rgba(0,0,0,0.6)] ${
                    isSpecialized 
                      ? "border-[#FF3823]/35 hover:border-[#FF3823]/60 hover:shadow-[0_20px_45px_rgba(255,56,35,0.2)]" 
                      : isInfrastructure
                      ? "border-[#FF6A00]/30 hover:border-[#FF6A00]/60 hover:shadow-[0_20px_45px_rgba(255,106,0,0.2)]"
                      : "border-white/[0.08] hover:border-white/25"
                  }`}
                >
                  <div>
                    {/* Top Header: Icon + Category Badge */}
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 border ${
                        isSpecialized
                          ? "bg-[#FF3823]/15 border-[#FF3823]/35 text-[#FF3823] shadow-[0_0_15px_rgba(255,56,35,0.3)]"
                          : isInfrastructure
                          ? "bg-[#FF6A00]/15 border-[#FF6A00]/35 text-[#FF6A00] shadow-[0_0_15px_rgba(255,106,0,0.3)]"
                          : "bg-white/[0.04] border-white/10 text-white"
                      }`}>
                        <IconComp className="w-6 h-6" />
                      </div>

                      {isSpecialized ? (
                        <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#FF3823]/15 border border-[#FF3823]/40 text-[#FF3823] shadow-[0_0_12px_rgba(255,56,35,0.25)] flex items-center gap-1.5 font-mono">
                          <Sparkles className="w-3 h-3" />
                          <span>{isBn ? "স্পেশালাইজড" : "SPECIALIZED"}</span>
                        </span>
                      ) : isInfrastructure ? (
                        <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#FF6A00]/15 border border-[#FF6A00]/40 text-[#FF6A00] font-mono">
                          <span>{isBn ? "ক্লাউড ও কেয়ার" : "INFRASTRUCTURE"}</span>
                        </span>
                      ) : (
                        <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/[0.04] border border-white/10 text-neutral-400 font-mono">
                          <span>{isBn ? "কোর সল্যুশন" : "ENGINEERING"}</span>
                        </span>
                      )}
                    </div>

                    {/* Title & Subtitle */}
                    <h4 className={`text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-[#FF3823] transition-colors ${
                      isBn ? "font-bangla-display" : "font-display"
                    }`}>
                      {item.title}
                    </h4>
                    <p className="text-xs text-[#FFA000] font-semibold mt-1">
                      {item.subtitle}
                    </p>

                    {/* Description */}
                    <p className={`mt-3 text-xs sm:text-sm text-neutral-400 leading-relaxed font-normal ${
                      isBn ? "font-bangla-body" : ""
                    }`}>
                      {item.description}
                    </p>

                    {/* Deliverables Checklist */}
                    <div className="mt-5 pt-4 border-t border-white/[0.06] space-y-2">
                      <div className="text-[11px] font-mono uppercase font-bold text-neutral-400 tracking-wider mb-2">
                        {isBn ? "যা যা অন্তর্ভুক্ত:" : "Key Deliverables:"}
                      </div>
                      {item.deliverables.map((deliv, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-xs text-neutral-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#FF6A00] shrink-0 mt-0.5" />
                          <span className={isBn ? "font-bangla-body leading-snug" : "leading-snug"}>{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom: Tags & Action Button */}
                  <div className="mt-6 pt-4 border-t border-white/[0.06]">
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {item.tags.map((tag, tIdx) => (
                        <span 
                          key={tIdx} 
                          className="px-2 py-0.5 rounded-md text-[10px] font-mono bg-white/[0.03] text-neutral-400 border border-white/[0.07]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a 
                      href="#contact" 
                      onClick={(e) => handleSmoothScroll(e, "#contact")}
                      className="inline-flex items-center justify-between w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-white/[0.03] hover:bg-[#FF3823] border border-white/[0.08] hover:border-[#FF3823] transition-all group/btn shadow-sm"
                    >
                      <span>{isBn ? "এই বিষয়ে আলাপ করুন" : "Discuss Project"}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </a>
                  </div>

                </motion.div>
              );
            })}
          </div>

        </div>

        {/* ═══ Bottom Feature Tray: 4 Pillars (Secure, Fast, VPS Cloud, 24/7 Managed) ═══ */}
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
                  {isBn ? "সর্বোচ্চ নিরাপত্তা" : "Secure Infrastructure"}
                </span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                {isBn 
                  ? "এন্ড-টু-এন্ড এনক্রিপশন ও সংরক্ষিত API এন্ডপয়েন্ট আপনার ব্যবহারকারী ও লেনদেনের ডেটা নিরাপদ রাখে।" 
                  : "End-to-end encryption protects your users, medical records, transactions, and enterprise data."}
              </p>
            </div>

            {/* Pillar 2: Fast */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2.5 mb-2">
                <Zap className="w-5 h-5 text-[#FF6A00]" />
                <span className="text-sm font-bold text-white tracking-wide">
                  {isBn ? "সাব-সেকেন্ড স্পিড" : "Sub-Second Speed"}
                </span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                {isBn 
                  ? "Next.js এজ রাউটিং ও অপ্টিমাইজড ক্যাশিং নিশ্চিত করে মিলি-সেকেন্ডে পেজ লোড ও নির্বিঘ্ন বুকিং।" 
                  : "Optimized DNS routing and edge caching ensure quick, sub-second global delivery."}
              </p>
            </div>

            {/* Pillar 3: VPS Cloud */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2.5 mb-2">
                <Server className="w-5 h-5 text-[#FF6A00]" />
                <span className="text-sm font-bold text-white tracking-wide">
                  {isBn ? "লিনাক্স VPS ক্লাউড" : "Production VPS & Cloud"}
                </span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                {isBn 
                  ? "উবুন্টু VPS, Nginx ও ডকার ক্লাস্টারে ডেপ্লয়মেন্ট দিয়ে ৯৯.৯% নিরবচ্ছিন্ন আপটাইম গ্যারান্টি।" 
                  : "Dedicated Ubuntu VPS, Nginx reverse proxy, and Docker environments for 99.9% uptime."}
              </p>
            </div>

            {/* Pillar 4: 24/7 Managed */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2.5 mb-2">
                <TrendingUp className="w-5 h-5 text-[#FF6A00]" />
                <span className="text-sm font-bold text-white tracking-wide">
                  {isBn ? "২৪/৭ সাইট ম্যানেজমেন্ট" : "24/7 Site Management"}
                </span>
              </div>
              <p className="text-xs text-neutral-400 leading-relaxed font-normal">
                {isBn 
                  ? "প্রতিদিনের ক্লাউড ব্যাকআপ, নিয়মিত কনটেন্ট আপডেট ও সরাসরি সিনিয়র ইঞ্জিনিয়ারদের টেক সাপোর্ট।" 
                  : "Automated daily cloud backups, regular content updates, and direct senior engineer support."}
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
