import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollUp from "@/components/ScrollUp";
import InitAnimations from "@/components/InitAnimations";
import BookingProvider from "@/components/BookingContext";
import { site } from "@/lib/site";

const title = "Ooty Taxi & Cab Booking | Glanza, Innova | Ketti, Nilgiris";
const description =
  "Book Ooty taxi and cab tours from Ketti, Nilgiris. Toyota Glanza, Innova, Swift, Tempo Traveller and Urbania for sightseeing, Coonoor, Pykara, Coimbatore airport and Mettupalayam transfers.";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || site.url),
  title: {
    default: title,
    template: `%s | ${site.name}`,
  },
  description,
  keywords: [
    "Ooty taxi",
    "Ooty cab booking",
    "Ketti taxi",
    "Nilgiris cab",
    "Ooty sightseeing",
    "Coonoor taxi",
    "Coimbatore airport to Ooty",
    "Mettupalayam to Ooty taxi",
    "Toyota Glanza Ooty",
    "Innova Ooty",
    "Tempo Traveller Ooty",
  ],
  openGraph: {
    title,
    description,
    type: "website",
    locale: "en_IN",
    siteName: site.name,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  icons: {
    icon: "/assets/img/favicon.png",
  },
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TaxiService",
  name: site.name,
  telephone: site.phoneTel,
  email: site.email,
  url: site.url,
  image: `${site.url}/assets/img/home5.png`,
  address: {
    "@type": "PostalAddress",
    streetAddress: "Nivesh, Ketti",
    addressLocality: "Ooty",
    addressRegion: "Tamil Nadu",
    postalCode: site.postalCode,
    addressCountry: "IN",
  },
  areaServed: ["Ooty", "Ketti", "Coonoor", "Nilgiris", "Coimbatore", "Mettupalayam"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN">
      <head>
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <BookingProvider>
          <Header />
          {children}
          <Footer />
          <ScrollUp />
          <InitAnimations />
        </BookingProvider>
      </body>
    </html>
  );
}
