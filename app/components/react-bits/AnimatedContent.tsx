"use client";

// Adapted from React Bits AnimatedContent for the existing Framer Motion runtime.
// Upstream source and license: ./LICENSE.react-bits.md
import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

export default function AnimatedContent({
  children, className = "", delay = 0, distance = 24,
}: { children: ReactNode; className?: string; delay?: number; distance?: number }) {
  const reduced = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduced ? false : { opacity: 0, y: distance }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: reduced ? 0 : 0.65, delay: reduced ? 0 : delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
