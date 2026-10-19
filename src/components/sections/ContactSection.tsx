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
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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

      // Launch festive celebration confetti
      try {
        confetti({
          particleCount: 120,
          spread: 80,
          origin: { y: 0.6 },
          colors: ["#00f2fe", "#4facfe", "#7928ca", "#10b981", "#ffffff"],
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

  return (
    <section id="contact" className="relative py-28 overflow-hidden dark:bg-black/40 border-t border-cyan-500/15 dark:border-white/[0.06] scroll-mt-24">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-semibold uppercase tracking-wider mb-3">
            <MessageCircle className="w-3.5 h-3.5" />
            <span>{t.badge}</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 dark:text-white tracking-normal leading-[1.35] sm:leading-[1.3] pb-1">
            <span className="inline-block">{t.heading}</span>{" "}
            <span className="text-gradient-cyan inline-block mx-1.5">{t.headingGradient}</span>
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600 dark:text-slate-300">
            {t.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Details & Office Info (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick WhatsApp Action Card */}
            <div className="glass-card rounded-3xl p-6 border border-emerald-500/30 bg-emerald-500/10 dark:bg-gradient-to-br dark:from-emerald-950/20 dark:to-transparent">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900 dark:text-white">{t.whatsappTitle}</h4>
                  <p className="text-xs text-slate-600 dark:text-slate-400">{t.whatsappSub}</p>
                </div>
              </div>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center w-full gap-2 px-5 py-3 rounded-xl bg-emerald-400 hover:bg-emerald-300 text-slate-950 font-extrabold text-xs sm:text-sm transition-all shadow-lg shadow-emerald-500/25 border border-white/40 mt-2 cursor-pointer"
              >
                <span>{t.whatsappBtn}</span>
                <ArrowRight className="w-4 h-4 stroke-[2.5]" />
              </a>
            </div>

            {/* Dhaka Headquarters Card */}
            <div className="glass-card rounded-3xl p-6 border border-cyan-500/15 dark:border-white/10 space-y-4">
              <h3 className="text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span>{t.dhakaHq}</span>
              </h3>

              <div className="space-y-3 text-xs text-slate-600 dark:text-slate-300">
                <div className="flex items-start gap-2.5">
                  <div className="font-semibold text-slate-500 dark:text-slate-400 w-16 shrink-0">{t.addressLabel}</div>
                  <span className="text-slate-800 dark:text-slate-200">{contact.address}</span>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="font-semibold text-slate-500 dark:text-slate-400 w-16 shrink-0">{t.phoneLabel}</div>
                  <a href={`tel:${contact.phone}`} className="text-cyan-600 dark:text-cyan-400 hover:underline">
                    {contact.phone}
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <div className="font-semibold text-slate-500 dark:text-slate-400 w-16 shrink-0">{t.emailLabel}</div>
                  <a href={`mailto:${contact.email}`} className="text-cyan-600 dark:text-cyan-400 hover:underline">
                    {contact.email}
                  </a>
                </div>

                <div className="flex items-start gap-2.5">
                  <div className="font-semibold text-slate-500 dark:text-slate-400 w-16 shrink-0">{t.hoursLabel}</div>
                  <span className="text-slate-700 dark:text-slate-300">{contact.officeHours}</span>
                </div>
              </div>

              {/* Security promise */}
              <div className="pt-4 border-t border-slate-200 dark:border-white/[0.08] flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400">
                <ShieldCheck className="w-4 h-4 text-cyan-600 dark:text-cyan-400 shrink-0" />
                <span>{t.securityPromise}</span>
              </div>
            </div>

            {/* Social Channels */}
            <div className="glass-card rounded-3xl p-6 border border-cyan-500/15 dark:border-white/10">
              <h4 className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3">
                {language === "bn" ? "আমাদের সোশ্যাল মিডিয়া ও চ্যানেল" : "Official Channels & Repositories"}
              </h4>
              <div className="flex flex-wrap gap-2 text-xs">
                {Object.entries(contact.socials).map(([platform, url]) => (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noreferrer"
                    className="capitalize px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/[0.04] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-300 hover:border-cyan-500/30 transition-colors"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>

          </div>

          {/* Right Contact Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="glass-card rounded-3xl p-8 sm:p-10 border border-cyan-500/20 shadow-2xl">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12 space-y-4"
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{t.formSuccessTitle}</h3>
                  <p className="text-slate-600 dark:text-slate-300 text-sm max-w-md mx-auto">
                    {t.formSuccessDesc}
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    className="bg-white hover:bg-slate-50 dark:bg-[#0a2847] dark:hover:bg-[#0f3c69] border border-cyan-500/40 text-slate-900 dark:text-slate-100 font-bold text-xs mt-4 px-4 py-2 rounded-xl shadow-sm cursor-pointer transition-all"
                  >
                    {t.formAnotherBtn}
                  </Button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        {t.nameLabel}
                      </label>
                      <Input
                        required
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        placeholder={t.namePlaceholder}
                        className="bg-slate-50 dark:bg-white/[0.04] border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-xs h-11 rounded-xl focus:border-cyan-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        {t.emailLabelForm}
                      </label>
                      <Input
                        required
                        type="email"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        placeholder="yourname@company.com"
                        className="bg-slate-50 dark:bg-white/[0.04] border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-xs h-11 rounded-xl focus:border-cyan-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        {t.phoneLabelForm}
                      </label>
                      <Input
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        placeholder="+880 17XX-XXXXXX"
                        className="bg-slate-50 dark:bg-white/[0.04] border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-xs h-11 rounded-xl focus:border-cyan-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                        {t.projectTypeLabel}
                      </label>
                      <select
                        value={formState.projectType}
                        onChange={(e) => setFormState({ ...formState, projectType: e.target.value })}
                        className="w-full bg-slate-50 dark:bg-[#0d1326] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-xs h-11 px-3 rounded-xl focus:border-cyan-500 focus:outline-none"
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
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      {t.budgetLabel}
                    </label>
                    <select
                      value={formState.budget}
                      onChange={(e) => setFormState({ ...formState, budget: e.target.value })}
                      className="w-full bg-slate-50 dark:bg-[#0d1326] border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white text-xs h-11 px-3 rounded-xl focus:border-cyan-500 focus:outline-none"
                    >
                      {language === "bn" ? (
                        <>
                          <option value="৳ ১৫,০০০ - ৳ ৩৫,০০০">৳ ১৫,০০০ - ৳ ৩৫,০০০ (স্টার্টআপ ও বিজনেস ওয়েবসাইট)</option>
                          <option value="৳ ৩৫,০০০ - ৳ ৭০,০০০">৳ ৩৫,০০০ - ৳ ৭০,০০০ (ই-কমার্স ও হেলথটেক বুকিং পোর্টাল)</option>
                          <option value="৳ ৭০,০০০ - ৳ ১,৫০,০০০+">৳ ৭০,০০০ - ৳ ১,৫০,০০০+ (কাস্টম সফটওয়্যার ও অ্যাপ)</option>
                          <option value="$150 - $400 USD">$150 - $400 USD (আন্তর্জাতিক স্টার্টআপ)</option>
                          <option value="$400 - $1,200+ USD">$400 - $1,200+ USD (কাস্টম প্ল্যাটফর্ম ও অ্যাপ)</option>
                        </>
                      ) : (
                        <>
                          <option value="৳ 15,000 - ৳ 35,000">৳ 15,000 - ৳ 35,000 (Startup Business Web)</option>
                          <option value="৳ 35,000 - ৳ 70,000">৳ 35,000 - ৳ 70,000 (E-Commerce & HealthTech)</option>
                          <option value="৳ 70,000 - ৳ 150,000+">৳ 70,000 - ৳ 150,000+ (Custom Software & App)</option>
                          <option value="$150 - $400 USD">$150 - $400 USD (Starter Web)</option>
                          <option value="$400 - $1,200+ USD">$400 - $1,200+ USD (Custom Application)</option>
                        </>
                      )}
                    </select>
                    <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-1.5 flex items-center gap-1.5 font-normal">
                      <span className="text-amber-500 dark:text-amber-400 font-semibold">*</span>
                      <span>
                        {language === "bn"
                          ? "উল্লেখ্য: সার্ভার হোস্টিং ও ডাটাবেজ স্টোরেজ খরচ ক্লায়েন্টকে সরাসরি প্রোভাইডারকে পরিশোধ করতে হবে (আমরা ফ্রিতে সেটআপ করে দেব)।"
                          : "Note: Server hosting & database storage expenses are billed directly to the client (we configure it free)."}
                      </span>
                    </p>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1.5">
                      {t.messageLabel}
                    </label>
                    <Textarea
                      required
                      rows={4}
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      placeholder={t.messagePlaceholder}
                      className="bg-slate-50 dark:bg-white/[0.04] border-slate-200 dark:border-white/10 text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-500 text-xs rounded-xl focus:border-cyan-500 resize-none"
                    />
                  </div>

                  {errorMessage && (
                    <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 text-red-300 text-xs flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-cyan-400 via-sky-300 to-cyan-300 hover:from-cyan-300 hover:to-sky-200 text-slate-950 font-extrabold h-13 text-sm sm:text-base rounded-2xl shadow-xl shadow-cyan-500/30 border-2 border-white/60 group transition-all cursor-pointer disabled:opacity-70"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-3.5 h-3.5 border-2 border-slate-950 border-t-transparent rounded-full animate-spin" />
                        <span>{t.submittingBtn}</span>
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <span>{t.submitBtn}</span>
                        <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
