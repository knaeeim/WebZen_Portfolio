"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useSite } from "@/context/SiteContext";

const EN_ITEMS = [
  "Web Application",
  "MERN Stack",
  "UI/UX Design",
  "Custom Dashboard",
  "E-Commerce",
  "API Architecture",
];

const BN_ITEMS = [
  "ওয়েব অ্যাপ্লিকেশন",
  "MERN স্ট্যাক",
  "UI/UX ডিজাইন",
  "কাস্টম ড্যাশবোর্ড",
  "ই-কমার্স সল্যুশন",
  "API আর্কিটেকচার",
];

export function RibbonMarquee() {
  const { language } = useLanguage();
  const { data } = useSite();
  const isBn = language === "bn";

  const customTags = isBn
    ? (data?.hero?.highlightTagsBn && data.hero.highlightTagsBn.length > 0
        ? data.hero.highlightTagsBn
        : (data?.hero?.highlightTags && data.hero.highlightTags.length > 0 ? data.hero.highlightTags : BN_ITEMS))
    : (data?.hero?.highlightTags && data.hero.highlightTags.length > 0
        ? data.hero.highlightTags
        : EN_ITEMS);

  const source = customTags;
  const items = [...source, ...source, ...source, ...source];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full overflow-hidden py-6 sm:py-8 my-2 z-20"
    >
      {/* Dark Glass Ribbon with Radiant Crimson/Amber Horizon Glow */}
      <div className="relative w-full bg-[#050505]/70 backdrop-blur-xl border-y border-white/[0.08] py-4 sm:py-5 overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
        {/* Subtle Crimson Horizon Glow */}
        <div 
          className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[35px] bg-gradient-to-r from-transparent via-[#FF3823]/15 to-transparent blur-md pointer-events-none"
        />

        <div className="animate-marquee items-center whitespace-nowrap">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center">
              <span className={`inline-flex items-center px-4 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.07] text-neutral-300 hover:text-white hover:border-[#FF3823]/40 transition-all cursor-default select-none shadow-[0_2px_10px_rgba(0,0,0,0.5)] ${
                isBn ? "font-bangla-ui font-semibold text-sm sm:text-base tracking-normal" : "font-display font-bold text-xs sm:text-sm tracking-[0.2em] uppercase"
              }`}>
                {item}
              </span>
              
              {/* Radiant Neon Star (✦) */}
              <span 
                className="mx-5 sm:mx-8 text-[#FF3823] text-sm sm:text-base select-none inline-block drop-shadow-[0_0_8px_rgba(255,56,35,0.8)]"
                aria-hidden="true"
              >
                ✦
              </span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
