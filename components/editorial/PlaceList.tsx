import Link from "next/link";
import { Photo } from "@/components/editorial/Photo";
import type { Place } from "@/data/chandrababu";

export function PlaceList({ places }: { places: readonly Place[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {places.map((place) => (
        <article
          key={place.slug}
          className="grid gap-8 py-12 md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] md:items-center md:gap-14"
        >
          <Photo
            src={place.image}
            alt={place.imageAlt}
            aspect="4 / 3"
            sizes="(min-width: 768px) 40vw, 100vw"
          />
          <div>
            <p className="kicker">{place.kicker}</p>
            <h3 className="serif mt-3 text-[clamp(1.8rem,4vw,2.8rem)] leading-none">
              {place.title}
            </h3>
            <p className="measure mt-5 text-ink-soft">{place.shortDescription}</p>
            <p className="measure mt-4 text-ink-soft">{place.relationship}</p>
            <p className="mt-7">
              <Link href={place.href} className="editorial-link">
                Open archive
              </Link>
            </p>
          </div>
        </article>
      ))}
    </div>
  );
}
