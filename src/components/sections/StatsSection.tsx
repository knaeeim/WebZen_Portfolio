"use client";

import React from "react";
import { useSite } from "@/context/SiteContext";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { motion } from "framer-motion";
import { 
  Rocket, 
  HeartHandshake, 
  Globe, 
  ShieldCheck, 
  Zap
} from "lucide-react";

export function StatsSection() {
  const { data } = useSite();
  const { language } = useLanguage();
  const t = translations[language].stats;

  const statItems = [
    {
      value: 140,
      suffix: "+",
      label: t.stat1Label,
      description: t.stat1Desc,
      icon: "Rocket",
    },
    {
      value: 99.4,
      suffix: "%",
      label: t.stat2Label,
      description: t.stat2Desc,
      icon: "HeartHandshake",
    },
    {
      value: 18,
      suffix: "+",
      label: t.stat3Label,
      description: t.stat3Desc,
      icon: "Globe",
    },
    {
      value: 24,
      suffix: "/7",
      label: t.stat4Label,
      description: t.stat4Desc,
      icon: "ShieldCheck",
    },
  ];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Rocket":
        return <Rocket className="w-6 h-6 text-cyan-400" />;
      case "HeartHandshake":
        return <HeartHandshake className="w-6 h-6 text-purple-400" />;
      case "Globe":
        return <Globe className="w-6 h-6 text-blue-400" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      default:
        return <Zap className="w-6 h-6 text-cyan-400" />;
    }
  };

  return (
    <section id="stats" className="relative py-16 border-y border-cyan-500/15 dark:border-white/[0.06] dark:bg-white/[0.01] scroll-mt-24">
      {/* Anchor alias for #metrics */}
      <div id="metrics" className="absolute -top-24 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {statItems.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const, delay: idx * 0.08 }}
              className="glass-card rounded-2xl p-6 relative group overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-cyan-500/5 rounded-full blur-2xl group-hover:bg-cyan-500/15 transition-all" />
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-slate-100 dark:bg-white/[0.05] border border-cyan-500/20 dark:border-white/10 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:border-cyan-500/40 transition-all">
                  {getIcon(stat.icon)}
                </div>
                
                <div>
                  <div className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-baseline gap-0.5">
                    <span>{stat.value}</span>
                    <span className="text-cyan-600 dark:text-cyan-400 font-bold">{stat.suffix}</span>
                  </div>
                  <div className="text-xs font-semibold text-slate-700 dark:text-slate-200 mt-0.5">
                    {stat.label}
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-400 mt-4 leading-relaxed font-normal">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
