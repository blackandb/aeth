"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface ScrollRevealTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function ScrollRevealText({ text, className = "", delay = 0 }: ScrollRevealTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { 
    once: true, 
    margin: "-100px",
    amount: 0.5 
  });

  return (
    <div ref={ref} className={className}>
      <motion.span
        className="inline-block"
        initial={{ color: "#888888", opacity: 0.3 }}
        animate={isInView ? { color: "#ffffff", opacity: 1 } : { color: "#888888", opacity: 0.3 }}
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
