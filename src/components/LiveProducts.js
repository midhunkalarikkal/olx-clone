import React, { useContext, useEffect, useState } from "react";
import LiveProductCard from "./LiveProductCard";
import Context from "../utils/Context";
import ShimmerCard from "./ShimmerCard";

const LiveProducts = () => {
  const [liveProducts, setLiveProducts] = useState(null);
  const { liveProductsLoading, setLiveProductsLoading } = useContext(Context);

  const getLiveProduct = async () => {
    const response = await fetch("http://localhost:5000/user/getLiveProducts", {
      method: "GET",
    });
    if (response) {
      console.log("response : ", response);
    }
    if (!response.ok) {
      console.log("fetching error : ", response);
      setLiveProductsLoading(false);
      return;
    }
    const data = await response.json();
    console.log("data : ", data);
    setLiveProducts(data);
    setLiveProductsLoading(false);
  };

  useEffect(() => {
    getLiveProduct();
  }, []);
  
  return (
    <div className="mt-1 md:mt-4 pt-10 md:p-16">
      <h1 className="text-lg md:text-2xl pl-6">Live Products</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {liveProductsLoading
          ? Array(4)
              .fill()
              .map((_, index) => <ShimmerCard key={index} />)
          : liveProducts &&
            liveProducts.map((item) => (
              <LiveProductCard key={item._id} data={item} />
            ))}
      </div>
    </div>
  );
};

export default LiveProducts;
