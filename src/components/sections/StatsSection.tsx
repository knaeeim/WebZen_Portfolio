"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useSite } from "@/context/SiteContext";

export function StatsSection() {
  const { language } = useLanguage();
  const { data } = useSite();
  const isBn = language === "bn";

  const contactPhone = data?.footer?.phone || data?.contact?.phone || "+880 1886-932936";
  const rawWhatsapp = data?.contact?.whatsapp || "+8801886932936";
  const whatsappNumber = rawWhatsapp.replace(/[^0-9]/g, "");

  return (
    <section id="metrics" className="relative py-24 sm:py-32 overflow-hidden scroll-mt-20 bg-[#050505] z-10">
      
      {/* ═══ Vertical Golden/Amber Light Stream (Image 3 inspired) ═══ */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[4px] h-full pointer-events-none z-0">
        <div className="w-full h-full bg-gradient-to-b from-[#FFA000] via-[#FF6A00] to-transparent opacity-80 blur-[2px] animate-beam-breathe" />
      </div>
      <div className="absolute top-0 left-[calc(50%-18px)] w-[2px] h-full pointer-events-none z-0 opacity-50 blur-[1px]">
        <div className="w-full h-full bg-gradient-to-b from-[#FFA000] via-[#FF8A00] to-transparent animate-beam-breathe" />
      </div>
      <div className="absolute top-0 left-[calc(50%+18px)] w-[2px] h-full pointer-events-none z-0 opacity-50 blur-[1px]">
        <div className="w-full h-full bg-gradient-to-b from-[#FFA000] via-[#FF8A00] to-transparent animate-beam-breathe" />
      </div>

      {/* Massive warm amber/copper light diffusion pool */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[500px] pointer-events-none rounded-full"
        style={{
          background: "radial-gradient(ellipse at center, rgba(255, 149, 0, 0.22) 0%, rgba(234, 88, 12, 0.12) 40%, transparent 75%)",
          filter: "blur(90px)",
        }}
        aria-hidden="true" 
      />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 z-10 flex flex-col items-center">
        
        {/* Top Floating Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-radiant-pill border border-[#FFA000]/30 text-neutral-300 mb-12 sm:mb-16 shadow-[0_4px_20px_rgba(255,160,0,0.2)]"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#FFA000]" />
          <span className={`text-[11px] font-semibold tracking-[0.2em] uppercase text-neutral-200 ${isBn ? "font-bangla-ui tracking-normal" : ""}`}>
            {isBn ? "পরিমাপযোগ্য ফলাফল ও ট্র্যাক রেকর্ড" : "PROVEN IMPACT & METRICS"}
          </span>
        </motion.div>

        {/* ═══ 3D Tactile Stat Blocks (Image 3: Chunky Translucent Amber Squircles) ═══ */}
        <div className="relative w-full max-w-2xl mx-auto flex flex-col items-center justify-center my-4 sm:my-6">
          
          {/* 1. Top Center Squircle Block (Overlapping Vertical Beam) */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="z-20 -mb-6 sm:-mb-8 animate-float-1"
          >
            <div className="squircle-3d-amber w-56 sm:w-64 h-48 sm:h-52 p-6 flex flex-col items-center justify-center text-center cursor-default">
              <div className={`text-4xl sm:text-5xl font-black text-white tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)] ${isBn ? "font-bangla-display font-black" : "font-display font-black"}`}>
                {isBn ? "২৫০+" : "250+"}
              </div>
              <div className={`mt-2 text-xs sm:text-sm font-semibold text-neutral-200 leading-snug max-w-[160px] ${isBn ? "font-bangla-ui" : ""}`}>
                {isBn ? "সফল লাইভ ওয়েবসাইট ও ওয়েব আর্কিটেকচার" : "Live Web Platforms Delivered"}
              </div>
            </div>
          </motion.div>

          {/* 2. Dual Bottom Squircles (Left & Right Flanking the Vertical Light Stream) */}
          <div className="grid grid-cols-2 gap-4 sm:gap-8 w-full max-w-xl z-10">
            
            {/* Left Squircle */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
              className="flex justify-end animate-float-2"
            >
              <div className="squircle-3d-amber w-full sm:w-60 h-44 sm:h-48 p-5 flex flex-col items-center justify-center text-center cursor-default">
                <div className={`text-3xl sm:text-4xl font-black text-white tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)] ${isBn ? "font-bangla-display font-black" : "font-display font-black"}`}>
                  {isBn ? "১০০+" : "100+"}
                </div>
                <div className={`mt-2 text-xs sm:text-[13px] font-semibold text-neutral-200 leading-snug max-w-[140px] ${isBn ? "font-bangla-ui" : ""}`}>
                  {isBn ? "সন্তুষ্ট দেশি ও আন্তর্জাতিক ক্লায়েন্ট" : "Happy Global Clients"}
                </div>
              </div>
            </motion.div>

            {/* Right Squircle */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
              className="flex justify-start animate-float-3"
            >
              <div className="squircle-3d-amber w-full sm:w-60 h-44 sm:h-48 p-5 flex flex-col items-center justify-center text-center cursor-default">
                <div className={`text-3xl sm:text-4xl font-black text-white tracking-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.8)] ${isBn ? "font-bangla-display font-black" : "font-display font-black"}`}>
                  {isBn ? "৯৯.৯%" : "99.9%"}
                </div>
                <div className={`mt-2 text-xs sm:text-[13px] font-semibold text-neutral-200 leading-snug max-w-[140px] ${isBn ? "font-bangla-ui" : ""}`}>
                  {isBn ? "আপটাইম রেট ও এন্টারপ্রাইজ SLA" : "Production Uptime & Reliability"}
                </div>
              </div>
            </motion.div>

          </div>

        </div>

        {/* ═══ Bottom Headline & Amber Pill CTA (Image 3 pattern) ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center mt-12 sm:mt-16 max-w-2xl"
        >
          <h2 className={`text-2xl sm:text-4xl lg:text-5xl text-white font-black tracking-tight leading-snug ${isBn ? "font-bangla-display" : "font-display"}`}>
            {isBn ? (
              <>
                আপনার ব্যবসার জন্য পান সত্যিকারের <span className="text-gradient-amber">প্রিমিয়াম ওয়েব ইঞ্জিনিয়ারিং</span>
              </>
            ) : (
              <>
                Experience Real Engineering <span className="text-gradient-amber">Precision for Your Business</span>
              </>
            )}
          </h2>

          <div className="mt-8 flex justify-center">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                isBn
                  ? "আসসালামু আলাইকুম WebZen Bangladesh, আমি আপনাদের টেকনিক্যাল লিডের সাথে আলোচনা করতে চাই।"
                  : "Hello WebZen Bangladesh team, I would like to consult with your lead engineer."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`pill-btn-amber group pl-7 pr-3 py-3 text-xs sm:text-sm font-bold tracking-wider uppercase flex items-center gap-4 ${
                  isBn ? "font-bangla-ui text-sm tracking-normal" : ""
                }`}
              >
                <span>{isBn ? "টেকনিক্যাল লিডের সাথে কথা বলুন" : "Talk to Our Lead Engineer"}</span>
                <span className="w-8 h-8 rounded-full bg-white/25 flex items-center justify-center group-hover:rotate-45 transition-transform duration-300 shadow-inner">
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </span>
              </motion.button>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
