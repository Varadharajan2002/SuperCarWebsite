import type { MetadataRoute } from "next";
import { tours } from "@/lib/site";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const currentDate = new Date();

  const staticRoutes: {
    path: string;
    priority: number;
    changeFrequency: MetadataRoute.Sitemap[0]["changeFrequency"];
  }[] = [
    { path: "", priority: 1.0, changeFrequency: "weekly" },
    { path: "/vehicles", priority: 0.95, changeFrequency: "weekly" },
    { path: "/tours", priority: 0.9, changeFrequency: "weekly" },
    { path: "/transfers", priority: 0.9, changeFrequency: "weekly" },
    { path: "/packages", priority: 0.8, changeFrequency: "weekly" },
    { path: "/hotels", priority: 0.7, changeFrequency: "monthly" },
    { path: "/toy-train", priority: 0.7, changeFrequency: "monthly" },
  ];

  const tourRoutes = tours.map((tour) => ({
    path: `/tours/${tour.slug}`,
    priority: 0.85,
    changeFrequency: "weekly" as const,
  }));

  const allEntries = [...staticRoutes, ...tourRoutes];

  return allEntries.map(({ path, priority, changeFrequency }) => ({
    url: `${siteUrl}${path}`,
    lastModified: currentDate,
    changeFrequency,
    priority,
  }));
}
