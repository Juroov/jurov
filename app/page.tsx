import Navbar from "./components/Navbar";
import IntroSequence from "./components/IntroSequence";
import Hero from "./components/Hero";

import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";
import Cursor from "./components/Cursor";

export default function Home() {
  return (
    <>
      {/* Intro animation overlay — draws shield, then fades out */}
      <IntroSequence />

      {/* Client-only utilities (isolated leaves) */}
      <Cursor />
      <ScrollReveal />

      {/* Fixed nav */}
      <Navbar />

      {/* Page sections */}
      <main>
        <Hero />

        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
