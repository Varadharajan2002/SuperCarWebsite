export default function About() {
  return (
    <section className="about section" id="about">
      <div className="about__container container grid">
        <div className="about__group">
          <img
            src="https://commons.wikimedia.org/wiki/Special:FilePath/Toyota%20Innova%20Crysta%202.4%20Z%20front%20right.jpg?width=700"
            alt="Toyota Innova Crysta taxi used for Ooty and Nilgiris outstation trips"
            className="about__img"
          />

          <div className="about__card">
            <h3 className="about__card-title">1000+</h3>
            <p className="about__card-description">
              Happy customers driven safely across Ooty &amp; the Nilgiris
            </p>
          </div>
        </div>

        <div className="about__data">
          <h2 className="section__title about__title">
            Your Ride Through <br /> The Nilgiri Hills
          </h2>
          <p className="about__description">
            We&apos;re a local Ooty-based cab and car rental service running
            Toyota Glanza, Innova Crysta, Swift Dzire and Swaraj Mazda Tempo
            Travellers for sightseeing, airport drops, and outstation trips
            across Ooty, Coonoor, Kotagiri, Mudumalai and Coimbatore. Clean
            cars, verified local drivers, and fair per-km pricing.
          </p>

          <a href="#featured" className="button">
            View Our Fleet
          </a>
        </div>
      </div>
    </section>
  );
}