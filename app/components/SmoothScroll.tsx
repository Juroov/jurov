"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const useNativeScroll =
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      window.matchMedia("(pointer: coarse)").matches;

    if (useNativeScroll) return;

    const lenis = new Lenis({
      autoRaf: true,
      anchors: true,
      lerp: 0.1,
      smoothWheel: true,
      wheelMultiplier: 0.9,
      syncTouch: false,
      infinite: false,
    });

    const handleVisibility = () => {
      if (document.hidden) {
        lenis.stop();
      } else {
        lenis.start();
      }
    };
    document.addEventListener("visibilitychange", handleVisibility);

    return () => {
      document.removeEventListener("visibilitychange", handleVisibility);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
