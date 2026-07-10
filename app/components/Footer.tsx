// Server Component
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        padding: "32px 24px",
        borderTop: "1px solid var(--border)",
        background: "var(--surface)",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 12,
        }}
      >
        <p
          style={{
            fontSize: 12,
            color: "var(--text-label)",
            fontFamily: "var(--font-geist-mono)",
          }}
        >
          © {year} Lorrenz Amarille
        </p>
        <p
          style={{
            fontSize: 12,
            color: "var(--text-label)",
            fontFamily: "var(--font-geist-mono)",
          }}
        >
          Built with Next.js &amp; Tailwind v4
        </p>
      </div>
    </footer>
  );
}
