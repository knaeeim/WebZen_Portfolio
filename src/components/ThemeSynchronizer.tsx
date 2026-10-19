"use client";

import { useEffect } from "react";
import { useSite } from "@/context/SiteContext";

const PRESET_MAP: Record<string, { accent: string; start: string; end: string }> = {
  "creative-studio": { accent: "#FFB800", start: "#FFE58F", end: "#EA7814" },
  "solar-amber": { accent: "#FFB800", start: "#F59E0B", end: "#EA7814" },
  "cyber-zen": { accent: "#FFB800", start: "#F59E0B", end: "#EA7814" },
  "emerald-matrix": { accent: "#10B981", start: "#34D399", end: "#84CC16" },
  "azure-sky": { accent: "#0EA5E9", start: "#38BDF8", end: "#6366F1" },
  "aurora-violet": { accent: "#A855F7", start: "#D946EF", end: "#38BDF8" },
  "crimson-rose": { accent: "#EF4444", start: "#F43F5E", end: "#FB7185" },
};

const BG_TONE_MAP: Record<string, string> = {
  "pitch-black": "#000000",
  "obsidian": "#050505",
  "midnight-navy": "#080D1A",
  "deep-slate": "#0F141C",
};

export function ThemeSynchronizer() {
  const { data } = useSite();
  const theme = data.theme;

  useEffect(() => {
    if (typeof window === "undefined" || !theme) return;

    const presetInfo = PRESET_MAP[theme.preset] || {
      accent: theme.accentColor || "#06B6D4",
      start: theme.accentGradientStart || "#38BDF8",
      end: theme.accentGradientEnd || "#10B981",
    };

    const accent = theme.preset === "custom" ? (theme.accentColor || "#06B6D4") : presetInfo.accent;
    const start = theme.preset === "custom" ? (theme.accentGradientStart || accent) : presetInfo.start;
    const end = theme.preset === "custom" ? (theme.accentGradientEnd || accent) : presetInfo.end;

    const bgTone = BG_TONE_MAP[theme.backgroundTone || "obsidian"] || "#0B0B0E";

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
