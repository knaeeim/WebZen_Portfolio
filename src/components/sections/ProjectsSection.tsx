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
import { Button } from "@/components/ui/button";

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

  return (
    <section id="projects" className="relative py-28 overflow-hidden bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>{t.badge}</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-normal leading-[1.35] sm:leading-[1.3] pb-1">
              <span className="inline-block">{t.heading}</span>{" "}
              <span className="text-gradient-cyan inline-block mx-1.5">{t.headingGradient}</span>
            </h2>
            <p className="mt-3 text-sm text-slate-300 max-w-xl">
              {t.subheading}
            </p>
          </div>

          <a href="#contact">
            <Button variant="outline" className="border-white/15 text-slate-200 text-xs gap-2">
              <span>{t.discussBtn}</span>
              <ArrowUpRight className="w-4 h-4 text-cyan-400" />
            </Button>
          </a>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-300 text-slate-950 shadow-lg shadow-cyan-500/25 border border-white/40 scale-105"
                  : "bg-[#0a2847] text-white hover:bg-[#0f3c69] hover:text-cyan-300 border border-cyan-500/30 shadow-md shadow-black/30"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="glass-card rounded-3xl overflow-hidden border border-white/10 group flex flex-col justify-between"
              >
                <div>
                  {/* Image Container with zoom */}
                  <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:filter brightness-90 group-hover:brightness-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#051c2d] via-transparent to-transparent opacity-85" />
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="text-[11px] font-bold px-3 py-1 rounded-full bg-black/60 backdrop-blur-md text-cyan-300 border border-white/10">
                        {project.category}
                      </span>
                    </div>

                    {/* Country Badge */}
                    <div className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md text-[10px] text-slate-300 border border-white/10">
                      <MapPin className="w-3 h-3 text-cyan-400" />
                      <span>{project.country}</span>
                    </div>
                  </div>

                  {/* Content Container */}
                  <div className="p-6">
                    <div className="text-[11px] uppercase tracking-wider text-slate-400 font-semibold mb-1">
                      {t.clientLabel} {project.client}
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="mt-3 text-xs text-slate-300 line-clamp-3 leading-relaxed font-normal">
                      {project.description}
                    </p>

                    {/* Metrics Badge */}
                    {project.metrics && (
                      <div className="mt-4 p-2.5 rounded-xl bg-cyan-950/30 border border-cyan-500/20 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span className="text-[11px] font-semibold text-cyan-200">
                          {project.metrics}
                        </span>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom Tags & Link */}
                <div className="p-6 pt-0">
                  <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between gap-2">
                    <div className="flex flex-wrap gap-1">
                      {project.tags.slice(0, 3).map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] px-2 py-0.5 rounded bg-white/[0.04] text-slate-400 font-mono"
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
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/35 text-xs sm:text-sm font-bold text-cyan-300 hover:text-white transition-all shadow-sm"
                      >
                        <span>{t.caseStudyBtn}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
                      </a>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold text-amber-400/90 bg-amber-400/10 px-2.5 py-1 rounded-full border border-amber-400/20">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                        <span>{language === "bn" ? "কাজ চলমান" : "In Progress"}</span>
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
