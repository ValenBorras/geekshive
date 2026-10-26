import HeroSection from "../components/HeroSection";
import Navbar from "../components/Nabvar";
import Marketplaces from "../components/Marketplaces";
import Footer from "../components/Footer";
import Brands from "../components/Brands";
import AboutUs from "../components/AboutUs";
import Contact from "../components/Contact";
import Boosting from "../components/Boosting";
import RoboticsBrands from "../components/RoboticsBrands";
import { Analytics } from "@vercel/analytics/next";

export default function Home() {
  return (
    <div className="bg-[url('/fondoColmena1.png')] bg-fixed bg-cover min-h-screen">
      <Analytics />
      <Navbar />
      <HeroSection />
      <div className="section-divider" />
      <RoboticsBrands />
      <div className="section-divider" />
      <Marketplaces />
      <div className="section-divider" />
      <Brands />
      <div className="section-divider" />
      <AboutUs />
      <div className="section-divider" />
      <Boosting />
      <div className="section-divider" />
      <Contact />
      <Footer />
    </div>
  );
}


