"use client";

import { useWaveNavigator } from "./WaveNavigator";

export default function SectionBackBtn() {
  const { waveNavigate } = useWaveNavigator();

  return (
    <button
      onClick={() => waveNavigate("/", "down")}
      className="overlay-close-btn is-visible section-back-btn"
      aria-label="Back to home"
      style={{
        position: "fixed",
        top: 20,
        right: 24,
        zIndex: 99999,
      }}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <path d="M18 6L6 18M6 6l12 12" />
      </svg>
      <span>Close</span>
    </button>
  );
}
