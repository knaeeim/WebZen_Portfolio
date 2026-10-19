"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Heart } from "lucide-react";

export function TestimonialsSection() {
  const testimonials = [
    {
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      reaction: "❤️",
      rating: 5,
      review:
        "Webzen BD built our medical teleconsultation platform with real-time slot booking and bKash automated reconciliation. The performance is silky-smooth, zero downtime, and our daily patient bookings skyrocketed by 340% within 60 days.",
      name: "Dr. Abrar Chowdhury",
      designation: "Founder & Chief Medical Officer, CarePulse BD",
    },
    {
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
      reaction: "🔥",
      rating: 5,
      review:
        "The engineering fidelity of Webzen BD is unmatched in Dhaka. They revamped our D2C e-commerce platform with Next.js 16 and custom headless checkout. Average page load dropped to 0.4 seconds, and checkout conversions doubled immediately.",
      name: "Sarah Rahman",
      designation: "VP of Product, Apex Retail Technologies",
    },
    {
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      reaction: "🚀",
      rating: 5,
      review:
        "Working with Webzen BD felt like having a Silicon Valley engineering team right here in Dhaka. Their architecture for our financial dashboard handled over 50,000 concurrent socket connections without breaking a sweat. Absolute rockstars.",
      name: "Tanvir Hasan",
      designation: "CTO, FinFlow Global Solutions",
    },
  ];

  return (
    <section id="testimonials" className="relative py-28 sm:py-36 overflow-hidden scroll-mt-24">
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-[#EC4899]/10 to-[#F59E0B]/10 blur-[160px] rounded-full pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title: "Our happy Customers" Centered */}
        <div className="text-center max-w-3xl mx-auto mb-24 sm:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 mb-4"
          >
            <Heart className="w-3.5 h-3.5 text-[#EC4899]" />
            <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-neutral-300">
              CLIENT TESTIMONIALS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="font-display font-black text-3xl sm:text-5xl md:text-6xl text-white tracking-tight"
          >
            Our happy Customers
          </motion.h2>
        </div>

        {/* 3-Column Horizontal Card Grid with Overlapping Dual Badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-8 pt-4">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative bg-[#16161A] border border-white/[0.08] rounded-3xl p-7 sm:p-8 pt-12 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:border-white/20 transition-all duration-300 group"
            >
              {/* Unique Detail: Overlapping the top-center border are two circular badges (client avatar + reaction) */}
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 flex items-center justify-center">
                {/* Badge 1: Client Avatar */}
                <div className="w-14 h-14 rounded-full border-2 border-[#16161A] overflow-hidden bg-neutral-800 shadow-[0_8px_20px_rgba(0,0,0,0.7)] shrink-0 group-hover:scale-105 transition-transform">
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Badge 2: Overlapping Heart / Reaction Badge */}
                <div className="w-7 h-7 rounded-full bg-gradient-to-tr from-[#EF4444] to-[#F59E0B] border-2 border-[#16161A] flex items-center justify-center text-xs shadow-lg -ml-3 z-10 select-none animate-pulse">
                  <span>{item.reaction}</span>
                </div>
              </div>

              {/* Card Content */}
              <div className="space-y-4 pt-2">
                {/* 5 Orange Stars */}
                <div className="flex items-center justify-center gap-1.5">
                  {[...Array(item.rating)].map((_, starIdx) => (
                    <Star
                      key={starIdx}
                      className="w-4 h-4 fill-[#F59E0B] text-[#F59E0B] drop-shadow-[0_0_6px_rgba(245,158,11,0.5)]"
                    />
                  ))}
                </div>

                {/* Client Review Quote */}
                <p className="text-sm sm:text-[15px] text-neutral-300 text-center leading-relaxed font-normal">
                  &ldquo;{item.review}&rdquo;
                </p>
              </div>

              {/* Author info */}
              <div className="pt-6 border-t border-white/[0.06] mt-6 text-center">
                <div className="font-display font-extrabold text-white text-base tracking-wide">
                  {item.name}
                </div>
                <div className="text-xs text-[#F59E0B] font-medium tracking-wide mt-1">
                  {item.designation}
                </div>
              </div>

              {/* Subtle Bottom-Edge Warm Gradient Border Glow */}
              <div className="absolute bottom-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-[#EC4899] to-[#F59E0B] opacity-75 group-hover:opacity-100 transition-opacity rounded-full shadow-[0_0_12px_#EC4899]" />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
