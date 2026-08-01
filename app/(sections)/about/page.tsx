import type { Metadata } from "next";
import About from "../../components/About";

export const metadata: Metadata = {
  title: "About — Lorrenz Amarille",
  description:
    "Computer Engineering student at Bulacan State University. Frontend developer, UI/UX designer, and freelancer based in the Philippines.",
};

export default function AboutPage() {
  return <About />;
}
