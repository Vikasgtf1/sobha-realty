import React from "react";
import CommonHeading from "../utils/CommonHeading";

const OurHighlightsSection = () => {
  return (
    <section className="bg-black text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <CommonHeading
            className=""
            headingInCenter={false}
            heading={"Our Highlights"}
          />
        </div>

        <div className="flex flex-wrap items-center justify-between">
          {" "}
          {/* 150k Stat */}
          <div className="basis-[41%] flex flex-col items-center justify-center">
            <div>
              <div className="text-7xl lg:text-8xl font-light">
                150k
                <span className="text-4xl lg:text-5xl font-light ml-2">
                  sqft
                </span>
              </div>
              <p className="text-gray-300 font-helvetica justify-start text-sm leading-relaxed max-w-xs">
                Of meticulously
                <br />
                designed living spaces
              </p>
            </div>
          </div>
          {/* Stats Flex Layout */}
          <div className="flex basis-[50%] justify-end flex-wrap">
            {/* Right Column Stats */}
            <div className="flex flex-wrap">
              {/* 60% Stat */}
              <div className="basis-[100%] mb-[170px] space-y-3">
                <div className="text-5xl lg:text-6xl font-light">
                  60<span className="text-3xl lg:text-4xl">%</span>
                </div>
                <p className="text-gray-300 font-helvetica text-sm leading-relaxed">
                  Green Spaces for
                  <br />
                  tranquility & wellness
                </p>
              </div>

              {/* 30 Stat */}
              <div className="basis-[100%] space-y-3">
                <div className="text-5xl lg:text-6xl font-light">24/7</div>
                <p className="text-gray-300 font-helvetica text-sm leading-relaxed">
                  Concierge services,
                  <br />
                  meeting every need
                  <br />
                  effortlessly
                </p>
              </div>
            </div>
            <div className="flex flex-wrap ">
              <div className="basis-[100%] space-y-4">
                <div className="text-6xl lg:text-7xl font-light">30</div>
                <p className="text-gray-300 font-helvetica text-sm leading-relaxed max-w-xs">
                  Exclusive residence
                  <br />
                  each tailored for
                  <br />
                  comfort & wellness
                </p>
              </div>

              <div className="basis-[100%] flex justify-center flex-col">
                <button className="flex items-center flex-wrap space-x-2 text-white hover:text-gray-300 transition-colors duration-300">
                  <span className="text-sm font-light">View More</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M7 17l9.2-9.2M17 17V7H7"
                    />
                  </svg>
                </button>
                <div className="w-[100px] mt-[10px]">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="210"
                    height="2"
                    viewBox="0 0 210 2"
                    fill="none"
                  >
                    <path
                      d="M0 0.75H210"
                      stroke="url(#paint0_linear_3627_952)"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear_3627_952"
                        x1="0"
                        y1="1.25"
                        x2="210"
                        y2="1.25"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop offset="0.485577" stop-color="white" />
                        <stop offset="1" stop-color="white" stop-opacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurHighlightsSection;
