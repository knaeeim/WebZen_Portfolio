"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Zap, CodeXml, Layers, Server } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useSite } from "@/context/SiteContext";

export function ServicesSection() {
  const { language } = useLanguage();
  const { data } = useSite();
  const isBn = language === "bn";

  const fallbackChecklist = isBn
    ? [
        {
          title: "কাস্টম ফুল-স্ট্যাক ওয়েব আর্কিটেকচার",
          desc: "Next.js 16, TypeScript, Node.js এবং ক্লাউড মাইক্রোসার্ভিসেস দিয়ে তৈরি দ্রুতগতির আর্কিটেকচার।",
        },
        {
          title: "রেডিয়েন্ট UI/UX ডিজাইন ও প্রোটোটাইপিং",
          desc: "চোখ ধাঁধানো নিয়ন গ্লো, আধুনিক ডিজাইন সিস্টেম এবং ১০০% পিক্সেল-পারফেক্ট গ্লাস ইন্টারফেস।",
        },
        {
          title: "স্কেलेबल ড্যাশবোর্ড ও বিকাশ-নগদ পেমেন্ট",
          desc: "কাস্টম অ্যানালিটিক্স পোর্টাল, বিকাশ-নগদ-স্ট্রাইপ ইনস্ট্যান্ট পেমেন্ট গেটওয়ে এবং রিয়েল-টাইম ডাটা।",
        },
      ]
    : [
        {
          title: "Custom Full-Stack Web Architecture",
          desc: "Built with Next.js 16, TypeScript, Node.js, and cloud microservices for maximum speed.",
        },
        {
          title: "Radiant UI/UX Design & Prototyping",
          desc: "Fluid neon interactive animations, design systems, and responsive pixel-perfect interfaces.",
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
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden scroll-mt-20 bg-[#050505] z-10">
      
      {/* Background ambient lighting - Soft Crimson & Amber Glow */}
      <div 
        className="absolute top-1/2 -left-[10%] w-[600px] h-[600px] pointer-events-none rounded-full" 
        style={{
          background: "radial-gradient(circle, rgba(255, 56, 35, 0.12) 0%, transparent 70%)",
          filter: "blur(140px)",
        }}
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/3 -right-[10%] w-[600px] h-[600px] pointer-events-none rounded-full" 
        style={{
          background: "radial-gradient(circle, rgba(255, 149, 0, 0.12) 0%, transparent 70%)",
          filter: "blur(140px)",
        }}
        aria-hidden="true" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-radiant-pill border border-[#FF3823]/30 text-neutral-300 mb-4 shadow-[0_4px_16px_rgba(255,56,35,0.15)]"
          >
            <span className="w-2 h-2 rounded-full bg-[#FF3823] shadow-[0_0_8px_#FF3823]" />
            <span className={`text-[11px] font-semibold tracking-[0.2em] uppercase text-neutral-200 ${isBn ? "font-bangla-ui tracking-normal" : ""}`}>
              {isBn ? "সার্ভিস ও ক্যাপাবিলিটিজ" : "SOLUTIONS & CAPABILITIES"}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ type: "spring", stiffness: 220, damping: 18, delay: 0.08 }}
            className={`text-3xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase ${isBn ? "font-bangla-display font-black tracking-normal" : "font-display font-black"}`}
          >
            {isBn ? "আমাদের সার্ভিস" : "Our Services"}
          </motion.h2>
        </div>

        {/* Split Feature Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Heading, Paragraph, Numbered Checklist & Button */}
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
                    কাস্টম ওয়েব ও <span className="text-gradient-hero">UI/UX ইঞ্জিনিয়ারিং</span>
                  </>
                ) : (
                  <>
                    Custom Web & <span className="text-gradient-hero">UI/UX Engineering</span>
                  </>
                )}
              </h3>
              <p className={`text-sm sm:text-base text-neutral-400 font-normal leading-relaxed ${isBn ? "font-bangla-body" : ""}`}>
                {isBn
                  ? "আমরা আপনার ব্যবসার জন্য নির্দিষ্ট ও শক্তিশালী ডিজিটাল প্রোডাক্ট তৈরি করি। কনভার্সন-ড্রাইভেন কর্পোরেট পোর্টাল থেকে শুরু করে ফুল-স্ট্যাক ক্লাউড ড্যাশবোর্ড—সবকিছুই হয় সর্বোচ্চ গতি ও পারফরম্যান্সে তৈরি।"
                  : "We design and engineer tailored digital products that elevate your brand. From high-converting corporate web architectures to full-stack cloud dashboards, every component is crafted for uncompromising performance."}
              </p>
            </div>

            {/* Vertical Checklist with Glass Cards */}
            <div className="space-y-4 pt-1">
              {checklist.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 240, damping: 18, delay: 0.1 + idx * 0.1 }}
                  whileHover={{ y: -3, scale: 1.01 }}
                  className="flex items-start gap-4 p-4 sm:p-5 rounded-2xl glass-radiant border border-white/[0.07] hover:border-[#FF3823]/35 transition-all cursor-pointer group"
                >
                  <div className="w-8 h-8 rounded-xl bg-[#FF3823]/15 border border-[#FF3823]/30 flex items-center justify-center shrink-0 mt-0.5 text-xs font-mono font-bold text-[#FF3823] group-hover:scale-105 group-hover:bg-[#FF3823]/25 transition-all shadow-[0_0_12px_rgba(255,56,35,0.2)]">
                    0{idx + 1}
                  </div>
                  <div>
                    <h4 className={`text-white text-base font-bold tracking-wide group-hover:text-[#FF3823] transition-colors ${isBn ? "font-bangla-display font-bold" : "font-display font-bold"}`}>
                      {item.title}
                    </h4>
                    <p className={`text-xs sm:text-sm text-neutral-400 mt-1 leading-relaxed ${isBn ? "font-bangla-body" : ""}`}>
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Radiant CTA Button */}
            <div className="pt-2">
              <a 
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  const target = document.querySelector("#projects");
                  if (target) {
                    const navHeight = 80;
                    const targetPos = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                    window.scrollTo({ top: targetPos, behavior: "smooth" });
                    window.history.pushState(null, "", "#projects");
                  }
                }}
              >
                <motion.button 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.96 }}
                  className={`pill-btn-primary pl-7 pr-3 py-3 text-xs sm:text-sm font-bold tracking-wider uppercase gap-3 shadow-[0_10px_30px_rgba(255,56,35,0.45)] ${isBn ? "font-bangla-ui text-sm tracking-normal" : ""}`}
                >
                  <span>{isBn ? "বিস্তারিত কাজ দেখুন" : "EXPLORE WORK"}</span>
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20 shadow-inner">
                    <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                  </span>
                </motion.button>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Radiant Live Architecture Station */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 220, damping: 20 }}
            className="lg:col-span-6 relative flex justify-center items-center"
          >
            {/* Ambient backlight glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FF3823]/15 via-[#FF6A00]/10 to-[#FFA000]/10 blur-[90px] rounded-full scale-95 pointer-events-none" />

            {/* Master Glass Architecture Station */}
            <div className="relative w-full rounded-[32px] overflow-hidden glass-radiant border border-white/[0.1] p-6 sm:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.85)]">
              
              {/* Window Controls & Live System Indicator */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-[#EF4444] shadow-[0_0_8px_rgba(239,68,68,0.7)]" />
                  <span className="w-3 h-3 rounded-full bg-[#F59E0B] shadow-[0_0_8px_rgba(245,158,11,0.7)]" />
                  <span className="w-3 h-3 rounded-full bg-[#10B981] shadow-[0_0_8px_rgba(16,185,129,0.7)]" />
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-300 bg-white/[0.04] px-3.5 py-1.5 rounded-full border border-white/[0.08]">
                  <span className="w-2 h-2 rounded-full bg-[#FF3823] animate-ping" />
                  <span className="font-bold tracking-wider text-[#FF3823]">WEBZEN ENGINE</span>
                </div>
              </div>

              {/* Interactive Live Architecture Modules */}
              <div className="pt-6 space-y-4">
                
                {/* Module 1: E-Commerce & bKash Gateway */}
                <motion.div 
                  whileHover={{ y: -2, scale: 1.01 }}
                  className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#FF3823]/40 transition-colors shadow-sm"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-[#FF3823]/15 flex items-center justify-center">
                        <span className="w-2 h-2 rounded-full bg-[#FF3823] shadow-[0_0_6px_#FF3823]" />
                      </div>
                      <span className={`text-xs font-bold text-white ${isBn ? "font-bangla-ui" : "font-display"}`}>
                        {isBn ? "ই-কমার্স ও বিকাশ অটোমেটেড গেটওয়ে" : "E-Commerce & bKash Gateway"}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-[#FF3823] bg-[#FF3823]/10 px-2.5 py-1 rounded-full border border-[#FF3823]/25">
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
                  className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#FFA000]/40 transition-colors shadow-sm"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-[#FFA000]/15 flex items-center justify-center">
                        <span className="w-2 h-2 rounded-full bg-[#FFA000] shadow-[0_0_6px_#FFA000]" />
                      </div>
                      <span className={`text-xs font-bold text-white ${isBn ? "font-bangla-ui" : "font-display"}`}>
                        {isBn ? "টেলিমেডিসিন ও ডক্টর স্লট বুকিং" : "Telehealth & Clinic Scheduling"}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-[#FFA000] bg-[#FFA000]/10 px-2.5 py-1 rounded-full border border-[#FFA000]/25">
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
                  className="p-4 sm:p-5 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-[#FF5C35]/40 transition-colors shadow-sm"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-lg bg-[#FF5C35]/15 flex items-center justify-center">
                        <span className="w-2 h-2 rounded-full bg-[#FF5C35] shadow-[0_0_6px_#FF5C35]" />
                      </div>
                      <span className={`text-xs font-bold text-white ${isBn ? "font-bangla-ui" : "font-display"}`}>
                        {isBn ? "এন্টারপ্রাইজ ক্লাউড ও অ্যানালিটিক্স" : "Enterprise Cloud Analytics"}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-[#FF5C35] bg-[#FF5C35]/10 px-2.5 py-1 rounded-full border border-[#FF5C35]/25">
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

              {/* Bottom Recessed Bar */}
              <div className="mt-6 p-3.5 rounded-xl bg-white/[0.02] border border-white/[0.05] flex items-center justify-between text-[11px] text-neutral-400 font-mono">
                <span>Next.js 16 • TypeScript • Node</span>
                <span className="text-[#FF3823] font-semibold">100% Bespoke Architecture</span>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
