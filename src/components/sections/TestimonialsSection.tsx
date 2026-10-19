"use client";

import React from "react";
import { useSite } from "@/context/SiteContext";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { motion } from "framer-motion";
import { 
  Star, 
  MapPin, 
  HeartHandshake
} from "lucide-react";

export function TestimonialsSection() {
  const { data } = useSite();
  const { language } = useLanguage();
  const t = translations[language].testimonials;
  const testimonials = t.items || data.testimonials;

  return (
    <section id="testimonials" className="relative py-28 overflow-hidden bg-cyan-500/[0.02] dark:bg-black/20 scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <HeartHandshake className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-normal leading-[1.35] sm:leading-[1.3] pb-1">
            <span className="inline-block">{t.heading}</span>{" "}
            <span className="text-gradient-cyan inline-block mx-1.5">{t.headingGradient}</span>
          </h2>
          <p className="mt-4 text-base text-slate-600 dark:text-slate-300">
            {t.subheading}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((item, idx) => (
            <motion.div
              key={item.id || idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="glass-card rounded-3xl p-8 border border-cyan-500/15 dark:border-white/10 hover:border-cyan-500/40 relative flex flex-col justify-between group"
            >
              <div>
                {/* Rating & Location */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  <div className="flex items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-white/[0.04] px-2.5 py-1 rounded-full border border-slate-200 dark:border-white/5">
                    <MapPin className="w-3 h-3 text-cyan-600 dark:text-cyan-400" />
                    <span>{item.location}</span>
                  </div>
                </div>

                {/* Review Quote */}
                <p className="text-slate-700 dark:text-slate-200 text-sm sm:text-base leading-relaxed italic relative">
                  "{item.content}"
                </p>
              </div>

              {/* Author profile */}
              <div className="mt-8 pt-6 border-t border-slate-200 dark:border-white/[0.08] flex items-center gap-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-cyan-500/40 dark:border-cyan-400/40 shrink-0"
                />
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                    {item.name}
                  </h4>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {item.role} • <span className="text-cyan-600 dark:text-cyan-300 font-medium">{item.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
