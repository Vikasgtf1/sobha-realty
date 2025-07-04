import { Phone, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import EnquiryForm from "../common/EnquiryForm";
import { useEnquiryForm } from "../hooks/useEnquiryForm";
import { useFormSubmit } from "../hooks/useFormSubmit";
import SideMenu from "./SideMenu";

const Hero = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { isOpen, openForm, closeForm } = useEnquiryForm();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      setIsScrolled(scrollTop > 50);
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      id="home"
      className="relative xl:min-h-screen w-full xl:h-screen xl:overflow-hidden"
    >
      <SideMenu setShowMenu={setShowMenu} showMenu={showMenu} />
      {/* Background Image */}
      <div
        className="bg-image absolute w-full bg-top xl:h-screen h-[50vh] bg-cover bg-no-repeat"
        style={{
          backgroundImage: `linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.45) 100%), url('hero.png')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0  bg-opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
      </div>

      {/* Header */}
      <header
        className={`xl:flex-wrap flex fixed w-full top-[0] left-[0] z-[99999] justify-between items-center px-[15px] xl:px-[40px] pt-[10px] pb-[14px] transition-all duration-300 ${
          isScrolled ? "bg-[#3265A6] shadow-lg" : "bg-transparent"
        }`}
        // className="xl:flex-wrap flex fixed w-full top-[0] left-[0] z-[99999]  justify-between items-center px-[15px] xl:px-[40px] pt-[10px] pb-[14px]"

        // className="relative z-[9999] flex justify-between flex-wrap items-center px-[20px] xl:px-[40px] py-3 xl:py-4"
      >
        {" "}
        <div className="header-element">
          <img
            src="logo-header.png"
            alt="logo"
            className="h-[46px] xl:w-full"
          />
        </div>
        <div className="flex items-center  gap-6">
          <button className="header-element cursor-pointer flex items-center gap-2 text-white hover:text-gray-200 transition-colors">
            <p className="border-[0.5px] border-solid rounded-[50%] p-[7px] border-[#fff]">
              <Phone className="block md:hidden" size={12} /> {/* Mobile */}
              <Phone className="hidden md:block sm:hidden" size={15} />
            </p>
            <span className="text-[14px] xl:text-sm font-light tracking-[2px]">
              Call Now
            </span>
          </button>
          <button
            onClick={() => setShowMenu(true)}
            className="  header-element cursor-pointer text-white hover:text-gray-200 transition-colors"
          >
            <Menu className="block md:hidden" size={18} /> {/* Mobile */}
            <Menu className="hidden md:block sm:hidden" size={24} />
          </button>
        </div>
        {!isScrolled && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="2"
            viewBox="0 0 1428 2"
            fill="none"
            className="basis-[100%] mt-[17px]"
          >
            <path d="M0 1L1428 1" stroke="white" strokeOpacity="0.3" />
          </svg>
        )}
      </header>

      {/* Main Content - Desktop: centered in viewport, Mobile: starts after 50vh banner */}
      <div className="relative z-10 flex flex-col items-center justify-center xl:h-full xl:-mt-10 px-8">
        {/* Mobile: Content starts after banner (50vh) */}
        <div className="xl:hidden" style={{ marginTop: "calc(52vh - 80px)" }}>
          <div className="text-center mb-4 xl:mb-8 font-merchant">
            <h1 className="main-title xl:text-white text-2xl font-light tracking-[0.1em] uppercase mb-4">
              GROUP 108
            </h1>
            <p className="location-text xl:text-white text-[18px] font-[300] tracking-[0.15em] opacity-90">
              Greater Noida West
            </p>
          </div>
        </div>

        {/* Desktop: Centered title */}
        <div className="hidden xl:flex xl:flex-col text-center  font-merchant">
          <img
            src="grandthum-logo.png"
            className="h-[100px] object-contain"
            alt="grandthum-logo"
          />

          <p className="location-text text-white text-2xl font-[300] tracking-[0.15em] mt-[25px] opacity-90">
            Greater Noida West
          </p>
        </div>
      </div>

      <div className="relative mx-5 -mt-[105px] z-[99] flex justify-between p-2.5 w-[80%] mx-auto border border-white">
        {/* Typology */}
        <div className="flex-[0.9] flex flex-col justify-center items-center gap-5 py-[10px] px-1.5 relative transition-all duration-[400ms] ease-in border-r border-white hover:bg-[rgba(50,101,166,0.7)] group">
          <h5 className="text-white tracking-[2px] font-light text-base pb-2.5 relative">
            TYPOLOGY
            <span className="absolute top-[105%] left-1/2 transform -translate-x-1/2 w-[170px] h-[0.5px] bg-white"></span>
          </h5>
          <h4 className="text-white text-lg font-normal tracking-[2px] text-center">
            Office Spaces , Retail Stores
          </h4>
        </div>

        {/* Starting Price */}
        <div className="flex-[0.9] flex flex-col justify-center items-center gap-5 py-[10px] px-1.5 relative transition-all duration-[400ms] ease-in border-r border-white hover:bg-[rgba(50,101,166,0.7)] group">
          <h5 className="text-white tracking-[2px] font-light text-base pb-2.5 relative">
            STARTING PRICE
            <span className="absolute top-[105%] left-1/2 transform -translate-x-1/2 w-[170px] h-[0.5px] bg-white"></span>
          </h5>
          <h4 className="text-white text-lg font-normal tracking-[2px] text-center">
            ₹ 61.47 CR* Lakhs* Onwards
          </h4>
        </div>

        {/* Payment Plan */}
        <div className="flex-[0.9] flex flex-col justify-center items-center gap-5 py-[10px] px-1.5 relative transition-all duration-[400ms] ease-in hover:bg-[rgba(50,101,166,0.7)] group">
          <h5 className="text-white tracking-[2px] font-light text-base pb-2.5 relative">
            PAYMENT PLAN
            <span className="absolute top-[105%] left-1/2 transform -translate-x-1/2 w-[170px] h-[0.5px] bg-white"></span>
          </h5>
          <h4 className="text-white text-lg font-normal tracking-[2px] text-center">
            90:10
          </h4>
        </div>
        <EnquiryForm isOpen={isOpen} onClose={closeForm} />
      </div>
    </div>
  );
};

export default Hero;
