import type { Metadata } from "next";
import { Cormorant_Garamond, Geist } from "next/font/google";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { chandrababu } from "@/data/chandrababu";
import { absoluteUrl, siteName } from "@/lib/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const homeTitle = chandrababu.seo.homeTitle;
const homeDescription = chandrababu.seo.homeDescription;

export const metadata: Metadata = {
  metadataBase: new URL(chandrababu.siteUrl),
  title: {
    default: homeTitle,
    template: `%s · ${chandrababu.name}`,
  },
  description: homeDescription,
  applicationName: siteName,
  authors: [{ name: chandrababu.publisherName }],
  creator: chandrababu.publisherName,
  publisher: chandrababu.publisherName,
  keywords: [...chandrababu.keywords],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: { canonical: absoluteUrl("/") },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: absoluteUrl("/"),
    siteName,
    title: homeTitle,
    description: homeDescription,
    images: [
      {
        url: chandrababu.heroImage,
        width: 864,
        height: 1152,
        alt: "Placeholder portrait of Chandrababu",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: homeTitle,
    description: homeDescription,
    images: [chandrababu.heroImage],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={chandrababu.language}
      className={`${geistSans.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <a className="skip-link" href="#content">
          Skip to content
        </a>
        <SiteHeader />
        <main id="content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
