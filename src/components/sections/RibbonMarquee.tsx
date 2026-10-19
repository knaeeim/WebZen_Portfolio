"use client";

import React from "react";

const MARQUEE_ITEMS = [
  "Web Application",
  "MERN Stack",
  "UI/UX Design",
  "Custom Dashboard",
  "E-Commerce",
  "API Architecture",
];

export function RibbonMarquee() {
  // Duplicate list to achieve infinite seamless looping
  const items = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS, ...MARQUEE_ITEMS];

  return (
    <div className="relative w-full overflow-hidden py-10 sm:py-16 my-4 z-20">
      {/* Tilted Angled Ribbon (-3deg) */}
      <div className="-rotate-3 transform scale-105 w-full bg-[#101015] border-y border-white/10 py-4 sm:py-5 shadow-[0_15px_40px_rgba(0,0,0,0.8)] overflow-hidden">
        <div className="animate-marquee items-center whitespace-nowrap">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center">
              <span className="font-display font-black text-sm sm:text-base tracking-[0.22em] uppercase text-neutral-200 hover:text-white transition-colors cursor-default">
                {item}
              </span>
              
              {/* Glowing Coral-Red 4-point Star (✦) */}
              <span 
                className="mx-6 sm:mx-8 text-[#EF4444] text-base sm:text-lg select-none inline-block drop-shadow-[0_0_8px_rgba(239,68,68,0.8)]"
                aria-hidden="true"
              >
                ✦
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
