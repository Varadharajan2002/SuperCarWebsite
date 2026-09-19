"use client";

import Link from "next/link";
import { vehicles } from "@/lib/site";
import { useBooking } from "@/components/BookingContext";

export default function Featured() {
  const { openBooking } = useBooking();

  return (
    <section className="featured section" id="featured">
      <h2 className="section__title">Cab & Vehicle Rental Options</h2>
      <p className="section-lead">
        Glanza, Swift, Innova and group vans for Ooty tours
      </p>
      <div className="featured__container container">
        <div className="featured__content grid">
          {vehicles.map((car) => (
            <article className={`featured__card mix ${car.id}`} key={car.id}>
              <div className="shapeX shape__smaller"></div>

              <h1 className="featured__title">{car.brand}</h1>
              <h3 className="featured__subtitle">{car.name}</h3>
              <img
                src={car.img}
                alt={`${car.brand} ${car.name} cab rental in Ooty`}
                className="featured__img"
              />
              <h3 className="featured__price">{car.seats}</h3>
              <button
                className="button featured__button"
                type="button"
                onClick={openBooking}
              >
                <i className="ri-calendar-check-line"></i>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
