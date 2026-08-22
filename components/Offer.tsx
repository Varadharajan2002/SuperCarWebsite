export default function Offer() {
  return (
    <section className="offer section">
      <div className="offer__container container grid">
        <img src="/assets/img/offer-bg.png" alt="" className="offer__bg" />

        <div className="offer__data">
          <h2 className="section__title offer__title">
            Do You Want To Receive <br /> Special Offers?
          </h2>

          <p className="offer__description">
            Be the first to receive all the information about our products and
            new cars by email by subscribing to our mailing list.
          </p>

          <a href="#" className="button">
            Subscribe Now
          </a>
        </div>

        <img src="/assets/img/offer.png" alt="Special offer" className="offer__img" />
      </div>
    </section>
  );
}
