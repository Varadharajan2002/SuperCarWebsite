import type { MetadataRoute } from "next";
import { tours } from "@/lib/site";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: { path: string; priority: number }[] = [
    { path: "", priority: 1 },
    { path: "/tours", priority: 0.9 },
    { path: "/transfers", priority: 0.9 },
    { path: "/vehicles", priority: 0.85 },
    { path: "/packages", priority: 0.8 },
    { path: "/hotels", priority: 0.7 },
    { path: "/toy-train", priority: 0.7 },
    ...tours.map((tour) => ({ path: `/tours/${tour.slug}`, priority: 0.85 })),
  ];

  return entries.map(({ path, priority }) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority,
  }));
}
