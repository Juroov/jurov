import ContactForm from "./ContactForm";
import AnimatedContent from "./react-bits/AnimatedContent";
import SpotlightCard from "./react-bits/SpotlightCard";

export default function Contact() {
  return (
    <section id="contact" className="contact-section bits-contact" aria-labelledby="contact-heading">
      <div className="contact-shell">
        <div className="contact-grid">
          <AnimatedContent className="contact-copy">
            <p className="bits-eyebrow"><span aria-hidden="true">✳</span> Contact</p>
            <h2 id="contact-heading">Good things start<br />with a <em>hello.</em></h2>
            <p className="contact-intro">Have a website or app in mind? Let&apos;s talk.</p>
            <a className="contact-email-link" href="mailto:amarillelorrenz@gmail.com">amarillelorrenz@gmail.com <span aria-hidden="true">↗</span></a>
            <div className="contact-socials" aria-label="Social profiles">
              <a href="https://github.com/Juroov" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
              <a href="https://www.facebook.com/lorrenz.amarille.5/" target="_blank" rel="noopener noreferrer">Facebook <span aria-hidden="true">↗</span></a>
            </div>
          </AnimatedContent>
          <AnimatedContent delay={0.1}>
            <SpotlightCard className="contact-form-column bits-form-card" spotlightColor="#C41E3A" proximity={0} intensity={0.12} flare={false}>
              <h3>Your idea</h3><p>Share a few details.</p>
              <ContactForm />
              <small className="bits-form-note">Opens a ready-to-send email draft.</small>
            </SpotlightCard>
          </AnimatedContent>
        </div>
      </div>
    </section>
  );
}
