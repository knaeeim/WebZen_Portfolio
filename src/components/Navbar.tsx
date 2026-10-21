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
    { label: "প্রসেস", href: "#process" },
    { label: "প্যাকেজ", href: "#pricing" },
    { label: "রিভিউ", href: "#testimonials" },
    { label: "যোগাযোগ", href: "#contact" },
  ] : [
    { label: "SERVICES", href: "#services" },
    { label: "WORK", href: "#projects" },
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
        const navHeight = 85;
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
              ? "bg-[#181B24]/95 backdrop-blur-2xl border border-white/[0.08] shadow-[0_16px_40px_rgba(0,0,0,0.65),inset_2px_2px_4px_rgba(255,255,255,0.12),inset_-3px_-3px_8px_rgba(0,0,0,0.6)]" 
              : "bg-[#181B24]/85 backdrop-blur-xl border border-white/[0.06] shadow-[0_12px_32px_rgba(0,0,0,0.5),inset_2px_2px_4px_rgba(255,255,255,0.1),inset_-3px_-3px_6px_rgba(0,0,0,0.5)]"
          }`}
        >
          
          {/* ═══ Left: Brand Logo in Chunky Clay Style ═══ */}
          <Link href="/" className="flex items-center gap-3 group shrink-0">
            <motion.div 
              whileHover={{ scale: 1.08, rotate: -3 }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-[#1E2230] p-1.5 shadow-[0_8px_16px_rgba(0,0,0,0.45),inset_2px_2px_4px_rgba(255,255,255,0.2),inset_-2px_-2px_5px_rgba(0,0,0,0.6)] border border-white/10 flex items-center justify-center shrink-0"
            >
              <img src="/logo.png" alt="WebZen Logo" className="w-full h-full object-contain rounded-xl" />
            </motion.div>
            <div className="flex items-baseline">
              <span className="font-display font-black text-xl sm:text-2xl tracking-tight text-white group-hover:text-neutral-100 transition-colors">
                webzen
              </span>
              <span className="font-display font-black text-xl sm:text-2xl text-[#FF5C35] drop-shadow-[0_2px_8px_rgba(255,92,53,0.5)]">
                .bd
              </span>
            </div>
          </Link>

          {/* ═══ Center: Tactile Inflated Clay Nav Pills ═══ */}
          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2 bg-[#12141C]/80 px-3 py-1.5 rounded-full border border-white/[0.05] shadow-[inset_2px_2px_4px_rgba(0,0,0,0.6),inset_-1px_-1px_2px_rgba(255,255,255,0.05)]">
            {navLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 350, damping: 18 }}
                className={`px-3.5 py-1.5 rounded-full text-neutral-300 hover:text-white transition-all font-semibold uppercase text-[11px] tracking-wider hover:bg-[#1E2230] hover:shadow-[0_4px_10px_rgba(0,0,0,0.4),inset_1.5px_1.5px_3px_rgba(255,255,255,0.15),inset_-2px_-2px_4px_rgba(0,0,0,0.5)] ${
                  isBn ? "font-bangla-ui text-xs tracking-normal" : "tracking-[0.14em]"
                }`}
              >
                <span>{link.label}</span>
              </motion.a>
            ))}
          </nav>

          {/* ═══ Right: WhatsApp Pill + Language Toggle + Chunky Clay CTA ═══ */}
          <div className="hidden sm:flex items-center gap-2.5 shrink-0">
            {/* WhatsApp Quick Direct Line in Clay Pill */}
            <motion.a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -2, scale: 1.03 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="hidden xl:flex items-center gap-2 text-xs px-3.5 py-1.5 rounded-full bg-[#1E2230] text-neutral-300 hover:text-white border border-white/[0.06] shadow-[0_6px_14px_rgba(0,0,0,0.35),inset_2px_2px_4px_rgba(255,255,255,0.1),inset_-2px_-2px_4px_rgba(0,0,0,0.5)]"
              title="Chat on WhatsApp"
            >
              <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
              <span className="font-mono text-[11px] text-neutral-200">{contactPhone}</span>
            </motion.a>

            {/* Language Switcher Pill */}
            <motion.button
              onClick={toggleLanguage}
              whileHover={{ y: -2, scale: 1.04 }}
              whileTap={{ scale: 0.94 }}
              transition={{ type: "spring", stiffness: 300, damping: 18 }}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#1E2230] text-neutral-300 hover:text-white text-xs font-bold border border-white/[0.06] shadow-[0_6px_14px_rgba(0,0,0,0.35),inset_2px_2px_4px_rgba(255,255,255,0.12),inset_-2px_-2px_4px_rgba(0,0,0,0.5)] font-bangla-ui cursor-pointer"
              title="Switch Language / ভাষা পরিবর্তন"
            >
              <Globe className="w-3.5 h-3.5 text-[#FF5C35]" />
              <span>{isBn ? "EN" : "বাংলা"}</span>
            </motion.button>

            {/* Signature Puffed Coral Clay CTA Button */}
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, "#contact")}
            >
              <motion.button 
                whileHover={{ y: -3, scale: 1.03 }}
                whileTap={{ y: 0, scale: 0.94 }}
                transition={{ type: "spring", stiffness: 320, damping: 16 }}
                className={`clay-btn-coral pl-5 pr-2 py-2 rounded-full font-black text-xs tracking-wider uppercase flex items-center gap-2.5 ${isBn ? "font-bangla-ui" : ""}`}
              >
                <span>{isBn ? "প্রজেক্ট শুরু" : "Let's Talk"}</span>
                <span className="flex items-center justify-center w-6 h-6 rounded-full bg-black/40 text-white shadow-inner">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </motion.button>
            </a>
          </div>

          {/* ═══ Mobile Menu Toggle in Clay Button ═══ */}
          <div className="flex items-center gap-2 lg:hidden">
            <motion.button
              onClick={toggleLanguage}
              whileTap={{ scale: 0.92 }}
              className="px-2.5 py-1.5 rounded-xl bg-[#1E2230] text-xs text-neutral-300 font-bold border border-white/10 shadow-[inset_1.5px_1.5px_3px_rgba(255,255,255,0.12),inset_-2px_-2px_4px_rgba(0,0,0,0.5)] font-bangla-ui"
            >
              {isBn ? "EN" : "বাং"}
            </motion.button>
            <motion.button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              whileTap={{ scale: 0.92 }}
              className="p-2 rounded-xl bg-[#1E2230] text-neutral-200 hover:text-white border border-white/10 shadow-[0_4px_12px_rgba(0,0,0,0.4),inset_1.5px_1.5px_3px_rgba(255,255,255,0.12),inset_-2px_-2px_4px_rgba(0,0,0,0.5)] cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#FF5C35]" /> : <Menu className="w-5 h-5" />}
            </motion.button>
          </div>

        </div>
      </div>

      {/* ═══ Mobile Clay Drawer ═══ */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -15, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.96 }}
            transition={{ type: "spring", stiffness: 280, damping: 20 }}
            className="lg:hidden mt-3 max-w-7xl mx-auto clay-card-dark p-6 pointer-events-auto"
          >
            <div className="flex flex-col gap-2.5">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`uppercase text-neutral-200 hover:text-[#FF5C35] py-2.5 px-4 rounded-2xl bg-[#1E2230]/60 hover:bg-[#1E2230] transition-all flex items-center justify-between font-semibold border border-white/5 ${
                    isBn ? "font-bangla-ui text-sm tracking-normal" : "text-xs tracking-[0.14em]"
                  }`}
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-4 h-4 text-neutral-400" />
                </a>
              ))}

              {/* Direct WhatsApp Call */}
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 flex items-center justify-center gap-2.5 py-3 rounded-full bg-[#1E2230] border border-white/10 text-neutral-200 text-xs font-mono shadow-[0_6px_16px_rgba(0,0,0,0.4),inset_2px_2px_4px_rgba(255,255,255,0.1)]"
              >
                <MessageCircle className="w-4 h-4 text-[#10B981]" />
                <span>{contactPhone} (WhatsApp)</span>
              </a>

              {/* Mobile CTA Button */}
              <div className="pt-2">
                <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>
                  <button 
                    className={`clay-btn-coral w-full py-3.5 rounded-full font-black text-xs tracking-wider uppercase flex items-center justify-center gap-2 ${isBn ? "font-bangla-ui" : ""}`}
                  >
                    <span>{isBn ? "প্রজেক্ট শুরু করুন" : "Let's Build Together"}</span>
                    <span className="flex items-center justify-center w-6 h-6 rounded-full bg-black/40 text-white">
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
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
