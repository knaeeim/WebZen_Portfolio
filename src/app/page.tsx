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
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { ContactSection } from "@/components/sections/ContactSection";

export default function Home() {
  const { isLoaded } = useSite();

  if (!isLoaded) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0B0B0E] text-neutral-100">
        <div className="flex flex-col items-center gap-4">
          <div className="font-display font-black text-2xl tracking-wider text-white animate-pulse">
            WEBZEN<span className="text-[#F59E0B] font-black ml-1.5 drop-shadow-[0_0_12px_rgba(245,158,11,0.5)]">BD</span>
          </div>
          <p className="text-xs text-neutral-400 font-mono tracking-widest uppercase">
            Loading Agency Architecture...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="relative min-h-screen flex flex-col bg-[#0B0B0E] text-[#F5F5F7] selection:bg-[#EC4899] selection:text-white">
      {/* 1. Global Visual Identity & Diffused Radial Mesh Ambient Lighting */}
      <AmbientLighting />
      <ParticleCanvas />
      <MouseSpotlight />

      {/* 2. Header / Navigation */}
      <Navbar />

      {/* Main Structural Flow */}
      <main className="flex-1 relative z-10">
        {/* 3. Hero Section (Headline, 3D Centerpiece Sculpture, Left Glass Cards, Right Editorial + White Pill) */}
        <HeroSection />

        {/* 4. Angled Ribbon Marquee Divider (-3deg, glowing coral-red star separators) */}
        <RibbonMarquee />

        {/* 5. Our Services Section (Split Feature Layout, Checklist with dark circular icons, 3D Isometric Screen) */}
        <ServicesSection />

        {/* 6. Metrics Bar (Full-width horizontal strip with warm ambient glow behind it) */}
        <StatsSection />

        {/* Portfolio / Projects Showcase */}
        <ProjectsSection />

        {/* 7. Our Happy Customers (3-column cards, bottom-edge gradient glow, overlapping dual circular top badges) */}
        <TestimonialsSection />

        {/* Pricing & Investment Plans */}
        <PricingSection />

        {/* Contact & Project Initiation */}
        <ContactSection />
      </main>

      {/* 8. Footer (WEBZEN BD, Useful Links, Contact Us with Dhaka location, phone, email) */}
      <Footer />
    </div>
  );
}
