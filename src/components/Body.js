import Footer from "./Footer";
import AddItem from "./AddItem";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="w-[100%]" style={{backgroundColor: "#f0f0f2"}}>
      <Header />
      <Outlet />
      <Footer />
      <AddItem />
    </div>
  );
};

export default Body;
