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
 *   .stagger-children → staggers direct children with .stagger-item class
 *   .parallax-up   → subtle parallax Y offset on scroll (CSS variable driven)
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
      // Start revealing earlier — feels more continuous and flowing
      { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
    );
    revealEls.forEach((el) => revealObs.observe(el));

    // ── Luxury classes observer ────────────────────────────────
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
      { threshold: 0.1, rootMargin: "0px 0px -20px 0px" }
    );
    luxuryEls.forEach((el) => luxuryObs.observe(el));

    // ── Stagger-children observer ─────────────────────────────
    // Cascades .stagger-item children in with increasing delays
    if (!reduceMotion) {
      const staggerContainers = document.querySelectorAll<HTMLElement>(".stagger-children");
      const staggerObs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const items = entry.target.querySelectorAll<HTMLElement>(":scope > .stagger-item");
              items.forEach((item, i) => {
                item.style.transitionDelay = `${i * 0.08}s`;
                // Force reflow then add visible
                requestAnimationFrame(() => {
                  item.classList.add("is-visible");
                });
              });
              staggerObs.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.06, rootMargin: "0px 0px -20px 0px" }
      );
      staggerContainers.forEach((el) => staggerObs.observe(el));
    }

    // ── SVG stroke draw-in observer ────────────────────────────
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
              }, i * 140); // Slightly faster stagger for snappier draw
            });
            iconObs.unobserve(entry.target);
          });
        },
        { threshold: 0.35 }
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
        // Slower, more dramatic draw
        sigPath.style.transition = "stroke-dashoffset 1.6s cubic-bezier(0.22,1,0.36,1) 0.2s";
      });

      const sigDividers = document.querySelectorAll<HTMLElement>(".sig-divider");
      const sigObs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const sigPath = entry.target.querySelector(".sig-path") as SVGPathElement | null;
            if (sigPath) {
              sigPath.style.strokeDashoffset = "0";
              const sigDot = entry.target.querySelector(".sig-dot") as SVGCircleElement | null;
              if (sigDot) {
                setTimeout(() => {
                  sigDot.setAttribute("opacity", "1");
                  const anims = sigDot.querySelectorAll("animate");
                  anims.forEach((a) => {
                    try { (a as SVGAnimateElement).beginElement(); } catch { /* ok */ }
                  });
                }, 1600);
              }
            }
            sigObs.unobserve(entry.target);
          });
        },
        { threshold: 0.4 }
      );
      sigDividers.forEach((el) => sigObs.observe(el));

      // ── Section headline stagger ──────────────────────────────
      // Sections with .section-reveal class get their h2 + eyebrow choreographed
      const sectionRevEls = document.querySelectorAll<HTMLElement>(".section-reveal");
      const secObs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            // Stagger eyebrow → h2 → content
            const eyebrows = entry.target.querySelectorAll<HTMLElement>(".eyebrow");
            const headlines = entry.target.querySelectorAll<HTMLElement>("h2.clip-wipe");
            eyebrows.forEach((el, i) => {
              el.style.transitionDelay = `${i * 0.05}s`;
              el.classList.add("is-visible");
            });
            // Slight cascade: headlines after eyebrow
            setTimeout(() => {
              headlines.forEach((el) => el.classList.add("is-visible"));
            }, 80);
            secObs.unobserve(entry.target);
          });
        },
        { threshold: 0.06 }
      );
      sectionRevEls.forEach((el) => secObs.observe(el));

      return () => {
        revealObs.disconnect();
        luxuryObs.disconnect();
        iconObs.disconnect();
        sigObs.disconnect();
        secObs.disconnect();
      };
    }

    return () => {
      revealObs.disconnect();
      luxuryObs.disconnect();
    };
  }, []);

  return null;
}
