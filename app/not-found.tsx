import type { Metadata } from "next";
import Link from "next/link";
import InnerHero from "@/components/InnerHero";
import BookButton from "@/components/BookButton";

export const metadata: Metadata = {
  title: {
    absolute: "404 - Page Not Found | Ooty Cabs",
  },
  description:
    "The requested page could not be found. Explore Ooty cab services, sightseeing tours, and car rentals with Ooty Cabs.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="main">
      <InnerHero
        title="404 - Page Not Found"
        subtitle="The page you requested could not be found."
      />
      <section className="section">
        <div
          className="container page-body"
          style={{ textAlign: "center", padding: "2rem 0" }}
        >
          <p>
            The link you followed may be broken or the page may have been moved.
            Browse our sightseeing tours, airport transfers, or book a car rental.
          </p>
          <div
            style={{
              marginTop: "2rem",
              display: "flex",
              gap: "1rem",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link href="/" className="button">
              Back to Home
            </Link>
            <BookButton className="button">Book a Trip</BookButton>
          </div>
        </div>
      </section>
    </main>
  );
}
