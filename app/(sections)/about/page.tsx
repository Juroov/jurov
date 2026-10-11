import type { Metadata } from "next";
import About from "../../components/About";

export const metadata: Metadata = {
  title: "About — Lorrenz Amarille",
  description:
    "Computer Engineering student at Bulacan State University, frontend developer, and UI/UX designer based in Bulacan, Philippines.",
};

export default function AboutPage() {
  return <About />;
}
