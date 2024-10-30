import AddItem from "./AddItem";
import InnerContainer from "./InnerContainer";
import Login from "./Login";
import SubHeader from "./SubHeader";

const MainContainer = () => {
  return (
    <div className="flex flex-col w-full mt-1" style={{backgroundColor : "#f0f0f2"}}>
        <SubHeader />
        <InnerContainer />
        <Login />
        <AddItem />
    </div>
  )
}

export default MainContainer;