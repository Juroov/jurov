import type { Metadata } from "next";
import Experience from "../../components/Experience";

export const metadata: Metadata = {
  title: "Experience — Lorrenz Amarille",
  description:
    "Internship at PRIME Philippines, Microsoft Student Community partnership lead, and more.",
};

export default function ExperiencePage() {
  return <Experience />;
}
