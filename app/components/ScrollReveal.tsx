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
 *   .sig-divider   → adds .is-visible   (signature divider fade-in)
 *   .scroll-indicator → adds .is-visible (scroll hint)
 *   .draw-svg      → triggers stroke draw-in animation
 */
export default function ScrollReveal() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

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

    // ── Luxury classes observer ────────────────────────────────
    // .clip-wipe, .row-reveal, .pill-sweep, .sig-divider, .scroll-indicator → adds .is-visible
    const luxuryEls = document.querySelectorAll<HTMLElement>(
      ".clip-wipe, .row-reveal, .pill-sweep, .sig-divider, .scroll-indicator"
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

    // ── SVG stroke draw-in observer ────────────────────────────
    // Measures each SVG element's real length with getTotalLength(),
    // then animates stroke-dashoffset from length to 0.
    // Staggered ~180ms between paths in the same icon.
    const drawSvgs = document.querySelectorAll<SVGSVGElement>(".draw-svg");

    // Initialize: set dasharray/offset on all drawable elements
    drawSvgs.forEach((svg) => {
      const elements = svg.querySelectorAll("path, circle, line, polyline, rect, ellipse");
      elements.forEach((el) => {
        const svgEl = el as SVGGeometryElement;
        let len = 100;
        try {
          if (svgEl.getTotalLength) len = svgEl.getTotalLength();
        } catch {
          // fallback for elements that don't support getTotalLength
        }
        svgEl.style.strokeDasharray = String(len);
        svgEl.style.strokeDashoffset = reduceMotion ? "0" : String(len);
      });
    });

    // Observer to trigger draw-in on scroll
    if (!reduceMotion) {
      const iconObs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const elements = entry.target.querySelectorAll(
              "path, circle, line, polyline, rect, ellipse"
            );
            elements.forEach((el, i) => {
              setTimeout(() => {
                (el as SVGGeometryElement).style.strokeDashoffset = "0";
              }, i * 180);
            });
            iconObs.unobserve(entry.target);
          });
        },
        { threshold: 0.5 }
      );
      drawSvgs.forEach((svg) => iconObs.observe(svg));

      // ── Signature path draw-in ────────────────────────────────
      const sigPaths = document.querySelectorAll<SVGPathElement>(".sig-path");
      sigPaths.forEach((sigPath) => {
        let sigLen = 380;
        try {
          sigLen = sigPath.getTotalLength();
        } catch {
          // fallback
        }
        sigPath.style.strokeDasharray = String(sigLen);
        sigPath.style.strokeDashoffset = String(sigLen);
        sigPath.style.transition = "stroke-dashoffset 1.2s cubic-bezier(0.22,1,0.36,1) 0.3s";
      });

      const sigDividers = document.querySelectorAll<HTMLElement>(".sig-divider");
      const sigObs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            // Draw the sig path
            const sigPath = entry.target.querySelector(".sig-path") as SVGPathElement | null;
            if (sigPath) {
              sigPath.style.strokeDashoffset = "0";
              // Animate the dot after path completes
              const sigDot = entry.target.querySelector(".sig-dot") as SVGCircleElement | null;
              if (sigDot) {
                setTimeout(() => {
                  sigDot.setAttribute("opacity", "1");
                  // Trigger SMIL animations
                  const anims = sigDot.querySelectorAll("animate");
                  anims.forEach((a) => {
                    try { (a as SVGAnimateElement).beginElement(); } catch { /* ok */ }
                  });
                }, 1400);
              }
            }
            sigObs.unobserve(entry.target);
          });
        },
        { threshold: 0.5 }
      );
      sigDividers.forEach((el) => sigObs.observe(el));

      return () => {
        revealObs.disconnect();
        luxuryObs.disconnect();
        iconObs.disconnect();
        sigObs.disconnect();
      };
    }

    return () => {
      revealObs.disconnect();
      luxuryObs.disconnect();
    };
  }, []);

  return null;
}
