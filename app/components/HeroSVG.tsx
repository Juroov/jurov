// Client Component — Animated orbital SVG illustration for Hero
// Uses SMIL animations + CSS classes for orbit/float effects
// Fully self-contained; respects prefers-reduced-motion via globals.css
"use client";

export function HeroSVG() {
  return (
    <svg
      viewBox="0 0 400 400"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="img"
      style={{ width: "100%", maxWidth: 380, height: "auto", display: "block" }}
    >
      <defs>
        <radialGradient id="heroGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0.18" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="heroLine" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--accent)" stopOpacity="0" />
          <stop offset="50%" stopColor="var(--accent)" stopOpacity="0.6" />
          <stop offset="100%" stopColor="var(--accent)" stopOpacity="0" />
        </linearGradient>
        <filter id="heroBlur">
          <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
        </filter>
      </defs>

      {/* Ambient glow */}
      <circle cx="200" cy="200" r="160" fill="url(#heroGlow)" />

      {/* ── Outer ring — slow spin ── */}
      <g className="svg-orbit">
        <circle cx="200" cy="200" r="145"
          fill="none"
          stroke="var(--border-strong)"
          strokeWidth="1"
          strokeDasharray="6 10"
        />
        {/* Orbiting dot 1 */}
        <circle cx="200" cy="55" r="5" fill="var(--accent)" opacity="0.85">
          <animate attributeName="opacity" values="0.85;0.4;0.85" dur="3s" repeatCount="indefinite" />
        </circle>
        {/* Orbiting dot 2 */}
        <circle cx="345" cy="200" r="3.5" fill="var(--text-muted)" opacity="0.5">
          <animate attributeName="opacity" values="0.5;1;0.5" dur="2.4s" repeatCount="indefinite" />
        </circle>
      </g>

      {/* ── Middle ring — reverse spin ── */}
      <g className="svg-orbit-rev">
        <circle cx="200" cy="200" r="100"
          fill="none"
          stroke="var(--border)"
          strokeWidth="1"
          strokeDasharray="3 14"
        />
        {/* Orbiting diamond */}
        <rect
          x="197" y="97"
          width="6" height="6"
          rx="1"
          fill="var(--accent)"
          opacity="0.6"
          transform="rotate(45 200 100)"
        >
          <animate attributeName="opacity" values="0.6;1;0.6" dur="2s" repeatCount="indefinite" />
        </rect>
      </g>

      {/* ── Inner ring — static ── */}
      <circle cx="200" cy="200" r="58"
        fill="none"
        stroke="var(--border-strong)"
        strokeWidth="1.5"
      />

      {/* ── Center core — float ── */}
      <g className="svg-float" style={{ transformOrigin: "200px 200px" }}>
        {/* Core circle */}
        <circle cx="200" cy="200" r="40"
          fill="var(--surface)"
          stroke="var(--border-strong)"
          strokeWidth="1.5"
        />
        {/* Glow ring on core */}
        <circle cx="200" cy="200" r="40"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="1"
          opacity="0.3"
        >
          <animate attributeName="r" values="40;44;40" dur="3s" repeatCount="indefinite"
            calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1" />
          <animate attributeName="opacity" values="0.3;0.6;0.3" dur="3s" repeatCount="indefinite"
            calcMode="spline" keySplines="0.4 0 0.6 1;0.4 0 0.6 1" />
        </circle>
        {/* Code brackets inside core */}
        <text
          x="200" y="207"
          textAnchor="middle"
          fontFamily="var(--font-geist-mono)"
          fontSize="18"
          fontWeight="700"
          fill="var(--accent)"
          letterSpacing="-1"
        >
          &lt;/&gt;
        </text>
      </g>

      {/* ── Accent lines radiating out ── */}
      <line x1="200" y1="142" x2="200" y2="110"
        stroke="url(#heroLine)" strokeWidth="1" opacity="0.5" />
      <line x1="200" y1="258" x2="200" y2="290"
        stroke="url(#heroLine)" strokeWidth="1" opacity="0.5" />
      <line x1="142" y1="200" x2="110" y2="200"
        stroke="url(#heroLine)" strokeWidth="1" opacity="0.5" />
      <line x1="258" y1="200" x2="290" y2="200"
        stroke="url(#heroLine)" strokeWidth="1" opacity="0.5" />

      {/* ── Floating micro-dots (scattered) ── */}
      {[
        { cx: 88,  cy: 130, r: 2.5, dur: "4s"   },
        { cx: 320, cy: 100, r: 2,   dur: "3.5s"  },
        { cx: 310, cy: 310, r: 3,   dur: "5s"    },
        { cx: 70,  cy: 290, r: 2,   dur: "4.5s"  },
        { cx: 160, cy: 60,  r: 2,   dur: "3.2s"  },
        { cx: 340, cy: 230, r: 2.5, dur: "4.8s"  },
      ].map((d, i) => (
        <circle key={i} cx={d.cx} cy={d.cy} r={d.r}
          fill="var(--text-label)"
          opacity="0.4"
        >
          <animate attributeName="opacity" values="0.4;0.9;0.4" dur={d.dur} repeatCount="indefinite" />
        </circle>
      ))}

      {/* ── Path draw — arc accent ── */}
      <path
        d="M 80 200 Q 200 80 320 200"
        fill="none"
        stroke="var(--accent)"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.15"
        strokeDasharray="240"
        strokeDashoffset="240"
      >
        <animate attributeName="stroke-dashoffset" from="240" to="0"
          dur="1.8s" begin="0.5s" fill="freeze"
          calcMode="spline" keySplines="0.16 1 0.3 1" />
        <animate attributeName="opacity" values="0.15;0.3;0.15" dur="6s"
          begin="2.3s" repeatCount="indefinite" />
      </path>
    </svg>
  );
}
