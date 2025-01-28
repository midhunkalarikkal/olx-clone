import React from "react";
import ShimmerCard from "./ShimmerCard";

const Shimmer = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {[...Array(3)].map((_, index) => (
        <ShimmerCard key={index}/>
      ))}
    </div>
  );
};

export default Shimmer;
