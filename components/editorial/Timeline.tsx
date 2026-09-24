import { Photo } from "@/components/editorial/Photo";
import type { TimelineEntry } from "@/data/chandrababu";

export function Timeline({ entries }: { entries: readonly TimelineEntry[] }) {
  return (
    <ol className="timeline">
      {entries.map((entry, index) => (
        <li key={`${entry.year}-${index}`} className="timeline-item">
          <p className="serif text-[1.65rem] leading-none text-ink">{entry.year}</p>
          <div>
            <hr className="hairline mb-4 max-w-xs" />
            <h3 className="serif text-[1.7rem] leading-tight">{entry.title}</h3>
            <p className="kicker mt-3">{entry.location}</p>
            <p className="measure mt-4 text-ink-soft">{entry.description}</p>
            {entry.image ? (
              <div className="mt-6 max-w-md">
                <Photo
                  src={entry.image}
                  alt="Placeholder photograph for Chandrababu's archive"
                  aspect="4 / 4"
                  sizes="(min-width: 768px) 28rem, 100vw"
                />
              </div>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}
