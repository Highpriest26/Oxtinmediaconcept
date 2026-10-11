import type { Metadata, Viewport } from "next";
import { Archivo, Inter } from "next/font/google";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { branding } from "@/content/branding";
import { seo, siteUrl } from "@/content/seo";
import { isImageAvailable } from "@/lib/images";
import { heroImage } from "@/content/media";
import "./globals.css";

const display = Archivo({
  variable: "--font-display-face",
  subsets: ["latin"],
  weight: ["500", "700", "800", "900"],
  display: "swap",
});

const body = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: seo.home.title, template: seo.titleTemplate },
  description: seo.home.description,
  applicationName: seo.siteName,
  openGraph: {
    type: "website",
    siteName: seo.siteName,
    locale: "en_NG",
    title: seo.home.title,
    description: seo.home.description,
    images: isImageAvailable(heroImage.src) ? [{ url: heroImage.src, alt: heroImage.alt }] : undefined,
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: branding.colors.primaryDark,
};

const brandVars = {
  "--brand-primary": branding.colors.primary,
  "--brand-primary-dark": branding.colors.primaryDark,
  "--brand-background": branding.colors.background,
  "--brand-surface": branding.colors.surface,
  "--brand-text": branding.colors.text,
  "--brand-muted": branding.colors.muted,
  "--brand-accent": branding.colors.accent,
  "--header-h": "4.5rem",
} as React.CSSProperties;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-NG" className={`${display.variable} ${body.variable} antialiased`} style={brandVars}>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only z-[100] bg-brand px-4 py-3 font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
