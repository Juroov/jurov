"use client";

import { useRef, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import StarBorder from "./react-bits/StarBorder";

const options = [
  { title: "About", href: "/about", detail: "The person behind the pixels.", icon: "↗" },
  { title: "Skills", href: "/skills", detail: "The tools behind the work.", icon: "⌘" },
  { title: "Experience", href: "/experience", detail: "Where I've put them to use.", icon: "✳" },
];

export default function KnowMore() {
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();
  const container = useRef<HTMLDivElement>(null);

  return (
    <div className="bits-know-more" ref={container}
      onKeyDown={(event) => {
        if (event.key === "Escape" && open) {
          setOpen(false);
          container.current?.querySelector<HTMLButtonElement>("button")?.focus();
        }
      }}>
      <StarBorder
        as="button" type="button" className="bits-know-button"
        color="#FF4D5E" trailColor="#C41E3A" duration={8} sparkle={false}
        hover="brighten" radius={14} backgroundColor="#120D0D" textColor="#F4EEE7"
        aria-expanded={open} aria-controls="know-more-options"
        onClick={() => setOpen((value) => !value)}
      >
        Know More About Me <span aria-hidden="true">{open ? "−" : "+"}</span>
      </StarBorder>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div id="know-more-options" className="bits-know-options"
            initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: reduced ? 0 : 0.3 }}>
            <div className="bits-know-options-inner">
              {options.map((option, index) => (
                <motion.div key={option.href}
                  initial={reduced ? false : { opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }} transition={{ delay: reduced ? 0 : index * 0.06 }}>
                  <Link href={option.href} className="bits-know-option">
                    <span className="bits-know-icon" aria-hidden="true">{option.icon}</span>
                    <strong>{option.title}</strong><small>{option.detail}</small>
                    <span className="bits-know-arrow" aria-hidden="true">↗</span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
