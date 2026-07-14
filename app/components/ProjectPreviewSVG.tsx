"use client";

import { useState } from "react";

type Props = {
  accentColor?: string;
  title: string;
  /** Content to render inside the mini page mockup */
  mockupLines?: { width: string; color?: string }[][];
  /** URL strip text */
  url: string;
};

/**
 * Spaceship-dragging-a-website SVG animation.
 * On hover: spaceship fires engines + tow beam glows + webpage scrolls upward.
 */
export function ProjectPreviewSVG({
  accentColor = "#3B82F6",
  title,
  url,
  mockupLines,
}: Props) {
  const [hovered, setHovered] = useState(false);

  // Default mockup content rows if none provided
  const rows = mockupLines ?? [
    [{ width: "55%", color: accentColor }, { width: "30%" }],
    [{ width: "80%" }, { width: "60%" }],
    [{ width: "40%" }, { width: "70%" }, { width: "20%" }],
    [{ width: "90%" }],
    [{ width: "35%" }, { width: "45%" }],
    [{ width: "75%" }],
    [{ width: "50%" }, { width: "40%" }],
    [{ width: "85%" }],
    [{ width: "30%" }, { width: "55%" }],
    [{ width: "65%" }],
  ];

  const accent = accentColor;
  const accentGlow = accentColor + "55";
  const accentFaint = accentColor + "22";

  return (
    <div
      style={{
        borderRadius: 14,
        overflow: "hidden",
        boxShadow: hovered
          ? `0 24px 64px rgba(0,0,0,0.28), 0 0 0 1px ${accent}40`
          : "0 8px 32px rgba(0,0,0,0.10), 0 0 0 1px rgba(0,0,0,0.07)",
        transition: "box-shadow 0.5s cubic-bezier(0.16,1,0.3,1)",
        position: "relative",
        cursor: "pointer",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── URL strip ── */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "8px 12px",
          background: "var(--surface)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            padding: "4px 12px",
            borderRadius: 999,
            background: hovered ? "var(--bg)" : "transparent",
            transition: "background 0.2s ease",
          }}
        >
          <div
            style={{
              width: 6, height: 6,
              borderRadius: "50%",
              background: "#22c55e",
            }}
          />
          <span
            style={{
              fontSize: 11,
              color: "var(--text-muted)",
              fontFamily: "var(--font-geist-mono)",
              letterSpacing: "0.02em",
            }}
          >
            {url.replace(/^https?:\/\//, "")}
          </span>
        </div>
      </div>

      {/* ── Main SVG scene ── */}
      <svg
        viewBox="0 0 500 375"
        xmlns="http://www.w3.org/2000/svg"
        aria-label={`${title} preview`}
        style={{ display: "block", width: "100%", background: "var(--bg)" }}
      >
        <defs>
          {/* Space background radial gradient */}
          <radialGradient id={`spaceBg-${title.slice(0,4)}`} cx="50%" cy="30%" r="60%">
            <stop offset="0%" stopColor={accentFaint} />
            <stop offset="100%" stopColor="var(--bg)" stopOpacity="0" />
          </radialGradient>

          {/* Tow beam gradient */}
          <linearGradient id={`towBeam-${title.slice(0,4)}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={accent} stopOpacity="0.9" />
            <stop offset="100%" stopColor={accent} stopOpacity="0.05" />
          </linearGradient>

          {/* Engine glow filter */}
          <filter id={`engineGlow-${title.slice(0,4)}`} x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur in="SourceGraphic" stdDeviation={hovered ? "4" : "2"} result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Webpage drop shadow */}
          <filter id={`pageShadow-${title.slice(0,4)}`}>
            <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor={accent} floodOpacity="0.2" />
          </filter>

          {/* Star clip */}
          <clipPath id={`starClip-${title.slice(0,4)}`}>
            <rect x="0" y="0" width="500" height="375" />
          </clipPath>
        </defs>

        {/* ── Space background ── */}
        <rect width="500" height="375" fill="var(--bg)" />
        <rect width="500" height="375" fill={`url(#spaceBg-${title.slice(0,4)})`} />

        {/* Stars */}
        {[
          [30,  20], [80,  60], [150, 15], [220, 45], [290, 25], [360, 55],
          [420, 10], [470, 40], [50, 100], [130, 80], [200, 95], [310, 70],
          [390, 90], [455, 75], [20, 150], [100,130], [180,160], [260,140],
          [340,170], [440,120], [490,155],
        ].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r={i % 3 === 0 ? 1.5 : 1}
            fill="var(--text-label)" opacity={0.3 + (i % 5) * 0.1}>
            {i % 4 === 0 && (
              <animate attributeName="opacity"
                values={`${0.3 + (i % 5) * 0.1};0.8;${0.3 + (i % 5) * 0.1}`}
                dur={`${2 + (i % 3)}s`} repeatCount="indefinite" />
            )}
          </circle>
        ))}

        {/* ── Webpage mockup — floats/scrolls upward on hover ── */}
        <g
          style={{
            transform: hovered ? "translateY(-38px)" : "translateY(0px)",
            transition: hovered
              ? "transform 3.6s cubic-bezier(0.4,0,0.2,1)"
              : "transform 1.4s cubic-bezier(0.4,0,0.2,1)",
            transformOrigin: "250px 300px",
          }}
        >
          {/* Page card */}
          <g filter={`url(#pageShadow-${title.slice(0,4)})`}>
            <rect x="145" y="200" width="210" height="160" rx="8"
              fill="var(--surface)" stroke="var(--border-strong)" strokeWidth="1" />

            {/* Page chrome bar */}
            <rect x="145" y="200" width="210" height="24" rx="8"
              fill="var(--bg)" />
            <rect x="145" y="216" width="210" height="8"
              fill="var(--bg)" />
            {/* Traffic light dots */}
            <circle cx="160" cy="212" r="3.5" fill="#FF5F57" />
            <circle cx="171" cy="212" r="3.5" fill="#FFBD2E" />
            <circle cx="182" cy="212" r="3.5" fill="#28CA41" />
            {/* URL bar */}
            <rect x="192" y="207" width="100" height="10" rx="3"
              fill="var(--border)" />
            <rect x="196" y="209" width="60" height="6" rx="2"
              fill={accent} opacity="0.4" />

            {/* Page content rows */}
            {rows.map((row, ri) => (
              <g key={ri} transform={`translate(155, ${232 + ri * 12})`}>
                {row.reduce((acc: JSX.Element[], block, bi) => {
                  const prevWidths = row.slice(0, bi).map(b => parseFloat(b.width) / 100 * 190);
                  const x = prevWidths.reduce((s, w) => s + w + 6, 0);
                  const w = parseFloat(block.width) / 100 * 190;
                  acc.push(
                    <rect
                      key={bi}
                      x={x}
                      y="0"
                      width={Math.min(w, 190 - x)}
                      height="6"
                      rx="2"
                      fill={block.color ?? "var(--border-strong)"}
                      opacity={block.color ? 0.7 : 0.5}
                    />
                  );
                  return acc;
                }, [])}
              </g>
            ))}

            {/* CTA button row */}
            <rect x="155" y="352" width="50" height="8" rx="4"
              fill={accent} opacity="0.8" />
            <rect x="213" y="352" width="38" height="8" rx="4"
              fill="var(--border-strong)" opacity="0.6" />
          </g>
        </g>

        {/* ── Tow beam — from spaceship nose down to page top ── */}
        <g style={{ opacity: hovered ? 1 : 0.25, transition: "opacity 0.6s ease" }}>
          {/* Beam shape — trapezoid */}
          <polygon
            points="235,92 265,92 265,205 235,205"
            fill={`url(#towBeam-${title.slice(0,4)})`}
            opacity={hovered ? 0.45 : 0.15}
            style={{ transition: "opacity 0.6s ease" }}
          />
          {/* Beam center line */}
          <line x1="250" y1="92" x2="250" y2="202"
            stroke={accent}
            strokeWidth={hovered ? 2 : 1}
            strokeDasharray="4 6"
            opacity="0.8"
            style={{ transition: "stroke-width 0.4s ease" }}
          >
            <animate attributeName="stroke-dashoffset" from="0" to="20"
              dur="0.8s" repeatCount="indefinite" />
          </line>
          {/* Beam sparkles */}
          {hovered && [145, 165, 185].map((y, i) => (
            <circle key={i} cx="250" cy={y} r="2" fill={accent} opacity="0.7">
              <animate attributeName="opacity" values="0.7;0.1;0.7"
                dur={`${0.6 + i * 0.2}s`} repeatCount="indefinite" />
              <animate attributeName="r" values="2;3.5;2"
                dur={`${0.6 + i * 0.2}s`} repeatCount="indefinite" />
            </circle>
          ))}
        </g>

        {/* ── SPACESHIP ── */}
        <g
          style={{
            transform: hovered ? "translateY(-10px)" : "translateY(0px)",
            transition: "transform 1.8s cubic-bezier(0.34,1.56,0.64,1)",
            transformOrigin: "250px 65px",
          }}
        >
          {/* Engine exhaust — left */}
          <ellipse cx="222" cy="85" rx={hovered ? 10 : 5} ry={hovered ? 18 : 9}
            fill={accent} opacity="0.35" filter={`url(#engineGlow-${title.slice(0,4)})`}
            style={{ transition: "rx 0.4s ease, ry 0.4s ease, opacity 0.4s ease" }}>
            <animate attributeName="opacity" values="0.35;0.6;0.35" dur="0.5s" repeatCount="indefinite" />
          </ellipse>
          {/* Engine exhaust — right */}
          <ellipse cx="278" cy="85" rx={hovered ? 10 : 5} ry={hovered ? 18 : 9}
            fill={accent} opacity="0.35" filter={`url(#engineGlow-${title.slice(0,4)})`}
            style={{ transition: "rx 0.4s ease, ry 0.4s ease, opacity 0.4s ease" }}>
            <animate attributeName="opacity" values="0.35;0.6;0.35" dur="0.5s" begin="0.25s" repeatCount="indefinite" />
          </ellipse>

          {/* Main body */}
          <ellipse cx="250" cy="55" rx="46" ry="22"
            fill="var(--surface)" stroke="var(--border-strong)" strokeWidth="1.5" />

          {/* Cockpit dome */}
          <ellipse cx="250" cy="47" rx="20" ry="14"
            fill={accentFaint} stroke={accent} strokeWidth="1.2" opacity="0.85" />
          {/* Cockpit glare */}
          <ellipse cx="244" cy="43" rx="7" ry="5"
            fill="white" opacity="0.18" />

          {/* Left wing */}
          <path d="M 204 58 L 185 75 L 215 72 Z"
            fill="var(--surface)" stroke="var(--border-strong)" strokeWidth="1.2" />
          <path d="M 204 58 L 200 68 L 215 72 Z"
            fill={accentFaint} opacity="0.6" />

          {/* Right wing */}
          <path d="M 296 58 L 315 75 L 285 72 Z"
            fill="var(--surface)" stroke="var(--border-strong)" strokeWidth="1.2" />
          <path d="M 296 58 L 300 68 L 285 72 Z"
            fill={accentFaint} opacity="0.6" />

          {/* Engine pods */}
          <rect x="210" y="68" width="22" height="12" rx="6"
            fill="var(--bg)" stroke="var(--border-strong)" strokeWidth="1" />
          <rect x="268" y="68" width="22" height="12" rx="6"
            fill="var(--bg)" stroke="var(--border-strong)" strokeWidth="1" />

          {/* Engine nozzles */}
          <ellipse cx="221" cy="80" rx="7" ry="4"
            fill={accent} opacity={hovered ? 0.85 : 0.4}
            style={{ transition: "opacity 0.4s ease" }} />
          <ellipse cx="279" cy="80" rx="7" ry="4"
            fill={accent} opacity={hovered ? 0.85 : 0.4}
            style={{ transition: "opacity 0.4s ease" }} />

          {/* Hull accent stripe */}
          <path d="M 215 55 Q 250 50 285 55"
            stroke={accent} strokeWidth="1.5" fill="none" opacity="0.6" />

          {/* Tow attachment point — belly of ship */}
          <circle cx="250" cy="76" r="4"
            fill={accent} opacity={hovered ? 0.9 : 0.4}
            style={{ transition: "opacity 0.4s ease" }}>
            <animate attributeName="r" values="4;5.5;4" dur="1.2s" repeatCount="indefinite" />
          </circle>

          {/* Running lights */}
          <circle cx="185" cy="70" r="2" fill="#FF5F57" opacity="0.8">
            <animate attributeName="opacity" values="0.8;0.2;0.8" dur="1.6s" repeatCount="indefinite" />
          </circle>
          <circle cx="315" cy="70" r="2" fill="#28CA41" opacity="0.8">
            <animate attributeName="opacity" values="0.8;0.2;0.8" dur="1.6s" begin="0.8s" repeatCount="indefinite" />
          </circle>
        </g>

        {/* ── Hover hint overlay ── */}
        <g opacity={hovered ? 0 : 1} style={{ transition: "opacity 0.3s ease", pointerEvents: "none" }}>
          <rect x="346" y="338" width="140" height="22" rx="5"
            fill="rgba(0,0,0,0.55)" />
          <text x="357" y="353"
            fontFamily="var(--font-geist-mono)"
            fontSize="9"
            fill="white"
            letterSpacing="0.06em"
          >
            ↓ HOVER TO ENGAGE
          </text>
        </g>

        {/* AccentColor glow pulse when hovered */}
        {hovered && (
          <circle cx="250" cy="187" r="12" fill={accent} opacity="0">
            <animate attributeName="r" values="12;40;12" dur="2s" repeatCount="indefinite" />
            <animate attributeName="opacity" values="0.3;0;0.3" dur="2s" repeatCount="indefinite" />
          </circle>
        )}
      </svg>
    </div>
  );
}
