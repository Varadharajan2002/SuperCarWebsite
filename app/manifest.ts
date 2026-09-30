import type { MetadataRoute } from "next";
import { defaultDescription } from "@/lib/seo";
import { siteConfig } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.businessName,
    short_name: siteConfig.businessName,
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
      {
        src: "/assets/img/favicon.png",
        sizes: "32x32",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
