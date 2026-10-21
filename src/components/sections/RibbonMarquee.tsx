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
  
  // Quadruple items to guarantee endless looping
  const items = [...source, ...source, ...source, ...source];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full overflow-hidden py-6 sm:py-8 my-2 z-20"
    >
      {/* Floating Inflated 3D Clay Ribbon Bar (-1.5deg tilt with puffed volume) */}
      <div className="-rotate-1.5 transform scale-105 w-full bg-[#181B24] border-y border-white/[0.08] py-4 sm:py-5 shadow-[0_20px_45px_rgba(0,0,0,0.7),inset_0_3px_5px_rgba(255,255,255,0.09),inset_0_-4px_8px_rgba(0,0,0,0.65)] overflow-hidden">
        <div className="animate-marquee items-center whitespace-nowrap">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center">
              <span className={`inline-flex items-center px-4 py-1.5 rounded-full bg-[#1E2230]/70 border border-white/[0.05] shadow-[inset_2px_2px_4px_rgba(255,255,255,0.08),inset_-2px_-2px_4px_rgba(0,0,0,0.4)] text-neutral-200 hover:text-white transition-all cursor-default select-none ${isBn ? "font-bangla-ui font-bold text-sm sm:text-base tracking-normal" : "font-display font-black text-xs sm:text-sm tracking-[0.2em] uppercase text-clay-3d"}`}>
                {item}
              </span>
              
              {/* Inflated 3D Coral Clay Star (✦) */}
              <span 
                className="mx-5 sm:mx-8 text-[#FF5C35] text-base sm:text-lg select-none inline-block drop-shadow-[0_4px_12px_rgba(255,92,53,0.5)] transform hover:rotate-45 transition-transform"
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
