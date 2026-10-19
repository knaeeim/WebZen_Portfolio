"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { 
  Layers, 
  Terminal, 
  CreditCard, 
  Bot, 
  Cloud,
  Cpu,
  Sparkles
} from "lucide-react";

export function TechStackSection() {
  const { language } = useLanguage();
  const t = translations[language].techstack;
  const [activeTab, setActiveTab] = useState<number>(0);

  const getIcon = (type: string) => {
    switch (type) {
      case "layers":
        return <Layers className="w-4 h-4" />;
      case "terminal":
        return <Terminal className="w-4 h-4" />;
      case "creditCard":
        return <CreditCard className="w-4 h-4" />;
      case "bot":
        return <Bot className="w-4 h-4" />;
      case "cloud":
        return <Cloud className="w-4 h-4" />;
      default:
        return <Sparkles className="w-4 h-4" />;
    }
  };

  const categories = t.categories || [];
  const currentCategory = categories[activeTab] || categories[0];

  return (
    <section id="techstack" className="relative py-28 overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Cpu className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-normal leading-[1.35] sm:leading-[1.3] pb-1">
            <span className="inline-block">{t.heading}</span>{" "}
            <span className="text-gradient-cyan inline-block mx-1.5">{t.headingGradient}</span>
          </h2>
          <p className="mt-4 text-base text-slate-300">
            {t.subheading}
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat, idx) => (
            <button
              key={cat.name}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all duration-300 ${
                activeTab === idx
                  ? "bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-300 text-slate-950 shadow-lg shadow-cyan-500/25 font-extrabold border border-white/40 scale-105"
                  : "bg-[#0a2847]/70 text-slate-300 hover:bg-[#0d345c] hover:text-white border border-cyan-500/20"
              }`}
            >
              {getIcon(cat.iconType)}
              <span>{cat.name}</span>
            </button>
          ))}
        </div>

        {/* Active Tab Tech Grid */}
        {currentCategory && (
          <motion.div
            key={`${language}-${activeTab}`}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {currentCategory.items.map((item, idx) => (
              <div
                key={idx}
                className="glass-card rounded-2xl p-6 border border-white/10 hover:border-cyan-500/30 group transition-all duration-300"
              >
                <div className="flex items-center justify-between mb-2">
                  <h4 className="text-base font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {item.name}
                  </h4>
                  <span className="text-[10px] font-semibold uppercase px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20 font-mono">
                    {item.badge}
                  </span>
                </div>
                <p className="text-xs text-slate-300 leading-relaxed font-normal">
                  {item.desc}
                </p>
              </div>
            ))}
          </motion.div>
        )}

      </div>
    </section>
  );
}
