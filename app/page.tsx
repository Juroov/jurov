<<<<<<< Updated upstream
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
=======
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";

import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
>>>>>>> Stashed changes
import ScrollReveal from "./components/ScrollReveal";
import Cursor       from "./components/Cursor";
import AmbientGlow  from "./components/AmbientGlow";

export default function Home() {
  return (
<<<<<<< Updated upstream
    <>
      {/* Ambient parallax glow — fixed, z-index 0 */}
      <AmbientGlow />

      {/* Client-only utilities (isolated leaves) */}
=======
    <>      {/* Client-only utilities (isolated leaves) */}
>>>>>>> Stashed changes
      <Cursor />
      <ScrollReveal />

      {/* Fixed nav */}
      <Navbar />

      {/* Page sections */}
      <main>
        <Hero />
<<<<<<< Updated upstream
        <MarqueeStrip />
        <About />
        <Skills />
        <Experience />
=======
        <Services />
>>>>>>> Stashed changes
        <Projects />
        <Commissions />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
