import React from "react";

const LiveProductCard = React.memo(({ data }) => {
  const { price, place, createdAt, description, imageUrl } = data;

  const date = new Date(createdAt);
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return (
    <div className="flex flex-col bg-white rounded-lg overflow-hidden border border-gray-300 m-1 cursor-pointer">
      <div className="h-[80px] md:h-[180px] productCard m-1">
        <img
          className="w-full h-full object-contain"
          src={imageUrl}
          alt="Item"
        />
      </div>
      <div className="flex flex-col px-2 md:px-4 md:py-1 space-y-0.5">
        <h5 className="text-sm md:text-lg  font-semibold text-[#002f34]">
        ₹ {price}
        </h5>
        <p className="text-md text-[#002f34]">{description.slice(0, 20)}...</p>
        <div className="flex justify-between text-xs text-[#5c7a7d]">
          <p>{place.toUpperCase()}</p>
          <p>{`${day}/${month}/${year}`}</p>
        </div>
      </div>
    </div>
  );
});

export default LiveProductCard;
