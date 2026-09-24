import Link from "next/link";
import { AddressSection } from "@/components/editorial/AddressSection";
import { Photo } from "@/components/editorial/Photo";
import { MemoryList } from "@/components/editorial/MemoryList";
import { PlaceList } from "@/components/editorial/PlaceList";
import { SectionLabel } from "@/components/editorial/SectionLabel";
import { Timeline } from "@/components/editorial/Timeline";
import { PhotoArchive } from "@/components/gallery/PhotoArchive";
import { JsonLd } from "@/components/seo/JsonLd";
import { chandrababu } from "@/data/chandrababu";
import { pageGraph } from "@/lib/structured-data";

export default function Home() {
  const preview = chandrababu.gallery.slice(0, 6);

  return (
    <>
      <JsonLd
        data={pageGraph({
          path: "/",
          name: chandrababu.seo.homeTitle,
          description: chandrababu.seo.homeDescription,
          breadcrumbs: [{ name: "Home", path: "/" }],
          includeGallery: true,
        })}
      />

      <section className="page-shell pt-8 md:pt-12">
        <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
          <div className="order-2 lg:order-1 lg:col-span-6">
            <p className="kicker">{chandrababu.inLovingMemory}</p>
            <h1 className=" text-wrap display mt-4 text-3xl md:text-6xl leading-[0.95] tracking-tight">
              {chandrababu.name}
            </h1>
            <p className="kicker mt-5">
              {chandrababu.locations.join(" · ")}
            </p>
            <p className="measure mt-6 text-lg leading-8 text-ink-soft">
              {chandrababu.tagline}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-4">
              <Link href="/about-chandrababu" className="editorial-link">
                Enter the archive
              </Link>
              <Link href="/photographs" className="quiet-link">
                View photographs
              </Link>
            </div>
          </div>
          <div className="order-1 lg:order-2 lg:col-span-6">
            <Photo
              src={chandrababu.heroImage}
              alt="Portrait of Chandrababu"
              priority
              aspect="3 / 4"
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="w-full max-h-[75vh]"
            />
          </div>
        </div>
      </section>

      <section className="page-shell mt-24 md:mt-32">
        <div className="grid gap-10 border-t border-line pt-12 md:grid-cols-[8rem_minmax(0,1fr)] md:gap-16">
          <SectionLabel>About</SectionLabel>
          <div>
            <h2 className="serif text-[clamp(2rem,5vw,3.4rem)] leading-[1.05]">
              {chandrababu.introductionHeading}
            </h2>
            <p className="measure mt-6 text-lg leading-8 text-ink-soft">
              {chandrababu.introduction}
            </p>
            <p className="mt-8">
              <Link href="/about-chandrababu" className="editorial-link">
                Read about Chandrababu
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section className="page-shell mt-24 md:mt-32">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <SectionLabel>Life</SectionLabel>
            <h2 className="serif mt-4 text-[clamp(1.8rem,4vw,2.8rem)] leading-none">
              A quiet record of years
            </h2>
          </div>
          <Link href="/about-chandrababu" className="quiet-link hidden sm:inline">
            Full timeline
          </Link>
        </div>
        <Timeline entries={chandrababu.timeline} />
      </section>

      <section className="page-shell mt-24 md:mt-32">
        <div className="mb-12 flex items-end justify-between gap-6">
          <div>
            <SectionLabel>Photographs</SectionLabel>
            <h2 className="serif mt-4 text-[clamp(1.8rem,4vw,2.8rem)] leading-none">
              The archive
            </h2>
          </div>
          <Link href="/photographs" className="quiet-link hidden sm:inline">
            All photographs
          </Link>
        </div>
        <PhotoArchive items={preview} />
      </section>

      <section className="page-shell mt-24 md:mt-32">
        <SectionLabel>Memories</SectionLabel>
        <h2 className="serif mt-4 text-[clamp(1.8rem,4vw,2.8rem)] leading-none">
          Stories kept by the family
        </h2>
        <MemoryList memories={chandrababu.memories.slice(0, 2)} />
        <Link href="/memories" className="editorial-link">
          Read all memories
        </Link>
      </section>

      <section className="page-shell mt-24 md:mt-32">
        <SectionLabel>Places that remain</SectionLabel>
        <h2 className="serif mt-4 mb-10 text-[clamp(1.8rem,4vw,2.8rem)] leading-none">
          Karakonam, Kunnathukal, Kerala
        </h2>
        <PlaceList places={chandrababu.places} />
      </section>

      <div className="page-shell mt-24 mb-8">
        <AddressSection />
      </div>
    </>
  );
}

