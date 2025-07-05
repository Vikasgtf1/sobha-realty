import React from "react";
import CommonHeading from "../utils/CommonHeading";
import EnquiryForm from "../common/EnquiryForm";
import { useEnquiryForm } from "../hooks/useEnquiryForm";
const Features = () => {
  const { isOpen, openForm, closeForm } = useEnquiryForm();

  const highlights = [
    "One of Noida’s Largest Floor Plates, offering expansive, flexible workspaces tailored for modern enterprises.",
    "21 High-Speed Elevators ensure seamless vertical movement across the building.",
    "Dedicated Access Points for office and retail zones, providing operational ease and privacy.",
    "Steel Composite Structure for enhanced durability, safety, and architectural efficiency.",
    "Multi-Level Car Parking with designated service floors to support large-scale operations.",
    "Fully Equipped Lifestyle Zone including Gym, Yoga & Meditation Centers, Indoor Pool, Billiards, and Board Games for a perfect work-life balance."
  ];
  return (
    <section
      id="features"
      className="relative  text-black overflow-hidden py-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="overlay_gradient absolute top-[0]  z-[-9] w-[100%] left-[0]">
        <img
          src="assets/images/about_pattern.png"
          className="w-[100%] opacity-[0.2] z-[-1]"
          alt="pattern image"
        />
      </div>
      <div className="mb-8 md:mb-16">
        <CommonHeading className="text-black" heading={"Our Features"} />
      </div>
      <div className="flex flex-col flex-wrap md:flex-row gap-[50px] md:gap-[70px] justify-center items-start">
        {/* Right - List and Button */}
        <div className=" md:basis-[40%] pt-[20px] xl:pt-[50px] flex flex-col gap-[10px] h-full">
          {/* List */}
          <ul className="space-y-4 mb-8">
            {highlights.map((item, index) => (
              <li
                key={index}
                className="flex items-start gap-2  text-[#202020] font-[100] font-helvetica text-[12px] leading-relaxed"
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
                <span className="flex-1  xl:text-[12px] xl:font-[100] text-[15px] font-[400] leading-[24px] font-helvetica tracking-[1px]">
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <button
            onClick={openForm}
            className="bg-black cursor-pointer w-fit border border-white text-white px-4 py-3 xl:px-8 xl:py-3 text-xs xl:text-sm font-medium rounded-[30px] tracking-[1.5px] transition-colors duration-300"
          >
            Enquire Now
          </button>
        </div>
        {/* Left - Image */}
        <div className="md:basis-[38%]">
           <picture>
            {/* Mobile image (up to 768px) */}
            <source
              srcSet="features-mobile.webp"
              media="(max-width: 768px)"
              type="image/webp"
            />

            {/* Default image for larger screens */}
            <img
              src="features.webp"
              alt="Descriptive Alt"
              className="rounded-[10px] w-full h-[500px] object-cover"
            />
          </picture>
        </div>
      </div>
      <EnquiryForm isOpen={isOpen} onClose={closeForm} />
    </section>
  );
};

export default Features;
