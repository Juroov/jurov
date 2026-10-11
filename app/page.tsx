import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MarqueeStrip from "./components/MarqueeStrip";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  return (
    <>
      {/* Client-only utilities (isolated leaves) */}
      <ScrollReveal />

      {/* Fixed nav */}
      <Navbar />

      {/* Page sections */}
      <main>
        <Hero />
        <MarqueeStrip />
        <Projects />
        <Services />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
