import React from "react";

const HowToUseSection = () => {
  return (
    <section className="py-20 bg-[#F8F9FF]">
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-[#002B96] mb-20">
          How to use?
        </h2>

        <div className="relative">
          {/* Cards Container */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-8 md:gap-16 mb-16">
            {/* Card 1 */}
            <div className="w-full md:w-1/3 bg-white rounded-3xl p-8 shadow-lg relative z-10">
              <div className="flex flex-col items-center">
                <div className="w-56 h-56 flex items-center justify-center mb-6">
                  <img 
                    src="/images/card1.svg" 
                    alt="Select an Issue" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-center text-[#002B96]">
                  <span className="mr-2">1️⃣</span>
                  1. Select an Issue
                </h3>
              </div>
            </div>

            {/* Card 2 */}
            <div className="w-full md:w-1/3 bg-white rounded-3xl p-8 shadow-lg relative z-10">
              <div className="flex flex-col items-center">
                <div className="w-56 h-56 flex items-center justify-center mb-6">
                  <img 
                    src="/images/card2.svg" 
                    alt="Upload a Geo-tagged image" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-center text-[#002B96]">
                  <span className="mr-2">2️⃣</span>
                  2. Upload a Geo-tagged image
                </h3>
              </div>
            </div>

            {/* Card 3 */}
            <div className="w-full md:w-1/3 bg-white rounded-3xl p-8 shadow-lg relative z-10">
              <div className="flex flex-col items-center">
                <div className="w-56 h-56 flex items-center justify-center mb-6">
                  <img 
                    src="/images/card3.svg" 
                    alt="Describe the issue and report" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-center text-[#002B96]">
                  <span className="mr-2">3️⃣</span>
                  3. Describe the issue and report!
                </h3>
              </div>
            </div>

            {/* Curved Arrows - Hidden on mobile */}
            <div className="hidden md:block absolute top-1/2 left-1/4 w-1/4 h-16 z-0">
              <svg className="w-full h-full" viewBox="0 0 200 50">
                <path
                  d="M0,25 Q90,25 100,25 T200,25"
                  fill="none"
                  stroke="#9CA3AF"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <polygon 
                  points="190,20 200,25 190,30"
                  fill="#9CA3AF"
                />
              </svg>
            </div>
            <div className="hidden md:block absolute top-1/2 right-1/4 w-1/4 h-16 z-0">
              <svg className="w-full h-full" viewBox="0 0 200 50">
                <path
                  d="M0,25 Q90,25 100,25 T200,25"
                  fill="none"
                  stroke="#9CA3AF"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                />
                <polygon 
                  points="190,20 200,25 190,30"
                  fill="#9CA3AF"
                />
              </svg>
            </div>
          </div>

          {/* Report Button */}
          <div className="text-center">
            <button className="bg-[#FFD54F] text-black font-bold text-xl py-4 px-12 rounded-full hover:bg-[#FFC107] transition-colors duration-300 shadow-lg">
              Report Issues Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToUseSection;
