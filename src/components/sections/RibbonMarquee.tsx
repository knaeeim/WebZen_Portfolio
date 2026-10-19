"use client";

import React from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

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
  const isBn = language === "bn";
  const source = isBn ? BN_ITEMS : EN_ITEMS;
  
  // Quadruple items to guarantee endless looping
  const items = [...source, ...source, ...source, ...source];

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="relative w-full overflow-hidden py-4 sm:py-6 my-1 z-20"
    >
      {/* Tilted Angled Ribbon (-3deg) */}
      <div className="-rotate-3 transform scale-105 w-full bg-[#101015] border-y border-white/10 py-3.5 sm:py-4 shadow-[0_15px_40px_rgba(0,0,0,0.8)] overflow-hidden">
        <div className="animate-marquee items-center whitespace-nowrap">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center">
              <span className={`uppercase text-neutral-200 hover:text-white transition-colors cursor-default ${isBn ? "font-bangla-ui font-bold text-sm sm:text-base tracking-normal" : "font-display font-black text-xs sm:text-sm lg:text-base tracking-[0.2em]"}`}>
                {item}
              </span>
              
              {/* Soft Cyan 4-point Star (✦) matching logo */}
              <span 
                className="mx-5 sm:mx-8 text-[#06B6D4] text-sm sm:text-base select-none inline-block drop-shadow-[0_0_6px_rgba(6,182,212,0.5)]"
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
