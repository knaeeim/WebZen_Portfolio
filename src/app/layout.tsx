import type { Metadata } from "next";
import { Anek_Bangla } from "next/font/google";
import "./globals.css";
import { SiteProvider } from "@/context/SiteContext";
import { ThemeProvider } from "@/context/ThemeContext";
import { LanguageProvider } from "@/context/LanguageContext";
import { TooltipProvider } from "@/components/ui/tooltip";

const anekBangla = Anek_Bangla({
  variable: "--font-anek-bangla",
  subsets: ["bengali", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://webzenbd.com"),
  title: "Webzen BD | Full-Stack Digital Agency",
  description:
    "Webzen BD is a bespoke full-stack digital agency crafting ultra-fast web applications, UI/UX architecture, scalable dashboards, and e-commerce platforms.",
  keywords: [
    "Webzen BD",
    "Full-Stack Digital Agency",
    "Web development Dhaka",
    "MERN Stack agency",
    "UI/UX Design Bangladesh",
    "Next.js agency",
  ],
  authors: [{ name: "Webzen BD Team" }],
  openGraph: {
    title: "Webzen BD | Full-Stack Digital Agency",
    description:
      "Bespoke high-performance web architecture, custom web applications, and intuitive UI/UX engineering.",
    url: "https://webzenbd.com",
    siteName: "Webzen BD",
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
      lang="en"
      className={`${anekBangla.variable} h-full dark`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Anek+Bangla:wght@300;400;500;600;700;800&family=Hind+Siliguri:wght@300;400;500;600;700&family=Noto+Sans+Bengali:wght@300;400;500;600;700;800&family=Outfit:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Tiro+Bangla:ital@0;1&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
      </head>
      <body className="min-h-full flex flex-col bg-[#0B0B0E] text-neutral-100 antialiased selection:bg-[#06B6D4] selection:text-black transition-colors duration-300">
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
