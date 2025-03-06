import type { Metadata } from "next";
import { Inter, Poppins, Outfit } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import ClientThemeToggle from "@/components/ClientThemeToggle";
import { ThemeProvider } from '@/components/ThemeProvider';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
});

export const metadata: Metadata = {
  title: "Zozalu - A Pop Up Initiative by Founder Members of Zo World",
  description: "Join Zozalu, a unique pop-up initiative bringing together Web3 enthusiasts, blockchain developers, and entrepreneurs in Bangalore.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="light-theme">
      <body className={`${inter.variable} ${poppins.variable} ${outfit.variable} antialiased font-sans bg-background text-foreground`}>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <header className="py-4 px-4 border-b border-border sticky top-0 bg-background/90 backdrop-blur-sm z-10">
              <div className="max-w-7xl mx-auto flex items-center justify-between">
                <div className="flex items-center space-x-8">
                  <Link href="/" className="text-2xl font-bold">
                    Zozalu
                  </Link>
                  <Navigation />
                </div>
                <div className="flex items-center space-x-4">
                  <ClientThemeToggle />
                </div>
              </div>
            </header>
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
