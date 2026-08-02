import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";
import Cursor       from "./components/Cursor";
import AmbientGlow  from "./components/AmbientGlow";

export default function Home() {
  return (
    <>      {/* Client-only utilities (isolated leaves) */}
      <Cursor />
      <ScrollReveal />

      {/* Fixed nav */}
      <Navbar />

      {/* Page sections */}
      <main>
        <Hero />
        <Services />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
