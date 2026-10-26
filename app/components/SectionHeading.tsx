import BlurText from "./react-bits/BlurText";

export default function SectionHeading({
  label, title, description, id, level = 2,
}: { label: string; title: string; description?: string; id?: string; level?: 1 | 2 }) {
  const Heading = level === 1 ? "h1" : "h2";
  return (
    <header className="bits-section-heading">
      <p className="bits-eyebrow"><span aria-hidden="true">✳</span>{label}</p>
      <Heading id={id}><BlurText text={title} delay={65} stepDuration={0.3} blur={4} direction="bottom" /></Heading>
      {description && <p className="bits-section-description">{description}</p>}
    </header>
  );
}
