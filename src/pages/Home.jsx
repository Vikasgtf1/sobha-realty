import Hero from "../component/Hero";
import Aboutus from "../component/Aboutus";
import OurHighlightsSection from "../component/Highlights";
import Features from "../component/Features";
import Pricing from "../component/Pricing";
import LocationMap from "../component/LocationMap";
import VisualJourney from "../component/VisualJourney";
import Contact from "../component/Contact";
import Footer from "../component/Footer";

const Home = () => {
  return (
    <>
      <Hero />
      <Aboutus />
      <OurHighlightsSection />
      <Features />
      <Pricing />
      <LocationMap />
      <VisualJourney />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
