import { Phone, Menu } from "lucide-react";
import { useState, useEffect } from "react";
import EnquiryForm from "../common/EnquiryForm";
import { useEnquiryForm } from "../hooks/useEnquiryForm";
import { useFormSubmit } from "../hooks/useFormSubmit";
import SideMenu from "./SideMenu";
import { NavLink } from "react-router-dom";

const Hero = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { isOpen, openForm, closeForm } = useEnquiryForm();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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

  useEffect(() => {
    // Check initial screen size
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    // Set initial value
    checkScreenSize();

    // Handle window resize
    const handleResize = () => {
      checkScreenSize();
    };

    window.addEventListener("resize", handleResize);

    // Cleanup event listener
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      id="home"
      className="relative min-h-screen w-full xl:h-screen xl:overflow-hidden"
    >
      <img
        src="loan-approved.svg"
        className="absolute  z-[9999]
    top-[359px] right-[35px] xl:bottom-[190px]
    h-[40px] xl:h-[65px]
    xl:right-[150px]"
        alt="loan"
      />{" "}
      <SideMenu setShowMenu={setShowMenu} showMenu={showMenu} />
      {/* Background Image */}
      <div
        className="bg-image absolute w-full bg-top xl:h-screen h-[55vh] bg-cover bg-no-repeat"
        style={{
          background: `linear-gradient(to top, rgba(0, 0, 0, 0.35) 0%, transparent 229%), url(${
            isMobile ? "hero-mb.png" : "new-hero.webp"
          })`,
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0  bg-opacity-20"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
      </div>
      {/* Header */}
      <header
        className={`flex-wrap flex fixed w-full top-[0] left-[0] z-[99999] justify-between items-center px-[15px] xl:px-[40px] pt-[10px] pb-[14px] transition-all duration-300 ${
          isScrolled ? "bg-[#3265A6] shadow-lg" : "bg-transparent"
        }`}
      >
        {" "}
        <NavLink to="/grandthum/">
          {" "}
          <div className="header-element">
            <img
              src="logo-header.png"
              alt="logo"
              className=" object-contain h-[45px] xl:w-full"
            />
          </div>
        </NavLink>
        <div className="flex items-center  gap-6">
          <button
            onClick={() => (window.location.href = "tel:+917700007700")}
            className="header-element cursor-pointer flex items-center gap-2 text-white hover:text-gray-200 transition-colors"
          >
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
            className="header-element cursor-pointer text-white hover:text-gray-200 transition-colors"
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
      <div className="relative z-10 flex flex-col items-center justify-center xl:h-full  px-8">
        {/* Desktop: Centered title */}
        <div className="hidden xl:flex xl:flex-col text-center  font-merchant">
          <img
            src="grandthum-logo.png"
            className="h-[100px] object-contain"
            alt="grandthum-logo"
          />

          <p className="location-text text-[white] text-2xl font-[300] tracking-[0.15em] mt-[25px] opacity-90">
            Greater Noida West
          </p>
        </div>
      </div>
      {/* desktop */}
      <div className="relative backdrop-blur-[1.4px] hidden xl:flex justify-between p-2.5 mt-[-50px] w-[80%] border border-[#eca414] absolute bottom-24 left-1/2 transform -translate-x-1/2 z-[99]">
        {/* Typology */}
        <div className="flex-[0.9] flex flex-col justify-center items-center gap-5 py-[10px] px-1.5 relative transition-all duration-[400ms] ease-in border-r border-[#eca414]  group">
          <h5 className="text-[#eca414] tracking-[2px] font-light text-base pb-2.5 relative">
            TYPOLOGY
            <span className="absolute top-[105%] left-1/2 transform -translate-x-1/2 w-[170px] h-[0.5px] bg-[#eca414]"></span>
          </h5>
          <h4 className="text-[#eca414] text-lg font-normal tracking-[2px] text-center">
            Office Spaces , Retail Stores
          </h4>
        </div>

        {/* Starting Price */}
        <div className="flex-[0.9] flex flex-col justify-center items-center gap-5 py-[10px] px-1.5 relative transition-all duration-[400ms] ease-in border-r border-[#eca414]  group">
          <h5 className="text-[#eca414] tracking-[2px] font-light text-base pb-2.5 relative">
            STARTING PRICE
            <span className="absolute top-[105%] left-1/2 transform -translate-x-1/2 w-[170px] h-[0.5px] bg-[#eca414]"></span>
          </h5>
          <h4 className="text-[#eca414] text-lg font-normal tracking-[2px] text-center">
            ₹ 61.47 Lakhs* Onwards
          </h4>
        </div>

        {/* Payment Plan */}
        <div className="flex-[0.9] flex flex-col justify-center items-center gap-5 py-[10px] px-1.5 relative transition-all duration-[400ms] ease-in  group">
          <h5 className="text-[#eca414] tracking-[2px] font-light text-base pb-2.5 relative">
            PAYMENT PLAN
            <span className="absolute top-[105%] left-1/2 transform -translate-x-1/2 w-[170px] h-[0.5px] bg-[#eca414]"></span>
          </h5>
          <h4 className="text-[#eca414] text-lg font-normal tracking-[2px] text-center">
            90:10
          </h4>
        </div>
      </div>
      {/* mobile */}
      <div className="min-h-[50vh] my-[30px] bg-gradient-to-br pt-[55vh] flex items-center justify-center p-5 xl:hidden">
        <div className="bg-gradient-to-br  overflow-hidden w-full max-w-sm relative">
          <div className="flex justify-center flex-col items-center">
            <img
              src="assets/images/grandthum-black.png"
              className="h-[100px] object-contain"
              alt="white logo"
            />
            <p className="mt-[15px] tracking-[1.5px]">Greater Noida West</p>
          </div>

          {/* Content Section */}
          <div className="pt-[10px] space-y-6 relative z-10">
            {/* Typology */}
            <div className="bg-[#3265A6]  text-white p-6 text-center">
              <div className="text-xs  pb-[15px] border-b-[1px] tracking-widest mb-3 font-medium">
                TYPOLOGY
              </div>

              <div className="text-base font-bold tracking-wide leading-relaxed">
                Office Spaces , Retail Stores
              </div>
            </div>

            {/* Starting Price */}
            <div className="text-center ">
              <div className="text-xs text-black tracking-widest mb-2 ">
                STARTING PRICE
              </div>

              <div className="text-black text-[16px] font-[300] tracking-wide">
                ₹ 61.47 Lakhs* Onwards
              </div>
            </div>

            {/* Payment Plan */}
            <div className="bg-[#3265A6]  text-white p-6 text-center">
              <div className="text-xs pb-[15px] border-b-[1px] text-white tracking-widest mb-3 font-medium">
                PAYMENT PLAN
              </div>

              <div className=" text-xl font-bold tracking-wider">90:10</div>
            </div>
          </div>
        </div>
      </div>
      <EnquiryForm isOpen={isOpen} onClose={closeForm} />
    </div>
    // <div
    //   id="home"
    //   className="relative min-h-screen w-full xl:h-screen xl:overflow-hidden"
    // >
    //   <SideMenu setShowMenu={setShowMenu} showMenu={showMenu} />
    //   {/* Background Image */}
    //   <div
    //     className="bg-image absolute w-full bg-top xl:h-screen h-[55vh] bg-cover bg-no-repeat"
    //     style={{
    //       backgroundImage: `linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.45) 100%), url('hero2.webp')`,
    //     }}
    //   >
    //     {/* Overlay */}
    //     <div className="absolute inset-0  bg-opacity-20"></div>
    //     <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
    //   </div>
    //   {/* Header */}
    //   <header
    //     className={`flex-wrap flex fixed w-full top-[0] left-[0] z-[99999] justify-between items-center px-[15px] xl:px-[40px] pt-[10px] pb-[14px] transition-all duration-300 ${
    //       isScrolled ? "bg-[#3265A6] shadow-lg" : "bg-transparent"
    //     }`}
    //   >
    //     {" "}
    //     <NavLink to="/grandthum/">
    //       {" "}
    //       <div className="header-element">
    //         <img
    //           src="grandthum-logo.png"
    //           alt="logo"
    //           className="h-[35px] object-contain xl:h-[46px] xl:w-full"
    //         />
    //       </div>
    //     </NavLink>
    //     <div className="flex items-center  gap-6">
    //       <button className="header-element cursor-pointer flex items-center gap-2 text-white hover:text-gray-200 transition-colors">
    //         <p className="border-[0.5px] border-solid rounded-[50%] p-[7px] border-[#fff]">
    //           <Phone className="block md:hidden" size={12} /> {/* Mobile */}
    //           <Phone className="hidden md:block sm:hidden" size={15} />
    //         </p>
    //         <span className="text-[14px] xl:text-sm font-light tracking-[2px]">
    //           Call Now
    //         </span>
    //       </button>
    //       <button
    //         onClick={() => setShowMenu(true)}
    //         className="header-element cursor-pointer text-white hover:text-gray-200 transition-colors"
    //       >
    //         <Menu className="block md:hidden" size={18} /> {/* Mobile */}
    //         <Menu className="hidden md:block sm:hidden" size={24} />
    //       </button>
    //     </div>
    //     {!isScrolled && (
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         width="100%"
    //         height="2"
    //         viewBox="0 0 1428 2"
    //         fill="none"
    //         className="basis-[100%] mt-[17px]"
    //       >
    //         <path d="M0 1L1428 1" stroke="white" strokeOpacity="0.3" />
    //       </svg>
    //     )}
    //   </header>
    //   {/* Main Content - Desktop: centered in viewport, Mobile: starts after 50vh banner */}
    //   <div className="relative z-10 flex flex-col items-center justify-center xl:h-full xl:-mt-10 px-8">
    //     {/* Desktop: Centered title */}
    //     <div className="hidden xl:flex xl:flex-col text-center  font-merchant">
    //       <img
    //         src="grandthum-logo.png"
    //         className="h-[100px] object-contain"
    //         alt="grandthum-logo"
    //       />

    //       <p className="location-text text-white text-2xl font-[300] tracking-[0.15em] mt-[25px] opacity-90">
    //         Greater Noida West
    //       </p>
    //     </div>
    //   </div>
    //   {/* desktop */}
    //   <div className="relative hidden mx-5 -mt-[105px] z-[99] xl:flex justify-between p-2.5 w-[80%] mx-auto border border-white ">
    //     {/* Typology */}
    //     <div className="flex-[0.9] flex flex-col justify-center items-center gap-5 py-[10px] px-1.5 relative transition-all duration-[400ms] ease-in border-r border-white  group">
    //       <h5 className="text-white tracking-[2px] font-light text-base pb-2.5 relative">
    //         TYPOLOGY
    //         <span className="absolute top-[105%] left-1/2 transform -translate-x-1/2 w-[170px] h-[0.5px] bg-white"></span>
    //       </h5>
    //       <h4 className="text-white text-lg font-normal tracking-[2px] text-center">
    //         Office Spaces , Retail Stores
    //       </h4>
    //     </div>

    //     {/* Starting Price */}
    //     <div className="flex-[0.9] flex flex-col justify-center items-center gap-5 py-[10px] px-1.5 relative transition-all duration-[400ms] ease-in border-r border-white  group">
    //       <h5 className="text-white tracking-[2px] font-light text-base pb-2.5 relative">
    //         STARTING PRICE
    //         <span className="absolute top-[105%] left-1/2 transform -translate-x-1/2 w-[170px] h-[0.5px] bg-white"></span>
    //       </h5>
    //       <h4 className="text-white text-lg font-normal tracking-[2px] text-center">
    //         ₹ 61.47 CR* Lakhs* Onwards
    //       </h4>
    //     </div>

    //     {/* Payment Plan */}
    //     <div className="flex-[0.9] flex flex-col justify-center items-center gap-5 py-[10px] px-1.5 relative transition-all duration-[400ms] ease-in  group">
    //       <h5 className="text-white tracking-[2px] font-light text-base pb-2.5 relative">
    //         PAYMENT PLAN
    //         <span className="absolute top-[105%] left-1/2 transform -translate-x-1/2 w-[170px] h-[0.5px] bg-white"></span>
    //       </h5>
    //       <h4 className="text-white text-lg font-normal tracking-[2px] text-center">
    //         90:10
    //       </h4>
    //     </div>
    //   </div>
    //   {/* mobile */}
    //   <div className="min-h-[50vh] my-[30px] bg-gradient-to-br mt-[55vh] flex items-center justify-center p-5">
    //     <div className="bg-gradient-to-br  overflow-hidden w-full max-w-sm relative">
    //       <div className="flex justify-center flex-col items-center">
    //         <img
    //           src="assets/images/grandthum-black.png"
    //           className="h-[100px] object-contain"
    //           alt="white logo"
    //         />
    //         <p className="mt-[15px] tracking-[1.5px]">Greater Noida West</p>
    //       </div>

    //       {/* Content Section */}
    //       <div className="pt-[10px] space-y-6 relative z-10">
    //         {/* Typology */}
    //         <div className="bg-[#3265A6]  text-white p-6 text-center">
    //           <div className="text-xs  pb-[15px] border-b-[1px] tracking-widest mb-3 font-medium">
    //             TYPOLOGY
    //           </div>

    //           <div className="text-base font-bold tracking-wide leading-relaxed">
    //             Office Spaces , Retail Stores
    //           </div>
    //         </div>

    //         {/* Starting Price */}
    //         <div className="text-center ">
    //           <div className="text-xs text-black tracking-widest mb-2 ">
    //             STARTING PRICE
    //           </div>

    //           <div className="text-black text-[16px] font-[300] tracking-wide">
    //             ₹ 61.47 CR* Lakhs* Onwards
    //           </div>
    //         </div>

    //         {/* Payment Plan */}
    //         <div className="bg-[#3265A6]  text-white p-6 text-center">
    //           <div className="text-xs pb-[15px] border-b-[1px] text-white tracking-widest mb-3 font-medium">
    //             PAYMENT PLAN
    //           </div>

    //           <div className=" text-xl font-bold tracking-wider">90:10</div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    //   <EnquiryForm isOpen={isOpen} onClose={closeForm} />
    // </div>
  );
};

export default Hero;
