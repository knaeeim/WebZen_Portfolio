"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { motion } from "framer-motion";
import { 
  Compass, 
  Layers, 
  Cpu, 
  ShieldCheck, 
  Flame, 
  Workflow, 
  Clock,
  ArrowRight
} from "lucide-react";

export function ProcessSection() {
  const { language } = useLanguage();
  const t = translations[language].process;
  const isBn = language === "bn";

  const stepsData = isBn
    ? [
        {
          step: "০১",
          title: "আইডিয়া ও আর্কিটেকচার",
          description: "আপনার ব্যবসার লক্ষ্য, রিকোয়ারমেন্টস এবং সিস্টেম আর্কিটেকচার নিয়ে নিখুঁত পরিকল্পনা।",
          icon: Compass,
          duration: "সপ্তাহ ১",
        },
        {
          step: "০২",
          title: "ইন্টারেক্টিভ প্রিভিউ",
          description: "কোডিংয়ে যাওয়ার আগেই ফিগমাতে ওয়েবসাইটের সম্পূর্ণ প্রিভিউ ও রেসপনসিভ ফ্লো নিশ্চিতকরণ।",
          icon: Layers,
          duration: "সপ্তাহ ২ - ৩",
        },
        {
          step: "০৩",
          title: "এজাইল কোডিং ও ইন্টিগ্রেশন",
          description: "আধুনিক Next.js ফ্রেমওয়ার্ক, বিকাশ-নগদ পেমেন্ট সেটআপ এবং নিয়মিত লাইভ ডেমো আপডেট।",
          icon: Cpu,
          duration: "সপ্তাহ ৪ - ৮",
        },
        {
          step: "০৪",
          title: "সিকিউরিটি ও পারফরম্যান্স",
          description: "সব ডিভাইসে স্পিড চেক, পেমেন্ট টেস্টিং এবং সাব-সেকেন্ড পেজ লোড অপটিমাইজেশন।",
          icon: ShieldCheck,
          duration: "সপ্তাহ ৯",
        },
        {
          step: "০৫",
          title: "পাবলিক লঞ্চ ও ২৪/৭ সাপোর্ট",
          description: "ডোমেইন কানেক্ট করে সাইট লাইভ করা, সম্পূর্ণ কোড ও কন্ট্রোল বুঝিয়ে দেওয়া আর সার্বক্ষণিক সহায়তা।",
          icon: Flame,
          duration: "লাইভ",
        },
      ]
    : [
        {
          step: "01",
          title: "Discovery & Blueprint",
          description: "Understanding your business goals, timeline, and architectural roadmap.",
          icon: Compass,
          duration: "Week 1",
        },
        {
          step: "02",
          title: "Interactive Prototyping",
          description: "Full visual prototype in Figma with responsive flows before code begins.",
          icon: Layers,
          duration: "Week 2 - 3",
        },
        {
          step: "03",
          title: "Agile Engineering",
          description: "Next.js architecture, payment gateways, and weekly live progress staging.",
          icon: Cpu,
          duration: "Week 4 - 8",
        },
        {
          step: "04",
          title: "Security & QA Hardening",
          description: "Cross-device responsiveness, payment verification, and speed optimization.",
          icon: ShieldCheck,
          duration: "Week 9",
        },
        {
          step: "05",
          title: "Launch & 24/7 SLA",
          description: "Smooth public release, production deployment, and ongoing proactive maintenance.",
          icon: Flame,
          duration: "Ongoing",
        },
      ];

  return (
    <section id="process" className="relative py-20 sm:py-28 overflow-hidden scroll-mt-20 bg-[#060813]">
      {/* Background ambient lighting - Soft Aurora Indigo & Teal */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-[#2DD4BF]/[0.05] via-[#818CF8]/[0.05] to-[#C084FC]/[0.05] blur-[170px] rounded-full pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-zen-pill text-neutral-300 mb-4"
          >
            <Workflow className="w-3.5 h-3.5 text-[#2DD4BF]" />
            <span className={`text-[11px] font-semibold tracking-[0.2em] uppercase text-neutral-200 ${isBn ? "font-bangla-ui tracking-normal" : ""}`}>
              {isBn ? "আমাদের কাজের পদ্ধতি" : "OUR METHODOLOGY"}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ type: "spring", stiffness: 220, damping: 18, delay: 0.08 }}
            className={`text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-none ${isBn ? "font-bangla-display font-black" : "font-display font-black"}`}
          >
            {isBn ? (
              <>
                যেভাবে আমরা আপনার <span className="text-gradient-aurora">প্রজেক্ট সম্পন্ন করি</span>
              </>
            ) : (
              <>
                Engineered for <span className="text-gradient-aurora">Frictionless Delivery</span>
              </>
            )}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ type: "spring", stiffness: 220, damping: 18, delay: 0.15 }}
            className={`mt-3.5 text-sm sm:text-base text-neutral-400 font-normal leading-relaxed ${isBn ? "font-bangla-body" : ""}`}
          >
            {isBn
              ? "পরিকল্পনা থেকে শুরু করে লাইভ লঞ্চ—প্রতিটি ধাপে স্বচ্ছতা, সর্বোচ্চ গতি এবং আন্তর্জাতিক মান বজায় রাখি।"
              : "From initial discovery to final public deployment, our agile engineering process guarantees transparency and performance."}
          </motion.p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5 sm:gap-6">
          {stepsData.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.step || idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ type: "spring", stiffness: 220, damping: 18, delay: idx * 0.08 }}
                whileHover={{ y: -6 }}
                className="glass-zen rounded-[28px] p-6 relative flex flex-col justify-between group border border-white/[0.08] hover:border-[#2DD4BF]/35 shadow-[0_16px_36px_rgba(0,0,0,0.4)] transition-all duration-300"
              >
                {/* Step indicator watermark */}
                <div className="text-4xl font-black text-white/[0.04] absolute top-4 right-5 group-hover:text-[#2DD4BF]/15 transition-colors font-mono select-none">
                  {step.step}
                </div>

                <div>
                  {/* Step Icon */}
                  <div className="w-11 h-11 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-5 group-hover:scale-110 group-hover:border-[#2DD4BF]/40 group-hover:bg-[#2DD4BF]/10 transition-all">
                    <Icon className="w-5 h-5 text-[#2DD4BF]" />
                  </div>

                  <div className="flex items-center gap-1.5 text-[10px] font-mono font-semibold text-[#2DD4BF] bg-[#2DD4BF]/10 px-2.5 py-0.5 rounded-full border border-[#2DD4BF]/20 w-fit mb-3">
                    <Clock className="w-3 h-3" />
                    <span>{step.duration}</span>
                  </div>

                  <h3 className={`text-base font-bold text-white group-hover:text-[#2DD4BF] transition-colors leading-snug ${isBn ? "font-bangla-display" : "font-display"}`}>
                    {step.title}
                  </h3>

                  <p className={`mt-2.5 text-xs text-neutral-400 leading-relaxed font-normal ${isBn ? "font-bangla-body" : ""}`}>
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-3.5 border-t border-white/[0.06] flex items-center justify-between text-[10px] text-neutral-400 font-mono">
                  <span>PHASE {step.step}</span>
                  <span className="text-[#2DD4BF] font-semibold">MILESTONE</span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
