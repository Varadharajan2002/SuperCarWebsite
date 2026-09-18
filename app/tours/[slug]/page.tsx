import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InnerHero from "@/components/InnerHero";
import PlaceList from "@/components/PlaceList";
import ContentTable from "@/components/ContentTable";
import {
  tours,
  ootySightseeingTariff,
  coonoorDropFare,
  coonoorRouteTable,
  tariffNote,
} from "@/lib/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return tours.map((tour) => ({ slug: tour.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tour = tours.find((item) => item.slug === slug);
  if (!tour) return { title: "Tour" };
  return {
    title: `${tour.title} | Ooty Taxi`,
    description: tour.description[0],
    alternates: { canonical: `/tours/${slug}` },
  };
}

export default async function TourDetailPage({ params }: Props) {
  const { slug } = await params;
  const tour = tours.find((item) => item.slug === slug);
  if (!tour) notFound();

  return (
    <main className="main">
      <InnerHero title={tour.title} subtitle={tour.subtitle} />
      <section className="section">
        <div className="container page-body">
          {tour.description.map((para) => (
            <p key={para.slice(0, 40)}>{para}</p>
          ))}
          <PlaceList title={tour.placesTitle} places={tour.places} />
          {slug === "ooty" && <ContentTable data={ootySightseeingTariff} />}
          {slug === "coonoor" && (
            <>
              <ContentTable data={coonoorDropFare} />
              <ContentTable data={coonoorRouteTable} />
            </>
          )}
          <p className="tariff-note">{tariffNote}</p>
        </div>
      </section>
    </main>
  );
}
