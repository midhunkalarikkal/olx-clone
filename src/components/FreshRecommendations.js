import { useContext } from "react";
import ItemCard from "./ItemCard";
import dummyDataContext from "../utils/useContext";

const FreshRecommendations = () => {
    
const {fresRecommended} = useContext(dummyDataContext)

  return (
    <div className="mt-1 md:mt-4 pt-10 md:p-16">
      <h1 className="text-lg md:text-2xl pl-6">Fresh recommendations</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {fresRecommended &&
            fresRecommended.map((item) => <ItemCard key={item.ad_id} data={item}/>)
        }
      </div>
    </div>
  );
};

export default FreshRecommendations;
