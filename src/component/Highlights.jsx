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
            // className=""
            // headingInCenter={true}
            heading={"Our Highlights"}
          />
        </div>


      </div>
    </section>
  );
};

export default OurHighlightsSection;
