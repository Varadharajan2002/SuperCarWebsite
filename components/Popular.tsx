import ContentTable from "@/components/ContentTable";
import { ootySightseeingTariff, tariffNote } from "@/lib/site";

export default function Popular() {
  return (
    <section className="popular section" id="popular">
      <h2 className="section__title">
        Toyota Glanza rides <br /> across the Nilgiris
      </h2>

      <div className="popular__container container">
        <video
          src="/assets/video/glanza.mp4"
          autoPlay
          muted
          loop
          playsInline
          className="popular__video"
        />
      </div>

      <div className="container tariff-home">
        <ContentTable data={ootySightseeingTariff} />
        <p className="tariff-note">{tariffNote}</p>
      </div>
    </section>
  );
}
