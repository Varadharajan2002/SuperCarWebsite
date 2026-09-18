import type { MetadataRoute } from "next";
import { site, tours } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || site.url;
  const paths = [
    "",
    "/tours",
    "/transfers",
    "/vehicles",
    "/packages",
    "/hotels",
    "/toy-train",
    ...tours.map((tour) => `/tours/${tour.slug}`),
  ];

  return paths.map((path) => ({
    url: `${base}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.8,
  }));
}
