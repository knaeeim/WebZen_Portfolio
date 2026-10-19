"use client";

import React from "react";
import { useSite } from "@/context/SiteContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ParticleCanvas } from "@/components/effects/ParticleCanvas";
import { MouseSpotlight } from "@/components/effects/MouseSpotlight";
import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { CalculatorSection } from "@/components/sections/CalculatorSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { FaqSection } from "@/components/sections/FaqSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { CustomSection } from "@/components/sections/CustomSection";
import { useTheme } from "@/context/ThemeContext";
import Link from "next/link";
import { Settings, Sparkles } from "lucide-react";

export default function Home() {
  const { data, isLoaded } = useSite();
  const { theme } = useTheme();

  if (!isLoaded) {
    return (
      <div
        className={`min-h-screen flex items-center justify-center transition-colors duration-300 ${
          theme === "light"
            ? "bg-gradient-to-b from-[#f0f9ff] to-[#f8fafc] text-slate-800"
            : "bg-gradient-to-b from-[#031326] to-[#020e1a] text-slate-100"
        }`}
      >
        <div className="flex flex-col items-center gap-4">
          <div className="w-14 h-14 rounded-2xl overflow-hidden shadow-2xl shadow-cyan-500/25 border border-white/15 animate-pulse">
            <img src="/logo.png" alt="WebZen Bangladesh" className="w-full h-full object-cover" />
          </div>
          <p className="text-xs text-slate-400 font-mono tracking-widest uppercase">
            Loading WebZen Bangladesh Engine...
          </p>
        </div>
      </div>
    );
  }

  // Sort sections according to their order property
  const activeSections = [...data.sections]
    .filter((sec) => sec.enabled)
    .sort((a, b) => a.order - b.order);

  const renderSection = (sec: (typeof activeSections)[0]) => {
    switch (sec.type) {
      case "hero":
        return <HeroSection key={sec.id} />;
      case "stats":
        return <StatsSection key={sec.id} />;
      case "services":
        return <ServicesSection key={sec.id} />;
      case "projects":
        return <ProjectsSection key={sec.id} />;
      case "techstack":
        return <TechStackSection key={sec.id} />;
      case "process":
        return <ProcessSection key={sec.id} />;
      case "calculator":
        return <CalculatorSection key={sec.id} />;
      case "pricing":
        return <PricingSection key={sec.id} />;
      case "testimonials":
        return <TestimonialsSection key={sec.id} />;
      case "faq":
        return <FaqSection key={sec.id} />;
      case "contact":
        return <ContactSection key={sec.id} />;
      default:
        return <CustomSection key={sec.id} section={sec} />;
    }
  };

  return (
    <div
      className={`relative min-h-screen flex flex-col transition-colors duration-300 ${
        theme === "light"
          ? "bg-gradient-to-b from-[#f0f9ff] via-[#f8fafc] to-[#e0f7fa] text-slate-900 selection:bg-cyan-500 selection:text-white"
          : "bg-gradient-to-b from-[#031326] via-[#020e1a] to-[#02151d] text-slate-100 selection:bg-cyan-400 selection:text-slate-950"
      }`}
    >
      {/* Visual background layers */}
      <ParticleCanvas />
      <MouseSpotlight />
      <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      {/* Main Navbar */}
      <Navbar />

      {/* Dynamic Sections in User-defined Order */}
      <main className="flex-1 relative z-10">
        {activeSections.map((sec) => renderSection(sec))}
      </main>

      {/* Main Footer */}
      <Footer />
    </div>
  );
}
