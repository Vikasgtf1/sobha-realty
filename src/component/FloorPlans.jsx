import React, { useState } from "react";
import CommonHeading from "../utils/CommonHeading";

function FloorPlans() {
  const [activeTab, setActiveTab] = useState("Master Plan");

  const tabs = ["Master Plan", "1 BHK Plan", "2 BHK Plan", "3 BHK Plan"];

  return (
    <div className="w-full min-h-screen relative overflow-hidden">
      {/* Background dots pattern */}
      <div className="absolute inset-0">
        {Array.from({ length: 800 }).map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 0.5 + 0.2}px`,
              height: `${Math.random() * 0.5 + 0.2}px`,
              opacity: Math.random() * 0.4 + 0.1,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center px-4 py-12">
        {/* Header */}
        <div className="text-center xl:mb-8">
          <div className="text-center mb-16">
            <CommonHeading heading={"Master & Floor Plan"} />
          </div>

          <div className="text-center mb-16">
            <p className="text-[#000] font-merchant tracking-[1px] font-[100] max-w-4xl mx-auto leading-relaxed text-[14px] xl:text-lg">
              Step into a world where every frame captures the essence of beauty
              and innovation. Each scene is thoughtfully designed to reflect
              elegance, purpose, and style. Experience a visual journey where
              luxury meets visionary design.
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="w-full grid grid-cols-2 gap-3 sm:gap-4 md:flex md:flex-wrap md:justify-center mb-12 max-w-lg md:max-w-none mx-auto">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-3 sm:px-4 md:px-6 cursor-pointer font-merchant py-2 sm:py-3 
        tracking-[1px] sm:tracking-[2px] text-xs sm:text-sm font-medium 
        transition-all duration-200 whitespace-nowrap text-center ${
          activeTab === tab
            ? "bg-black text-white rounded-full"
            : "text-black border-y-[1px] border-solid border-gray-200"
        }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col-reverse  lg:flex-row xl:justify-center items-start gap-8 max-w-6xl w-full">
          {/* Floor Plan Image */}

          <img
            src="hero.png"
            className="xl:h-[400px] h-[300px] object-cover xl:w-[700px] w-[500px]"
            alt="floor-plans"
          />

          {/* Details Panel */}
          <div className="flex flex-col w-full lg:w-80">
            <div className="bg-white rounded-lg xl:p-6 mb-6">
              <div className="space-y-4 font-helvetica">
                <div className="flex justify-between items-center py-2 border-b-[1.3px] border-gray-100">
                  <span className="text-sm">Super Area</span>
                  <span className="font-medium">2500 Sq.Ft.</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b-[1.3px] border-gray-100">
                  <span className="text-sm">Carpet Area</span>
                  <span className="font-medium">1500 Sq.Ft.</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b-[1.3px] border-gray-200">
                  <span className="text-sm">Balcony Area</span>
                  <span className="font-medium">1200 Sq.Ft.</span>
                </div>
              </div>
            </div>

            {/* Button */}
            <button className="bg-black max-w-fit text-white px-4 py-2 xl:px-8 xl:py-4 text-xs xl:text-sm font-medium rounded-[30px] tracking-[1.5px] hover:bg-gray-800 transition-colors duration-300">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FloorPlans;
