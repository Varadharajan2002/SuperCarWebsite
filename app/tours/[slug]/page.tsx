import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InnerHero from "@/components/InnerHero";
import PlaceList from "@/components/PlaceList";
import ContentTable from "@/components/ContentTable";
import { tours, tariffNote } from "@/lib/site";
import { pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return tours.map((tour) => ({ slug: tour.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tour = tours.find((item) => item.slug === slug);
  if (!tour) return { title: "Tour" };
  return pageMetadata({
    title: tour.title,
    description: tour.description[0],
    path: `/tours/${slug}`,
    keywords: [`${tour.title} cab`, `${tour.title} taxi ooty`],
  });
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

          <p className="tariff-note">{tariffNote}</p>
        </div>
      </section>
    </main>
  );
}
