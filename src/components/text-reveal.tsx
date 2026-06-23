"use client";

import { useRef, useState, useEffect } from "react";

interface ScrollRevealTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export function ScrollRevealText({ text, className = "", delay = 0 }: ScrollRevealTextProps) {
  const [isActive, setIsActive] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsActive(true);
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

  const active = isActive || isHovered;

  return (
    <span
      ref={ref}
      className={`inline-block transition-all duration-700 ease-out ${className}`}
      style={{
        color: active ? "#ffffff" : "#888888",
        opacity: active ? 1 : 0.3,
        transitionDelay: `${delay}ms`,
        textShadow: active ? "none" : "0 0 0px rgba(136,136,136,0.5)",
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
    </span>
  );
}
