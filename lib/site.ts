import type { Metadata } from "next";
import { chandrababu } from "@/data/chandrababu";

export const siteName = `${chandrababu.name} — Family Archive`;

export function absoluteUrl(path = "/"): string {
  const envUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.NEXT_PUBLIC_VERCEL_URL
      ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
      : null);
  const base = (envUrl || chandrababu.siteUrl || "http://localhost:3000").replace(/\/$/, "");
  if (!path || path === "/") return `${base}/`;
  return `${base}${path.startsWith("/") ? path : `/${path}`}`;
}

export function createPageMetadata({
  title,
  description,
  path,
  keywords,
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const url = absoluteUrl(path);
  const image = absoluteUrl(chandrababu.heroImage);

  return {
    title: { absolute: title },
    description,
    keywords: keywords ?? [...chandrababu.keywords],
    alternates: { canonical: url },
    robots: {
      index: true,
      follow: true,
      googleBot: { index: true, follow: true },
    },
    openGraph: {
      type: "website",
      locale: "en_IN",
      url,
      siteName,
      title,
      description,
      images: [
        {
          url: image,
          width: 864,
          height: 1152,
          alt: "Placeholder portrait of Chandrababu",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
