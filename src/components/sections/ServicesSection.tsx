"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function ServicesSection() {
  const { language } = useLanguage();
  const isBn = language === "bn";

  const checklist = isBn
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

  return (
    <section id="services" className="relative py-10 sm:py-14 overflow-hidden scroll-mt-20">
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/2 -left-[10%] w-[450px] h-[450px] bg-[#EC4899]/[0.08] blur-[140px] rounded-full pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/3 -right-[10%] w-[450px] h-[450px] bg-[#F59E0B]/[0.08] blur-[140px] rounded-full pointer-events-none" 
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
            <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
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
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#18181F] border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#F59E0B]/50 transition-colors shadow-inner mt-0.5">
                    <Check className="w-3.5 h-3.5 text-[#F59E0B]" strokeWidth={3} />
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

            {/* Dark Pill Button with a Border ("LEARN MORE ↗") */}
            <div className="pt-1">
              <a href="#projects">
                <motion.button 
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  className={`border border-white/20 hover:border-[#F59E0B]/60 text-white hover:text-white bg-white/[0.04] hover:bg-white/[0.08] backdrop-blur-md rounded-full px-7 py-3.5 text-xs font-bold tracking-[0.16em] uppercase transition-all duration-300 shadow-sm hover:shadow-[0_0_25px_rgba(245,158,11,0.2)] flex items-center gap-2 group cursor-pointer ${isBn ? "font-bangla-ui" : ""}`}
                >
                  <span>{isBn ? "বিস্তারিত কাজ দেখুন" : "LEARN MORE"}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#F59E0B] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </motion.button>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Rich Glowing Isometric 3D Composition */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative flex justify-center items-center"
          >
            {/* Ambient backlight glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#EC4899]/25 via-[#F59E0B]/20 to-transparent blur-[80px] rounded-full scale-90 pointer-events-none" />

            {/* Main composition card */}
            <div className="relative w-full rounded-3xl overflow-hidden border border-white/10 bg-[#121217]/80 backdrop-blur-2xl shadow-[0_30px_80px_rgba(0,0,0,0.8)] group hover:border-white/20 transition-all duration-500 p-2 sm:p-2.5">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src="/images/services-isometric-3d.jpg"
                  alt="Webzen BD Engineering & 3D Interactive Architecture"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Floating Micro-Badges for Depth */}
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="absolute top-4 left-4 bg-black/65 backdrop-blur-md border border-white/15 rounded-full px-3.5 py-1.5 flex items-center gap-2 shadow-lg"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] font-bold text-white tracking-wide font-mono">Next.js 16 + React 19</span>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="absolute bottom-4 right-4 bg-black/65 backdrop-blur-md border border-white/15 rounded-full px-3.5 py-1.5 flex items-center gap-2 shadow-lg"
                >
                  <span className={`text-[11px] font-bold text-white tracking-wide ${isBn ? "font-bangla-ui" : ""}`}>
                    {isBn ? "৯৯.৯% আপটাইম SLA" : "99.9% Uptime SLA"}
                  </span>
                  <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                </motion.div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
