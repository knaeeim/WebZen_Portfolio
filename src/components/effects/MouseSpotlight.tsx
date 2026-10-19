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

  return (
    <div
      className="fixed inset-0 pointer-events-none z-10 transition-opacity duration-300"
      style={{
        background: `radial-gradient(650px circle at ${position.x}px ${position.y}px, rgba(6, 182, 212, 0.04), rgba(14, 165, 233, 0.025), transparent 70%)`,
      }}
    />
  );
}
