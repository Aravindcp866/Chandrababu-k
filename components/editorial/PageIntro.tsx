import { JsonLd } from "@/components/seo/JsonLd";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";
import { pageGraph } from "@/lib/structured-data";

export function PageIntro({
  kicker,
  title,
  lede,
  crumbs,
  path,
  seoTitle,
  seoDescription,
  includeGallery = false,
}: {
  kicker?: string;
  title: string;
  lede?: string;
  crumbs: Crumb[];
  path: string;
  seoTitle: string;
  seoDescription: string;
  includeGallery?: boolean;
}) {
  return (
    <>
      <JsonLd
        data={pageGraph({
          path,
          name: seoTitle,
          description: seoDescription,
          breadcrumbs: crumbs.map((crumb) => ({
            name: crumb.label,
            path: crumb.href,
          })),
          includeGallery,
        })}
      />
      <div className="page-shell pt-8 md:pt-12">
        <Breadcrumbs items={crumbs} />
        {kicker ? <p className="kicker mt-10">{kicker}</p> : null}
        <h1 className="serif mt-4 max-w-[14ch] text-[clamp(2.4rem,6vw,4.6rem)] leading-[0.95]">
          {title}
        </h1>
        {lede ? (
          <p className="measure mt-6 text-lg leading-8 text-ink-soft">{lede}</p>
        ) : null}
      </div>
    </>
  );
}
