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
    <section id="projects" className="relative py-10 sm:py-14 overflow-hidden scroll-mt-20">
      {/* Ambient background glow */}
      <div 
        className="absolute top-1/3 -right-[15%] w-[500px] h-[450px] bg-[#F59E0B]/[0.06] blur-[150px] rounded-full pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 sm:mb-10 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 mb-3">
              <FolderGit2 className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span className={`text-[11px] font-bold tracking-[0.2em] uppercase text-neutral-300 ${isBn ? "font-bangla-ui" : ""}`}>
                {isBn ? "নির্বাচিত পোর্টফোলিও" : "CURATED PORTFOLIO"}
              </span>
            </div>

            <h2 className={`text-3xl sm:text-5xl md:text-6xl text-white tracking-tight leading-none ${isBn ? "font-bangla-display font-black" : "font-display font-black"}`}>
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

            <p className={`mt-3 text-sm sm:text-base text-neutral-400 max-w-xl font-normal leading-relaxed ${isBn ? "font-bangla-body" : ""}`}>
              {isBn
                ? "আন্তর্জাতিক মানের ডিজিটাল আর্কিটেকচার, স্কেलेबल ক্লাউড প্ল্যাটফর্ম ও দৃষ্টিনন্দন ইউজার ইন্টারফেস যা আমরা বিভিন্ন ব্র্যান্ডের জন্য তৈরি করেছি।"
                : "Explore bespoke digital architectures, scalable cloud platforms, and intuitive interfaces we engineered for global brands."}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <a 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                const target = document.querySelector("#contact");
                if (target) {
                  const navHeight = 72;
                  const targetPos = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
                  window.scrollTo({ top: targetPos, behavior: "smooth" });
                  window.history.pushState(null, "", "#contact");
                }
              }}
            >
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className={`border border-white/20 hover:border-[#F59E0B]/60 text-white bg-white/[0.04] hover:bg-white/[0.08] backdrop-blur-md rounded-full px-6 py-3.5 text-xs font-bold tracking-[0.14em] uppercase transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(245,158,11,0.2)] flex items-center gap-2 group cursor-pointer ${isBn ? "font-bangla-ui" : ""}`}
              >
                <span>{isBn ? "নতুন প্রজেক্ট নিয়ে আলাপ" : "DISCUSS YOUR PROJECT"}</span>
                <ArrowUpRight className="w-4 h-4 text-[#F59E0B] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </motion.button>
            </a>
          </motion.div>
        </div>

        {/* Filter Pills */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-8 sm:mb-10"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-bold tracking-wider transition-all duration-300 cursor-pointer ${isBn ? "font-bangla-ui" : ""} ${
                activeCategory === cat.id
                  ? "bg-white text-black shadow-[0_0_25px_rgba(255,255,255,0.3)] scale-105"
                  : "bg-[#141419] text-neutral-300 hover:text-white hover:bg-white/[0.08] border border-white/[0.08]"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, pIdx) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, y: 25, scale: 0.96 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.45, delay: (pIdx % 3) * 0.1 }}
                whileHover={{ y: -6 }}
                className="bg-[#141419] rounded-3xl overflow-hidden border border-white/[0.08] hover:border-[#F59E0B]/40 transition-all duration-300 shadow-[0_20px_50px_rgba(0,0,0,0.6)] group flex flex-col justify-between"
              >
                <div>
                  {/* Image Container with zoom */}
                  <div className="relative h-60 w-full overflow-hidden bg-neutral-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-95 group-hover:brightness-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#141419] via-transparent to-transparent opacity-80" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="text-[11px] font-bold px-3.5 py-1 rounded-full bg-black/70 backdrop-blur-md text-[#F59E0B] border border-white/10">
                        {project.category}
                      </span>
                    </div>

                    {/* Country Badge */}
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/70 backdrop-blur-md text-[10px] font-semibold text-neutral-300 border border-white/10">
                      <MapPin className="w-3 h-3 text-[#EC4899]" />
                      <span>{project.country}</span>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-6">
                    <div className="text-[11px] uppercase tracking-wider text-neutral-400 font-semibold mb-1">
                      {project.client}
                    </div>

                    <h3 className="font-display font-extrabold text-xl text-white group-hover:text-neutral-100 transition-colors">
                      {project.title}
                    </h3>

                    <p className="mt-2.5 text-xs sm:text-sm text-neutral-400 line-clamp-3 leading-relaxed font-normal">
                      {project.description}
                    </p>

                    {/* Metrics Badge */}
                    {project.metrics && (
                      <div className="mt-4 p-3 rounded-2xl bg-[#1B1B22] border border-white/[0.06] flex items-center gap-2.5">
                        <TrendingUp className="w-4 h-4 text-[#F59E0B] shrink-0" />
                        <span className="text-xs font-semibold text-neutral-200">
                          {project.metrics}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom Tags & Link */}
                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] px-2.5 py-1 rounded-md bg-white/[0.04] text-neutral-400 font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {project.liveUrl ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-bold text-white transition-all shadow-sm"
                      >
                        <span>View Live</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-[#F59E0B]" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-[#F59E0B] bg-[#F59E0B]/10 px-3 py-1 rounded-full border border-[#F59E0B]/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] animate-pulse" />
                        <span>Production Live</span>
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
