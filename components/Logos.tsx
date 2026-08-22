import { logos } from "@/lib/data";

export default function Logos() {
  return (
    <section className="logos section">
      <div className="logos__container container grid">
        {logos.map((src) => (
          <div className="logos__content" key={src}>
            <img src={src} alt="Brand logo" className="logos__img" />
          </div>
        ))}
      </div>
    </section>
  );
}
