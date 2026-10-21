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
    <section id="services" className="relative py-14 sm:py-20 overflow-hidden scroll-mt-20 bg-[#0F1117]">
      {/* Background ambient lighting - Soft Coral & Violet Clay Glow */}
      <div 
        className="absolute top-1/2 -left-[10%] w-[500px] h-[500px] bg-[#FF5C35]/[0.06] blur-[160px] rounded-full pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/3 -right-[10%] w-[500px] h-[500px] bg-[#7C3AED]/[0.06] blur-[160px] rounded-full pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title: "Our Services" Centered in Puffed Typography */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#181B24] clay-pill text-neutral-300 mb-3.5"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF5C35] shadow-[0_0_8px_rgba(255,92,53,0.8)]" />
            <span className={`text-[11px] font-extrabold tracking-[0.2em] uppercase text-neutral-200 ${isBn ? "font-bangla-ui" : ""}`}>
              {isBn ? "সার্ভিস ও ক্যাপাবিলিটিজ" : "SOLUTIONS & CAPABILITIES"}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ type: "spring", stiffness: 220, damping: 18, delay: 0.08 }}
            className={`text-3xl sm:text-5xl md:text-6xl text-white tracking-tight text-clay-3d ${isBn ? "font-bangla-display font-extrabold" : "font-display font-black"}`}
          >
            {isBn ? "আমাদের সার্ভিস" : "Our Services"}
          </motion.h2>
        </div>

        {/* Split Feature Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Paragraph, Inflated Clay Checklist & Chunky Clay Button */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 220, damping: 20 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="space-y-3">
              <h3 className={`text-2xl sm:text-4xl text-white tracking-tight leading-snug text-clay-3d ${isBn ? "font-bangla-display font-bold" : "font-display font-black"}`}>
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

            {/* Vertical Checklist with Chunky Inflated Clay Cards & 3D Check Bubbles */}
            <div className="space-y-3.5 pt-1">
              {checklist.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 240, damping: 18, delay: 0.1 + idx * 0.1 }}
                  whileHover={{ y: -3, scale: 1.015 }}
                  className="flex items-start gap-3.5 p-4 sm:p-4.5 rounded-[24px] clay-card-surface cursor-pointer group"
                >
                  <div className="w-8 h-8 rounded-full bg-[#14161F] clay-icon-bubble flex items-center justify-center shrink-0 mt-0.5 group-hover:scale-110 transition-transform">
                    <Check className="w-4 h-4 text-[#FF5C35] drop-shadow-[0_2px_4px_rgba(255,92,53,0.5)]" strokeWidth={3} />
                  </div>
                  <div>
                    <h4 className={`text-white text-base tracking-wide text-clay-3d group-hover:text-[#FF8B66] transition-colors ${isBn ? "font-bangla-display font-bold" : "font-display font-bold"}`}>
                      {item.title}
                    </h4>
                    <p className={`text-xs sm:text-sm text-neutral-400 mt-1 leading-normal ${isBn ? "font-bangla-body" : ""}`}>
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Chunky Clay Button ("LEARN MORE ↗") with Squishy Elastic Bounce */}
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
                  whileHover={{ y: -4, scale: 1.03 }}
                  whileTap={{ y: 0, scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 260, damping: 16 }}
                  className={`clay-btn-coral px-8 py-4 text-xs font-black tracking-[0.18em] uppercase gap-3 shadow-xl ${isBn ? "font-bangla-ui" : ""}`}
                >
                  <span>{isBn ? "বিস্তারিত কাজ দেখুন" : "EXPLORE WORK"}</span>
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white/20 shadow-inner">
                    <ArrowUpRight className="w-3.5 h-3.5 text-white" />
                  </span>
                </motion.button>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Bespoke Inflated Clay Architecture Matrix */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ type: "spring", stiffness: 220, damping: 20 }}
            className="lg:col-span-6 relative flex justify-center items-center"
          >
            {/* Ambient backlight glow - Neon Coral to Violet */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FF5C35]/15 via-[#7C3AED]/12 to-transparent blur-[90px] rounded-full scale-95 pointer-events-none" />

            {/* Inflated Master Clay Architecture Station */}
            <div className="relative w-full rounded-[36px] overflow-hidden clay-card-dark p-6 sm:p-7">
              
              {/* Window Controls & Live System Indicator with Puffy Clay Beads */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.06]">
                <div className="flex items-center gap-2">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#FF5F56] shadow-[inset_1px_1px_2px_rgba(255,255,255,0.4),0_2px_4px_rgba(0,0,0,0.5)]" />
                  <span className="w-3.5 h-3.5 rounded-full bg-[#FFBD2E] shadow-[inset_1px_1px_2px_rgba(255,255,255,0.4),0_2px_4px_rgba(0,0,0,0.5)]" />
                  <span className="w-3.5 h-3.5 rounded-full bg-[#27C93F] shadow-[inset_1px_1px_2px_rgba(255,255,255,0.4),0_2px_4px_rgba(0,0,0,0.5)]" />
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-300 bg-[#14161F] clay-pill px-3.5 py-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#FF5C35] animate-ping" />
                  <span className="font-bold tracking-wider">WEBZEN CLAY ENGINE</span>
                </div>
              </div>

              {/* Interactive Live Architecture Modules in Inflated Clay */}
              <div className="pt-5 space-y-4">
                
                {/* Module 1: E-Commerce & bKash Instant Engine (Coral Clay Accent) */}
                <motion.div 
                  whileHover={{ y: -3, scale: 1.015 }}
                  transition={{ type: "spring", stiffness: 240, damping: 18 }}
                  className="p-4 sm:p-4.5 rounded-[24px] clay-card-surface border border-white/[0.06] hover:border-[#FF5C35]/40 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-xl bg-[#FF5C35]/20 clay-icon-bubble flex items-center justify-center">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#FF5C35]" />
                      </div>
                      <span className={`text-xs font-extrabold text-white text-clay-3d ${isBn ? "font-bangla-ui" : "font-display"}`}>
                        {isBn ? "ই-কমার্স ও বিকাশ অটোমেটেড গেটওয়ে" : "E-Commerce & bKash Gateway"}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-[#FF5C35] bg-[#FF5C35]/15 px-2.5 py-1 rounded-full shadow-[inset_1px_1px_2px_rgba(255,255,255,0.15)]">
                      LIVE • 0.2s TTFB
                    </span>
                  </div>
                  <p className={`text-xs text-neutral-400 pl-9.5 ${isBn ? "font-bangla-body" : ""}`}>
                    {isBn 
                    ? "ইনস্ট্যান্ট পেমেন্ট ভেরিফিকেশন, রিয়েল-টাইম এসএমএস নোটিফিকেশন ও অটোমেটিক ইনভয়েস।" 
                    : "Direct payment reconciliation, automated SMS receipts & real-time webhook triggers."}
                  </p>
                </motion.div>

                {/* Module 2: Telehealth & Booking Pipeline (Violet Clay Accent) */}
                <motion.div 
                  whileHover={{ y: -3, scale: 1.015 }}
                  transition={{ type: "spring", stiffness: 240, damping: 18 }}
                  className="p-4 sm:p-4.5 rounded-[24px] clay-card-surface border border-white/[0.06] hover:border-[#7C3AED]/40 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-xl bg-[#7C3AED]/20 clay-icon-bubble flex items-center justify-center">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#7C3AED]" />
                      </div>
                      <span className={`text-xs font-extrabold text-white text-clay-3d ${isBn ? "font-bangla-ui" : "font-display"}`}>
                        {isBn ? "টেলিমেডিসিন ও ডক্টর স্লট বুকিং" : "Telehealth & Clinic Scheduling"}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-[#A78BFA] bg-[#7C3AED]/15 px-2.5 py-1 rounded-full shadow-[inset_1px_1px_2px_rgba(255,255,255,0.15)]">
                      SOCKET SYNC
                    </span>
                  </div>
                  <p className={`text-xs text-neutral-400 pl-9.5 ${isBn ? "font-bangla-body" : ""}`}>
                    {isBn 
                    ? "৩ ধাপে অনলাইন সিরিয়াল, ডাক্তারের সময়সূচী ড্যাশবোর্ড ও রোগীর মেডিকেল হিস্ট্রি পোর্টাল।" 
                    : "Multi-slot appointment sync, doctor availability matrix & cloud patient records."}
                  </p>
                </motion.div>

                {/* Module 3: Enterprise Cloud & Custom Dashboards (Mint Clay Accent) */}
                <motion.div 
                  whileHover={{ y: -3, scale: 1.015 }}
                  transition={{ type: "spring", stiffness: 240, damping: 18 }}
                  className="p-4 sm:p-4.5 rounded-[24px] clay-card-surface border border-white/[0.06] hover:border-[#10B981]/40 transition-colors"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-7 h-7 rounded-xl bg-[#10B981]/20 clay-icon-bubble flex items-center justify-center">
                        <span className="w-2.5 h-2.5 rounded-full bg-[#10B981]" />
                      </div>
                      <span className={`text-xs font-extrabold text-white text-clay-3d ${isBn ? "font-bangla-ui" : "font-display"}`}>
                        {isBn ? "এন্টারপ্রাইজ ক্লাউড ও অ্যানালিটিক্স" : "Enterprise Cloud Analytics"}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono font-bold text-[#34D399] bg-[#10B981]/15 px-2.5 py-1 rounded-full shadow-[inset_1px_1px_2px_rgba(255,255,255,0.15)]">
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
              <div className="mt-5 p-3 rounded-2xl clay-inset flex items-center justify-between text-[11px] text-neutral-400 font-mono">
                <span>Next.js 16 • React 19 • Node • Clay UI</span>
                <span className="text-[#FF8B66] font-bold">100% Tactile Engineering</span>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
