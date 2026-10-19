"use client";

import React from "react";

export function AmbientLighting() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Top Left Azure Blue Subtle Glow */}
      <div 
        className="absolute -top-[10%] -left-[10%] w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full bg-[#0EA5E9]/[0.07] blur-[160px] sm:blur-[200px] pointer-events-none"
        aria-hidden="true" 
      />

      {/* Top Right Oceanic Cyan Subtle Glow */}
      <div 
        className="absolute top-[5%] -right-[10%] w-[450px] sm:w-[650px] h-[450px] sm:h-[650px] rounded-full bg-[#06B6D4]/[0.06] blur-[160px] sm:blur-[190px] pointer-events-none"
        aria-hidden="true" 
      />

      {/* Mid Left Tropical Teal Ambient */}
      <div 
        className="absolute top-[45%] -left-[15%] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full bg-[#10B981]/[0.05] blur-[160px] pointer-events-none"
        aria-hidden="true" 
      />

      {/* Mid Right Azure Blue Ambient */}
      <div 
        className="absolute top-[60%] -right-[15%] w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full bg-[#0EA5E9]/[0.05] blur-[170px] pointer-events-none"
        aria-hidden="true" 
      />

      {/* Bottom Center Mint-Turquoise Subtle Reflection */}
      <div 
        className="absolute bottom-[2%] left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[350px] rounded-full bg-[#14B8A6]/[0.04] blur-[170px] pointer-events-none"
        aria-hidden="true" 
      />

      {/* Ultra-subtle obsidian grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />
    </div>
  );
}
