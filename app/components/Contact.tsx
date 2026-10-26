import ContactForm from "./ContactForm";
import AnimatedContent from "./react-bits/AnimatedContent";
import SpotlightCard from "./react-bits/SpotlightCard";
import ShinyText from "./react-bits/ShinyText";

export default function Contact() {
  return (
    <section id="contact" className="contact-section bits-contact" aria-labelledby="contact-heading">
      <div className="contact-shell">
        <div className="contact-grid">
          <AnimatedContent className="contact-copy">
            <p className="bits-eyebrow"><span aria-hidden="true">✳</span> Make the next thing</p>
            <h2 id="contact-heading">Good things start<br />with a <em>hello.</em></h2>
            <p className="contact-intro">A new website, an app idea, or an interface that could work a little better. Tell me what you have in mind.</p>
            <div className="bits-contact-availability"><span className="bits-status-dot" /><ShinyText text="Open for freelance projects" color="#EF8FA0" shineColor="#F4EEE7" trigger="view" /></div>
            <a className="contact-email-link" href="mailto:amarillelorrenz@gmail.com">amarillelorrenz@gmail.com <span aria-hidden="true">↗</span></a>
            <div className="contact-socials" aria-label="Social profiles">
              <a href="https://github.com/Juroov" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
              <a href="https://www.facebook.com/lorrenz.amarille.5/" target="_blank" rel="noopener noreferrer">Facebook <span aria-hidden="true">↗</span></a>
            </div>
          </AnimatedContent>
          <AnimatedContent delay={0.1}>
            <SpotlightCard className="contact-form-column bits-form-card" spotlightColor="#C41E3A" proximity={0} intensity={0.12} flare={false}>
              <h3>Tell me about your idea</h3><p>Start with a few details. I&apos;ll take it from there.</p>
              <ContactForm />
              <small className="bits-form-note">Opens a ready-to-send email draft.</small>
            </SpotlightCard>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
}
