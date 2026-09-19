import BookButton from "@/components/BookButton";
import { site } from "@/lib/site";

export default function Offer() {
  return (
    <section className="offer section">
      <div className="offer__container container grid">
        <img src="/assets/img/offer-bg.png" alt="" className="offer__bg" />

        <div className="offer__data">
          <h2 className="section__title offer__title">
            Plan Your Ooty Holiday <br /> with Ooty Cabs
          </h2>

          <p className="offer__description">
            From a ₹1,500 onwards Ooty sightseeing cab to a premium Force
            Urbania, from a Coimbatore Airport transfer to a multi-day South
            India tour. Book your trip today!
            <a style={{display:'block', marginTop:'1rem', textAlign:'center'}} href={`tel:${site.phoneTel}`} className="inline-phone">
              {site.phoneDisplay}
            </a>
            .
          </p>

          <BookButton>Book Your Trip</BookButton>
        </div>

        <img
          src="/assets/img/offer.png"
          alt="Ooty taxi offer for sightseeing and transfers"
          className="offer__img"
        />
      </div>
    </section>
  );
}
