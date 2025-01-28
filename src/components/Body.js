import Footer from "./Footer/Footer";
import AddItem from "./Item/AddItem";
import Header from "./Header/Header";
import { Outlet } from "react-router-dom";
import UpdateItem from "./Item/UpdateItem";

const Body = () => {
  return (
    <div className="w-[100%]" style={{backgroundColor: "#f0f0f2"}}>
      <Header />
      <Outlet />
      <Footer />
      <AddItem />
      <UpdateItem />
    </div>
  );
};

export default Body;
