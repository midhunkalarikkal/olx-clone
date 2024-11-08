import Advertisement from "./Advertisement"
import FreshRecommendations from "./FreshRecommendations";
import LiveProducts from "./LiveProducts";

const InnerContainer = () => {
  return (
    <div className="w-[90%] bg-white h-100vh p-2 m-auto mt-1">
        <Advertisement />
        <LiveProducts />
        <FreshRecommendations />
    </div>
  )
}

export default InnerContainer;