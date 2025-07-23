import React from "react";

function ShimmerRest() {
  return (
    <div className="animate-pulse flex flex-col bg-white rounded-xl shadow-md w-full sm:w-[48%] md:w-[30%] max-w-[320px]">
      <div className="bg-gray-200 h-44 w-full rounded-t-xl"></div>

      <div className="p-3 space-y-2">
        {/* Title and time */}
        <div className="flex justify-between items-center">
          <div className="h-4 bg-gray-200 rounded w-2/3"></div>
          <div className="h-3 bg-gray-200 rounded w-1/4"></div>
        </div>

        {/* Cuisines */}
        <div className="h-3 bg-gray-200 rounded w-3/4"></div>

        {/* Rating and cost */}
        <div className="flex justify-between items-center">
          <div className="h-4 bg-gray-200 rounded w-1/3"></div>
          <div className="h-4 bg-gray-200 rounded w-1/3"></div>
        </div>
      </div>
    </div>
  );
}

export default ShimmerRest;
