"use client";

import Image from "next/image";
import { useCallback, useEffect, useId, useRef, useState } from "react";
import type { GalleryItem } from "@/data/chandrababu";

const sizeClass: Record<GalleryItem["size"], string> = {
  portrait: "span-5",
  landscape: "span-7",
  small: "span-5",
  wide: "span-12",
};

const sizeAspect: Record<GalleryItem["size"], string> = {
  portrait: "3 / 4",
  landscape: "4 / 3",
  small: "1 / 1",
  wide: "16 / 9",
};

export function PhotoArchive({ items }: { items: readonly GalleryItem[] }) {
  const [index, setIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const labelId = useId();
  const open = index !== null;
  const current = index === null ? null : items[index];

  const close = useCallback(() => {
    setIndex(null);
    dialogRef.current?.close();
  }, []);

  const show = useCallback(
    (next: number) => {
      setIndex(next);
      if (!dialogRef.current?.open) {
        dialogRef.current?.showModal();
      }
    },
    [],
  );

  const go = useCallback(
    (direction: -1 | 1) => {
      setIndex((value) => {
        if (value === null) return value;
        return (value + direction + items.length) % items.length;
      });
    },
    [items.length],
  );

  useEffect(() => {
    if (!open) return;

    function onKey(event: KeyboardEvent) {
      if (event.key === "ArrowRight") go(1);
      if (event.key === "ArrowLeft") go(-1);
    }

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go, open]);

  return (
    <>
      <ul className="archive-grid">
        {items.map((item, itemIndex) => (
          <li key={item.id} className={sizeClass[item.size]}>
            <button
              type="button"
              onClick={() => show(itemIndex)}
              aria-label={`Open photograph: ${item.alt}`}
            >
              <div
                className="photo-frame photo-frame--muted"
                style={{ aspectRatio: sizeAspect[item.size] }}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes={
                    item.size === "wide"
                      ? "100vw"
                      : "(min-width: 720px) 50vw, 100vw"
                  }
                />
              </div>
              <span className="mt-3 flex items-baseline justify-between gap-4">
                <span className="text-sm text-ink-soft">{item.caption}</span>
                <span className="kicker">{item.year}</span>
              </span>
            </button>
          </li>
        ))}
      </ul>

      <dialog
        ref={dialogRef}
        className="lightbox"
        aria-labelledby={labelId}
        onClose={() => setIndex(null)}
        onClick={(event) => {
          if (event.target === dialogRef.current) close();
        }}
      >
        {current ? (
          <div className="grid min-h-[70vh] lg:grid-cols-[minmax(0,1.4fr)_minmax(16rem,0.7fr)]">
            <div className="relative min-h-[48vh] bg-[#ece6db]">
              <Image
                src={current.src}
                alt={current.alt}
                fill
                sizes="90vw"
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col justify-between gap-10 p-6 md:p-8">
              <div>
                <p className="kicker">Photograph</p>
                <h2 id={labelId} className="serif mt-4 text-3xl leading-tight">
                  {current.caption}
                </h2>
                <p className="mt-5 text-ink-soft">{current.location}</p>
                <p className="kicker mt-2">{current.year}</p>
              </div>
              <div className="flex flex-wrap items-center gap-6">
                <button type="button" className="quiet-link" onClick={() => go(-1)}>
                  Previous
                </button>
                <button type="button" className="quiet-link" onClick={() => go(1)}>
                  Next
                </button>
                <button type="button" className="editorial-link" onClick={close}>
                  Close
                </button>
              </div>
            </div>
          </div>
        ) : null}
      </dialog>
    </>
  );
}
