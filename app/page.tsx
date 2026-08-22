import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Popular from "@/components/Popular";
import Features from "@/components/Features";
import Featured from "@/components/Featured";
import Offer from "@/components/Offer";
import Logos from "@/components/Logos";
import Footer from "@/components/Footer";
import ScrollUp from "@/components/ScrollUp";
import InitAnimations from "@/components/InitAnimations";

export default function Page() {
  return (
    <>
      <Header />
      <main className="main">
        <Hero />
        <About />
        <Popular />
        <Features />
        <Featured />
        <Offer />
        <Logos />
      </main>
      <Footer />
      <ScrollUp />
      <InitAnimations />
    </>
  );
}
