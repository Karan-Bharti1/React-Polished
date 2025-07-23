import React from "react";

const ShimmerMenu = () => {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 py-6 animate-pulse max-w-6xl">
     
      <div className="bg-gray-100 p-4 sm:p-6 my-4 rounded-xl shadow-md">
        <div className="flex justify-between mb-3">
          <div className="h-6 bg-gray-300 rounded w-1/2"></div>
          <div className="h-6 bg-gray-300 rounded w-16"></div>
        </div>
        <div className="flex justify-between mb-2 flex-wrap gap-2">
          <div className="h-4 bg-gray-300 rounded w-1/3"></div>
          <div className="h-4 bg-gray-300 rounded w-1/4"></div>
        </div>
        <div className="flex justify-between mb-2 flex-wrap gap-2">
          <div className="h-4 bg-gray-300 rounded w-1/4"></div>
          <div className="h-4 bg-gray-300 rounded w-1/6"></div>
        </div>
      </div>

      {/* Menu Item Shimmer cards (repeat 5x) */}
      {[...Array(5)].map((_, index) => (
        <div
          key={index}
          className="shadow-md bg-white p-4 sm:p-6 my-4 rounded-xl"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start gap-6 sm:gap-8">
            
            {/* Left text shimmer */}
            <div className="flex-1 space-y-3">
              <div className="h-4 bg-gray-300 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/4"></div>
              <div className="h-4 bg-gray-300 rounded w-16"></div>
              <div className="h-3 bg-gray-200 rounded w-full"></div>
              <div className="h-3 bg-gray-200 rounded w-5/6"></div>
            </div>

            {/* Right image shimmer */}
            <div className="w-full sm:w-36 h-36 bg-gray-300 rounded-lg flex-shrink-0"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShimmerMenu;
