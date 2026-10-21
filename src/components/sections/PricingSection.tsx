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
  const isBn = language === "bn";

  const rawPlans: any[] = (data?.pricing && data.pricing.length > 0) ? data.pricing : (t.plans || []);
  const plans = rawPlans.map((p: any) => ({
    ...p,
    name: isBn && p.nameBn ? p.nameBn : p.name,
    description: isBn && p.descriptionBn ? p.descriptionBn : p.description,
    period: isBn && p.periodBn ? p.periodBn : p.period,
    features: isBn && p.featuresBn && p.featuresBn.length > 0 ? p.featuresBn : (p.features || []),
    badgeText: isBn && p.badgeBn ? p.badgeBn : (p.badge || t.mostPopular),
  }));

  return (
    <section id="pricing" className="relative py-14 sm:py-20 overflow-hidden scroll-mt-20 bg-[#0F1117]">
      {/* Background ambient corner glow - Neon Coral & Vivid Violet */}
      <div 
        className="absolute top-1/2 -left-[10%] w-[500px] h-[500px] bg-[#FF5C35]/[0.06] blur-[150px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 right-[5%] w-[450px] h-[450px] bg-[#7C3AED]/[0.06] blur-[160px] rounded-full pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#181B24] clay-pill text-neutral-300 mb-3.5"
          >
            <Zap className="w-3.5 h-3.5 text-[#FF5C35]" />
            <span className={`text-[11px] font-extrabold tracking-[0.2em] uppercase text-neutral-200 ${isBn ? "font-bangla-ui" : ""}`}>
              {isBn ? "স্বচ্ছ প্যাকেজ ও মূল্যতালিকা" : "TRANSPARENT PRICING"}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ type: "spring", stiffness: 220, damping: 18, delay: 0.08 }}
            className={`text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-none text-clay-3d ${isBn ? "font-bangla-display font-black" : "font-display font-black"}`}
          >
            {isBn ? (
              <>
                আমাদের <span className="text-gradient-hero">ইনভেস্টমেন্ট প্যাকেজ</span>
              </>
            ) : (
              <>
                Investment <span className="text-gradient-hero">Plans</span>
              </>
            )}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ type: "spring", stiffness: 220, damping: 18, delay: 0.15 }}
            className={`mt-3 text-sm sm:text-base text-neutral-400 font-normal leading-relaxed ${isBn ? "font-bangla-body" : ""}`}
          >
            {isBn
              ? "স্টার্টআপ থেকে শুরু করে এন্টারপ্রাইজ—সব ধরনের ব্যবসার জন্য স্বচ্ছ, সাশ্রয়ী ও ভবিষ্যৎমুখী ডিজিটাল ডেভেলপমেন্ট প্যাকেজ।"
              : "Predictable, transparent digital engineering packages designed for early-stage startups and enterprise scale."}
          </motion.p>

          {/* Inflated Clay Currency Switcher */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 240, damping: 18, delay: 0.2 }}
            className="mt-7 inline-flex items-center p-1.5 rounded-full bg-[#14161F] clay-pill"
          >
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrency("bdt")}
              className={`px-6 py-2.5 rounded-full text-xs font-extrabold tracking-wider transition-all cursor-pointer ${isBn ? "font-bangla-ui" : ""} ${
                currency === "bdt"
                  ? "clay-btn-coral text-white scale-105"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              {t.currencyBdt}
            </motion.button>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrency("usd")}
              className={`px-6 py-2.5 rounded-full text-xs font-extrabold tracking-wider transition-all cursor-pointer ${isBn ? "font-bangla-ui" : ""} ${
                currency === "usd"
                  ? "clay-btn-coral text-white scale-105"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              {t.currencyUsd}
            </motion.button>
          </motion.div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 sm:gap-8 items-stretch pt-4">
          {plans.map((plan, idx) => (
            <motion.div
              key={plan.id || idx}
              initial={{ opacity: 0, y: 30, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ type: "spring", stiffness: 220, damping: 18, delay: idx * 0.1 }}
              whileHover={{ y: -8, scale: 1.015 }}
              className={`rounded-[36px] p-7 sm:p-8 relative flex flex-col justify-between transition-all duration-300 ${
                plan.popular
                  ? "clay-card-dark border-2 border-[#FF5C35]/60 shadow-[0_25px_60px_rgba(255,92,53,0.25)] lg:-translate-y-3"
                  : "clay-card-dark"
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className={`text-[10px] font-black uppercase tracking-[0.2em] px-5 py-1.5 rounded-full clay-btn-coral text-white shadow-xl ${isBn ? "font-bangla-ui" : ""}`}>
                    {plan.badgeText || t.mostPopular}
                  </span>
                </div>
              )}

              <div>
                <h3 className={`text-2xl text-white mb-2 font-black text-clay-3d ${isBn ? "font-bangla-display" : "font-display"}`}>{plan.name}</h3>
                <p className="text-xs sm:text-sm text-neutral-400 min-h-[36px] leading-relaxed">
                  {plan.description}
                </p>

                {/* Price Display */}
                <div className="mt-6 mb-6 pb-6 border-b border-white/[0.06]">
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight text-clay-3d">
                      {currency === "bdt" ? plan.priceBdt : plan.priceUsd}
                    </span>
                    <span className="text-xs text-neutral-400 font-mono">
                      / {plan.period}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#FF8B66] mt-2.5 flex items-center gap-1.5 font-medium">
                    <Info className="w-3.5 h-3.5 text-[#FF5C35] shrink-0" />
                    <span>{t.hostingCardNote}</span>
                  </p>
                </div>

                {/* Features List */}
                <div className="space-y-3.5">
                  <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-neutral-200">
                    {t.whatsIncluded}
                  </p>
                  <ul className="space-y-3">
                    {plan.features.map((feat: string, fIdx: number) => (
                      <li key={fIdx} className="flex items-start gap-3 text-xs sm:text-sm text-neutral-300">
                        <div className="w-5 h-5 rounded-full bg-[#14161F] clay-icon-bubble flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-[#FF5C35]" strokeWidth={3} />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Action with Squishy Tactile Elastic Kinetics */}
              <div className="mt-8 pt-6 border-t border-white/[0.06]">
                <a 
                  href={plan.ctaLink || "#contact"}
                  onClick={(e) => {
                    const href = plan.ctaLink || "#contact";
                    if (href.startsWith("#")) {
                      e.preventDefault();
                      const target = document.querySelector(href);
                      if (target) {
                        const navHeight = 72;
                        const targetPos = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                        window.scrollTo({ top: targetPos, behavior: "smooth" });
                        window.history.pushState(null, "", href);
                      }
                    }
                  }}
                >
                  <motion.button
                    whileHover={{ y: -4, scale: 1.025 }}
                    whileTap={{ y: 0, scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 260, damping: 16 }}
                    className={`w-full py-4 text-xs font-black tracking-[0.16em] uppercase flex items-center justify-center gap-2 group cursor-pointer ${
                      plan.popular
                        ? "clay-btn-coral shadow-xl"
                        : "clay-btn-dark shadow-md"
                    } ${isBn ? "font-bangla-ui" : ""}`}
                  >
                    <span>{plan.ctaText || (isBn ? "শুরু করুন" : "Get Started")}</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Hosting & Database Storage Transparency Banner in Inflated Clay */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 220, damping: 18 }}
          className="mt-14 rounded-[32px] p-6 sm:p-8 clay-card-surface flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#14161F] clay-icon-bubble text-[#FF5C35] flex items-center justify-center shrink-0 mt-0.5">
              <Server className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2.5 flex-wrap">
                <h4 className="font-display font-extrabold text-base sm:text-lg text-white text-clay-3d">
                  {t.hostingNoticeTitle}
                </h4>
                <span className="text-[10px] font-bold px-3 py-1 rounded-full bg-[#FF5C35]/15 text-[#FF8B66] clay-pill uppercase tracking-wider">
                  {t.hostingNoticeBadge}
                </span>
              </div>
              <p className="text-xs sm:text-sm text-neutral-400 mt-1.5 leading-relaxed max-w-3xl font-normal">
                {t.hostingNoticeDesc}
              </p>
            </div>
          </div>

          <div className="shrink-0 self-stretch md:self-center flex items-center">
            <div className="text-xs font-bold text-white bg-[#14161F] clay-pill px-5 py-2.5 inline-flex items-center gap-2 w-full md:w-auto justify-center">
              <Check className="w-4 h-4 text-[#10B981] shrink-0" />
              <span>{t.hostingSetupFree}</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
