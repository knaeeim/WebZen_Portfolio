"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useSite } from "@/context/SiteContext";
import { 
  Menu, 
  X, 
  ArrowRight,
  Globe,
  MessageCircle
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const { data } = useSite();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isBn = language === "bn";

  const contactPhone = data?.footer?.phone || data?.contact?.phone || "+880 1886-932936";
  const rawWhatsapp = data?.contact?.whatsapp || "+8801886932936";
  const whatsappNumber = rawWhatsapp.replace(/[^0-9]/g, "");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = isBn ? [
    { label: "সার্ভিস", href: "#services" },
    { label: "পোর্টফোলিও", href: "#projects" },
    { label: "মেট্রিক্স", href: "#metrics" },
    { label: "প্রসেস", href: "#process" },
    { label: "প্যাকেজ", href: "#pricing" },
    { label: "রিভিউ", href: "#testimonials" },
    { label: "যোগাযোগ", href: "#contact" },
  ] : [
    { label: "SERVICES", href: "#services" },
    { label: "WORK", href: "#projects" },
    { label: "METRICS", href: "#metrics" },
    { label: "PROCESS", href: "#process" },
    { label: "PRICING", href: "#pricing" },
    { label: "REVIEWS", href: "#testimonials" },
    { label: "CONTACT", href: "#contact" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        const navHeight = 80;
        const targetPos = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({
          top: targetPos,
          behavior: "smooth"
        });
        window.history.pushState(null, "", href);
      }
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-3 sm:px-6 pt-3 sm:pt-4 pointer-events-none">
      <div className="max-w-7xl mx-auto pointer-events-auto">
        <div 
          className={`px-4 sm:px-6 py-2.5 sm:py-3 transition-all duration-300 rounded-full flex items-center justify-between gap-3 ${
            scrolled 
              ? "bg-[#050505]/85 backdrop-blur-2xl border border-white/[0.1] shadow-[0_16px_40px_rgba(0,0,0,0.8),inset_0_1px_0_rgba(255,255,255,0.12)]" 
              : "bg-[#050505]/60 backdrop-blur-xl border border-white/[0.08] shadow-[0_12px_32px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.08)]"
          }`}
        >
          
          {/* ═══ Left: Brand Logo in Nexora/WebZen Radiant Style (Image 1 pattern) ═══ */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <motion.div 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
              className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-white/[0.04] p-1.5 border border-white/10 shadow-[0_4px_16px_rgba(0,0,0,0.4)] flex items-center justify-center shrink-0 group-hover:border-[#FF3823]/50 transition-colors"
            >
              <img src="/logo.png" alt="WebZen Logo" className="w-full h-full object-contain rounded-xl" />
            </motion.div>
            <div className="flex items-baseline select-none">
              <span className="font-display font-black text-xl sm:text-2xl tracking-tight text-white group-hover:text-neutral-100 transition-colors">
                Web
              </span>
              <span className="font-display font-black text-xl sm:text-2xl tracking-tight text-gradient-hero drop-shadow-[0_0_16px_rgba(255,56,35,0.45)] group-hover:drop-shadow-[0_0_22px_rgba(255,56,35,0.7)] transition-all">
                Zen
              </span>
            </div>
          </Link>

          {/* ═══ Center: Clean Glass Nav Links (Image 1 pattern) ═══ */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-1.5 bg-white/[0.02] px-3 py-1.5 rounded-full border border-white/[0.05]">
            {navLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }}
                className={`px-3 py-1.5 rounded-full text-neutral-300 hover:text-white transition-all font-semibold uppercase text-[11px] tracking-wider hover:bg-white/[0.06] hover:shadow-[0_4px_12px_rgba(0,0,0,0.4)] ${
                  isBn ? "font-bangla-ui text-xs tracking-normal" : "tracking-[0.14em]"
                }`}
              >
                <span>{link.label}</span>
              </motion.a>
            ))}
          </nav>

          {/* ═══ Right: WhatsApp Direct + Language Switcher + Radiant Pill CTA (Image 1) ═══ */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            {/* WhatsApp Direct Line */}
            <motion.a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.96 }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
              className="hidden xl:flex items-center gap-2 text-xs px-3.5 py-1.5 rounded-full bg-white/[0.03] text-neutral-300 hover:text-white border border-white/[0.08] hover:border-[#FF3823]/30 shadow-[0_4px_12px_rgba(0,0,0,0.3)] transition-colors"
              title="Chat on WhatsApp"
            >
              <span className="w-2 h-2 rounded-full bg-[#FF3823] animate-pulse shadow-[0_0_8px_#FF3823]" />
              <span className="font-mono text-[11px] text-neutral-200">{contactPhone}</span>
            </motion.a>

            {/* Language Switcher */}
            <motion.button
              onClick={toggleLanguage}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 350, damping: 20 }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.03] text-neutral-300 hover:text-white text-xs font-bold border border-white/[0.08] hover:border-[#FF3823]/30 shadow-[0_4px_12px_rgba(0,0,0,0.3)] font-bangla-ui cursor-pointer transition-colors"
              title="Switch Language / ভাষা পরিবর্তন"
            >
              <Globe className="w-3.5 h-3.5 text-[#FF3823]" />
              <span>{isBn ? "EN" : "বাংলা"}</span>
            </motion.button>

            {/* Radiant Pill Action Button with Circular Arrow (Image 1) */}
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, "#contact")}
            >
              <motion.button 
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.96 }}
                transition={{ type: "spring", stiffness: 350, damping: 20 }}
                className={`pill-btn-primary group pl-5 pr-2 py-1.5 rounded-full font-bold text-xs tracking-wider uppercase flex items-center gap-2.5 shadow-[0_8px_24px_rgba(255,56,35,0.45)] ${isBn ? "font-bangla-ui tracking-normal" : ""}`}
              >
                <span>{isBn ? "প্রজেক্ট শুরু" : "Get Started"}</span>
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-white/20 text-white shadow-inner group-hover:translate-x-0.5 transition-transform">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </motion.button>
            </a>
          </div>

          {/* ═══ Mobile Menu Toggle ═══ */}
          <div className="flex items-center gap-2 lg:hidden">
            <motion.button
              onClick={toggleLanguage}
              whileTap={{ scale: 0.92 }}
              className="px-2.5 py-1.5 rounded-xl bg-white/[0.05] text-xs text-neutral-300 font-bold border border-white/10 font-bangla-ui"
            >
              {isBn ? "EN" : "বাং"}
            </motion.button>
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.92 }}
              className="p-2 rounded-xl bg-white/[0.05] text-neutral-200 hover:text-white border border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.4)] cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#FF3823]" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>

        </div>
      </div>

      {/* ═══ Mobile Glass Drawer ═══ */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="lg:hidden mt-3 max-w-lg mx-auto pointer-events-auto"
          >
            <div className="p-5 rounded-3xl bg-[#08080C]/95 backdrop-blur-2xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.9)] space-y-4">
              <div className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-4 py-3 rounded-2xl text-neutral-200 hover:text-white hover:bg-white/[0.06] font-semibold text-sm transition-colors flex items-center justify-between ${
                      isBn ? "font-bangla-ui text-base" : "tracking-wider uppercase"
                    }`}
                  >
                    <span>{link.label}</span>
                    <ArrowRight className="w-4 h-4 text-neutral-500" />
                  </a>
                ))}
              </div>

              <div className="pt-3 border-t border-white/10 flex flex-col gap-3">
                <a
                  href={`https://wa.me/${whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-2xl bg-white/[0.04] text-neutral-200 border border-white/10 text-xs font-mono"
                >
                  <span className="w-2 h-2 rounded-full bg-[#FF3823]" />
                  <span>{contactPhone}</span>
                </a>

                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="w-full"
                >
                  <button className="w-full pill-btn-primary py-3 rounded-2xl text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2">
                    <span>{isBn ? "প্রজেক্ট শুরু করুন" : "Get Started"}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
