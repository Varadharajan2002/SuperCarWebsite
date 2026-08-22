"use client";

import { useState } from "react";
import { videos } from "@/lib/data";
import BookingModal from "./BookingModal";

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [bookingOpen, setBookingOpen] = useState(false);

  return (
    <>
      <section className="home section" id="home">
        <div className="shapeX shape__big"></div>
        <div className="shapeX shape__small"></div>

        <div className="home__container container grid">
          <div className="home__data">
            <h1 className="home__title">Ooty&apos;s Trusted Cab Service</h1>
            <h2 className="home__subtitle">Toyota Glanza</h2>
            <h3 className="home__elec">
              <i className="ri-map-pin-2-fill"></i>
              LOCAL &amp; OUTSTATION TAXI, NILGIRIS
            </h3>
          </div>

          <img
            src="https://commons.wikimedia.org/wiki/Special:FilePath/Toyota%20Glanza%20(front).jpg?width=800"
            alt="Toyota Glanza cab available for booking in Ooty, Nilgiris"
            className="home__img"
          />
          <div className="home__car">
            <div className="home__car-data">
              <div className="home__car-icon">
                <i className="ri-time-line"></i>
              </div>
              <h2 className="home__car-number">10+ Yrs</h2>
              <h3 className="home__car-name">Experience</h3>
            </div>

            <div className="home__car-data">
              <div className="home__car-icon">
                <i className="ri-road-map-line"></i>
              </div>
              <h2 className="home__car-number">5000+</h2>
              <h3 className="home__car-name">Trips Completed</h3>
            </div>
            <div className="home__car-data">
              <div className="home__car-icon">
                <i className="ri-customer-service-2-line"></i>
              </div>
              <h2 className="home__car-number">24/7</h2>
              <h3 className="home__car-name">Available</h3>
            </div>
          </div>

          <button
            type="button"
            className="home__button"
            onClick={() => setBookingOpen(true)}
          >
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
          <a href="#" className="home__social-icon">
            <i className="ri-facebook-fill"></i>
          </a>
          <a href="#" className="home__social-icon">
            <i className="ri-instagram-fill"></i>
          </a>
          <a href="#" className="home__social-icon">
            <i className="ri-whatsapp-fill"></i>
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

      <BookingModal isOpen={bookingOpen} onClose={() => setBookingOpen(false)} />
    </>
  );
}