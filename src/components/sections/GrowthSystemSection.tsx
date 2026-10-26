"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  CodeXml, 
  LayoutDashboard, 
  Palette, 
  ShoppingBag, 
  Activity, 
  Users, 
  GraduationCap,
  Server,
  ShieldCheck
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function GrowthSystemSection() {
  const { language } = useLanguage();
  const isBn = language === "bn";

  const [activeModule, setActiveModule] = useState<string | null>(null);

  const systems = [
    {
      id: "healthtech",
      title: isBn ? "HealthTech Portal" : "HealthTech Portal",
      titleBn: "হেলথটেক প্ল্যাটফর্ম",
      icon: Activity,
      accent: "#FF3823",
      tech: "Doctor Booking & Clinic Portal",
      desc: isBn 
        ? "৩ ধাপে অনলাইন ডক্টর সিরিয়াল বুকিং, চেম্বার শিডিউলিং, ভিডিও কনসালটেশন ও পেশেন্ট হিস্ট্রি।" 
        : "Multi-chamber clinic scheduling, patient telemedicine consultations, and digital prescription history."
    },
    {
      id: "ecommerce",
      title: isBn ? "E-Commerce" : "E-Commerce",
      titleBn: "ই-কমার্স সল্যুশন",
      icon: ShoppingBag,
      accent: "#FF6A00",
      tech: "bKash, Nagad & Cards",
      desc: isBn 
        ? "ইনস্ট্যান্ট বিকাশ ও নগদ অটোমেটেড পেমেন্ট, স্মার্ট ইনভেন্টরি, অটোমেটিক ইনভয়েসিং ও কুরিয়ার।" 
        : "Seamless payment checkout with bKash, Nagad, Stripe, and real-time inventory webhooks."
    },
    {
      id: "vps",
      title: isBn ? "VPS Deployment" : "VPS Deployment",
      titleBn: "VPS ডেপ্লয়মেন্ট",
      icon: Server,
      accent: "#FFA000",
      tech: "Ubuntu • Nginx • Docker • SSL",
      desc: isBn 
        ? "লিনাক্স VPS ক্লাউড সেটআপ, Nginx রিভার্স প্রক্সি, অটো-রিনিউ SSL, PM2 ও GitHub CI/CD।" 
        : "Production Linux VPS setup, Nginx reverse proxy, auto-renew SSL, PM2 daemon, and GitHub CI/CD."
    },
    {
      id: "management",
      title: isBn ? "Website Management" : "Website Management",
      titleBn: "ওয়েবসাইট ম্যানেজমেন্ট",
      icon: ShieldCheck,
      accent: "#FF3823",
      tech: "24/7 Monitoring & Cloud Backups",
      desc: isBn 
        ? "সার্বক্ষণিক ২৪/৭ আপটাইম মনিটরিং, প্রতিদিনের ক্লাউড ব্যাকআপ, কনটেন্ট আপডেট ও টেকনিক্যাল সাপোর্ট।" 
        : "24/7 uptime monitoring, automated daily cloud backups, regular content updates, and instant bug fixes."
    },
    {
      id: "webapp",
      title: isBn ? "Web Application" : "Web Application",
      titleBn: "ওয়েব অ্যাপ্লিকেশন",
      icon: CodeXml,
      accent: "#FF6A00",
      tech: "Next.js 16 • Sub-0.5s TTFB",
      desc: isBn 
        ? "আল্ট্রা-ফাস্ট নেক্সট.জেএস ১৬ ও টাইপস্ক্রিপ্ট আর্কিটেকচার যা যেকোনো ট্রাফিকেও স্মুথ পারফরম্যান্স দেয়।" 
        : "Ultra-fast Next.js 16 & TypeScript architecture engineered for instant loads under heavy traffic."
    },
    {
      id: "dashboard",
      title: isBn ? "Custom Dashboard" : "Custom Dashboard",
      titleBn: "কাস্টম ড্যাশবোর্ড",
      icon: LayoutDashboard,
      accent: "#FFA000",
      tech: "Real-time Telemetry & Data",
      desc: isBn 
        ? "রিয়েল-টাইম ডাটা ট্র্যাকিং, ফিল্টারিং ও রোল-বেসড সিকিউরিটি সমৃদ্ধ কাস্টম অ্যাডমিন ড্যাশবোর্ড।" 
        : "Real-time analytics, operational telemetry, and role-based access control built for business speed."
    },
    {
      id: "uiux",
      title: isBn ? "UI/UX Design" : "UI/UX Design",
      titleBn: "UI/UX ডিজাইন",
      icon: Palette,
      accent: "#FF3823",
      tech: "Glassmorphism • 60fps Motion",
      desc: isBn 
        ? "চোখ ধাঁধানো ডার্ক গ্লাস আর্কিটেকচার, ৬০fps ট্রানজিশন ও আধুনিক ডিজাইন সিস্টেম।" 
        : "Bespoke dark glass aesthetics, fluid 60fps micro-animations, and high-conversion UX."
    },
    {
      id: "researcher",
      title: isBn ? "Researcher Portfolio" : "Researcher Portfolio",
      titleBn: "রিসার্চার পোর্টফোলিও",
      icon: GraduationCap,
      accent: "#FF6A00",
      tech: "Academic Papers & Canvas",
      desc: isBn 
        ? "আন্তর্জাতিক মানের একাডেমিক রিসার্চ পেপার শোকেস, ডায়নামিক অ্যাবস্ট্রাক্ট রিডার ও ক্যানভাস।" 
        : "Elite academic showcases, dynamic abstract readers, and interactive mathematical canvas displays."
    }
  ];

  return (
    <section className="relative py-24 sm:py-32 overflow-hidden bg-[#050505] z-10 select-none">
      
      {/* ═══ Background Ambient Radiant Crimson & Orange Glow ═══ */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] sm:w-[950px] h-[550px] sm:h-[750px] pointer-events-none rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(255, 56, 35, 0.18) 0%, rgba(255, 106, 0, 0.10) 40%, rgba(5, 5, 5, 0.85) 75%)",
          filter: "blur(110px)",
        }}
        aria-hidden="true" 
      />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        
        {/* ═══ Top Statement (Without the removed badge) ═══ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-14"
        >
          {/* Main Statement Quote */}
          <h2 className={`text-3xl sm:text-5xl lg:text-[3.25rem] font-black text-white tracking-tight leading-[1.1] ${isBn ? "font-bangla-display" : "font-display"}`}>
            {isBn ? (
              <>“গ্রোথ কোনো কাকতালীয় বিষয় নয়।”</>
            ) : (
              <>“Growth Isn’t Random.”</>
            )}
          </h2>

          {/* Subtitle */}
          <p className={`mt-3 text-base sm:text-xl font-normal text-neutral-300 tracking-wide ${isBn ? "font-bangla-body" : ""}`}>
            {isBn ? (
              <>
                এটি সুপরিকল্পিত <span className="text-gradient-hero font-semibold">টেকনিক্যাল সিস্টেমের</span> ফসল।
              </>
            ) : (
              <>
                It’s built on <span className="text-gradient-hero font-semibold">systems.</span>
              </>
            )}
          </p>
        </motion.div>

        {/* ═══ The Radial Ecosystem Diagram (Desktop View with Center Core & SVG Tracks) ═══ */}
        <div className="relative w-full max-w-[820px] h-[640px] sm:h-[680px] hidden md:flex items-center justify-center my-2">
          
          {/* Ambient Glowing Outer Orbit Rings (Warm Orange/Amber) */}
          <div className="absolute inset-8 rounded-full border border-[#FF6A00]/20 pointer-events-none shadow-[0_0_60px_rgba(255,106,0,0.12)]" />
          <div className="absolute inset-24 rounded-full border border-[#FF3823]/25 pointer-events-none" />

          {/* ─── SVG Energy Connection Tracks to All 7 Nodes ─── */}
          <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none" viewBox="0 0 820 680">
            <defs>
              <filter id="neon-glow-red-orange" filterUnits="userSpaceOnUse" x="0" y="0" width="820" height="680">
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* ═══ LAYER 1: Deep Soft Glow Underlays (All 7 Tracks) ═══ */}
            <line x1="345" y1="275" x2="185" y2="125" stroke="#FF3823" strokeWidth="6" opacity="0.35" strokeLinecap="round" />
            <line x1="475" y1="275" x2="635" y2="125" stroke="#FF6A00" strokeWidth="6" opacity="0.35" strokeLinecap="round" />
            <line x1="315" y1="340" x2="145" y2="340" stroke="#FFA000" strokeWidth="6" opacity="0.35" strokeLinecap="round" />
            <line x1="505" y1="340" x2="675" y2="340" stroke="#FF3823" strokeWidth="6" opacity="0.35" strokeLinecap="round" />
            <line x1="345" y1="405" x2="185" y2="550" stroke="#FF6A00" strokeWidth="6" opacity="0.35" strokeLinecap="round" />
            <line x1="475" y1="405" x2="635" y2="550" stroke="#FFA000" strokeWidth="6" opacity="0.35" strokeLinecap="round" />
            <line x1="410" y1="435" x2="410" y2="585" stroke="#FF3823" strokeWidth="6" opacity="0.35" strokeLinecap="round" />

            {/* ═══ LAYER 2: Crisp Neon Beams (All 7 Tracks) ═══ */}
            
            {/* Track 1: Web Application */}
            <line
              x1="345" y1="275" x2="185" y2="125"
              stroke="#FF3823"
              strokeWidth="2.5"
              strokeLinecap="round"
              filter="url(#neon-glow-red-orange)"
              opacity={activeModule === "webapp" ? "1" : "0.85"}
            />

            {/* Track 2: Custom Dashboard */}
            <line
              x1="475" y1="275" x2="635" y2="125"
              stroke="#FF6A00"
              strokeWidth="2.5"
              strokeLinecap="round"
              filter="url(#neon-glow-red-orange)"
              opacity={activeModule === "dashboard" ? "1" : "0.85"}
            />

            {/* Track 3: UI/UX Design (Middle-Left) */}
            <line
              x1="315" y1="340" x2="145" y2="340"
              stroke="#FFA000"
              strokeWidth="2.5"
              strokeLinecap="round"
              filter="url(#neon-glow-red-orange)"
              opacity={activeModule === "uiux" ? "1" : "0.85"}
            />

            {/* Track 4: E-Commerce (Middle-Right) */}
            <line
              x1="505" y1="340" x2="675" y2="340"
              stroke="#FF3823"
              strokeWidth="2.5"
              strokeLinecap="round"
              filter="url(#neon-glow-red-orange)"
              opacity={activeModule === "ecommerce" ? "1" : "0.85"}
            />

            {/* Track 5: HealthTech */}
            <line
              x1="345" y1="405" x2="185" y2="550"
              stroke="#FF6A00"
              strokeWidth="2.5"
              strokeLinecap="round"
              filter="url(#neon-glow-red-orange)"
              opacity={activeModule === "healthtech" ? "1" : "0.85"}
            />

            {/* Track 6: CRM */}
            <line
              x1="475" y1="405" x2="635" y2="550"
              stroke="#FFA000"
              strokeWidth="2.5"
              strokeLinecap="round"
              filter="url(#neon-glow-red-orange)"
              opacity={activeModule === "crm" ? "1" : "0.85"}
            />

            {/* Track 7: Researcher Portfolio (Bottom-Center) */}
            <line
              x1="410" y1="435" x2="410" y2="585"
              stroke="#FF3823"
              strokeWidth="2.5"
              strokeLinecap="round"
              filter="url(#neon-glow-red-orange)"
              opacity={activeModule === "researcher" ? "1" : "0.85"}
            />

            {/* ═══ LAYER 3: Terminal Anchor Dots at Each Card ═══ */}
            <circle cx="185" cy="125" r="4" fill="#FF3823" filter="url(#neon-glow-red-orange)" />
            <circle cx="635" cy="125" r="4" fill="#FF6A00" filter="url(#neon-glow-red-orange)" />
            <circle cx="145" cy="340" r="4" fill="#FFA000" filter="url(#neon-glow-red-orange)" />
            <circle cx="675" cy="340" r="4" fill="#FF3823" filter="url(#neon-glow-red-orange)" />
            <circle cx="185" cy="550" r="4" fill="#FF6A00" filter="url(#neon-glow-red-orange)" />
            <circle cx="635" cy="550" r="4" fill="#FFA000" filter="url(#neon-glow-red-orange)" />
            <circle cx="410" cy="585" r="4" fill="#FF3823" filter="url(#neon-glow-red-orange)" />

            {/* ═══ LAYER 4: Animated Traveling Data Pulses (All 7 Tracks) ═══ */}
            <circle r="3" fill="#FFFFFF">
              <animateMotion path="M 345 275 L 185 125" dur="2.4s" repeatCount="indefinite" />
            </circle>
            <circle r="3" fill="#FFFFFF">
              <animateMotion path="M 475 275 L 635 125" dur="2.6s" repeatCount="indefinite" />
            </circle>
            <circle r="3" fill="#FFFFFF">
              <animateMotion path="M 315 340 L 145 340" dur="2.2s" repeatCount="indefinite" />
            </circle>
            <circle r="3" fill="#FFFFFF">
              <animateMotion path="M 505 340 L 675 340" dur="2.5s" repeatCount="indefinite" />
            </circle>
            <circle r="3" fill="#FFFFFF">
              <animateMotion path="M 345 405 L 185 550" dur="2.3s" repeatCount="indefinite" />
            </circle>
            <circle r="3" fill="#FFFFFF">
              <animateMotion path="M 475 405 L 635 550" dur="2.7s" repeatCount="indefinite" />
            </circle>
            <circle r="3" fill="#FFFFFF">
              <animateMotion path="M 410 435 L 410 585" dur="2.1s" repeatCount="indefinite" />
            </circle>
          </svg>

          {/* ─── Center Core: "Your Business" (Radiant Crimson & Orange Multi-Ring Orb) ─── */}
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-30 flex items-center justify-center cursor-pointer group"
          >
            {/* Outer Radiant Glow Halo */}
            <div className="absolute w-48 sm:w-56 h-48 sm:h-56 rounded-full bg-[#FF3823]/25 blur-3xl group-hover:bg-[#FF3823]/40 transition-all duration-500" />
            
            {/* Outer Glass Ring */}
            <div className="relative w-40 sm:w-48 h-40 sm:h-48 rounded-full p-3 sm:p-3.5 border-2 border-[#FF3823]/50 shadow-[0_0_50px_rgba(255,56,35,0.6),inset_0_0_25px_rgba(255,106,0,0.35)] bg-gradient-to-b from-[#250805]/90 to-[#0A0504]/90 backdrop-blur-xl flex items-center justify-center">
              
              {/* Inner Radiant Beveled Core */}
              <div className="w-full h-full rounded-full border border-[#FF6A00]/60 bg-gradient-to-b from-[#FF3823] via-[#B81E10] to-[#120504] flex flex-col items-center justify-center text-center p-3 shadow-inner group-hover:scale-105 transition-transform duration-300">
                <span className={`text-lg sm:text-xl font-black text-white tracking-tight leading-tight drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)] ${isBn ? "font-bangla-display" : "font-display"}`}>
                  {isBn ? "আপনার ব্যবসা" : "Your Business"}
                </span>
                <span className="text-[10px] font-mono text-[#FFA000] tracking-wider mt-1 uppercase font-bold drop-shadow">
                  {isBn ? "গ্রোথ ইঞ্জিন" : "Core Growth Engine"}
                </span>
              </div>
            </div>
          </motion.div>

          {/* ═══ 7 Surrounding Satellite Modules in Radiant Glassmorphism ═══ */}

          {/* 1. Top-Left: Web Application */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onMouseEnter={() => setActiveModule("webapp")}
            onMouseLeave={() => setActiveModule(null)}
            className="absolute top-4 left-6 z-30"
          >
            <div className={`w-40 p-3.5 rounded-2xl flex flex-col items-center text-center transition-all duration-300 cursor-pointer ${
              activeModule === "webapp"
                ? "bg-[#180806] border-2 border-[#FF3823] shadow-[0_0_30px_rgba(255,56,35,0.6)] scale-105"
                : "glass-radiant border border-white/[0.1] hover:border-[#FF3823]/60 shadow-[0_15px_35px_rgba(0,0,0,0.85)] hover:scale-105"
            }`}>
              <div className="w-10 h-10 rounded-xl bg-[#FF3823]/15 border border-[#FF3823]/35 flex items-center justify-center mb-2 shadow-[0_0_12px_rgba(255,56,35,0.3)]">
                <CodeXml className="w-5 h-5 text-[#FF3823]" />
              </div>
              <span className={`text-xs font-bold text-white tracking-wide ${isBn ? "font-bangla-ui" : "font-display"}`}>
                Web Application
              </span>
              <span className="text-[10px] font-mono text-neutral-400 mt-0.5 truncate max-w-full">
                Next.js 16 • High Speed
              </span>
            </div>
          </motion.div>

          {/* 2. Top-Right: Custom Dashboard */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.05 }}
            onMouseEnter={() => setActiveModule("dashboard")}
            onMouseLeave={() => setActiveModule(null)}
            className="absolute top-4 right-6 z-30"
          >
            <div className={`w-40 p-3.5 rounded-2xl flex flex-col items-center text-center transition-all duration-300 cursor-pointer ${
              activeModule === "dashboard"
                ? "bg-[#180806] border-2 border-[#FF6A00] shadow-[0_0_30px_rgba(255,106,0,0.6)] scale-105"
                : "glass-radiant border border-white/[0.1] hover:border-[#FF6A00]/60 shadow-[0_15px_35px_rgba(0,0,0,0.85)] hover:scale-105"
            }`}>
              <div className="w-10 h-10 rounded-xl bg-[#FF6A00]/15 border border-[#FF6A00]/35 flex items-center justify-center mb-2 shadow-[0_0_12px_rgba(255,106,0,0.3)]">
                <LayoutDashboard className="w-5 h-5 text-[#FF6A00]" />
              </div>
              <span className={`text-xs font-bold text-white tracking-wide ${isBn ? "font-bangla-ui" : "font-display"}`}>
                Custom Dashboard
              </span>
              <span className="text-[10px] font-mono text-neutral-400 mt-0.5 truncate max-w-full">
                Analytics & Realtime
              </span>
            </div>
          </motion.div>

          {/* 3. Middle-Left: UI/UX Design */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            onMouseEnter={() => setActiveModule("uiux")}
            onMouseLeave={() => setActiveModule(null)}
            className="absolute top-1/2 -translate-y-1/2 left-0 z-30"
          >
            <div className={`w-36 p-3.5 rounded-2xl flex flex-col items-center text-center transition-all duration-300 cursor-pointer ${
              activeModule === "uiux"
                ? "bg-[#180806] border-2 border-[#FFA000] shadow-[0_0_30px_rgba(255,160,0,0.6)] scale-105"
                : "glass-radiant border border-white/[0.1] hover:border-[#FFA000]/60 shadow-[0_15px_35px_rgba(0,0,0,0.85)] hover:scale-105"
            }`}>
              <div className="w-10 h-10 rounded-xl bg-[#FFA000]/15 border border-[#FFA000]/35 flex items-center justify-center mb-2 shadow-[0_0_12px_rgba(255,160,0,0.3)]">
                <Palette className="w-5 h-5 text-[#FFA000]" />
              </div>
              <span className={`text-xs font-bold text-white tracking-wide ${isBn ? "font-bangla-ui" : "font-display"}`}>
                UI/UX Design
              </span>
              <span className="text-[10px] font-mono text-neutral-400 mt-0.5 truncate max-w-full">
                60fps Motion • Glass
              </span>
            </div>
          </motion.div>

          {/* 4. Middle-Right: E-Commerce */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            onMouseEnter={() => setActiveModule("ecommerce")}
            onMouseLeave={() => setActiveModule(null)}
            className="absolute top-1/2 -translate-y-1/2 right-0 z-30"
          >
            <div className={`w-36 p-3.5 rounded-2xl flex flex-col items-center text-center transition-all duration-300 cursor-pointer ${
              activeModule === "ecommerce"
                ? "bg-[#180806] border-2 border-[#FF3823] shadow-[0_0_30px_rgba(255,56,35,0.6)] scale-105"
                : "glass-radiant border border-white/[0.1] hover:border-[#FF3823]/60 shadow-[0_15px_35px_rgba(0,0,0,0.85)] hover:scale-105"
            }`}>
              <div className="w-10 h-10 rounded-xl bg-[#FF3823]/15 border border-[#FF3823]/35 flex items-center justify-center mb-2 shadow-[0_0_12px_rgba(255,56,35,0.3)]">
                <ShoppingBag className="w-5 h-5 text-[#FF3823]" />
              </div>
              <span className={`text-xs font-bold text-white tracking-wide ${isBn ? "font-bangla-ui" : "font-display"}`}>
                E-Commerce
              </span>
              <span className="text-[10px] font-mono text-neutral-400 mt-0.5 truncate max-w-full">
                bKash & Stripe
              </span>
            </div>
          </motion.div>

          {/* 5. Bottom-Left: HealthTech */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onMouseEnter={() => setActiveModule("healthtech")}
            onMouseLeave={() => setActiveModule(null)}
            className="absolute bottom-10 left-6 z-30"
          >
            <div className={`w-36 p-3.5 rounded-2xl flex flex-col items-center text-center transition-all duration-300 cursor-pointer ${
              activeModule === "healthtech"
                ? "bg-[#180806] border-2 border-[#FF6A00] shadow-[0_0_30px_rgba(255,106,0,0.6)] scale-105"
                : "glass-radiant border border-white/[0.1] hover:border-[#FF6A00]/60 shadow-[0_15px_35px_rgba(0,0,0,0.85)] hover:scale-105"
            }`}>
              <div className="w-10 h-10 rounded-xl bg-[#FF6A00]/15 border border-[#FF6A00]/35 flex items-center justify-center mb-2 shadow-[0_0_12px_rgba(255,106,0,0.3)]">
                <Activity className="w-5 h-5 text-[#FF6A00]" />
              </div>
              <span className={`text-xs font-bold text-white tracking-wide ${isBn ? "font-bangla-ui" : "font-display"}`}>
                HealthTech
              </span>
              <span className="text-[10px] font-mono text-neutral-400 mt-0.5 truncate max-w-full">
                Doctor Appointments
              </span>
            </div>
          </motion.div>

          {/* 6. Bottom-Right: CRM */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.25 }}
            onMouseEnter={() => setActiveModule("crm")}
            onMouseLeave={() => setActiveModule(null)}
            className="absolute bottom-10 right-6 z-30"
          >
            <div className={`w-36 p-3.5 rounded-2xl flex flex-col items-center text-center transition-all duration-300 cursor-pointer ${
              activeModule === "crm"
                ? "bg-[#180806] border-2 border-[#FFA000] shadow-[0_0_30px_rgba(255,160,0,0.6)] scale-105"
                : "glass-radiant border border-white/[0.1] hover:border-[#FFA000]/60 shadow-[0_15px_35px_rgba(0,0,0,0.85)] hover:scale-105"
            }`}>
              <div className="w-10 h-10 rounded-xl bg-[#FFA000]/15 border border-[#FFA000]/35 flex items-center justify-center mb-2 shadow-[0_0_12px_rgba(255,160,0,0.3)]">
                <Users className="w-5 h-5 text-[#FFA000]" />
              </div>
              <span className={`text-xs font-bold text-white tracking-wide ${isBn ? "font-bangla-ui" : "font-display"}`}>
                CRM
              </span>
              <span className="text-[10px] font-mono text-neutral-400 mt-0.5 truncate max-w-full">
                Lead Automation
              </span>
            </div>
          </motion.div>

          {/* 7. Bottom-Center: Researcher Portfolio */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onMouseEnter={() => setActiveModule("researcher")}
            onMouseLeave={() => setActiveModule(null)}
            className="absolute bottom-0 left-1/2 -translate-x-1/2 z-30"
          >
            <div className={`w-44 p-3 rounded-2xl flex flex-col items-center text-center transition-all duration-300 cursor-pointer ${
              activeModule === "researcher"
                ? "bg-[#180806] border-2 border-[#FF3823] shadow-[0_0_30px_rgba(255,56,35,0.6)] scale-105"
                : "glass-radiant border border-white/[0.1] hover:border-[#FF3823]/60 shadow-[0_15px_35px_rgba(0,0,0,0.85)] hover:scale-105"
            }`}>
              <div className="w-9 h-9 rounded-xl bg-[#FF3823]/15 border border-[#FF3823]/35 flex items-center justify-center mb-1.5 shadow-[0_0_12px_rgba(255,56,35,0.3)]">
                <GraduationCap className="w-5 h-5 text-[#FF3823]" />
              </div>
              <span className={`text-xs font-bold text-white tracking-wide ${isBn ? "font-bangla-ui" : "font-display"}`}>
                Researcher Portfolio
              </span>
              <span className="text-[9px] font-mono text-neutral-400 mt-0.5 truncate max-w-full">
                Academic Showcase
              </span>
            </div>
          </motion.div>

        </div>

        {/* ═══ Mobile View: Responsive Grid (< 768px) ═══ */}
        <div className="md:hidden w-full flex flex-col items-center gap-4 my-4">
          
          {/* Mobile Center Core */}
          <div className="w-36 h-36 rounded-full border-2 border-[#FF3823]/50 bg-gradient-to-b from-[#FF3823] via-[#B81E10] to-[#120504] flex flex-col items-center justify-center text-center p-3 shadow-[0_0_35px_rgba(255,56,35,0.5)] my-2">
            <span className={`text-base font-black text-white ${isBn ? "font-bangla-display" : "font-display"}`}>
              {isBn ? "আপনার ব্যবসা" : "Your Business"}
            </span>
            <span className="text-[9px] font-mono text-[#FFA000] font-bold mt-1">
              CORE SYSTEM
            </span>
          </div>

          {/* Mobile 7 Grid Tiles */}
          <div className="grid grid-cols-2 gap-3 w-full">
            {systems.map((item) => {
              const Icon = item.icon;
              return (
                <div 
                  key={item.id}
                  onClick={() => setActiveModule(activeModule === item.id ? null : item.id)}
                  className={`p-3.5 rounded-2xl glass-radiant border transition-all ${
                    activeModule === item.id
                      ? "border-[#FF3823] bg-[#180806]"
                      : "border-white/[0.08]"
                  }`}
                >
                  <div className="w-8 h-8 rounded-xl bg-[#FF3823]/15 border border-[#FF3823]/30 flex items-center justify-center mb-2">
                    <Icon className="w-4 h-4 text-[#FF3823]" />
                  </div>
                  <div className="text-xs font-bold text-white truncate">{item.title}</div>
                  <div className="text-[10px] text-neutral-400 font-mono mt-0.5 truncate">{item.tech}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ─── Active Hover Telemetry Description Box ─── */}
        <div className="h-16 sm:h-20 flex items-center justify-center mt-6 text-center max-w-xl px-4">
          <AnimatePresence mode="wait">
            {activeModule ? (
              <motion.div
                key={activeModule}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="p-3 sm:p-4 rounded-xl glass-radiant border border-white/10 text-xs sm:text-sm text-neutral-300 shadow-lg"
              >
                <span className="text-white font-bold mr-1.5 text-gradient-hero">
                  {systems.find(m => m.id === activeModule)?.title}:
                </span>
                {systems.find(m => m.id === activeModule)?.desc}
              </motion.div>
            ) : (
              <motion.div
                key="default"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-xs text-neutral-400 font-mono flex items-center gap-2"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF3823] animate-pulse shadow-[0_0_8px_#FF3823]" />
                <span>
                  {isBn 
                    ? "সিস্টেমের বিস্তারিত দেখতে যেকোনো সেকশনে টাচ বা হোভার করুন" 
                    : "Hover or tap on any system module to see how it integrates with your business"}
                </span>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
