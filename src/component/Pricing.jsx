import React from "react";
import CommonHeading from "../utils/CommonHeading";
import { useEnquiryForm } from "../hooks/useEnquiryForm";
import { useFormSubmit } from "../hooks/useFormSubmit";
import EnquiryForm from "../common/EnquiryForm";

const Pricing = () => {
  const { isOpen, openForm, closeForm } = useEnquiryForm();

  const pricingData = [
    { bhk: "Retail Stores", price: "₹ 33,108/sqft " },
    { bhk: "Office Spaces", price: "₹ 9,108/sqft " },
  ];

  return (
    <div
      id="pricelist"
      className=" bg-black text-white relative overflow-hidden"
    >
      <img
        className="absolute z-[-1] top-0 left-[2%] w-[100%] h-[1300px]"
        src="assets/images/pricing-bg.png"
        alt="bg-pattern"
      />

      {/* Background geometric lines */}
      <div className="absolute inset-0 opacity-20 ">
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

      <div className="py-16 xl:px-[32px] px-6 max-w-7xl mx-auto my-0 relative z-10 flex justify-between flex-wrap">
        {/* Header */}
        <div className="flex justify-center items-center mb-[30px]  flex-col basis-[100%]">
          <CommonHeading
            className=""
            headingInCenter={true}
            heading={"Our Pricing"}
          />
          <div className="flex mt-[-20px] justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="250"
              height="2"
              viewBox="0 0 439 2"
              fill="none"
            >
              <path d="M0 1H439" stroke="url(#paint0_linear_3627_1103)" />
              <defs>
                <linearGradient
                  id="paint0_linear_3627_1103"
                  x1="0"
                  y1="1.5"
                  x2="439"
                  y2="1.5"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopOpacity="0" />
                  <stop offset="0.485577" stopColor="white" />
                  <stop offset="1" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          {/* Left side - Building illustration */}
        </div>
        <div className="basis-[30%] xl:ml-[35px]">
          {" "}
          <img
            className="w-[100%] hidden xl:block mt-[100px] h-[400px]"
            src="assets/images/pricing-pattern.png"
            alt="pricing"
          />
        </div>

        {/* Right side - Pricing */}
        <div className="basis-[100%] xl:basis-[60%] flex flex-col justify-center space-y-2 xl:space-y-8 xl:px-0  xl:ml-[60px]">
          {pricingData.map((item, index) => (
            <div key={index} className="flex items-center py-6 flex-wrap">
              {/* Original Desktop Layout - Exactly as before */}
              <div className="  items-center flex-wrap hidden  lg:flex">
                <div className="text-2xl font-light tracking-[1px] text-[#C4C4C4]">
                  {item.bhk}
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2"
                  height="136"
                  className="mx-[35px]"
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
                  <div className="text-[28px] tracking-[1px] flex flex-col items-center font-light text-[#C4C4C4]">
                    {item.price}
                    <span className="text-[17px] text-[#C4C4C4]">Onwards</span>
                  </div>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="2"
                  className="mx-[35px]"
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

              {/* Mobile Layout */}
              <div className="lg:hidden w-full">
                <div className="bg-gray-900/20 border border-gray-700 rounded-lg p-6 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-light tracking-[1px] text-[#C4C4C4]">
                      {item.bhk}
                    </div>
                    <div className="flex my-[20px] justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="250"
                        height="2"
                        viewBox="0 0 439 2"
                        fill="none"
                      >
                        <path
                          d="M0 1H439"
                          stroke="url(#paint0_linear_3627_1103)"
                        />
                        <defs>
                          <linearGradient
                            id="paint0_linear_3627_1103"
                            x1="0"
                            y1="1.5"
                            x2="439"
                            y2="1.5"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stopOpacity="0" />
                            <stop offset="0.485577" stopColor="white" />
                            <stop offset="1" stopOpacity="0" />
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                    <div className="text-xl tracking-[1px] font-light text-[#C4C4C4]">
                      {item.price}
                      <span className="text-sm text-[#C4C4C4] ml-1">
                        Onwards
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Original Desktop Button */}
              <button
                onClick={openForm}
                className="bg-[#C4C4C4] cursor-pointer tracking-[1px]  hover:bg-gray-300 text-black px-10 py-3 rounded-full transition-colors duration-200 hidden lg:block"
              >
                Enquire Now
              </button>
              <div className="flex justify-center w-full">
                {/* Mobile Button */}
                <button
                  onClick={openForm}
                  className="lg:hidden cursor-pointer bg-[#C4C4C4] tracking-[1px] hover:bg-gray-300 text-black text-[14px] xl:text-[15px] px-4 py-3 xl:px-8 xl:py-4 rounded-full transition-colors duration-200"
                >
                  Enquire Now
                </button>
              </div>

              {/* Original Desktop Separator */}
              <div
                style={{
                  background:
                    "linear-gradient(90deg, #000 0%, #FFF 0.01%, #000 100%)",
                }}
                className="h-[1px] basis-[100%] w-[200px] hidden lg:block"
              ></div>
            </div>
          ))}
        </div>
      </div>
      <EnquiryForm isOpen={isOpen} onClose={closeForm} />
    </div>
  );
};

export default Pricing;
