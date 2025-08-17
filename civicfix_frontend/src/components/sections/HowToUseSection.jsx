import React from "react";

const HowToUseSection = () => {
  return (
    <section className="py-16 bg-[#EBF2FF] px-4">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-center text-[#1a237e] mb-16">
          How to use?
        </h2>

        <div className="relative">
          {/* Cards Container */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-4 mb-16">
            {/* Card 1 */}
            <div className="w-full md:w-1/3 bg-white rounded-2xl p-6 shadow-lg relative z-10">
              <div className="flex flex-col items-center">
                <img
                  src="/images/card1.png"
                  alt="Select an Issue"
                  className="w-48 h-48 object-contain mb-4"
                />
                <h3 className="text-xl font-semibold text-center">
                  <span className="mr-2">1️⃣</span>
                  1. Select an Issue
                </h3>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-full md:w-1/3 bg-white rounded-2xl p-6 shadow-lg relative z-10">
              <div className="flex flex-col items-center">
                <img
                  src="/images/card2.png"
                  alt="Upload a Geo-tagged image"
                  className="w-48 h-48 object-contain mb-4"
                />
                <h3 className="text-xl font-semibold text-center">
                  <span className="mr-2">2️⃣</span>
                  2. Upload a Geo-tagged image
                </h3>
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-full md:w-1/3 bg-white rounded-2xl p-6 shadow-lg relative z-10">
              <div className="flex flex-col items-center">
                <img
                  src="/images/card3.png"
                  alt="Describe the issue and report"
                  className="w-48 h-48 object-contain mb-4"
                />
                <h3 className="text-xl font-semibold text-center">
                  <span className="mr-2">3️⃣</span>
                  3. Describe the issue and report!
                </h3>
              </div>
            </div>

            {/* Curved Arrows - Hidden on mobile */}
            <div className="hidden md:block absolute top-1/3 left-1/4 w-1/4 h-16 z-0">
              <div className="w-full h-full border-t-2 border-dashed border-gray-400 transform -rotate-6"></div>
              <div className="absolute right-0 top-0 w-4 h-4 border-t-2 border-r-2 border-dashed border-gray-400 transform rotate-45 translate-x-1/2 -translate-y-1/2"></div>
            </div>
            <div className="hidden md:block absolute top-1/3 right-1/4 w-1/4 h-16 z-0">
              <div className="w-full h-full border-t-2 border-dashed border-gray-400 transform rotate-6"></div>
              <div className="absolute right-0 top-0 w-4 h-4 border-t-2 border-r-2 border-dashed border-gray-400 transform rotate-45 translate-x-1/2 -translate-y-1/2"></div>
            </div>
          </div>

          {/* Report Button */}
          <div className="text-center">
            <button className="bg-[#FFD54F] text-black font-bold py-4 px-8 rounded-full text-lg hover:bg-[#FFC107] transition-colors duration-300">
              Report Issues Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToUseSection;
