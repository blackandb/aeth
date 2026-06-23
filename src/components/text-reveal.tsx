"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollRevealTextProps {
  text: string;
  className?: string;
}

export function ScrollRevealText({ text, className = "" }: ScrollRevealTextProps) {
  const ref = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end 0.9", "end 0.3"], // INVERSAT: când elementul iese din viewport
  });

  // Textul pornește gri (invizibil) și devine alb (vizibil) la scroll DOWN
  const color = useTransform(
    scrollYProgress,
    [0, 1],
    ["#888888", "#ffffff"] // gray → white
  );

  const opacity = useTransform(
    scrollYProgress,
    [0, 1],
    [0.3, 1] // semi-transparent → fully visible
  );

  return (
    <div ref={ref} className={className}>
      <motion.span
        style={{ color, opacity }}
        className="inline-block"
      >
        {text}
      </motion.span>
    </div>
  );
}
