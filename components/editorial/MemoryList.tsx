import { Photo } from "@/components/editorial/Photo";
import type { Memory } from "@/data/chandrababu";

export function MemoryList({ memories }: { memories: readonly Memory[] }) {
  return (
    <div>
      {memories.map((memory) => (
        <article
          key={memory.id}
          id={memory.id}
          className="border-t border-line py-14 md:py-20"
        >
          <p className="kicker">{memory.number}</p>
          <div className="mt-6 grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:items-start">
            <div>
              <h3 className="serif text-[clamp(1.8rem,4vw,3rem)] leading-[1.05]">
                {memory.title}
              </h3>
              <p className="kicker mt-4">
                {memory.location} · {memory.dateLabel}
              </p>
              <p className="measure mt-6 text-[1.05rem] leading-8 text-ink-soft">
                {memory.body}
              </p>
              <p className="mt-8 text-ink-soft">— {memory.attribution}</p>
            </div>
            {memory.image ? (
              <Photo
                src={memory.image}
                alt="Placeholder photograph for Chandrababu's archive"
                aspect="5 / 4"
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            ) : null}
          </div>
        </article>
      ))}
    </div>
  );
}
