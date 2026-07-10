// Server Component — CSS animation only, no client JS needed
const items = [
  { icon: "✦", label: "UI/UX Design"       },
  { icon: "✦", label: "React & Next.js"    },
  { icon: "✦", label: "Figma Prototyping"  },
  { icon: "✦", label: "TypeScript"         },
  { icon: "✦", label: "Tailwind CSS"       },
  { icon: "✦", label: "Supabase"           },
  { icon: "✦", label: "Web Automation"     },
  { icon: "✦", label: "Design Systems"     },
];

export default function MarqueeStrip() {
  const doubled = [...items, ...items];

  return (
    <div
      style={{
        borderTop: "1px solid var(--border)",
        borderBottom: "1px solid var(--border)",
        background: "var(--surface)",
        overflow: "hidden",
        padding: "14px 0",
      }}
    >
      <div className="animate-marquee flex whitespace-nowrap" aria-hidden>
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3"
            style={{
              marginRight: 48,
              fontSize: 13,
              fontWeight: 500,
              color: "var(--text-muted)",
              fontFamily: "var(--font-geist-sans)",
              flexShrink: 0,
            }}
          >
            <span style={{ color: "var(--accent)", fontSize: 8 }}>✦</span>
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}
