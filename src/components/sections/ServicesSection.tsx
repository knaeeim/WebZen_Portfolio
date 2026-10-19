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
    <section id="services" className="relative py-10 sm:py-14 overflow-hidden scroll-mt-20">
      {/* Background ambient lighting - Soft & Gentle matching WebZen Logo */}
      <div 
        className="absolute top-1/2 -left-[10%] w-[450px] h-[450px] bg-[#0EA5E9]/[0.06] blur-[150px] rounded-full pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/3 -right-[10%] w-[450px] h-[450px] bg-[#10B981]/[0.05] blur-[150px] rounded-full pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title: "Our Services" Centered in Bold White */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 mb-3"
          >
            <span className="w-2 h-2 rounded-full bg-[#06B6D4]" />
            <span className={`text-[11px] font-bold tracking-[0.2em] uppercase text-neutral-300 ${isBn ? "font-bangla-ui" : ""}`}>
              {isBn ? "সার্ভিস ও ক্যাপাবিলিটিজ" : "SOLUTIONS & CAPABILITIES"}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className={`text-3xl sm:text-5xl md:text-6xl text-white tracking-tight ${isBn ? "font-bangla-display font-extrabold" : "font-display font-black"}`}
          >
            {isBn ? "আমাদের সার্ভিস" : "Our Services"}
          </motion.h2>
        </div>

        {/* Split Feature Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Paragraph, Checklist & Dark Pill Button */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="space-y-3">
              <h3 className={`text-2xl sm:text-4xl text-white tracking-tight leading-snug ${isBn ? "font-bangla-display font-bold" : "font-display font-black"}`}>
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

            {/* Vertical Checklist with Subtle Dark Circular Checkmark Icons */}
            <div className="space-y-3 pt-1">
              {checklist.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 + idx * 0.1 }}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-3.5 p-3.5 sm:p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/15 transition-all duration-300 group"
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#18181F] border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#06B6D4]/50 transition-colors shadow-inner mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#06B6D4]" strokeWidth={3} />
                  </div>
                  <div>
                    <h4 className={`text-white text-base tracking-wide group-hover:text-neutral-100 transition-colors ${isBn ? "font-bangla-display font-bold" : "font-display font-bold"}`}>
                      {item.title}
                    </h4>
                    <p className={`text-xs sm:text-sm text-neutral-400 mt-1 leading-normal ${isBn ? "font-bangla-body" : ""}`}>
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Dark Pill Button with a Border ("LEARN MORE ↗") with Smooth Scroll */}
            <div className="pt-1">
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
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`border border-white/20 hover:border-[#06B6D4]/60 text-white hover:text-white bg-white/[0.04] hover:bg-white/[0.08] backdrop-blur-md rounded-full px-7 py-3.5 text-xs font-bold tracking-[0.16em] uppercase transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(6,182,212,0.18)] flex items-center gap-2 group cursor-pointer ${isBn ? "font-bangla-ui" : ""}`}
                >
                  <span>{isBn ? "বিস্তারিত কাজ দেখুন" : "LEARN MORE"}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#06B6D4] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </motion.button>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Bespoke Interactive Product Suite & Engineering Matrix */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative flex justify-center items-center"
          >
            {/* Ambient backlight glow - Soft & Subtle */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#0EA5E9]/12 via-[#06B6D4]/08 to-transparent blur-[80px] rounded-full scale-90 pointer-events-none" />

            {/* Bespoke Interactive Software Interface Card */}
            <div className="relative w-full rounded-3xl overflow-hidden border border-white/10 bg-[#121217]/90 backdrop-blur-2xl shadow-[0_30px_80px_rgba(0,0,0,0.8)] group hover:border-white/20 transition-all duration-500 p-5 sm:p-6">
              
              {/* Window Controls & Live System Indicator */}
              <div className="flex items-center justify-between pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                </div>
                <div className="flex items-center gap-2 text-[10px] font-mono text-neutral-400 bg-white/[0.04] px-3 py-1 rounded-full border border-white/5">
                  <span className="w-2 h-2 rounded-full bg-[#06B6D4] animate-pulse" />
                  <span>WEBZEN ARCHITECTURE SUITE</span>
                </div>
              </div>

              {/* Interactive Live Architecture Modules */}
              <div className="pt-5 space-y-4">
                
                {/* Module 1: E-Commerce & bKash Instant Engine (Mint Teal) */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-emerald-500/30 transition-all duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span className={`text-xs font-bold text-white ${isBn ? "font-bangla-ui" : "font-display"}`}>
                        {isBn ? "ই-কমার্স ও বিকাশ অটোমেটেড গেটওয়ে" : "E-Commerce & bKash Gateway"}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-md border border-emerald-400/20">
                      LIVE • 0.3s TTFB
                    </span>
                  </div>
                  <p className={`text-xs text-neutral-400 ${isBn ? "font-bangla-body" : ""}`}>
                    {isBn 
                    ? "ইনস্ট্যান্ট পেমেন্ট ভেরিফিকেশন, রিয়েল-টাইম এসএমএস নোটিফিকেশন ও অটোমেটিক ইনভয়েস।" 
                    : "Direct payment reconciliation, automated SMS receipts & real-time webhook triggers."}
                  </p>
                </div>

                {/* Module 2: Telehealth & Booking Pipeline (Azure Blue) */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-[#0EA5E9]/30 transition-all duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#0EA5E9]" />
                      <span className={`text-xs font-bold text-white ${isBn ? "font-bangla-ui" : "font-display"}`}>
                        {isBn ? "টেলিমেডিসিন ও ডক্টর স্লট বুকিং" : "Telehealth & Clinic Scheduling"}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-[#0EA5E9] bg-[#0EA5E9]/10 px-2 py-0.5 rounded-md border border-[#0EA5E9]/20">
                      SOCKET SYNC
                    </span>
                  </div>
                  <p className={`text-xs text-neutral-400 ${isBn ? "font-bangla-body" : ""}`}>
                    {isBn 
                    ? "৩ ধাপে অনলাইন সিরিয়াল, ডাক্তারের সময়সূচী ড্যাশবোর্ড ও রোগীর মেডিকেল হিস্ট্রি পোর্টাল।" 
                    : "Multi-slot appointment sync, doctor availability matrix & cloud patient records."}
                  </p>
                </div>

                {/* Module 3: Enterprise Cloud & Custom Dashboards (Electric Cyan) */}
                <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/[0.07] hover:border-[#06B6D4]/30 transition-all duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#06B6D4]" />
                      <span className={`text-xs font-bold text-white ${isBn ? "font-bangla-ui" : "font-display"}`}>
                        {isBn ? "এন্টারপ্রাইজ ক্লাউড ও অ্যানালিটিক্স" : "Enterprise Cloud Analytics"}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-[#06B6D4] bg-[#06B6D4]/10 px-2 py-0.5 rounded-md border border-[#06B6D4]/20">
                      99.99% UPTIME
                    </span>
                  </div>
                  <p className={`text-xs text-neutral-400 ${isBn ? "font-bangla-body" : ""}`}>
                    {isBn 
                    ? "৫০,০০০+ কনকারেন্ট কানেকশন ক্যাপাবিলিটি, ডায়নামিক ডেটা ফিল্টারিং ও রোল-বেসড সিকিউরিটি।" 
                    : "50,000+ concurrent connection throughput, role-based access & encrypted databases."}
                  </p>
                </div>

              </div>

              {/* Bottom Engineering Tagline */}
              <div className="mt-4 pt-3.5 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-neutral-500 font-mono">
                <span>Next.js 16 • React 19 • Node • MongoDB</span>
                <span className="text-neutral-400 font-bold">100% Bespoke Code</span>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
