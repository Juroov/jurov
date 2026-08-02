"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      // Slower, silkier scroll — lower lerp = more inertia / premium feel
      lerp: 0.045, // Decreased for a longer, smoother deceleration tail
      smoothWheel: true,
      wheelMultiplier: 0.65, // Decreased for a slower, heavier scrolling feel
      touchMultiplier: 1.4,
      infinite: false,
    });

    let rafId: number;

    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
