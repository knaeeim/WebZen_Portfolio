"use client";

import React, { useState } from "react";
import { useSite } from "@/context/SiteContext";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MapPin, 
  TrendingUp, 
  FolderGit2,
  ArrowUpRight
} from "lucide-react";

export function ProjectsSection() {
  const { data } = useSite();
  const { language } = useLanguage();
  const t = translations[language].projects;
  const { projects } = data;
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const fallbackCategories = [
    { id: "HealthTech", name: "HealthTech & Booking", nameBn: "হেলথটেক ও সিরিয়াল বুকিং" },
    { id: "Web Applications", name: "E-Commerce & Web", nameBn: "ই-কমার্স ও ওয়েবসাইট" },
    { id: "FinTech", name: "FinTech & Payments", nameBn: "ফিনটেক ও পেমেন্ট" },
    { id: "AI & Automation", name: "AI & Automation", nameBn: "AI ও অটোমেশন" },
    { id: "Mobile Apps", name: "Mobile Apps", nameBn: "মোবাইল অ্যাপস" },
    { id: "Enterprise Cloud", name: "Enterprise Cloud", nameBn: "এন্টারপ্রাইজ ক্লাউড" },
  ];

  const sourceCategories = (data.projectCategories && data.projectCategories.length > 0)
    ? data.projectCategories
    : fallbackCategories;

  const categories = [
    { id: "All", label: language === "bn" ? "সকল কাজ" : "All Work" },
    ...sourceCategories.map((cat) => ({
      id: cat.id,
      label: language === "bn" ? (cat.nameBn || cat.name) : cat.name,
    })),
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const isBn = language === "bn";

  return (
    <section id="projects" className="relative py-24 sm:py-32 overflow-hidden scroll-mt-20 bg-[#050505] z-10">
      
      {/* Ambient background glow - Crimson & Amber */}
      <div 
        className="absolute top-1/3 -right-[15%] w-[600px] h-[600px] pointer-events-none rounded-full" 
        style={{
          background: "radial-gradient(circle, rgba(255, 56, 35, 0.12) 0%, transparent 70%)",
          filter: "blur(140px)",
        }}
        aria-hidden="true" 
      />
      <div 
        className="absolute bottom-10 -left-[10%] w-[600px] h-[600px] pointer-events-none rounded-full" 
        style={{
          background: "radial-gradient(circle, rgba(255, 149, 0, 0.12) 0%, transparent 70%)",
          filter: "blur(140px)",
        }}
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
          >
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-radiant-pill border border-[#FF3823]/30 text-neutral-300 mb-4 shadow-[0_4px_16px_rgba(255,56,35,0.15)]">
              <FolderGit2 className="w-3.5 h-3.5 text-[#FF3823]" />
              <span className={`text-[11px] font-semibold tracking-[0.2em] uppercase text-neutral-200 ${isBn ? "font-bangla-ui tracking-normal" : ""}`}>
                {isBn ? "নির্বাচিত পোর্টফোলিও" : "CURATED PORTFOLIO"}
              </span>
            </div>

            <h2 className={`text-3xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase leading-none ${isBn ? "font-bangla-display font-black tracking-normal" : "font-display font-black"}`}>
              {isBn ? (
                <>
                  আমাদের সফল <span className="text-gradient-hero">প্রজেক্টসমূহ</span>
                </>
              ) : (
                <>
                  Featured <span className="text-gradient-hero">Projects</span>
                </>
              )}
            </h2>

            <p className={`mt-3.5 text-sm sm:text-base text-neutral-400 max-w-xl font-normal leading-relaxed ${isBn ? "font-bangla-body" : ""}`}>
              {isBn
                ? "আন্তর্জাতিক মানের ডিজিটাল আর্কিটেকচার, স্কেलेबल ক্লাউড প্ল্যাটফর্ম ও দৃষ্টিনন্দন ইউজার ইন্টারফেস যা আমরা বিভিন্ন ব্র্যান্ডের জন্য তৈরি করেছি।"
                : "Explore bespoke digital architectures, scalable cloud platforms, and intuitive interfaces we engineered for global brands."}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ type: "spring", stiffness: 220, damping: 18, delay: 0.1 }}
          >
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector("#contact");
                if (target) {
                  const navHeight = 80;
                  const targetPos = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                  window.scrollTo({ top: targetPos, behavior: "smooth" });
                  window.history.pushState(null, "", "#contact");
                }
              }}
            >
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                className={`pill-btn-glass px-7 py-3 text-xs font-bold tracking-wider uppercase flex items-center gap-2.5 shadow-md ${isBn ? "font-bangla-ui text-sm tracking-normal" : ""}`}
              >
                <span>{isBn ? "নতুন প্রজেক্ট নিয়ে আলাপ" : "DISCUSS YOUR PROJECT"}</span>
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#FF3823]/20 text-[#FF3823]">
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </motion.button>
            </a>
          </motion.div>
        </div>

        {/* Filter Pills with Liquid Glass States */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap items-center gap-2 sm:gap-3 mb-10"
        >
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <motion.button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.96 }}
                className={`px-5 py-2 rounded-full text-xs font-semibold tracking-wider transition-all cursor-pointer ${isBn ? "font-bangla-ui text-xs tracking-normal" : ""} ${
                  isActive
                    ? "pill-btn-primary shadow-[0_4px_16px_rgba(255,56,35,0.4)]"
                    : "bg-white/[0.03] border border-white/[0.08] text-neutral-300 hover:text-white hover:border-[#FF3823]/30 hover:bg-white/[0.06]"
                }`}
              >
                {cat.label}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, pIdx) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: (pIdx % 3) * 0.08 }}
                whileHover={{ y: -6 }}
                className="glass-radiant rounded-[28px] overflow-hidden group flex flex-col justify-between border border-white/[0.08] hover:border-[#FF3823]/40 shadow-[0_20px_50px_rgba(0,0,0,0.85)] transition-all duration-300"
              >
                <div>
                  {/* Image Container with Zoom */}
                  <div className="relative h-60 w-full overflow-hidden bg-[#0A0A0D]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95 group-hover:brightness-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0D] via-transparent to-transparent opacity-90" />
                    
                    {/* Category Capsule */}
                    <div className="absolute top-4 left-4">
                      <span className="text-[11px] font-semibold px-3 py-1 rounded-full glass-radiant-pill text-[#FF5C35] border border-[#FF5C35]/30">
                        {project.category}
                      </span>
                    </div>

                    {/* Country Capsule */}
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full glass-radiant-pill text-[10px] font-mono text-neutral-200 border border-white/10">
                      <MapPin className="w-3 h-3 text-[#FF3823]" />
                      <span>{project.country}</span>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-6 sm:p-7">
                    <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold mb-1">
                      {project.client}
                    </div>

                    <h3 className="font-display font-bold text-xl text-white group-hover:text-[#FF5C35] transition-colors">
                      {project.title}
                    </h3>

                    <p className="mt-2.5 text-xs sm:text-sm text-neutral-400 line-clamp-3 leading-relaxed font-normal">
                      {project.description}
                    </p>

                    {/* Metrics Recessed Badge */}
                    {project.metrics && (
                      <div className="mt-4 p-3 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center gap-2.5">
                        <TrendingUp className="w-4 h-4 text-[#FFA000] shrink-0" />
                        <span className="text-xs font-semibold text-neutral-200">
                          {project.metrics}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom Tags & Link */}
                <div className="p-6 sm:p-7 pt-0">
                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] px-2.5 py-1 rounded-full bg-white/[0.04] text-neutral-400 font-mono border border-white/[0.05]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {project.liveUrl ? (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="pill-btn-glass inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-white cursor-pointer hover:border-[#FF3823]/50"
                      >
                        <span>View Live</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#FF3823]" />
                      </motion.a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-[#FF3823] bg-[#FF3823]/10 px-3 py-1 rounded-full border border-[#FF3823]/25">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#FF3823] animate-ping" />
                        <span>Live Production</span>
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
}
