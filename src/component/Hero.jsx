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
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="bg-image absolute w-full bg-top h-full bg-cover  bg-no-repeat"
        style={{
          backgroundImage: `url('hero.png')`,
        }}
      >
        {/* Overlay */}
        <div className="absolute  bg-black bg-opacity-20"></div>
        <div className="absolute  bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 flex justify-between flex-wrap items-center px-[60px] py-6">
        <div className="header-element ">
          <img src="logo.svg" alt="logo" />
        </div>

        <div className="flex items-center gap-6">
          <button className="header-element flex items-center gap-2 text-white hover:text-gray-200 transition-colors">
            <p className="border-[0.5px] border-solid rounded-[50%] p-[7px] border-[#fff]">
              <Phone size={15} />{" "}
            </p>
            <span className="text-sm font-light tracking-[2px]">Call Now</span>
          </button>
          <button className="header-element text-white hover:text-gray-200 transition-colors">
            <Menu size={24} />
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
          <path d="M0 1L1428 1" stroke="white" stroke-opacity="0.3" />
        </svg>
      </header>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-8 -mt-20">
        {/* Main Title */}
        <div className="text-center mb-16 font-merchant">
          <h1 className="main-title text-white  text-6xl md:text-7xl lg:text-8xl font-light tracking-[0.1em] uppercase mb-8">
            SOBHA REALTY
          </h1>
          <p className="location-text text-white text-xl md:text-2xl font-[300] tracking-[0.15em] opacity-90">
            Gurugram
          </p>
        </div>
      </div>
      {/* Info Cards */}
      <div className="flex justify-center w-full absolute bottom-[10px]">
        <div className="flex   font-merchant text-white flex-wrap justify-center gap-4 md:gap-0 max-w-8xl">
          {/* Status Card */}
          <div className="info-card   rounded-full px-6 py-3 text-center min-w-[140px]">
            <p className="text-white text-[17px] tracking-[1.5px] uppercase  font-medium mb-1">
              STATUS
            </p>
            <p className="text-gray-900 flex justify-center items-center gap-[10px] self-stretch px-[50px] py-[12px] rounded-[90px] bg-white tracking-[1.2px] text-sm font-medium">
              New Launch
            </p>
          </div>
          <div className="info-card   rounded-full px-6 py-3 text-center min-w-[140px]">
            <p className="text-white text-[17px] tracking-[1.5px] uppercase  font-medium mb-1">
              PRICING
            </p>
            <p className="text-gray-900 flex justify-center items-center gap-[10px] self-stretch px-[50px] py-[12px] rounded-[90px] bg-white tracking-[1.2px] text-sm font-medium">
              ₹ 5.99 <span className="text-xs">Cr* Onwards</span>
            </p>
          </div>
          <div className="info-card   rounded-full px-6 py-3 text-center min-w-[140px]">
            <p className="text-white text-[17px] tracking-[1.5px] uppercase  font-medium mb-1">
              TYPOLOGY
            </p>
            <p className="text-gray-900 flex justify-center items-center gap-[10px] self-stretch px-[50px] py-[12px] rounded-[90px] bg-white tracking-[1.2px] text-sm font-medium">
              1, 2 & 3 BHK Apartments
            </p>
          </div>
          <div className="info-card   rounded-full px-6 py-3 text-center min-w-[140px]">
            <p className="text-white text-[17px] tracking-[1.5px] uppercase  font-medium mb-1">
              PAYMENT PLAN
            </p>
            <p className="text-gray-900 flex justify-center items-center gap-[10px] self-stretch px-[50px] py-[12px] rounded-[90px] bg-white tracking-[1.2px] text-sm font-medium">
              25:25:25:25
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default Hero;
