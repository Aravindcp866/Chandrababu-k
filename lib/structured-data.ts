import { chandrababu } from "@/data/chandrababu";
import { absoluteUrl, siteName } from "@/lib/site";

type Breadcrumb = { name: string; path: string };

export function personNode() {
  return {
    "@type": "Person",
    "@id": `${absoluteUrl("/about-chandrababu")}#person`,
    name: chandrababu.name,
    image: absoluteUrl(chandrababu.portraitImage),
    url: absoluteUrl("/about-chandrababu"),
    homeLocation: {
      "@type": "Place",
      name: "Karakonam",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Karakonam",
        addressRegion: "Kerala",
        addressCountry: "IN",
      },
    },
  };
}

export function publisherNode() {
  return {
    "@type": "Organization",
    "@id": `${absoluteUrl("/")}#family`,
    name: chandrababu.publisherName,
    url: absoluteUrl("/"),
  };
}

export function websiteNode() {
  return {
    "@type": "WebSite",
    "@id": `${absoluteUrl("/")}#website`,
    name: siteName,
    url: absoluteUrl("/"),
    inLanguage: "en-IN",
    publisher: { "@id": `${absoluteUrl("/")}#family` },
    about: { "@id": `${absoluteUrl("/about-chandrababu")}#person` },
  };
}

export function webpageNode({
  path,
  name,
  description,
}: {
  path: string;
  name: string;
  description: string;
}) {
  return {
    "@type": "WebPage",
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    inLanguage: "en-IN",
    isPartOf: { "@id": `${absoluteUrl("/")}#website` },
    about: { "@id": `${absoluteUrl("/about-chandrababu")}#person` },
    breadcrumb: { "@id": `${absoluteUrl(path)}#breadcrumb` },
  };
}

export function breadcrumbNode(path: string, items: Breadcrumb[]) {
  return {
    "@type": "BreadcrumbList",
    "@id": `${absoluteUrl(path)}#breadcrumb`,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function galleryNode(path: string) {
  return {
    "@type": "ImageGallery",
    "@id": `${absoluteUrl(path)}#gallery`,
    name: `Photographs of ${chandrababu.name}`,
    url: absoluteUrl(path),
    about: { "@id": `${absoluteUrl("/about-chandrababu")}#person` },
    associatedMedia: chandrababu.gallery.map((item) => ({
      "@type": "ImageObject",
      contentUrl: absoluteUrl(item.src),
      url: absoluteUrl(item.src),
      name: item.caption,
      description: item.alt,
      contentLocation: item.location,
    })),
  };
}

export function buildGraph(nodes: Record<string, unknown>[]) {
  return {
    "@context": "https://schema.org",
    "@graph": nodes,
  };
}

export function pageGraph({
  path,
  name,
  description,
  breadcrumbs,
  includeGallery = false,
}: {
  path: string;
  name: string;
  description: string;
  breadcrumbs: Breadcrumb[];
  includeGallery?: boolean;
}) {
  const nodes: Record<string, unknown>[] = [
    personNode(),
    publisherNode(),
    websiteNode(),
    webpageNode({ path, name, description }),
    breadcrumbNode(path, breadcrumbs),
  ];

  if (includeGallery) {
    nodes.push(galleryNode(path));
  }

  return buildGraph(nodes);
}
