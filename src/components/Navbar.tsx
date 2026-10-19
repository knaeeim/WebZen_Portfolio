"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useSite } from "@/context/SiteContext";
import { translations } from "@/data/translations";
import { 
  Menu, 
  X, 
  Globe, 
  ArrowUpRight,
  ChevronDown,
} from "lucide-react";
import { Button } from "@/components/ui/button";

// Section ID to localized nav label dictionary
const sectionLabelMap: Record<string, { bn: string; en: string }> = {
  services: { bn: "সার্ভিস", en: "Services" },
  projects: { bn: "পোর্টফোলিও", en: "Projects" },
  techstack: { bn: "টেকনোলজি", en: "Tech Stack" },
  process: { bn: "কাজের ধাপ", en: "Process" },
  calculator: { bn: "বাজেট হিসাব", en: "Calculator" },
  pricing: { bn: "প্যাকেজ ও খরচ", en: "Pricing" },
  testimonials: { bn: "ক্লায়েন্ট রিভিউ", en: "Reviews" },
  faq: { bn: "সাধারণ জিজ্ঞাসা", en: "FAQ" },
  contact: { bn: "যোগাযোগ", en: "Contact" },
  stats: { bn: "পরিসংখ্যান", en: "Metrics" },
};

export function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const { data } = useSite();
  const t = translations[language].nav;

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [othersOpen, setOthersOpen] = useState(false);
  const [dhakaTime, setDhakaTime] = useState("");
  const othersRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Dhaka",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      };
      setDhakaTime(new Intl.DateTimeFormat("en-US", options).format(now));
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    const handleClickOutside = (e: MouseEvent) => {
      if (othersRef.current && !othersRef.current.contains(e.target as Node)) {
        setOthersOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearInterval(interval);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Filter sections dynamically based on Section Manager enabled status (excluding billboard Hero)
  const activeNavSections = (data?.sections || [])
    .filter((sec) => sec.enabled && sec.id !== "hero")
    .sort((a, b) => a.order - b.order);

  // Generate dynamic links
  const navLinks = activeNavSections.map((sec) => {
    const defaultLabels = sectionLabelMap[sec.id] || sectionLabelMap[sec.type];
    const label = defaultLabels
      ? (language === "bn" ? defaultLabels.bn : defaultLabels.en)
      : sec.title;

    return {
      id: sec.id,
      label,
      href: `#${sec.id}`,
    };
  });

  // Limit direct visible items on desktop to prevent navbar crowding (e.g. max 5 items)
  const MAX_DIRECT_LINKS = 5;
  const directLinks = navLinks.slice(0, MAX_DIRECT_LINKS);
  const overflowLinks = navLinks.slice(MAX_DIRECT_LINKS);
  const hasOverflow = overflowLinks.length > 0;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#061a33]/85 backdrop-blur-xl border-b border-cyan-500/15 shadow-2xl py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-10 h-10 rounded-xl overflow-hidden transition-transform duration-300 group-hover:scale-105 shrink-0 shadow-lg shadow-cyan-500/20 border border-white/10">
              <img
                src="/logo.png"
                alt="WebZen Bangladesh"
                className="w-full h-full object-cover rounded-xl"
              />
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl blur-sm opacity-30 group-hover:opacity-75 transition-opacity -z-10" />
            </div>
            
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="font-bold text-lg tracking-tight text-white group-hover:text-cyan-400 transition-colors">
                  WebZen
                </span>
                <span className="text-xs px-1.5 py-0.5 rounded-full font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  BD
                </span>
              </div>
              <span className="text-[10px] uppercase tracking-wider text-slate-400 font-medium">
                Bangladesh
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links (Dynamic from Section Manager) - Solid Luminous Pill */}
          <nav className="hidden lg:flex items-center gap-1.5 bg-[#0a2847]/85 border border-cyan-500/30 rounded-full px-4 py-1.5 backdrop-blur-xl shadow-lg shadow-black/40">
            {/* Primary Direct Links */}
            {directLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs sm:text-[13px] font-bold text-slate-100 hover:text-cyan-300 px-3.5 py-1.5 rounded-full transition-all hover:bg-cyan-500/15"
              >
                {link.label}
              </a>
            ))}

            {/* Overflow "Others / অন্যান্য" Dropdown Menu */}
            {hasOverflow && (
              <div ref={othersRef} className="relative">
                <button
                  type="button"
                  onClick={() => setOthersOpen(!othersOpen)}
                  onMouseEnter={() => setOthersOpen(true)}
                  className={`inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold px-3.5 py-1.5 rounded-full transition-all ${
                    othersOpen
                      ? "bg-cyan-500/20 text-cyan-300"
                      : "text-slate-100 hover:text-cyan-300 hover:bg-cyan-500/15"
                  }`}
                  aria-expanded={othersOpen}
                >
                  <span>{language === "bn" ? "অন্যান্য" : "Others"}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      othersOpen ? "rotate-180 text-cyan-400" : "text-slate-300"
                    }`}
                  />
                </button>

                {/* Dropdown Panel */}
                {othersOpen && (
                  <div
                    onMouseLeave={() => setOthersOpen(false)}
                    className="absolute top-full right-0 mt-2.5 w-48 rounded-2xl bg-[#07203d]/98 border border-cyan-500/30 p-2 shadow-2xl backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150 z-50"
                  >
                    <div className="px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider text-cyan-300/80 border-b border-white/10 mb-1">
                      {language === "bn" ? "অতিরিক্ত সেকশন" : "More Sections"}
                    </div>
                    {overflowLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setOthersOpen(false)}
                        className="flex items-center justify-between px-3 py-2 text-xs font-semibold text-slate-200 hover:text-cyan-300 hover:bg-cyan-500/15 rounded-xl transition-all group"
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            )}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            
            {/* Language Switcher (Bangla / English) */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#0a2847] hover:bg-[#0f3c69] border border-cyan-500/35 text-xs font-bold text-white hover:text-cyan-300 transition-all shadow-md shadow-black/30 cursor-pointer"
              title="Switch Language / ভাষা পরিবর্তন করুন"
            >
              <Globe className="w-4 h-4 text-cyan-400" />
              <span>{language === "bn" ? "English" : "বাংলা"}</span>
            </button>

            {/* Live Dhaka Time Status */}
            <div className="hidden xl:flex items-center gap-2 px-3.5 py-2 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-xs font-bold text-emerald-300 shadow-md shadow-black/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
              <span>{t.dhakaTime}: {dhakaTime || "..."}</span>
            </div>

            {/* Primary Action Button - Prominent CTA */}
            <a href="#contact">
              <Button
                size="sm"
                className="bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-300 hover:from-cyan-300 hover:to-sky-200 text-slate-950 font-extrabold text-xs sm:text-sm h-10 px-5 shadow-lg shadow-cyan-500/30 border border-white/50 rounded-xl group transition-all cursor-pointer"
              >
                <span>{t.hireUs}</span>
                <ArrowUpRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 stroke-[2.5]" />
              </Button>
            </a>
          </div>

          {/* Mobile Menu & Lang Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={toggleLanguage}
              className="px-2.5 py-1 rounded-lg bg-[#0a2847] border border-cyan-500/30 text-xs text-cyan-300 font-bold hover:text-white"
            >
              {language === "bn" ? "EN" : "বাংলা"}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-[#0a2847] border border-cyan-500/30 text-cyan-300 hover:text-white"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Reflects active sections dynamically) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[72px] bg-[#061a33]/95 backdrop-blur-2xl border-b border-cyan-500/15 p-6 shadow-2xl transition-all max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs text-slate-400">
              <span>Status: <span className="text-emerald-400 font-medium">{t.availableStatus}</span></span>
              <span>{t.dhakaTime}: {dhakaTime}</span>
            </div>

            {/* Dynamically List All Enabled Sections in Drawer */}
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium text-slate-200 hover:text-cyan-400 py-2.5 border-b border-white/5 transition-colors flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-slate-500" />
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-2">
              <button
                onClick={() => {
                  toggleLanguage();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-xl bg-white/[0.04] border border-white/10 text-xs font-semibold text-slate-200"
              >
                <Globe className="w-4 h-4 text-cyan-400" />
                <span>{language === "bn" ? "Switch to English" : "বাংলায় দেখুন"}</span>
              </button>

              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-300 text-slate-950 font-extrabold text-xs justify-center h-11 rounded-xl shadow-lg shadow-cyan-500/30 border border-white/50">
                  {t.hireUs}
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
