import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollUp from "@/components/ScrollUp";
import InitAnimations from "@/components/InitAnimations";
import BookingProvider from "@/components/BookingContext";
import JsonLd from "@/components/JsonLd";
import { site } from "@/lib/site";
import {
  defaultDescription,
  defaultTitle,
  jsonLdGraph,
  ogImagePath,
  seoKeywords,
  siteUrl,
} from "@/lib/seo";

export const viewport: Viewport = {
  themeColor: "#15051d",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${site.name}`,
  },
  description: defaultDescription,
  applicationName: site.name,
  generator: "Next.js",
  keywords: seoKeywords,
  authors: [{ name: site.legalName, url: siteUrl }],
  creator: site.legalName,
  publisher: site.name,
  category: "travel",
  classification: "Ooty taxi, cab booking and sightseeing tours",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    telephone: true,
    email: true,
    address: true,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: "/",
    siteName: site.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: ogImagePath,
        width: 1200,
        height: 630,
        alt: "Ooty Cabs taxi booking in Ooty, Ketti and Nilgiris",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [ogImagePath],
  },
  icons: {
    icon: [{ url: ogImagePath, type: "image/png" }],
    shortcut: ogImagePath,
    apple: ogImagePath,
  },
  manifest: "/manifest.webmanifest",
  alternates: {
    canonical: "/",
    languages: {
      "en-IN": "/",
      "x-default": "/",
    },
  },
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Ooty, Ketti, Nilgiris",
    "geo.position": "11.381;76.736",
    ICBM: "11.381, 76.736",
  },
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
        <JsonLd data={jsonLdGraph} />
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
