"use client";

import { useEffect } from "react";
import { useSite } from "@/context/SiteContext";

const PRESET_MAP: Record<string, { accent: string; start: string; end: string }> = {
  "radiant-neon": { accent: "#FF3823", start: "#FF3823", end: "#FF6A00" },
  "aurora-zen": { accent: "#FF3823", start: "#FF3823", end: "#FF6A00" },
  "dark-clay": { accent: "#FF3823", start: "#FF3823", end: "#FF6A00" },
  "creative-studio": { accent: "#FF3823", start: "#FF3823", end: "#FF6A00" },
  "solar-amber": { accent: "#FFA000", start: "#FFB800", end: "#EA580C" },
  "cyber-zen": { accent: "#FF3823", start: "#FF3823", end: "#FF6A00" },
  "emerald-matrix": { accent: "#10B981", start: "#34D399", end: "#84CC16" },
  "azure-sky": { accent: "#0EA5E9", start: "#38BDF8", end: "#6366F1" },
  "aurora-violet": { accent: "#8B5CF6", start: "#A78BFA", end: "#C084FC" },
  "crimson-rose": { accent: "#FF3823", start: "#FF3823", end: "#FF6A00" },
};

const BG_TONE_MAP: Record<string, string> = {
  "midnight": "#050505",
  "obsidian": "#050505",
  "pitch-black": "#050505",
  "midnight-navy": "#050505",
  "deep-slate": "#050505",
};

export function ThemeSynchronizer() {
  const { data } = useSite();
  const theme = data.theme;

  useEffect(() => {
    if (typeof window === "undefined" || !theme) return;

    const presetInfo = PRESET_MAP[theme.preset] || PRESET_MAP["aurora-zen"];

    const accent = theme.preset === "custom" ? (theme.accentColor || "#2DD4BF") : presetInfo.accent;
    const start = theme.preset === "custom" ? (theme.accentGradientStart || accent) : presetInfo.start;
    const end = theme.preset === "custom" ? (theme.accentGradientEnd || accent) : presetInfo.end;

    const bgTone = BG_TONE_MAP[theme.backgroundTone || "midnight"] || "#060813";

    const glowMultiplier = 
      theme.glowIntensity === "off" ? "0" :
      theme.glowIntensity === "subtle" ? "0.04" :
      theme.glowIntensity === "high" ? "0.15" : "0.08";

    const root = document.documentElement;
    root.style.setProperty("--theme-accent", accent);
    root.style.setProperty("--theme-accent-start", start);
    root.style.setProperty("--theme-accent-end", end);
    root.style.setProperty("--theme-bg", bgTone);
    root.style.setProperty("--theme-glow-opacity", glowMultiplier);
    
    // Set body background
    document.body.style.backgroundColor = bgTone;
  }, [theme]);

  return null;
}
