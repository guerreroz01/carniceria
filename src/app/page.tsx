import Banner from "@/components/Banner";
import CardContainer from "@/components/CardContainer";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Banner
        title="Nuestras nuevas promociones para el verano están aquí"
        href="/promo"
      />
      <Hero />
      <CardContainer />
      <div className="h-64"></div>
    </>
  );
}
