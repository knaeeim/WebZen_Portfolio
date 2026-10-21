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
    <section id="metrics" className="relative w-full py-6 sm:py-10 my-0 overflow-hidden scroll-mt-20 z-10 bg-[#0F1117]">
      {/* Ambient Glow Behind the Pods - Soft Coral & Violet */}
      <div 
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[180px] bg-gradient-to-r from-[#FF5C35]/[0.08] via-[#7C3AED]/[0.06] to-[#10B981]/[0.06] blur-[100px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 text-center">
          {metrics.map((metric, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ type: "spring", stiffness: 220, damping: 18, delay: idx * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="clay-card-surface p-6 sm:p-7 rounded-[28px] sm:rounded-[32px] flex flex-col items-center justify-center cursor-default group"
            >
              {/* Large Inflated Bold Number with 3D Depth */}
              <div className={`text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight text-clay-3d group-hover:text-[#FF8B66] transition-colors ${isBn ? "font-bangla-display font-black" : "font-display font-black"}`}>
                {metric.value}
              </div>

              {/* Muted Pill Tag with Soft Clay Inset */}
              <div className={`mt-3 px-3 py-1 rounded-full bg-[#14161F] clay-pill text-[10px] sm:text-xs text-neutral-300 font-extrabold tracking-[0.16em] uppercase ${isBn ? "font-bangla-ui" : ""}`}>
                {metric.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
