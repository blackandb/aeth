"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface ScrollRevealTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function ScrollRevealText({ text, className = "", delay = 0 }: ScrollRevealTextProps) {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  
  const isInView = useInView(ref, { 
    once: false,        // IMPORTANT: false = reacționează la scroll out și in
    amount: 0.3
  });

  // Când e IN VIEW sau HOVER → WHITE
  // Când e OUT OF VIEW și NU E HOVER → GREY
  const isActive = isInView || isHovered;

  return (
    <motion.span
      ref={ref}
      className={`inline-block ${className}`}
      initial={{ color: "#ffffff", opacity: 1 }}      // START: white
      animate={isActive 
        ? { color: "#ffffff", opacity: 1 }              // ACTIVE: white
        : { color: "#888888", opacity: 0.3 }            // INACTIVE: grey
      }
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
