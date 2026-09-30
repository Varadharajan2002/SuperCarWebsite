import type { Metadata } from "next";
import Link from "next/link";
import InnerHero from "@/components/InnerHero";
import JsonLd from "@/components/JsonLd";
import { tours } from "@/lib/site";
import { getBreadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Ooty Sightseeing Cabs & Day Tour Packages | Ooty Cabs",
  description:
    "Explore Ooty sightseeing tours, Coonoor, Pykara & Mudumalai in comfortable private cabs. View starting tariffs and custom packages. Book your Ooty tour now!",
  path: "/tours",
  keywords: [
    "ooty sightseeing cabs",
    "ooty tour package taxi",
    "ooty local sightseeing cab",
    "ooty day tour cab",
    "sightseeing in ooty",
  ],
});

const toursBreadcrumbs = getBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Ooty Sightseeing Tours", path: "/tours" },
]);

export default function ToursPage() {
  return (
    <main className="main">
      <JsonLd data={toursBreadcrumbs} />
      <InnerHero
        title="Ooty Cab & Taxi Tour Packages"
        subtitle="Private cabs for local sightseeing, one-way journeys and round-trip tours"
      />
      <section className="section">
        <div className="container page-body">
          <p>
            Ooty Cabs provides private cab services for local sightseeing,
            airport transfers, railway station transfers, one-way journeys and
            round-trip tours. Choose a route below for places to visit and
            starting tariffs.
          </p>
          <div className="tour-cards">
            {tours.map((tour) => (
              <Link key={tour.slug} href={`/tours/${tour.slug}`} className="tour-card">
                <h2>{tour.title}</h2>
                <p>{tour.subtitle}</p>
                <span>View details</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
