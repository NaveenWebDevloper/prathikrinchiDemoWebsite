"use client";

import React, { useEffect, useState, useSyncExternalStore } from "react";
import { motion, useSpring } from "framer-motion";

function subscribePointer(callback: () => void) {
  const mql = window.matchMedia("(pointer: fine)");
  mql.addEventListener("change", callback);
  return () => mql.removeEventListener("change", callback);
}

function getPointerSnapshot() {
  if (typeof window === "undefined") return false;
  const isFinePointer = window.matchMedia("(pointer: fine)").matches;
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  return isFinePointer && !prefersReducedMotion;
}

function getServerSnapshot() {
  return false;
}

export function CustomCursor() {
  const isPointerDevice = useSyncExternalStore(
    subscribePointer,
    getPointerSnapshot,
    getServerSnapshot
  );

  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const springConfig = { damping: 28, stiffness: 350, mass: 0.5 };
  const cursorX = useSpring(-100, springConfig);
  const cursorY = useSpring(-100, springConfig);

  useEffect(() => {
    if (!isPointerDevice) return;

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);
    const handleMouseEnter = () => setIsVisible(true);

    const handleInteractiveOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const interactiveEl = target.closest(
        "a, button, [role='button'], input, textarea, select, .interactive-hover"
      );
      setIsHovered(!!interactiveEl);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleInteractiveOver);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleInteractiveOver);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [cursorX, cursorY, isPointerDevice]);

  if (!isPointerDevice || !isVisible) {
    return null;
  }

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-difference"
      style={{
        x: cursorX,
        y: cursorY,
        translateX: "-50%",
        translateY: "-50%",
      }}
      aria-hidden="true"
    >
      <motion.div
        animate={{
          width: isHovered ? 40 : 10,
          height: isHovered ? 40 : 10,
          opacity: isHovered ? 0.35 : 0.7,
        }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="rounded-full bg-white backdrop-blur-[1px] border border-white/40"
      />
    </motion.div>
  );
}
