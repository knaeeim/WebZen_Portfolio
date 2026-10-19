"use client";

import React, { useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { motion } from "framer-motion";
import { 
  Calculator, 
  Check, 
  ArrowRight, 
  ShieldCheck,
  Info
} from "lucide-react";
import { Button } from "@/components/ui/button";

export function CalculatorSection() {
  const { language } = useLanguage();
  const t = translations[language].calculator;

  const [projectType, setProjectType] = useState<string>("webapp");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    "animations",
    "cms",
    "payments",
  ]);
  const [timelineUrgency, setTimelineUrgency] = useState<string>("standard");

  const projectTypes = language === "bn"
    ? [
        { id: "brand", name: "কর্পোরেট / ব্র্যান্ড ওয়েবসাইট", baseBdt: 16000, baseUsd: 150, time: "২-৩ সপ্তাহ" },
        { id: "healthtech", name: "হেলথটেক ও ডক্টর সিরিয়াল বুকিং পোর্টাল", baseBdt: 32000, baseUsd: 290, time: "৩-৪ সপ্তাহ" },
        { id: "ecommerce", name: "অনলাইন শপ (ই-কমার্স ও বিকাশ পেমেন্ট)", baseBdt: 36000, baseUsd: 330, time: "৩-৪ সপ্তাহ" },
        { id: "webapp", name: "কাস্টম সফটওয়্যার / ওয়েব অ্যাপ", baseBdt: 53000, baseUsd: 490, time: "৪-৫ সপ্তাহ" },
        { id: "mobile", name: "মোবাইল অ্যাপস (Android ও iOS)", baseBdt: 63000, baseUsd: 580, time: "৫-৬ সপ্তাহ" },
        { id: "ai", name: "AI চ্যাটবট ও বিজনেস অটোমেশন", baseBdt: 46000, baseUsd: 420, time: "৩-৫ সপ্তাহ" },
      ]
    : [
        { id: "brand", name: "Corporate / Brand Website", baseBdt: 16000, baseUsd: 150, time: "2-3 Weeks" },
        { id: "healthtech", name: "HealthTech & Doctor Appointment Portal", baseBdt: 32000, baseUsd: 290, time: "3-4 Weeks" },
        { id: "ecommerce", name: "Online Store & E-Commerce (bKash/Card)", baseBdt: 36000, baseUsd: 330, time: "3-4 Weeks" },
        { id: "webapp", name: "Custom Software / Web App", baseBdt: 53000, baseUsd: 490, time: "4-5 Weeks" },
        { id: "mobile", name: "Mobile App (iOS & Android)", baseBdt: 63000, baseUsd: 580, time: "5-6 Weeks" },
        { id: "ai", name: "AI Chatbot & Automation", baseBdt: 46000, baseUsd: 420, time: "3-5 Weeks" },
      ];

  const featuresList = language === "bn"
    ? [
        { id: "animations", name: "স্মুথ প্রিমিয়াম অ্যানিমেশন ও মডার্ন লুক", bdt: 3000, usd: 30 },
        { id: "payments", name: "বিকাশ, নগদ ও কার্ড পেমেন্ট গেটওয়ে", bdt: 4000, usd: 40 },
        { id: "cms", name: "সহজ ড্যাশবোর্ড (কোডিং ছাড়াই লেখা ও ছবি পরিবর্তন)", bdt: 5000, usd: 45 },
        { id: "ai_bot", name: "স্মার্ট কাস্টমার কেয়ার চ্যাটবট", bdt: 6000, usd: 55 },
        { id: "multilingual", name: "বাংলা ও ইংরেজি উভয় ভাষার সুবিধা (Bilingual)", bdt: 3000, usd: 30 },
        { id: "cloud_devops", name: "ক্লাউড সার্ভার ডেপ্লয়মেন্ট ও ব্যাকআপ সেটআপ (সার্ভার ফি আলাদা)", bdt: 4000, usd: 40 },
      ]
    : [
        { id: "animations", name: "Smooth Micro-Animations & Modern UI", bdt: 3000, usd: 30 },
        { id: "payments", name: "bKash, Nagad & Card Gateways", bdt: 4000, usd: 40 },
        { id: "cms", name: "Custom Content Management Studio", bdt: 5000, usd: 45 },
        { id: "ai_bot", name: "Smart AI Chatbot & Auto-responder", bdt: 6000, usd: 55 },
        { id: "multilingual", name: "Bilingual Support (Bangla & English)", bdt: 3000, usd: 30 },
        { id: "cloud_devops", name: "Cloud Server Deployment & Backup (Hosting Billed to Client)", bdt: 4000, usd: 40 },
      ];

  const urgencyMultipliers: Record<string, { multiplier: number; label: string }> = language === "bn"
    ? {
        standard: { multiplier: 1.0, label: "স্বাভাবিক সময় (স্ট্যান্ডার্ড)" },
        fast: { multiplier: 1.25, label: "একটু দ্রুত ডেলিভারি (+২৫% স্পিড)" },
        rush: { multiplier: 1.5, label: "ইমার্জেন্সি সুপারফাস্ট ডেলিভারি (+৫০% স্পিড)" },
      }
    : {
        standard: { multiplier: 1.0, label: "Standard Pace" },
        fast: { multiplier: 1.25, label: "Fast Sprint (+25%)" },
        rush: { multiplier: 1.5, label: "Express Rush (+50%)" },
      };

  const toggleFeature = (id: string) => {
    setSelectedFeatures((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );
  };

  const currentType = projectTypes.find((p) => p.id === projectType) || projectTypes[0];
  const featureBdtTotal = selectedFeatures.reduce((acc, fId) => {
    const f = featuresList.find((item) => item.id === fId);
    return acc + (f ? f.bdt : 0);
  }, 0);
  const featureUsdTotal = selectedFeatures.reduce((acc, fId) => {
    const f = featuresList.find((item) => item.id === fId);
    return acc + (f ? f.usd : 0);
  }, 0);

  const urgency = urgencyMultipliers[timelineUrgency] || urgencyMultipliers.standard;
  const totalBdt = Math.round((currentType.baseBdt + featureBdtTotal) * urgency.multiplier);
  const totalUsd = Math.round((currentType.baseUsd + featureUsdTotal) * urgency.multiplier);

  return (
    <section id="calculator" className="relative py-28 overflow-hidden bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
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

        {/* Calculator Widget Card */}
        <div className="glass-card rounded-3xl p-6 sm:p-10 border border-cyan-500/20 max-w-5xl mx-auto shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Controls (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              
              {/* Step 1: Project Type */}
              <div>
                <label className="text-xs uppercase font-bold tracking-wider text-cyan-400 block mb-3">
                  {t.step1}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {projectTypes.map((type) => (
                    <button
                      key={type.id}
                      onClick={() => setProjectType(type.id)}
                      className={`p-3.5 rounded-2xl text-left border transition-all duration-200 flex flex-col justify-between ${
                        projectType === type.id
                          ? "bg-cyan-950/40 border-cyan-400 text-white shadow-md shadow-cyan-500/10"
                          : "bg-white/[0.02] border-white/10 text-slate-300 hover:border-white/20 hover:bg-white/[0.04]"
                      }`}
                    >
                      <span className="font-semibold text-xs leading-snug">{type.name}</span>
                      <span className="text-[10px] text-cyan-400/80 mt-1 font-mono">
                        {language === "bn" ? "শুরু:" : "Base:"} ৳{type.baseBdt.toLocaleString()} / ${type.baseUsd}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Features Checklist */}
              <div>
                <label className="text-xs uppercase font-bold tracking-wider text-cyan-400 block mb-3">
                  {t.step2}
                </label>
                <div className="space-y-2">
                  {featuresList.map((f) => {
                    const isChecked = selectedFeatures.includes(f.id);
                    return (
                      <div
                        key={f.id}
                        onClick={() => toggleFeature(f.id)}
                        className={`p-3 rounded-xl border flex items-center justify-between cursor-pointer transition-all ${
                          isChecked
                            ? "bg-cyan-500/10 border-cyan-500/40 text-white"
                            : "bg-white/[0.02] border-white/10 text-slate-300 hover:border-white/20"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-4 h-4 rounded flex items-center justify-center border transition-colors ${
                              isChecked
                                ? "bg-cyan-500 border-cyan-400 text-slate-950"
                                : "border-slate-500 bg-transparent"
                            }`}
                          >
                            {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                          </div>
                          <span className="text-xs font-medium">{f.name}</span>
                        </div>
                        <span className="text-[11px] font-mono text-cyan-400 shrink-0 ml-2">
                          +৳{f.bdt.toLocaleString()}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Step 3: Urgency */}
              <div>
                <label className="text-xs uppercase font-bold tracking-wider text-cyan-400 block mb-3">
                  {t.step3}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {Object.entries(urgencyMultipliers).map(([key, item]) => (
                    <button
                      key={key}
                      onClick={() => setTimelineUrgency(key)}
                      className={`p-3 rounded-xl text-center border text-xs font-medium transition-all ${
                        timelineUrgency === key
                          ? "bg-cyan-500 text-slate-950 font-bold border-cyan-400 shadow-md shadow-cyan-500/20"
                          : "bg-white/[0.02] border-white/10 text-slate-300 hover:border-white/20"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Summary Panel (5 cols) */}
            <div className="lg:col-span-5 bg-gradient-to-b from-[#091122] to-[#050914] p-6 sm:p-8 rounded-2xl border border-cyan-500/30 flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
                    {t.summaryHeading}
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 font-semibold">
                    {t.estimateReady}
                  </span>
                </div>

                {/* Primary Price Display */}
                <div className="mt-6">
                  <div className="text-[11px] uppercase tracking-wider text-slate-400">
                    {t.estimatedTotal}
                  </div>
                  <div className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight mt-1">
                    <span className="text-gradient-cyan">৳ {totalBdt.toLocaleString()}</span>
                  </div>
                  <div className="text-xs text-slate-400 mt-1 font-mono">
                    ≈ ${totalUsd.toLocaleString()} USD ({t.globalClients})
                  </div>

                  {/* Hosting Disclaimer Callout */}
                  <div className="mt-3.5 p-3 rounded-xl bg-amber-950/25 border border-amber-500/30 text-[11px] text-amber-200/90 flex items-start gap-2 leading-relaxed">
                    <Info className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{t.hostingNotice}</span>
                  </div>
                </div>

                {/* Scope breakdown details */}
                <div className="mt-6 space-y-2.5 pt-6 border-t border-white/10 text-xs">
                  <div className="flex justify-between text-slate-300">
                    <span>{t.baseArch}</span>
                    <span className="font-semibold text-white">{currentType.name}</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>{t.selectedModules}</span>
                    <span className="font-semibold text-cyan-400">{selectedFeatures.length} {language === "bn" ? "টি মডিউল" : "Modules"}</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>{t.hostingScope}</span>
                    <span className="font-semibold text-amber-300 text-right">{t.hostingClientPaid}</span>
                  </div>
                  <div className="flex justify-between text-slate-300">
                    <span>{t.targetDelivery}</span>
                    <span className="font-semibold text-emerald-400">{currentType.time}</span>
                  </div>
                </div>

                <div className="mt-6 p-3 rounded-xl bg-cyan-950/20 border border-cyan-500/20 text-[11px] text-slate-300 flex items-start gap-2">
                  <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{t.guarantee}</span>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-8 pt-4">
                <a href="#contact">
                  <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-bold h-12 text-xs rounded-xl shadow-lg shadow-cyan-500/25 group">
                    <span>{t.ctaBtn}</span>
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </Button>
                </a>
                <p className="text-[10px] text-center text-slate-400 mt-2">
                  {t.noCommitment}
                </p>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
