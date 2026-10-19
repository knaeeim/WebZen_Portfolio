"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { useSite } from "@/context/SiteContext";
import { useTheme } from "@/context/ThemeContext";
import { translations } from "@/data/translations";
import { 
  Menu, 
  X, 
  Globe, 
  ArrowUpRight,
  ChevronDown,
  Sun,
  Moon,
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
  stats: { bn: "ম্যাট্রিক্স", en: "Metrics" },
  metrics: { bn: "ম্যাট্রিক্স", en: "Metrics" },
};

export function Navbar() {
  const { language, toggleLanguage } = useLanguage();
  const { data } = useSite();
  const { theme, toggleTheme } = useTheme();
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
          ? theme === "light"
            ? "bg-white/90 backdrop-blur-xl border-b border-cyan-500/20 shadow-md py-3 text-slate-900"
            : "bg-[#031326]/85 backdrop-blur-xl border-b border-cyan-500/15 shadow-2xl py-3 text-slate-100"
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
                <span className={`font-bold text-lg tracking-tight group-hover:text-cyan-500 transition-colors ${
                  theme === "light" ? "text-slate-900" : "text-white"
                }`}>
                  WebZen
                </span>
                <span className="text-xs px-1.5 py-0.5 rounded-full font-semibold bg-cyan-500/10 text-cyan-500 border border-cyan-500/20">
                  BD
                </span>
              </div>
              <span className={`text-[10px] uppercase tracking-wider font-medium ${
                theme === "light" ? "text-slate-500" : "text-slate-400"
              }`}>
                Bangladesh
              </span>
            </div>
          </Link>

          {/* Desktop Nav Links (Dynamic from Section Manager) */}
          <nav className={`hidden lg:flex items-center gap-1.5 border rounded-full px-4 py-1.5 backdrop-blur-xl shadow-lg transition-colors ${
            theme === "light"
              ? "bg-white/90 border-cyan-500/30 text-slate-800 shadow-slate-200/50"
              : "bg-[#0a2847]/85 border-cyan-500/30 text-slate-100 shadow-black/40"
          }`}>
            {/* Primary Direct Links */}
            {directLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-xs sm:text-[13px] font-bold px-3.5 py-1.5 rounded-full transition-all ${
                  theme === "light"
                    ? "text-slate-700 hover:text-cyan-600 hover:bg-cyan-50"
                    : "text-slate-100 hover:text-cyan-300 hover:bg-cyan-500/15"
                }`}
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
                  className={`inline-flex items-center gap-1.5 text-xs sm:text-[13px] font-bold px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                    othersOpen
                      ? "bg-cyan-500/20 text-cyan-400"
                      : theme === "light"
                      ? "text-slate-700 hover:text-cyan-600 hover:bg-cyan-50"
                      : "text-slate-100 hover:text-cyan-300 hover:bg-cyan-500/15"
                  }`}
                  aria-expanded={othersOpen}
                >
                  <span>{language === "bn" ? "অন্যান্য" : "Others"}</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      othersOpen ? "rotate-180 text-cyan-500" : "opacity-70"
                    }`}
                  />
                </button>

                {/* Dropdown Panel */}
                {othersOpen && (
                  <div
                    onMouseLeave={() => setOthersOpen(false)}
                    className={`absolute top-full right-0 mt-2.5 w-48 rounded-2xl border p-2 shadow-2xl backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150 z-50 ${
                      theme === "light"
                        ? "bg-white/98 border-cyan-500/30 shadow-cyan-900/10 text-slate-800"
                        : "bg-[#07203d]/98 border-cyan-500/30 shadow-2xl text-slate-200"
                    }`}
                  >
                    <div className="px-3 py-1.5 text-[11px] font-mono uppercase tracking-wider text-cyan-400 border-b border-cyan-500/15 mb-1 font-semibold">
                      {language === "bn" ? "অতিরিক্ত সেকশন" : "More Sections"}
                    </div>
                    {overflowLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        onClick={() => setOthersOpen(false)}
                        className={`flex items-center justify-between px-3 py-2 text-xs font-semibold rounded-xl transition-all group ${
                          theme === "light"
                            ? "text-slate-700 hover:text-cyan-600 hover:bg-cyan-50"
                            : "text-slate-200 hover:text-cyan-300 hover:bg-cyan-500/15"
                        }`}
                      >
                        <span>{link.label}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity text-cyan-400 stroke-[2.5]" />
                      </a>
                    ))}
                  </div>
                )}
              </div>
            )}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-2.5">
            
            {/* Theme Toggle Button (Deep Oceanic Dark / Crisp Oceanic Light) */}
            <button
              onClick={toggleTheme}
              className={`flex items-center justify-center w-[34px] h-[34px] rounded-xl border transition-all cursor-pointer shadow-md shrink-0 ${
                theme === "light"
                  ? "bg-white hover:bg-slate-100 border-cyan-500/40 text-amber-500 shadow-slate-200"
                  : "bg-[#0a2847] hover:bg-[#0f3c69] border-cyan-500/35 text-amber-300 shadow-black/30"
              }`}
              title={theme === "light" ? "ডিপ ওশেনিক ডার্ক মোড অন করুন / Switch to Deep Oceanic Dark" : "লাইট মোড অন করুন / Switch to Light"}
              aria-label="Toggle Theme"
            >
              {theme === "light" ? (
                <Moon className="w-4 h-4 text-slate-700 fill-slate-700/20" />
              ) : (
                <Sun className="w-4 h-4 text-amber-400 fill-amber-400/20" />
              )}
            </button>

            {/* Language Switcher (Bangla / English) */}
            <button
              onClick={toggleLanguage}
              className={`flex items-center gap-2 h-[34px] px-3.5 rounded-xl border text-xs font-bold transition-all shadow-md cursor-pointer ${
                theme === "light"
                  ? "bg-white hover:bg-slate-50 border-cyan-500/35 text-slate-800 hover:text-cyan-600 shadow-slate-200"
                  : "bg-[#0a2847] hover:bg-[#0f3c69] border-cyan-500/35 text-white hover:text-cyan-300 shadow-black/30"
              }`}
              title="Switch Language / ভাষা পরিবর্তন করুন"
            >
              <Globe className="w-4 h-4 text-cyan-500" />
              <span>{language === "bn" ? "English" : "বাংলা"}</span>
            </button>

            {/* Live Dhaka Time Status */}
            <div className={`hidden xl:flex items-center gap-2 h-[34px] px-3.5 rounded-xl border text-xs font-bold shadow-md ${
              theme === "light"
                ? "bg-emerald-500/10 border-emerald-500/25 text-emerald-700 shadow-slate-200"
                : "bg-emerald-500/15 border-emerald-500/30 text-emerald-300 shadow-black/20"
            }`}>
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping inline-block" />
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

          {/* Mobile Menu & Theme & Lang Button */}
          <div className="flex items-center gap-1.5 lg:hidden">
            <button
              onClick={toggleTheme}
              className={`w-9 h-9 flex items-center justify-center rounded-lg border transition-all cursor-pointer ${
                theme === "light"
                  ? "bg-white border-cyan-500/30 text-slate-700"
                  : "bg-[#0a2847] border-cyan-500/30 text-amber-300"
              }`}
              aria-label="Toggle Theme"
            >
              {theme === "light" ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </button>

            <button
              onClick={toggleLanguage}
              className={`h-9 px-2.5 flex items-center justify-center rounded-lg border text-xs font-bold transition-all cursor-pointer ${
                theme === "light"
                  ? "bg-white border-cyan-500/30 text-cyan-700"
                  : "bg-[#0a2847] border-cyan-500/30 text-cyan-300"
              }`}
            >
              {language === "bn" ? "EN" : "বাংলা"}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`w-9 h-9 flex items-center justify-center rounded-lg border transition-all cursor-pointer ${
                theme === "light"
                  ? "bg-white border-cyan-500/30 text-slate-800"
                  : "bg-[#0a2847] border-cyan-500/30 text-cyan-300 hover:text-white"
              }`}
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer (Reflects active sections dynamically) */}
      {mobileMenuOpen && (
        <div className={`lg:hidden fixed inset-x-0 top-[72px] backdrop-blur-2xl border-b p-6 shadow-2xl transition-all max-h-[85vh] overflow-y-auto ${
          theme === "light"
            ? "bg-white/98 border-cyan-500/20 text-slate-900"
            : "bg-[#031326]/95 border-cyan-500/15 text-slate-100"
        }`}>
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between pb-3 border-b border-cyan-500/15 text-xs opacity-75">
              <span>Status: <span className="text-emerald-500 font-bold">{t.availableStatus}</span></span>
              <span>{t.dhakaTime}: {dhakaTime}</span>
            </div>

            {/* Dynamically List All Enabled Sections in Drawer */}
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-sm font-semibold py-2.5 border-b border-cyan-500/10 transition-colors flex items-center justify-between ${
                  theme === "light"
                    ? "text-slate-800 hover:text-cyan-600"
                    : "text-slate-200 hover:text-cyan-400"
                }`}
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-50" />
              </a>
            ))}

            <div className="pt-4 flex flex-col gap-2.5">
              {/* Theme Toggle Button Row */}
              <button
                onClick={() => {
                  toggleTheme();
                }}
                className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                  theme === "light"
                    ? "bg-slate-100 border-slate-200 text-slate-800 hover:bg-slate-200"
                    : "bg-[#0a2847] border-cyan-500/30 text-slate-100 hover:bg-[#0f3c69]"
                }`}
              >
                {theme === "light" ? (
                  <>
                    <Moon className="w-4 h-4 text-slate-700" />
                    <span>{language === "bn" ? "ডিপ ওশেনিক ডার্ক মোড অন করুন" : "Switch to Deep Oceanic Dark Mode"}</span>
                  </>
                ) : (
                  <>
                    <Sun className="w-4 h-4 text-amber-400" />
                    <span>{language === "bn" ? "লাইট মোড অন করুন" : "Switch to Oceanic Light Mode"}</span>
                  </>
                )}
              </button>

              <button
                onClick={() => {
                  toggleLanguage();
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl border text-xs font-bold transition-all cursor-pointer ${
                  theme === "light"
                    ? "bg-white border-slate-200 text-slate-700"
                    : "bg-white/[0.04] border-white/10 text-slate-200"
                }`}
              >
                <Globe className="w-4 h-4 text-cyan-500" />
                <span>{language === "bn" ? "Switch to English" : "বাংলায় দেখুন"}</span>
              </button>

              <a href="#contact" onClick={() => setMobileMenuOpen(false)}>
                <Button className="w-full bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-300 text-slate-950 font-extrabold text-xs justify-center h-11 rounded-xl shadow-lg shadow-cyan-500/30 border border-white/50 cursor-pointer">
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
