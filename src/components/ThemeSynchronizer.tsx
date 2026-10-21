"use client";

import { useEffect } from "react";
import { useSite } from "@/context/SiteContext";

const PRESET_MAP: Record<string, { accent: string; start: string; end: string }> = {
  "dark-clay": { accent: "#FF5C35", start: "#FF6F4C", end: "#7C3AED" },
  "creative-studio": { accent: "#FF5C35", start: "#FF6F4C", end: "#7C3AED" },
  "solar-amber": { accent: "#FBBF24", start: "#F59E0B", end: "#EA7814" },
  "cyber-zen": { accent: "#FF5C35", start: "#FF6F4C", end: "#7C3AED" },
  "emerald-matrix": { accent: "#10B981", start: "#34D399", end: "#84CC16" },
  "azure-sky": { accent: "#0EA5E9", start: "#38BDF8", end: "#6366F1" },
  "aurora-violet": { accent: "#8B5CF6", start: "#A78BFA", end: "#FF5C35" },
  "crimson-rose": { accent: "#EF4444", start: "#F43F5E", end: "#FB7185" },
};

const BG_TONE_MAP: Record<string, string> = {
  "obsidian": "#0F1117",
  "pitch-black": "#0B0D13",
  "midnight-navy": "#0D111A",
  "deep-slate": "#12141C",
};

export function ThemeSynchronizer() {
  const { data } = useSite();
  const theme = data.theme;

  useEffect(() => {
    if (typeof window === "undefined" || !theme) return;

    const presetInfo = PRESET_MAP[theme.preset] || PRESET_MAP["dark-clay"];

    const accent = theme.preset === "custom" ? (theme.accentColor || "#FF5C35") : presetInfo.accent;
    const start = theme.preset === "custom" ? (theme.accentGradientStart || accent) : presetInfo.start;
    const end = theme.preset === "custom" ? (theme.accentGradientEnd || accent) : presetInfo.end;

    const bgTone = BG_TONE_MAP[theme.backgroundTone || "obsidian"] || "#0F1117";

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
