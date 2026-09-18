import BookButton from "@/components/BookButton";

export default function InnerHero({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <section className="inner-hero section" id="home">
      <div className="shapeX shape__big"></div>
      <div className="shapeX shape__small"></div>
      <div className="container inner-hero__box">
        <p className="inner-hero__eyebrow">Ooty Cabs • Nilgiris</p>
        <h1 className="inner-hero__title">{title}</h1>
        <p className="inner-hero__text">{subtitle}</p>
        <BookButton className="button">Book Now</BookButton>
      </div>
    </section>
  );
}
