"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Check } from "lucide-react";

export function ServicesSection() {
  const checklist = [
    {
      title: "Custom Full-Stack Web Apps",
      desc: "Built with Next.js 16, TypeScript, Node.js, and cloud microservices for maximum speed.",
    },
    {
      title: "Interactive UI/UX & Prototyping",
      desc: "Fluid interactive animations, design systems, and responsive pixel-perfect interfaces.",
    },
    {
      title: "Scalable Dashboard & E-Commerce",
      desc: "Custom analytics portals, payment integrations (bKash, Stripe), and real-time architectures.",
    },
  ];

  return (
    <section id="services" className="relative py-24 sm:py-32 overflow-hidden scroll-mt-24">
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/2 -left-[10%] w-[500px] h-[500px] bg-[#EC4899]/[0.08] blur-[150px] rounded-full pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/3 -right-[10%] w-[500px] h-[500px] bg-[#F59E0B]/[0.08] blur-[150px] rounded-full pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title: "Our Services" Centered in Bold White */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 mb-4"
          >
            <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-neutral-300">
              SOLUTIONS & CAPABILITIES
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight"
          >
            Our Services
          </motion.h2>
        </div>

        {/* Split Feature Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading, Paragraph, Checklist & Dark Pill Button */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-8"
          >
            <div className="space-y-4">
              <h3 className="font-display font-black text-2xl sm:text-4xl text-white tracking-tight leading-snug">
                Custom Web & <span className="text-gradient-hero">UI/UX Engineering</span>
              </h3>
              <p className="text-base sm:text-lg text-neutral-400 font-normal leading-relaxed">
                We design and engineer tailored digital products that elevate your brand. From high-converting corporate web architectures to full-stack cloud dashboards, every component is crafted for uncompromising performance.
              </p>
            </div>

            {/* Vertical Checklist with Subtle Dark Circular Checkmark Icons */}
            <div className="space-y-4 pt-2">
              {checklist.map((item, idx) => (
                <div 
                  key={idx}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/15 transition-all duration-300 group"
                >
                  <div className="w-8 h-8 rounded-full bg-[#18181F] border border-white/10 flex items-center justify-center shrink-0 group-hover:border-[#F59E0B]/50 transition-colors shadow-inner">
                    <Check className="w-4 h-4 text-[#F59E0B]" strokeWidth={3} />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-white text-base tracking-wide group-hover:text-neutral-100 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-400 mt-1 leading-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Dark Pill Button with a Border ("LEARN MORE ↗") */}
            <div className="pt-2">
              <a href="#projects">
                <button className="border border-white/20 hover:border-[#F59E0B]/60 text-white hover:text-white bg-white/[0.04] hover:bg-white/[0.08] backdrop-blur-md rounded-full px-8 py-4 text-xs font-bold tracking-[0.18em] uppercase transition-all duration-300 shadow-sm hover:shadow-[0_0_25px_rgba(245,158,11,0.2)] flex items-center gap-2.5 group cursor-pointer active:scale-95">
                  <span>LEARN MORE</span>
                  <ArrowUpRight className="w-4 h-4 text-[#F59E0B] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Rich Glowing Isometric 3D Composition */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative flex justify-center items-center"
          >
            {/* Ambient backlight glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#EC4899]/25 via-[#F59E0B]/20 to-transparent blur-[90px] rounded-full scale-90 pointer-events-none" />

            {/* Main composition card */}
            <div className="relative w-full rounded-3xl overflow-hidden border border-white/10 bg-[#121217]/80 backdrop-blur-2xl shadow-[0_30px_80px_rgba(0,0,0,0.8)] group hover:border-white/20 transition-all duration-500 p-2 sm:p-3">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src="/images/services-isometric-3d.jpg"
                  alt="Webzen BD Engineering & 3D Interactive Architecture"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Floating Micro-Badges for Depth */}
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md border border-white/10 rounded-full px-3.5 py-1.5 flex items-center gap-2 shadow-lg">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] font-bold text-white tracking-wide">Next.js 16 + React 19</span>
                </div>

                <div className="absolute bottom-4 right-4 bg-black/60 backdrop-blur-md border border-white/10 rounded-full px-3.5 py-1.5 flex items-center gap-2 shadow-lg">
                  <span className="text-[11px] font-bold text-white tracking-wide">99.9% Uptime SLA</span>
                  <span className="w-2 h-2 rounded-full bg-[#F59E0B]" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
