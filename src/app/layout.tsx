import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Advokatur-KuK | Ihre Rechtsanwaltskanzlei",
  description: "Kompetente Rechtsberatung mit persönlicher Betreuung. Advokatur-KuK steht Ihnen mit Erfahrung und Expertise in allen Rechtsfragen zur Seite.",
  keywords: "Rechtsanwalt, Kanzlei, Rechtsberatung, Anwalt, Advokatur, KuK",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="pt-20">
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
