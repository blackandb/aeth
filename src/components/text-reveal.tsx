"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface ScrollRevealTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function ScrollRevealText({ text, className = "", delay = 0 }: ScrollRevealTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  
  const isInView = useInView(ref, { 
    once: true,
    amount: 0.1
  });

  // Activ când e în viewport SAU când e hover
  const isActive = isInView || isHovered;

  return (
    <div 
      ref={ref} 
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <motion.span
        className="inline-block"
        initial={{ color: "#888888", opacity: 0.3 }}
        animate={isActive ? { color: "#ffffff", opacity: 1 } : { color: "#888888", opacity: 0.3 }}
        transition={{
          duration: 0.8,
          delay: delay,
          ease: [0.25, 0.1, 0.25, 1],
        }}
      >
        {text}
      </motion.span>
    </div>
  );
}
