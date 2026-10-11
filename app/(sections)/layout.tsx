import Navbar from "../components/Navbar";
import ScrollReveal from "../components/ScrollReveal";
import SectionBackBtn from "../components/SectionBackBtn";

export default function SectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <SectionBackBtn />
      <main className="section-page-enter">
        {children}
      </main>
    </>
  );
}
