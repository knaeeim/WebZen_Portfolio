"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useSite } from "@/context/SiteContext";

export function ServicesSection() {
  const { language } = useLanguage();
  const { data } = useSite();
  const isBn = language === "bn";

  const fallbackChecklist = isBn
    ? [
        {
          title: "কাস্টম ফুল-স্ট্যাক ওয়েব অ্যাপস",
          desc: "Next.js 16, TypeScript, Node.js এবং ক্লাউড মাইক্রোসার্ভিসেস দিয়ে তৈরি দ্রুতগতির আর্কিটেকচার।",
        },
        {
          title: "ইন্টারেক্টিভ UI/UX ও প্রোটোটাইপিং",
          desc: "চোখ ধাঁধানো ফ্লুইড অ্যানিমেশন, আধুনিক ডিজাইন সিস্টেম এবং ১০০% পিক্সেল-পারফেক্ট ইন্টারফেস।",
        },
        {
          title: "স্কেलेबल ড্যাশবোর্ড ও ই-কমার্স",
          desc: "কাস্টম অ্যানালিটিক্স পোর্টাল, বিকাশ-নগদ-স্ট্রাইপ ইনস্ট্যান্ট পেমেন্ট গেটওয়ে এবং রিয়েল-টাইম ডাটা।",
        },
      ]
    : [
        {
          title: "Custom Full-Stack Web Apps",
          desc: "Built with Next.js 16, TypeScript, Node.js, and cloud microservices for maximum speed.",
        },
        {
          title: "Interactive UI/UX & Prototyping",
          desc: "Fluid interactive animations, design systems, and responsive pixel-perfect interfaces.",
        },
        {
          title: "Scalable Dashboard & E-Commerce",
          desc: "Custom analytics portals, payment integrations (bKash, Stripe), and real-time architectures.",
        },
      ];

  const checklist = (data?.services && data.services.length > 0)
    ? data.services.slice(0, 3).map((s) => ({
        title: isBn && s.titleBn ? s.titleBn : s.title,
        desc: isBn && s.descriptionBn ? s.descriptionBn : s.description,
      }))
    : fallbackChecklist;

  return (
    <section id="services" className="relative py-20 sm:py-28 overflow-hidden scroll-mt-20 bg-[#060813]">
      {/* Background ambient lighting - Soft Aurora Teal & Lavender Glow */}
      <div 
        className="absolute top-1/2 -left-[10%] w-[600px] h-[600px] bg-[#2DD4BF]/[0.05] blur-[170px] rounded-full pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/3 -right-[10%] w-[600px] h-[600px] bg-[#C084FC]/[0.05] blur-[170px] rounded-full pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title: Centered Minimalist Zen Typography */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-zen-pill text-neutral-300 mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-[#2DD4BF] shadow-[0_0_8px_#2DD4BF]" />
            <span className={`text-[11px] font-semibold tracking-[0.2em] uppercase text-neutral-200 ${isBn ? "font-bangla-ui tracking-normal" : ""}`}>
              {isBn ? "সার্ভিস ও ক্যাপাবিলিটিজ" : "SOLUTIONS & CAPABILITIES"}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ type: "spring", stiffness: 220, damping: 18, delay: 0.08 }}
            className={`text-3xl sm:text-5xl md:text-6xl text-white tracking-tight ${isBn ? "font-bangla-display font-extrabold" : "font-display font-black"}`}
          >
            {isBn ? "আমাদের সার্ভিস" : "Our Services"}
          </motion.h2>
        </div>

        {/* Split Feature Layout with Architectural Negative Space */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Heading, Paragraph, Minimalist Numbered Checklist & Aurora Button */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 220, damping: 20 }}
            className="lg:col-span-6 space-y-7"
          >
            <div className="space-y-4">
              <h3 className={`text-2xl sm:text-4xl text-white tracking-tight leading-snug ${isBn ? "font-bangla-display font-bold" : "font-display font-bold"}`}>
                {isBn ? (
                  <>
                    কাস্টম ওয়েব ও <span className="text-gradient-aurora">UI/UX ইঞ্জিনিয়ারিং</span>
                  </>
                ) : (
                  <>
                    Custom Web & <span className="text-gradient-aurora">UI/UX Engineering</span>
                  </>
                )}
              </h3>
              <p className={`text-sm sm:text-base text-neutral-400 font-normal leading-relaxed ${isBn ? "font-bangla-body" : ""}`}>
                {isBn
                  ? "আমরা আপনার ব্যবসার জন্য নির্দিষ্ট ও শক্তিশালী ডিজিটাল প্রোডাক্ট তৈরি করি। কনভার্সন-ড্রাইভেন কর্পোরেট পোর্টাল থেকে শুরু করে ফুল-স্ট্যাক ক্লাউড ড্যাশবোর্ড—সবকিছুই হয় সর্বোচ্চ গতি ও পারফরম্যান্সে তৈরি।"
                  : "We design and engineer tailored digital products that elevate your brand. From high-converting corporate web architectures to full-stack cloud dashboards, every component is crafted for uncompromising performance."}
              </p>
            </div>

            {/* Vertical Checklist with Frosted Liquid Glass Cards & Numbered Indicators */}
            <div className="space-y-4 pt-1">
              {checklist.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 240, damping: 18, delay: 0.1 + idx * 0.1 }}
                  whileHover={{ y: -3, scale: 1.01 }}
                  className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl glass-zen border border-white/[0.07] hover:border-[#2DD4BF]/30 transition-all cursor-pointer group"
                >
                  <div className="w-8 h-8 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0 mt-0.5 text-xs font-mono font-bold text-[#2DD4BF] group-hover:scale-105 group-hover:bg-[#2DD4BF]/10 transition-all">
                    0{idx + 1}
                  </div>
                  <div>
                    <h4 className={`text-white text-base font-bold tracking-wide group-hover:text-[#2DD4BF] transition-colors ${isBn ? "font-bangla-display font-bold" : "font-display font-bold"}`}>
                      {item.title}
                    </h4>
                    <p className={`text-xs sm:text-sm text-neutral-400 mt-1 leading-relaxed ${isBn ? "font-bangla-body" : ""}`}>
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Aurora Action Button */}
            <div className="pt-2">
              <a 
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector("#projects");
                  if (target) {
                    const navHeight = 72;
                    const targetPos = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                    window.scrollTo({ top: targetPos, behavior: "smooth" });
                    window.history.pushState(null, "", "#projects");
                  }
                }}
              >
                <motion.button 
                  whileHover={{ y: -3, scale: 1.02 }}
                  whileTap={{ y: 0, scale: 0.96 }}
                  transition={{ type: "spring", stiffness: 280, damping: 18 }}
                  className={`aurora-btn-primary px-8 py-3.5 text-xs font-bold tracking-[0.16em] uppercase gap-3 shadow-lg ${isBn ? "font-bangla-ui text-sm tracking-normal" : ""}`}
                >
                  <span>{isBn ? "বিস্তারিত কাজ দেখুন" : "EXPLORE WORK"}</span>
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-black/20 shadow-inner">
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#030712]" />
                  </span>
                </motion.button>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Architectural Live System Telemetry Hub */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 220, damping: 20 }}
            className="lg:col-span-6 relative flex justify-center items-center"
          >
            {/* Ambient backlight glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#2DD4BF]/10 via-[#818CF8]/10 to-[#C084FC]/10 blur-[100px] rounded-full scale-95 pointer-events-none" />

            {/* Master Glass Architecture Station */}
            <div className="relative w-full rounded-[32px] overflow-hidden glass-zen border border-white/[0.1] p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.6)]">
              
              {/* Window Controls & Live System Indicator */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#EF4444]/80 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                  <span className="w-3 h-3 rounded-full bg-[#F59E0B]/80 shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
                  <span className="w-3 h-3 rounded-full bg-[#10B981]/80 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-300 bg-white/[0.04] px-3.5 py-1.5 rounded-full border border-white/[0.06]">
                  <span className="w-2 h-2 rounded-full bg-[#2DD4BF] animate-ping" />
                  <span className="font-bold tracking-wider text-[#2DD4BF]">WEBZEN ZEN ENGINE</span>
                </div>
              </div>

              {/* Interactive Live Architecture Modules in Liquid Glass */}
              <div className="pt-6 space-y-4">
                
                {/* Module 1: E-Commerce & bKash Gateway */}
                <motion.div 
                  whileHover={{ y: -2, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#2DD4BF]/40 transition-colors shadow-sm"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-[#2DD4BF]/15 flex items-center justify-center">
                        <span className="w-2 h-2 rounded-full bg-[#2DD4BF] shadow-[0_0_6px_#2DD4BF]" />
                      </div>
                      <span className={`text-xs font-bold text-white ${isBn ? "font-bangla-ui" : "font-display"}`}>
                        {isBn ? "ই-কমার্স ও বিকাশ অটোমেটেড গেটওয়ে" : "E-Commerce & bKash Gateway"}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-[#2DD4BF] bg-[#2DD4BF]/10 px-2.5 py-1 rounded-full border border-[#2DD4BF]/20">
                      LIVE • 0.2s TTFB
                    </span>
                  </div>
                  <p className={`text-xs text-neutral-400 pl-9.5 ${isBn ? "font-bangla-body" : ""}`}>
                    {isBn 
                    ? "ইনস্ট্যান্ট পেমেন্ট ভেরিফিকেশন, রিয়েল-টাইম এসএমএস নোটিফিকেশন ও অটোমেটিক ইনভয়েস।" 
                    : "Direct payment reconciliation, automated SMS receipts & real-time webhook triggers."}
                  </p>
                </motion.div>

                {/* Module 2: Telehealth & Booking Pipeline */}
                <motion.div 
                  whileHover={{ y: -2, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#818CF8]/40 transition-colors shadow-sm"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-[#818CF8]/15 flex items-center justify-center">
                        <span className="w-2 h-2 rounded-full bg-[#818CF8] shadow-[0_0_6px_#818CF8]" />
                      </div>
                      <span className={`text-xs font-bold text-white ${isBn ? "font-bangla-ui" : "font-display"}`}>
                        {isBn ? "টেলিমেডিসিন ও ডক্টর স্লট বুকিং" : "Telehealth & Clinic Scheduling"}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-[#818CF8] bg-[#818CF8]/10 px-2.5 py-1 rounded-full border border-[#818CF8]/20">
                      SOCKET SYNC
                    </span>
                  </div>
                  <p className={`text-xs text-neutral-400 pl-9.5 ${isBn ? "font-bangla-body" : ""}`}>
                    {isBn 
                    ? "৩ ধাপে অনলাইন সিরিয়াল, ডাক্তারের সময়সূচী ড্যাশবোর্ড ও রোগীর মেডিকেল হিস্ট্রি পোর্টাল।" 
                    : "Multi-slot appointment sync, doctor availability matrix & cloud patient records."}
                  </p>
                </motion.div>

                {/* Module 3: Enterprise Cloud Analytics */}
                <motion.div 
                  whileHover={{ y: -2, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 260, damping: 20 }}
                  className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#C084FC]/40 transition-colors shadow-sm"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-[#C084FC]/15 flex items-center justify-center">
                        <span className="w-2 h-2 rounded-full bg-[#C084FC] shadow-[0_0_6px_#C084FC]" />
                      </div>
                      <span className={`text-xs font-bold text-white ${isBn ? "font-bangla-ui" : "font-display"}`}>
                        {isBn ? "এন্টারপ্রাইজ ক্লাউড ও অ্যানালিটিক্স" : "Enterprise Cloud Analytics"}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-[#C084FC] bg-[#C084FC]/10 px-2.5 py-1 rounded-full border border-[#C084FC]/20">
                      99.99% UPTIME
                    </span>
                  </div>
                  <p className={`text-xs text-neutral-400 pl-9.5 ${isBn ? "font-bangla-body" : ""}`}>
                    {isBn 
                    ? "৫০,০০০+ কনকারেন্ট কানেকশন ক্যাপাবিলিটি, ডায়নামিক ডেটা ফিল্টারিং ও রোল-বেসড সিকিউরিটি।" 
                    : "50,000+ concurrent connection throughput, role-based access & encrypted databases."}
                  </p>
                </motion.div>

              </div>

              {/* Bottom Recessed Inset Bar */}
              <div className="mt-6 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-between text-[11px] text-neutral-400 font-mono">
                <span>Next.js 16 • TypeScript • Node • Aurora UI</span>
                <span className="text-[#2DD4BF] font-semibold">100% Bespoke Architecture</span>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
