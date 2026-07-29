/**
 * SvgIcons — Hand-drawn line SVG icons for the Noir Serif system.
 * NOT an icon-library import — each icon is a unique set of paths.
 * All use className="draw-svg" for ScrollReveal stroke draw-in.
 */

/* ── Skill / Category Icons ── */

export function CodeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="draw-svg" aria-hidden="true">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
}

export function PenToolIcon() {
  return (
    <svg viewBox="0 0 24 24" className="draw-svg" aria-hidden="true">
      <path d="M12 19l7-7 3 3-7 7-3-3z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" />
      <path d="M2 2l7.586 7.586" />
      <circle cx="11" cy="11" r="2" />
    </svg>
  );
}

export function GearIcon() {
  return (
    <svg viewBox="0 0 24 24" className="draw-svg" aria-hidden="true">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  );
}

export function BriefcaseIcon() {
  return (
    <svg viewBox="0 0 24 24" className="draw-svg" aria-hidden="true">
      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
    </svg>
  );
}

export function ChatIcon() {
  return (
    <svg viewBox="0 0 24 24" className="draw-svg" aria-hidden="true">
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

export function ShieldIcon() {
  return (
    <svg viewBox="0 0 24 24" className="draw-svg" aria-hidden="true">
      <path d="M12 3 4 6v6c0 5 3.4 8.6 8 9 4.6-.4 8-4 8-9V6l-8-3Z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function DocumentIcon() {
  return (
    <svg viewBox="0 0 24 24" className="draw-svg" aria-hidden="true">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
      <path d="M14 2v6h6" />
      <line x1="8" y1="13" x2="16" y2="13" />
      <line x1="8" y1="17" x2="12" y2="17" />
    </svg>
  );
}

export function MedalIcon() {
  return (
    <svg viewBox="0 0 24 24" className="draw-svg" aria-hidden="true">
      <circle cx="12" cy="8" r="5" />
      <path d="M8 13 6 21l6-3 6 3-2-8" />
    </svg>
  );
}

export function GraduationIcon() {
  return (
    <svg viewBox="0 0 24 24" className="draw-svg" aria-hidden="true">
      <path d="M22 10 12 5 2 10l10 5 10-5Z" />
      <path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" />
      <line x1="19" y1="10" x2="19" y2="16" />
    </svg>
  );
}

export function TeamIcon() {
  return (
    <svg viewBox="0 0 24 24" className="draw-svg" aria-hidden="true">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

export function GameIcon() {
  return (
    <svg viewBox="0 0 24 24" className="draw-svg" aria-hidden="true">
      <line x1="6" y1="12" x2="10" y2="12" />
      <line x1="8" y1="10" x2="8" y2="14" />
      <line x1="15" y1="13" x2="15.01" y2="13" />
      <line x1="18" y1="11" x2="18.01" y2="11" />
      <rect x="2" y="6" width="20" height="12" rx="2" />
    </svg>
  );
}

export function BotIcon() {
  return (
    <svg viewBox="0 0 24 24" className="draw-svg" aria-hidden="true">
      <rect x="3" y="11" width="18" height="10" rx="2" />
      <circle cx="12" cy="5" r="2" />
      <path d="M12 7v4" />
      <line x1="8" y1="16" x2="8" y2="16" />
      <line x1="16" y1="16" x2="16" y2="16" />
    </svg>
  );
}

export function FilmIcon() {
  return (
    <svg viewBox="0 0 24 24" className="draw-svg" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
      <line x1="7" y1="2" x2="7" y2="22" />
      <line x1="17" y1="2" x2="17" y2="22" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <line x1="2" y1="7" x2="7" y2="7" />
      <line x1="2" y1="17" x2="7" y2="17" />
      <line x1="17" y1="17" x2="22" y2="17" />
      <line x1="17" y1="7" x2="22" y2="7" />
    </svg>
  );
}

export function EventIcon() {
  return (
    <svg viewBox="0 0 24 24" className="draw-svg" aria-hidden="true">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

export function WebsiteIcon() {
  return (
    <svg viewBox="0 0 24 24" className="draw-svg" aria-hidden="true">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  );
}

export function FigmaIcon() {
  return (
    <svg viewBox="0 0 24 24" className="draw-svg" aria-hidden="true">
      <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
      <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
      <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
      <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
      <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
    </svg>
  );
}

/* ── Decorative SVGs ── */

export function ScrollIndicatorSvg() {
  return (
    <svg viewBox="0 0 24 40" width="24" height="40" aria-hidden="true">
      <rect
        x="1" y="1" width="22" height="38" rx="11"
        fill="none" stroke="var(--border-strong)" strokeWidth="2"
      />
      <circle cx="12" cy="12" r="3.5" fill="var(--accent)">
        <animate
          attributeName="cy" values="12;28;12" dur="2s"
          repeatCount="indefinite" calcMode="spline"
          keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
        />
        <animate
          attributeName="opacity" values="1;0;1" dur="2s"
          repeatCount="indefinite" calcMode="spline"
          keySplines="0.4 0 0.6 1; 0.4 0 0.6 1"
        />
      </circle>
    </svg>
  );
}

export function SignatureDividerSvg() {
  return (
    <div className="sig-divider" aria-hidden="true">
      <svg viewBox="0 0 500 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="sig-grad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%"   stopColor="var(--accent)" stopOpacity="0"/>
            <stop offset="20%"  stopColor="var(--accent)" stopOpacity="0.7"/>
            <stop offset="50%"  stopColor="var(--accent)" stopOpacity="1"/>
            <stop offset="80%"  stopColor="var(--accent)" stopOpacity="0.7"/>
            <stop offset="100%" stopColor="var(--accent)" stopOpacity="0"/>
          </linearGradient>
          <filter id="sig-glow-f">
            <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur"/>
            <feComposite in="SourceGraphic" in2="blur" operator="over"/>
          </filter>
        </defs>
        <line x1="0" y1="16" x2="500" y2="16" stroke="url(#sig-grad)" strokeWidth="0.6"/>
        <path
          className="sig-path draw-svg"
          d="M 60 16 C 100 8, 150 6, 200 14 C 240 20, 280 22, 320 16 C 360 10, 400 8, 440 16"
          stroke="var(--accent)" strokeWidth="1.4" strokeLinecap="round"
          fill="none" filter="url(#sig-glow-f)"
        />
        <circle className="sig-dot" cx="440" cy="16" r="3.5" fill="var(--accent)" opacity="0">
          <animate
            attributeName="opacity" values="0;1;0.6;1" dur="0.6s"
            begin="indefinite" fill="freeze"
          />
          <animate
            attributeName="r" values="3.5;5;3.5" dur="0.5s"
            begin="indefinite" fill="freeze"
          />
        </circle>
      </svg>
    </div>
  );
}
