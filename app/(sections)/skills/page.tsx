import type { Metadata } from "next";
import Skills from "../../components/Skills";

export const metadata: Metadata = {
  title: "Skills — Lorrenz Amarille",
  description:
    "Frontend, design, and professional skills — React, Next.js, TypeScript, Figma, and more.",
};

export default function SkillsPage() {
  return <Skills />;
}
