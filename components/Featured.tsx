"use client";

import { useState } from "react";
import { featuredCars, filters } from "@/lib/data";

import BookingModal from "./BookingModal";

export default function Featured() {
  const [filter, setFilter] = useState<(typeof filters)[number]["id"]>("all");
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedCar, setSelectedCar] = useState("");

  const cars =
    filter === "all"
      ? featuredCars
      : featuredCars.filter((car) => car.brand === filter);

  const openBookingFor = (title: string, subtitle: string) => {
    setSelectedCar(`${title} ${subtitle}`);
    setBookingOpen(true);
  };

  return (
    <section className="featured section" id="featured">
      <h2 className="section__title">Book A Cab In Ooty</h2>
      <div className="featured__container container">
        <ul className="featured__filters">
          {filters.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className={`featured__item${filter === item.id ? " active-featured" : ""}`}
                onClick={() => setFilter(item.id)}
              >
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>

        <div className="featured__content grid">
          {cars.map((car) => (
            <article
              className={`featured__card mix ${car.brand}`}
              key={`${car.title}-${car.subtitle}`}
            >
              <div className="shapeX shape__smaller"></div>

              <h1 className="featured__title">{car.title}</h1>
              <h3 className="featured__subtitle">{car.subtitle}</h3>
              <img
                src={car.img}
                alt={`${car.title} ${car.subtitle} taxi for hire in Ooty`}
                className="featured__img"
              />
              <h3 className="featured__price">{car.price}</h3>
              <button
                className="button featured__button"
                type="button"
                onClick={() => openBookingFor(car.title, car.subtitle)}
                aria-label={`Book ${car.title} ${car.subtitle}`}
              >
                <i className="ri-taxi-line"></i>
              </button>
            </article>
          ))}
        </div>
      </div>

      <BookingModal
        isOpen={bookingOpen}
        onClose={() => setBookingOpen(false)}
        defaultCar={selectedCar}
      />
    </section>
  );
}