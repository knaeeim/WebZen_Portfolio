"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { motion } from "framer-motion";
import { 
  CodeXml, 
  Bot, 
  Palette, 
  CloudLightning, 
  BadgeDollarSign, 
  Smartphone,
  Check, 
  ArrowUpRight,
  Sparkles,
  Layers
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function ServicesSection() {
  const { language } = useLanguage();
  const t = translations[language].services;

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "CodeXml":
        return <CodeXml className="w-6 h-6 text-cyan-400" />;
      case "Bot":
        return <Bot className="w-6 h-6 text-purple-400" />;
      case "Palette":
        return <Palette className="w-6 h-6 text-pink-400" />;
      case "CloudLightning":
        return <CloudLightning className="w-6 h-6 text-blue-400" />;
      case "BadgeDollarSign":
        return <BadgeDollarSign className="w-6 h-6 text-emerald-400" />;
      case "Smartphone":
        return <Smartphone className="w-6 h-6 text-amber-400" />;
      default:
        return <Layers className="w-6 h-6 text-cyan-400" />;
    }
  };

  const getServiceIconByIndex = (idx: number) => {
    const icons = [
      <CodeXml key={1} className="w-6 h-6 text-cyan-400" />,
      <BadgeDollarSign key={2} className="w-6 h-6 text-emerald-400" />,
      <Smartphone key={3} className="w-6 h-6 text-amber-400" />,
      <Bot key={4} className="w-6 h-6 text-purple-400" />,
      <Palette key={5} className="w-6 h-6 text-pink-400" />,
      <CloudLightning key={6} className="w-6 h-6 text-blue-400" />,
    ];
    return icons[idx % icons.length];
  };

  return (
    <section id="services" className="relative py-28 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/10 blur-[140px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-purple-600/10 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-normal leading-[1.35] sm:leading-[1.3] pb-1">
            <span className="inline-block">{t.heading}</span>{" "}
            <span className="text-gradient-cyan inline-block mx-1.5">{t.headingGradient}</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300">
            {t.subheading}
          </p>
        </div>

        {/* Services Grid (Customer Friendly & Plain Language) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.items.map((service, index) => (
            <motion.div
              key={service.id || index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const, delay: index * 0.08 }}
              className={`glass-card rounded-3xl p-8 relative flex flex-col justify-between group transition-all duration-300 border ${
                service.featured 
                  ? "border-cyan-500/30 hover:border-cyan-400/60 shadow-lg shadow-cyan-500/5" 
                  : "border-white/10 hover:border-white/20"
              }`}
            >
              {service.featured && (
                <div className="absolute top-6 right-6">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-cyan-300 border border-cyan-500/30">
                    {language === "bn" ? "জনপ্রিয় সেবা" : "Popular"}
                  </span>
                </div>
              )}

              <div>
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-cyan-500/40 transition-transform">
                  {getServiceIconByIndex(index)}
                </div>

                {/* Subtitle & Title */}
                <span className="text-xs font-semibold text-cyan-400/90 tracking-wide uppercase">
                  {service.subtitle}
                </span>
                <h3 className="text-xl font-bold text-white mt-1 group-hover:text-cyan-300 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm text-slate-300 leading-relaxed font-normal">
                  {service.description}
                </p>

                {/* Deliverables */}
                <div className="mt-6 pt-5 border-t border-white/[0.08]">
                  <p className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-3">
                    {t.deliverablesLabel}
                  </p>
                  <ul className="space-y-2">
                    {service.deliverables.map((item, dIdx) => (
                      <li key={dIdx} className="flex items-center gap-2 text-xs text-slate-200">
                        <Check className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom Tags & Action */}
              <div className="mt-8 pt-5 border-t border-white/[0.06] flex items-center justify-between">
                <div className="flex flex-wrap gap-1.5 max-w-[70%]">
                  {service.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] px-2 py-0.5 rounded-md bg-white/[0.04] text-slate-300 border border-white/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <a
                  href="#contact"
                  className="w-9 h-9 rounded-xl bg-white/[0.05] hover:bg-cyan-500 hover:text-slate-950 text-slate-300 flex items-center justify-center transition-all group-hover:bg-cyan-500 group-hover:text-slate-950"
                  aria-label={`Inquire about ${service.title}`}
                >
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:scale-110" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-16 glass-card rounded-3xl p-8 border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
              <Sparkles className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">{t.customScopeTitle}</h4>
              <p className="text-xs text-slate-300">{t.customScopeDesc}</p>
            </div>
          </div>

          <a href="#calculator">
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold px-6 text-xs h-10 rounded-xl">
              {t.calculateBtn}
            </Button>
          </a>
        </div>

      </div>
    </section>
  );
}
