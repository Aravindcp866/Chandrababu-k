import { AddressSection } from "@/components/editorial/AddressSection";
import { MemoryList } from "@/components/editorial/MemoryList";
import { PageIntro } from "@/components/editorial/PageIntro";
import { Photo } from "@/components/editorial/Photo";
import { SectionLabel } from "@/components/editorial/SectionLabel";
import { PhotoArchive } from "@/components/gallery/PhotoArchive";
import { chandrababu, type Place } from "@/data/chandrababu";

export function PlaceArchivePage({
  place,
  path,
  seoTitle,
  seoDescription,
  copy,
}: {
  place: Place;
  path: string;
  seoTitle: string;
  seoDescription: string;
  copy: {
    title: string;
    subtitle: string;
    introduction: string;
    locationNote: string;
    familyStories: string;
  };
}) {
  const photographs = chandrababu.gallery.filter(
    (item) =>
      item.location === place.title ||
      item.id === place.slug ||
      item.src === place.image,
  );
  const memories = chandrababu.memories.filter(
    (memory) => memory.location === place.title,
  );

  return (
    <article>
      <PageIntro
        kicker={place.kicker}
        title={copy.title}
        lede={copy.subtitle}
        path={path}
        seoTitle={seoTitle}
        seoDescription={seoDescription}
        includeGallery
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/places", label: "Places" },
          { href: path, label: place.title },
        ]}
      />

      <section className="page-shell mt-14 grid gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <Photo
          src={place.image}
          alt={place.imageAlt}
          aspect="4 / 3"
          sizes="(min-width: 1024px) 50vw, 100vw"
        />
        <div>
          <SectionLabel>Introduction</SectionLabel>
          <p className="mt-5 text-lg leading-8 text-ink-soft">
            {copy.introduction}
          </p>
          <p className="mt-5 text-ink-soft">{place.relationship}</p>
        </div>
      </section>

      <section className="page-shell mt-24">
        <SectionLabel>Photographs</SectionLabel>
        <h2 className="serif mt-4 mb-10 text-[clamp(1.8rem,4vw,2.6rem)]">
          Pictures connected to {place.title}
        </h2>
        <PhotoArchive
          items={photographs.length ? photographs : chandrababu.gallery.slice(0, 3)}
        />
      </section>

      <section className="page-shell mt-16">
        <SectionLabel>Memories</SectionLabel>
        {memories.length ? (
          <MemoryList memories={memories} />
        ) : (
          <p className="measure mt-6 text-ink-soft">
            Add memories connected to {place.title} in the content file.
          </p>
        )}
      </section>

      <section className="page-shell mt-16 grid gap-12 border-t border-line pt-12 md:grid-cols-2">
        <div>
          <SectionLabel>Location</SectionLabel>
          <h2 className="serif mt-4 text-3xl">{place.title}</h2>
          <p className="mt-5 text-ink-soft">{copy.locationNote}</p>
        </div>
        <div>
          <SectionLabel>Family stories</SectionLabel>
          <p className="mt-5 text-ink-soft">{copy.familyStories}</p>
        </div>
      </section>

      <div className="page-shell mt-16 mb-8">
        <AddressSection />
      </div>
    </article>
  );
}

