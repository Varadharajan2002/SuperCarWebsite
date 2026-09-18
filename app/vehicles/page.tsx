import type { Metadata } from "next";
import InnerHero from "@/components/InnerHero";
import BookButton from "@/components/BookButton";
import { vehicles } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ooty Cab Rental | Glanza, Innova, Tempo Traveller",
  description:
    "Hire Toyota Glanza, Swift, Innova, Swaraj Mazda Tempo Traveller and Force Urbania for Ooty sightseeing and South India tours.",
  alternates: { canonical: "/vehicles" },
};

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

export default function VehiclesPage() {
  return (
    <main className="main">
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
                <h1 className="featured__title">{car.brand}</h1>
                <h3 className="featured__subtitle">{car.name}</h3>
                <img
                  src={car.img}
                  alt={`${car.brand} ${car.name} for hire in Ooty`}
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
