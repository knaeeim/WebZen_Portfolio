"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { motion } from "framer-motion";
import { 
  ArrowRight, 
  Code2, 
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const smoothTransition = { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const };

export function HeroSection() {
  const { language } = useLanguage();
  const t = translations[language].hero;

  const quickStats = [
    { value: "99.4%", label: t.statsRetention },
    { value: "140+", label: t.statsShipped },
    { value: "99.99%", label: t.statsUptime },
  ];

  const highlightPills = language === "bn"
    ? ["হেলথটেক ও বুকিং", "অনলাইন শপ (ই-কমার্স)", "কাস্টম ওয়েবসাইট", "বিকাশ ও নগদ গেটওয়ে", "মোবাইল অ্যাপস", "AI অটোমেশন"]
    : ["HealthTech & Booking", "E-Commerce Stores", "Custom Websites", "bKash / Nagad Gateways", "Mobile Apps", "AI Automations"];

  return (
    <section className="relative min-h-[auto] sm:min-h-[88vh] pt-24 xs:pt-28 sm:pt-32 pb-10 sm:pb-16 flex items-center justify-center overflow-hidden">
      {/* Ambient background glows matching logo palette (Sky Blue to Teal) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] sm:w-[580px] h-[220px] sm:h-[340px] bg-gradient-to-tr from-[#0284c7]/25 via-[#009fe3]/18 to-[#00b4b8]/22 blur-[90px] sm:blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-4 sm:right-10 w-[180px] sm:w-[280px] h-[180px] sm:h-[280px] bg-[#00b4b8]/15 blur-[70px] sm:blur-[100px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8 text-center z-10 w-full">
        
        {/* Animated Badge (Mobile-optimized wrapping & sizing) */}
        <motion.div
          initial={{ opacity: 0, y: -15, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={smoothTransition}
          className="inline-flex flex-wrap sm:flex-nowrap items-center justify-center gap-1.5 sm:gap-2 px-3 py-1.5 sm:px-3.5 rounded-full bg-white/[0.04] border border-cyan-500/30 backdrop-blur-xl mb-4 sm:mb-6 group hover:border-cyan-400/60 transition-all cursor-default shadow-lg shadow-cyan-500/5 max-w-full"
        >
          <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping shrink-0" />
          <span className="text-[11px] sm:text-xs font-semibold text-slate-200">
            {t.badge}
          </span>
          <span className="text-[10px] sm:text-xs font-bold px-2 py-0.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border border-cyan-500/30 shrink-0">
            {t.badgeHighlight}
          </span>
        </motion.div>

        {/* Main Title (Fluid responsive typography, natural wrapping) */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...smoothTransition, delay: 0.1 }}
          className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white max-w-4xl mx-auto leading-[1.3] sm:leading-[1.22] tracking-normal pb-2 px-1 text-balance"
        >
          <span>{t.titlePart1}</span>{" "}
          <span className="text-gradient-cyan drop-shadow-sm inline-block py-0.5">
            {t.titleGradient}
          </span>
          {t.titlePart2 ? (
            <>
              {" "}
              <br className="hidden sm:inline" />
              <span className="text-slate-100 inline-block mt-1 sm:mt-0">{t.titlePart2}</span>
            </>
          ) : null}
        </motion.h1>

        {/* Subtitle / Description */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...smoothTransition, delay: 0.18 }}
          className="mt-3.5 sm:mt-5 text-sm sm:text-base md:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal px-2 sm:px-0"
        >
          {t.description}
        </motion.p>

        {/* Action CTAs: Full-width primary + 2 equal secondary buttons on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...smoothTransition, delay: 0.25 }}
          className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3.5 w-full max-w-md sm:max-w-none mx-auto px-1 sm:px-0"
        >
          {/* Primary Action Button */}
          <a href="#contact" className="w-full sm:w-auto">
            <Button
              size="lg"
              className="w-full sm:w-auto bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold px-7 h-11 text-xs rounded-xl shadow-xl shadow-cyan-500/25 group transition-all"
            >
              <span>{t.primaryCta}</span>
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>

          {/* Secondary Action Buttons */}
          <div className="grid grid-cols-2 sm:flex items-center gap-2 sm:gap-3.5 w-full sm:w-auto">
            <a href="#projects" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-white/[0.04] hover:bg-white/[0.08] border-white/15 text-slate-200 font-semibold px-3 sm:px-6 h-11 text-xs rounded-xl backdrop-blur-md transition-all group"
              >
                <Code2 className="w-3.5 h-3.5 mr-1.5 text-cyan-400 group-hover:rotate-12 transition-transform shrink-0" />
                <span className="truncate">{t.secondaryCta}</span>
              </Button>
            </a>

            <a href="#calculator" className="w-full sm:w-auto">
              <Button
                size="lg"
                variant="ghost"
                className="w-full sm:w-auto bg-white/[0.03] sm:bg-transparent border border-white/10 sm:border-transparent text-slate-300 hover:text-white hover:bg-white/[0.05] h-11 px-3 sm:px-4 text-xs rounded-xl"
              >
                <Zap className="w-3.5 h-3.5 mr-1.5 text-amber-400 shrink-0" />
                <span className="truncate">{t.calculatorCta}</span>
              </Button>
            </a>
          </div>
        </motion.div>

        {/* Highlight Value Pills: Clean flex-wrap grid on mobile, no cut-off overflow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ...smoothTransition, delay: 0.35 }}
          className="mt-8 sm:mt-12 pt-5 sm:pt-6 border-t border-white/[0.08] max-w-5xl sm:max-w-6xl w-full mx-auto"
        >
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 px-1">
            {highlightPills.map((pill) => (
              <span
                key={pill}
                className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.08] text-[11px] sm:text-xs font-medium text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors cursor-default whitespace-nowrap"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80 shrink-0" />
                {pill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Floating Metrics Bar: 3 compact columns side-by-side on mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...smoothTransition, delay: 0.45 }}
          className="mt-6 sm:mt-8 grid grid-cols-3 gap-2 sm:gap-3.5 max-w-2xl mx-auto"
        >
          {quickStats.map((item, idx) => (
            <div
              key={idx}
              className="glass-card rounded-xl sm:rounded-2xl p-2.5 sm:p-3.5 text-center border border-white/10 flex flex-col justify-center"
            >
              <div className="text-lg xs:text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                <span className="text-gradient-cyan">{item.value}</span>
              </div>
              <div className="text-[10px] sm:text-xs text-slate-400 mt-0.5 font-medium leading-tight line-clamp-1">
                {item.label}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
