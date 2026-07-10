import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./components/ThemeProvider";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"], display: "swap" });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"], display: "swap" });

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
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      {/* Prevent dark-mode flash — reads localStorage before first paint */}
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                try{
                  var s=localStorage.getItem('theme');
                  var m=window.matchMedia('(prefers-color-scheme:dark)').matches;
                  document.documentElement.setAttribute('data-theme', s||(m?'dark':'light'));
                }catch(e){}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-screen antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
