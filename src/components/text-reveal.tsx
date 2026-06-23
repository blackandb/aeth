"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

interface ScrollRevealTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function ScrollRevealText({ text, className = "", delay = 0 }: ScrollRevealTextProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log("Intersection:", entry.isIntersecting, text.substring(0, 20));
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [text]);

  const isActive = isVisible || isHovered;

  // DEBUG: border roșu când e activ, border gri când nu
  const debugBorder = isActive ? "2px solid red" : "2px solid grey";

  return (
    <motion.span
      ref={ref}
      className={`inline-block ${className}`}
      style={{ border: debugBorder }} // ← vezi în browser dacă devine roșu
      initial={{ color: "#888888", opacity: 0.3 }}
      animate={{ 
        color: isActive ? "#ffffff" : "#888888",
        opacity: isActive ? 1 : 0.3
      }}
      transition={{ duration: 0.8, delay, ease: [0.25, 0.1, 0.25, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
    </motion.span>
  );
}
