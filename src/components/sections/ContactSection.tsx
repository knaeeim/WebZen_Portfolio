"use client";

import React, { useState } from "react";
import { useSite } from "@/context/SiteContext";
import { useLanguage } from "@/context/LanguageContext";
import { translations } from "@/data/translations";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  MessageCircle, 
  Send, 
  CheckCircle2,
  ArrowRight,
  ShieldCheck
} from "lucide-react";

export function ContactSection() {
  const { data } = useSite();
  const { contact } = data;
  const { language } = useLanguage();
  const t = translations[language].contact;

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: language === "bn" ? "কাস্টম ওয়েবসাইট" : "Full-Stack Web Application",
    budget: "৳ 15,000 - ৳ 35,000",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formState),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Failed to send message. Please try again.");
      }

      setSubmitted(true);
      setFormState({
        name: "",
        email: "",
        phone: "",
        projectType: language === "bn" ? "কাস্টম ওয়েবসাইট" : "Full-Stack Web Application",
        budget: "৳ 15,000 - ৳ 35,000",
        message: "",
      });

      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#FF3823", "#FF6A00", "#FFA000", "#ffffff"],
        });
      } catch (err) {
        console.log("Confetti trigger:", err);
      }
    } catch (err: any) {
      console.error("Submission error:", err);
      setErrorMessage(
        err.message ||
          (language === "bn"
            ? "মেসেজ পাঠাতে সমস্যা হয়েছে। দয়া করে আবার চেষ্টা করুন।"
            : "Something went wrong. Please try again.")
      );
    } finally {
      setLoading(false);
    }
  };

  const whatsappUrl = `https://wa.me/${contact.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent(
    language === "bn"
      ? "আসসালামু আলাইকুম WebZen Bangladesh, আমি একটি প্রজেক্ট নিয়ে কথা বলতে চাই।"
      : "Hello WebZen Bangladesh team, I would like to discuss a new project."
  )}`;

  const isBn = language === "bn";

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden scroll-mt-20 bg-[#050505] z-10">
      
      {/* Background ambient glow - Crimson & Amber */}
      <div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[650px] h-[400px] pointer-events-none rounded-full" 
        style={{
          background: "radial-gradient(circle, rgba(255, 56, 35, 0.12) 0%, rgba(255, 149, 0, 0.08) 50%, transparent 75%)",
          filter: "blur(140px)",
        }}
        aria-hidden="true" 
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ type: "spring", stiffness: 220, damping: 18 }}
            className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full glass-radiant-pill border border-[#FF3823]/30 text-neutral-300 mb-4 shadow-[0_4px_16px_rgba(255,56,35,0.15)]"
          >
            <span className="w-2 h-2 rounded-full bg-[#FF3823] shadow-[0_0_8px_#FF3823]" />
            <span className={`text-[11px] font-semibold tracking-[0.2em] uppercase text-neutral-200 ${isBn ? "font-bangla-ui tracking-normal" : ""}`}>
              {isBn ? "প্রজেক্ট আলোচনা" : "INITIATE PROJECT"}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ type: "spring", stiffness: 220, damping: 18, delay: 0.08 }}
            className={`text-3xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase leading-[1.15] pb-1 ${isBn ? "font-bangla-display font-black tracking-normal" : "font-display font-black"}`}
          >
            {isBn ? (
              <>
                আসুন একসাথে <span className="text-gradient-hero">শুরু করি</span>
              </>
            ) : (
              <>
                Let&apos;s Build <span className="text-gradient-hero">Together</span>
              </>
            )}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ type: "spring", stiffness: 220, damping: 18, delay: 0.15 }}
            className={`mt-3.5 text-sm sm:text-base text-neutral-400 font-normal leading-relaxed ${isBn ? "font-bangla-body" : ""}`}
          >
            {isBn
              ? "আপনার নতুন ওয়েবসাইট, সফটওয়্যার বা ডিজিটাল প্রোডাক্ট নিয়ে কথা বলতে নিচের ফর্মটি পূরণ করুন অথবা সরাসরি হোয়াটসঅ্যাপে যোগাযোগ করুন।"
              : "Have an ambitious digital project or technical requirement? Tell us about your vision and let's engineer something extraordinary."}
          </motion.p>
        </div>

        {/* Unified Executive Contact Suite */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="glass-radiant rounded-[32px] sm:rounded-[36px] border border-white/[0.1] shadow-[0_25px_70px_rgba(0,0,0,0.85)] overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Left Panel: Dhaka Studio, Direct WhatsApp, Trust & NDA (5 cols) */}
            <div className="lg:col-span-5 p-7 sm:p-9 lg:p-10 bg-white/[0.015] border-b lg:border-b-0 lg:border-r border-white/[0.08] flex flex-col justify-between gap-6 sm:gap-8">
              
              {/* Top: Studio Identity & Direct Channels */}
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-[0.2em] text-[#FF6A00] uppercase bg-[#FF6A00]/10 border border-[#FF6A00]/25 mb-4 shadow-[0_0_12px_rgba(255,106,0,0.15)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A00] shadow-[0_0_6px_#FF6A00]" />
                  <span>{isBn ? "ঢাকা স্টুডিও ও আর্কিটেকচার টিম" : "DHAKA STUDIO & CHANNELS"}</span>
                </div>

                <h3 className="font-display font-bold text-xl sm:text-2xl text-white flex items-center gap-2 mb-2">
                  <MapPin className="w-5 h-5 text-[#FF3823] shrink-0" />
                  <span>{t.dhakaHq}</span>
                </h3>
                <p className="text-xs text-neutral-400 mb-6 leading-relaxed">
                  {isBn 
                    ? "নতুন প্রজেক্টের কারিগরি পরিকল্পনা, আর্কিটেকচার অডিট বা সরাসরি মিটিংয়ের জন্য যোগাযোগ করুন।"
                    : "Direct consultation with our senior engineering architects in Dhaka for modern web, cloud & digital products."}
                </p>

                <div className="space-y-3.5 text-xs sm:text-sm text-neutral-400">
                  <div className="flex items-start gap-3">
                    <div className="font-semibold text-neutral-500 w-20 shrink-0">{t.addressLabel}</div>
                    <span className={`text-neutral-200 ${isBn ? "font-bangla-body" : ""}`}>
                      {isBn && contact.addressBn ? contact.addressBn : contact.address}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="font-semibold text-neutral-500 w-20 shrink-0">{t.phoneLabel}</div>
                    <a href={`tel:${contact.phone.replace(/\s+/g, '')}`} className="text-[#FF3823] hover:underline font-semibold font-mono">
                      {contact.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="font-semibold text-neutral-500 w-20 shrink-0">{t.emailLabel}</div>
                    <a href={`mailto:${contact.email}`} className="text-[#FF3823] hover:underline font-semibold font-mono">
                      {contact.email}
                    </a>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="font-semibold text-neutral-500 w-20 shrink-0">{t.hoursLabel}</div>
                    <span className={`text-neutral-300 ${isBn ? "font-bangla-body" : ""}`}>
                      {isBn && contact.officeHoursBn ? contact.officeHoursBn : contact.officeHours}
                    </span>
                  </div>
                </div>
              </div>

              {/* Middle: WhatsApp Action Box */}
              <div className="p-5 rounded-2xl bg-[#25D366]/[0.06] border border-[#25D366]/25 hover:border-[#25D366]/40 transition-all group shadow-sm">
                <div className="flex items-center gap-3.5 mb-3">
                  <div className="w-10 h-10 rounded-xl bg-[#25D366]/20 border border-[#25D366]/30 text-[#25D366] flex items-center justify-center shrink-0">
                    <MessageCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-white">{t.whatsappTitle}</h4>
                    <p className="text-[11px] text-neutral-400 mt-0.5">{t.whatsappSub}</p>
                  </div>
                </div>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="pill-btn-primary w-full py-3 text-xs font-bold tracking-wider uppercase gap-2 shadow-md flex items-center justify-center"
                >
                  <span>{t.whatsappBtn}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </motion.a>
              </div>

              {/* Bottom: Commitments & Live Status */}
              <div className="pt-4 border-t border-white/[0.08] space-y-3">
                <div className="flex items-center gap-2.5 text-xs text-neutral-300">
                  <ShieldCheck className="w-4 h-4 text-[#FF3823] shrink-0" />
                  <span>{t.securityPromise}</span>
                </div>
                <div className="flex items-center gap-2.5 text-[11px] text-neutral-400">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_#10B981]" />
                  </span>
                  <span className={isBn ? "font-bangla-body text-emerald-400 font-semibold" : "text-emerald-400 font-semibold"}>
                    {t.liveIntakeStatus}
                  </span>
                </div>
              </div>

            </div>

            {/* Right Panel: Clean Compact Form (7 cols) */}
            <div className="lg:col-span-7 p-7 sm:p-9 lg:p-10 flex flex-col justify-center">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-[#FF3823]/20 border border-[#FF3823]/40 text-[#FF3823] flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(255,56,35,0.4)]">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{t.formSuccessTitle}</h3>
                  <p className="text-neutral-300 text-sm max-w-md mx-auto">
                    {t.formSuccessDesc}
                  </p>
                  <motion.button
                    whileHover={{ scale: 1.04 }}
                    whileTap={{ scale: 0.96 }}
                    onClick={() => setSubmitted(false)}
                    className="pill-btn-primary font-bold text-xs mt-4 px-6 py-2.5 rounded-full shadow-md cursor-pointer"
                  >
                    {t.formAnotherBtn}
                  </motion.button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-4.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        {t.nameLabel}
                      </label>
                      <input
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder={t.namePlaceholder}
                        className="w-full px-4 text-white placeholder:text-neutral-500 text-xs h-11 sm:h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-[#FF3823]/60 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        {t.emailLabelForm}
                      </label>
                      <input
                        required
                        type="email"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="yourname@company.com"
                        className="w-full px-4 text-white placeholder:text-neutral-500 text-xs h-11 sm:h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-[#FF3823]/60 focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        {t.phoneLabelForm}
                      </label>
                      <input
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="+880 17XX-XXXXXX"
                        className="w-full px-4 text-white placeholder:text-neutral-500 text-xs h-11 sm:h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-[#FF3823]/60 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        {t.projectTypeLabel}
                      </label>
                      <select
                        value={formState.projectType}
                        onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                        className="w-full px-4 text-white text-xs h-11 sm:h-12 rounded-xl bg-[#08080C] border border-white/[0.08] focus:border-[#FF3823]/60 focus:outline-none transition-colors cursor-pointer"
                      >
                        {language === "bn" ? (
                          <>
                            <option value="হেলথটেক ও ডক্টর সিরিয়াল পোর্টাল">হেলথটেক ও ডক্টর সিরিয়াল বুকিং পোর্টাল</option>
                            <option value="অনলাইন শপ ও ই-কমার্স সল্যুশন">অনলাইন শপ ও ই-কমার্স (বিকাশ পেমেন্ট)</option>
                            <option value="প্রোডাকশন VPS ডেপ্লয়মেন্ট">প্রোডাকশন VPS ডেপ্লয়মেন্ট ও লিনাক্স ক্লাউড</option>
                            <option value="ওয়েবসাইট ম্যানেজমেন্ট ও কেয়ার">ওয়েবসাইট ম্যানেজমেন্ট ও টেকনিক্যাল কেয়ার</option>
                            <option value="কাস্টম ফুল-স্ট্যাক ওয়েবসাইট">কাস্টম ফুল-স্ট্যাক ওয়েবসাইট ও পোর্টাল</option>
                            <option value="UI/UX ডিজাইন ও ব্র্যান্ডিং">UI/UX ডিজাইন ও ব্র্যান্ড আধুনিকায়ন</option>
                          </>
                        ) : (
                          <>
                            <option value="HealthTech & Doctor Booking">HealthTech & Doctor Appointment Portal</option>
                            <option value="Online Shop & E-Commerce">Online Shop & E-Commerce (bKash/Card)</option>
                            <option value="Production VPS Deployment">Production VPS Deployment & Linux Cloud</option>
                            <option value="Website Management & Care">Website Management & 24/7 Care</option>
                            <option value="Full-Stack Web Application">Full-Stack Web Application</option>
                            <option value="Brand Website & UI/UX">Brand Website & UI/UX Redesign</option>
                          </>
                        )}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      {t.budgetLabel}
                    </label>
                    <select
                      value={formState.budget}
                      onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                      className="w-full px-4 text-white text-xs h-11 sm:h-12 rounded-xl bg-[#08080C] border border-white/[0.08] focus:border-[#FF3823]/60 focus:outline-none transition-colors cursor-pointer"
                    >
                      {language === "bn" ? (
                        <>
                          <option value="৳ 15,000 - ৳ 35,000">৳ ১৫,০০০ – ৳ ৩৫,০০০ (স্টার্টিং বাজেট)</option>
                          <option value="৳ 35,000 - ৳ 75,000">৳ ৩৫,০০০ – ৳ ৭৫,০০০ (স্ট্যান্ডার্ড প্যাকেজ)</option>
                          <option value="৳ 75,000 - ৳ 1,50,000">৳ ৭৫,০০০ – ৳ ১,৫০,০০০ (এন্টারপ্রাইজ সল্যুশন)</option>
                          <option value="৳ 1,50,000+">৳ ১,৫০,০০০+ (লার্জ স্কেল সফটওয়্যার)</option>
                        </>
                      ) : (
                        <>
                          <option value="৳ 15,000 - ৳ 35,000">৳ 15,000 – ৳ 35,000 ($180 - $420)</option>
                          <option value="৳ 35,000 - ৳ 75,000">৳ 35,000 – ৳ 75,000 ($420 - $890)</option>
                          <option value="৳ 75,000 - ৳ 1,50,000">৳ 75,000 – ৳ 1,50,000 ($890 - $1,780)</option>
                          <option value="৳ 1,50,000+">৳ 1,50,000+ ($1,780+ Enterprise)</option>
                        </>
                      )}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                      {t.messageLabel}
                    </label>
                    <textarea
                      required
                      rows={3}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder={t.messagePlaceholder}
                      className="w-full p-3.5 text-white placeholder:text-neutral-500 text-xs rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-[#FF3823]/60 focus:outline-none transition-colors resize-none"
                    />
                  </div>

                  {errorMessage && (
                    <div className="p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs">
                      {errorMessage}
                    </div>
                  )}

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={loading}
                    type="submit"
                    className="pill-btn-primary w-full py-3.5 sm:py-4 text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer shadow-[0_10px_30px_rgba(255,56,35,0.45)]"
                  >
                    <span>{loading ? t.submittingBtn : t.submitBtn}</span>
                    <Send className="w-4 h-4" />
                  </motion.button>
                </form>
              )}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
