"use client";

import React, { useState } from "react";
import { useSite } from "@/context/SiteContext";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { motion } from "framer-motion";
import { 
  Check, 
  ArrowUpRight, 
  Zap,
  Server,
  Info,
  Calculator
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
    badgeText: isBn && p.badgeBn ? p.badgeBn : (p.badge || (p.popular ? "GOLDEN STANDARD" : "")),
  }));

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const navHeight = 80;
        const targetPos = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({ top: targetPos, behavior: "smooth" });
        window.history.pushState(null, "", href);
      }
    }
  };

  return (
    <section id="pricing" className="relative py-24 sm:py-32 overflow-hidden scroll-mt-20 bg-[#050505] z-10">
      
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/3 -left-[10%] w-[550px] h-[550px] pointer-events-none rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255, 56, 35, 0.12) 0%, transparent 70%)",
          filter: "blur(120px)",
        }}
        aria-hidden="true" 
      />
      <div 
        className="absolute top-1/2 -right-[10%] w-[550px] h-[550px] pointer-events-none rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255, 149, 0, 0.12) 0%, transparent 70%)",
          filter: "blur(120px)",
        }}
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* ═══ Section Header (Image 2 pattern: Capsule Badge + Centered Headline) ═══ */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-radiant-pill border border-[#FF3823]/30 text-neutral-300 mb-4 shadow-[0_4px_16px_rgba(255,56,35,0.15)]"
          >
            <Zap className="w-3.5 h-3.5 text-[#FF3823]" />
            <span className={`text-[11px] font-semibold tracking-[0.2em] uppercase text-neutral-200 ${isBn ? "font-bangla-ui tracking-normal" : ""}`}>
              {isBn ? "প্যাকেজ ও খরচ" : "PRICING PLANS"}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
            className={`text-3xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase ${isBn ? "font-bangla-display font-black tracking-normal" : "font-display font-black"}`}
          >
            {isBn ? (
              <>
                ডেভেলপমেন্ট <span className="text-gradient-hero">বাজেট ও প্যাকেজ</span>
              </>
            ) : (
              <>
                COST OF <span className="text-gradient-hero">DEVELOPMENT</span>
              </>
            )}
          </motion.h2>

          <p className={`mt-3.5 text-sm sm:text-base text-neutral-400 font-normal leading-relaxed ${isBn ? "font-bangla-body" : ""}`}>
            {isBn
              ? "স্টার্টআপ থেকে শুরু করে এন্টারপ্রাইজ—সব ধরনের ব্যবসার জন্য স্বচ্ছ, সাশ্রয়ী ও ভবিষ্যৎমুখী ডিজিটাল ডেভেলপমেন্ট প্যাকেজ।"
              : "Predictable, transparent digital engineering packages designed for early-stage startups and enterprise scale."}
          </p>

          {/* Currency Switcher Pill */}
          <div className="mt-7 inline-flex items-center p-1 rounded-full bg-white/[0.04] border border-white/[0.08] shadow-[0_8px_20px_rgba(0,0,0,0.5)]">
            <button
              onClick={() => setCurrency("bdt")}
              className={`px-5 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                currency === "bdt"
                  ? "pill-btn-primary shadow-md"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              {t.currencyBdt}
            </button>
            <button
              onClick={() => setCurrency("usd")}
              className={`px-5 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${
                currency === "usd"
                  ? "pill-btn-primary shadow-md"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              {t.currencyUsd}
            </button>
          </div>
        </div>

        {/* ═══ 3 Pricing Cards (Image 2 pattern: Middle Card has Top-Down Glowing Orange Gradient) ═══ */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-7 sm:gap-8 items-stretch pt-2">
          {plans.map((plan, idx) => {
            const isFeatured = plan.popular || idx === 1;

            return (
              <motion.div
                key={plan.id || idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                whileHover={{ y: -6 }}
                className={`p-7 sm:p-8 relative flex flex-col justify-between transition-all duration-300 ${
                  isFeatured
                    ? "glass-middle-featured lg:-translate-y-3"
                    : "glass-radiant"
                }`}
              >
                <div>
                  {/* Card Header & Badge */}
                  <div className="flex items-center justify-between mb-2">
                    <h3 className={`text-xl font-bold text-white ${isBn ? "font-bangla-display" : "font-display"}`}>
                      {plan.name}
                    </h3>
                    {isFeatured && (
                      <span className="text-[10px] font-mono font-bold px-3 py-1 rounded-full bg-[#FF5C35]/20 text-[#FFA000] border border-[#FF5C35]/40 shadow-[0_0_12px_rgba(255,92,53,0.4)]">
                        {plan.badgeText || "POPULAR CHOICE"}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-neutral-400 font-normal mb-6 leading-relaxed">
                    {plan.description}
                  </p>

                  {/* Price */}
                  <div className="pb-6 border-b border-white/[0.08]">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xs text-neutral-400 uppercase tracking-wider">
                        {isBn ? "শুরু" : "from"}
                      </span>
                      <span className={`text-3xl sm:text-4xl font-extrabold text-white tracking-tight ${isFeatured ? "text-gradient-hero drop-shadow-[0_0_15px_rgba(255,56,35,0.4)]" : ""}`}>
                        {currency === "bdt" ? plan.priceBdt : plan.priceUsd}
                      </span>
                    </div>
                    <div className="text-[11px] text-neutral-400 mt-1 font-mono">
                      {plan.period}
                    </div>
                  </div>

                  {/* Checklist */}
                  <div className="py-6 space-y-3">
                    <div className="text-[11px] font-semibold tracking-wider text-neutral-400 uppercase mb-3">
                      {isBn ? "প্যাকেজে যা অন্তর্ভুক্ত:" : "What's included:"}
                    </div>
                    {plan.features.map((feature: string, fIdx: number) => (
                      <div key={fIdx} className="flex items-start gap-3">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                          isFeatured 
                            ? "bg-[#FF3823]/20 text-[#FF5C35] border border-[#FF3823]/40" 
                            : "bg-white/[0.06] text-neutral-300 border border-white/10"
                        }`}>
                          <Check className="w-2.5 h-2.5" />
                        </div>
                        <span className={`text-xs text-neutral-300 leading-relaxed ${isBn ? "font-bangla-body" : ""}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Pill CTA Button with Circular Arrow (Image 2 style) */}
                <div className="pt-4 border-t border-white/[0.06] mt-4">
                  <a
                    href="#contact"
                    onClick={(e) => handleSmoothScroll(e, "#contact")}
                    className="w-full block"
                  >
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full group pl-6 pr-2.5 py-2.5 text-xs font-bold tracking-wider uppercase flex items-center justify-between ${
                        isFeatured
                          ? "pill-btn-primary shadow-[0_10px_30px_rgba(255,56,35,0.5)]"
                          : "pill-btn-glass hover:border-[#FF3823]/40"
                      }`}
                    >
                      <span>{isBn ? "প্যাকেজটি বেছে নিন" : "Select Package"}</span>
                      <span className={`w-7 h-7 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:rotate-45 ${
                        isFeatured ? "bg-white/25 text-white" : "bg-white/10 text-neutral-300 group-hover:text-white"
                      }`}>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </motion.button>
                  </a>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ═══ Bottom Horizon Glow Banner (Image 2 pattern) ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative mt-20 sm:mt-24 rounded-[36px] overflow-hidden p-8 sm:p-12 text-center border border-white/[0.08] shadow-[0_25px_70px_rgba(0,0,0,0.9)]"
        >
          {/* Intense Crimson/Orange Horizon Glow Erupting from Bottom */}
          <div 
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 95% 85% at 50% 100%, rgba(255, 56, 35, 0.45) 0%, rgba(255, 106, 0, 0.22) 40%, rgba(10, 10, 14, 0.85) 85%)",
            }}
          />

          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <h3 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-snug ${isBn ? "font-bangla-display" : "font-display"}`}>
              {isBn 
                ? "কোন প্যাকেজটি আপনার ব্যবসার জন্য সঠিক বুঝতে পারছেন না?" 
                : "Not sure which package to choose?"}
            </h3>
            <p className={`mt-2 text-sm sm:text-base text-neutral-200 leading-relaxed font-normal ${isBn ? "font-bangla-body" : ""}`}>
              {isBn
                ? "আমরা আপনার ব্যবসার লক্ষ্য অনুযায়ী সম্পূর্ণ ফ্রি কাস্টম বাজেট এবং টাইমলাইন হিসাব করে দেব।"
                : "We'll engineer a tailored technical scope and free cost calculation for your exact needs."}
            </p>

            <div className="mt-7">
              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, "#contact")}
              >
                <motion.button
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  className="px-8 py-3.5 rounded-full bg-white text-[#050505] font-extrabold text-xs sm:text-sm tracking-wider uppercase shadow-[0_10px_35px_rgba(255,255,255,0.3)] hover:bg-neutral-100 transition-all flex items-center gap-2.5 cursor-pointer"
                >
                  <Calculator className="w-4 h-4 text-[#FF3823]" />
                  <span>{isBn ? "ফ্রি বাজেট হিসাব করুন" : "Calculate Free Estimate"}</span>
                </motion.button>
              </a>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
