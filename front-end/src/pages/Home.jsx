import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import WhyChoose from "../components/WhyChoose";
import Filieres from "../components/Filieres";
import StagiaireLife from "../components/StagieareLife";
import LatestBlogs from "../components/LatestBlogs";
import CTA from "../components/CTA";

export default function Home() {
  return (
    <>
      <Hero/>
      <WhyChoose/>
      <Filieres/>
      <StagiaireLife/>
      <LatestBlogs/>
      <CTA/>
      <Footer />
    </>
  );
}