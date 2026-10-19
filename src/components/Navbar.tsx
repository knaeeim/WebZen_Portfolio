"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { 
  Menu, 
  X, 
  ArrowUpRight,
  Globe
} from "lucide-react";

export function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = language === "bn" ? [
    { label: "সার্ভিস", href: "#services" },
    { label: "পোর্টফোলিও", href: "#projects" },
    { label: "রিভিউ", href: "#testimonials" },
    { label: "প্যাকেজ", href: "#pricing" },
    { label: "পরিসংখ্যান", href: "#metrics" },
  ] : [
    { label: "SERVICES", href: "#services" },
    { label: "PORTFOLIO", href: "#projects" },
    { label: "REVIEWS", href: "#testimonials" },
    { label: "PRICING", href: "#pricing" },
    { label: "ABOUT", href: "#metrics" },
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
          ? "bg-[#0B0B0E]/85 backdrop-blur-2xl border-b border-white/[0.08] shadow-[0_8px_32px_rgba(0,0,0,0.6)] py-3"
          : "bg-transparent py-4 sm:py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Left: Brand Logo with WebZen Official Logo */}
          <Link href="/" className="flex items-center gap-2.5 group cursor-pointer">
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-xl overflow-hidden bg-white/5 border border-white/10 group-hover:border-[#F59E0B]/50 transition-all p-0.5 shadow-[0_0_15px_rgba(245,158,11,0.2)]">
              <img src="/logo.png" alt="WebZen Logo" className="w-full h-full object-contain rounded-lg" />
            </div>
            <span className="font-display font-black text-xl sm:text-2xl tracking-wider text-white group-hover:text-neutral-200 transition-colors">
              WEBZEN<span className="text-[#F59E0B] font-black ml-1 drop-shadow-[0_0_12px_rgba(245,158,11,0.5)]">BD</span>
            </span>
          </Link>

          {/* Center: Minimalist Uppercase Micro-Navigation Links with Smooth Scroll */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`font-semibold text-neutral-400 hover:text-white transition-colors uppercase py-1 relative group font-bangla-ui ${
                  language === "bn" ? "text-xs tracking-normal" : "text-[11px] tracking-[0.2em]"
                }`}
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-gradient-to-r from-[#EC4899] to-[#F59E0B] transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            ))}
          </nav>

          {/* Right: Minimal Outline CTA Link / Pill Button with Smooth Scroll */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language toggle badge */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 hover:border-white/20 text-neutral-300 hover:text-white text-xs font-semibold transition-all bg-white/[0.03] font-bangla-ui cursor-pointer"
              title="Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>{language === "bn" ? "EN" : "বাংলা"}</span>
            </button>

            {/* Minimal Outline CTA Pill */}
            <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>
              <button className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/20 hover:border-[#F59E0B]/60 text-white hover:text-white bg-white/[0.03] hover:bg-white/[0.08] backdrop-blur-md text-xs font-bold tracking-[0.1em] uppercase transition-all duration-300 shadow-sm hover:shadow-[0_0_20px_rgba(245,158,11,0.2)] group cursor-pointer font-bangla-ui">
                <span>{language === "bn" ? "প্রজেক্ট শুরু করুন" : "START A PROJECT"}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#F59E0B] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1.5 rounded-lg border border-white/10 text-xs text-neutral-300 font-bold font-bangla-ui"
            >
              {language === "bn" ? "EN" : "বাং"}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-white/10 text-neutral-200 hover:text-white bg-white/[0.04]"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer with Smooth Scroll */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[64px] bg-[#0B0B0E]/98 backdrop-blur-3xl border-b border-white/10 p-6 shadow-2xl transition-all">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`uppercase text-neutral-300 hover:text-[#F59E0B] py-2 border-b border-white/5 transition-colors flex items-center justify-between font-bangla-ui ${
                  language === "bn" ? "text-sm font-semibold tracking-normal" : "text-xs font-bold tracking-[0.2em]"
                }`}
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-neutral-500" />
              </a>
            ))}

            <div className="pt-2">
              <a href="#contact" onClick={(e) => handleNavClick(e, "#contact")}>
                <button className="w-full flex items-center justify-center gap-2 py-3.5 rounded-full border border-white/20 hover:border-[#F59E0B] text-white bg-white/5 text-xs font-bold tracking-[0.12em] uppercase transition-all shadow-md font-bangla-ui">
                  <span>{language === "bn" ? "প্রজেক্ট শুরু করুন" : "START A PROJECT"}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#F59E0B]" />
                </button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
