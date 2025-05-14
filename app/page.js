import HeroSection from "./components/HeroSection";
import Navbar from "./components/Nabvar";
import Marketplaces from "./components/Marketplaces";
import Footer from "./components/Footer";
import Brands from "./components/Brands";
import AboutUs from "./components/AboutUs";

export default function Home() {
  return (
    <div>      
      <Navbar/>
      <HeroSection/>
     <Marketplaces/>
      <Brands/>
      <AboutUs/>
      <Footer/>
    </div>
  );
}
