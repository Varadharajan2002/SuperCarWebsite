"use client";

import { useEffect, useState } from "react";

export default function Footer() {
  const [date, setDate] = useState("");

  useEffect(() => {
    setDate(new Date().toString());
  }, []);

  return (
    <footer className="footer section">
      <div className="shapeX shape__big"></div>
      <div className="shapeX shape__small"></div>

      <div className="footer__container container grid">
        <div className="footer__content">
          <a href="#home" className="footer__logo">
            <i className="ri-steering-line"></i>
            NextCar
          </a>
          <p className="footer__description">
            We offer the best cars of <br />
            the most recognized brands in <br />
            the world.
          </p>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Company </h3>

          <ul className="footer__links">
            <li>
              <a href="#about" className="footer__links">
                About
              </a>
            </li>
            <li>
              <a href="#popular" className="footer__links">
                Cars
              </a>
            </li>
            <li>
              <a href="#" className="footer__links">
                History
              </a>
            </li>
            <li>
              <a href="#featured" className="footer__links">
                Shop
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Information </h3>
          <ul className="footer__links">
            <li>
              <a href="#" className="footer__links">
                Request a quote
              </a>
            </li>
            <li>
              <a href="#" className="footer__links">
                Find a dealer
              </a>
            </li>
            <li>
              <a href="#" className="footer__links">
                Contact us
              </a>
            </li>
            <li>
              <a href="#" className="footer__links">
                Services
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__content">
          <h3 className="footer__title"> Follow us </h3>

          <ul className="footer__social">
            <a href="" target="_blank" className="footer__social-link">
              <i className="ri-facebook-fill"></i>
            </a>
            <a href="" target="_blank" className="footer__social-link">
              <i className="ri-instagram-line"></i>
            </a>
            <a href="" target="_blank" className="footer__social-link">
              <i className="ri-twitter-line"></i>
            </a>
          </ul>
        </div>
      </div>
      <span className="footer__copy">
        &#169;{" "}
        <a
          target="_blank"
          href="https://abdullahmoin.web.app"
          className="footer__dev-link"
          rel="noreferrer"
        >
          abdullah-moin.
        </a>{" "}
        All rigths reserved
        <p id="date">{date}</p>
      </span>
    </footer>
  );
}
