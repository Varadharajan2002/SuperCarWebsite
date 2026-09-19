import Link from "next/link";

export default function Features() {
  return (
    <section className="features section" id="services">
      <h2 style={{paddingBottom:'2rem' }} className="section__title">Our Main Travel Services</h2>
      <div className="features__container container grid">
        <div className="features__group">
          <img
            src="/assets/img/home5.png"
            alt="Ooty Cabs hill station travel services"
            className="features__img"
          />

          <div className="features__card features__card-1">
            <h3 className="features__card-title">24/7</h3>
            <p className="features__card-description">
              Booking <br /> Support 
            </p>
          </div>

          <div className="features__card features__card-3">
            <h3 className="features__card-title">Fleet</h3>
            <p className="features__card-description">
              Sedan to <br /> Urbania
            </p>
          </div>
        </div>
      </div>

      <img src="/assets/img/map.svg" alt="" className="features__map" />
    </section>
  );
}
