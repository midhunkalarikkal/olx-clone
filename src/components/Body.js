import Footer from "./Footer";
import Header from "./Header/Header";
import MainContainer from "./MainContainer";

const Body = () => {
  return (
    <div className="w-[100%]" style={{backgroundColor: "#f0f0f2"}}>
      <Header />
      <MainContainer />
      <Footer />
    </div>
  );
};

export default Body;
