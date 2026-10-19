"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2, Terminal, Code2, Activity, RefreshCw } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function HeroSection() {
  const { language } = useLanguage();
  const isBn = language === "bn";
  const [activeTab, setActiveTab] = useState<"terminal" | "architecture" | "telemetry">("terminal");
  const [isRunning, setIsRunning] = useState(false);

  const handleRerun = () => {
    setIsRunning(true);
    setTimeout(() => setIsRunning(false), 800);
  };

  return (
    <section 
      id="hero" 
      className="relative pt-24 sm:pt-32 pb-8 sm:pb-12 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Subtle diffused radial mesh glows in background */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-[300px] sm:h-[450px] bg-gradient-to-r from-[#0EA5E9]/[0.08] via-[#06B6D4]/[0.06] to-[#10B981]/[0.06] blur-[160px] rounded-full pointer-events-none -z-10" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        {/* Massive Two-Line Centered Headline */}
        <div className="text-center max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`tracking-[-0.03em] leading-[1.0] sm:leading-[0.96] ${isBn ? "font-bangla-display" : "font-display font-black"}`}
          >
            {/* Line 1: Pure White */}
            <span className="block text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-[98px] text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
              {isBn ? "ডিজিটাল প্রোডাক্ট" : "Digital Product"}
            </span>

            {/* Line 2: Pink-to-Gold Gradient */}
            <span className="block text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-[98px] text-gradient-hero mt-1 sm:mt-2 py-1">
              {isBn ? "স্টুডিও।" : "Studio."}
            </span>
          </motion.h1>
        </div>

        {/* Hero Composition: Left Floating Cards | Center Terminal Console | Right Editorial Block */}
        <div className="mt-8 sm:mt-12 lg:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 items-center">
          
          {/* Left: Two Stacked Glassmorphism Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 flex flex-row lg:flex-col gap-3.5 sm:gap-4 justify-center lg:justify-start order-2 lg:order-1"
          >
            {/* Card 1: 150+ Projects Delivered */}
            <motion.div 
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="flex-1 lg:flex-none bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:border-white/20 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-2 sm:mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#06B6D4] shadow-[0_0_10px_#06B6D4]" />
                <Sparkles className="w-4 h-4 text-[#06B6D4]/80 group-hover:rotate-12 transition-transform" />
              </div>
              <div className={`text-2xl sm:text-3xl lg:text-4xl text-white font-black tracking-tight ${isBn ? "font-bangla-display" : "font-display"}`}>
                {isBn ? "১৫০+" : "150+"}
              </div>
              <div className={`text-xs sm:text-sm text-neutral-400 font-medium tracking-wide mt-1 ${isBn ? "font-bangla-ui" : ""}`}>
                {isBn ? "সফল প্রজেক্ট ডেলিভারি" : "Projects Delivered"}
              </div>
            </motion.div>

            {/* Card 2: 99% Client Satisfaction */}
            <motion.div 
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="flex-1 lg:flex-none bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:border-white/20 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-2 sm:mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#10B981] shadow-[0_0_10px_#10B981]" />
                <CheckCircle2 className="w-4 h-4 text-[#10B981]/80 group-hover:scale-110 transition-transform" />
              </div>
              <div className={`text-2xl sm:text-3xl lg:text-4xl text-white font-black tracking-tight ${isBn ? "font-bangla-display" : "font-display"}`}>
                {isBn ? "৯৯%" : "99%"}
              </div>
              <div className={`text-xs sm:text-sm text-neutral-400 font-medium tracking-wide mt-1 ${isBn ? "font-bangla-ui" : ""}`}>
                {isBn ? "ক্লায়েন্ট সন্তুষ্টি রেট" : "Client Satisfaction"}
              </div>
            </motion.div>
          </motion.div>

          {/* Centerpiece: Ultra-Realistic Interactive Terminal & Code Console */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex justify-center items-center relative order-1 lg:order-2"
          >
            {/* Multi-layered halo backlighting */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0EA5E9]/[0.12] via-[#06B6D4]/[0.08] to-transparent blur-[80px] rounded-full scale-90 pointer-events-none" />

            {/* Bespoke Interactive Glassmorphism Terminal Console */}
            <div className="relative w-full max-w-[500px] rounded-3xl bg-[#101015]/95 backdrop-blur-2xl border border-white/[0.12] p-4 sm:p-5 shadow-[0_25px_70px_rgba(0,0,0,0.85)] hover:border-white/20 transition-all duration-500 group">
              
              {/* macOS Window Bar Header & Tabs */}
              <div className="flex items-center justify-between pb-3.5 border-b border-white/[0.08]">
                {/* Traffic Light Dots */}
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#FF5F56] shadow-[0_0_8px_rgba(255,95,86,0.6)]" />
                  <span className="w-3 h-3 rounded-full bg-[#FFBD2E] shadow-[0_0_8px_rgba(255,189,46,0.6)]" />
                  <span className="w-3 h-3 rounded-full bg-[#27C93F] shadow-[0_0_8px_rgba(39,201,63,0.6)]" />
                </div>
                
                {/* Interactive Console Tabs */}
                <div className="flex items-center gap-1 bg-black/60 p-1 rounded-xl border border-white/5">
                  <button
                    onClick={() => setActiveTab("terminal")}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-mono transition-all ${
                      activeTab === "terminal"
                        ? "bg-white/10 text-white font-bold shadow-sm"
                        : "text-neutral-400 hover:text-neutral-200"
                    }`}
                  >
                    <Terminal className="w-3 h-3 text-[#0EA5E9]" />
                    <span>terminal.zsh</span>
                  </button>

                  <button
                    onClick={() => setActiveTab("architecture")}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-mono transition-all ${
                      activeTab === "architecture"
                        ? "bg-white/10 text-white font-bold shadow-sm"
                        : "text-neutral-400 hover:text-neutral-200"
                    }`}
                  >
                    <Code2 className="w-3 h-3 text-[#06B6D4]" />
                    <span>stack.ts</span>
                  </button>

                  <button
                    onClick={() => setActiveTab("telemetry")}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-[10px] font-mono transition-all ${
                      activeTab === "telemetry"
                        ? "bg-white/10 text-white font-bold shadow-sm"
                        : "text-neutral-400 hover:text-neutral-200"
                    }`}
                  >
                    <Activity className="w-3 h-3 text-emerald-400" />
                    <span>status.json</span>
                  </button>
                </div>

                {/* Live Node Badge */}
                <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 border border-white/10 text-[9px] font-mono text-neutral-300">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span>18ms</span>
                </div>
              </div>

              {/* Console Body */}
              <div className="mt-3.5 rounded-2xl bg-black/85 border border-white/[0.08] p-4 font-mono text-xs text-left relative overflow-hidden min-h-[260px] flex flex-col justify-between">
                
                {/* TAB 1: Live Interactive Terminal */}
                {activeTab === "terminal" && (
                  <div className="space-y-1.5 text-[11px] sm:text-xs">
                    <div className="text-neutral-500 text-[10px] flex items-center justify-between pb-1.5 mb-1 border-b border-white/5">
                      <span>WEBZEN HIGH-VELOCITY CORE // PRODUCTION</span>
                      <button 
                        onClick={handleRerun}
                        className="text-[#06B6D4] hover:text-[#38BDF8] flex items-center gap-1 text-[10px] cursor-pointer"
                      >
                        <RefreshCw className={`w-2.5 h-2.5 ${isRunning ? "animate-spin" : ""}`} />
                        <span>{isRunning ? "BUILDING..." : "RE-DEPLOY"}</span>
                      </button>
                    </div>

                    <div className="text-neutral-300">
                      <span className="text-[#0EA5E9] font-bold">~ $</span> webzen deploy --env=production --region=dhaka
                    </div>
                    <div className="text-neutral-400 text-[10.5px] pl-3">
                      ⚡ Turbopack v16.4.2 engine initialized [413ms]
                    </div>
                    <div className="text-neutral-400 text-[10.5px] pl-3">
                      ✔ TypeScript strict checking passed with 0 errors
                    </div>
                    <div className="text-neutral-400 text-[10.5px] pl-3">
                      ✔ bKash & Nagad instant merchant gateway hooked
                    </div>
                    <div className="text-neutral-400 text-[10.5px] pl-3">
                      ✔ Clustered Edge CDN distributed (Dhaka Node • 18ms)
                    </div>
                    <div className="text-emerald-400 font-semibold text-[11px] pl-3 pt-0.5">
                      🚀 LIVE at https://webzenbd.com [99.99% SLA]
                    </div>
                    <div className="text-neutral-300 flex items-center gap-1.5 pt-1">
                      <span className="text-[#06B6D4] font-bold">webzen@dhaka-node:~$</span>
                      <span className="text-emerald-400">status --live</span>
                      <span className="w-2 h-3.5 bg-emerald-400 animate-pulse ml-0.5" />
                    </div>
                  </div>
                )}

                {/* TAB 2: TypeScript Stack Configuration */}
                {activeTab === "architecture" && (
                  <div className="space-y-1 text-[11px] sm:text-xs text-neutral-300 leading-relaxed">
                    <div className="text-neutral-500 text-[10px] pb-1.5 mb-1 border-b border-white/5">
                      <span>src/config/webzen-stack.ts</span>
                    </div>
                    <div><span className="text-purple-400">export const</span> <span className="text-blue-300">WebZenEngine</span> = &#123;</div>
                    <div className="pl-4"><span className="text-neutral-400">runtime:</span> <span className="text-emerald-300">&quot;Next.js 16 (Turbopack)&quot;</span>,</div>
                    <div className="pl-4"><span className="text-neutral-400">language:</span> <span className="text-emerald-300">&quot;TypeScript Strict&quot;</span>,</div>
                    <div className="pl-4"><span className="text-neutral-400">payments:</span> [<span className="text-[#0EA5E9]">&quot;bKash&quot;</span>, <span className="text-[#06B6D4]">&quot;Nagad&quot;</span>, <span className="text-[#10B981]">&quot;Stripe&quot;</span>],</div>
                    <div className="pl-4"><span className="text-neutral-400">database:</span> <span className="text-emerald-300">&quot;MongoDB Atlas + Redis&quot;</span>,</div>
                    <div className="pl-4"><span className="text-neutral-400">edgeNode:</span> <span className="text-emerald-300">&quot;Dhaka Core (18ms TTFB)&quot;</span>,</div>
                    <div className="pl-4"><span className="text-neutral-400">uptimeSLA:</span> <span className="text-[#06B6D4]">&quot;99.99% Guaranteed&quot;</span>,</div>
                    <div>&#125; <span className="text-purple-400">as const</span>;</div>
                  </div>
                )}

                {/* TAB 3: Real-Time Telemetry JSON */}
                {activeTab === "telemetry" && (
                  <div className="space-y-1 text-[11px] sm:text-xs text-neutral-300 leading-relaxed font-mono">
                    <div className="text-neutral-500 text-[10px] pb-1.5 mb-1 border-b border-white/5 flex items-center justify-between">
                      <span>REAL-TIME SYSTEM METRICS</span>
                      <span className="text-emerald-400">● 100% HEALTHY</span>
                    </div>
                    <pre className="text-[10.5px] sm:text-[11px] text-neutral-300 leading-tight overflow-x-auto">
{`{
  "datacenter": "Dhaka Core BGD-01",
  "httpStatus": 200,
  "ttfbLatency": "18.4ms",
  "activeConnections": "14,820",
  "memoryFootprint": "42MB",
  "sslHandshake": "TLS 1.3 Strict",
  "lighthouseScore": {
    "performance": 99,
    "accessibility": 100,
    "bestPractices": 100,
    "seo": 100
  }
}`}
                    </pre>
                  </div>
                )}

                {/* Terminal Bottom Telemetry Bar */}
                <div className="pt-2 border-t border-white/5 flex items-center justify-between text-[10px] text-neutral-400 font-mono mt-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>DAEMON: RUNNING</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#0EA5E9]">ZSH</span>
                    <span className="text-neutral-600">|</span>
                    <span className="text-neutral-400">UTF-8</span>
                    <span className="text-neutral-600">|</span>
                    <span className="text-[#06B6D4]">DHAKA-01</span>
                  </div>
                </div>

              </div>

              {/* Floating Architectural Feature Badges outside the console */}
              <div className="absolute -left-3 top-8 bg-black/80 backdrop-blur-md border border-white/10 rounded-xl px-3 py-1.5 shadow-lg hidden sm:flex items-center gap-2 z-20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0EA5E9]" />
                <span className="text-[10px] font-mono font-bold text-neutral-200">Next.js 16 + Turbopack</span>
              </div>

              <div className="absolute -right-3 top-16 bg-black/80 backdrop-blur-md border border-white/10 rounded-xl px-3 py-1.5 shadow-lg hidden sm:flex items-center gap-2 z-20">
                <span className="w-1.5 h-1.5 rounded-full bg-[#06B6D4]" />
                <span className="text-[10px] font-mono font-bold text-neutral-200">bKash Instant Gateway</span>
              </div>

              <div className="absolute -bottom-2 left-6 bg-black/80 backdrop-blur-md border border-white/10 rounded-xl px-3 py-1.5 shadow-lg hidden sm:flex items-center gap-2 z-20">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span className="text-[10px] font-mono font-bold text-neutral-200">99.99% Uptime SLA</span>
              </div>

            </div>
          </motion.div>

          {/* Right: Editorial Block & Solid White Pill CTA */}
          <motion.div 
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 flex flex-col justify-center items-start text-left order-3"
          >
            <div className="space-y-4 sm:space-y-5 max-w-sm mx-auto lg:mx-0">
              <div className="w-10 h-0.5 bg-gradient-to-r from-[#0EA5E9] via-[#06B6D4] to-[#10B981] rounded-full hidden lg:block" />
              
              <p className={`text-sm sm:text-base text-neutral-300 leading-relaxed font-normal ${isBn ? "font-bangla-body" : ""}`}>
                {isBn 
                  ? "আমরা অত্যাধুনিক ডিজিটাল প্রোডাক্ট, হাই-পারফরম্যান্স ওয়েব আর্কিটেকচার এবং নজরকাড়া UI/UX অভিজ্ঞতা তৈরি করি যা আপনার ব্যবসায় রূপান্তর আনবে।"
                  : "We engineer mission-critical digital products, ultra-responsive web applications, and intuitive user experiences designed to scale enterprise workflows."
                }
              </p>

              {/* Solid White Pill-Shaped CTA Button with Smooth Scroll */}
              <div>
                <a 
                  href="#contact" 
                  onClick={(e) => {
                    e.preventDefault();
                    const target = document.querySelector("#contact");
                    if (target) {
                      const navHeight = 72;
                      const targetPos = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                      window.scrollTo({ top: targetPos, behavior: "smooth" });
                      window.history.pushState(null, "", "#contact");
                    }
                  }}
                >
                  <motion.button 
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`bg-white hover:bg-neutral-200 text-black font-extrabold text-xs sm:text-sm tracking-[0.14em] uppercase px-7 py-3.5 sm:px-8 sm:py-4 rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:shadow-[0_0_40px_rgba(255,255,255,0.45)] flex items-center gap-2 group cursor-pointer ${isBn ? "font-bangla-ui" : ""}`}
                  >
                    <span>{isBn ? "প্রজেক্ট শুরু করুন" : "GET STARTED"}</span>
                    <ArrowRight className="w-4 h-4 text-black transition-transform group-hover:translate-x-1" />
                  </motion.button>
                </a>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
