import type { Metadata } from "next";
import InnerHero from "@/components/InnerHero";
import PlaceList from "@/components/PlaceList";

export const metadata: Metadata = {
  title: "Ooty Hotel Booking & Homestays",
  description:
    "Help with Ooty hotel booking, homestays, cottages, food and group accommodation from budget to luxury stays.",
  alternates: { canonical: "/hotels" },
};

export default function HotelsPage() {
  return (
    <main className="main">
      <InnerHero
        title="Ooty Hotel Booking & Accommodation"
        subtitle="Hotels, homestays, cottages and food assistance"
      />
      <section className="section">
        <div className="container page-body">
          <p>
            Ooty Cabs can assist with hotel bookings, homestays, cottages, food
            and accommodation according to budget and requirements. Share travel
            dates, number of people and preferred budget.
          </p>
          <PlaceList
            title="Budget Hotels & Economy Accommodation"
            places={[
              "Hotel Maneck",
              "Hotel Tamilnadu Ooty",
              "Rainbow Cottages",
              "Hotel Mayura Sudarshan",
            ]}
          />
          <PlaceList
            title="Mid-Range & Comfortable Hotels"
            places={[
              "Hotel Lakeview",
              "Sterling Ooty – Fern Hill",
              "West Downs – The Heritage Resort",
              "Fortune Resort Sullivan Court",
            ]}
          />
          <PlaceList
            title="Luxury Hotels in Ooty"
            places={[
              "Savoy, Ooty – IHCL SeleQtions",
              "Accord Highland Ooty",
              "WelcomHeritage Fernhills Royal Palace",
            ]}
          />
          <h2 className="page-h2">Homestays & Cottages</h2>
          <p>
            Homestays and cottages are suitable for families and groups looking
            for a quieter and more private stay. For group tours we can assist
            with rooms, cottages, food, check-in planning and sightseeing
            transport.
          </p>
          <p className="tariff-note">
            Hotel names are examples. Room availability, tariffs, facilities
            and seasonal rates can change according to travel date, weekends,
            holidays and demand.
          </p>
        </div>
      </section>
    </main>
  );
}
