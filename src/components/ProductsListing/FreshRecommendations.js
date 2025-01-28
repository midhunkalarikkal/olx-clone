import { useContext } from "react";
import ItemCard from "../Item/ItemCard";
import Context from "../../utils/Context";
import ShimmerCard from "../Shimmers/ShimmerCard";
import dummyDataContext from "../../utils/useContext";

const FreshRecommendations = () => {
  const { freshRecommended } = useContext(dummyDataContext);
  const { frLoading, setFrLoading } = useContext(Context);

  if (!freshRecommended) {
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
        ) : !freshRecommended ? (
          <h1 className="text-center text-red-500">
            No live data found on the server
          </h1>
        ) : (
          freshRecommended &&
          freshRecommended.map((item) => (
            <ItemCard key={item.ad_id} data={item} />
          ))
        )}
      </div>
    </div>
  );
};

export default FreshRecommendations;
