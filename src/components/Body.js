import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header/Header";

const Body = () => {
  return (
    <div className="w-[100%]" style={{backgroundColor: "#f0f0f2"}}>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Body;
