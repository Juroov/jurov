"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import AnimatedContent from "./react-bits/AnimatedContent";
import SectionHeading from "./SectionHeading";

const steps = [
  {title:"Understand the idea",detail:"We start with what you want to achieve, who it's for, and what success should look like. A clear brief gives every design decision a purpose.",output:"Goals, scope, and a shared direction"},
  {title:"Find the right shape",detail:"I work through the structure, key flows, and visual direction. You'll see how the experience fits together before the full build begins.",output:"Wireframes, interface design, and a prototype"},
  {title:"Bring it to life",detail:"The design becomes responsive, reusable components. I focus on the details people feel: clear feedback, smooth interactions, and a layout that works across screens.",output:"A working website or app"},
  {title:"Refine and deliver",detail:"We review the finished experience, test the important journeys, and work through the final adjustments. Then it's ready for a proper handoff.",output:"A polished build and a clear handoff"},
];

export default function Process() {
  const [active,setActive] = useState<number | null>(0);
  const reduced = useReducedMotion();
  return (
    <section className="bits-process" aria-labelledby="process-title">
      <div className="bits-shell bits-process-grid">
        <SectionHeading label="How we'll work together" title="Good work starts with good questions." id="process-title"
          description="A clear process, room for your feedback, and care all the way through." />
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
