import { useEffect, useRef } from "react";
import { Phone, Menu } from "lucide-react";

const Hero = () => {
  // const heroRef = useRef(null);

  // useEffect(() => {
  //   // Import GSAP from CDN
  //   const script = document.createElement("script");
  //   script.src =
  //     "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js";
  //   script.onload = () => {
  //     const { gsap } = window;

  //     // Animate main title
  //     gsap.fromTo(
  //       ".main-title",
  //       {
  //         opacity: 0,
  //         y: 50,
  //         scale: 0.9,
  //       },
  //       {
  //         opacity: 1,
  //         y: 0,
  //         scale: 1,
  //         duration: 1.5,
  //         ease: "power2.out",
  //         delay: 0.5,
  //       }
  //     );

  //     // Animate location
  //     gsap.fromTo(
  //       ".location-text",
  //       {
  //         opacity: 0,
  //         y: 30,
  //       },
  //       {
  //         opacity: 1,
  //         y: 0,
  //         duration: 1,
  //         ease: "power2.out",
  //         delay: 1,
  //       }
  //     );

  //     // Animate info cards with stagger
  //     gsap.fromTo(
  //       ".info-card",
  //       {
  //         opacity: 0,
  //         y: 40,
  //         scale: 0.95,
  //       },
  //       {
  //         opacity: 1,
  //         y: 0,
  //         scale: 1,
  //         duration: 0.8,
  //         stagger: 0.15,
  //         ease: "power2.out",
  //         delay: 1.5,
  //       }
  //     );

  //     // Animate header elements
  //     gsap.fromTo(
  //       ".header-element",
  //       {
  //         opacity: 0,
  //         y: -20,
  //       },
  //       {
  //         opacity: 1,
  //         y: 0,
  //         duration: 0.8,
  //         stagger: 0.1,
  //         ease: "power2.out",
  //       }
  //     );

  //     // Parallax effect on scroll
  //     const handleScroll = () => {
  //       const scrolled = window.pageYOffset;
  //       gsap.to(".bg-image", {
  //         y: scrolled * 0.5,
  //         duration: 0.1,
  //       });
  //     };

  //     window.addEventListener("scroll", handleScroll);

  //     return () => {
  //       window.removeEventListener("scroll", handleScroll);
  //     };
  //   };

  //   document.head.appendChild(script);

  //   return () => {
  //     if (document.head.contains(script)) {
  //       document.head.removeChild(script);
  //     }
  //   };
  // }, []);

  return (
    <div className="relative min-h-screen w-full xl:h-screen xl:overflow-hidden">
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
      <header className="relative z-10 flex justify-between flex-wrap items-center px-[20px] xl:px-[40px] py-3 xl:py-4">
        <div className="header-element">
          <img
            src="logo-header.png"
            alt="logo"
            className="h-[46px] xl:w-full "
          />
        </div>

        <div className="flex items-center gap-6">
          <button className="header-element flex items-center gap-2 text-white hover:text-gray-200 transition-colors">
            <p className="border-[0.5px] border-solid rounded-[50%] p-[7px] border-[#fff]">
              <Phone className="block md:hidden" size={12} /> {/* Mobile */}
              <Phone className="hidden md:block sm:hidden" size={15} />
            </p>
            <span className="text-[14px] xl:text-sm font-light tracking-[2px]">
              Call Now
            </span>
          </button>
          <button className="header-element text-white hover:text-gray-200 transition-colors">
            <Menu className="block md:hidden" size={18} /> {/* Mobile */}
            <Menu className="hidden md:block sm:hidden" size={24} />
          </button>
        </div>
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
      </header>

      {/* Main Content - Desktop: centered in viewport, Mobile: starts after 50vh banner */}
      <div className="relative z-10 flex flex-col items-center justify-center xl:h-full xl:-mt-20 px-8">
        {/* Mobile: Content starts after banner (50vh) */}
        <div className="xl:hidden" style={{ marginTop: "calc(52vh - 80px)" }}>
          <div className="text-center mb-4 xl:mb-8 font-merchant">
            <h1 className="main-title xl:text-white text-2xl font-light tracking-[0.1em] uppercase mb-4">
              SOBHA REALTY
            </h1>
            <p className="location-text xl:text-white text-[18px] font-[300] tracking-[0.15em] opacity-90">
              Gurugram
            </p>
          </div>
        </div>

        {/* Desktop: Centered title */}
        <div className="hidden xl:flex xl:flex-col text-center mb-16 font-merchant">
          <img
            src="grandthum-logo.png"
            className="h-[100px] object-contain"
            alt="grandthum-logo"
          />
          {/* <h1 className="main-title text-white text-7xl lg:text-8xl font-light tracking-[0.1em] uppercase mb-8">
            SOBHA REALTY
          </h1> */}
          <p className="location-text text-white text-2xl font-[300] tracking-[0.15em] mt-[25px] opacity-90">
            Greater Noida West
          </p>
        </div>
      </div>

      {/* Info Cards - Mobile: vertical stack after content, Desktop: horizontal at bottom */}
      <div className="flex justify-center w-full xl:absolute xl:bottom-[10px] mt-4 xl:mt-0 pb-8 xl:pb-0">
        <div className="flex font-merchant text-black xl:text-white flex-col xl:flex-row justify-center items-center gap-4 xl:gap-0 max-w-8xl w-full px-4">
          {/* Status Card */}
          <div className="info-card xl:block justify-between xl:justify-center flex rounded-full xl:px-6 py-3 text-center min-w-[140px] w-full xl:w-auto max-w-sm xl:max-w-none">
            <p className="text-black xl:text-white text-[17px] tracking-[1.5px] uppercase font-medium xl:mb-1">
              STATUS
            </p>
            <p className="text-gray-900 flex justify-center items-center gap-[10px] self-stretch pl-[20px] xl:px-[50px] xl:py-[12px] rounded-[90px] bg-white tracking-[1.2px] text-sm font-medium">
              New Launch
            </p>
          </div>

          <div className="info-card xl:block justify-between xl:justify-center flex rounded-full xl:px-6 py-3 text-center min-w-[140px] w-full xl:w-auto max-w-sm xl:max-w-none">
            <p className="text-black xl:text-white text-[17px] tracking-[1.5px] uppercase font-medium xl:mb-1">
              PRICING
            </p>
            <p className="text-gray-900 flex justify-center items-center gap-[10px] self-stretch pl-[20px] xl:px-[50px] xl:py-[12px] rounded-[90px] bg-white tracking-[1.2px] text-sm font-medium">
              ₹ 54 <span className="text-xs">Lakhs* Onwards</span>
            </p>
          </div>

          <div className="info-card xl:block  justify-between xl:justify-center flex rounded-full xl:px-6 py-3 text-center min-w-[140px] w-full xl:w-auto max-w-sm xl:max-w-none">
            <p className="text-black xl:text-white text-[17px] tracking-[1.5px] uppercase font-medium xl:mb-1">
              TYPOLOGY
            </p>
            <p className="text-gray-900 flex justify-center items-center gap-[10px] self-stretch pl-[20px] xl:px-[50px] xl:py-[12px] rounded-[90px] bg-white tracking-[1.2px] text-sm font-medium">
              1, 2 & 3 BHK Apartments
            </p>
          </div>

          <div className="info-card xl:block justify-between xl:justify-center flex rounded-full xl:px-6 py-3 text-center min-w-[140px] w-full xl:w-auto max-w-sm xl:max-w-none">
            <p className="text-black xl:text-white text-[17px] tracking-[1.5px] uppercase font-medium xl:mb-1">
              PAYMENT PLAN
            </p>
            <p className="text-gray-900 flex justify-center items-center gap-[10px] self-stretch pl-[20px] xl:px-[50px] xl:py-[12px] rounded-[90px] bg-white tracking-[1.2px] text-sm font-medium">
              60:40
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
