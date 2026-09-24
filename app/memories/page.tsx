import type { Metadata } from "next";
import { MemoryList } from "@/components/editorial/MemoryList";
import { PageIntro } from "@/components/editorial/PageIntro";
import { chandrababu } from "@/data/chandrababu";
import { createPageMetadata } from "@/lib/site";

export const metadata: Metadata = createPageMetadata({
  title: chandrababu.seo.memoriesTitle,
  description: chandrababu.seo.memoriesDescription,
  path: "/memories",
});

export default function MemoriesPage() {
  return (
    <>
      <PageIntro
        kicker="Family stories"
        title={`Memories of ${chandrababu.name}`}
        lede="Add family memories here. Each story can be replaced from the central content file."
        path="/memories"
        seoTitle={chandrababu.seo.memoriesTitle}
        seoDescription={chandrababu.seo.memoriesDescription}
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/memories", label: "Memories" },
        ]}
      />
      <div className="page-shell mt-4 mb-8">
        <MemoryList memories={chandrababu.memories} />
      </div>
    </>
  );
}
