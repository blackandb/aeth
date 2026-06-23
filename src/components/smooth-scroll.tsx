"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

export function ScrollRevealText({ text, className = "", delay = 0 }: ScrollRevealTextProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  // IntersectionObserver manual — mai fiabil
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      { 
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const isActive = isVisible || isHovered;

  return (
    <motion.span
      ref={ref}
      className={`inline-block ${className}`}
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
