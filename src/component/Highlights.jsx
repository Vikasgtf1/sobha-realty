import React from "react";
import CommonHeading from "../utils/CommonHeading";
import { useState } from "react";

const OurHighlightsSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  // Generate dots in a circular pattern
  const generateDots = () => {
    const dots = [];
    const radius = 200; // 400px diameter = 200px radius
    const dotCount = 80; // Number of dots

    for (let i = 0; i < dotCount; i++) {
      const angle = (i / dotCount) * 2 * Math.PI;
      const dotRadius = Math.random() * radius;
      const x = Math.cos(angle) * dotRadius;
      const y = Math.sin(angle) * dotRadius;

      dots.push(
        <div
          key={i}
          className="absolute w-1 h-1 bg-red rounded-full opacity-30"
          style={{
            left: `${200 + x}px`,
            top: `${200 + y}px`,
          }}
        />
      );
    }

    return dots;
  };
  return (
    <section
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative bg-black text-white overflow-hidden py-16 px-4 sm:px-6 lg:px-8"
    >
      {/* Dot Pattern */}
      {isHovered && (
        <div
          className="absolute pointer-events-none transition-opacity duration-300"
          style={{
            left: `${mousePosition.x - 200}px`,
            top: `${mousePosition.y - 200}px`,
            width: "400px",
            height: "400px",
          }}
        >
          {generateDots()}
        </div>
      )}

      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <CommonHeading
            className=""
            headingInCenter={false}
            heading={"Our Highlights"}
          />
        </div>

        <div className="flex  flex-wrap justify-evenly ">
          <div className="flex flex-col xl:basis-[26%] basis-[100%] mb-[60px]  xl:mb-[100px]">
            <div className="text-5xl lg:text-6xl font-light">
              150k
              <span className="text-4xl lg:text-5xl font-light ml-2">sqft</span>
            </div>
            <p className="text-gray-300  font-helvetica text-sm leading-relaxed  text-left">
              Of meticulously
              <br />
              designed living spaces
            </p>
          </div>

          {/* 60% Stat */}
          <div className="flex flex-col xl:basis-[26%] basis-[100%] mb-[60px]  xl:mb-[100px]">
            <div className="text-5xl lg:text-6xl font-light">
              60<span className="text-3xl lg:text-4xl">%</span>
            </div>
            <p className="text-gray-300 font-helvetica text-sm leading-relaxed text-left">
              Green Spaces for
              <br />
              tranquility & wellness
            </p>
          </div>

          {/* 60% Stat */}
          <div className="flex flex-col xl:basis-[26%] basis-[100%] mb-[60px]  xl:mb-[100px]">
            <div className="text-5xl lg:text-6xl font-light">
              60<span className="text-3xl lg:text-4xl">%</span>
            </div>
            <p className="text-gray-300 font-helvetica text-sm leading-relaxed text-left">
              Green Spaces for
              <br />
              tranquility & wellness
            </p>
          </div>

          {/* 30 Stat */}
          <div className="flex flex-col xl:basis-[26%] basis-[100%] mb-[60px]  xl:mb-[100px]">
            <div className="text-6xl lg:text-7xl font-light">30</div>
            <p className="text-gray-300 font-helvetica text-sm leading-relaxed max-w-xs ">
              Exclusive residence
              <br />
              each tailored for
              <br />
              comfort & wellness
            </p>
          </div>
          {/* 30 Stat */}
          <div className="flex flex-col xl:basis-[26%] basis-[100%] mb-[60px]  xl:mb-[100px]">
            <div className="text-6xl lg:text-7xl font-light">30</div>
            <p className="text-gray-300 font-helvetica text-sm leading-relaxed max-w-xs ">
              Exclusive residence
              <br />
              each tailored for
              <br />
              comfort & wellness
            </p>
          </div>
          {/* View More Button */}
          <div className="flex flex-col xl:basis-[26%] basis-[100%] xl:mb-[100px]">
            <button className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors duration-300">
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
                width="110px"
                height="2"
                viewBox="0 0 210 2"
                fill="none"
              >
                <path d="M0 0.75H210" stroke="url(#paint0_linear_3627_952)" />
                <defs>
                  <linearGradient
                    id="paint0_linear_3627_952"
                    x1="0"
                    y1="1.25"
                    x2="210"
                    y2="1.25"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.485577" stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurHighlightsSection;
