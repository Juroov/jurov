import Image from "next/image";
import KnowMore from "./KnowMore";
import BlurText from "./react-bits/BlurText";
import RotatingText from "./react-bits/RotatingText";
import ShinyText from "./react-bits/ShinyText";
import TiltedCard from "./react-bits/TiltedCard";
import Magnet from "./react-bits/Magnet";
import AnimatedContent from "./react-bits/AnimatedContent";

export default function Hero() {
  return (
    <section id="hero" className="bits-hero" aria-labelledby="hero-heading">
      <div className="bits-hero-grid" aria-hidden="true" />
      <div className="bits-hero-inner">
        <div className="bits-hero-copy">
          <AnimatedContent distance={12}>
            <div className="bits-availability"><span className="bits-status-dot" />
              <ShinyText text="Available for projects" color="#EF8FA0" shineColor="#F4EEE7" trigger="view" speed={3} />
            </div>
            <p className="bits-hero-name">Lorrenz A. Amarille</p>
          </AnimatedContent>
          <h1 id="hero-heading">
            <BlurText text="Think Bigger." className="bits-hero-line bits-hero-line--first" trigger="load" direction="bottom" delay={90} stepDuration={0.35} blur={5} />
            <BlurText text="Build Better." className="bits-hero-line bits-hero-line--second" trigger="load" direction="bottom" delay={110} stepDuration={0.35} blur={5} />
          </h1>
          <AnimatedContent delay={0.15}>
            <div className="bits-hero-role">A little design. A lot of
              <RotatingText texts={["frontend craft.", "curiosity.", "problem solving."]}
                rotationInterval={3800} mainClassName="bits-rotating-text" staggerDuration={0.025} splitBy="words" />
            </div>
            <p className="bits-hero-description">I turn ideas into websites and apps that feel good to use. Frontend developer, UI/UX designer, and Computer Engineering student from the Philippines.</p>
            <div className="bits-hero-actions">
              <Magnet padding={18} magnetStrength={5} maxOffset={7}>
                <a className="bits-button bits-button--primary" href="#projects">Explore my work <span aria-hidden="true">↗</span></a>
              </Magnet>
              <a className="bits-text-link" href="#contact">Let&apos;s talk <span aria-hidden="true">↗</span></a>
            </div>
            <KnowMore />
          </AnimatedContent>
        </div>
        <AnimatedContent className="bits-stage" delay={0.2}>
          <div className="bits-stage-orbit bits-stage-orbit--one" aria-hidden="true" />
          <div className="bits-stage-orbit bits-stage-orbit--two" aria-hidden="true" />
          <span className="bits-stage-spark" aria-hidden="true">✳</span>
          <TiltedCard containerHeight="100%" containerWidth="100%" imageHeight="100%" imageWidth="100%"
            rotateAmplitude={7} scaleOnHover={1.015} glare={0.12} shadow={0.2}
            gyroscope={false} intro={false} showTooltip={false} radius={24} className="bits-stage-tilt">
            <div className="bits-stage-card">
              <div className="bits-stage-top"><span className="bits-status-dot" /> Design meets development <span aria-hidden="true">↗</span></div>
              <div className="bits-stage-screens">
                <Image src="/fitplay-today.png" alt="FitPlay daily training dashboard" width={965} height={2048} sizes="(max-width: 600px) 40vw, 220px" loading="eager" />
                <Image src="/fitplay-schedule.png" alt="FitPlay weekly workout planner" width={972} height={2048} sizes="(max-width: 600px) 40vw, 220px" loading="eager" />
              </div>
              <div className="bits-stage-caption"><div><small>A RECENT BUILD</small><strong>FitPlay<span>Workout planner & tracker</span></strong></div>
                <a href="#projects" aria-label="Explore the FitPlay project"><span aria-hidden="true">↗</span></a>
              </div>
            </div>
          </TiltedCard>
          <div className="bits-stage-sticker"><span aria-hidden="true">✦</span> Made with intention.</div>
        </AnimatedContent>
      </div>
      <div className="bits-hero-bottom"><span>Based in Bulacan, Philippines</span><a href="#projects">SCROLL TO EXPLORE <span aria-hidden="true">↓</span></a><span>Design + Code + Curiosity</span></div>
    </section>
  );
}
