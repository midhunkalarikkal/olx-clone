import Context from "../../utils/Context";
import LiveProductCard from "./LiveProductCard";
import ShimmerCard from "../Shimmers/ShimmerCard";
import React, { useCallback, useContext, useEffect, useState } from "react";

const LiveProducts = () => {
  const [liveProducts, setLiveProducts] = useState(null);
  const {
    liveProductsLoading,
    setLiveProductsLoading,
    userInfo,
    setLiveProductFetchError,
    liveProductFetchError,
  } = useContext(Context);
  const { uid } = userInfo || "";
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  const getLiveProduct = useCallback(async () => {
    
    setLiveProductsLoading(true);
    try {
      const response = await fetch(
        `${API_BASE_URL}/user/getLiveProducts?uid=${uid}`,
        { method: "GET" }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch live products");
      }

      const data = await response.json();
      setLiveProducts(data);
      setLiveProductFetchError(false);
    } catch (error) {
      setLiveProductFetchError(true);
    } finally {
      setLiveProductsLoading(false);
    }
  }, [uid, API_BASE_URL, setLiveProductsLoading, setLiveProductFetchError]);

  useEffect(() => {
    getLiveProduct();
  }, [getLiveProduct]);

  if (liveProductFetchError) {
    return (
      <div className="mt-1 md:mt-4 pt-10 md:p-16">
        <h1 className="text-lg md:text-2xl pl-6">Live Products</h1>
        <div className="p-1 bg-slate-100 rounded-lg">
          <h1 className="text-center text-red-500 font-bold">
            Live data fetching error
          </h1>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-1 md:mt-4 pt-10 md:p-16">
      <h1 className="text-lg md:text-2xl pl-6">Live Products</h1>

      {liveProducts && liveProducts.length === 0 && (
        <div className="p-1 bg-slate-100 rounded-lg">
          <h1 className="text-center text-red-500 font-bold">
            No live data found on the server
          </h1>
        </div>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-1">
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
