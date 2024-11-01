import AddItem from "./AddItem";
import InnerContainer from "./InnerContainer";
import Login from "./Login";
import SubHeader from "./SubHeader/SubHeader";

const MainContainer = () => {
  return (
    <div className="flex flex-col w-full mt-1">
        <SubHeader />
        <InnerContainer />
        <Login />
        <AddItem />
    </div>
  )
}

export default MainContainer;