import type { Metadata } from "next";
import InnerHero from "@/components/InnerHero";
import ContentTable from "@/components/ContentTable";
import JsonLd from "@/components/JsonLd";
import { toyTrainTimings } from "@/lib/site";
import { getBreadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Ooty Toy Train Booking Assistance & Taxi | Ooty Cabs",
  description:
    "Nilgiri Mountain Railway Toy Train timings and booking assistance with connecting cab pickup and drop in Coonoor and Ooty. Plan your heritage ride today!",
  path: "/toy-train",
  keywords: [
    "ooty toy train",
    "ooty toy train booking",
    "nilgiri mountain railway taxi",
    "coonoor to ooty train cab",
  ],
});

const toyTrainBreadcrumbs = getBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Toy Train Ticket Assistance", path: "/toy-train" },
]);

export default function ToyTrainPage() {
  return (
    <main className="main">
      <JsonLd data={toyTrainBreadcrumbs} />
      <InnerHero
        title="Ooty Toy Train Ticket Assistance"
        subtitle="Nilgiri Mountain Railway with cab pickup and drop"
      />
      <section className="section">
        <div className="container page-body">
          <p>
            We can assist with Nilgiri Mountain Railway Toy Train ticket
            booking, subject to railway availability and applicable booking
            rules. The Coonoor–Ooty journey is famous for mountain scenery, tea
            plantations, forests and the historic railway route.
          </p>
          <ContentTable data={toyTrainTimings} />
          <p className="tariff-note">
            These are approximate timings for planning only. Train timings,
            operating services and availability can change. Confirm the railway
            timetable for your travel date. We can coordinate taxi pickup,
            sightseeing and drop around the Toy Train journey.
          </p>
        </div>
      </section>
    </main>
  );
}
