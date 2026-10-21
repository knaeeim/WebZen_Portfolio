"use client";

import React from "react";
import { useSite } from "@/context/SiteContext";

export function AmbientLighting() {
  const { data } = useSite();
  const theme = data?.theme;

  if (theme && (theme.enableAmbientGlow === false || theme.glowIntensity === "off")) {
    return null;
  }

  const multiplier = 
    theme?.glowIntensity === "subtle" ? 0.7 :
    theme?.glowIntensity === "high" ? 1.4 : 1.0;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none bg-[#050505]">
      {/* ─── 1. Vertical Golden/Amber Light Streams (Image 3 inspired) ─── */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[3px] h-[100vh] bg-gradient-to-b from-transparent via-[#FFB800] to-transparent opacity-60 animate-beam-breathe blur-[1px]"
        aria-hidden="true" 
      />
      <div 
        className="absolute top-0 left-[calc(50%-16px)] w-[2px] h-[90vh] bg-gradient-to-b from-transparent via-[#FF9500] to-transparent opacity-40 blur-[1px] animate-beam-breathe"
        aria-hidden="true" 
      />
      <div 
        className="absolute top-0 left-[calc(50%+16px)] w-[2px] h-[90vh] bg-gradient-to-b from-transparent via-[#FF9500] to-transparent opacity-40 blur-[1px] animate-beam-breathe"
        aria-hidden="true" 
      />
      
      {/* Vertical light beam halo */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[240px] h-[100vh] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(255, 170, 50, 0.12) 0%, rgba(234, 88, 12, 0.05) 45%, transparent 75%)",
          filter: "blur(50px)",
          opacity: 0.8 * multiplier,
        }}
        aria-hidden="true"
      />

      {/* ─── 2. Top Center Ambient Crimson Core Glow (Behind Hero Orb) ─── */}
      <div 
        className="absolute top-[28%] sm:top-[32%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[950px] h-[550px] sm:h-[750px] rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255, 56, 35, 0.22) 0%, rgba(255, 106, 0, 0.14) 35%, rgba(180, 20, 10, 0.05) 60%, transparent 75%)",
          filter: "blur(120px)",
          opacity: 0.95 * multiplier,
        }}
        aria-hidden="true" 
      />

      {/* ─── 3. Left Corner Ambient Crimson/Amber Glow ─── */}
      <div 
        className="absolute top-[10%] -left-[10%] w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full blur-[140px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255, 56, 35, 0.16) 0%, rgba(255, 149, 0, 0.08) 40%, transparent 70%)",
          opacity: 0.8 * multiplier,
        }}
        aria-hidden="true" 
      />

      {/* ─── 4. Right Corner Ambient Crimson Glow ─── */}
      <div 
        className="absolute top-[18%] -right-[10%] w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full blur-[140px] pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255, 106, 0, 0.16) 0%, rgba(255, 56, 35, 0.09) 40%, transparent 70%)",
          opacity: 0.8 * multiplier,
        }}
        aria-hidden="true" 
      />

      {/* ─── 5. Dramatic Crimson/Orange Horizon Glows (Image 1 & 2 inspired) ─── */}
      <div 
        className="absolute bottom-0 inset-x-0 h-[280px] sm:h-[380px] pointer-events-none animate-horizon-pulse"
        style={{
          background: "radial-gradient(ellipse 90% 70% at 50% 100%, rgba(255, 56, 35, 0.32) 0%, rgba(255, 106, 0, 0.14) 45%, transparent 75%)",
          filter: "blur(50px)",
          opacity: 0.9 * multiplier,
        }}
        aria-hidden="true" 
      />

      {/* ─── 6. Subtle Noise / Texture Overlay ─── */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.025] pointer-events-none mix-blend-overlay">
        <filter id="radiant-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.75" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#radiant-grain)" />
      </svg>
    </div>
  );
}
