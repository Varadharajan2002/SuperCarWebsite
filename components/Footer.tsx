import Link from "next/link";
import { site } from "@/lib/site";
import BookButton from "@/components/BookButton";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer section">
      <div className="shapeX shape__big"></div>
      <div className="shapeX shape__small"></div>

      <div className="footer__container container grid">
        <div className="footer__content">
          <Link href="/" className="footer__logo">
            <i className="ri-steering-line"></i>
            {site.name}
          </Link>
          <p className="footer__description">
            Private cabs for Ooty sightseeing, airport
            <br />
            transfers and Nilgiris tours from Ketti.
          </p>
          <p className="footer__address">{site.addressLine}</p>
          <a href={`tel:${site.phoneTel}`} className="footer-phone">
            <i className="ri-phone-fill"></i>
            {site.phoneDisplay}
          </a>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Tours</h3>
          <ul className="footer__links">
            <li>
              <Link href="/tours/ooty" className="footer__links">
                Ooty Sightseeing
              </Link>
            </li>
            <li>
              <Link href="/tours/coonoor" className="footer__links">
                Coonoor
              </Link>
            </li>
            <li>
              <Link href="/tours/pykara" className="footer__links">
                Pykara
              </Link>
            </li>
            <li>
              <Link href="/tours/mudumalai" className="footer__links">
                Mudumalai
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Travel</h3>
          <ul className="footer__links">
            <li>
              <Link href="/transfers" className="footer__links">
                Airport & Railway
              </Link>
            </li>
            <li>
              <Link href="/vehicles" className="footer__links">
                Cab rental
              </Link>
            </li>
            <li>
              <Link href="/toy-train" className="footer__links">
                Toy Train
              </Link>
            </li>
            <li>
              <Link href="/packages" className="footer__links">
                South India packages
              </Link>
            </li>
            <li>
              <BookButton className="footer__links footer__book">Book Now</BookButton>
            </li>
          </ul>
        </div>

        <div className="footer__content">
          <h3 className="footer__title">Contact</h3>
          <ul className="footer__social">
            <a href={site.whatsapp} target="_blank" className="footer__social-link" rel="noreferrer">
              <i className="ri-whatsapp-line"></i>
            </a>
            <a href={`tel:${site.phoneTel}`} className="footer__social-link">
              <i className="ri-phone-line"></i>
            </a>
            <a href={`mailto:${site.email}`} className="footer__social-link">
              <i className="ri-mail-line"></i>
            </a>
          </ul>
        </div>
      </div>

      <span className="footer__copy">
        © {year} {site.name} • {site.addressLine}. All rights reserved.
      </span>
    </footer>
  );
}
