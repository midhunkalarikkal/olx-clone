import { useContext, useEffect, useState } from "react";
import Context from "../../utils/Context";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { Toaster } from "react-hot-toast";
import SearchIcon from "@mui/icons-material/Search";
import { Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SellButton from "./SellButton";
import NavMenuBox from "./NavMenuBox";
import useHandleLogout from "../../utils/hooks/useHandleLogout";

const Header = () => {
  const { setLoginOpen, userName, setUserName, userLoggedIn } = useContext(Context);

  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpenUserMenu = () => {
    setMenuOpen(menuOpen ? false : true);
  };

  const handleLoginOpen = () => {
    setLoginOpen(true);
  };

  const handleLogOut = useHandleLogout();

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { displayName } = user;
        setUserName(displayName);
      } else {
        setUserName(null);
      }
    });
    return () => unSubscribe();
  }, [setUserName]);

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />
      <div
        className="w-full flex p-1 border-b-4 border-white shadow-lg h-20"
        style={{ backgroundColor: "#f0f0f2" }}
      >
        <Box
          sx={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            width: { xs: "15%", sm: "15%", md: "10%", lg: "6%" },
          }}
        >
          <img
            style={{
              filter: "invert(1)",
              objectFit: "contain",
              width: "90%",
              height: "90%",
            }}
            src="https://statics.olx.in/external/base/img/cartrade/logo/olx.svg?v=1"
            alt="Logo"
          />
        </Box>

        <div className="items-center justify-center px-1 hidden md:flex md:w-[20%] lg:w-[24%]">
          <input
            className="w-[90%] mx-3 h-12 py-2 px-6 border-2 rounded-sm"
            style={{
              borderColor: "#002f34",
              borderWidth: "2px",
              borderStyle: "solid",
            }}
            type="text"
            placeholder="India"
          />
        </div>

        {/* Search bar */}
        <div className="flex items-center px-1 w-[70%] md:w-[55%] lg:w-[49%]">
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
            <SearchIcon className="text-white" />
          </button>
        </div>

        {/* Name */}
        <div className="items-center justify-center px-1 hidden lg:flex w-[6%]">
          <h4
            className="font-semibold text-lg"
            style={{
              color: "#002f34",
            }}
          >
            {
              userLoggedIn ? (
                userName.length > 6 ? userName.slice(0,6) + "..." : userName
              ) : "English"
            }
          </h4>
        </div>

        {/* Login logout */}
        <div className="items-center justify-center px-1 hidden lg:flex w-[6%]">
          {userLoggedIn ? (
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
              onClick={handleLoginOpen}
            >
              Login
            </h4>
          )}
        </div>

        <SellButton />

        {/* Navbar menu */}
        <div
          className="flex items-center justify-center w-[15%] lg:hidden"
          onClick={handleOpenUserMenu}
        >
          <MenuIcon />
        </div>
        {menuOpen && (
          <NavMenuBox />
        )}
      </div>
    </>
  );
};

export default Header;
