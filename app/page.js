import HeroSection from "./components/HeroSection";
import Navbar from "./components/Nabvar";
import Marketplaces from "./components/Marketplaces";
import Footer from "./components/Footer";
import Brands from "./components/Brands";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";
import Boosting from "./components/Boosting";
import { Analytics } from "@vercel/analytics/next"

export default function Home() {
  return (
    <div className=" bg-[url('/fondoColmena1.png')]  ">      
      <Analytics />
      <Navbar/>
      <HeroSection/>
      <Marketplaces/>
      <Brands/>
      <AboutUs/>
      <Boosting/>
      <Contact/>
      <Footer/>
    </div>
  );
}
