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
    ? ["হেলথটেক ও সিরিয়াল বুকিং", "অনলাইন শপ (ই-কমার্স)", "কাস্টম ওয়েবসাইট", "বিকাশ ও নগদ গেটওয়ে", "মোবাইল অ্যাপস", "স্মার্ট AI চ্যাটবট"]
    : ["HealthTech & Booking", "E-Commerce Stores", "Custom Websites", "bKash / Nagad Gateways", "Mobile Apps", "AI Automations"];

  return (
    <section className="relative min-h-[88vh] pt-32 pb-16 flex items-center justify-center overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[320px] bg-gradient-to-tr from-cyan-500/20 via-blue-600/15 to-purple-600/20 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[260px] h-[260px] bg-purple-600/10 blur-[90px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, y: -15, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={smoothTransition}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-cyan-500/30 backdrop-blur-xl mb-6 group hover:border-cyan-400/60 transition-all cursor-default shadow-lg shadow-cyan-500/5"
        >
          <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
          <span className="text-xs font-semibold text-slate-200">
            {t.badge}
          </span>
          <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-300 border border-cyan-500/30">
            {t.badgeHighlight}
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...smoothTransition, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white max-w-4xl mx-auto leading-[1.32] sm:leading-[1.26] tracking-normal pb-3"
        >
          <span className="inline-block">{t.titlePart1}</span>{" "}
          <span className="text-gradient-cyan drop-shadow-sm inline-block mx-1.5 sm:mx-2 py-0.5">
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

        {/* Subtitle / Description (Customer-Friendly, Clear Value) */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...smoothTransition, delay: 0.18 }}
          className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-normal"
        >
          {t.description}
        </motion.p>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...smoothTransition, delay: 0.25 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3.5"
        >
          <a href="#contact">
            <Button
              size="lg"
              className="bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:to-indigo-500 text-slate-950 font-bold px-7 h-11 text-xs rounded-xl shadow-xl shadow-cyan-500/25 group transition-all transform hover:scale-[1.02]"
            >
              <span>{t.primaryCta}</span>
              <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1" />
            </Button>
          </a>

          <a href="#projects">
            <Button
              size="lg"
              variant="outline"
              className="bg-white/[0.04] hover:bg-white/[0.08] border-white/15 text-slate-200 font-semibold px-6 h-11 text-xs rounded-xl backdrop-blur-md transition-all group"
            >
              <Code2 className="w-4 h-4 mr-1.5 text-cyan-400 group-hover:rotate-12 transition-transform" />
              <span>{t.secondaryCta}</span>
            </Button>
          </a>

          <a href="#calculator">
            <Button
              size="lg"
              variant="ghost"
              className="text-slate-300 hover:text-white hover:bg-white/[0.05] h-11 px-4 text-xs rounded-xl"
            >
              <Zap className="w-4 h-4 mr-1.5 text-amber-400" />
              <span>{t.calculatorCta}</span>
            </Button>
          </a>
        </motion.div>

        {/* Highlight Value Pills */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ ...smoothTransition, delay: 0.35 }}
          className="mt-12 pt-6 border-t border-white/[0.08] max-w-5xl sm:max-w-6xl w-full mx-auto"
        >
          <div className="flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar py-1 px-1">
            {highlightPills.map((pill) => (
              <span
                key={pill}
                className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-lg bg-white/[0.03] border border-white/[0.08] text-[11px] sm:text-xs font-medium text-slate-300 hover:border-cyan-500/40 hover:text-cyan-300 transition-colors cursor-default whitespace-nowrap shrink-0"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-cyan-400/80 shrink-0" />
                {pill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Floating Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...smoothTransition, delay: 0.45 }}
          className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-3.5 max-w-2xl mx-auto"
        >
          {quickStats.map((item, idx) => (
            <div
              key={idx}
              className="glass-card rounded-2xl p-3.5 text-center border border-white/10"
            >
              <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                <span className="text-gradient-cyan">{item.value}</span>
              </div>
              <div className="text-xs text-slate-400 mt-0.5 font-medium">
                {item.label}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
