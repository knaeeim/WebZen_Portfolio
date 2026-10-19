"use client";

import React from "react";
import { useSite } from "@/context/SiteContext";

export function AmbientLighting() {
  const { data } = useSite();
  const theme = data?.theme;

  if (theme && (theme.enableAmbientGlow === false || theme.glowIntensity === "off")) {
    return null;
  }

  const accent = theme?.accentColor || "#FFB800";
  const start = theme?.accentGradientStart || "#F59E0B";
  const end = theme?.accentGradientEnd || "#EA7814";

  const multiplier = 
    theme?.glowIntensity === "subtle" ? 0.5 :
    theme?.glowIntensity === "high" ? 1.8 : 1.0;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Top Left Gradient Glow */}
      <div 
        className="absolute -top-[10%] -left-[10%] w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full blur-[160px] sm:blur-[200px] pointer-events-none transition-all duration-700"
        style={{
          backgroundColor: start,
          opacity: 0.07 * multiplier,
        }}
        aria-hidden="true" 
      />

      {/* Top Right Accent Subtle Glow */}
      <div 
        className="absolute top-[5%] -right-[10%] w-[450px] sm:w-[650px] h-[450px] sm:h-[650px] rounded-full blur-[160px] sm:blur-[190px] pointer-events-none transition-all duration-700"
        style={{
          backgroundColor: accent,
          opacity: 0.06 * multiplier,
        }}
        aria-hidden="true" 
      />

      {/* Mid Left Secondary Glow */}
      <div 
        className="absolute top-[45%] -left-[15%] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full blur-[160px] pointer-events-none transition-all duration-700"
        style={{
          backgroundColor: end,
          opacity: 0.05 * multiplier,
        }}
        aria-hidden="true" 
      />

      {/* Mid Right Subtle Ambient */}
      <div 
        className="absolute top-[60%] -right-[15%] w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full blur-[170px] pointer-events-none transition-all duration-700"
        style={{
          backgroundColor: start,
          opacity: 0.05 * multiplier,
        }}
        aria-hidden="true" 
      />

      {/* Bottom Center Reflection */}
      <div 
        className="absolute bottom-[2%] left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[350px] rounded-full blur-[170px] pointer-events-none transition-all duration-700"
        style={{
          backgroundColor: accent,
          opacity: 0.04 * multiplier,
        }}
        aria-hidden="true" 
      />

      {/* Ultra-subtle obsidian grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
    </div>
  );
}
