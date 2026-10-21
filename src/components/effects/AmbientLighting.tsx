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
    theme?.glowIntensity === "subtle" ? 0.6 :
    theme?.glowIntensity === "high" ? 1.6 : 1.0;

  // Aurora UI Palette: Calming Teal, Soft Lavender, Deep Cosmic Indigo, Sky
  const teal = "#2DD4BF";
  const lavender = "#C084FC";
  const indigo = "#818CF8";
  const deepBlue = "#1E1B4B";
  const cosmicSky = "#38BDF8";

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden select-none">
      {/* ─── Aurora Fluid Mesh Layer 1: Ethereal Teal North Horizon ─── */}
      <div 
        className="absolute -top-[15%] left-[10%] w-[650px] sm:w-[900px] h-[650px] sm:h-[900px] rounded-full blur-[140px] sm:blur-[190px] animate-aurora-mesh-1 transition-all duration-1000"
        style={{
          background: `radial-gradient(circle, ${teal} 0%, rgba(45, 212, 191, 0.4) 40%, transparent 70%)`,
          opacity: 0.16 * multiplier,
        }}
        aria-hidden="true" 
      />

      {/* ─── Aurora Fluid Mesh Layer 2: Soft Lavender East Light ─── */}
      <div 
        className="absolute -top-[5%] right-[5%] w-[600px] sm:w-[850px] h-[600px] sm:h-[850px] rounded-full blur-[140px] sm:blur-[190px] animate-aurora-mesh-2 transition-all duration-1000"
        style={{
          background: `radial-gradient(circle, ${lavender} 0%, rgba(192, 132, 252, 0.45) 35%, transparent 70%)`,
          opacity: 0.15 * multiplier,
        }}
        aria-hidden="true" 
      />

      {/* ─── Aurora Fluid Mesh Layer 3: Cosmic Sky Center Breathing Core ─── */}
      <div 
        className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[550px] sm:w-[800px] h-[450px] sm:h-[650px] rounded-full blur-[150px] sm:blur-[200px] animate-zen-breathe transition-all duration-1000"
        style={{
          background: `radial-gradient(ellipse at center, ${indigo} 0%, ${cosmicSky} 30%, rgba(99, 102, 241, 0.2) 60%, transparent 75%)`,
          opacity: 0.18 * multiplier,
        }}
        aria-hidden="true" 
      />

      {/* ─── Aurora Fluid Mesh Layer 4: Deep Cosmic Blue Mid-Canvas ─── */}
      <div 
        className="absolute top-[48%] -left-[10%] w-[600px] sm:w-[800px] h-[600px] sm:h-[800px] rounded-full blur-[160px] animate-aurora-mesh-3 transition-all duration-1000"
        style={{
          background: `radial-gradient(circle, ${teal} 0%, ${deepBlue} 50%, transparent 70%)`,
          opacity: 0.12 * multiplier,
        }}
        aria-hidden="true" 
      />

      {/* ─── Aurora Fluid Mesh Layer 5: Ethereal Lavender Horizon Glow ─── */}
      <div 
        className="absolute top-[68%] -right-[10%] w-[550px] sm:w-[750px] h-[550px] sm:h-[750px] rounded-full blur-[160px] animate-aurora-mesh-1 transition-all duration-1000"
        style={{
          background: `radial-gradient(circle, ${lavender} 0%, rgba(129, 140, 248, 0.4) 45%, transparent 70%)`,
          opacity: 0.13 * multiplier,
        }}
        aria-hidden="true" 
      />

      {/* ─── Aurora Fluid Mesh Layer 6: Ground Starlight Reflection ─── */}
      <div 
        className="absolute bottom-[2%] left-1/2 -translate-x-1/2 w-[700px] sm:w-[1100px] h-[350px] rounded-full blur-[180px] animate-zen-breathe transition-all duration-1000"
        style={{
          background: `radial-gradient(ellipse at bottom, ${teal} 0%, ${lavender} 50%, transparent 75%)`,
          opacity: 0.10 * multiplier,
        }}
        aria-hidden="true" 
      />

      {/* ─── Ultra-refined Zen Architectural Grid & Grain Overlay ─── */}
      <div 
        className="absolute inset-0 bg-grid-pattern opacity-[0.14] pointer-events-none" 
        style={{ maskImage: "radial-gradient(ellipse at center, transparent 20%, black 85%)", WebkitMaskImage: "radial-gradient(ellipse at center, transparent 20%, black 85%)" }}
      />

      {/* Subtle organic noise texture filter to prevent gradient banding */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.025] pointer-events-none mix-blend-overlay">
        <filter id="zen-grain">
          <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#zen-grain)" />
      </svg>
    </div>
  );
}

