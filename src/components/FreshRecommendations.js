import ItemCard from "./ItemCard";
import { useContext } from "react";
import Context from "../utils/Context";
import ShimmerCard from "./ShimmerCard";
import dummyDataContext from "../utils/useContext";

const FreshRecommendations = () => {
  const { fresRecommended } = useContext(dummyDataContext);
  const { frLoading, setFrLoading } = useContext(Context);

  if (!fresRecommended) {
    setFrLoading(true);
  } else {
    setFrLoading(false);
  }

  return (
    <div className="mt-1 md:mt-4 pt-10 md:p-16">
      <h1 className="text-lg md:text-2xl pl-6">Fresh recommendations</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {frLoading ? (
          Array(4)
            .fill()
            .map((_, index) => <ShimmerCard key={index} />)
        ) : fresRecommended.length === 0 ? (
          <h1 className="text-center text-red-500">
            No live data found on the server
          </h1>
        ) : (
          fresRecommended.map((item) => (
            <ItemCard key={item.ad_id} data={item} />
          ))
        )}
      </div>
    </div>
  );
};

export default FreshRecommendations;
