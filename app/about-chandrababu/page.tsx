import type { Metadata } from "next";
import { AddressSection } from "@/components/editorial/AddressSection";
import { FamilySection } from "@/components/editorial/FamilySection";
import { MemoryList } from "@/components/editorial/MemoryList";
import { PageIntro } from "@/components/editorial/PageIntro";
import { Photo } from "@/components/editorial/Photo";
import { PlaceList } from "@/components/editorial/PlaceList";
import { SectionLabel } from "@/components/editorial/SectionLabel";
import { Timeline } from "@/components/editorial/Timeline";
import { PhotoArchive } from "@/components/gallery/PhotoArchive";
import { chandrababu } from "@/data/chandrababu";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: chandrababu.seo.aboutTitle,
  description: chandrababu.seo.aboutDescription,
  path: "/about-chandrababu",
});

export default function AboutPage() {
  return (
    <article>
      <PageIntro
        kicker="A family portrait"
        title={`About ${chandrababu.name}`}
        lede={chandrababu.subtitle}
        path="/about-chandrababu"
        seoTitle={chandrababu.seo.aboutTitle}
        seoDescription={chandrababu.seo.aboutDescription}
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/about-chandrababu", label: "About" },
        ]}
      />

      <div className="page-shell mt-14 grid gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
        <Photo
          src={chandrababu.portraitImage}
          alt="Portrait of Chandrababu"
          aspect="3 / 4"
          sizes="(min-width: 1024px) 40vw, 100vw"
          priority
        />
        <div>
          <SectionLabel>Introduction</SectionLabel>
          <h2 className="serif mt-4 text-[clamp(1.9rem,4vw,3rem)] leading-[1.05]">
            {chandrababu.introductionHeading}
          </h2>
          <p className="measure mt-6 text-lg leading-8 text-ink-soft">
            {chandrababu.introduction}
          </p>
          <p className="kicker mt-8">{chandrababu.locations.join(" · ")}</p>
        </div>
      </div>

      <section className="page-shell mt-24">
        <SectionLabel>Biography</SectionLabel>
        <div className="mt-6 max-w-[40rem]">
          <p className="text-lg leading-8 text-ink-soft" dangerouslySetInnerHTML={{ __html: chandrababu.biography }} />
        </div>
      </section>

      <section className="page-shell mt-24">
        <SectionLabel>Life</SectionLabel>
        <h2 className="serif mt-4 mb-12 text-[clamp(1.8rem,4vw,2.6rem)]">
          Timeline
        </h2>
        <Timeline entries={chandrababu.timeline} />
      </section>

      <div className="page-shell">
        <FamilySection />
      </div>

      <div className="page-shell mt-24">
        <AddressSection />
      </div>

      <section className="page-shell mt-24">
        <SectionLabel>Places</SectionLabel>
        <h2 className="serif mt-4 mb-10 text-[clamp(1.8rem,4vw,2.6rem)]">
          Places that remain
        </h2>
        <PlaceList places={chandrababu.places} />
      </section>

      <section className="page-shell mt-24">
        <SectionLabel>Photographs</SectionLabel>
        <h2 className="serif mt-4 mb-10 text-[clamp(1.8rem,4vw,2.6rem)]">
          From the archive
        </h2>
        <PhotoArchive items={chandrababu.gallery.slice(0, 5)} />
      </section>

      <section className="page-shell mt-8 mb-8">
        <SectionLabel>Memories</SectionLabel>
        <MemoryList memories={chandrababu.memories} />
      </section>
    </article>
  );
}

