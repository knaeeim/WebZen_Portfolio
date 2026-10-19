"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useSite } from "@/context/SiteContext";

export function StatsSection() {
  const { language } = useLanguage();
  const { data } = useSite();
  const isBn = language === "bn";

  const fallbackMetrics = isBn
    ? [
        { value: "১০০+", label: "হ্যাপি ক্লায়েন্ট" },
        { value: "২৫০+", label: "লাইভ ওয়েবসাইট" },
        { value: "৯৯.৯%", label: "আপটাইম রেট" },
        { value: "২৪/৭", label: "টেকনিক্যাল সাপোর্ট" },
      ]
    : [
        { value: "100+", label: "Happy Clients" },
        { value: "250+", label: "Live Websites" },
        { value: "99.9%", label: "Uptime Rate" },
        { value: "24/7", label: "Tech Support" },
      ];

  const metrics = (data?.stats && data.stats.length > 0)
    ? data.stats.slice(0, 4).map((s) => ({
        value: isBn
          ? (s.valueTextBn || (s.valueText ? s.valueText.replace(/[0-9]/g, (d) => "০১২৩৪৫৬৭৮৯"[+d]) : `${s.value}${s.suffix || ""}`.replace(/[0-9]/g, (d) => "০১২৩৪৫৬৭৮৯"[+d])))
          : (s.valueText || `${s.value}${s.suffix || ""}`),
        label: isBn && s.labelBn ? s.labelBn : s.label,
      }))
    : fallbackMetrics;

  return (
    <section id="metrics" className="relative w-full py-2 sm:py-4 my-0 overflow-hidden scroll-mt-20 z-10 bg-[#000000]">
      {/* Ambient Glow Behind the Strip - Studio Amber/Golden Gradient */}
      <div 
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[160px] bg-gradient-to-r from-[#FFB800]/[0.08] via-[#F59E0B]/[0.06] to-[#EA7814]/[0.06] blur-[100px] pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Full-Width Horizontal Strip */}
      <div className="relative w-full bg-[#050505]/95 backdrop-blur-2xl border-y border-white/[0.08] py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10 text-center divide-y sm:divide-y-0 sm:divide-x divide-white/[0.08]">
            {metrics.map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className={`flex flex-col items-center justify-center ${idx > 1 ? "pt-5 sm:pt-0" : ""}`}
              >
                {/* Large Bold White Number with Golden Drop-Shadow */}
                <div className={`text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight drop-shadow-[0_4px_24px_rgba(255,184,0,0.2)] ${isBn ? "font-bangla-display font-black" : "font-display font-black"}`}>
                  {metric.value}
                </div>

                {/* Muted Gray Label */}
                <div className={`text-xs sm:text-xs text-neutral-400 font-bold tracking-[0.2em] uppercase mt-2 ${isBn ? "font-bangla-ui" : ""}`}>
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
