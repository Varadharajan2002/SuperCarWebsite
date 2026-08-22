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
            <i className="ri-taxi-line"></i>
            Ooty Cabs
          </a>
          <p className="footer__description">
            Local &amp; outstation taxi service <br />
            based in Ketti, Ooty — covering <br />
            the entire Nilgiris district.
          </p>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Company</h3>

          <ul className="footer__links">
            <li>
              <a href="#about" className="footer__links">
                About Us
              </a>
            </li>
            <li>
              <a href="#popular" className="footer__links">
                Our Fleet
              </a>
            </li>
            <li>
              <a href="#featured" className="footer__links">
                Book A Cab
              </a>
            </li>
            <li>
              <a href="#offer" className="footer__links">
                Offers
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Contact Us</h3>
          <ul className="footer__links">
            <li>
              <i className="ri-map-pin-2-line"></i>{" "}
              Nivesh, Ketti, Ooty, Tamil Nadu 643215
            </li>
            <li>
              <a href="tel:+918489322556" className="footer__links">
                <i className="ri-phone-line"></i> +91 84893 22556
              </a>
            </li>
            <li>
              <a
                href="mailto:varadharajan025@gmail.com"
                className="footer__links"
              >
                <i className="ri-mail-line"></i> varadharajan025@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__content">
          <h3 className="footer__title"> Follow us </h3>

          <ul className="footer__social">
            <a href="" target="_blank" className="footer__social-link" rel="noreferrer">
              <i className="ri-facebook-fill"></i>
            </a>
            <a href="" target="_blank" className="footer__social-link" rel="noreferrer">
              <i className="ri-instagram-line"></i>
            </a>
            <a
              href="https://wa.me/918489322556"
              target="_blank"
              className="footer__social-link"
              rel="noreferrer"
            >
              <i className="ri-whatsapp-line"></i>
            </a>
          </ul>
        </div>
      </div>
      <span className="footer__copy">
        &#169; Ooty Cabs. All rights reserved.
        <p id="date">{date}</p>
      </span>
    </footer>
  );
}