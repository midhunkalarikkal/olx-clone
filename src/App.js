import { useState } from "react";
import Body from "./components/Body";
import Context from "./utils/Context";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import Profile from "./components/Profile";

function App() {
  const [loginOpen, setLoginOpen] = useState(false);
  const [addItemOpen, setAddItemOpen] = useState(false);
  const [userName, setUserName] = useState(null);
  const [userUid, setUserUid] = useState(null);
  const [userLoggedIn , setUserLoggedIn] = useState(false);
  const [liveProductsLoading, setLiveProductsLoading] = useState(true);
  const [userInfo, setUserInfo]= useState(null);

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
          element: <Profile />
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
          userName,
          setUserName,
          userUid,
          setUserUid,
          userLoggedIn,
          setUserLoggedIn,
          liveProductsLoading,
          setLiveProductsLoading,
          userInfo,
          setUserInfo
        }}
      >
        <RouterProvider  router={appRouter}/>
      </Context.Provider>
    </div>
  );
}

export default App;
