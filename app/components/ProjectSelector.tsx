"use client";

import Image from "next/image";
import { useRef, useState, type KeyboardEvent } from "react";
import { motion } from "framer-motion";
import SpotlightCard from "./react-bits/SpotlightCard";
import TiltedCard from "./react-bits/TiltedCard";

type Screenshot = {
  src: string;
  alt: string;
  caption: string;
  width: number;
  height: number;
};

type Project = {
  id: string;
  title: string;
  category: string;
  kind: "mobile" | "web";
  lead: string;
  description: string;
  role: string;
  points: string[];
  stack: string[];
  href: string;
  action: string;
  screenshots: Screenshot[];
};

const projects: Project[] = [
  {
    id: "fitplay",
    title: "FitPlay",
    category: "Mobile app",
    kind: "mobile",
    lead: "A simpler way to stay on plan.",
    description:
      "A focused workout planner and training tracker. Weekly splits, today's routine, and training history stay close at hand.",
    role: "Product design and Flutter app development",
    points: [
      "Plan weekly splits and assign routines by day",
      "Track sets, weights, and session time during a workout",
      "Review completed sessions and weekly consistency",
    ],
    stack: ["Flutter", "Firebase"],
    href: "https://github.com/Juroov/FitPlay",
    action: "Explore on GitHub",
    screenshots: [
      {
        src: "/fitplay-today.png",
        alt: "FitPlay Today screen showing the week, recovery day, and upcoming programs",
        caption: "Today",
        width: 965,
        height: 2048,
      },
      {
        src: "/fitplay-schedule.png",
        alt: "FitPlay Schedule screen showing the weekly workout split",
        caption: "Weekly plan",
        width: 972,
        height: 2048,
      },
    ],
  },
  {
    id: "hakotlahat",
    title: "HakotLahat",
    category: "Full-stack web app",
    kind: "web",
    lead: "Smarter pickups for cleaner communities.",
    description:
      "A waste management platform that connects residents, drivers, and administrators. The experience makes reporting waste and planning collections easier to follow.",
    role: "Frontend architecture and UI design",
    points: [
      "Submit photo reports for waste collection",
      "Classify reports with AI assistance",
      "Plan collection routes and track requests",
    ],
    stack: ["Next.js", "Supabase", "Gemini AI"],
    href: "https://www.hakotlahat.com/",
    action: "Visit live site",
    screenshots: [
      {
        src: "/real-hakot.png",
        alt: "HakotLahat homepage with a pickup request and dashboard preview",
        caption: "Homepage and dashboard preview",
        width: 1485,
        height: 985,
      },
    ],
  },
  {
    id: "kuya-juan",
    title: "Kuya Juan",
    category: "Client website",
    kind: "web",
    lead: "Financial planning, made approachable.",
    description:
      "A financial advisor portfolio that introduces his work, explains the planning process, and gives visitors a clear path to start a conversation.",
    role: "Website design and frontend development",
    points: [
      "Present the advisor and his services clearly",
      "Break down the consultation process into steps",
      "Make the next action easy to find",
    ],
    stack: ["Next.js", "Tailwind CSS", "Vercel"],
    href: "https://clients-portfolio.vercel.app/",
    action: "Visit live site",
    screenshots: [
      {
        src: "/real-juan.png",
        alt: "Kuya Juan financial advisor website homepage",
        caption: "Homepage",
        width: 1485,
        height: 985,
      },
      {
        src: "/real-juan-how.png",
        alt: "Kuya Juan website explaining the financial planning process",
        caption: "The planning process",
        width: 1024,
        height: 595,
      },
    ],
  },
  {
    id: "fro-solar",
    title: "FRO Solar",
    category: "Client website",
    kind: "web",
    lead: "A clearer route to solar power.",
    description:
      "A website for a Philippine solar engineering company that introduces its systems, explains how solar works, and guides visitors toward a quote.",
    role: "Brand direction, frontend development, and deployment",
    points: [
      "Showcase solar systems and installation work",
      "Explain the technology in plain language",
      "Connect interested visitors with the team",
    ],
    stack: ["Next.js", "TypeScript", "Framer Motion"],
    href: "https://frosolar.vercel.app/",
    action: "Visit live site",
    screenshots: [
      {
        src: "/frosolar-hero.png",
        alt: "FRO Solar homepage introducing solar installation services",
        caption: "Homepage",
        width: 1920,
        height: 953,
      },
      {
        src: "/frosolar-services.png",
        alt: "FRO Solar page explaining how solar panels work",
        caption: "How solar works",
        width: 1920,
        height: 953,
      },
    ],
  },
];

