"use client";

const items = [
  { label: "UI/UX Design"      },
  { label: "React & Next.js"   },
  { label: "Figma Prototyping" },
  { label: "TypeScript"        },
  { label: "Tailwind CSS"      },
  { label: "Supabase"          },
  { label: "Web Automation"    },
  { label: "Design Systems"    },
];

export default function MarqueeStrip() {
  const doubled = [...items, ...items];

  return (
    <div
      style={{
        borderTop:    "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        background:   "var(--bg-card)",
        overflow:     "hidden",
        padding:      "13px 0",
        // Edge fade masks
        maskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
        position: "relative",
      }}
    >
      {/* Primary strip */}
      <div
        className="animate-marquee flex whitespace-nowrap"
        aria-hidden
        style={{ "--marquee-pause": "running" } as React.CSSProperties}
        onMouseEnter={(e) =>
          ((e.currentTarget.style as unknown as { animationPlayState: string })
            .animationPlayState = "paused")
        }
        onMouseLeave={(e) =>
          ((e.currentTarget.style as unknown as { animationPlayState: string })
            .animationPlayState = "running")
        }
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-2.5"
            style={{
              marginRight: 44,
              fontSize: 12,
              fontWeight: 600,
              color: "var(--text-secondary)",
              fontFamily: "var(--font-inter)",
              flexShrink: 0,
              letterSpacing: "0.015em",
            }}
          >
            <span style={{ color: "var(--accent)" }}>·</span>
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}
