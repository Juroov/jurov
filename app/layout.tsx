import type { Metadata } from "next";
import { Playfair_Display, Montserrat, Bebas_Neue } from "next/font/google";
import "./globals.css";
import "./redesign.css";
import MotionPreferences from "./components/MotionPreferences";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["700", "900"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-ui",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  variable: "--font-impact",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lorrenz Amarille — Frontend Developer & UI/UX Designer",
  description:
    "Computer Engineering student with internship experience at PRIME Philippines. Builds responsive frontends, designs UI systems, and takes on freelance commissions.",
  openGraph: {
    title: "Lorrenz Amarille — Frontend Developer & UI/UX Designer",
    description:
      "Responsive frontends, UI systems, and freelance commissions. Currently open.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${montserrat.variable} ${bebasNeue.variable}`}
      data-theme="dark"
      data-scroll-behavior="smooth"
    >
      <body>
        <a className="bits-skip-link" href="#main-content">Skip to content</a>
        <MotionPreferences>{children}</MotionPreferences>
      </body>
    </html>
  );
}
