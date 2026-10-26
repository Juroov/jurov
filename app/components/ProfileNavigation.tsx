"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

export default function ProfileNavigation() {
  const pathname = usePathname();
  return (
    <div className="bits-profile-navigation">
      <Link className="bits-back-link" href="/">← Back to home</Link>
      <nav className="bits-profile-tabs" aria-label="Know more about me">
        {["About","Skills","Experience"].map(label => {
          const href = "/" + label.toLowerCase();
          return <Link key={href} href={href} aria-current={pathname === href ? "page" : undefined}>
            {pathname === href && <motion.span layoutId="profile-pill" className="bits-profile-pill" transition={{type:"spring",stiffness:350,damping:30}} />}
            <span>{label}</span>
          </Link>;
        })}
      </nav>
    </div>
  );
}
