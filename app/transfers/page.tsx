import type { Metadata } from "next";
import InnerHero from "@/components/InnerHero";
import ContentTable from "@/components/ContentTable";
import {
  mettupalayamDropFare,
  coimbatoreFare,
  tariffNote,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Ooty Airport & Railway Transfers",
  description:
    "Taxi from Coimbatore Airport, Mettupalayam railway, Mysore and Bangalore to Ooty. 4, 7, 12 and 18 seater cabs from Ketti.",
  alternates: { canonical: "/transfers" },
};

export default function TransfersPage() {
  return (
    <main className="main">
      <InnerHero
        title="Ooty Airport & Railway Station Transfers"
        subtitle="Private pickup around your arrival and departure time"
      />
      <section className="section">
        <div className="container page-body">
          <h2 className="page-h2">Mettupalayam Railway Station to Ooty</h2>
          <p>
            Mettupalayam is one of the principal gateways to the Nilgiris. We
            provide taxi and Tempo Traveller transfers from Mettupalayam
            Railway Station to Ooty and nearby destinations.
          </p>
          <ContentTable data={mettupalayamDropFare} />

          <h2 className="page-h2">Coimbatore Airport to Ooty</h2>
          <p>
            Coimbatore International Airport is a major arrival point for
            tourists visiting Ooty. Private cabs and group vehicles can be
            arranged for airport pickup and drop.
          </p>
          <ContentTable data={coimbatoreFare} />

          <h2 className="page-h2">Mysore to Ooty Transfer</h2>
          <p>
            Travellers arriving in Mysore can book a private cab or group
            vehicle for a comfortable journey to Ooty.
          </p>

          <h2 className="page-h2">Bangalore to Ooty Transfer</h2>
          <p>
            Ooty Cabs also provides one-way and round-trip travel options
            between Bangalore and Ooty. Airport and railway transfers can be
            planned around your actual arrival and departure schedules.
          </p>
          <p className="tariff-note">{tariffNote}</p>
        </div>
      </section>
    </main>
  );
}
