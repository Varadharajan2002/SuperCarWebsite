import type { Metadata } from "next";
import { siteConfig, type RentalVehicle, type SaleVehicle, type TourPage, vehicles } from "./site";

export const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL || siteConfig.domain
).replace(/\/$/, "");

export const ogImagePath = "/assets/img/home5.png";
export const ogImageUrl = `${siteUrl}${ogImagePath}`;

// 50-60 chars, main keyword first, "Ooty" included
export const defaultTitle =
  "Car Rental in Ooty – Self Drive & Cab Service | Ooty Cabs";

// 140-160 chars with a direct call to action
export const defaultDescription =
  "Best car rental in Ooty with self-drive and cab services. Hire Glanza, Innova, and Tempo Travellers for sightseeing and Nilgiris tours. Book your trip today!";

export const seoKeywords = [
  "car rental in ooty",
  "self drive cars ooty",
  "ooty taxi",
  "coimbatore to ooty cab",
  "used cars in ooty",
  "second hand cars nilgiris",
  "ooty cabs",
  "ooty cab",
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
  "nilgiris car rental",
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
  "acting driver in ooty",
  "ooty toy train ticket booking",
  "second hand car sale ooty",
];

const ogImage = {
  url: ogImageUrl,
  width: 1200,
  height: 630,
  alt: "Ooty Cabs — Car rental, self-drive, taxi & sightseeing services in Ooty",
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
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const canonicalUrl = `${siteUrl}${normalizedPath === "/" ? "" : normalizedPath}`;
  const fullTitle = title.includes(siteConfig.businessName)
    ? title
    : `${title} | ${siteConfig.businessName}`;
  const isHome = normalizedPath === "/";

  return {
    title: { absolute: fullTitle },
    description,
    keywords: [...seoKeywords, ...keywords],
    alternates: {
      canonical: canonicalUrl,
      languages: {
        "en-IN": canonicalUrl,
        "x-default": canonicalUrl,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: siteConfig.businessName,
      locale: "en_IN",
      type: "website",
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImageUrl],
    },
  };
}

// =============================================================================
// STRUCTURED DATA (JSON-LD) GENERATORS
// Strictly validated according to Schema.org and Google Search Rich Results
// =============================================================================

export const siteWideJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["LocalBusiness", "AutoRental", "AutoDealer", "TaxiService"],
      "@id": `${siteUrl}/#business`,
      name: siteConfig.businessName,
      legalName: siteConfig.legalName,
      url: siteUrl,
      telephone: siteConfig.phoneTel,
      email: siteConfig.email,
      image: ogImageUrl,
      logo: ogImageUrl,
      priceRange: siteConfig.priceRange,
      currenciesAccepted: siteConfig.currenciesAccepted,
      paymentAccepted: siteConfig.paymentAccepted,
      address: {
        "@type": "PostalAddress",
        streetAddress: siteConfig.address.street,
        addressLocality: siteConfig.address.locality,
        addressRegion: siteConfig.address.region,
        postalCode: siteConfig.address.postalCode,
        addressCountry: siteConfig.address.country,
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: siteConfig.geo.latitude,
        longitude: siteConfig.geo.longitude,
      },
      areaServed: siteConfig.serviceArea.map((place) => ({
        "@type": "City",
        name: place,
      })),
      openingHoursSpecification: siteConfig.openingHoursSpecification.map((spec) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: spec.days,
        opens: spec.opens,
        closes: spec.closes,
      })),
      sameAs: siteConfig.sameAs.filter(Boolean),
      contactPoint: {
        "@type": "ContactPoint",
        telephone: siteConfig.phoneTel,
        contactType: "customer service",
        areaServed: "IN",
        availableLanguage: ["en", "ta", "hi"],
      },
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Ooty Cabs Car Rental, Taxi & Vehicle Services",
        itemListElement: [
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Car Rental in Ooty (Self-Drive & With Driver)",
              description: "Self drive and chauffeur driven car rental in Ooty, Nilgiris.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Ooty Sightseeing Cab Services",
              description: "Local day tours of Botanical Garden, Ooty Lake, Doddabetta, Pykara & Coonoor.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Coimbatore Airport to Ooty Taxi Transfer",
              description: "Fixed fare on-time pickup and drop taxi from Coimbatore International Airport.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Mettupalayam Railway Station to Ooty Taxi",
              description: "Connecting cab transfers from Mettupalayam Railway Station up the Nilgiris ghat road.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Tempo Traveller & Force Urbania Rental",
              description: "12 to 18 seater luxury group vans for families, weddings and corporate Nilgiris tours.",
            },
          },
          {
            "@type": "Offer",
            itemOffered: {
              "@type": "Service",
              name: "Used & Pre-Owned Car Sales in Ooty Nilgiris",
              description: "Certified pre-owned hill-tested second hand cars for sale in Ooty, Nilgiris.",
            },
          },
        ],
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      name: siteConfig.businessName,
      url: siteUrl,
      publisher: { "@id": `${siteUrl}/#business` },
      inLanguage: "en-IN",
    },
  ],
};

