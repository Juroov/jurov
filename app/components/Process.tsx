"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import AnimatedContent from "./react-bits/AnimatedContent";
import SectionHeading from "./SectionHeading";

const steps = [
  {title:"Understand the idea",detail:"Define your goals, audience, and scope before design begins.",output:"A shared direction"},
  {title:"Find the right shape",detail:"Explore the structure, user flows, and visual direction before building.",output:"Wireframes and a prototype"},
  {title:"Bring it to life",detail:"Build responsive components with clear feedback and smooth interactions.",output:"A working website or app"},
  {title:"Refine and deliver",detail:"Test key journeys, gather feedback, and polish the final details.",output:"Final build and handoff"},
];

export default function Process() {
  const [active,setActive] = useState<number | null>(0);
  const reduced = useReducedMotion();
  return (
    <section className="bits-process" aria-labelledby="process-title">
      <div className="bits-shell bits-process-grid">
        <SectionHeading label="My process" title="Good work. Clear steps." id="process-title"
          description="Your feedback, at every step." />
        <AnimatedContent className="bits-process-steps">
          {steps.map((step,index) => <article key={step.title} className="bits-process-step" data-open={active === index}>
            <h3><button type="button" aria-expanded={active === index} aria-controls={`process-step-${index}`}
              onClick={() => setActive(active === index ? null : index)}>
              <span className="bits-process-number">{String(index+1).padStart(2,"0")}</span>{step.title}<span className="bits-process-toggle" aria-hidden="true">{active === index ? "−" : "+"}</span>
            </button></h3>
            <AnimatePresence initial={false}>{active === index && <motion.div id={`process-step-${index}`} className="bits-process-detail"
              initial={{height:0,opacity:0}} animate={{height:"auto",opacity:1}} exit={{height:0,opacity:0}} transition={{duration:reduced?0:0.28}}>
              <div><p>{step.detail}</p><small>{step.output}</small></div>
            </motion.div>}</AnimatePresence>
          </article>)}
        </AnimatedContent>
      </div>
    </section>
  );
}
