import React from "react";
import CommonHeading from "../utils/CommonHeading";
import { useEnquiryForm } from "../hooks/useEnquiryForm";
import { useFormSubmit } from "../hooks/useFormSubmit";
import EnquiryForm from "../common/EnquiryForm";

const Pricing = () => {
  const { isOpen, openForm, closeForm } = useEnquiryForm();

  const pricingData = [
    { bhk: "Retail Stores", price: "₹ 1.80 CR* " },
    { bhk: "Office Spaces", price: "₹ 61.47 Lakhs " },
  ];

  return (
    <div
      id="pricelist"
      className=" bg-[#3265A6] text-white relative overflow-hidden"
    >
      {/* Background geometric lines */}

      <div className="py-16 xl:px-[32px] px-6 max-w-7xl mx-auto my-0 relative z-10 flex justify-between flex-wrap">
        {/* Header */}
        <div className="flex justify-center items-center mb-[30px]  flex-col basis-[100%]">
          <div
            className={`mb-4 flex justify-center flex-col ${"items-center"}`}
          >
            <h2
              className={`tracking-[2px] mb-[12px] text-[17px] font-[200] font-merchant text-[white] relative inline-block `}
            >
              Visual Journey
            </h2>
          </div>
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
        {/* Right side - Pricing */}
        <div className="basis-[100%] xl:basis-[60%] flex flex-col justify-center space-y-2 xl:space-y-8 xl:px-0  xl:ml-[60px]">
          {pricingData.map((item, index) => (
            <div key={index} className="flex items-center py-6 flex-wrap">
              {/* Original Desktop Layout - With CSS borders */}
              <div className="items-center hidden lg:flex w-full">
                <div className="text-2xl font-light tracking-[1px] text-[white] flex-shrink-0 w-[180px] text-left">
                  {item.bhk}
                </div>

                {/* Left vertical border */}
                <div className="mx-[20px] h-[136px] w-[2px] bg-gradient-to-b from-transparent via-white to-transparent flex-shrink-0"></div>

                <div className="flex flex-col items-center flex-shrink-0 w-[160px]">
                  <div className="text-[24px] tracking-[1px] flex flex-col items-center font-light text-[white]">
                    {item.price}
                    <span className="text-[17px] text-[white]">Onwards</span>
                  </div>
                </div>

                {/* Right vertical border */}
                <div className="mx-[20px] h-[136px] w-[2px] bg-gradient-to-b from-transparent via-white to-transparent flex-shrink-0"></div>

                {/* Original Desktop Button */}
                <button
                  onClick={openForm}
                  className="bg-[#eca414] cursor-pointer tracking-[1px] text-white px-8 py-3 rounded-full transition-colors duration-200 flex-shrink-0"
                >
                  Enquire Now
                </button>
              </div>

              {/* Mobile Layout */}
              <div className="lg:hidden w-full">
                <div className=" border border-white rounded-lg p-6 mb-4">
                  <div className="text-center">
                    <div className="text-2xl font-light tracking-[1px] text-[white]">
                      {item.bhk}
                    </div>
                    <div className="flex my-[20px] justify-center">
                      {/* Horizontal border for mobile */}
                      <div className="w-[250px] h-[2px] bg-gradient-to-r from-transparent via-white to-transparent"></div>
                    </div>
                    <div className="text-xl tracking-[1px] font-light text-[white]">
                      {item.price}
                      <span className="text-sm text-[white] ml-1">Onwards</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Remove the separate button since it's now inside the flex container */}
              <div className="flex justify-center w-full">
                {/* Mobile Button */}
                <button
                  onClick={openForm}
                  className="lg:hidden cursor-pointer bg-[#eca414] tracking-[1px] text-white text-[14px] xl:text-[15px] px-4 py-3 xl:px-8 xl:py-4 rounded-full transition-colors duration-200"
                >
                  Enquire Now
                </button>
              </div>

              {/* Original Desktop Separator */}
              <div
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgb(255, 255, 255) 50%, transparent 100%)",
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
