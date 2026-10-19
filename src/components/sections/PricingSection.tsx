"use client";

import React, { useState } from "react";
import { useSite } from "@/context/SiteContext";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { motion } from "framer-motion";
import { 
  Check, 
  ArrowRight,
  Zap,
  Server,
  Info
} from "lucide-react";

export function PricingSection() {
  const { data } = useSite();
  const { language } = useLanguage();
  const t = translations[language].pricing;
  const [currency, setCurrency] = useState<"bdt" | "usd">("bdt");

  const plans = t.plans || data.pricing;

  return (
    <section id="pricing" className="relative py-28 sm:py-36 overflow-hidden scroll-mt-24">
      {/* Background ambient corner glow */}
      <div 
        className="absolute top-1/2 -left-[10%] w-[500px] h-[500px] bg-[#EC4899]/[0.06] blur-[150px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 mb-4">
            <Zap className="w-3.5 h-3.5 text-[#F59E0B]" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-neutral-300">
              TRANSPARENT PRICING
            </span>
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-none">
            Investment <span className="text-gradient-hero">Plans</span>
          </h2>

          <p className="mt-4 text-sm sm:text-base text-neutral-400 font-normal leading-relaxed">
            Predictable, transparent digital engineering packages designed for early-stage startups and enterprise scale.
          </p>

          {/* Currency Switcher */}
          <div className="mt-8 inline-flex items-center p-1.5 rounded-full bg-[#141419] border border-white/10 backdrop-blur-xl shadow-lg">
            <button
              onClick={() => setCurrency("bdt")}
              className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-wider transition-all cursor-pointer ${
                currency === "bdt"
                  ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              {t.currencyBdt}
            </button>
            <button
              onClick={() => setCurrency("usd")}
              className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-wider transition-all cursor-pointer ${
                currency === "usd"
                  ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                  : "text-neutral-400 hover:text-white"
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
              className={`rounded-3xl p-8 sm:p-9 relative flex flex-col justify-between transition-all duration-300 ${
                plan.popular
                  ? "bg-[#16161D] border-2 border-[#F59E0B]/50 shadow-[0_20px_60px_rgba(245,158,11,0.15)] lg:-translate-y-3"
                  : "bg-[#131318] border border-white/[0.08] hover:border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] px-4 py-1.5 rounded-full bg-gradient-to-r from-[#EC4899] to-[#F59E0B] text-black shadow-lg">
                    {t.mostPopular}
                  </span>
                </div>
              )}

              <div>
                <h3 className="font-display font-extrabold text-2xl text-white mb-2">{plan.name}</h3>
                <p className="text-xs sm:text-sm text-neutral-400 min-h-[36px] leading-relaxed">
                  {plan.description}
                </p>

                {/* Price Display */}
                <div className="mt-6 mb-6 pb-6 border-b border-white/[0.08]">
                  <div className="flex items-baseline gap-1">
                    <span className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
                      {currency === "bdt" ? plan.priceBdt : plan.priceUsd}
                    </span>
                    <span className="text-xs text-neutral-400 font-mono">
                      / {plan.period}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#F59E0B]/80 mt-2 flex items-center gap-1.5 font-medium">
                    <Info className="w-3.5 h-3.5 text-[#F59E0B] shrink-0" />
                    <span>{t.hostingCardNote}</span>
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-3.5">
                  <p className="text-xs font-bold uppercase tracking-[0.18em] text-neutral-300">
                    {t.whatsIncluded}
                  </p>
                  <ul className="space-y-3">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                        <Check className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action */}
              <div className="mt-8 pt-6 border-t border-white/[0.08]">
                <a href={plan.ctaLink || "#contact"}>
                  <button
                    className={`w-full py-4 rounded-full font-extrabold text-xs tracking-[0.16em] uppercase transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer ${
                      plan.popular
                        ? "bg-white hover:bg-neutral-200 text-black shadow-[0_0_25px_rgba(255,255,255,0.3)] hover:shadow-[0_0_35px_rgba(255,255,255,0.5)]"
                        : "border border-white/20 hover:border-white/50 text-white bg-white/[0.04] hover:bg-white/[0.08]"
                    }`}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
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
          className="mt-14 rounded-3xl p-6 sm:p-8 border border-white/[0.08] bg-[#141419] flex flex-col md:flex-row items-start md:items-center justify-between gap-6 shadow-[0_20px_50px_rgba(0,0,0,0.6)]"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/[0.04] border border-white/10 text-[#F59E0B] flex items-center justify-center shrink-0 mt-0.5">
              <Server className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2.5 flex-wrap">
                <h4 className="font-display font-extrabold text-base sm:text-lg text-white">
                  {t.hostingNoticeTitle}
                </h4>
                <span className="text-[10px] font-bold px-3 py-0.5 rounded-full bg-[#F59E0B]/10 border border-[#F59E0B]/30 text-[#F59E0B] uppercase tracking-wider">
                  {t.hostingNoticeBadge}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1.5 leading-relaxed max-w-3xl font-normal">
                {t.hostingNoticeDesc}
              </p>
            </div>
          </div>

          <div className="shrink-0 self-stretch md:self-center flex items-center">
            <div className="text-xs font-bold text-white bg-white/[0.04] border border-white/10 px-5 py-2.5 rounded-full inline-flex items-center gap-2 w-full md:w-auto justify-center">
              <Check className="w-4 h-4 text-[#F59E0B] shrink-0" />
              <span>{t.hostingSetupFree}</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
