"use client";

import { useEffect } from "react";

/**
 * ScrollReveal — unified IntersectionObserver for all animation trigger classes.
 *
 * Classes handled:
 *   .reveal        → adds .visible      (original scroll reveal)
 *   .clip-wipe     → adds .is-visible   (clip-path headline wipe)
 *   .row-reveal    → adds .is-visible   (fade + rise + scale settle)
 *   .pill-sweep    → adds .is-visible   (shimmer sweep on kicker pills)
 *
 * Two observer instances used: one for elements that need more viewport
 * exposure (reveals), one for elements that should fire sooner (pills/wipes).
 */
export default function ScrollReveal() {
  useEffect(() => {
    // ── Original .reveal observer ──────────────────────────────
    const revealEls = document.querySelectorAll<HTMLElement>(".reveal");
    const revealObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            revealObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" }
    );
    revealEls.forEach((el) => revealObs.observe(el));

    // ── New luxury classes observer ────────────────────────────
    // .clip-wipe, .row-reveal, .pill-sweep → adds .is-visible
    const luxuryEls = document.querySelectorAll<HTMLElement>(
      ".clip-wipe, .row-reveal, .pill-sweep"
    );
    const luxuryObs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            luxuryObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18, rootMargin: "0px 0px -30px 0px" }
    );
    luxuryEls.forEach((el) => luxuryObs.observe(el));

    return () => {
      revealObs.disconnect();
      luxuryObs.disconnect();
    };
  }, []);

  return null;
}
