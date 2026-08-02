// Footer — Playfair Display italic wordmark + shield SVG mark
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        padding: "64px 6%",
        borderTop: "1px solid var(--border)",
        background: "var(--bg)",
      }}
    >
      <div
        style={{
          maxWidth: 1400,
          width: "100%",
          margin: "0 auto",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 24,
        }}
      >
        {/* Wordmark */}
        <span
          style={{
            fontFamily: "var(--font-display)",
            fontSize: 24,
            fontWeight: 700,
            fontStyle: "italic",
            color: "var(--text-primary)",
            letterSpacing: "-0.02em",
          }}
        >
          Lorrenz.
        </span>

        {/* Copyright */}
        <p
          style={{
            fontFamily: "var(--font-ui)",
            fontSize: 13,
            color: "var(--text-faint)",
          }}
        >
          © {year} Lorrenz Amarille
        </p>

        {/* Shield SVG mark */}
        <svg
          width="32"
          height="38"
          viewBox="0 0 200 230"
          fill="none"
          aria-hidden="true"
          style={{ opacity: 0.35 }}
        >
          <path
            d="M100 14 L178 46 L178 112 C178 168 146 202 100 220 C54 202 22 168 22 112 L22 46 Z"
            stroke="var(--accent)"
            strokeWidth="4"
            strokeLinejoin="round"
            fill="none"
          />
          <text
            x="100"
            y="132"
            textAnchor="middle"
            fontFamily="Playfair Display, serif"
            fontStyle="italic"
            fontWeight="700"
            fontSize="56"
            fill="#F4EEE7"
          >
            LA
          </text>
        </svg>
      </div>
    </footer>
  );
}
