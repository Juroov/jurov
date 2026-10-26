"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

const links = [
  { href: "/#projects", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/experience", label: "Experience" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const reduced = useReducedMotion();
  const header = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    function close(event: PointerEvent) {
      if (header.current && !header.current.contains(event.target as Node)) setOpen(false);
    }
    function escape(event: KeyboardEvent) {
      if (event.key === "Escape") { setOpen(false); toggle.current?.focus(); }
    }
    document.addEventListener("pointerdown", close);
    document.addEventListener("keydown", escape);
    return () => { document.removeEventListener("pointerdown", close); document.removeEventListener("keydown", escape); };
  }, [open]);

  return (
    <header className="bits-nav" ref={header}>
      <nav className="bits-nav-inner" aria-label="Main navigation">
        <Link href="/" className="bits-wordmark" onClick={() => setOpen(false)}>Lorrenz<span>.</span></Link>
        <div className="bits-desktop-links">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="bits-nav-link"
              aria-current={pathname === link.href ? "page" : undefined}>
              {pathname === link.href && <motion.span className="bits-nav-active" layoutId="navigation-pill" transition={{type:"spring",stiffness:350,damping:30}} />}
              <span>{link.label}</span>
            </Link>
          ))}
        </div>
        <div className="bits-nav-actions">
          <Link href="/#contact" className="bits-nav-contact" onClick={() => setOpen(false)}>Let&apos;s talk <span aria-hidden="true">↗</span></Link>
          <button ref={toggle} className="bits-menu-toggle" type="button" aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open} aria-controls="bits-mobile-menu" onClick={() => setOpen(value => !value)}>
            <span className={open ? "is-open" : ""} /><span className={open ? "is-open" : ""} />
          </button>
        </div>
      </nav>
      <AnimatePresence>
        {open && <motion.nav id="bits-mobile-menu" className="bits-mobile-menu" aria-label="Mobile navigation"
          initial={{opacity:0,y:-10}} animate={{opacity:1,y:0}} exit={{opacity:0,y:-8}} transition={{duration:reduced ? 0 : 0.22}}>
          {links.map((link,index) => <motion.div key={link.href} initial={{opacity:0,x:-12}} animate={{opacity:1,x:0}} transition={{delay:reduced?0:index*0.04}}>
            <Link href={link.href} aria-current={pathname === link.href ? "page" : undefined} onClick={() => setOpen(false)}>{link.label}<span aria-hidden="true">↗</span></Link>
          </motion.div>)}
        </motion.nav>}
      </AnimatePresence>
    </header>
  );
}
