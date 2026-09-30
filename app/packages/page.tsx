import type { Metadata } from "next";
import InnerHero from "@/components/InnerHero";
import ContentTable from "@/components/ContentTable";
import PlaceList from "@/components/PlaceList";
import JsonLd from "@/components/JsonLd";
import {
  sharingTours,
  southIndiaDestinations,
  tariffNote,
} from "@/lib/site";
import { getBreadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Ooty Tour Packages & Acting Driver Service | Ooty Cabs",
  description:
    "Custom South India tour packages, sharing mini bus tours, tourist guides, and acting driver service in Ooty from ₹1,500/day. Call now to plan your holiday!",
  path: "/packages",
  keywords: [
    "ooty tour packages",
    "acting driver ooty",
    "south india tour from ooty",
    "ooty sharing sightseeing",
    "tourist guide ooty",
  ],
});

const packagesBreadcrumbs = getBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Packages & Extra Services", path: "/packages" },
]);

export default function PackagesPage() {
  return (
    <main className="main">
      <JsonLd data={packagesBreadcrumbs} />
      <InnerHero
        title="Packages & Extra Services"
        subtitle="South India tours, sharing sightseeing, driver and guide"
      />
      <section className="section">
        <div className="container page-body">
          <h2 className="page-h2">South India Tour Packages</h2>
          <p>
            Customized South India tour packages for families, couples, groups
            and corporate travellers. Itineraries can be planned according to
            your starting point, number of days, passengers, sightseeing
            interests and preferred vehicle.
          </p>
          <PlaceList
            title="Popular South India Destinations"
            places={southIndiaDestinations}
          />

          <h2 className="page-h2">Ooty Sharing Mini Bus Sightseeing</h2>
          <p>
            Affordable shared sightseeing tours from Ooty with pickup at Ooty
            Bus Stand. Advance booking is recommended. Entry tickets, boating,
            safari charges, parking and other personal expenses are not
            included unless specifically mentioned.
          </p>
          <ContentTable data={sharingTours} />

          <h2 className="page-h2">Acting Driver Service in Ooty</h2>
          <p>
            Customers travelling with their own vehicle can use our acting
            driver service for local and outstation journeys. Tariff: ₹1,500
            per day onwards. Useful for personal cars, family vehicles, local
            sightseeing, outstation journeys, hill-road driving and
            long-distance travel. Charges may vary depending on duration,
            distance, timing and overnight requirements.
          </p>

          <h2 className="page-h2">Tourist Guide Service in Ooty</h2>
          <p>
            A knowledgeable guide can make your sightseeing more informative by
            explaining local attractions, history, culture and natural
            surroundings. Useful for families, educational groups, corporate
            groups and first-time visitors.
          </p>
          <p className="tariff-note">{tariffNote}</p>
        </div>
      </section>
    </main>
  );
}
