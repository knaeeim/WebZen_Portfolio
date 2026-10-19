"use client";

import React from "react";
import { motion } from "framer-motion";

export function StatsSection() {
  const metrics = [
    { value: "100+", label: "Happy Clients" },
    { value: "250+", label: "Live Websites" },
    { value: "99.9%", label: "Uptime Rate" },
    { value: "24/7", label: "Tech Support" },
  ];

  return (
    <section id="metrics" className="relative w-full py-16 sm:py-20 my-8 overflow-hidden scroll-mt-24 z-10">
      {/* Warm Ambient Glow Behind the Strip */}
      <div 
        className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[180px] bg-gradient-to-r from-[#F59E0B]/15 via-[#EC4899]/15 to-[#EF4444]/15 blur-[100px] pointer-events-none" 
        aria-hidden="true" 
      />

      {/* Full-Width Horizontal Strip */}
      <div className="relative w-full bg-[#111116]/80 backdrop-blur-2xl border-y border-white/10 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 text-center divide-y sm:divide-y-0 sm:divide-x divide-white/[0.06]">
            {metrics.map((metric, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className={`flex flex-col items-center justify-center ${idx > 1 ? "pt-6 sm:pt-0" : ""}`}
              >
                {/* Large Bold White Number */}
                <div className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight drop-shadow-[0_4px_24px_rgba(0,0,0,0.6)]">
                  {metric.value}
                </div>

                {/* Muted Gray Label */}
                <div className="text-xs sm:text-sm text-neutral-400 font-bold tracking-[0.18em] uppercase mt-2">
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
