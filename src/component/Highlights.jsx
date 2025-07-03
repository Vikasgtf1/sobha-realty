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


  const highlights = [
    "With mesmerising views of the skylines, the iconic twin tower has signature work spaces on floor G+34 and G+30 with a Sky Deck, enabling you to bring your dream office space to life.",
    "Fulfilling your fashionista-fantasies with high street retail with over 100 renowned names to choose your pick and enjoy a view of waterscape as you engulf in an unparalleled experience.",
    "2 Acres’ water body with a Yacht Garden: an ultra luxurious open air Fine dining experience surrounded by water and modelled like a yacht.",
    "Dedicated Entertainment zones: for a thrilling and exhilarating experience.",
    "5 Screen Multiplex with a capacity of over 900 people, equipped with cutting edge technology.",
    "Multi cuisine food court and fine dining spaces overlooking water bodies, giving it a great ambience for spending quality time.",
    "Fancied as one of the tallest commercial complexes in Greater Noida West.",
    "Anchor stores with enormous space."
  ]
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

        <div className="mb-8 md:mb-16">
          <CommonHeading
            // className=""
            // headingInCenter={true}
            heading={"Our Highlights"}
          />
          
        </div><div className="grid grid-cols-1 md:grid-cols-12 gap-[50px] md:gap-[80px] items-start">
  {/* Left - Image */}
  <div className=" md:col-span-6">
    <img
      src="/highlights.webp"
      alt="Descriptive Alt"
      className="rounded-[10px] w-full h-auto object-cover"
    />
  </div>

  {/* Right - List and Button */}
  <div className=" md:col-span-6 flex flex-col gap-[10px] h-full">
    {/* List */}
    <ul className="space-y-3 mb-4">
      {highlights.map((item, index) => (
        <li key={index} className="flex items-center gap-2 text-white text-[#202020] font-[100] font-helvetica  text-[12px] leading-relaxed">
          <svg
            className="w-5 h-5 text-white-500"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
          {item}
        </li>
      ))}
    </ul>
    
              <button className="bg-black w-fit border border-white text-white px-4 py-2 xl:px-8 xl:py-3 text-xs xl:text-sm font-medium rounded-[30px] tracking-[1.5px] hover:bg-gray-800 transition-colors duration-300">
                Enquire Now
              </button>

  </div>
</div>


    </section>
  );
};

export default OurHighlightsSection;
