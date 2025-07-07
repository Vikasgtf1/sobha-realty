import React from "react";
import CommonHeading from "../utils/CommonHeading";
import { useEnquiryForm } from "../hooks/useEnquiryForm";
import EnquiryForm from "../common/EnquiryForm";

const OurHighlightsSection = () => {
  const { isOpen, openForm, closeForm } = useEnquiryForm();

  const highlights = [
    "Iconic twin tower with signature workspaces on floors G+34 and G+30, featuring a Sky Deck for your dream office space.",
    "High street retail with over 100 renowned brands and waterscape views for an unparalleled shopping experience.",
    "2 Acres water body with Yacht Garden: ultra-luxurious open-air fine dining experience surrounded by water.",
    "Entertainment zones with 5-screen multiplex (900+ capacity) equipped with cutting-edge technology.",
    "One of the tallest commercial complexes in Greater Noida West with anchor stores and spacious layouts.",
  ];
  return (
    <section
      id="highlights"
      className="relative bg-[#3265A6] text-white overflow-hidden py-16 px-4 sm:px-6 lg:px-8"
    >
      {/* <div className="overlay_gradient absolute top-[0]   w-[100%] left-[0]">
        <img
          src="assets/images/about_pattern.png"
          className="w-[100%] opacity-[0.11] z-[-1]"
          alt="pattern image"
        />
      </div> */}
      <div className="mb-8 md:mb-16">
        <div className={`mb-4 flex justify-center flex-col ${"items-center"}`}>
          <h2
            className={`tracking-[2px] mb-[12px] text-[17px] font-[200] font-merchant text-[white] relative inline-block`}
          >
            Our Highlights
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
      </div>
      <div className="flex flex-col flex-wrap md:flex-row gap-[50px] md:gap-[70px] justify-center items-start">
        {/* Left - Image */}
        <div className="md:basis-[38%]">
          <img
            src="highlights.webp"
            alt="Descriptive Alt"
            className="rounded-[10px] w-full h-[500px] object-cover"
          />
        </div>

        {/* Right - List and Button */}
        <div className=" md:basis-[40%] pt-[20px] xl:pt-[50px] flex flex-col gap-[10px] h-full">
          {/* List */}
          <ul className="space-y-4 mb-8">
            {highlights.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-2 text-white text-[#202020] font-[100] font-helvetica text-[12px] leading-relaxed"
              >
                <svg
                  className="w-[20px] h-[20px] text-[#eca414] flex-shrink-0 mt-[1px]"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
                <span className="flex-1 xl:text-[12px] xl:font-[100] text-[15px] font-[400] leading-[24px] font-helvetica tracking-[1px]">
                  {item}
                </span>
              </li>
            ))}
          </ul>
          <EnquiryForm isOpen={isOpen} onClose={closeForm} />

          <button
            onClick={openForm}
            className="bg-[#eca414] z-[99] cursor-pointer w-fit  text-white px-4 py-3 xl:px-8 xl:py-3 text-xs xl:text-sm font-medium rounded-[30px] tracking-[1.5px] transition-colors duration-300"
          >
            Enquire Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurHighlightsSection;
