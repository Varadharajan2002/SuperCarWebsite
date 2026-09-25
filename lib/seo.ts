import type { Metadata } from "next";
import { site } from "./site";

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || site.url
).replace(/\/$/, "");

export const ogImagePath = "/assets/img/home5.png";
export const ogImageUrl = `${siteUrl}${ogImagePath}`;

export const defaultTitle =
  "Ooty Cabs | Taxi & Cab Booking in Ooty, Ketti, Nilgiris";

export const defaultDescription =
  "Book Ooty cabs and taxis from Ketti, Nilgiris. Private cab for Ooty sightseeing, Coonoor, Pykara, Coimbatore airport taxi, Mettupalayam transfer, Glanza, Innova and Tempo Traveller.";

export const seoKeywords = [
  "ooty cabs",
  "ooty cab",
  "ooty taxi",
  "cabs in ooty",
  "taxi in ooty",
  "ooty cab booking",
  "ooty taxi booking",
  "book cab in ooty",
  "ooty sightseeing cab",
  "ooty local taxi",
  "ketti taxi",
  "ketti cab",
  "nilgiris taxi",
  "nilgiris cab",
  "coonoor taxi",
  "coonoor cab from ooty",
  "pykara taxi",
  "avalanche ooty cab",
  "mudumalai taxi from ooty",
  "coimbatore airport to ooty taxi",
  "ooty to coimbatore cab",
  "mettupalayam to ooty taxi",
  "bangalore to ooty cab",
  "mysore to ooty taxi",
  "innova ooty",
  "glanza ooty taxi",
  "tempo traveller ooty",
  "force urbania ooty",
  "ooty tour package cab",
];

const ogImage = {
  url: ogImagePath,
  width: 1200,
  height: 630,
  alt: "Ooty Cabs — Toyota Glanza taxi for Ooty sightseeing and Nilgiris transfers",
};

export function pageMetadata({
  title,
  description,
  path,
  keywords = [],
}: {
  title: string;
  description: string;
  path: string;
  keywords?: string[];
}): Metadata {
  const canonical = path.startsWith("/") ? path : `/${path}`;
  const fullTitle = title.includes(site.name) ? title : `${title} | ${site.name}`;
  const isHome = canonical === "/";

  return {
    title: isHome ? { absolute: title } : title,
    description,
    keywords: [...seoKeywords, ...keywords],
    alternates: {
      canonical,
      languages: {
        "en-IN": canonical,
        "x-default": canonical,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonical,
      siteName: site.name,
      locale: "en_IN",
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImagePath],
    },
  };
}

export const jsonLdGraph = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "TaxiService"],
      "@id": `${siteUrl}/#business`,
      name: site.name,
      legalName: site.legalName,
      url: siteUrl,
      telephone: site.phoneTel,
      email: site.email,
      image: ogImageUrl,
      logo: ogImageUrl,
      priceRange: "₹₹",
      currenciesAccepted: "INR",
      paymentAccepted: "Cash, UPI",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Nivesh, Ketti",
        addressLocality: "Ooty",
        addressRegion: "Tamil Nadu",
        postalCode: site.postalCode,
        addressCountry: "IN",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: 11.381,
        longitude: 76.736,
      },
      areaServed: [
        "Ooty",
        "Ketti",
        "Coonoor",
        "Kotagiri",
        "Nilgiris",
        "Coimbatore",
        "Mettupalayam",
        "Mysore",
        "Bangalore",
      ],
      openingHoursSpecification: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
      contactPoint: {
        "@type": "ContactPoint",
        telephone: site.phoneTel,
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["en", "ta"],
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Ooty cab and taxi services",
        itemListElement: [
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Ooty sightseeing cab" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Coimbatore airport to Ooty taxi" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Mettupalayam to Ooty taxi" } },
          { "@type": "Offer", itemOffered: { "@type": "Service", name: "Tempo Traveller rental in Ooty" } },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: site.name,
      url: siteUrl,
      publisher: { "@id": `${siteUrl}/#business` },
      inLanguage: "en-IN",
    },
  ],
};
