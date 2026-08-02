import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "./components/SmoothScroll";
import { WaveNavigatorProvider } from "./components/WaveNavigator";
import IntroSequence from "./components/IntroSequence";

const playfair = Playfair_Display({
  variable: "--font-display",
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["700", "900"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-ui",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
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
      data-scroll-behavior="smooth"
      className={`${playfair.variable} ${inter.variable}`}
      data-theme="dark"
    >
      <body>
        <IntroSequence />
        <WaveNavigatorProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </WaveNavigatorProvider>
      </body>
    </html>
  );
}
