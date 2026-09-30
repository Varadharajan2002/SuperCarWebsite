import type { Metadata } from "next";
import InnerHero from "@/components/InnerHero";
import ContentTable from "@/components/ContentTable";
import JsonLd from "@/components/JsonLd";
import {
  mettupalayamDropFare,
  coimbatoreFare,
  tariffNote,
} from "@/lib/site";
import { getBreadcrumbSchema, pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Coimbatore to Ooty Cab & Airport Taxi Service | Ooty Cabs",
  description:
    "Reliable airport and railway taxi transfers from Coimbatore, Mettupalayam, Mysore & Bangalore to Ooty. 24/7 on-time pickup guaranteed. Book your cab today!",
  path: "/transfers",
  keywords: [
    "coimbatore to ooty cab",
    "coimbatore airport to ooty taxi",
    "mettupalayam to ooty taxi",
    "bangalore to ooty cab",
    "mysore to ooty taxi",
    "ooty drop taxi",
  ],
});

const transferBreadcrumbs = getBreadcrumbSchema([
  { name: "Home", path: "/" },
  { name: "Airport & Railway Station Transfers", path: "/transfers" },
]);

export default function TransfersPage() {
  return (
    <main className="main">
      <JsonLd data={transferBreadcrumbs} />
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
