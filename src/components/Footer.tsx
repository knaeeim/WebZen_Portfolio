"use client";

import React from "react";
import Link from "next/link";
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
    <footer className="relative bg-[#000000] border-t border-white/[0.08] text-neutral-300 pt-12 pb-8 overflow-hidden z-10">
      {/* Background ambient corner glow - Warm Studio Gold */}
      <div 
        className="absolute bottom-0 right-0 w-[450px] h-[250px] bg-[#FFB800]/[0.04] blur-[150px] pointer-events-none" 
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pb-10 border-b border-white/[0.08]">
          
          {/* Left Column: webzen.bd logo, brief agency bio, and social media icons */}
          <div className="lg:col-span-5 space-y-6">
            <Link href="/" className="inline-flex items-center gap-2.5 group">
              <div className="relative w-8 h-8 rounded-xl overflow-hidden bg-white/5 border border-white/10 group-hover:border-[#FFB800]/50 transition-all p-0.5 shadow-[0_0_12px_rgba(255,184,0,0.2)]">
                <img src="/logo.png" alt="WebZen Logo" className="w-full h-full object-contain rounded-lg" />
              </div>
              <div className="flex items-baseline">
                <span className="font-display font-black text-2xl tracking-tight text-white">
                  webzen
                </span>
                <span className="font-display font-black text-2xl text-[#FFB800] drop-shadow-[0_0_10px_rgba(255,184,0,0.5)]">
                  .bd
                </span>
              </div>
            </Link>

            <p className={`text-sm text-neutral-400 font-normal leading-relaxed max-w-sm ${isBn ? "font-bangla-body" : ""}`}>
              {agencyBio}
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/[0.04] border border-white/10 hover:border-[#FFB800]/50 hover:bg-white/[0.08] flex items-center justify-center text-xs font-mono font-bold text-neutral-300 hover:text-white transition-all duration-300 group shadow-sm hover:shadow-[0_0_15px_rgba(255,184,0,0.2)]"
                  title={social.name}
                >
                  <span className="group-hover:scale-110 transition-transform">{social.label}</span>
                </a>
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
                    className={`text-sm text-neutral-400 hover:text-white transition-colors flex items-center gap-1.5 group ${isBn ? "font-bangla-ui" : ""}`}
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-neutral-600 group-hover:bg-[#FFB800] transition-colors" />
                    <span>{link.label}</span>
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
                <MapPin className="w-4 h-4 text-[#FFB800] shrink-0 mt-1" />
                <span className={`leading-relaxed ${isBn ? "font-bangla-body" : ""}`}>
                  {contactAddress}
                </span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#FFB800] shrink-0" />
                <a 
                  href={`tel:${contactPhone.replace(/\s+/g, '')}`} 
                  className="hover:text-white transition-colors"
                >
                  {contactPhone}
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#FFB800] shrink-0" />
                <a 
                  href={`mailto:${contactEmail}`} 
                  className="hover:text-white transition-colors"
                >
                  {contactEmail}
                </a>
              </div>
            </div>

            {/* Quick Action Pill */}
            <div className="pt-2">
              <a href={buttonUrl}>
                <button className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/10 hover:border-[#FFB800]/50 text-xs font-bold text-white bg-white/[0.03] hover:bg-white/[0.08] transition-all cursor-pointer ${isBn ? "font-bangla-ui" : ""}`}>
                  <span>{buttonText}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#FFB800]" />
                </button>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Back to Top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © {new Date().getFullYear()} {data.companyName || "WEBZEN BD"} ({data.companyName ? data.companyName.toLowerCase().replace(/\s+/g, '') + ".com" : "webzenbd.com"}). {copyrightText}
          </div>

          <div className="flex items-center gap-6">
            <span className="text-neutral-500">
              {bottomLocation}
            </span>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-full border border-white/10 hover:border-white/20 text-neutral-400 hover:text-white bg-white/[0.02] hover:bg-white/[0.06] transition-all flex items-center gap-1.5 cursor-pointer"
              title="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
