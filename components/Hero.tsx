"use client";

import { useState } from "react";
import { videos } from "@/lib/data";
import { site } from "@/lib/site";
import { useBooking } from "@/components/BookingContext";

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const { openBooking } = useBooking();

  return (
    <>
      <section className="home section" id="home">
        <div className="shapeX shape__big"></div>
        <div className="shapeX shape__small"></div>

        <div className="home__container container grid">
          <div className="home__data">
            <h1 className="home__title">Ooty Cab & Taxi Tours</h1>
            <h2 className="home__subtitle">Toyota Glanza</h2>
            <h3 className="home__elec">
              <i className="ri-map-pin-2-fill"></i>
              KETTI • OOTY • NILGIRIS
            </h3>
          </div>

          <img
            src="/assets/img/home5.png"
            alt="Toyota Glanza taxi for Ooty sightseeing and Nilgiris cab booking"
            className="home__img"
          />
          <div className="home__car">
            <div className="home__car-data">
              <div className="home__car-icon">
                <i className="ri-user-line"></i>
              </div>
              <h2 className="home__car-number">4</h2>
              <h3 className="home__car-name">Seater sedan</h3>
            </div>

            <div className="home__car-data">
              <div className="home__car-icon">
                <i className="ri-time-line"></i>
              </div>
              <h2 className="home__car-number">8h</h2>
              <h3 className="home__car-name">Local tours</h3>
            </div>
            <div className="home__car-data">
              <div className="home__car-icon">
                <i className="ri-money-rupee-circle-line"></i>
              </div>
              <h2 className="home__car-number">₹2500</h2>
              <h3 className="home__car-name">From onwards</h3>
            </div>
          </div>

          <button type="button" className="home__button" onClick={openBooking}>
            BOOK NOW
          </button>

          <div className="slider__bg">
            {videos.map((_, i) => (
              <div
                key={i}
                className={`slider__bg-navBtn${activeSlide === i ? " active" : ""}`}
                onClick={() => setActiveSlide(i)}
              ></div>
            ))}
          </div>
        </div>
        <div className="home__social">
          <a href={site.whatsapp} className="home__social-icon" target="_blank" rel="noreferrer">
            <i className="ri-whatsapp-fill"></i>
          </a>
          <a href={`tel:${site.phoneTel}`} className="home__social-icon">
            <i className="ri-phone-fill"></i>
          </a>
          <a href={`mailto:${site.email}`} className="home__social-icon">
            <i className="ri-mail-fill"></i>
          </a>
        </div>
      </section>

      <section className="gallery section">
        <div className="gallery__container container grid">
          {videos.map((src, i) => (
            <video
              key={src}
              className={`video__slide${activeSlide === i ? " active" : ""}`}
              src={src}
              autoPlay
              muted
              loop
              playsInline
            />
          ))}
        </div>
      </section>
    </>
  );
}
