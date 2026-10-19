"use client";

import React, { useEffect, useState } from "react";
import { useSite } from "@/context/SiteContext";

export function MouseSpotlight() {
  const [position, setPosition] = useState({ x: -1000, y: -1000 });
  const { data } = useSite();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const preset = data.theme.preset;
  const glowColor =
    preset === "emerald-matrix"
      ? "rgba(16, 185, 129, 0.12)"
      : preset === "solar-flare"
      ? "rgba(245, 158, 11, 0.12)"
      : preset === "aurora-violet"
      ? "rgba(168, 85, 247, 0.12)"
      : preset === "obsidian-glow"
      ? "rgba(255, 255, 255, 0.08)"
      : "rgba(0, 242, 254, 0.12)"; // cyber-zen default

  return (
    <div
      className="fixed inset-0 pointer-events-none z-10 transition-opacity duration-300"
      style={{
        background: `radial-gradient(650px circle at ${position.x}px ${position.y}px, ${glowColor}, transparent 80%)`,
      }}
    />
  );
}
