import SpotlightCard from "./react-bits/SpotlightCard";
import AnimatedContent from "./react-bits/AnimatedContent";
import SectionHeading from "./SectionHeading";

const services = [
  { title: "Frontend development", icon: "</>", description: "Fast, accessible websites and app interfaces.", detail: "React · Next.js · Flutter", price: "From ₱1,500" },
  { title: "UI/UX design", icon: "✳", description: "Clear user flows, interfaces, and design systems.", detail: "Figma · Prototypes · Design systems", price: "From ₱1,200" },
  { title: "Web optimization", icon: "↗", description: "Improve your site's speed, usability, and search visibility.", detail: "Performance · Accessibility · SEO", price: "From ₱800" },
];

export default function Services() {
  return (
    <section id="services" className="bits-services" aria-labelledby="offer-heading">
      <div className="bits-shell">
        <SectionHeading label="Services" title="From sketch to screen." id="offer-heading" />
        <div className="bits-services-grid">
          {services.map((service,index) => <AnimatedContent key={service.title} delay={index*0.08}>
            <SpotlightCard className="bits-service-card" spotlightColor="#C41E3A" intensity={0.2} proximity={0} ambient={false} flare={false}>
              <span className="bits-service-icon" aria-hidden="true">{service.icon}</span>
              <h3>{service.title}</h3><p>{service.description}</p>
              <small>{service.detail}</small>
              <div className="bits-service-bottom"><span>{service.price}</span><a href="#contact" aria-label={`Discuss ${service.title.toLowerCase()}`}>Let&apos;s build <span aria-hidden="true">↗</span></a></div>
            </SpotlightCard>
          </AnimatedContent>)}
        </div>
      </div>
    </section>
  );
}
