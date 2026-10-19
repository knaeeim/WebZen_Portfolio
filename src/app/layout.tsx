import type { Metadata } from "next";
import { Geist, Geist_Mono, Anek_Bangla } from "next/font/google";
import "./globals.css";
import { SiteProvider } from "@/context/SiteContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import { TooltipProvider } from "@/components/ui/tooltip";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const anekBangla = Anek_Bangla({
  variable: "--font-anek-bangla",
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://webzen.com.bd"),
  title: "WebZen Bangladesh | Premier Digital Engineering & Software Solutions",
  description:
    "WebZen Bangladesh is a premier digital engineering agency crafting ultra-fast web platforms, e-commerce, mobile apps, and business automation.",
  keywords: [
    "WebZen Bangladesh",
    "Web development Bangladesh",
    "Software agency Dhaka",
    "Next.js agency Bangladesh",
    "E-commerce development Dhaka",
    "bKash API integration",
    "Gulshan software company",
  ],
  authors: [{ name: "WebZen Bangladesh Team" }],
  openGraph: {
    title: "WebZen Bangladesh | Premier Digital Engineering & Software Solutions",
    description:
      "Crafting high-performance digital platforms with modern animations and cloud scale.",
    url: "https://webzen.com.bd",
    siteName: "WebZen Bangladesh",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "WebZen Bangladesh - Premier Digital Engineering & Software Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WebZen Bangladesh | Premier Digital Engineering & Software Solutions",
    description: "Crafting ultra-fast web platforms, e-commerce, mobile apps, and business automation.",
    images: ["/og-image.jpg"],
  },
  icons: {
    icon: [
      { url: "/logo.png", type: "image/png" },
      { url: "/favicon.ico" },
    ],
    apple: "/logo.png",
    shortcut: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="bn"
      className={`${geistSans.variable} ${geistMono.variable} ${anekBangla.variable} h-full dark`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anek+Bangla:wght@100..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#030e17] text-slate-100 dark:bg-[#030e17] dark:text-slate-100 antialiased selection:bg-cyan-400 selection:text-slate-950 transition-colors duration-300">
        <SiteProvider>
          <ThemeProvider>
            <LanguageProvider>
              <TooltipProvider>{children}</TooltipProvider>
            </LanguageProvider>
          </ThemeProvider>
        </SiteProvider>
      </body>
    </html>
  );
}
