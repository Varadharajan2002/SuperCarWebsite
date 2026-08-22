"use client";

import { useState } from "react";
import { videos } from "@/lib/data";

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  return (
    <>
      <section className="home section" id="home">
        <div className="shapeX shape__big"></div>
        <div className="shapeX shape__small"></div>

        <div className="home__container container grid">
          <div className="home__data">
            <h1 className="home__title">Pick Your Best Car</h1>
            <h2 className="home__subtitle">Ferrari 458</h2>
            <h3 className="home__elec">
              <i className="ri-flashlight-fill"></i>
              RELENTLESS FORCE
            </h3>
          </div>

          <img
            src="/assets/img/home5.png"
            alt="Ferrari 458"
            className="home__img"
          />
          <div className="home__car">
            <div className="home__car-data">
              <div className="home__car-icon">
                <i className="ri-temp-cold-line"></i>
              </div>
              <h2 className="home__car-number">3.0s</h2>
              <h3 className="home__car-name">0-100 km/h</h3>
            </div>

            <div className="home__car-data">
              <div className="home__car-icon">
                <i className="ri-dashboard-2-line"></i>
              </div>
              <h2 className="home__car-number">419</h2>
              <h3 className="home__car-name">POWER (KW)</h3>
            </div>
            <div className="home__car-data">
              <div className="home__car-icon">
                <i className="ri-flashlight-fill"></i>
              </div>
              <h2 className="home__car-number">325 km/h</h2>
              <h3 className="home__car-name">MAX. SPEED</h3>
            </div>
          </div>

          <a href="#about" className="home__button">
            START
          </a>

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
            <i className="ri-twitter-fill"></i>
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
