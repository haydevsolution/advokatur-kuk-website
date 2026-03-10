import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import ScrollToTop from "@/components/ScrollToTop";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Advokatur KuK AG (in Gründung) | Your Law Firm",
  description: "Competent legal advice with personal care. Advokatur KuK AG (in Gründung) stands by your side with experience and expertise in all legal matters.",
  keywords: "Lawyer, Law Firm, Legal Advice, Attorney, Advokatur, KuK",
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
        <ScrollToTop />
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
