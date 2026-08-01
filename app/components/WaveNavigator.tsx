"use client";

import {
  createContext,
  useCallback,
  useContext,
  useRef,
  useState,
} from "react";
import { useRouter } from "next/navigation";
import WaveTransitionOverlay, { Phase } from "./WaveTransitionOverlay";

/* ──────────────────────────────────────────────────────────────
   WaveNavigatorContext
   Provides `waveNavigate(href)` — navigate with SVG wave animation.
   Usage:
     const { waveNavigate } = useWaveNavigator();
     waveNavigate("/about");
   ────────────────────────────────────────────────────────────── */

interface WaveNavigatorContextValue {
  waveNavigate: (href: string, direction?: "up" | "down") => void;
}

const WaveNavigatorContext = createContext<WaveNavigatorContextValue>({
  waveNavigate: () => {},
});

export function useWaveNavigator() {
  return useContext(WaveNavigatorContext);
}

export function WaveNavigatorProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();
  const [phase, setPhase] = useState<"idle" | "transition">("idle");
  const [direction, setDirection] = useState<"up" | "down">("up");

  const waveNavigate = useCallback((href: string, dir: "up" | "down" = "up") => {
    if (phase !== "idle") return; // prevent double-trigger
    setDirection(dir);
    setPhase("transition");

    // The entire animation is 1500ms. Trigger route change at the peak (750ms)
    setTimeout(() => {
      router.push(href);
    }, 750);

    // Reset back to idle when finished
    setTimeout(() => {
      setPhase("idle");
    }, 1550);
  }, [phase, router]);

  return (
    <WaveNavigatorContext.Provider value={{ waveNavigate }}>
      {children}
      <WaveTransitionOverlay
        phase={phase}
        direction={direction}
      />
    </WaveNavigatorContext.Provider>
  );
}
