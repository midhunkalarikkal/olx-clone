import { useContext } from "react";
import ItemCard from "./ItemCard";
import dummyDataContext from "../utils/useContext";

const FreshRecommendations = () => {
    
const {fresRecommended} = useContext(dummyDataContext)

  return (
    <div className="mt-4 p-16">
      <h1 className="text-2xl pl-6">Fresh recommendations</h1>
      <div className="flex flex-wrap p-4">
        {fresRecommended &&
            fresRecommended.map((item) => <ItemCard key={item.ad_id} data={item}/>)
        }
      </div>
    </div>
  );
};

export default FreshRecommendations;
