import SpotlightCard from "./react-bits/SpotlightCard";
import AnimatedContent from "./react-bits/AnimatedContent";
import CountUp from "./react-bits/CountUp";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section className="bits-profile-section" aria-labelledby="about-title">
      <div className="bits-shell">
        <SectionHeading label="A little about me" title="Curious by nature. A builder at heart." id="about-title" level={1}
          description="I'm Lorrenz, a frontend developer and UI/UX designer who enjoys turning a messy idea into something clear, useful, and a little unexpected." />
        <div className="bits-about-grid">
          <AnimatedContent className="bits-about-story">
            <p className="bits-large-copy">I care about how it works.<br /><em>And how it feels.</em></p>
            <p>My work sits between design and engineering. I build responsive React and Next.js interfaces, create practical design systems, and keep real people in mind from the first wireframe to the final build.</p>
            <p>I&apos;m studying Computer Engineering at Bulacan State University. That foundation also takes me beyond the screen, into microcontrollers, sensors, and the way hardware and software work together.</p>
            <div className="bits-about-location"><span aria-hidden="true">◎</span><div>San Jose del Monte, Bulacan<small>Philippines</small></div></div>
          </AnimatedContent>
          <AnimatedContent delay={0.1}>
            <SpotlightCard className="bits-identity-card" spotlightColor="#C41E3A" proximity={0} intensity={0.2} flare={false}>
              <div className="bits-monogram" aria-hidden="true">LA<span>✳</span></div>
              <h3>Lorrenz A. Amarille</h3><p>Frontend developer & UI/UX designer</p>
              <div className="bits-identity-status"><span className="bits-status-dot" /> Open to freelance projects</div>
            </SpotlightCard>
          </AnimatedContent>
        </div>
        <AnimatedContent className="bits-stats">
          <div><strong><CountUp to={4} duration={1.2} /></strong><span>Featured projects</span><small>Websites and a mobile app</small></div>
          <div><strong><CountUp to={1} duration={1} /></strong><span>Industry internship</span><small>PRIME Philippines</small></div>
          <div><strong><CountUp from={2020} to={2027} separator="" duration={1.4} /></strong><span>Expected graduation</span><small>BS Computer Engineering</small></div>
        </AnimatedContent>
        <AnimatedContent>
          <div className="bits-education"><div><p className="bits-eyebrow">Always learning</p><h3>Bulacan State University</h3><p>Bachelor of Science in Computer Engineering · Expected 2027</p></div>
            <p>Software engineering, web development, data structures, and system architecture. My research, <a href="https://doi.org/10.5281/zenodo.19178899" target="_blank" rel="noopener noreferrer">Reyal or Fake? ↗</a>, explores the challenges of identifying AI-generated video.</p>
          </div>
        </AnimatedContent>
      </div>
    </section>
  );
}
