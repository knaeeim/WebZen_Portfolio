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
            className={`text-3xl sm:text-5xl md:text-6xl text-white tracking-tight uppercase leading-none ${isBn ? "font-bangla-display font-black tracking-normal" : "font-display font-black"}`}
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

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-10 items-start">
          
          {/* Left Details & Office Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ type: "spring", stiffness: 220, damping: 20 }}
            className="lg:col-span-5 space-y-6"
          >
            
            {/* Quick WhatsApp Action Card */}
            <div className="glass-radiant rounded-[28px] p-6 sm:p-7 border border-white/[0.08] hover:border-[#25D366]/40 transition-all group shadow-[0_16px_36px_rgba(0,0,0,0.6)]">
              <div className="flex items-center gap-3.5 mb-3.5">
                <div className="w-12 h-12 rounded-2xl bg-[#25D366]/15 border border-[#25D366]/30 text-[#25D366] flex items-center justify-center shrink-0">
                  <MessageCircle className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-base text-white">{t.whatsappTitle}</h4>
                  <p className="text-xs text-neutral-400 mt-0.5">{t.whatsappSub}</p>
                </div>
              </div>
              <motion.a
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="pill-btn-primary w-full py-3.5 text-xs font-bold tracking-wider uppercase gap-2.5 mt-3 shadow-lg"
              >
                <span>{t.whatsappBtn}</span>
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-white/20 text-white shadow-inner">
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </motion.a>
            </div>

            {/* Dhaka Headquarters Card */}
            <div className="glass-radiant rounded-[28px] p-6 sm:p-7 space-y-4 border border-white/[0.08] shadow-[0_16px_36px_rgba(0,0,0,0.6)]">
              <h3 className="font-display font-bold text-base text-white flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FF3823]" />
                <span>{t.dhakaHq}</span>
              </h3>

              <div className="space-y-3 text-xs sm:text-sm text-neutral-400">
                <div className="flex items-start gap-2.5">
                  <div className="font-semibold text-neutral-500 w-16 shrink-0">{t.addressLabel}</div>
                  <span className={`text-neutral-200 ${isBn ? "font-bangla-body" : ""}`}>
                    {isBn && contact.addressBn ? contact.addressBn : contact.address}
                  </span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="font-semibold text-neutral-500 w-16 shrink-0">{t.phoneLabel}</div>
                  <a href={`tel:${contact.phone.replace(/\s+/g, '')}`} className="text-[#FF3823] hover:underline font-semibold font-mono">
                    {contact.phone}
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="font-semibold text-neutral-500 w-16 shrink-0">{t.emailLabel}</div>
                  <a href={`mailto:${contact.email}`} className="text-[#FF3823] hover:underline font-semibold font-mono">
                    {contact.email}
                  </a>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="font-semibold text-neutral-500 w-16 shrink-0">{t.hoursLabel}</div>
                  <span className={`text-neutral-300 ${isBn ? "font-bangla-body" : ""}`}>
                    {isBn && contact.officeHoursBn ? contact.officeHoursBn : contact.officeHours}
                  </span>
                </div>
              </div>

              {/* Security promise */}
              <div className="pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs text-neutral-400">
                <ShieldCheck className="w-4 h-4 text-[#FF3823] shrink-0" />
                <span>{t.securityPromise}</span>
              </div>
            </div>

          </motion.div>

          {/* Right Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ type: "spring", stiffness: 220, damping: 20 }}
            className="lg:col-span-7"
          >
            <div className="glass-radiant rounded-[32px] p-7 sm:p-10 border border-white/[0.08] shadow-[0_25px_60px_rgba(0,0,0,0.8)]">
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
                <form onSubmit={handleSubmit} className="space-y-5">
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
                        className="w-full px-4 text-white placeholder:text-neutral-500 text-xs h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-[#FF3823]/60 focus:outline-none transition-colors"
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
                        className="w-full px-4 text-white placeholder:text-neutral-500 text-xs h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-[#FF3823]/60 focus:outline-none transition-colors"
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
                        className="w-full px-4 text-white placeholder:text-neutral-500 text-xs h-12 rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-[#FF3823]/60 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-neutral-300 mb-1.5">
                        {t.projectTypeLabel}
                      </label>
                      <select
                        value={formState.projectType}
                        onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                        className="w-full px-4 text-white text-xs h-12 rounded-xl bg-[#08080C] border border-white/[0.08] focus:border-[#FF3823]/60 focus:outline-none transition-colors cursor-pointer"
                      >
                        {language === "bn" ? (
                          <>
                            <option value="হেলথটেক ও সিরিয়াল বুকিং">হেলথটেক ও ডক্টর সিরিয়াল বুকিং পোর্টাল</option>
                            <option value="অনলাইন শপ ও ই-কমার্স">অনলাইন শপ ও ই-কমার্স (বিকাশ পেমেন্ট)</option>
                            <option value="কাস্টম ওয়েবসাইট">কাস্টম ওয়েবসাইট তৈরি</option>
                            <option value="মোবাইল অ্যাপস (Android & iOS)">মোবাইল অ্যাপস (Android & iOS)</option>
                            <option value="স্মার্ট অটোমেশন ও AI">স্মার্ট অটোমেশন ও AI চ্যাটবট</option>
                            <option value="কাস্টম সফটওয়্যার ও ডাটাবেস">কাস্টম সফটওয়্যার ও ডাটাবেস</option>
                          </>
                        ) : (
                          <>
                            <option value="HealthTech & Doctor Booking">HealthTech & Doctor Appointment Portal</option>
                            <option value="Online Shop & E-Commerce">Online Shop & E-Commerce (bKash/Card)</option>
                            <option value="Full-Stack Web Application">Full-Stack Web Application</option>
                            <option value="Brand Website & Portfolio">Brand Website & Portfolio</option>
                            <option value="Mobile App (iOS & Android)">Mobile App (iOS & Android)</option>
                            <option value="AI Integration & Workflows">AI Integration & Workflows</option>
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
                      className="w-full px-4 text-white text-xs h-12 rounded-xl bg-[#08080C] border border-white/[0.08] focus:border-[#FF3823]/60 focus:outline-none transition-colors cursor-pointer"
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
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder={t.messagePlaceholder}
                      className="w-full p-4 text-white placeholder:text-neutral-500 text-xs rounded-xl bg-white/[0.03] border border-white/[0.08] focus:border-[#FF3823]/60 focus:outline-none transition-colors resize-none"
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
                    className="pill-btn-primary w-full py-4 text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 cursor-pointer shadow-[0_10px_30px_rgba(255,56,35,0.45)]"
                  >
                    <span>{loading ? t.submittingBtn : t.submitBtn}</span>
                    <Send className="w-4 h-4" />
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
