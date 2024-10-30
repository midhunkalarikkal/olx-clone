import { useContext, useEffect } from "react";
import Context from "../utils/Context";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";

const Header = () => {
  const { setLoginOpen, setAddItemOpen, userName , setUserName } = useContext(Context);
  const handleOpen = () => {
    setLoginOpen(true);
  };
  const handleAddItem = () => setAddItemOpen(true);
  const handleLogOut = () => {
    signOut(auth)
    .then(() => {
    })
    .catch((error)=>{
      console.log("error : ",error)
    })
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
          const {displayName} = user
            setUserName(displayName);
          } else {
          setUserName(null);
        }
      });
      return () => unSubscribe();
},[setUserName])

  return (
    <div
      className="w-full flex p-1 border-b-4 border-white shadow-lg"
      style={{ backgroundColor: "#f0f0f2" }}
    >
      <div className="w-[20%] flex px-6 items-center">
        <img
          className="invert w-[20%]"
          src="https://statics.olx.in/external/base/img/cartrade/logo/olx.svg?v=1"
          alt="Logo"
        />
        <input
          className="w-[80%] mx-3 h-12 py-2 px-6 border-2 rounded-sm"
          style={{
            borderColor: "#002f34",
            borderWidth: "2px",
            borderStyle: "solid",
          }}
          type="text"
          placeholder="India"
        />
      </div>
      <div className="w-[60%] flex items-center">
        <input
          className="w-[96%] h-12 p-2 border-2 rounded-l-sm"
          style={{
            borderColor: "#002f34",
            borderWidth: "2px",
            borderStyle: "solid",
          }}
          type="text"
          placeholder="Find Cars. Mobile Phones and more...."
        />
        <button
          className="w-[4%] h-12 rounded-r-sm px-6 flex justify-center items-center"
          style={{
            backgroundColor: "#002f34",
          }}
        >
          🔍
        </button>
      </div>
      <div className="w-[13%] flex px-3 items-center justify-around">
        <h4
          className="font-semibold text-lg"
          style={{
            color: "#002f34",
          }}
        >
          {userName || "English"}
        </h4>
        {userName ? (
          <h4
            className="font-semibold text-lg hover:underline cursor-pointer"
            style={{ color: "#002f34" }}
            onClick={handleLogOut}
          >
            Logout
          </h4>
        ) : (
          <h4
            className="font-semibold text-lg hover:underline cursor-pointer"
            style={{ color: "#002f34" }}
            onClick={handleOpen}
          >
            Login
          </h4>
        )}
      </div>
      <div className="relative w-[7%] mt-3 h-full">
        <div>
          <div className="bg-cyan-400 rounded-t-3xl flex justify-center">b</div>
          <div className="flex w-full">
            <div className="bg-yellow-400 w-[50%] rounded-bl-3xl flex justify-center shadow-lg">
              b
            </div>
            <div className="bg-blue-600 w-[50%] rounded-br-3xl flex justify-center shadow-lg">
              b
            </div>
          </div>
        </div>
        <button
          className="w-[90%] h-[80%] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-[50%] bg rounded-2xl font-semibold text-xl"
          style={{ background: "#f0f0f2" }}
          onClick={handleAddItem}
        >
          <span className="">+</span> Sell
        </button>
      </div>
    </div>
  );
};

export default Header;
