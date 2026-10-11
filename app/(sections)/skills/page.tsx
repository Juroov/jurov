import type { Metadata } from "next";
import Skills from "../../components/Skills";

export const metadata: Metadata = {
  title: "Skills — Lorrenz Amarille",
  description:
    "Frontend, UI/UX, development practices, and embedded systems skills — from React and Figma to ESP32 and Arduino.",
};

export default function SkillsPage() {
  return <Skills />;
}
