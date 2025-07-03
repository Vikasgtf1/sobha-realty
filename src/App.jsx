import Hero from "./component/Hero";
import VisualJourney from "./component/VisualJourney";
import "./App.css";
import Aboutus from "./component/Aboutus";
import OurHighlightsSection from "./component/Highlights";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import FloorPlans from "./component/FloorPlans";
import Pricing from "./component/Pricing";
import Amenities from "./component/Amenties";
import HorizontalAmenities from "./component/HorizontalAmenities";

function App() {
  return (
    <>
      {/* <Hero /> */}
      <Aboutus />
      <OurHighlightsSection />
      <Amenities />
      <HorizontalAmenities />
      <Pricing />
      <FloorPlans />
      <VisualJourney /> 
     <Contact />
      <Footer />
    </>
  );
}

export default App;
