import Body from "./components/Body";
import Context from "./utils/Context";
import Profile from "./components/Profile";
import { useEffect, useState } from "react";
import MainContainer from "./components/MainContainer";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";

function App() {
  const [frLoading, setFrLoading] = useState(true);
  const [loginOpen, setLoginOpen] = useState(false);
  const [updateItem, setUpdateItem] = useState(false);
  const [addItemOpen, setAddItemOpen] = useState(false);
  const [updateItemOpen, setUpdateItemOpen] = useState(false);
  const [liveProductsLoading, setLiveProductsLoading] = useState(true);
  const [userInfo, setUserInfo] = useState(() => {
    const savedUserInfo = localStorage.getItem("userInfo");
    return savedUserInfo ? JSON.parse(savedUserInfo) : null;
  });
  const [userLoggedIn, setUserLoggedIn] = useState(!!userInfo);
  


  useEffect(() => {
    if (userInfo) {
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
    } else {
      localStorage.removeItem("userInfo");
    }
  }, [userInfo]);

  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: '/',
          element: <MainContainer />
        },
        {
          path: "/profile",
          element: userLoggedIn ? (
            <Profile />
          ) : (
            <Navigate to="/" replace />
          )
        }
      ]
    }
  ])
  
  return (
    <div className="App">
      <Context.Provider
        value={{
          loginOpen,
          setLoginOpen,
          addItemOpen,
          setAddItemOpen,
          userLoggedIn,
          setUserLoggedIn,
          liveProductsLoading,
          setLiveProductsLoading,
          frLoading,
          setFrLoading,
          userInfo,
          setUserInfo,
          updateItemOpen,
          setUpdateItemOpen,
          updateItem,
          setUpdateItem,
        }}
      >
        <RouterProvider  router={appRouter}/>
      </Context.Provider>
    </div>
  );
}

export default App;
