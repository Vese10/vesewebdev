import Hero from "@/components/sections/Hero";
import ChiSono from "@/components/sections/ChiSono";
import Servizi from "@/components/sections/Servizi";
import PortfolioPreview from "@/components/sections/PortfolioPreview";
import Contatti from "@/components/sections/Contatti";

export default function Home() {
  return (
    <>
      <Hero />
      <ChiSono />
      <Servizi />
      <PortfolioPreview />
      <Contatti />
    </>
  );
}
