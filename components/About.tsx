import BookButton from "@/components/BookButton";
import { site } from "@/lib/site";

export default function About() {
  return (
    <section className="about section" id="about">
      <div className="about__container container grid">
        <div className="about__group">
          <img
            src="/assets/img/glanza-interior-steering-wheel.avif"
            alt="Toyota Glanza interior for comfortable Ooty hill journeys"
            className="about__img"
          />

          <div className="about__card">
            <h3 className="about__card-title">Local</h3>
            <p className="about__card-description">
              Private cabs from Ketti, Ooty for Nilgiris travel
            </p>
          </div>
        </div>

        <div className="about__data">
          <h2 className="section__title about__title">
            Your journey with <br /> greater convenience
          </h2>
          <p className="about__description">
            Ooty Cabs provides private cab services for local sightseeing,
            airport transfers, railway station transfers, one-way journeys and
            round-trip tours. Our vehicles are suitable for couples, families
            and small groups. For larger groups, Tempo Travellers and Force
            Urbania vehicles are available according to requirement and
            availability.
          </p>

          <BookButton>Book Your Trip</BookButton>
        </div>
      </div>
    </section>
  );
}
