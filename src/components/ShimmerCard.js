import React from "react";

const ShimmerCard = () => {
  return (
    <div className="flex flex-col bg-[#707070] rounded-lg overflow-hidden border border-gray-300 m-1">
      <div className="h-[80px] md:h-[180px] shimmer mb-4 bg-slate-400"></div>
      <div className="flex flex-col p-2 md:p-4 space-y-2">
        <div className="h-5 w-1/4 shimmer"></div>

        <div className="h-3 w-3/4 shimmer"></div>

        <div className="flex justify-between text-sm text-gray-500">
          <div className="h-3 w-1/4 shimmer"></div>
          <div className="h-3 w-1/4 shimmer"></div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerCard;