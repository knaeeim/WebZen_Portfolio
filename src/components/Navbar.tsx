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
  MessageCircle,
  Phone
} from "lucide-react";
import { motion } from "framer-motion";

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
        const navHeight = 72;
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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#000000]/90 backdrop-blur-2xl border-b border-white/[0.08] shadow-[0_10px_35px_rgba(0,0,0,0.8)] py-3 sm:py-3.5"
          : "bg-gradient-to-b from-[#000000]/95 via-[#000000]/70 to-transparent py-4 sm:py-5 border-b border-white/[0.05]"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* ═══ Left: Brand Logo (Studio Clean Style: webzen.bd) ═══ */}
          <Link href="/" className="flex items-center gap-2.5 group shrink-0">
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-xl overflow-hidden bg-white/[0.04] border border-white/10 group-hover:border-[#FFB800]/50 transition-all p-0.5 shadow-[0_0_15px_rgba(255,184,0,0.15)]">
              <img src="/logo.png" alt="WebZen Logo" className="w-full h-full object-contain rounded-lg" />
            </div>
            <div className="flex items-baseline">
              <span className="font-display font-black text-xl sm:text-2xl tracking-tight text-white group-hover:text-neutral-200 transition-colors">
                webzen
              </span>
              <span className="font-display font-black text-xl sm:text-2xl text-[#FFB800] drop-shadow-[0_0_12px_rgba(255,184,0,0.5)]">
                .bd
              </span>
            </div>
          </Link>

          {/* ═══ Center: Minimalist Uppercase Navigation Links ═══ */}
          <nav className="hidden lg:flex items-center gap-7 xl:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-neutral-400 hover:text-white transition-colors uppercase py-1 relative group font-semibold ${
                  isBn ? "font-bangla-ui text-xs tracking-normal" : "text-[11px] tracking-[0.18em]"
                }`}
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#FFB800] transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            ))}
          </nav>

          {/* ═══ Right: WhatsApp Direct Line + Language Toggle + Studio CTA Button ═══ */}
          <div className="hidden sm:flex items-center gap-3 md:gap-4 shrink-0">
            {/* WhatsApp Quick Direct Line (inspired by the poster's phone/whatsapp element) */}
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden xl:flex items-center gap-2 text-xs text-neutral-400 hover:text-white px-3 py-1.5 rounded-full border border-white/5 hover:border-white/15 bg-white/[0.02] transition-colors"
              title="Chat on WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
              <span className="font-mono text-[11px] text-neutral-300">{contactPhone}</span>
            </a>

            {/* Language Switcher Pill */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 hover:border-white/20 text-neutral-300 hover:text-white text-xs font-semibold transition-all bg-white/[0.03] font-bangla-ui cursor-pointer"
              title="Switch Language / ভাষা পরিবর্তন"
            >
              <Globe className="w-3.5 h-3.5 text-[#FFB800]" />
              <span>{isBn ? "EN" : "বাংলা"}</span>
            </button>

            {/* Signature Studio CTA Button (with golden circular arrow badge) */}
            <a 
              href="#contact" 
              onClick={(e) => handleNavClick(e, "#contact")}
              className="group"
            >
              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-2.5 pl-4 sm:pl-5 pr-2 py-1.5 sm:py-2 rounded-full font-bold text-xs sm:text-xs tracking-wider uppercase transition-all duration-300 cursor-pointer shadow-[0_0_20px_rgba(255,184,0,0.25)] hover:shadow-[0_0_30px_rgba(255,184,0,0.45)] ${isBn ? "font-bangla-ui" : ""}`}
                style={{
                  background: "linear-gradient(135deg, #FFB800 0%, #F59E0B 60%, #EA7814 100%)",
                  color: "#000000",
                }}
              >
                <span className="font-black">
                  {isBn ? "যোগাযোগ করুন" : "Let's Connect"}
                </span>
                {/* Circular Black Arrow Badge */}
                <span className="flex items-center justify-center w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-black text-[#FFB800] transition-transform duration-300 group-hover:translate-x-0.5">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </motion.button>
            </a>
          </div>

          {/* ═══ Mobile Menu Toggle ═══ */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1.5 rounded-lg border border-white/10 text-xs text-neutral-300 font-bold font-bangla-ui bg-white/[0.03]"
            >
              {isBn ? "EN" : "বাং"}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-white/10 text-neutral-200 hover:text-white bg-white/[0.04] cursor-pointer"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5 text-[#FFB800]" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* ═══ Mobile Full-Screen Studio Drawer ═══ */}
      {mobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="lg:hidden fixed inset-x-0 top-[60px] bg-[#000000]/98 backdrop-blur-3xl border-b border-white/10 p-6 shadow-[0_20px_50px_rgba(0,0,0,0.9)] transition-all z-50"
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`uppercase text-neutral-300 hover:text-[#FFB800] py-2.5 border-b border-white/5 transition-colors flex items-center justify-between font-semibold ${
                  isBn ? "font-bangla-ui text-sm tracking-normal" : "text-xs tracking-[0.2em]"
                }`}
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 text-neutral-500" />
              </a>
            ))}

            {/* Direct WhatsApp Call */}
            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center justify-center gap-2 py-3 rounded-full border border-white/10 text-neutral-200 bg-white/[0.03] text-xs font-mono"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>{contactPhone} (WhatsApp)</span>
            </a>

            {/* CTA Button */}
            <div className="pt-2">
              <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>
                <button 
                  className={`w-full flex items-center justify-center gap-2.5 py-3.5 rounded-full font-black text-xs tracking-wider uppercase transition-all shadow-lg ${isBn ? "font-bangla-ui" : ""}`}
                  style={{
                    background: "linear-gradient(135deg, #FFB800 0%, #F59E0B 60%, #EA7814 100%)",
                    color: "#000000",
                  }}
                >
                  <span>{isBn ? "প্রজেক্ট শুরু করুন" : "Let's Work Together"}</span>
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-black text-[#FFB800]">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </button>
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
}
