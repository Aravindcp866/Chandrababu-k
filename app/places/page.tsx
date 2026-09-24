import type { Metadata } from "next";
import { AddressSection } from "@/components/editorial/AddressSection";
import { PageIntro } from "@/components/editorial/PageIntro";
import { PlaceList } from "@/components/editorial/PlaceList";
import { chandrababu } from "@/data/chandrababu";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: chandrababu.seo.placesTitle,
  description: chandrababu.seo.placesDescription,
  path: "/places",
});

export default function PlacesPage() {
  return (
    <>
      <PageIntro
        kicker="Places that remain"
        title="Karakonam, Kunnathukal, Kerala"
        lede="Places connected to Chandrababu's life. Add the family's own descriptions when you are ready."
        path="/places"
        seoTitle={chandrababu.seo.placesTitle}
        seoDescription={chandrababu.seo.placesDescription}
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/places", label: "Places" },
        ]}
      />
      <div className="page-shell mt-14">
        <PlaceList places={chandrababu.places} />
      </div>
      <div className="page-shell mt-24 mb-10">
        <AddressSection />
      </div>
    </>
  );
}

