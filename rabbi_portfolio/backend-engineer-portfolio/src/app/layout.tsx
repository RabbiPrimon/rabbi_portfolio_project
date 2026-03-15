import type { Metadata } from "next";
import Script from "next/script";
import { Inter, Sora } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const sora = Sora({ subsets: ["latin"], variable: "--font-display" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: "MD Rabbi Islam | Backend Engineer Portfolio",
    template: "%s | MD Rabbi Islam",
  },
  description:
    "Senior-level backend engineer portfolio featuring Django, DRF, PostgreSQL, Redis, Celery, system design, and production architecture.",
  keywords: [
    "Backend Engineer",
    "Django",
    "DRF",
    "PostgreSQL",
    "Redis",
    "Celery",
    "Python",
    "System Design",
  ],
  openGraph: {
    title: "MD Rabbi Islam | Backend Engineer",
    description: "Production-grade backend portfolio built with Next.js, TypeScript, and modern engineering UX.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MD Rabbi Islam | Backend Engineer",
    description: "Production-grade backend portfolio built with Next.js, TypeScript, and modern engineering UX.",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${sora.variable} antialiased`}>
        {process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN ? (
          <Script
            defer
            data-domain={process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN}
            src="https://plausible.io/js/script.js"
          />
        ) : null}

        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="relative min-h-screen">
            <SiteHeader />
            {children}
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

