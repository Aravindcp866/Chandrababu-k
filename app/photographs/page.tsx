import type { Metadata } from "next";
import { PageIntro } from "@/components/editorial/PageIntro";
import { PhotoArchive } from "@/components/gallery/PhotoArchive";
import { chandrababu } from "@/data/chandrababu";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: chandrababu.seo.photographsTitle,
  description: chandrababu.seo.photographsDescription,
  path: "/photographs",
});

export default function PhotographsPage() {
  return (
    <>
      <PageIntro
        kicker="The archive"
        title={`Photographs of ${chandrababu.name}`}
        lede="Add photographs here. Replace the placeholder images and captions when the family archive is ready."
        path="/photographs"
        seoTitle={chandrababu.seo.photographsTitle}
        seoDescription={chandrababu.seo.photographsDescription}
        includeGallery
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/photographs", label: "Photographs" },
        ]}
      />
      <div className="page-shell mt-14 mb-10">
        <PhotoArchive items={chandrababu.gallery} />
      </div>
    </>
  );
}
