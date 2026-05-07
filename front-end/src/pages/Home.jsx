import FinalCTA from "../components/CTA";
import Hero from "../components/Hero";
import PopularFilieres from "../components/PopulareFilieres";
import Stats from "../components/Stats";
import WhyUs from "../components/WhyUs";
import PageHeader from "../components/PageHeader";

export default function Home() {
  return (
    <>
    <Hero/>
    <WhyUs/>
    <PopularFilieres/>
    <Stats/>
    <FinalCTA/>
    </>
  );
}