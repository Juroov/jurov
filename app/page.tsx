import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Toolbelt from "./components/Toolbelt";
import Process from "./components/Process";

export default function Home() {
  return (
    <>
      {/* Fixed nav */}
      <Navbar />

      {/* Page sections */}
      <main id="main-content">
        <Hero />
        <Toolbelt />
        <Projects />
        <Services />
        <Process />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
