"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, MessageSquareQuote } from "lucide-react";
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
    rating: t.rating || 5,
    review: (isBn && t.contentBn) ? t.contentBn : (t.content || ""),
    name: (isBn && t.nameBn) ? t.nameBn : (t.name || "Client"),
    designation: [
      (isBn && t.roleBn) ? t.roleBn : t.role,
      t.company,
      t.location
    ].filter(Boolean).join(" • "),
  }));

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Safe window of 3 items for carousel (left, active, right)
  const getIndex = (offset: number) => {
    const len = testimonials.length || 1;
    return (currentIndex + offset + len) % len;
  };

  return (
    <section id="testimonials" className="relative py-24 sm:py-32 overflow-hidden scroll-mt-20 bg-[#050505] z-10">
      
      {/* Ambient background crimson glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[450px] pointer-events-none rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255, 56, 35, 0.14) 0%, rgba(255, 106, 0, 0.08) 45%, transparent 75%)",
          filter: "blur(110px)",
        }}
        aria-hidden="true" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        
        {/* ═══ Header (Image 2 style: Capsule Badge + Centered Headline) ═══ */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-radiant-pill border border-[#FF3823]/30 text-neutral-300 mb-4 shadow-[0_4px_16px_rgba(255,56,35,0.15)]"
          >
            <MessageSquareQuote className="w-3.5 h-3.5 text-[#FF3823]" />
            <span className={`text-[11px] font-semibold tracking-[0.2em] uppercase text-neutral-200 ${isBn ? "font-bangla-ui tracking-normal" : ""}`}>
              {isBn ? "ক্লায়েন্ট রিভিউ" : "REVIEWS"}
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
                আমাদের নিয়ে কী বলেন <span className="text-gradient-hero">ক্লায়েন্টরা?</span>
              </>
            ) : (
              <>
                WHAT THEY <span className="text-gradient-hero">SAY ABOUT US?</span>
              </>
            )}
          </motion.h2>
        </div>

        {/* ═══ 3D Tilted/Angled Carousel Layout (Image 2 pattern) ═══ */}
        <div className="relative max-w-5xl mx-auto px-2 sm:px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-center">
            
            {/* Left Card: Tilted Counter-Clockwise (-5deg) */}
            {testimonials.length > 1 && (
              <motion.div
                key={`left-${getIndex(-1)}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 0.75, scale: 0.94, rotate: -5 }}
                transition={{ duration: 0.5 }}
                className="hidden md:block glass-radiant rounded-[28px] p-6 border border-white/[0.06] hover:border-[#FF3823]/30 transition-all cursor-pointer"
                onClick={prevSlide}
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonials[getIndex(-1)]?.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#FFA000] text-[#FFA000]" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-neutral-400 line-clamp-4 leading-relaxed">
                  &ldquo;{testimonials[getIndex(-1)]?.review}&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-5 pt-4 border-t border-white/[0.06]">
                  <img src={testimonials[getIndex(-1)]?.avatar} alt="" className="w-8 h-8 rounded-full object-cover border border-white/20" />
                  <div>
                    <div className="text-white text-xs font-bold">{testimonials[getIndex(-1)]?.name}</div>
                    <div className="text-[10px] text-neutral-400">{testimonials[getIndex(-1)]?.designation}</div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Center Elevated Active Card (Image 2 prominent centerpiece) */}
            {testimonials.length > 0 && (
              <motion.div
                key={`center-${currentIndex}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0, scale: 1.05 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                className="z-20 glass-radiant rounded-[32px] p-7 sm:p-8 border-2 border-[#FF3823]/45 shadow-[0_25px_60px_-10px_rgba(0,0,0,0.9),0_0_40px_rgba(255,56,35,0.22)] flex flex-col justify-between"
              >
                <div>
                  {/* Rating Stars */}
                  <div className="flex items-center gap-1.5 mb-4">
                    {[...Array(testimonials[currentIndex]?.rating || 5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FFA000] text-[#FFA000] drop-shadow-[0_0_8px_rgba(255,160,0,0.6)]" />
                    ))}
                  </div>

                  {/* Review Text */}
                  <p className={`text-sm sm:text-base text-neutral-200 leading-relaxed font-normal ${isBn ? "font-bangla-body" : ""}`}>
                    &ldquo;{testimonials[currentIndex]?.review}&rdquo;
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3.5 mt-7 pt-5 border-t border-white/[0.08]">
                  <div className="relative">
                    <img
                      src={testimonials[currentIndex]?.avatar}
                      alt={testimonials[currentIndex]?.name}
                      className="w-11 h-11 rounded-full object-cover border-2 border-[#FF3823]/60 shadow-[0_0_15px_rgba(255,56,35,0.4)]"
                    />
                    <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#050505] flex items-center justify-center text-[10px]">
                      ❤️
                    </span>
                  </div>
                  <div>
                    <div className={`text-white text-sm sm:text-base font-bold ${isBn ? "font-bangla-display" : "font-display"}`}>
                      {testimonials[currentIndex]?.name}
                    </div>
                    <div className="text-[11px] sm:text-xs text-[#FF8A00] font-medium">
                      {testimonials[currentIndex]?.designation}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Right Card: Tilted Clockwise (+5deg) */}
            {testimonials.length > 2 && (
              <motion.div
                key={`right-${getIndex(1)}`}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 0.75, scale: 0.94, rotate: 5 }}
                transition={{ duration: 0.5 }}
                className="hidden md:block glass-radiant rounded-[28px] p-6 border border-white/[0.06] hover:border-[#FF3823]/30 transition-all cursor-pointer"
                onClick={nextSlide}
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonials[getIndex(1)]?.rating || 5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-[#FFA000] text-[#FFA000]" />
                  ))}
                </div>
                <p className="text-xs sm:text-sm text-neutral-400 line-clamp-4 leading-relaxed">
                  &ldquo;{testimonials[getIndex(1)]?.review}&rdquo;
                </p>
                <div className="flex items-center gap-3 mt-5 pt-4 border-t border-white/[0.06]">
                  <img src={testimonials[getIndex(1)]?.avatar} alt="" className="w-8 h-8 rounded-full object-cover border border-white/20" />
                  <div>
                    <div className="text-white text-xs font-bold">{testimonials[getIndex(1)]?.name}</div>
                    <div className="text-[10px] text-neutral-400">{testimonials[getIndex(1)]?.designation}</div>
                  </div>
                </div>
              </motion.div>
            )}

          </div>

          {/* ═══ Navigation Controls (Image 2 circular buttons) ═══ */}
          <div className="flex items-center justify-center gap-4 mt-8 sm:mt-10">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevSlide}
              className="w-11 h-11 rounded-full glass-radiant-pill border border-white/10 flex items-center justify-center text-white hover:border-[#FF3823]/50 hover:text-[#FF3823] transition-colors"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextSlide}
              className="w-11 h-11 rounded-full glass-radiant-pill border border-white/10 flex items-center justify-center text-white hover:border-[#FF3823]/50 hover:text-[#FF3823] transition-colors"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>

        </div>

      </div>
    </section>
  );
}
