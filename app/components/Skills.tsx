"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import SpotlightCard from "./react-bits/SpotlightCard";
import SectionHeading from "./SectionHeading";

const categories = [
  { id: "development", label: "Development", title: "Frontend & app development", symbol: "</>", description: "Components to complete products.", context: "FitPlay, HakotLahat, and client websites.", skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML & CSS", "Tailwind CSS", "Flutter", "Supabase", "Firebase", "App Development", "Web Development"] },
  { id: "design", label: "Design", title: "UI/UX & prototyping", symbol: "✳", description: "Clear, intuitive interfaces.", context: "Web and mobile, from wireframes to screens.", skills: ["Figma", "Wireframing", "User interface design", "User experience design", "Design systems", "Responsive design"] },
  { id: "tools", label: "Tools", title: "Tools & collaboration", symbol: "⌘", description: "Organized, collaborative workflows.", context: "Version control, handoffs, and deployment.", skills: ["Git & GitHub", "VS Code", "Notion", "Agile / Scrum", "SDLC", "Technical documentation"] },
  { id: "hardware", label: "Hardware", title: "Hardware & embedded systems", symbol: "⌁", description: "Code meets hardware.", context: "RFID parking and flood detection systems.", skills: ["Arduino Uno / Nano", "ESP32", "C / C++", "Microcontroller interfacing", "RFID (RC522)", "Sensors", "Circuit prototyping", "Serial communication"] },
];

export default function Skills() {
  const [selected, setSelected] = useState("all");
  const reduced = useReducedMotion();
  const visible = selected === "all" ? categories : categories.filter(category => category.id === selected);
  return (
    <section className="bits-profile-section" aria-labelledby="skills-title">
      <div className="bits-shell">
        <SectionHeading label="My toolkit" title="The tools behind my work." id="skills-title" level={1}
          description="Development, design, and embedded systems." />
        <div className="bits-filter-bar" role="group" aria-label="Filter skills">
          {[{ id: "all", label: "All areas" }, ...categories].map(category => <button key={category.id} type="button" aria-pressed={selected === category.id}
            aria-controls="skills-grid" onClick={() => setSelected(category.id)}>{category.label}
            {selected === category.id && <motion.span layoutId="skills-filter" className="bits-filter-active" transition={{ duration: reduced ? 0 : 0.25 }} />}
          </button>)}
        </div>
        <motion.div layout id="skills-grid" className="bits-skills-grid" data-focused={selected !== "all"} transition={{ duration: reduced ? 0 : 0.3 }}>
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map(category => <motion.div layout key={category.id}
              initial={reduced ? false : { opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 8 }}
              transition={{ duration: reduced ? 0 : 0.25 }}>
              <SpotlightCard className="bits-skill-card" spotlightColor="#C41E3A" proximity={0} intensity={0.18} flare={false}>
                <div className="bits-skill-intro"><span className="bits-service-icon" aria-hidden="true">{category.symbol}</span>
                  <h3>{category.title}</h3><p>{category.description}</p>
                </div>
                <div className="bits-skill-details"><ul>{category.skills.map(skill => <li key={skill}>{skill}</li>)}</ul>
                  <p className="bits-skill-context">{category.context}</p>
                </div>
              </SpotlightCard>
            </motion.div>)}
          </AnimatePresence>
        </motion.div>
        <p className="bits-filter-summary" aria-live="polite">{selected === "all" ? "4 areas" : `Showing ${visible[0].title.toLowerCase()}.`}</p>
      </div>
    </section>
  );
}
