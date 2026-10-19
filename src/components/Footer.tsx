"use client";

import React from "react";
import Link from "next/link";
import { useSite } from "@/context/SiteContext";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { 
  ArrowUp, 
  MapPin, 
  Phone, 
  Mail, 
  MessageCircle,
} from "lucide-react";

export function Footer() {
  const { data } = useSite();
  const { language } = useLanguage();
  const t = translations[language].footer;
  const navT = translations[language].nav;
  const { contact, companyName, footer } = data;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const whatsappUrl = `https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, "")}?text=Hello%20WebZen%20Bangladesh,%20I%20have%20an%20inquiry.`;

  // Fallback defaults if not set in localStorage yet
  const defaultNavLinks = [
    { id: "nav-1", label: "Services", labelBn: "সার্ভিসসমূহ", url: "#services" },
    { id: "nav-2", label: "Case Studies", labelBn: "প্রজেক্টসমূহ", url: "#projects" },
    { id: "nav-3", label: "Process", labelBn: "কাজের ধাপ", url: "#process" },
    { id: "nav-4", label: "Cost Estimator", labelBn: "বাজেট হিসাব", url: "#calculator" },
    { id: "nav-5", label: "Pricing Plans", labelBn: "প্যাকেজ ও খরচ", url: "#pricing" },
    { id: "nav-6", label: "Contact", labelBn: "যোগাযোগ", url: "#contact" },
  ];

  const defaultSolutionsLinks = [
    { id: "sol-1", label: "HealthTech & Booking", labelBn: "হেলথটেক ও সিরিয়াল বুকিং", url: "#services" },
    { id: "sol-2", label: "bKash / Nagad E-Commerce", labelBn: "অনলাইন শপ ও বিকাশ পেমেন্ট", url: "#services" },
    { id: "sol-3", label: "Custom Websites & Apps", labelBn: "কাস্টম ওয়েবসাইট ও অ্যাপ", url: "#services" },
    { id: "sol-4", label: "AI Chatbots & Automation", labelBn: "অটোমেশন ও AI চ্যাটবট", url: "#services" },
    { id: "sol-5", label: "Cloud Server Deployment", labelBn: "ক্লাউড সার্ভার ও মেইনটেন্যান্স", url: "#services" },
  ];

  const navLinks = (footer?.navLinks && footer.navLinks.length > 0) ? footer.navLinks : defaultNavLinks;
  const solutionsLinks = (footer?.solutionsLinks && footer.solutionsLinks.length > 0) ? footer.solutionsLinks : defaultSolutionsLinks;

  const bioText = language === "bn" 
    ? (footer?.bioBn || footer?.bio || t.bio) 
    : (footer?.bio || t.bio);

  const statusText = language === "bn" 
    ? (footer?.statusTextBn || footer?.statusText || t.status) 
    : (footer?.statusText || t.status);

  const navTitle = language === "bn"
    ? (footer?.navLinksTitleBn || footer?.navLinksTitle || t.navTitle)
    : (footer?.navLinksTitle || t.navTitle);

  const solutionsTitle = language === "bn"
    ? (footer?.solutionsTitleBn || footer?.solutionsTitle || t.solutionsTitle)
    : (footer?.solutionsTitle || t.solutionsTitle);

  const helpTitle = language === "bn"
    ? (footer?.helpTitleBn || footer?.helpTitle || t.helpTitle)
    : (footer?.helpTitle || t.helpTitle);

  const helpDesc = language === "bn"
    ? (footer?.helpDescBn || footer?.helpDesc || t.helpDesc)
    : (footer?.helpDesc || t.helpDesc);

  const helpBtnText = language === "bn"
    ? (footer?.helpButtonTextBn || footer?.helpButtonText || "হোয়াটসঅ্যাপে চ্যাট")
    : (footer?.helpButtonText || "Chat on WhatsApp");

  const copyrightText = language === "bn"
    ? (footer?.copyrightTextBn || footer?.copyrightText || t.allRights)
    : (footer?.copyrightText || t.allRights);

  const locationText = footer?.bottomLocationText || "Gulshan-2, Dhaka, Bangladesh";
  const locationBadge = footer?.locationBadge || "Dhaka";

  return (
    <footer className="relative bg-[#020b14] border-t border-cyan-500/10 text-slate-400 pt-20 pb-12 overflow-hidden">
      {/* Subtle Logo-matched bottom glow */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-gradient-to-t from-cyan-500/15 via-[#009fe3]/10 to-transparent blur-[120px] rounded-full pointer-events-none" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/[0.08]">
          
          {/* Col 1 & 2: Brand & Bio (2 cols) */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 rounded-xl overflow-hidden shrink-0 shadow-lg shadow-cyan-500/15 border border-white/10">
                <img
                  src="/logo.png"
                  alt="WebZen Bangladesh"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              <div>
                <span className="font-bold text-lg text-white tracking-tight">
                  {companyName}
                </span>
                <span className="ml-2 text-[10px] px-2 py-0.5 rounded-full font-semibold bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  {locationBadge}
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed max-w-sm">
              {bioText}
            </p>

            <div className="flex items-center gap-2 text-xs text-slate-300">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>{statusText}</span>
            </div>
          </div>

          {/* Col 3: Navigation */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {navTitle}
            </h4>
            <ul className="space-y-2.5 text-xs">
              {navLinks.map((item) => (
                <li key={item.id}>
                  <a href={item.url} className="hover:text-cyan-400 transition-colors">
                    {language === "bn" ? (item.labelBn || item.label) : item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Solutions */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {solutionsTitle}
            </h4>
            <ul className="space-y-2.5 text-xs">
              {solutionsLinks.map((item) => (
                <li key={item.id}>
                  <a href={item.url} className="hover:text-cyan-400 transition-colors">
                    {language === "bn" ? (item.labelBn || item.label) : item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Customer Assistance */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">
              {helpTitle}
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed">
              {helpDesc}
            </p>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-xs font-semibold hover:bg-emerald-500/30 transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
              <span>{helpBtnText}</span>
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <div className="flex items-center gap-2">
            <span>© {new Date().getFullYear()} {companyName}. {copyrightText}</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-slate-400">{locationText}</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 hover:border-cyan-500/40 text-slate-300 hover:text-white transition-colors"
            >
              <span>{t.backToTop}</span>
              <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
