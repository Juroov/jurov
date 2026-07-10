"use client";

import { useRef, useEffect, useState, useCallback } from "react";
import Image from "next/image";

const LOGICAL_WIDTH = 1440;
const LOGICAL_HEIGHT = 2600; // tall enough to show meaningful page content

type Props = {
  url: string;
  fallbackImage: string;
  title: string;
  /** Accent color for the URL bar glow on hover */
  accentColor?: string;
  /** Background color to show while loading (avoids white flash on dark sites) */
  themeBg?: string;
};

export function BrowserFrame({ url, fallbackImage, title, accentColor = "#3B82F6", themeBg = "#ffffff" }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [scale, setScale] = useState(0.44);
  const [hovered, setHovered] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [useFallback, setUseFallback] = useState(false);

  // Dynamically compute scale from container width to scale the 1440px iframe
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => setScale(el.offsetWidth / LOGICAL_WIDTH);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // Fallback if iframe doesn't load within 4s
  useEffect(() => {
    const t = setTimeout(() => {
      if (!loaded) setUseFallback(true);
    }, 4000);
    return () => clearTimeout(t);
  }, [loaded]);

  const handleLoad = useCallback(() => {
    try {
      // If cross-origin (good), this throws and we know it loaded
      iframeRef.current?.contentWindow?.location.href; // eslint-disable-line
      // Same-origin — check it's not blank
      const href = iframeRef.current?.contentWindow?.location.href ?? "";
      if (href === "about:blank" || href === "") { setUseFallback(true); return; }
    } catch {
      // Cross-origin but responded = great, loaded successfully
    }
    setLoaded(true);
  }, []);

  return (
    <div
      style={{
        borderRadius: 14,
        overflow: "hidden",
        boxShadow: hovered
          ? `0 24px 64px rgba(0,0,0,0.22), 0 0 0 1px ${accentColor}30`
          : "0 8px 32px rgba(0,0,0,0.10), 0 0 0 1px rgba(0,0,0,0.07)",
        transition: "box-shadow 0.5s cubic-bezier(0.16,1,0.3,1)",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* ── Minimal URL Strip (Anti-slop) ── */}
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
              background: loaded ? "#22c55e" : "#f59e0b",
              transition: "background 0.3s ease",
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
            {url.replace(/^https?:\/\//, '')}
          </span>
        </div>
      </div>

      {/* ── Viewport ── */}
      <div
        ref={containerRef}
        style={{
          position: "relative",
          width: "100%",
          aspectRatio: "4/3",
          overflow: "hidden",
          background: themeBg,
          cursor: "pointer",
        }}
      >
        {/* Skeleton while loading */}
        {!loaded && !useFallback && (
          <div
            className="skeleton"
            style={{ position: "absolute", inset: 0, zIndex: 2 }}
          />
        )}

        {/* Live iframe */}
        {!useFallback && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: LOGICAL_WIDTH,
              height: LOGICAL_HEIGHT,
              transform: `scale(${scale}) translateY(${hovered ? "-15%" : "0%"})`,
              transformOrigin: "top left",
              transition: hovered
                ? "transform 3.5s cubic-bezier(0.4,0,0.2,1)"
                : "transform 1.2s cubic-bezier(0.4,0,0.2,1)",
              opacity: loaded ? 1 : 0,
            }}
          >
            <iframe
              ref={iframeRef}
              src={url}
              title={title}
              width={LOGICAL_WIDTH}
              height={LOGICAL_HEIGHT}
              onLoad={handleLoad}
              style={{ border: "none", display: "block" }}
              loading="lazy"
              sandbox="allow-scripts allow-same-origin allow-forms"
            />
          </div>
        )}

        {/* Fallback scrolling image */}
        {(useFallback || !loaded) && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              overflow: "hidden",
              opacity: useFallback ? 1 : 0,
              transition: "opacity 0.4s ease",
            }}
          >
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                // taller than container so animation can scroll
                height: "200%",
                transform: hovered ? "translateY(-50%)" : "translateY(0)",
                transition: hovered
                  ? "transform 4s cubic-bezier(0.4,0,0.2,1)"
                  : "transform 1.2s cubic-bezier(0.4,0,0.2,1)",
              }}
            >
              <Image
                src={fallbackImage}
                alt={title}
                fill
                sizes="700px"
                style={{ objectFit: "cover", objectPosition: "top" }}
              />
            </div>
          </div>
        )}

        {/* Hover hint */}
        <div
          style={{
            position: "absolute",
            bottom: 12,
            right: 12,
            opacity: hovered ? 0 : 0.9,
            transition: "opacity 0.3s ease",
            background: "rgba(0,0,0,0.6)",
            backdropFilter: "blur(6px)",
            WebkitBackdropFilter: "blur(6px)",
            color: "#fff",
            fontSize: 10,
            padding: "5px 10px",
            borderRadius: 6,
            fontFamily: "var(--font-geist-mono)",
            pointerEvents: "none",
            letterSpacing: "0.06em",
            display: "flex",
            alignItems: "center",
            gap: 5,
          }}
        >
          <span>↓</span> Hover to scroll
        </div>
      </div>
    </div>
  );
}
