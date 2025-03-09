import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Zozalu",
  description: "A Pop Up City Initiative for Founder Members of Zo World.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} bg-background text-foreground`}>
        <div className="min-h-screen flex flex-col">
          <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-[#111111]/90 backdrop-blur supports-[backdrop-filter]:bg-[#111111]/80">
            <div className="container flex h-14 max-w-screen-2xl items-center">
              <Navigation />
              <span className="text-white font-medium text-sm ml-auto mr-8">
                A Party by Zo
              </span>
            </div>
          </header>
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
