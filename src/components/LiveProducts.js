import Context from "../utils/Context";
import ShimmerCard from "./ShimmerCard";
import LiveProductCard from "./LiveProductCard";
import React, { useCallback, useContext, useEffect, useState } from "react";

const LiveProducts = () => {
  const [liveProducts, setLiveProducts] = useState(null);
  const { liveProductsLoading, setLiveProductsLoading } = useContext(Context);

  const getLiveProduct = useCallback(async () => {
    const response = await fetch(`https://olx-c-backend.onrender.com/user/getLiveProducts`, {
      method: "GET",
    });
    if (!response.ok) {
      setLiveProductsLoading(true);
      return;
    }
    const data = await response.json();
    setLiveProducts(data);
    setLiveProductsLoading(false);
  },[setLiveProductsLoading]);

  useEffect(() => {
    getLiveProduct();
  }, []);

  return (
    <div className="mt-1 md:mt-4 pt-10 md:p-16">
      <h1 className="text-lg md:text-2xl pl-6">Live Products</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {liveProductsLoading ? (
          Array(4)
            .fill()
            .map((_, index) => <ShimmerCard key={index} />)
        ) : liveProducts && liveProducts.length === 0 ? (
          <h1 className="text-center text-red-500">
            No live data found on the server
          </h1>
        ) : (
          liveProducts &&
          liveProducts.map((item) => (
            <LiveProductCard key={item._id} data={item} />
          ))
        )}
      </div>
    </div>
  );
};

export default LiveProducts;
