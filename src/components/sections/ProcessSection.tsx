"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { motion } from "framer-motion";
import { 
  Compass, 
  Layers, 
  Cpu, 
  ShieldAlert, 
  Flame, 
  Workflow, 
  Clock
} from "lucide-react";

export function ProcessSection() {
  const { language } = useLanguage();
  const t = translations[language].process;

  const stepsData = language === "bn"
    ? [
        {
          step: "০১",
          title: "আইডিয়া ও পরিকল্পনা",
          description: "আপনার ব্যবসার লক্ষ্য, কী কী ফিচার লাগবে আর বাজেট নিয়ে সরাসরি বিস্তারিত আলোচনা।",
          icon: "Compass",
          duration: "সপ্তাহ ১",
        },
        {
          step: "০২",
          title: "ডিজাইন ও প্রিভিউ",
          description: "কোডিংয়ে যাওয়ার আগেই ফিগমাতে ওয়েবসাইটের সম্পূর্ণ প্রিভিউ বানিয়ে নিই, যাতে পছন্দ হলে তবেই কাজ শুরু হয়।",
          icon: "Layers",
          duration: "সপ্তাহ ২ - ৩",
        },
        {
          step: "০৩",
          title: "ডেভেলপমেন্ট ও কোডিং",
          description: "আধুনিক কোডিং, বিকাশ-নগদ পেমেন্ট সেটআপ এবং প্রতি সপ্তাহে আপনাকে কাজের লাইভ ডেমো দেখানো।",
          icon: "Cpu",
          duration: "সপ্তাহ ৪ - ৮",
        },
        {
          step: "০৪",
          title: "টেস্টিং ও স্পিড চেক",
          description: "সব ধরনের ফোন ও কম্পিউটারে স্পিড চেক, পেমেন্ট টেস্টিং এবং কোনো বাগ আছে কি না পুঙ্খানুপুঙ্খ যাচাই।",
          icon: "ShieldAlert",
          duration: "সপ্তাহ ৯",
        },
        {
          step: "০৫",
          title: "লাইভ লঞ্চ ও হ্যান্ডওভার",
          description: "ডোমেইন কানেক্ট করে সাইট লাইভ করা, সম্পূর্ণ কোড ও কন্ট্রোল বুঝিয়ে দেওয়া আর ৩০ দিনের ফ্রি সাপোর্ট।",
          icon: "Flame",
          duration: "লাইভ",
        },
      ]
    : [
        {
          step: "01",
          title: "Discovery & Blueprint",
          description: "Understanding your business goals, timeline, and architectural roadmap.",
          icon: "Compass",
          duration: "Week 1",
        },
        {
          step: "02",
          title: "Interactive Prototyping",
          description: "Full visual prototype in Figma with responsive flows before code begins.",
          icon: "Layers",
          duration: "Week 2 - 3",
        },
        {
          step: "03",
          title: "Agile Development",
          description: "Bi-weekly staging demos, clean code architecture, and continuous updates.",
          icon: "Cpu",
          duration: "Week 4 - 8",
        },
        {
          step: "04",
          title: "Security & QA Hardening",
          description: "Mobile cross-browser checks, payment verification, and speed optimization.",
          icon: "ShieldAlert",
          duration: "Week 9",
        },
        {
          step: "05",
          title: "Launch & 24/7 SLA",
          description: "Smooth public release, domain setup, and ongoing proactive maintenance.",
          icon: "Flame",
          duration: "Ongoing",
        },
      ];

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case "Compass":
        return <Compass className="w-5 h-5 text-cyan-400" />;
      case "Layers":
        return <Layers className="w-5 h-5 text-purple-400" />;
      case "Cpu":
        return <Cpu className="w-5 h-5 text-blue-400" />;
      case "ShieldAlert":
        return <ShieldAlert className="w-5 h-5 text-emerald-400" />;
      case "Flame":
        return <Flame className="w-5 h-5 text-amber-400" />;
      default:
        return <Workflow className="w-5 h-5 text-cyan-400" />;
    }
  };

  return (
    <section id="process" className="relative py-28 overflow-hidden dark:bg-black/30 border-y border-cyan-500/15 dark:border-white/[0.05] scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Workflow className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-normal leading-[1.35] sm:leading-[1.3] pb-1">
            <span className="inline-block">{t.heading}</span>{" "}
            <span className="text-gradient-cyan inline-block mx-1.5">{t.headingGradient}</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            {t.subheading}
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stepsData.map((step, idx) => (
            <motion.div
              key={step.step || idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const, delay: idx * 0.08 }}
              className="glass-card rounded-3xl p-6 relative flex flex-col justify-between group border border-cyan-500/15 dark:border-white/10 hover:border-cyan-500/40"
            >
              {/* Step indicator watermark */}
              <div className="text-4xl font-black text-slate-900/5 dark:text-white/5 absolute top-4 right-4 group-hover:text-cyan-500/10 transition-colors font-mono">
                {step.step}
              </div>

              <div>
                {/* Step Icon */}
                <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-white/[0.04] border border-cyan-500/20 dark:border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-cyan-500/40 transition-transform">
                  {getStepIcon(step.icon)}
                </div>

                <div className="flex items-center gap-2 text-[11px] font-semibold text-cyan-600 dark:text-cyan-400 mb-2">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{step.duration}</span>
                </div>

                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors leading-snug">
                  {step.title}
                </h3>

                <p className="mt-3 text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-white/[0.08] flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400 font-mono">
                <span>{t.phase} {step.step}</span>
                <span className="text-cyan-600 dark:text-cyan-400">{t.milestone}</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
