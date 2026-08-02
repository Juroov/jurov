"use client";

import { useEffect, useState } from "react";

/**
 * IntroSequence — full-screen intro overlay that fades out on click or after a timeout.
 * Reads from sessionStorage so it only plays once per session.
 */
export default function IntroSequence() {
  const [visible, setVisible] = useState(false);
  const [fadingOut, setFadingOut] = useState(false);

  useEffect(() => {
    // Only show once per session
    if (!sessionStorage.getItem("intro-done")) {
      setVisible(true);
      // Auto-dismiss after 3 s
      const t = setTimeout(() => dismiss(), 3000);
      return () => clearTimeout(t);
    }
  }, []);

  const dismiss = () => {
    setFadingOut(true);
    sessionStorage.setItem("intro-done", "1");
    setTimeout(() => setVisible(false), 800);
  };

  if (!visible) return null;

  return (
    <div
      className={`intro-overlay${fadingOut ? " fade-out" : ""}`}
      onClick={dismiss}
      aria-hidden="true"
    >
      <p
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(2rem, 6vw, 5rem)",
          fontWeight: 900,
          fontStyle: "italic",
          color: "#fff",
          letterSpacing: "-0.02em",
          userSelect: "none",
        }}
      >
        Lorrenz.
      </p>
    </div>
  );
}
