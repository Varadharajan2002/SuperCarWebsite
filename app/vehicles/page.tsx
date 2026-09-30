import type { Metadata } from "next";
import InnerHero from "@/components/InnerHero";
import BookButton from "@/components/BookButton";
import JsonLd from "@/components/JsonLd";
import { vehicles } from "@/lib/site";
import {
  getBreadcrumbSchema,
  getRentalCarsItemListSchema,
  pageMetadata,
} from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Car Rental in Ooty – Glanza, Innova & Tempo | Ooty Cabs",
  description:
    "Rent cars in Ooty for self-drive, sightseeing, and outstation trips. Toyota Glanza, Innova Crysta, and Tempo Travellers at best rates. Book your cab now!",
  path: "/vehicles",
  keywords: [
    "car rental in ooty",
    "self drive cars ooty",
    "ooty cab rental",
    "innova hire ooty",
    "tempo traveller rental ooty",
    "glanza taxi ooty",
    "used cars in ooty",
  ],
});

const extras = [
  {
    title: "Sedan Cars",
    text: "Maruti Suzuki Dzire is a practical and economical sedan for couples and small families. Toyota Etios is a comfortable sedan for local sightseeing and outstation journeys. Toyota Glanza is a modern compact vehicle suitable for couples and small families.",
  },
  {
    title: "SUV & Premium Cars",
    text: "Toyota Innova is a spacious option for families and small groups. Innova Crysta is a premium SUV for sightseeing and longer journeys. Innova Hycross is a modern premium vehicle for extra comfort.",
  },
  {
    title: "Tempo Traveller Rental in Ooty",
    text: "12, 14, 16 and 18 seater Tempo Travellers for families, friends, corporate teams and large tour groups. Suitable for local sightseeing, airport transfers, weddings and multi-day South India tours.",
  },
  {
    title: "Force Urbania Rental",
    text: "Premium group travel for Ooty sightseeing, Coonoor, Coimbatore Airport, Mettupalayam, Bangalore, Mysore, Kerala and South India tours. Availability and tariff depend on travel date and itinerary.",
  },
];

const vehicleBreadcrumbs = getBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Car Rental in Ooty", path: "/vehicles" },
]);

const rentalCarsSchema = getRentalCarsItemListSchema();

export default function VehiclesPage() {
  return (
    <main className="main">
      <JsonLd data={[vehicleBreadcrumbs, rentalCarsSchema]} />
      <InnerHero
        title="Cab & Vehicle Rental Options"
        subtitle="Sedans, SUVs, Tempo Travellers and Force Urbania"
      />
      <section className="section">
        <div className="container page-body">
          <div className="featured__content grid vehicle-grid">
            {vehicles.map((car) => (
              <article className="featured__card" key={car.id}>
                <div className="shapeX shape__smaller"></div>
                <h3 className="featured__title">{car.brand}</h3>
                <h3 className="featured__subtitle">{car.name}</h3>
                <img
                  src={car.img}
                  alt={car.alt}
                  width={car.width}
                  height={car.height}
                  loading="lazy"
                  className="featured__img"
                />
                <h3 className="featured__price">{car.seats}</h3>
                <p className="vehicle-note">{car.note}</p>
              </article>
            ))}
          </div>
          {extras.map((item) => (
            <div key={item.title}>
              <h2 className="page-h2">{item.title}</h2>
              <p>{item.text}</p>
            </div>
          ))}
          <BookButton>Book a vehicle</BookButton>
        </div>
      </section>
    </main>
  );
}
