import Login from "./Login";
import InnerContainer from "./InnerContainer";
import SubHeader from "./SubHeader/SubHeader";

const MainContainer = () => {
  return (
    <div className="flex flex-col w-full mt-1">
        <SubHeader />
        <InnerContainer />
        <Login />
    </div>
  )
}

export default MainContainer;