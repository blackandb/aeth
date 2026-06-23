// src/components/text-reveal.tsx
"use client";

import { useRef, useState, useEffect } from "react";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
}

export function TextReveal({ text, className = "", delay = 0 }: TextRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Fallback: dacă IntersectionObserver nu funcționează, forțează după 100ms
    const fallbackTimer = setTimeout(() => {
      setIsVisible(true);
    }, 100);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          clearTimeout(fallbackTimer);
          observer.unobserve(element);
        }
      },
      { 
        threshold: 0.01, // coborât la 1% pentru siguranță
        rootMargin: "100px 0px 100px 0px" // margin generoasă
      }
    );

    observer.observe(element);
    return () => {
      clearTimeout(fallbackTimer);
      observer.disconnect();
    };
  }, []);

  const active = isVisible || isHovered;

  return (
    <span
      ref={ref}
      className={`inline-block transition-all duration-700 ease-out ${className}`}
      style={{
        color: active ? "#ffffff" : "#888888",
        opacity: active ? 1 : 0.3,
        transitionDelay: `${delay}ms`,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {text}
    </span>
  );
}
