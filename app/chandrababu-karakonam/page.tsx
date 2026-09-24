import type { Metadata } from "next";
import { PlaceArchivePage } from "@/components/editorial/PlaceArchivePage";
import { chandrababu } from "@/data/chandrababu";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: chandrababu.seo.karakonamTitle,
  description: chandrababu.seo.karakonamDescription,
  path: "/chandrababu-karakonam",
  keywords: [
    "Chandrababu Karakonam",
    "Karakonam Chandrababu",
    "Chandrababu Kerala",
    "Karakonam",
    "Thiruvananthapuram",
  ],
});

export default function KarakonamPage() {
  const place = chandrababu.places.find((item) => item.slug === "karakonam")!;

  return (
    <PlaceArchivePage
      place={place}
      path="/chandrababu-karakonam"
      seoTitle={chandrababu.seo.karakonamTitle}
      seoDescription={chandrababu.seo.karakonamDescription}
      copy={chandrababu.placePages.karakonam}
    />
  );
}
