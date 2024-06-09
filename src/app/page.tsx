import Banner from "@/components/Banner";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Banner
        title="Nuestras nuevas promociones para el verano están aquí"
        href="/promo"
      />
      <Hero />
      <div className="h-64"></div>
    </>
  );
}
