import Advertisement from "./Advertisement"
import FreshRecommendations from "./FreshRecommendations";

const InnerContainer = () => {
  return (
    <div className="w-[80%] bg-white h-100vh p-2 m-auto mt-1">
        <Advertisement />
        <FreshRecommendations />
    </div>
  )
}

export default InnerContainer;