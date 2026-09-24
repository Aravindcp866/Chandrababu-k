import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

const routes = [
  "/",
  "/about-chandrababu",
  "/memories",
  "/photographs",
  "/places",
  "/chandrababu-karakonam",
  "/chandrababu-Kunnathukal",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: absoluteUrl(path),
    lastModified: new Date(),
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
