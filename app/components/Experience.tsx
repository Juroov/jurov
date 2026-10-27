"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import SectionHeading from "./SectionHeading";

const roles = [
  { group:"community", company:"Microsoft Student Community, BulSU", title:"Director for Media", period:"Aug – Present", type:"Community leadership", summary:"Lead MSC website development and the media team, coordinating content and community initiatives with fellow core members.", tags:["Website development","Media team leadership","Core member"] },
  { group:"industry", company:"PRIME Philippines", title:"UI/UX and Frontend Development Intern", period:"May – Jul 2026", type:"Industry internship", summary:"Built responsive ArgoNavis interfaces and a modular design system with light and dark modes.", tags:["Next.js","Tailwind CSS","Design systems"] },
  { group:"projects", company:"HakotLahat", title:"Lead Frontend Developer & UI Designer", period:"Technical project", type:"Web application", summary:"Designed and built waste collection, reporting, and tracking interfaces.", tags:["Frontend architecture","UI design","Full-stack web"] },
  { group:"projects", company:"ArgoNavis Corporate Booking System", title:"Frontend Architect & UI/UX Designer", period:"Technical project", type:"Web application", summary:"Created accessible booking flows, shared design tokens, and reusable components.", tags:["Accessibility","Booking workflows","Design tokens"] },
  { group:"projects", company:"Smart RFID Parking Management System", title:"Embedded Systems Developer", period:"Technical project", type:"Embedded systems", summary:"Built contactless vehicle access with ESP32 and RC522 RFID modules.", tags:["ESP32","RFID","C / C++"] },
  { group:"projects", company:"Early Flood Detection System", title:"Hardware & Firmware Engineer", period:"Technical project", type:"Embedded systems", summary:"Calibrated water-level sensors with OLED displays and buzzer alerts.", tags:["Arduino","Sensors","Firmware"] },
  { group:"community", company:"Microsoft Student Community, BulSU", title:"Partnership Lead - External", period:"Aug 2025", type:"Community", summary:"Led industry partnerships for the Membership ID Program.", tags:["Partnerships","Community"] },
  { group:"community", company:"DEVCON Manila", title:"Volunteer Coordinator", period:"Apr 2025", type:"Community", summary:"Coordinated conference logistics and technical volunteers.", tags:["Coordination","Events"] },
];
const filters = [{id:"all",label:"All experience"},{id:"industry",label:"Industry"},{id:"projects",label:"Projects"},{id:"community",label:"Community"}];

export default function Experience() {
  const [selected, setSelected] = useState("all");
  const reduced = useReducedMotion();
  const visible = selected === "all" ? roles : roles.filter(role => role.group === selected);
  return (
    <section className="bits-profile-section" aria-labelledby="experience-title">
      <div className="bits-shell">
        <SectionHeading label="Experience" title="Learning by building." id="experience-title" level={1}
          description="Industry, projects, and community." />
        <div className="bits-experience-facts"><span><strong>{roles.filter(role => role.group === "industry").length}</strong> industry internship</span><span><strong>{roles.filter(role => role.group === "projects").length}</strong> technical projects</span><span><strong>{roles.filter(role => role.group === "community").length}</strong> community roles</span></div>
        <div className="bits-filter-bar" role="group" aria-label="Filter experience">
          {filters.map(filter => <button key={filter.id} type="button" aria-pressed={selected === filter.id}
            aria-controls="experience-list" onClick={() => setSelected(filter.id)}>{filter.label}<small>{filter.id === "all" ? roles.length : roles.filter(role => role.group === filter.id).length}</small>
            {selected === filter.id && <motion.span layoutId="experience-filter" className="bits-filter-active" transition={{duration:reduced?0:0.25}} />}
          </button>)}
        </div>
        <div id="experience-list" className="bits-experience-list">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map(role => <motion.article layout key={`${role.company}-${role.title}`} className="bits-experience-card"
              initial={reduced ? false : {opacity:0,y:15}} animate={{opacity:1,y:0}} exit={{opacity:0,y:8}}
              transition={{duration:reduced?0:0.25}}>
              <div className="bits-experience-period"><span>{role.type}</span><strong>{role.period}</strong></div>
              <div className="bits-experience-content"><h3>{role.company}</h3><h4>{role.title}</h4><p>{role.summary}</p>
                <div className="bits-experience-tags">{role.tags.map(tag => <span key={tag}>{tag}</span>)}</div>
              </div><span className="bits-experience-mark" aria-hidden="true">↗</span>
            </motion.article>)}
          </AnimatePresence>
        </div>
        <p className="bits-filter-summary" aria-live="polite">{visible.length} {visible.length === 1 ? "role" : "roles"} shown.</p>
      </div>
    </section>
  );
}
