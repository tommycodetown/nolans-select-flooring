import type { Metadata } from "next";
import { Suspense } from "react";
import { IBM_Plex_Serif, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/config/site";
import { getHomepageUrl, getSiteUrl } from "@/lib/site-url";
import { SiteJsonLd } from "@/components/seo/site-json-ld";
import { ScrollToTop } from "@/components/marketing/scroll-to-top";

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["500", "600"],
  variable: "--font-serif",
  display: "swap",
});

const defaultTitle = siteConfig.name;
const defaultDescription = siteConfig.description;
const defaultOgImage = siteConfig.socialImage || undefined;

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: defaultTitle,
  description: defaultDescription,
  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: defaultTitle,
    description: defaultDescription,
    url: getHomepageUrl(),
    ...(defaultOgImage ? { images: [{ url: defaultOgImage }] } : {}),
  },
  twitter: {
    card: defaultOgImage ? "summary_large_image" : "summary",
    title: defaultTitle,
    description: defaultDescription,
    ...(defaultOgImage ? { images: [defaultOgImage] } : {}),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn(
        "h-full antialiased",
        instrumentSans.variable,
        ibmPlexSerif.variable,
        instrumentSans.className,
      )}
    >
      <body className="min-h-full flex flex-col font-sans">
        <SiteJsonLd />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){if("scrollRestoration"in history)history.scrollRestoration="manual";if(!location.hash){window.scrollTo(0,0);document.documentElement.scrollTop=0;document.body.scrollTop=0;}})();`,
          }}
        />
        <Suspense fallback={null}>
          <ScrollToTop />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
