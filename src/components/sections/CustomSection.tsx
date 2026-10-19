"use client";

import React from "react";
import { SectionItem } from "@/types/site";
import { motion } from "framer-motion";
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CustomSection({ section }: { section: SectionItem }) {
  const content = section.customContent || {
    heading: section.title,
    subheading: section.subtitle,
    body: "This is a dynamically created custom section configured through the WebZen Bangladesh Admin Studio.",
    layout: "center",
  };

  return (
    <section id={section.id} className="relative py-24 overflow-hidden scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-8 sm:p-12 border border-cyan-500/20 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          <div
            className={`flex flex-col gap-6 ${
              content.layout === "center"
                ? "items-center text-center max-w-3xl mx-auto"
                : content.layout === "right"
                ? "items-end text-right"
                : "items-start text-left"
            }`}
          >
            {content.subheading && (
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{content.subheading}</span>
              </span>
            )}

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              {content.heading}
            </h2>

            <p className="text-base text-slate-300 leading-relaxed max-w-2xl font-normal">
              {content.body}
            </p>

            {content.buttonText && (
              <div className="pt-2">
                <a href={content.buttonLink || "#contact"}>
                  <Button className="bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-300 text-slate-950 font-extrabold px-6 h-11 text-xs rounded-xl shadow-lg shadow-cyan-500/25 border border-white/40 group transition-all">
                    <span>{content.buttonText}</span>
                    <ArrowRight className="w-4 h-4 ml-1.5 transition-transform group-hover:translate-x-1 stroke-[2.5]" />
                  </Button>
                </a>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
