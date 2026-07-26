import Navbar       from "./components/Navbar";
import Hero         from "./components/Hero";
import MarqueeStrip from "./components/MarqueeStrip";
import About        from "./components/About";
import Skills       from "./components/Skills";
import Experience   from "./components/Experience";
import Projects     from "./components/Projects";
import Commissions  from "./components/Commissions";
import Contact      from "./components/Contact";
import Footer       from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";
import Cursor       from "./components/Cursor";
import AmbientGlow  from "./components/AmbientGlow";

export default function Home() {
  return (
    <>
      {/* Ambient parallax glow — fixed, z-index 0 */}
      <AmbientGlow />

      {/* Client-only utilities (isolated leaves) */}
      <Cursor />
      <ScrollReveal />

      {/* Fixed nav */}
      <Navbar />

      {/* Page sections */}
      <main>
        <Hero />
        <MarqueeStrip />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Commissions />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
