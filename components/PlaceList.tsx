export default function PlaceList({
  title,
  places,
}: {
  title: string;
  places: string[];
}) {
  return (
    <div className="place-block">
      <h2 className="page-h2">{title}</h2>
      <ul className="place-list">
        {places.map((place) => (
          <li key={place}>{place}</li>
        ))}
      </ul>
    </div>
  );
}
