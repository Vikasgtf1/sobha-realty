import Hero from "../component/Hero";
import Aboutus from "../component/Aboutus";
import OurHighlightsSection from "../component/Highlights";
import Features from "../component/Features";
import Pricing from "../component/Pricing";
import LocationMap from "../component/LocationMap";
import VisualJourney from "../component/VisualJourney";
import Contact from "../component/Contact";
import Footer from "../component/Footer";
import EnquiryForm from "../common/EnquiryForm";
import { useEnquiryForm } from "../hooks/useEnquiryForm";

const Home = () => {
  const { isOpen, openForm, closeForm } = useEnquiryForm();

  return (
    <div className="relative">
      <Hero />
      <Aboutus />
      <OurHighlightsSection />
      <Features />
      <Pricing />
      <LocationMap />
      <VisualJourney />
      <Contact />
      <Footer />
      <div className="fixed z-[99] bg-[#3265A6] flex justify-center flex-wrap xl:hidden  bottom-0 w-full py-[7px] px-[10px]">
        <button
          onClick={openForm}
          className=" z-[99] border-r-[1px]  border-solid border-white cursor-pointer text-white px-4 py-2 xl:px-8 xl:py-3 text-xs xl:text-sm font-medium tracking-[1.5px] "
        >
          Query Now
        </button>
        <button
          onClick={() => (window.location.href = "tel:+917700007700")}
          className=" z-[99]  cursor-pointer text-white px-4 py-2 xl:px-8 xl:py-3 text-xs xl:text-sm font-medium tracking-[1.5px] "
        >
          Tap to call
        </button>
      </div>
      <button
        onClick={openForm}
        className="bg-[#eca414] xl:block hidden z-[99] fixed bottom-[30px] right-[30px] cursor-pointer text-white px-4 py-3 xl:px-8 xl:py-3 text-xs xl:text-sm font-medium rounded-[30px] tracking-[1.5px] "
      >
        Enquire Now
      </button>
      <EnquiryForm isOpen={isOpen} onClose={closeForm} />
    </div>
  );
};

export default Home;
