"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";

interface ScrollRevealTextProps {
  text: string;
  className?: string;
  delay?: number;
  as?: "span" | "p" | "h1" | "h2" | "h3" | "div";
}

export function ScrollRevealText({ 
  text, 
  className = "", 
  delay = 0,
  as: Tag = "span" 
}: ScrollRevealTextProps) {
  const [isHovered, setIsHovered] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  
  // Folosim root: null (viewport) și threshold mai mic
  const isInView = useInView(ref, { 
    once: true,
    amount: 0.15,
    margin: "0px 0px -50px 0px" // declanșează cu 50px înainte să intre complet
  });

  // Starea finală: white când e în view SAU hover
  const isActive = isInView || isHovered;

  // Opacitate și culoare controlate separat pentru debugging
  const color = isActive ? "#ffffff" : "#888888";
  const opacity = isActive ? 1 : 0.3;

  // Debug log (șterge după test)
  useEffect(() => {
    console.log(`[${text.substring(0, 15)}...] isInView:`, isInView, "isHovered:", isHovered, "color:", color);
  }, [isInView, isHovered, text, color]);

  return (
    <motion.span
      ref={ref}
      className={`inline-block ${className}`}
      style={{ display: "inline-block" }}
      initial={{ color: "#888888", opacity: 0.3 }}
      animate={{ 
        color: color,
        opacity: opacity
      }}
      transition={{
        duration: 0.8,
        delay: delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
    </motion.span>
  );
}
