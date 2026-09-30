import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollUp from "@/components/ScrollUp";
import InitAnimations from "@/components/InitAnimations";
import BookingProvider from "@/components/BookingContext";
import JsonLd from "@/components/JsonLd";
import { siteConfig } from "@/lib/site";
import {
  defaultDescription,
  defaultTitle,
  siteWideJsonLd,
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
    template: `%s | ${siteConfig.businessName}`,
  },
  description: defaultDescription,
  applicationName: siteConfig.businessName,
  generator: "Next.js",
  keywords: seoKeywords,
  authors: [{ name: siteConfig.legalName, url: siteUrl }],
  creator: siteConfig.legalName,
  publisher: siteConfig.businessName,
  category: "travel",
  classification: "Ooty car rental, taxi booking, sightseeing tours and used cars",
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
    url: siteUrl,
    siteName: siteConfig.businessName,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: `${siteUrl}${ogImagePath}`,
        width: 1200,
        height: 630,
        alt: "Ooty Cabs — Car rental, self-drive, taxi & sightseeing services in Ooty",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [`${siteUrl}${ogImagePath}`],
  },
  icons: {
    icon: [{ url: "/assets/img/favicon.png", type: "image/png" }],
    shortcut: "/assets/img/favicon.png",
    apple: "/assets/img/favicon.png",
  },
  manifest: "/manifest.webmanifest",
  verification: {
    google: siteConfig.googleSiteVerification,
  },
  alternates: {
    canonical: siteUrl,
    languages: {
      "en-IN": siteUrl,
      "x-default": siteUrl,
    },
  },
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Ooty, Ketti, Nilgiris",
    "geo.position": `${siteConfig.geo.latitude};${siteConfig.geo.longitude}`,
    ICBM: `${siteConfig.geo.latitude}, ${siteConfig.geo.longitude}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager (GTM) - Head Snippet */}
        {siteConfig.gtmId ? (
          <Script id="google-tag-manager" strategy="afterInteractive">
            {`
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','${siteConfig.gtmId}');
            `}
          </Script>
        ) : null}
        {/* Preconnect to external font and icon CDNs */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="preconnect"
          href="https://cdn.jsdelivr.net"
          crossOrigin="anonymous"
        />

        {/* Preload primary hero image for optimal LCP (<2.5s) */}
        <link
          rel="preload"
          href="/assets/img/home5.png"
          as="image"
          type="image/png"
          fetchPriority="high"
        />

        {/* Remixicon stylesheet */}
        <link
          href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css"
          rel="stylesheet"
        />

        {/* Site-wide Schema.org JSON-LD (LocalBusiness, AutoRental, AutoDealer, TaxiService, WebSite) */}
        <JsonLd data={siteWideJsonLd} />

        {/* Google Analytics 4 (GA4) - Non-blocking deferred loading */}
        {siteConfig.gaMeasurementId ? (
          <>
            <Script
              strategy="afterInteractive"
              src={`https://www.googletagmanager.com/gtag/js?id=${siteConfig.gaMeasurementId}`}
            />
            <Script id="google-analytics-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${siteConfig.gaMeasurementId}', {
                  page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        ) : null}
      </head>
      <body suppressHydrationWarning>
        {/* Google Tag Manager (GTM) - Body noscript fallback */}
        {siteConfig.gtmId ? (
          <noscript>
            <iframe
              src={`https://www.googletagmanager.com/ns.html?id=${siteConfig.gtmId}`}
              height="0"
              width="0"
              style={{ display: "none", visibility: "hidden" }}
            />
          </noscript>
        ) : null}
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
