import React from "react";

const Shimmer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {[...Array(3)].map((_, index) => (
        <div
          key={index}
          className="bg-gray-400 rounded-lg p-4 shadow-md animate-pulse flex flex-col items-center space-y-4"
        >
          <div className="w-24 h-24 bg-gray-300 rounded-md"></div>
          <div className="flex flex-col space-y-2 w-full">
            <div className="h-4 bg-gray-300 rounded w-3/4"></div>
            <div className="h-4 bg-gray-300 rounded w-1/2"></div>
            <div className="h-4 bg-gray-300 rounded w-1/4"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Shimmer;
