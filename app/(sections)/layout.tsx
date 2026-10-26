import Navbar from "../components/Navbar";
import ProfileNavigation from "../components/ProfileNavigation";
import Footer from "../components/Footer";

export default function SectionLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <main id="main-content" className="bits-profile-main"><ProfileNavigation />{children}</main>
      <Footer />
    </>
  );
}
