import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bits-footer">
      <div className="bits-shell">
        <div className="bits-footer-top"><p>Built with curiosity.</p><Link href="/#hero">Back to top <span aria-hidden="true">↑</span></Link></div>
        <div className="bits-footer-wordmark" aria-hidden="true">Lorrenz<span>.</span><i>✳</i></div>
        <div className="bits-footer-bottom"><p>© {new Date().getFullYear()} Lorrenz Amarille</p><nav aria-label="Footer navigation"><Link href="/about">About</Link><Link href="/skills">Skills</Link><Link href="/experience">Experience</Link><a href="https://github.com/Juroov" target="_blank" rel="noopener noreferrer">GitHub ↗</a></nav><span>Made in the Philippines</span></div>
      </div>
    </footer>
  );
}
