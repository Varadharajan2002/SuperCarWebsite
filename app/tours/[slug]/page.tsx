import type { Metadata } from "next";
import { notFound } from "next/navigation";
import InnerHero from "@/components/InnerHero";
import PlaceList from "@/components/PlaceList";
import JsonLd from "@/components/JsonLd";
import { tours, tariffNote } from "@/lib/site";
import { getBreadcrumbSchema, getTourSchema, pageMetadata } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return tours.map((tour) => ({ slug: tour.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const tour = tours.find((item) => item.slug === slug);
  if (!tour) return { title: "Tour | Ooty Cabs" };

  return pageMetadata({
    title: tour.seoTitle,
    description: tour.seoDescription,
    path: `/tours/${slug}`,
    keywords: [
      `${tour.title.toLowerCase()} cab`,
      `${tour.slug} taxi ooty`,
      "ooty sightseeing taxi",
      "ooty cabs",
    ],
  });
}

export default async function TourDetailPage({ params }: Props) {
  const { slug } = await params;
  const tour = tours.find((item) => item.slug === slug);
  if (!tour) notFound();

  const breadcrumbs = getBreadcrumbSchema([
    { name: "Home", path: "/" },
    { name: "Ooty Sightseeing Tours", path: "/tours" },
    { name: tour.title, path: `/tours/${slug}` },
  ]);

  const tourSchema = getTourSchema(tour);

  return (
    <main className="main">
      <JsonLd data={[breadcrumbs, tourSchema]} />
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
