import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Okeke Vivian Chinecherem – Full Stack Developer",
    template: "%s | Vivian Chinecherem",
  },
  description:
    "Portfolio of Okeke Vivian Chinecherem, a Full Stack Developer skilled in React, Next.js, Django, and PHP.",
  keywords: ["full stack developer", "react", "next.js", "django", "portfolio"],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Vivian Chinecherem",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
