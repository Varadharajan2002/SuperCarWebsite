export default function Features() {
  return (
    <section className="features section">
      <h2 className="section__title">Why Ride With Us</h2>

      <div className="features__container container grid">
        <div className="features__group">
          <img
            src="https://commons.wikimedia.org/wiki/Special:FilePath/Maruti%20Suzuki%20Dzire%20VXi%20VVT.JPG?width=700"
            alt="Maruti Suzuki Swift Dzire taxi covering Nilgiri hills routes"
            className="features__img"
          />

          <div className="features__card features__card-1">
            <h3 className="features__card-title">24/7</h3>
            <p className="features__card-description">
              Cab <br /> Availability
            </p>
          </div>

          <div className="features__card features__card-2">
            <h3 className="features__card-title">10+</h3>
            <p className="features__card-description">
              Years <br /> Experience
            </p>
          </div>
          <div className="features__card features__card-3">
            <h3 className="features__card-title">50+</h3>
            <p className="features__card-description">
              Nilgiris <br /> Destinations
            </p>
          </div>
        </div>
      </div>

      <img src="/assets/img/map.svg" alt="" className="features__map" />
    </section>
  );
}