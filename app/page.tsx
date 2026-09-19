import Hero from "@/components/Hero";
import About from "@/components/About";
import Popular from "@/components/Popular";
import Features from "@/components/Features";
import Featured from "@/components/Featured";
import Offer from "@/components/Offer";
import Content from "@/components/Content";

export default function Page() {
  return (
    <main className="main">
      <Hero />
      <About />
      <Popular />
      <Features />
      <Featured />
      <Content />
      <Offer />
    </main>
  );
}
