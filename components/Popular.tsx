"use client";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { popularCars } from "@/lib/data";

import "swiper/css";
import "swiper/css/pagination";

export default function Popular() {
  return (
    <section className="popular section" id="popular">
      <h2 className="section__title">
        Choose Your Electric Car <br /> of Porshche Brand
      </h2>
      <Swiper
        className="popular__container container"
        modules={[Pagination]}
        loop
        spaceBetween={24}
        slidesPerView="auto"
        grabCursor
        pagination={{ clickable: true, dynamicBullets: true }}
        breakpoints={{
          768: { slidesPerView: 3 },
          1024: { spaceBetween: 48 },
        }}
      >
        {popularCars.map((car) => (
          <SwiperSlide key={car.subtitle} className="popular__card">
            <div className="shapeX shape__smaller"></div>

            <h1 className="popular__title">{car.title}</h1>
            <h3 className="popular__subtitle">{car.subtitle}</h3>

            <img src={car.img} alt={`${car.title} ${car.subtitle}`} className="popular__img" />

            <div className="popular__data">
              <div className="popular__data-group">
                <i className="ri-dashboard-2-line"></i> 3.7 sec
              </div>
              <div className="popular__data-group">
                <i className="ri-exchange-funds-line"></i> 356 Km/h
              </div>
              <div className="popular__data-group">
                <i className="ri-charging-pile-2-line"></i> Electric
              </div>
            </div>

            <h3 className="popular__price">{car.price}</h3>
            <button className="button popular__button" type="button">
              <i className="ri-shopping-bag-2-line"></i>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
