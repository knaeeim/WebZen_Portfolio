"use client";

import React, { useState } from "react";
import { useSite } from "@/context/SiteContext";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { motion } from "framer-motion";
import { 
  Check, 
  Sparkles, 
  ArrowRight,
  Zap,
  Server,
  Info
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function PricingSection() {
  const { data } = useSite();
  const { language } = useLanguage();
  const t = translations[language].pricing;
  const [currency, setCurrency] = useState<"bdt" | "usd">("bdt");

  // Localized plans fallback matching IDs or default site pricing
  const plans = t.plans || data.pricing;

  return (
    <section id="pricing" className="relative py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Zap className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-normal leading-[1.35] sm:leading-[1.3] pb-1">
            <span className="inline-block">{t.heading}</span>{" "}
            <span className="text-gradient-cyan inline-block mx-1.5">{t.headingGradient}</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-300">
            {t.subheading}
          </p>

          {/* Currency Switcher */}
          <div className="mt-6 inline-flex items-center p-1.5 rounded-2xl bg-[#0a2847] border border-cyan-500/35 backdrop-blur-xl shadow-lg shadow-black/40">
            <button
              onClick={() => setCurrency("bdt")}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                currency === "bdt"
                  ? "bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-300 text-slate-950 shadow-md shadow-cyan-500/30 border border-white/50"
                  : "text-slate-200 hover:text-white"
              }`}
            >
              {t.currencyBdt}
            </button>
            <button
              onClick={() => setCurrency("usd")}
              className={`px-6 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold transition-all cursor-pointer ${
                currency === "usd"
                  ? "bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-300 text-slate-950 shadow-md shadow-cyan-500/30 border border-white/50"
                  : "text-slate-200 hover:text-white"
              }`}
            >
              {t.currencyUsd}
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.id || idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const, delay: idx * 0.1 }}
              className={`glass-card rounded-3xl p-8 relative flex flex-col justify-between border ${
                plan.popular
                  ? "border-cyan-400/60 bg-gradient-to-b from-cyan-950/20 to-transparent shadow-2xl shadow-cyan-500/10 lg:-translate-y-3"
                  : "border-white/10"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-slate-950 shadow-lg shadow-cyan-500/30">
                    {t.mostPopular}
                  </span>
                </div>
              )}

              <div>
                <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-xs text-slate-400 min-h-[32px] leading-relaxed">
                  {plan.description}
                </p>

                {/* Price Display */}
                <div className="mt-6 mb-6 pb-6 border-b border-white/[0.08]">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                      {currency === "bdt" ? plan.priceBdt : plan.priceUsd}
                    </span>
                    <span className="text-xs text-slate-400 font-mono">
                      / {plan.period}
                    </span>
                  </div>
                  <p className="text-[11px] text-amber-300/85 mt-2 flex items-center gap-1 font-medium">
                    <Info className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                    <span>{t.hostingCardNote}</span>
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-300">
                    {t.whatsIncluded}
                  </p>
                  <ul className="space-y-2.5">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-200">
                        <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action */}
              <div className="mt-8 pt-6 border-t border-white/[0.08]">
                <a href={plan.ctaLink || "#contact"}>
                  <Button
                    className={`w-full font-extrabold text-xs sm:text-sm h-12 rounded-xl group transition-all cursor-pointer ${
                      plan.popular
                        ? "bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-300 text-slate-950 hover:from-cyan-300 hover:to-sky-200 shadow-xl shadow-cyan-500/30 border-2 border-white/60"
                        : "bg-[#0a2847] hover:bg-[#0f3c69] text-white border-2 border-cyan-500/40 hover:border-cyan-300 shadow-lg shadow-black/40"
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1.5 stroke-[2.5]" />
                  </Button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hosting & Database Storage Transparency Banner */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 rounded-2xl p-6 sm:p-7 border border-cyan-500/20 bg-gradient-to-r from-cyan-950/25 via-blue-950/20 to-[#080d1e] flex flex-col md:flex-row items-start md:items-center justify-between gap-5 shadow-lg shadow-black/40"
        >
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-2xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-400 flex items-center justify-center shrink-0 mt-0.5">
              <Server className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2.5 flex-wrap">
                <h4 className="text-sm sm:text-base font-bold text-white">
                  {t.hostingNoticeTitle}
                </h4>
                <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-300 font-semibold uppercase tracking-wider">
                  {t.hostingNoticeBadge}
                </span>
              </div>
              <p className="text-xs sm:text-[13px] text-slate-300 mt-1.5 leading-relaxed max-w-3xl">
                {t.hostingNoticeDesc}
              </p>
            </div>
          </div>

          <div className="shrink-0 self-stretch md:self-center flex items-center">
            <div className="text-[11px] font-semibold text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 px-3.5 py-2 rounded-xl inline-flex items-center gap-2 w-full md:w-auto justify-center">
              <Check className="w-4 h-4 text-cyan-400 shrink-0" />
              <span>{t.hostingSetupFree}</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
