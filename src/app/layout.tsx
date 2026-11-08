import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import ThemeToggle from "@/components/ThemeToggle";
import Footer from "../components/Footer";
import Nav from "@/components/Nav";
import Script from "next/script";

export const metadata: Metadata = {
  title: "freudnim",
  description: "freudnim's personal site",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          src="https://unpkg.com/@material-tailwind/html@3.0.0-beta.7/dist/material-tailwind.umd.min.js"
          strategy="afterInteractive"
        />
      </head>
      <body>
        <ThemeProvider defaultTheme="system" enableSystem={true}>
          <div className="flex min-h-screen flex-col font-sans background">
            <div className="flex flex-1 w-full max-w-3xl flex-col items-center justify-center px-16 py-32 sm:items-start mx-auto">
              <main className="flex w-full flex-col justify-between">
                <div className="flex w-full flex-col gap-8">
                  <Nav />
                  {children}
                </div>
              </main>
              <Footer />
            </div>
            <ThemeToggle />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
