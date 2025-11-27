import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import SplashCursor from "@/components/ui/SplashCursor";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ayaskant Sahoo | Portfolio",
  description: "Developer & Student Portfolio - Creative, Dark, Bold.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} antialiased bg-black text-white overflow-x-hidden`}
      >
        <SplashCursor />
        {children}
      </body>
    </html>
  );
}
