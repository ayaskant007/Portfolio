import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import SplashCursor from "@/components/ui/SplashCursor";
import Preloader from "@/components/ui/Preloader";
import ScrollProgress from "@/components/ui/ScrollProgress";
import BackToTop from "@/components/ui/BackToTop";
import FloatingDock from "@/components/ui/FloatingDock";
import SmoothScroll from "@/components/ui/SmoothScroll";
import Noise from "@/components/ui/Noise";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ayaskant Sahoo | Portfolio",
  description: "Developer & Student Portfolio - Creative, Dark, Bold.",
  keywords: ["Ayaskant Sahoo", "Portfolio", "Developer", "Student", "Next.js", "React", "Creative Developer"],
  authors: [{ name: "Ayaskant Sahoo" }],
  icons: {
    icon: "/avatar.png", // Use avatar as favicon
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${outfit.variable} antialiased bg-black text-white overflow-x-hidden`}
      >
        <Preloader />
        <ScrollProgress />
        <SplashCursor />
        {children}
        <BackToTop />
        <FloatingDock />
        <SmoothScroll />
        <Noise />
      </body>
    </html>
  );
}
