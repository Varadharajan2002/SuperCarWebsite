import Hero from "@/components/Hero";
import About from "@/components/About";
import Popular from "@/components/Popular";
import Features from "@/components/Features";
import Featured from "@/components/Featured";
import Offer from "@/components/Offer";

export default function Page() {
  return (
    <main className="main">
      <Hero />
      <About />
      <Popular />
      <Features />
      <Featured />
      <Offer />
    </main>
  );
}
