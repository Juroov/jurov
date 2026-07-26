"use client";

import Image from "next/image";

type Props = {
  url: string;
  fallbackImage: string;
  title: string;
  accentColor?: string;
  themeBg?: string;
  /** Controlled from parent hover state */
  active: boolean;
};

/**
 * Browser preview window.
 * Controlled entirely by the `active` prop — pops in/out with no internal hover logic.
 * No scroll animation. Static screenshot of the actual website.
 */
export function BrowserFrame({
  url,
  fallbackImage,
  title,
  accentColor = "#3B82F6",
  themeBg = "#ffffff",
  active,
}: Props) {
  const accentGlow = accentColor + "38";
  const displayUrl = url.replace(/^https?:\/\//, "").replace(/\/$/, "");

  return (
    <div
      style={{
        position: "relative",
        perspective: "1200px",
        // Space for the ambient glow to bleed out
        padding: "28px",
        margin: "-28px",
        pointerEvents: "none", // parent handles pointer events
      }}
    >
      {/* ── Ambient glow ── */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: "28px",
          borderRadius: 20,
          background: `radial-gradient(ellipse 85% 65% at 50% 45%, ${accentGlow}, transparent 70%)`,
          filter: "blur(36px)",
          opacity: active ? 1 : 0,
          transform: active ? "scale(1)" : "scale(0.85)",
          transition: "opacity 0.55s ease, transform 0.55s ease",
          pointerEvents: "none",
          zIndex: 0,
        }}
      />

      {/* ── Browser window ── */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          borderRadius: 14,
          overflow: "hidden",
          // Pop-out animation: scale + Y lift
          opacity: active ? 1 : 0,
          transform: active
            ? "rotateX(0deg) rotateY(0deg) scale(1) translateY(0px)"
            : "rotateX(6deg) rotateY(2deg) scale(0.88) translateY(20px)",
          transformStyle: "preserve-3d",
          transition: active
            ? "opacity 0.45s ease, transform 0.55s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.4s ease, border-color 0.4s ease"
            : "opacity 0.3s ease, transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease, border-color 0.4s ease",
          boxShadow: active
            ? `0 40px 90px rgba(0,0,0,0.40), 0 10px 28px rgba(0,0,0,0.22), 0 0 0 1px var(--accent-glow)`
            : `0 8px 24px rgba(0,0,0,0.12), 0 0 0 1px var(--border)`,
          border: active ? "1px solid var(--border-strong)" : "1px solid transparent",
        }}
      >
        {/* ── macOS chrome bar ── */}
        <div
          style={{
            background: "rgba(22, 22, 26, 0.96)",
            backdropFilter: "blur(20px) saturate(160%)",
            WebkitBackdropFilter: "blur(20px) saturate(160%)",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
            padding: "10px 16px",
            display: "flex",
            alignItems: "center",
            gap: 12,
            userSelect: "none",
          }}
        >
          {/* Traffic lights */}
          <div style={{ display: "flex", gap: 6, alignItems: "center", flexShrink: 0 }}>
            {[
              { color: "#FF5F57", glow: "#FF5F5770" },
              { color: "#FEBC2E", glow: "#FEBC2E70" },
              { color: "#28C840", glow: "#28C84070" },
            ].map(({ color, glow }) => (
              <div
                key={color}
                style={{
                  width: 11,
                  height: 11,
                  borderRadius: "50%",
                  background: active ? color : "#2e2e32",
                  boxShadow: active ? `0 0 5px ${glow}` : "none",
                  transition: "background 0.3s ease, box-shadow 0.3s ease",
                }}
              />
            ))}
          </div>

          {/* Address bar */}
          <div
            style={{
              flex: 1,
              display: "flex",
              alignItems: "center",
              gap: 7,
              background: "var(--bg-card)",
              border: `1px solid ${active ? "var(--border-strong)" : "var(--border)"}`,
              borderRadius: 7,
              padding: "5px 11px",
              transition: "border-color 0.35s ease",
              minWidth: 0,
            }}
          >
            {/* Lock icon */}
            <svg
              width="9"
              height="10"
              viewBox="0 0 10 11"
              fill="none"
              aria-hidden="true"
              style={{ flexShrink: 0, opacity: 0.45 }}
            >
              <rect x="1.5" y="5" width="7" height="5.5" rx="1.5" stroke="white" strokeWidth="1.2" />
              <path d="M3 5V3.5a2 2 0 1 1 4 0V5" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
            <span
              style={{
                fontSize: 10.5,
                color: "var(--text-secondary)",
                fontFamily: "var(--font-geist-mono)",
                letterSpacing: "0.01em",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                lineHeight: 1,
              }}
            >
              {displayUrl}
            </span>
          </div>

          {/* Tab/action placeholders */}
          <div style={{ display: "flex", gap: 6, flexShrink: 0 }}>
            {[28, 22].map((w) => (
              <div
                key={w}
                style={{
                  width: w,
                  height: 19,
                  borderRadius: 5,
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                }}
              />
            ))}
          </div>
        </div>

        {/* ── Viewport — static screenshot, no scroll ── */}
        <div
          style={{
            position: "relative",
            width: "100%",
            aspectRatio: "16/10",
            overflow: "hidden",
            background: themeBg,
          }}
        >
          <Image
            src={fallbackImage}
            alt={`${title} — website preview`}
            fill
            sizes="(max-width: 768px) 100vw, 600px"
            style={{ objectFit: "cover", objectPosition: "top center" }}
            priority
          />

          {/* "Open live site" pill — fades in with the window */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "center",
              paddingBottom: 20,
              background: active
                ? "linear-gradient(to top, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.1) 50%, transparent 80%)"
                : "linear-gradient(to top, rgba(0,0,0,0.08) 0%, transparent 40%)",
              transition: "background 0.4s ease",
              pointerEvents: active ? "auto" : "none",
            }}
          >
            <a
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${title} in new tab`}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "8px 18px",
                borderRadius: 999,
                background: accentColor,
                color: "#fff",
                fontSize: 11.5,
                fontWeight: 600,
                fontFamily: "var(--font-geist-sans)",
                letterSpacing: "0.01em",
                textDecoration: "none",
                boxShadow: `0 4px 18px ${accentColor}55`,
                opacity: active ? 1 : 0,
                transform: active ? "translateY(0px)" : "translateY(10px)",
                transition: active
                  ? "opacity 0.4s ease 0.1s, transform 0.5s cubic-bezier(0.34,1.56,0.64,1) 0.1s"
                  : "opacity 0.2s ease, transform 0.2s ease",
                whiteSpace: "nowrap",
              }}
            >
              Open live site
              <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                <path
                  d="M2.5 9.5L9.5 2.5M9.5 2.5H5M9.5 2.5V7"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          </div>
        </div>

        {/* ── Accent stripe at bottom ── */}
        <div
          style={{
            height: 2,
            background: `linear-gradient(to right, transparent, ${accentColor}, transparent)`,
            opacity: active ? 0.85 : 0.2,
            transition: "opacity 0.4s ease",
          }}
        />
      </div>
    </div>
  );
}
