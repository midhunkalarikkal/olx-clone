import React from "react";
import LiveProductCard from "../ProductsListing/LiveProductCard";

const ItemCard = React.memo(({ data }) => {

    const {
    description,
    images: [{ big: { url: imageUrl } } = {}] = [],
    price: { value: { display: price } = {} } = {},
    locations_resolved : {ADMIN_LEVEL_1_name , ADMIN_LEVEL_3_name } = {},
    created_at : createdAt,
  } = data || {};

  const place = [ADMIN_LEVEL_1_name, ADMIN_LEVEL_3_name].filter(Boolean).join(", ");
  const formattedData = {price, place, createdAt, description, imageUrl}
  
  return (
   <LiveProductCard data={formattedData} />
  );
});

export default ItemCard;
