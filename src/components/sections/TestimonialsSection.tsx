"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Heart } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useSite } from "@/context/SiteContext";

export function TestimonialsSection() {
  const { language } = useLanguage();
  const { data } = useSite();
  const isBn = language === "bn";

  const rawTestimonials = (data?.testimonials && data.testimonials.length > 0) ? data.testimonials : [];

  const testimonials = rawTestimonials.map((t, idx) => ({
    id: t.id,
    avatar: t.avatar || "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    reaction: t.reaction || (idx % 3 === 0 ? "❤️" : idx % 3 === 1 ? "🔥" : "🚀"),
    rating: t.rating || 5,
    review: (isBn && t.contentBn) ? t.contentBn : (t.content || ""),
    name: (isBn && t.nameBn) ? t.nameBn : (t.name || "Client"),
    designation: [
      (isBn && t.roleBn) ? t.roleBn : t.role,
      t.company,
      t.location
    ].filter(Boolean).join(", "),
  }));

  return (
    <section id="testimonials" className="relative py-20 sm:py-28 overflow-hidden scroll-mt-20 bg-[#060813]">
      {/* Background ambient lighting - Soft Teal & Lavender Aurora */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-[#2DD4BF]/[0.05] to-[#C084FC]/[0.05] blur-[160px] rounded-full pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full glass-zen-pill text-neutral-300 mb-4"
          >
            <Heart className="w-3.5 h-3.5 text-[#2DD4BF]" />
            <span className={`text-[11px] font-semibold tracking-[0.2em] uppercase text-neutral-200 ${isBn ? "font-bangla-ui tracking-normal" : ""}`}>
              {isBn ? "ক্লায়েন্ট সন্তুষ্টি ও রিভিউ" : "CLIENT TESTIMONIALS"}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ type: "spring", stiffness: 220, damping: 18, delay: 0.08 }}
            className={`text-3xl sm:text-5xl md:text-6xl text-white tracking-tight ${isBn ? "font-bangla-display font-black" : "font-display font-black"}`}
          >
            {isBn ? (
              <>
                আমাদের সন্তুষ্ট <span className="text-gradient-aurora">গ্রাহকদের মন্তব্য</span>
              </>
            ) : (
              "Our Happy Customers"
            )}
          </motion.h2>
        </div>

        {/* 3-Column Horizontal Card Grid with Ethereal Floating Avatars */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-7 pt-4">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ type: "spring", stiffness: 220, damping: 18, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="relative glass-zen rounded-[32px] p-6 sm:p-8 pt-12 flex flex-col justify-between group border border-white/[0.08] hover:border-[#2DD4BF]/30 transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
            >
              {/* Overlapping top avatar in starlight halo */}
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 flex items-center justify-center">
                {/* Avatar with Aurora Ring */}
                <div className="w-14 h-14 rounded-full p-1 bg-[#060813] border-2 border-[#2DD4BF]/40 overflow-hidden shadow-[0_0_20px_rgba(45,212,191,0.35)] shrink-0 group-hover:scale-105 transition-transform">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-full h-full object-cover rounded-full"
                  />
                </div>

                {/* Overlapping Reaction Bead */}
                <div className="w-7 h-7 rounded-full bg-[#060813] border border-[#2DD4BF]/50 flex items-center justify-center text-xs shadow-md -ml-3 z-10 select-none">
                  <span>{item.reaction}</span>
                </div>
              </div>

              {/* 5 Golden Stars */}
              <div className="flex items-center justify-center gap-1.5 pt-2 mb-3">
                {[...Array(item.rating)].map((_, starIdx) => (
                  <Star
                    key={starIdx}
                    className="w-4 h-4 fill-[#FBBF24] text-[#FBBF24] drop-shadow-[0_0_6px_rgba(251,191,36,0.5)]"
                  />
                ))}
              </div>

              {/* Card Content */}
              <div className="space-y-3 pt-1">
                <p className={`text-sm sm:text-[14.5px] text-neutral-300 text-center leading-relaxed font-normal ${isBn ? "font-bangla-serif text-base" : ""}`}>
                  &ldquo;{item.review}&rdquo;
                </p>
              </div>

              {/* Author info */}
              <div className="pt-5 border-t border-white/[0.06] mt-5 text-center">
                <div className={`text-white text-base tracking-wide font-bold ${isBn ? "font-bangla-display" : "font-display"}`}>
                  {item.name}
                </div>
                <div className={`text-xs text-[#2DD4BF] font-medium tracking-wide mt-0.5 ${isBn ? "font-bangla-ui" : ""}`}>
                  {item.designation}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
