import type { Metadata, Viewport } from "next";
import { Raleway } from "next/font/google";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { MobileBottomNav } from "@/components/layout/MobileBottomNav";
import { branding } from "@/content/branding";
import { seo, siteUrl } from "@/content/seo";
import { isImageAvailable } from "@/lib/images";
import { heroImage } from "@/content/media";
import "./globals.css";

const raleway = Raleway({
  variable: "--font-raleway",
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
  icons: {
    icon: [
      { url: "/favicon.ico?v=2", sizes: "32x32" },
      { url: "/icon.svg?v=2", type: "image/svg+xml" },
      { url: "/icon.png?v=2", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png?v=2", sizes: "180x180", type: "image/png" }],
  },
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
    <html lang="en-NG" className={`${raleway.variable} antialiased`} style={brandVars}>
      <body className="flex min-h-dvh flex-col">
        <a
          href="#main"
          className="sr-only z-[100] bg-brand px-4 py-3 font-semibold text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main" className="flex-1 pb-24 md:pb-0">
          {children}
        </main>
        <SiteFooter />
        <MobileBottomNav />
      </body>
    </html>
  );
}
