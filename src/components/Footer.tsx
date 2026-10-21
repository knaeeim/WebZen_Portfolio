"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  ArrowUp, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowUpRight 
} from "lucide-react";

import { useLanguage } from "@/context/LanguageContext";
import { useSite } from "@/context/SiteContext";

export function Footer() {
  const { language } = useLanguage();
  const { data } = useSite();
  const { contact, footer } = data;
  const isBn = language === "bn";

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const fallbackUsefulLinks = isBn
    ? [
        { label: "সার্ভিস", href: "#services" },
        { label: "সমাধান", href: "#services" },
        { label: "পোর্টফোলিও", href: "#projects" },
        { label: "প্যাকেজ ও খরচ", href: "#pricing" },
        { label: "পরিসংখ্যান", href: "#metrics" },
        { label: "যোগাযোগ", href: "#contact" },
      ]
    : [
        { label: "Services", href: "#services" },
        { label: "Solutions", href: "#services" },
        { label: "Portfolio", href: "#projects" },
        { label: "Pricing", href: "#pricing" },
        { label: "About Us", href: "#metrics" },
        { label: "Contact", href: "#contact" },
      ];

  const usefulLinks = (footer?.navLinks && footer.navLinks.length > 0)
    ? footer.navLinks.map((link) => ({
        label: isBn && link.labelBn ? link.labelBn : link.label,
        href: link.url,
      }))
    : fallbackUsefulLinks;

  const socialLinks = [
    { name: "GitHub", href: contact?.socials?.github || "https://github.com/webzen-bd", label: "GH" },
    { name: "LinkedIn", href: contact?.socials?.linkedin || "https://linkedin.com/company/webzen-bangladesh", label: "IN" },
    { name: "Twitter", href: contact?.socials?.twitter || "https://twitter.com/webzen_bd", label: "X" },
    { name: "Facebook", href: contact?.socials?.facebook || "https://facebook.com/webzenbangladesh", label: "FB" },
  ];

  const contactAddress = isBn
    ? (footer?.addressBn || contact?.addressBn || "ক্রিস্টাল আইসিটি টাওয়ার, গুলশান-২, ঢাকা-১২১২, বাংলাদেশ")
    : (footer?.address || contact?.address || "Crystal ICT Tower, Gulshan-2, Dhaka-1212, Bangladesh");

  const contactPhone = footer?.phone || contact?.phone || "+880 1886-932936";
  const contactEmail = footer?.email || contact?.email || "hello@webzenbd.com";

  const contactTitle = isBn
    ? (footer?.contactTitleBn || "সরাসরি যোগাযোগ")
    : (footer?.contactTitle || "Contact Us");

  const buttonText = isBn
    ? (footer?.buttonTextBn || "মেসেজ পাঠান")
    : (footer?.buttonText || "Send a Message");

  const buttonUrl = footer?.buttonUrl || "#contact";

  const agencyBio = isBn
    ? (footer?.bioBn || "Webzen BD একটি প্রিমিয়াম ফুল-স্ট্যাক ডিজিটাল এজেন্সি। আমরা আল্ট্রা-ফাস্ট ওয়েব অ্যাপ্লিকেশন, কাস্টম এন্টারপ্রাইজ সফটওয়্যার ও আধুনিক UI/UX আর্কিটেকচার তৈরি করি।")
    : (footer?.bio || "Webzen BD is an elite full-stack digital agency crafting ultra-fast web applications, custom enterprise dashboards, and bespoke UI/UX architecture.");

  const copyrightText = isBn
    ? (footer?.copyrightTextBn || "সর্বস্বত্ব সংরক্ষিত।")
    : (footer?.copyrightText || "All rights reserved.");

  const bottomLocation = footer?.bottomLocationText || "Designed & Engineered in Dhaka";

  return (
    <footer className="relative bg-[#050505] border-t border-white/[0.06] text-neutral-300 pt-16 pb-12 overflow-hidden z-10">
      
      {/* Background ambient glow - Crimson & Amber */}
      <div 
        className="absolute bottom-0 right-0 w-[550px] h-[350px] pointer-events-none rounded-full" 
        style={{
          background: "radial-gradient(circle, rgba(255, 56, 35, 0.1) 0%, transparent 70%)",
          filter: "blur(140px)",
        }}
        aria-hidden="true" 
      />
      <div 
        className="absolute top-0 left-10 w-[500px] h-[350px] pointer-events-none rounded-full" 
        style={{
          background: "radial-gradient(circle, rgba(255, 149, 0, 0.08) 0%, transparent 70%)",
          filter: "blur(140px)",
        }}
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Radiant Glass Footer Island */}
        <div className="glass-radiant rounded-[36px] p-8 sm:p-12 mb-10 border border-white/[0.08] shadow-[0_20px_50px_rgba(0,0,0,0.85)]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-8 border-b border-white/[0.06]">
            
            {/* Left Column: Brand, Bio & Social Pills */}
            <div className="lg:col-span-5 space-y-5">
              <Link href="/" className="inline-flex items-center gap-2.5 group">
                <div className="relative w-9 h-9 rounded-2xl overflow-hidden bg-white/[0.04] border border-white/10 p-1 group-hover:scale-105 group-hover:border-[#FF3823]/50 transition-all">
                  <img src="/logo.png" alt="WebZen Logo" className="w-full h-full object-contain rounded-xl" />
                </div>
                <div className="flex items-baseline">
                  <span className="font-display font-black text-2xl tracking-tight text-white">
                    webzen
                  </span>
                  <span className="font-display font-black text-2xl text-[#FF3823] drop-shadow-[0_0_10px_rgba(255,56,35,0.7)]">
                    .bd
                  </span>
                </div>
              </Link>

              <p className={`text-sm text-neutral-400 font-normal leading-relaxed max-w-sm ${isBn ? "font-bangla-body" : ""}`}>
                {agencyBio}
              </p>

              {/* Social Media Pills */}
              <div className="flex items-center gap-3 pt-2">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -2, scale: 1.05 }}
                    whileTap={{ scale: 0.94 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.08] hover:border-[#FF3823]/40 hover:text-[#FF3823] flex items-center justify-center text-xs font-mono font-bold text-neutral-300 transition-colors shadow-sm"
                    title={social.name}
                  >
                    <span>{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Middle Column: Useful Links */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className={`text-xs sm:text-sm tracking-[0.2em] uppercase text-white ${isBn ? "font-bangla-ui font-bold" : "font-display font-bold"}`}>
                {isBn ? (footer?.navLinksTitleBn || "প্রয়োজনীয় লিংক") : (footer?.navLinksTitle || "Useful Links")}
              </h4>
              <ul className="space-y-2.5">
                {usefulLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className={`text-sm text-neutral-400 hover:text-white transition-colors flex items-center gap-2 group ${isBn ? "font-bangla-ui" : ""}`}
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-white/20 group-hover:bg-[#FF3823] transition-colors" />
                      <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Contact Details */}
            <div className="lg:col-span-4 space-y-4">
              <h4 className={`text-xs sm:text-sm tracking-[0.2em] uppercase text-white ${isBn ? "font-bangla-ui font-bold" : "font-display font-bold"}`}>
                {contactTitle}
              </h4>

              <div className="space-y-3.5 text-sm text-neutral-400">
                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0 mt-0.5 text-[#FF3823]">
                    <MapPin className="w-3.5 h-3.5" />
                  </div>
                  <span className={`leading-relaxed ${isBn ? "font-bangla-body" : ""}`}>
                    {contactAddress}
                  </span>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0 text-[#FF3823]">
                    <Phone className="w-3.5 h-3.5" />
                  </div>
                  <a 
                    href={`tel:${contactPhone.replace(/\s+/g, '')}`} 
                    className="hover:text-white text-[#FF3823] font-semibold transition-colors font-mono"
                  >
                    {contactPhone}
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-lg bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0 text-[#FF3823]">
                    <Mail className="w-3.5 h-3.5" />
                  </div>
                  <a 
                    href={`mailto:${contactEmail}`} 
                    className="hover:text-white text-[#FF3823] font-semibold transition-colors font-mono"
                  >
                    {contactEmail}
                  </a>
                </div>
              </div>

              {/* Quick Action Pill Button */}
              <div className="pt-2">
                <a href={buttonUrl}>
                  <motion.button 
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.96 }}
                    className={`pill-btn-glass px-6 py-2.5 text-xs font-bold tracking-wider uppercase inline-flex items-center gap-2 shadow-sm ${isBn ? "font-bangla-ui tracking-normal text-xs" : ""}`}
                  >
                    <span>{buttonText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#FF3823]" />
                  </motion.button>
                </a>
              </div>
            </div>

          </div>

          {/* Bottom Bar: Copyright & Back to Top */}
          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
            <div>
              © 2026 {data.companyName || "WEBZEN BD"} ({data.companyName ? data.companyName.toLowerCase().replace(/\s+/g, '') + ".com" : "webzenbd.com"}). {copyrightText}
            </div>

            <div className="flex items-center gap-6">
              <span className="text-neutral-400 font-medium">
                {bottomLocation}
              </span>

              <motion.button
                onClick={scrollToTop}
                whileHover={{ y: -2, scale: 1.05 }}
                whileTap={{ scale: 0.94 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-9 h-9 rounded-xl bg-white/[0.04] border border-white/10 text-[#FF3823] hover:text-white hover:bg-white/[0.08] flex items-center justify-center cursor-pointer shadow-sm transition-colors"
                title="Back to top"
              >
                <ArrowUp className="w-4 h-4" />
              </motion.button>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
