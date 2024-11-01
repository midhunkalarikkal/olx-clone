import Footer from "./Footer";
import Header from "./Header/Header";
import MainContainer from "./MainContainer";

const Body = () => {
  return (
    <div className="w-[100%]" style={{backgroundColor: "#f0f0f2"}}>
      {/* <div class="w-full h-screen flex items-center justify-center">
        <div class="block sm:hidden text-center text-white bg-blue-500 p-4 rounded">
          XS Screen
        </div>

        <div class="hidden sm:block md:hidden text-center text-white bg-green-500 p-4 rounded">
          SM Screen
        </div>

        <div class="hidden md:block lg:hidden text-center text-white bg-yellow-500 p-4 rounded">
          MD Screen
        </div>

        <div class="hidden lg:block xl:hidden text-center text-white bg-orange-500 p-4 rounded">
          LG Screen
        </div>

        <div class="hidden xl:block text-center text-white bg-red-500 p-4 rounded">
          XL Screen
        </div>
      </div> */}

      <Header />
      <MainContainer />
      <Footer />
    </div>
  );
};

export default Body;
