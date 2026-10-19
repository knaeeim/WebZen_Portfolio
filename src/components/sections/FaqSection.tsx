"use client";

import React, { useState, useEffect } from "react";
import { useSite } from "@/context/SiteContext";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { motion, AnimatePresence } from "framer-motion";
import { 
  HelpCircle, 
  ChevronDown
} from "lucide-react";

export function FaqSection() {
  const { data } = useSite();
  const { language } = useLanguage();
  const t = translations[language].faq;
  const faqs = t.items || data.faqs;

  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || "faq-1");

  useEffect(() => {
    if (faqs.length > 0 && !openId) {
      setOpenId(faqs[0].id);
    }
  }, [language, faqs]);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="relative py-28 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <HelpCircle className="w-3.5 h-3.5" />
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

        {/* Accordion list */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id || idx}
                className="glass-card rounded-2xl border border-white/10 overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => toggleFaq(faq.id)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-semibold text-white group-hover:text-cyan-400 transition-colors">
                    {faq.question}
                  </span>
                  <div
                    className={`w-9 h-9 rounded-full bg-[#0a2847] border border-cyan-500/35 flex items-center justify-center shrink-0 transition-transform duration-300 shadow-sm ${
                      isOpen ? "rotate-180 bg-cyan-500/25 border-cyan-400 text-cyan-300 shadow-md shadow-cyan-500/20" : "text-cyan-400"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4 stroke-[2.5]" />
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 text-slate-300 text-sm leading-relaxed border-t border-white/[0.04] pt-4 font-normal">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
