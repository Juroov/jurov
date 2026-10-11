import type { Metadata } from "next";
import Experience from "../../components/Experience";

export const metadata: Metadata = {
  title: "Experience — Lorrenz Amarille",
  description:
    "Frontend and UI/UX internship experience, web and embedded systems projects, and technology community leadership.",
};

export default function ExperiencePage() {
  return <Experience />;
}
