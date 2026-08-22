export default function Offer() {
  return (
    <section className="offer section" id="offer">
      <div className="offer__container container grid">
        <img
          src="https://placehold.co/1200x600/0f0f1a/1a1a2e?text=+"
          alt=""
          className="offer__bg"
        />

        <div className="offer__data">
          <h2 className="section__title offer__title">
            Get Special Offers On <br /> Your Ooty Cab Booking
          </h2>

          <p className="offer__description">
            Be the first to know about discounted Ooty sightseeing packages,
            Coonoor &amp; Kotagiri tour combos, and off-season fares.
            Subscribe to our updates.
          </p>

          <a href="#featured" className="button">
            Book Now
          </a>
        </div>

        <img
          src="https://commons.wikimedia.org/wiki/Special:FilePath/Toyota%20Glanza%202022%20Facelift.jpg?width=500"
          alt="Toyota Glanza taxi offer for Ooty tour packages"
          className="offer__img"
        />
      </div>
    </section>
  );
}