"use client";

import { useState } from "react";
import { featuredCars } from "@/lib/data";

const filters = [
  { id: "all", label: "All" },
  { id: "tesla", img: "/assets/img/logo3.png", alt: "Tesla" },
  { id: "audi", img: "/assets/img/logo2.png", alt: "Audi" },
  { id: "porsche", img: "/assets/img/logo1.png", alt: "Porsche" },
] as const;

export default function Featured() {
  const [filter, setFilter] = useState<(typeof filters)[number]["id"]>("all");

  const cars =
    filter === "all"
      ? featuredCars
      : featuredCars.filter((car) => car.brand === filter);

  return (
    <section className="featured section" id="featured">
      <h2 className="section__title">Featured Luxury Cars</h2>
      <div className="featured__container container">
        <ul className="featured__filters">
          {filters.map((item) => (
            <li key={item.id}>
              <button
                type="button"
                className={`featured__item${filter === item.id ? " active-featured" : ""}`}
                onClick={() => setFilter(item.id)}
              >
                {"label" in item ? (
                  <span>{item.label}</span>
                ) : (
                  <img src={item.img} alt={item.alt} />
                )}
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
                alt={`${car.title} ${car.subtitle}`}
                className="featured__img"
              />
              <h3 className="featured__price">{car.price}</h3>
              <button className="button featured__button" type="button">
                <i className="ri-shopping-bag-2-line"></i>
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
