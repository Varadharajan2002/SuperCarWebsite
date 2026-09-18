import type { Metadata } from "next";
import InnerHero from "@/components/InnerHero";
import ContentTable from "@/components/ContentTable";
import { toyTrainTimings } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ooty Toy Train Ticket Assistance",
  description:
    "Nilgiri Mountain Railway Coonoor to Ooty toy train timings and taxi pickup around your train journey.",
  alternates: { canonical: "/toy-train" },
};

export default function ToyTrainPage() {
  return (
    <main className="main">
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
