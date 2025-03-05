import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Footer from "@/components/Footer";
import ClientThemeToggle from "@/components/ClientThemeToggle";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Zozalu Event",
  description: "Join us for an amazing event experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased font-sans`}
      >
        <div className="flex flex-col min-h-screen">
          <header className="py-4 px-4 border-b border-border sticky top-0 bg-background/90 backdrop-blur-sm z-10">
            <div className="max-w-7xl mx-auto flex justify-between items-center">
              <Link href="/" className="text-2xl font-bold">
                Zozalu
              </Link>
              <ClientThemeToggle />
            </div>
          </header>
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
