import React from "react";

const ItemCard = React.memo(({ data }) => {

    const {
    description,
    images: [{ big: { url } } = {}] = [],
    price: { value: { display } = {} } = {},
    locations_resolved : {ADMIN_LEVEL_1_name , ADMIN_LEVEL_3_name },
    created_at,
  } = data || {};

  const date = new Date(created_at);
  const month = date.getMonth() + 1;
  const day = date.getDate();
  
  return (
    <div className="flex flex-col bg-white rounded-lg overflow-hidden border border-gray-300 m-1">
    <div className="h-[80px] md:h-[180px]">
      <img
        className="w-full h-full object-contain"
        src={url}
        alt="Item"
      />
    </div>
    <div className="flex flex-col p-2 md:p-4 space-y-1 md:space-y-2">
      <h5 className="text-sm md:text-lg  font-semibold text-gray-800">{display}</h5>
      <p className="text-sm text-gray-600">{description.slice(0, 20)}...</p>
      <div className="flex justify-between text-sm text-gray-500">
        <p>{`${ADMIN_LEVEL_3_name} ${ADMIN_LEVEL_1_name}`}</p>
        <p>{`${month}/${day}`}</p>
      </div>
    </div>
  </div>
  );
});

export default ItemCard;
