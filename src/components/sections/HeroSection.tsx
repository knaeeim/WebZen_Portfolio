"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function HeroSection() {
  const { language } = useLanguage();
  const isBn = language === "bn";

  return (
    <section 
      id="hero" 
      className="relative pt-24 sm:pt-32 pb-8 sm:pb-12 flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Subtle diffused radial mesh glows in background */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] sm:w-[850px] h-[300px] sm:h-[450px] bg-gradient-to-r from-[#EC4899]/15 via-[#EF4444]/10 to-[#F59E0B]/15 blur-[150px] rounded-full pointer-events-none -z-10" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        
        {/* Massive Two-Line Centered Headline */}
        <div className="text-center max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className={`tracking-[-0.03em] leading-[1.0] sm:leading-[0.96] ${isBn ? "font-bangla-display" : "font-display font-black"}`}
          >
            {/* Line 1: Pure White */}
            <span className="block text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-[98px] text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.8)]">
              {isBn ? "ফুল-স্ট্যাক ডিজিটাল" : "Full-Stack Digital"}
            </span>

            {/* Line 2: Pink-to-Gold Gradient */}
            <span className="block text-4xl xs:text-5xl sm:text-7xl md:text-8xl lg:text-[98px] text-gradient-hero mt-1 sm:mt-2 py-1">
              {isBn ? "এজেন্সি।" : "Agency."}
            </span>
          </motion.h1>
        </div>

        {/* Hero Composition: Left Floating Cards | Center 3D Sculpture | Right Editorial Block */}
        <div className="mt-8 sm:mt-12 lg:mt-14 grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-6 items-center">
          
          {/* Left: Two Stacked Glassmorphism Cards */}
          <motion.div 
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 flex flex-row lg:flex-col gap-3.5 sm:gap-4 justify-center lg:justify-start order-2 lg:order-1"
          >
            {/* Card 1: 150+ Projects Delivered */}
            <motion.div 
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="flex-1 lg:flex-none bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:border-white/20 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-2 sm:mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B] shadow-[0_0_10px_#F59E0B]" />
                <Sparkles className="w-4 h-4 text-[#F59E0B]/70 group-hover:rotate-12 transition-transform" />
              </div>
              <div className={`text-2xl sm:text-3xl lg:text-4xl text-white font-black tracking-tight ${isBn ? "font-bangla-display" : "font-display"}`}>
                {isBn ? "১৫০+" : "150+"}
              </div>
              <div className={`text-xs sm:text-sm text-neutral-400 font-medium tracking-wide mt-1 ${isBn ? "font-bangla-ui" : ""}`}>
                {isBn ? "সফল প্রজেক্ট ডেলিভারি" : "Projects Delivered"}
              </div>
            </motion.div>

            {/* Card 2: 99% Client Satisfaction */}
            <motion.div 
              whileHover={{ y: -4, scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="flex-1 lg:flex-none bg-white/[0.04] backdrop-blur-xl border border-white/10 rounded-2xl p-4 sm:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.5)] hover:border-white/20 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-2 sm:mb-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#EC4899] shadow-[0_0_10px_#EC4899]" />
                <CheckCircle2 className="w-4 h-4 text-[#EC4899]/70 group-hover:scale-110 transition-transform" />
              </div>
              <div className={`text-2xl sm:text-3xl lg:text-4xl text-white font-black tracking-tight ${isBn ? "font-bangla-display" : "font-display"}`}>
                {isBn ? "৯৯%" : "99%"}
              </div>
              <div className={`text-xs sm:text-sm text-neutral-400 font-medium tracking-wide mt-1 ${isBn ? "font-bangla-ui" : ""}`}>
                {isBn ? "ক্লায়েন্ট সন্তুষ্টি রেট" : "Client Satisfaction"}
              </div>
            </motion.div>
          </motion.div>

          {/* Centerpiece: Striking 3D Abstract Digital Artwork/Sculpture */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.88 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.95, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex justify-center items-center relative order-1 lg:order-2"
          >
            {/* Multi-layered halo backlighting */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#EC4899]/25 via-[#F59E0B]/20 to-transparent blur-[70px] sm:blur-[100px] rounded-full scale-90 pointer-events-none" />

            {/* Outer subtle glowing ring */}
            <div className="relative w-[260px] xs:w-[300px] sm:w-[390px] lg:w-[430px] aspect-square rounded-full flex items-center justify-center p-3">
              <div className="absolute inset-0 rounded-full border border-white/10 border-dashed animate-[spin_60s_linear_infinite] opacity-40 pointer-events-none" />
              
              <div className="relative w-full h-full rounded-3xl overflow-hidden animate-float">
                <img
                  src="/images/hero-3d-sculpture.jpg"
                  alt="Webzen BD Abstract 3D Digital Sculpture"
                  className="w-full h-full object-cover rounded-2xl drop-shadow-[0_25px_60px_rgba(0,0,0,0.9)]"
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Editorial Block & Solid White Pill CTA */}
          <motion.div 
            initial={{ opacity: 0, x: 35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.85, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 flex flex-col justify-center items-start text-left order-3"
          >
            <div className="space-y-4 sm:space-y-5 max-w-sm mx-auto lg:mx-0">
              <div className="w-10 h-0.5 bg-gradient-to-r from-[#EC4899] to-[#F59E0B] rounded-full hidden lg:block" />
              
              <p className={`text-sm sm:text-base text-neutral-300 leading-relaxed font-normal ${isBn ? "font-bangla-body" : ""}`}>
                {isBn 
                  ? "আমরা অত্যাধুনিক ডিজিটাল প্রোডাক্ট, হাই-পারফরম্যান্স ওয়েব আর্কিটেকচার এবং নজরকাড়া UI/UX অভিজ্ঞতা তৈরি করি যা আপনার ব্যবসায় রূপান্তর আনবে।"
                  : "We engineer mission-critical digital products, ultra-responsive web applications, and intuitive user experiences designed to scale enterprise workflows."
                }
              </p>

              {/* Solid White Pill-Shaped CTA Button */}
              <div>
                <a href="#contact">
                  <motion.button 
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`bg-white hover:bg-neutral-200 text-black font-extrabold text-xs sm:text-sm tracking-[0.14em] uppercase px-7 py-3.5 sm:px-8 sm:py-4 rounded-full transition-all duration-300 shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:shadow-[0_0_40px_rgba(255,255,255,0.45)] flex items-center gap-2 group cursor-pointer ${isBn ? "font-bangla-ui" : ""}`}
                  >
                    <span>{isBn ? "প্রজেক্ট শুরু করুন" : "GET STARTED"}</span>
                    <ArrowRight className="w-4 h-4 text-black transition-transform group-hover:translate-x-1" />
                  </motion.button>
                </a>
              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
