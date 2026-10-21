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

  // Nav links: Use custom CMS links if defined, otherwise fallback to defaults
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

  // Dynamic Contact info with fallback to contact or defaults
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

  const rawWhatsapp = contact?.whatsapp || "+8801886932936";
  const whatsappNumber = rawWhatsapp.replace(/[^0-9]/g, "");

  return (
    <footer className="relative bg-[#0F1117] border-t border-white/[0.06] text-neutral-300 pt-14 pb-10 overflow-hidden z-10">
      {/* Background ambient corner glow - Neon Coral & Violet */}
      <div 
        className="absolute bottom-0 right-0 w-[500px] h-[300px] bg-[#FF5C35]/[0.05] blur-[160px] pointer-events-none" 
        aria-hidden="true" 
      />
      <div 
        className="absolute top-0 left-10 w-[450px] h-[300px] bg-[#7C3AED]/[0.04] blur-[160px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Clay Footer Island */}
        <div className="clay-card-dark rounded-[36px] p-8 sm:p-12 mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-8 border-b border-white/[0.06]">
            
            {/* Left Column: webzen.bd logo, brief agency bio, and social media icons */}
            <div className="lg:col-span-5 space-y-5">
              <Link href="/" className="inline-flex items-center gap-2.5 group">
                <div className="relative w-9 h-9 rounded-2xl overflow-hidden bg-[#14161F] clay-icon-bubble p-1 group-hover:scale-105 transition-all">
                  <img src="/logo.png" alt="WebZen Logo" className="w-full h-full object-contain rounded-xl" />
                </div>
                <div className="flex items-baseline">
                  <span className="font-display font-black text-2xl tracking-tight text-white text-clay-3d">
                    webzen
                  </span>
                  <span className="font-display font-black text-2xl text-[#FF5C35] drop-shadow-[0_2px_8px_rgba(255,92,53,0.6)]">
                    .bd
                  </span>
                </div>
              </Link>

              <p className={`text-sm text-neutral-400 font-normal leading-relaxed max-w-sm ${isBn ? "font-bangla-body" : ""}`}>
                {agencyBio}
              </p>

              {/* Inflated 3D Clay Social Media Beads */}
              <div className="flex items-center gap-3 pt-2">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.94 }}
                    transition={{ type: "spring", stiffness: 260, damping: 16 }}
                    className="w-10 h-10 rounded-2xl bg-[#14161F] clay-icon-bubble flex items-center justify-center text-xs font-mono font-black text-neutral-200 hover:text-white hover:text-[#FF8B66] transition-colors shadow-md"
                    title={social.name}
                  >
                    <span>{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Middle Column: Useful Links */}
            <div className="lg:col-span-3 space-y-4">
              <h4 className={`text-xs sm:text-sm tracking-[0.2em] uppercase text-white ${isBn ? "font-bangla-ui font-bold" : "font-display font-black"}`}>
                {isBn ? (footer?.navLinksTitleBn || "প্রয়োজনীয় লিংক") : (footer?.navLinksTitle || "Useful Links")}
              </h4>
              <ul className="space-y-2.5">
                {usefulLinks.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className={`text-sm text-neutral-400 hover:text-white transition-colors flex items-center gap-2 group ${isBn ? "font-bangla-ui" : ""}`}
                    >
                      <span className="w-2 h-2 rounded-full bg-[#1E2230] group-hover:bg-[#FF5C35] transition-colors shadow-inner" />
                      <span className="group-hover:translate-x-1 transition-transform">{link.label}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column: Contact Us featuring Dhaka location, phone number, email */}
            <div className="lg:col-span-4 space-y-4">
              <h4 className={`text-xs sm:text-sm tracking-[0.2em] uppercase text-white ${isBn ? "font-bangla-ui font-bold" : "font-display font-black"}`}>
                {contactTitle}
              </h4>

              <div className="space-y-3.5 text-sm text-neutral-400">
                {/* Location */}
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-[#14161F] clay-icon-bubble flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-[#FF5C35]" />
                  </div>
                  <span className={`leading-relaxed ${isBn ? "font-bangla-body" : ""}`}>
                    {contactAddress}
                  </span>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-lg bg-[#14161F] clay-icon-bubble flex items-center justify-center shrink-0">
                    <Phone className="w-3.5 h-3.5 text-[#FF5C35]" />
                  </div>
                  <a 
                    href={`tel:${contactPhone.replace(/\s+/g, '')}`} 
                    className="hover:text-white text-[#FF8B66] font-semibold transition-colors"
                  >
                    {contactPhone}
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-lg bg-[#14161F] clay-icon-bubble flex items-center justify-center shrink-0">
                    <Mail className="w-3.5 h-3.5 text-[#FF5C35]" />
                  </div>
                  <a 
                    href={`mailto:${contactEmail}`} 
                    className="hover:text-white text-[#FF8B66] font-semibold transition-colors"
                  >
                    {contactEmail}
                  </a>
                </div>
              </div>

              {/* Quick Action Pill Button */}
              <div className="pt-2">
                <a href={buttonUrl}>
                  <motion.button 
                    whileHover={{ y: -3, scale: 1.03 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 260, damping: 16 }}
                    className={`clay-btn-dark px-6 py-2.5 text-xs font-black tracking-wider uppercase inline-flex items-center gap-2 shadow-md ${isBn ? "font-bangla-ui" : ""}`}
                  >
                    <span>{buttonText}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#FF5C35]" />
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
                whileHover={{ y: -3, scale: 1.1 }}
                whileTap={{ scale: 0.92 }}
                transition={{ type: "spring", stiffness: 260, damping: 16 }}
                className="w-9 h-9 rounded-2xl bg-[#14161F] clay-icon-bubble text-neutral-300 hover:text-white flex items-center justify-center cursor-pointer shadow-md"
                title="Back to top"
              >
                <ArrowUp className="w-4 h-4 text-[#FF5C35]" />
              </motion.button>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
