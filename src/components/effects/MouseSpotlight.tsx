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
        background: `radial-gradient(650px circle at ${position.x}px ${position.y}px, rgba(245, 158, 11, 0.05), rgba(236, 72, 153, 0.03), transparent 75%)`,
      }}
    />
  );
}
