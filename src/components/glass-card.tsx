"use client";

import { motion } from "framer-motion";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
}

export function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <motion.div
      className={`relative overflow-hidden rounded-lg border border-white/10 bg-white/5 backdrop-blur-xl ${className}`}
      whileHover={{
        scale: 1.02,
        borderColor: "rgba(0, 240, 255, 0.3)",
        boxShadow: "0 0 40px rgba(0, 240, 255, 0.1)",
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan-500/10 via-transparent to-red-500/10" />
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
