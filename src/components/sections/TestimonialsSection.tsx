"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, Heart } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function TestimonialsSection() {
  const { language } = useLanguage();
  const isBn = language === "bn";

  const testimonials = isBn
    ? [
        {
          avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
          reaction: "❤️",
          rating: 5,
          review:
            "Webzen BD আমাদের মেডিকেল টেলিমেডিসিন প্ল্যাটফর্ম ও রিয়েল-টাইম সিরিয়াল বুকিং সিস্টেম তৈরি করে দেয়। এর পারফরম্যান্স এতটাই মসৃণ যে মাত্র ৬০ দিনে আমাদের দৈনিক পেশেন্ট বুকিং ৩৪০% বৃদ্ধি পেয়েছে।",
          name: "ডা. আবরার চৌধুরী",
          designation: "ফাউন্ডার ও চিফ মেডিকেল অফিসার, কেয়ারপালস বিডি",
        },
        {
          avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
          reaction: "🔥",
          rating: 5,
          review:
            "ঢাকার সফটওয়্যার ইন্ডাস্ট্রিতে Webzen BD-র কোডিং স্ট্যান্ডার্ড ও স্পিড অতুলনীয়। Next.js 16 দিয়ে তারা আমাদের অনলাইন শপ পুনর্নির্মাণ করার পর পেজ লোড টাইম মাত্র ০.৪ সেকেন্ডে নেমে এসেছে!",
          name: "সারাহ রহমান",
          designation: "ভিপি অব প্রোডাক্ট, অ্যাপেক্স রিটেইল টেকনোলজিস",
        },
        {
          avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
          reaction: "🚀",
          rating: 5,
          review:
            "Webzen BD-র সাথে কাজ করে মনে হয়েছে সিলিকন ভ্যালির একদল দক্ষ ইঞ্জিনিয়ার আমাদের প্রজেক্টে কাজ করছে। আমাদের ফিন্যান্সিয়াল ড্যাশবোর্ডে ৫০,০০০ কনকারেন্ট কানেকশন কোনো ল্যাগ ছাড়াই চলছে।",
          name: "তানভীর হাসান",
          designation: "সিটিও, ফিনফ্লো গ্লোবাল সল্যুশনস",
        },
      ]
    : [
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
    <section id="testimonials" className="relative py-10 sm:py-14 overflow-hidden scroll-mt-20">
      {/* Background ambient lighting */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-r from-[#EC4899]/10 to-[#F59E0B]/10 blur-[150px] rounded-full pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title: "Our happy Customers" Centered */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 mb-3"
          >
            <Heart className="w-3.5 h-3.5 text-[#EC4899]" />
            <span className={`text-[11px] font-bold tracking-[0.2em] uppercase text-neutral-300 ${isBn ? "font-bangla-ui" : ""}`}>
              {isBn ? "ক্লায়েন্ট সন্তুষ্টি ও রিভিউ" : "CLIENT TESTIMONIALS"}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.08 }}
            className={`text-3xl sm:text-5xl md:text-6xl text-white tracking-tight ${isBn ? "font-bangla-display font-black" : "font-display font-black"}`}
          >
            {isBn ? (
              <>
                আমাদের সন্তুষ্ট <span className="text-gradient-hero">গ্রাহকদের মন্তব্য</span>
              </>
            ) : (
              "Our happy Customers"
            )}
          </motion.h2>
        </div>

        {/* 3-Column Horizontal Card Grid with Overlapping Dual Badges */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-6 pt-4">
          {testimonials.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.65, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6 }}
              className="relative bg-[#16161A] border border-white/[0.08] rounded-3xl p-6 sm:p-7 pt-11 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.6)] hover:border-white/20 transition-all duration-300 group"
            >
              {/* Unique Detail: Overlapping the top-center border are two circular badges (client avatar + reaction) */}
              <div className="absolute -top-7 left-1/2 -translate-x-1/2 flex items-center justify-center">
                {/* Badge 1: Client Avatar */}
                <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full border-2 border-[#16161A] overflow-hidden bg-neutral-800 shadow-[0_8px_20px_rgba(0,0,0,0.7)] shrink-0 group-hover:scale-105 transition-transform">
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
              <div className="space-y-3.5 pt-1">
                {/* 5 Orange Stars */}
                <div className="flex items-center justify-center gap-1.5">
                  {[...Array(item.rating)].map((_, starIdx) => (
                    <Star
                      key={starIdx}
                      className="w-3.5 h-3.5 fill-[#F59E0B] text-[#F59E0B] drop-shadow-[0_0_6px_rgba(245,158,11,0.5)]"
                    />
                  ))}
                </div>

                {/* Client Review Quote - uses Tiro Bangla in Bengali */}
                <p className={`text-sm sm:text-[14.5px] text-neutral-300 text-center leading-relaxed font-normal ${isBn ? "font-bangla-serif text-base" : ""}`}>
                  &ldquo;{item.review}&rdquo;
                </p>
              </div>

              {/* Author info */}
              <div className="pt-5 border-t border-white/[0.06] mt-5 text-center">
                <div className={`text-white text-base tracking-wide font-extrabold ${isBn ? "font-bangla-display" : "font-display"}`}>
                  {item.name}
                </div>
                <div className={`text-xs text-[#F59E0B] font-medium tracking-wide mt-0.5 ${isBn ? "font-bangla-ui" : ""}`}>
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
