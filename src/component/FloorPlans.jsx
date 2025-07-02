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
        <div className="text-center mb-8">
          <div className="text-center mb-16">
            <CommonHeading heading={"Master & Floor Plan"} />
          </div>

          <div className="text-center mb-16">
            <p className="text-[#000] font-merchant tracking-[1px] font-[100] max-w-4xl mx-auto leading-relaxed text-lg">
              Step into a world where every frame captures the essence of beauty
              and innovation. Each scene is thoughtfully designed to reflect
              elegance, purpose, and style. Experience a visual journey where
              luxury meets visionary design.
            </p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-6 cursor-pointer font-merchant py-3 mx-[30px] tracking-[2px] text-sm font-medium transition-all duration-200 ${
                activeTab === tab
                  ? "bg-black text-white rounded-full"
                  : "text-black border-y-[1px] border-solid border-gray-200 "
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Main Content Area */}
        <div className="flex flex-col lg:flex-row items-start gap-8 max-w-6xl w-full">
          {/* Floor Plan Image */}
          <div className="flex-1">
            <div className="bg-white rounded-lg p-4">
              <div className="bg-gray-100 rounded-lg p-6 min-h-96">
                {/* Simulated floor plan layout */}
                <div className="relative w-full h-80 bg-green-100 rounded border-2 border-green-300">
                  <div className="absolute inset-4 flex flex-col">
                    {/* Top row of units */}
                    <div className="flex h-1/3 gap-2 mb-2">
                      {["A", "B", "C", "D"].map((label) => (
                        <div
                          key={label}
                          className="flex-1 bg-pink-100 border border-pink-300 rounded flex items-center justify-center text-xs"
                        >
                          Building {label}
                        </div>
                      ))}
                    </div>

                    {/* Central green space */}
                    <div className="flex-1 bg-green-200 border border-green-400 rounded flex items-center justify-center text-xs mb-2">
                      Central Garden
                    </div>

                    {/* Bottom row */}
                    <div className="flex h-1/4 gap-2">
                      {["E", "F"].map((label) => (
                        <div
                          key={label}
                          className="w-1/3 bg-pink-100 border border-pink-300 rounded flex items-center justify-center text-xs"
                        >
                          Building {label}
                        </div>
                      ))}
                      <div className="w-1/3 bg-yellow-100 border border-yellow-300 rounded flex items-center justify-center text-xs">
                        Amenities
                      </div>
                    </div>
                  </div>

                  {/* Pool areas */}
                  <div className="absolute top-8 right-8 w-8 h-6 bg-blue-300 rounded"></div>
                  <div className="absolute bottom-20 left-8 w-8 h-6 bg-blue-300 rounded"></div>
                </div>

                {/* Legend */}
                <div className="mt-4 flex flex-wrap gap-4 text-xs">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-green-200 border border-green-400"></div>
                    <span>Garden Area</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-pink-100 border border-pink-300"></div>
                    <span>Residential</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-blue-300"></div>
                    <span>Swimming Pool</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-yellow-100 border border-yellow-300"></div>
                    <span>Amenities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Details Panel */}
          <div className="flex flex-col w-full lg:w-80">
            <div className="bg-white rounded-lg p-6 mb-6">
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
            <button className="bg-black max-w-fit text-white py-3 px-8 rounded-full text-sm font-medium hover:bg-gray-800 transition-colors duration-200">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FloorPlans;
