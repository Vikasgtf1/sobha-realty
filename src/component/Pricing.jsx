import React from "react";
import CommonHeading from "../utils/CommonHeading";

const Pricing = () => {
  const pricingData = [
    { bhk: "1 BHK", price: "2.38 Cr*", sqft: "500-800 sq.ft." },
    { bhk: "2 BHK", price: "2.58 Cr*", sqft: "500-800 sq.ft." },
    { bhk: "3 BHK", price: "2.58 Cr*", sqft: "500-800 sq.ft." },
  ];

  return (
    <div className="min-h-screen  bg-black text-white relative overflow-hidden">
      <img
        className="absolute top-0 left-[2%] h-[1300px]"
        src="/assets/images/pricing-bg.png"
        alt="bg-pattern"
      />

      {/* Background geometric lines */}
      <div className="absolute inset-0 opacity-20">
        <svg
          className="w-full h-full"
          viewBox="0 0 800 600"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient
              id="lineGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.1" />
            </linearGradient>
          </defs>
          {/* Diagonal lines */}
          {Array.from({ length: 15 }, (_, i) => (
            <line
              key={i}
              x1={i * 60 - 100}
              y1="0"
              x2={i * 60 + 400}
              y2="600"
              stroke="url(#lineGradient)"
              strokeWidth="1"
            />
          ))}
        </svg>
      </div>

      <div className="py-16 px-[80px] sm:px-6 max-w-7xl mx-auto my-0 relative z-10 flex justify-evenly flex-wrap">
        {/* Header */}
        <div className=" basis-[20%]">
          <CommonHeading
            className=""
            headingInCenter={false}
            heading={"Our Pricing"}
          />
          {/* Left side - Building illustration */}

          <img
            className="w-[300px] mt-[100px] h-[400px]"
            src="/assets/images/pricing-pattern.png"
            alt="pricing"
          />
        </div>

        {/* Right side - Pricing */}
        <div className="basis-[60%] flex flex-col justify-center  space-y-8 ml-[60px]">
          {pricingData.map((item, index) => (
            <div key={index} className="flex items-center  py-6 flex-wrap">
              <div className="flex items-center space-x-4">
                <div className="text-2xl font-light tracking-[1px] w-20 text-[#C4C4C4]">
                  {item.bhk}
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2"
                  height="136"
                  viewBox="0 0 2 136"
                  fill="none"
                >
                  <path
                    d="M1 0.75L1 135.25"
                    stroke="url(#paint0_linear_5024_219)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_5024_219"
                      x1="1.5"
                      y1="1.1503"
                      x2="1.5"
                      y2="135.25"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-opacity="0" />
                      <stop offset="0.504808" stop-color="white" />
                      <stop offset="1" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="flex flex-col items-center">
                  <div className="text-[28px] tracking-[1px] font-light text-[#C4C4C4]">
                    {item.price}
                    <span className="text-sm text-[#C4C4C4]">Onwards</span>
                  </div>
                  <div className="my-[15px]">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="336"
                      height="2"
                      viewBox="0 0 336 2"
                      fill="none"
                    >
                      <path
                        d="M0 1L336 1"
                        stroke="url(#paint0_linear_5024_222)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_5024_222"
                          x1="1"
                          y1="0.5"
                          x2="336"
                          y2="0.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-opacity="0" />
                          <stop offset="0.504808" stop-color="white" />
                          <stop offset="1" stop-opacity="0" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  <div className="text-lg text-[#C4C4C4] mt-1">{item.sqft}</div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2"
                  height="136"
                  viewBox="0 0 2 136"
                  fill="none"
                >
                  <path
                    d="M1 0.75L1 135.25"
                    stroke="url(#paint0_linear_5024_219)"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_5024_219"
                      x1="1.5"
                      y1="1.1503"
                      x2="1.5"
                      y2="135.25"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-opacity="0" />
                      <stop offset="0.504808" stop-color="white" />
                      <stop offset="1" stop-opacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <button className="bg-[#C4C4C4] tracking-[1px] ml-[40px] hover:bg-gray-300 text-black px-10 py-3 rounded-full transition-colors duration-200">
                Enquire Now
              </button>
              <div
                style={{
                  background:
                    "linear-gradient(90deg, #000 0%, #FFF 0.01%, #000 100%)",
                }}
                className="h-[1px] basis-[100%] w-[200px]"
              ></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pricing;
