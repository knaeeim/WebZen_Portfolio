"use client";

import React from "react";

export function AmbientLighting() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Top Left Sunset Orange Glow */}
      <div 
        className="absolute -top-[10%] -left-[10%] w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full bg-[#F59E0B]/[0.10] blur-[140px] sm:blur-[180px] pointer-events-none"
        aria-hidden="true" 
      />

      {/* Top Right Magenta-Pink Glow */}
      <div 
        className="absolute top-[5%] -right-[10%] w-[450px] sm:w-[650px] h-[450px] sm:h-[650px] rounded-full bg-[#EC4899]/[0.11] blur-[140px] sm:blur-[170px] pointer-events-none"
        aria-hidden="true" 
      />

      {/* Mid Left Coral Red Ambient */}
      <div 
        className="absolute top-[45%] -left-[15%] w-[400px] sm:w-[600px] h-[400px] sm:h-[600px] rounded-full bg-[#EF4444]/[0.07] blur-[150px] pointer-events-none"
        aria-hidden="true" 
      />

      {/* Mid Right Warm Sunset Orange Ambient */}
      <div 
        className="absolute top-[60%] -right-[15%] w-[500px] sm:w-[700px] h-[500px] sm:h-[700px] rounded-full bg-[#F59E0B]/[0.08] blur-[160px] pointer-events-none"
        aria-hidden="true" 
      />

      {/* Bottom Center Magenta-Pink Subtle Reflection */}
      <div 
        className="absolute bottom-[2%] left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[350px] rounded-full bg-[#EC4899]/[0.06] blur-[160px] pointer-events-none"
        aria-hidden="true" 
      />

      {/* Ultra-subtle obsidian grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />
    </div>
  );
}
