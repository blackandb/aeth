'use client';

import { motion, useInView, Variants } from 'framer-motion';
import { useRef, ReactNode } from 'react';

// Corporate easing curves
const EASE = {
  corporate: [0.25, 0.1, 0.25, 1] as const,
  smooth: [0.43, 0.13, 0.23, 0.96] as const,
  snap: [0.16, 1, 0.3, 1] as const, 
};

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  className?: string;
  once?: boolean;
  amount?: number;
}

export function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  direction = 'up',
  distance = 30,
  className = '',
  once = true,
  amount = 0.15,
}: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, amount });

  const directions = {
    up: { y: distance },
    down: { y: -distance },
    left: { x: distance },
    right: { x: -distance },
    none: {},
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directions[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{
        duration,
        delay,
        ease: EASE.corporate,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// Staggered children container
interface StaggerContainerProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
  delayStart?: number;
}

export function StaggerContainer({
  children,
  staggerDelay = 0.1,
  className = '',
  delayStart = 0,
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delayStart,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: EASE.corporate,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      className={className}
    >
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div key={i} variants={itemVariants}>
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  );
}

// Number counter with spring physics
interface CounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  duration?: number;
  className?: string;
}

export function Counter({
  value,
  prefix = '',
  suffix = '',
  decimals = 0,
  duration = 1.5,
  className = '',
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.3 }}
    >
      {isInView && (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
        >
          {prefix}
          <motion.span
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
          />
          <CountUp end={value} duration={duration} decimals={decimals} />
          {suffix}
        </motion.span>
      )}
    </motion.span>
  );
}

// Simple count-up hook component
function CountUp({ end, duration, decimals }: { end: number; duration: number; decimals: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });
  
  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
    >
      {isInView ? <AnimatedNumber value={end} duration={duration} decimals={decimals} /> : 0}
    </motion.span>
  );
}

function AnimatedNumber({ value, decimals }: { value: number; duration: number; decimals: number }) {
  return <span>{value.toFixed(decimals)}</span>;
}

// Line draw animation
interface LineDrawProps {
  direction?: 'horizontal' | 'vertical';
  className?: string;
  delay?: number;
}

export function LineDraw({
  direction = 'horizontal',
  className = '',
  delay = 0,
}: LineDrawProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const scaleAxis = direction === 'horizontal' ? 'scaleX' : 'scaleY';

  return (
    <motion.div
      ref={ref}
      className={`bg-white/10 ${className}`}
      style={{
        height: direction === 'horizontal' ? 1 : '100%',
        width: direction === 'vertical' ? 1 : '100%',
        transformOrigin: direction === 'horizontal' ? 'left' : 'top',
      }}
      initial={{ [scaleAxis]: 0 }}
      animate={isInView ? { [scaleAxis]: 1 } : {}}
      transition={{
        duration: 0.8,
        delay,
        ease: EASE.corporate,
      }}
    />
  );
}

// Hover scale for interactive elements
interface HoverProps {
  children: ReactNode;
  className?: string;
  scale?: number;
  lift?: number;
}

export function HoverLift({
  children,
  className = '',
  scale = 1.02,
  lift = -2,
}: HoverProps) {
  return (
    <motion.div
      className={className}
      whileHover={{
        scale,
        y: lift,
        transition: { duration: 0.2, ease: EASE.corporate },
      }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.div>
  );
}

// Text reveal for quotes
interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  lineDelay?: number;
}

export function TextReveal({
  text,
  className = '',
  delay = 0,
  lineDelay = 0.15,
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const lines = text.split('\n');

  return (
    <div ref={ref} className={className}>
      {lines.map((line, i) => (
        <div key={i} className="overflow-hidden">
          <motion.p
            initial={{ y: '100%', opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.5,
              delay: delay + i * lineDelay,
              ease: EASE.corporate,
            }}
          >
            {line}
          </motion.p>
        </div>
      ))}
    </div>
  );
}
