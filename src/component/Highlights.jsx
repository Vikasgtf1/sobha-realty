import React from "react";
import CommonHeading from "../utils/CommonHeading";
import { useEnquiryForm } from "../hooks/useEnquiryForm";
import EnquiryForm from "../common/EnquiryForm";

const OurHighlightsSection = () => {
  const { isOpen, openForm, closeForm } = useEnquiryForm();

  const highlights = [
    "IGBC Platinum Pre-Certified Design with Sustainable Materials for Eco-Friendly Development",
    "EV Charging Pods, Cycle Tracks, and Dedicated Bus Services for Smart, Green Mobility",
    "Enhanced Indoor Air Quality and Earthquake-Resistant Infrastructure for Safer Living",
    "Green Sit-Out Zones and Inclusive Public Spaces for Community Wellbeing",
    "Grade A Offices with Striking Glass Façade Elevate Corporate Presence",
    "Barrier-Free, Accessible Design to Ensure Convenience for All",
    "Thoughtfully Designed for Inclusivity, Sustainability, and Future-Ready Infrastructure"
  ];
  return (
    <section
      id="highlights"
      className="relative bg-black text-white overflow-hidden py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="overlay_gradient absolute top-[0]   w-[100%] left-[0]">
        <img
          src="assets/images/about_pattern.png"
          className="w-[100%] opacity-[0.11] z-[-1]"
          alt="pattern image"
        />
      </div>
      <div className="mb-8 md:mb-16">
        <CommonHeading className="text-white" heading={"Our Highlights"} />

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
          <picture>
            {/* Mobile image (up to 768px) */}
            <source
              srcSet="highlights-mobile.webp"
              media="(max-width: 768px)"
              type="image/webp"
            />

            {/* Default image for larger screens */}
            <img
              src="highlights.webp"
              alt="Descriptive Alt"
              className="rounded-[10px] w-full h-[500px] object-cover"
            />
          </picture>
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
                  className="w-[20px] h-[20px] text-white-500 flex-shrink-0 mt-[1px]"
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
            className="bg-black z-[99] cursor-pointer w-fit border border-white text-white px-4 py-3 xl:px-8 xl:py-3 text-xs xl:text-sm font-medium rounded-[30px] tracking-[1.5px] transition-colors duration-300"
          >
            Enquire Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurHighlightsSection;