// Backward-compatible alias
export const jsonLdGraph = siteWideJsonLd;

export function getBreadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => {
      const normalized = item.path.startsWith("/") ? item.path : `/${item.path}`;
      const itemUrl = `${siteUrl}${normalized === "/" ? "" : normalized}`;
      return {
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: itemUrl,
      };
    }),
  };
}

export function generateRentalCarSchema(car: RentalVehicle) {
  return {
    "@context": "https://schema.org",
    "@type": ["Car", "Product"],
    name: `${car.brand} ${car.name} for Rent in Ooty`,
    image: `${siteUrl}${car.img}`,
    description: `${car.note} Available for self-drive and cab booking in Ooty, Nilgiris.`,
    brand: {
      "@type": "Brand",
      name: car.brand,
    },
    model: car.model || car.name,
    vehicleModelDate: car.vehicleModelDate || "2023",
    fuelType: car.fuelType || "Petrol",
    vehicleConfiguration: car.seats,
    seatingCapacity: car.seatingCapacity,
    offers: {
      "@type": "Offer",
      price: car.priceStarting,
      priceCurrency: "INR",
      priceValidUntil: "2027-12-31",
      availability: "https://schema.org/InStock",
      url: `${siteUrl}/vehicles`,
      seller: {
        "@type": "AutoRental",
        name: siteConfig.businessName,
        telephone: siteConfig.phoneTel,
        url: siteUrl,
      },
    },
  };
}

export function getRentalCarsItemListSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Rental Cars & Cabs Available in Ooty",
    numberOfItems: vehicles.length,
    itemListElement: vehicles.map((car, idx) => ({
      "@type": "ListItem",
      position: idx + 1,
      item: generateRentalCarSchema(car),
    })),
  };
}

export function generateSaleCarSchema(car: SaleVehicle) {
  return {
    "@context": "https://schema.org",
    "@type": ["Car", "Product"],
    name: `${car.brand} ${car.name} (${car.vehicleModelDate}) for Sale in Ooty`,
    image: `${siteUrl}${car.img}`,
    description: `${car.note} Certified pre-owned vehicle for sale in Ooty, Nilgiris.`,
    brand: {
      "@type": "Brand",
      name: car.brand,
    },
    model: car.model,
    vehicleModelDate: car.vehicleModelDate,
    mileageFromOdometer: {
      "@type": "QuantitativeValue",
      value: car.mileageValue,
      unitCode: "KMT",
    },
    fuelType: car.fuelType,
    itemCondition: car.itemCondition,
    offers: {
      "@type": "Offer",
      price: car.price,
      priceCurrency: car.priceCurrency,
      priceValidUntil: "2027-12-31",
      availability: car.availability,
      url: `${siteUrl}/vehicles`,
      seller: {
        "@type": "AutoDealer",
        name: siteConfig.businessName,
        telephone: siteConfig.phoneTel,
        url: siteUrl,
      },
    },
  };
}

export function getTourSchema(tour: TourPage) {
  return {
    "@context": "https://schema.org",
    "@type": "TouristTrip",
    name: `${tour.title} – Ooty Cabs`,
    description: tour.description[0],
    touristType: ["Couples", "Families", "Groups", "Senior Citizens"],
    provider: {
      "@id": `${siteUrl}/#business`,
    },
    offers: {
      "@type": "Offer",
      price: 2500,
      priceCurrency: "INR",
      priceValidUntil: "2027-12-31",
      availability: "https://schema.org/InStock",
      url: `${siteUrl}/tours/${tour.slug}`,
    },
    itinerary: {
      "@type": "ItemList",
      name: tour.placesTitle,
      numberOfItems: tour.places.length,
      itemListElement: tour.places.map((place, idx) => ({
        "@type": "ListItem",
        position: idx + 1,
        name: place,
      })),
    },
  };
}
