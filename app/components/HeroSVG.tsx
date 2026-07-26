// Full-background hero canvas — no orbital rings, no code glyph
// All the motion stays: floating dots, draw-in arcs, pulsing nodes
// Positioned absolutely behind the hero content
"use client";

export function HeroSVG() {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        display: "block",
        pointerEvents: "none",
        zIndex: 0,
        background: "radial-gradient(ellipse 70% 70% at 50% 30%, var(--accent-glow), transparent 70%)",
      }}
    />
  );
}
