import type { Metadata } from "next";
import "./globals.css";

const siteUrl = "https://your-domain.vercel.app"; // TODO: replace after you buy/point a domain

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default:
      "Ooty Taxi & Car Rental Service | Glanza, Innova, Swift Cabs in Nilgiris",
    template: "%s | Ooty Cabs",
  },
  description:
    "Book a taxi or rental car in Ooty, Tamil Nadu. Toyota Glanza, Innova Crysta, Swift Dzire & Swaraj Mazda Tempo Traveller for local sightseeing and outstation trips across Ooty, Coonoor, Kotagiri and the Nilgiris district. Call +91 84893 22556.",
  keywords: [
    "ooty taxi",
    "ooty cab booking",
    "car rental ooty",
    "taxi service ooty",
    "nilgiris taxi",
    "ooty to coimbatore taxi",
    "ooty sightseeing cab",
    "glanza taxi ooty",
    "innova rental ooty",
    "tempo traveller ooty",
    "ketti taxi service",
    "coonoor taxi",
    "kotagiri taxi",
  ],
  authors: [{ name: "Ooty Cabs" }],
  creator: "Ooty Cabs",
  icons: {
    icon: "https://placehold.co/64x64/1a1a2e/ffffff?text=OC",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: "Ooty Cabs",
    title: "Ooty Taxi & Car Rental Service | Glanza, Innova, Swift Cabs",
    description:
      "Local & outstation taxi service in Ooty and across the Nilgiris. Toyota Glanza, Innova Crysta, Swift Dzire, Swaraj Mazda Tempo Traveller. Book online in seconds.",
    images: [
      {
        url: "https://placehold.co/1200x630/1a1a2e/ffffff?text=Ooty+Glanza+Cabs",
        width: 1200,
        height: 630,
        alt: "Ooty Cabs — taxi and car rental service in Ooty, Nilgiris",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ooty Taxi & Car Rental Service | Glanza, Innova, Swift Cabs",
    description:
      "Book a Toyota Glanza, Innova, Swift or Tempo Traveller taxi in Ooty and the Nilgiris. Local & outstation trips, 24/7.",
    images: ["https://placehold.co/1200x630/1a1a2e/ffffff?text=Ooty+Glanza+Cabs"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: siteUrl,
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "TaxiService",
  name: "Ooty Cabs",
  image: "https://placehold.co/1200x630/1a1a2e/ffffff?text=Ooty+Glanza+Cabs",
  url: siteUrl,
  telephone: "+91-8489322556",
  email: "varadharajan025@gmail.com",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Nivesh, Ketti",
    addressLocality: "Ooty",
    addressRegion: "Tamil Nadu",
    postalCode: "643215",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 11.4,
    longitude: 76.7,
  },
  areaServed: [
    { "@type": "City", name: "Ooty" },
    { "@type": "City", name: "Coonoor" },
    { "@type": "City", name: "Kotagiri" },
    { "@type": "AdministrativeArea", name: "The Nilgiris District" },
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
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}