export default function ProjectSelector() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [waveKey, setWaveKey] = useState(0);
  const [screenshotIndex, setScreenshotIndex] = useState(0);
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const project = projects[activeIndex];
  const screenshot = project.screenshots[screenshotIndex] ?? project.screenshots[0];

  function selectProject(index: number) {
    if (index === activeIndex) return;
    setActiveIndex(index);
    setScreenshotIndex(0);
    setWaveKey((current) => current + 1);
  }

  function handleTabKeyDown(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    let nextIndex: number;

    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        nextIndex = (index + 1) % projects.length;
        break;
      case "ArrowLeft":
      case "ArrowUp":
        nextIndex = (index - 1 + projects.length) % projects.length;
        break;
      case "Home":
        nextIndex = 0;
        break;
      case "End":
        nextIndex = projects.length - 1;
        break;
      default:
        return;
    }

    event.preventDefault();
    selectProject(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  }

  return (
    <div className="work-gallery">
      <div className="work-tabs" role="tablist" aria-label="Select a project">
        {projects.map((item, index) => (
          <button
            key={item.id}
            ref={(node) => { tabRefs.current[index] = node; }}
            id={`work-tab-${item.id}`}
            className={`work-tab${index === activeIndex ? " work-tab--active" : ""}`}
            type="button"
            role="tab"
            aria-selected={index === activeIndex}
            aria-controls="work-project-panel"
            tabIndex={index === activeIndex ? 0 : -1}
            onClick={() => selectProject(index)}
            onKeyDown={(event) => handleTabKeyDown(event, index)}
          >
            {index === activeIndex && <motion.span className="bits-project-tab-active" layoutId="project-tab" transition={{ type: "spring", stiffness: 350, damping: 32 }} />}
            <span className="work-tab-number" aria-hidden="true">{item.kind === "mobile" ? "✳" : "↗"}</span>
            <span className="work-tab-label">
              <strong>{item.title}</strong>
              <small>{item.category}</small>
            </span>
          </button>
        ))}
      </div>

      <SpotlightCard className="work-showcase" spotlightColor="#C41E3A" intensity={0.12} proximity={0} flare={false}>
        <article
          key={project.id}
          id="work-project-panel"
          className={`work-featured work-featured--${project.id}${project.kind === "web" ? " work-featured--web" : ""}`}
          role="tabpanel"
          aria-labelledby={`work-tab-${project.id}`}
          tabIndex={0}
        >
          <div className="work-featured-copy">
            <p className="work-project-type">{project.category}</p>
            <h3>{project.title}</h3>
            <p className="work-featured-lead">{project.lead}</p>
            <p className="work-description">{project.description}</p>
            <p className="work-role"><span>My role</span>{project.role}</p>
            <ul className="work-points">
              {project.points.map((point) => <li key={point}>{point}</li>)}
            </ul>
            <div className="work-stack" aria-label="Technologies used">
              {project.stack.map((technology) => <span key={technology}>{technology}</span>)}
            </div>
            <a
              className="work-primary-link"
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.action} <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div
            className={`work-featured-media${project.kind === "web" ? " work-featured-media--web" : ""}`}
            aria-label={`${project.title} screenshots`}
          >
            {project.kind === "web" ? (
              <div className="bits-project-web-gallery">
                <div className="bits-browser-chrome" aria-hidden="true"><span /><span /><span /><small>{project.title}</small><span>↗</span></div>
                <TiltedCard containerHeight="360px" imageHeight="100%" imageWidth="100%" containerWidth="100%"
                  rotateAmplitude={5} scaleOnHover={1.01} glare={0.08} showTooltip={false} gyroscope={false} intro={false} radius={10} shadow={0.1} className="bits-project-tilt">
                  <Image key={screenshot.src} src={screenshot.src} alt={screenshot.alt} fill sizes="(max-width: 700px) 90vw, 650px" className="bits-project-screen" />
                </TiltedCard>
                <div className="bits-screenshot-picker" role="group" aria-label={`${project.title} screenshots`}>
                  {project.screenshots.map((shot, index) => <button key={shot.src} type="button" aria-pressed={index === screenshotIndex}
                    onClick={() => setScreenshotIndex(index)}>{shot.caption}<span aria-hidden="true">{index === screenshotIndex ? "●" : "○"}</span></button>)}
                </div>
              </div>
            ) : project.screenshots.map((screenshot, index) => (
              <figure
                className={project.kind === "mobile"
                  ? `work-phone${index === 1 ? " work-phone--schedule" : ""}`
                  : `work-browser work-browser--${index === 0 ? "primary" : "secondary"}`}
                key={screenshot.src}
              >
                <Image
                  src={screenshot.src}
                  alt={screenshot.alt}
                  width={screenshot.width}
                  height={screenshot.height}
                  sizes={project.kind === "mobile"
                    ? "(max-width: 640px) 42vw, 235px"
                    : index === 0
                      ? "(max-width: 900px) 85vw, 560px"
                      : "(max-width: 900px) 68vw, 390px"}
                />
                <figcaption>{screenshot.caption}</figcaption>
              </figure>
            ))}
            <button className="bits-open-preview" type="button" onClick={() => dialogRef.current?.showModal()}>
              View full screen <span aria-hidden="true">⤢</span>
            </button>
          </div>
        </article>

        {waveKey > 0 && (
          <svg
            key={waveKey}
            className="work-wave"
            viewBox="0 0 200 100"
            preserveAspectRatio="none"
            aria-hidden="true"
            focusable="false"
          >
            <path
              className="work-wave-body"
              d="M0 0 H157 C186 16 140 31 164 50 C189 69 143 85 166 100 H0 Z"
            />
            <path
              className="work-wave-edge"
              d="M157 0 C186 16 140 31 164 50 C189 69 143 85 166 100"
            />
          </svg>
        )}
      </SpotlightCard>
      <dialog className="bits-project-dialog" ref={dialogRef} aria-labelledby="project-preview-title"
        onClick={(event) => { if (event.target === event.currentTarget) dialogRef.current?.close(); }}
        onKeyDown={(event) => {
          if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
            event.preventDefault();
            const direction = event.key === "ArrowRight" ? 1 : -1;
            setScreenshotIndex(index => (index + direction + project.screenshots.length) % project.screenshots.length);
          }
        }}>
        <div className="bits-dialog-header"><div><p>{project.category}</p><h3 id="project-preview-title">{project.title}</h3></div>
          <button className="bits-dialog-close" type="button" aria-label="Close project preview" onClick={() => dialogRef.current?.close()}>×</button>
        </div>
        <div className="bits-dialog-stage"><Image key={screenshot.src} src={screenshot.src} alt={screenshot.alt}
          width={screenshot.width} height={screenshot.height} sizes="(max-width: 760px) 95vw, 1100px" className="bits-lightbox-image" /></div>
        <div className="bits-dialog-footer"><button type="button" aria-label="Previous screenshot" disabled={project.screenshots.length === 1}
          onClick={() => setScreenshotIndex(index => (index - 1 + project.screenshots.length) % project.screenshots.length)}>←</button>
          <p aria-live="polite">{screenshot.caption}<span>{screenshotIndex + 1} / {project.screenshots.length}</span></p>
          <button type="button" aria-label="Next screenshot" disabled={project.screenshots.length === 1}
            onClick={() => setScreenshotIndex(index => (index + 1) % project.screenshots.length)}>→</button>
        </div>
      </dialog>
    </div>
  );
}
