import Hero from "./component/Hero";
import VisualJourney from "./component/VisualJourney";
import "./App.css";
import Aboutus from "./component/Aboutus";
import OurHighlightsSection from "./component/Highlights";
import Contact from "./component/Contact";
import Footer from "./component/Footer";
import FloorPlans from "./component/FloorPlans";
import Pricing from "./component/Pricing";

import Features from "./component/Features";

function App() {
  return (
    <>
      <Hero />
      <Aboutus />
      <OurHighlightsSection />
      <Features />

      <Pricing />

      <VisualJourney />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
