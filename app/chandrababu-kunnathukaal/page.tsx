import type { Metadata } from "next";
import { PlaceArchivePage } from "@/components/editorial/PlaceArchivePage";
import { chandrababu } from "@/data/chandrababu";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: chandrababu.seo.KunnathukalTitle,
  description: chandrababu.seo.KunnathukalDescription,
  path: "/chandrababu-Kunnathukal",
  keywords: [
    "Chandrababu Kunnathukal",
    "Kunnathukal Chandrababu",
    "Chandrababu Kerala",
    "Kunnathukal",
  ],
});

export default function KunnathukalPage() {
  const place = chandrababu.places.find((item) => item.slug === "Kunnathukal")!;

  return (
    <PlaceArchivePage
      place={place}
      path="/chandrababu-Kunnathukal"
      seoTitle={chandrababu.seo.KunnathukalTitle}
      seoDescription={chandrababu.seo.KunnathukalDescription}
      copy={chandrababu.placePages.Kunnathukal}
    />
  );
}
