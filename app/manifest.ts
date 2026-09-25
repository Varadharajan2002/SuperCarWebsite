import type { MetadataRoute } from "next";
import { defaultDescription } from "@/lib/seo";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.name,
    description: defaultDescription,
    start_url: "/",
    display: "standalone",
    background_color: "#15051d",
    theme_color: "#15051d",
    lang: "en-IN",
    icons: [
      {
        src: "/assets/img/home5.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
