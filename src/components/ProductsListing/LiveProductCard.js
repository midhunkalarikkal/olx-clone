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
      <div className="flex flex-col p-2 md:p-4 space-y-1 md:space-y-2">
        <h5 className="text-sm md:text-lg  font-semibold text-gray-800">
        ₹ {price}
        </h5>
        <p className="text-sm text-gray-600">{description.slice(0, 20)}...</p>
        <div className="flex justify-between text-sm text-gray-500">
          <p>{place}</p>
          <p>{`${day}/${month}/${year}`}</p>
        </div>
      </div>
    </div>
  );
});

export default LiveProductCard;
