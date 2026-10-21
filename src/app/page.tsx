"use client";

import React from "react";
import { useSite } from "@/context/SiteContext";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AmbientLighting } from "@/components/effects/AmbientLighting";
import { ParticleCanvas } from "@/components/effects/ParticleCanvas";
import { MouseSpotlight } from "@/components/effects/MouseSpotlight";
import { HeroSection } from "@/components/sections/HeroSection";
import { RibbonMarquee } from "@/components/sections/RibbonMarquee";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#060813] text-[#F8FAFC] selection:bg-[#2DD4BF] selection:text-[#060813]">
      {/* 1. Global Visual Identity & Breathing Fluid Aurora Mesh Gradient */}
      <AmbientLighting />
      <ParticleCanvas />
      <MouseSpotlight />

      {/* 2. Floating Liquid Glass Island Navigation */}
      <Navbar />

      {/* Main Structural Flow */}
      <main className="flex-1 relative z-10">
        {/* 3. Hero Section: Full-Viewport Centered Sensory Monument communicating Zen & Tech */}
        <HeroSection />

        {/* 4. Horizon Glass Ribbon Marquee with Glowing Aurora Stars */}
        <RibbonMarquee />

        {/* 5. Solutions & Capabilities: Zen Architecture with Live Telemetry */}
        <ServicesSection />

        {/* 6. Key Metrics: Minimalist Frosted Glass Stat Monuments */}
        <StatsSection />

        {/* 7. Curated Portfolio: Editorial Gallery with Live Production Links */}
        <ProjectsSection />

        {/* 8. Methodology & Agile Process Pipeline */}
        <ProcessSection />

        {/* 9. Client Stories: Serene Frosted Cards with Aurora Avatar Rings */}
        <TestimonialsSection />

        {/* 10. Transparent Investment Plans with Currency Switcher */}
        <PricingSection />

        {/* 11. Frictionless Consultation & Dhaka Headquarters Suite */}
        <ContactSection />
      </main>

      {/* 12. Architectural Zen Glass Footer Island */}
      <Footer />
    </div>
  );
}
