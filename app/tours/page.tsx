import type { Metadata } from "next";
import Link from "next/link";
import InnerHero from "@/components/InnerHero";
import { tours } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ooty Sightseeing Tours",
  description:
    "Private Ooty cab tours for local sightseeing, Coonoor, Pykara, Avalanche and Mudumalai from Ketti, Nilgiris.",
  alternates: { canonical: "/tours" },
};

export default function ToursPage() {
  return (
    <main className="main">
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
