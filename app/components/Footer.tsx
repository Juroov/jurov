// Server Component
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        padding: "48px 6%",
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
          gap: 16,
        }}
      >
        <p
          style={{
            fontFamily: "var(--font-ui)",
            fontSize: 14,
            color: "var(--text-secondary)",
          }}
        >
          © {year} Lorrenz Amarille
        </p>
        <p
          style={{
            fontFamily: "var(--font-ui)",
            fontSize: 14,
            color: "var(--text-secondary)",
          }}
        >
          Built with Next.js &amp; Tailwind v4
        </p>
      </div>
    </footer>
  );
}
