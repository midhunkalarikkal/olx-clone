import { useContext, useEffect, useState } from "react";
import Context from "../utils/Context";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import toast, { Toaster } from "react-hot-toast";
import SearchIcon from "@mui/icons-material/Search";
import { Box, Button, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const listItemStyle = {
  display: "flex",
  flexDirection: "column",
  cursor: "pointer",
  "&:hover": { bgcolor: "grey.200" },
  py: { xs: 0.5, sm: 1 },
  px: { xs: 1, sm: 2 },
};

const listItemTextStyle = { fontSize: { xs: "0.875rem", sm: "1rem" } };

const Header = () => {
  const { setLoginOpen, setAddItemOpen, userName, setUserName } =
    useContext(Context);

  const [menuOpen, setMenuOpen] = useState(false);

  const handleOpenUserMenu = () => {
    setMenuOpen(menuOpen ? false : true);
  };

  const handleLoginOpen = () => {
    setLoginOpen(true);
  };

  const handleAddItem = () => {
    if (!userName) {
      toast.error("Please login.");
      return;
    }
    setAddItemOpen(true);
  };

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Logged out successfully.");
      })
      .catch((error) => {
        toast.error("Logout failed, please try again");
        console.log("error : ", error);
      });
  };

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
            {userName || "English"}
          </h4>
        </div>

        {/* Login logout */}
        <div className="items-center justify-center px-1 hidden lg:flex w-[6%]">
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
              onClick={handleLoginOpen}
            >
              Login
            </h4>
          )}
        </div>

        {/* Sell button */}
        <Box
          sx={{
            position: "relative",
            width: { lg: "9%" },
            display: { xs: "none", lg: "flex" },
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: { lg: "70%", xl: "67%" },
            }}
          >
            <Box
              sx={{
                bgcolor: "#22d3ee",
                borderRadius: "1.5rem 1.5rem 0 0",
                width: "100%",
                display: "flex",
                justifyContent: "center",
              }}
            >
              b
            </Box>
            <Box sx={{ display: "flex", width: "100%" }}>
              <Box
                sx={{
                  bgcolor: "#facc15",
                  width: "50%",
                  borderRadius: "0 0 0 1.5rem",
                  display: "flex",
                  justifyContent: "center",
                  boxShadow: 3,
                }}
              >
                b
              </Box>
              <Box
                sx={{
                  bgcolor: "#2563eb",
                  width: "50%",
                  borderRadius: "0 0 1.5rem 0",
                  display: "flex",
                  justifyContent: "center",
                  boxShadow: 3,
                }}
              >
                b
              </Box>
            </Box>
          </Box>
          <Button
            variant="contained"
            onClick={handleAddItem}
            sx={{
              width: { lg: "60%", xl: "60%" },
              height: "55%",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              bgcolor: "white",
              boxShadow: 0,
              borderRadius: 6,
              fontSize: { lg: ".9rem", xl: "1rem" },
              fontWeight: "bold",
              color: "black",
            }}
          >
            Sell
          </Button>
        </Box>

        <div
          className="flex items-center justify-center w-[15%] lg:hidden"
          onClick={handleOpenUserMenu}
        >
          <MenuIcon />
        </div>
        {menuOpen && (
          <Box
            sx={{
              position: "absolute",
              width: { xs: 160, sm: 180, md: 200 },
              top: { xs: 20, sm: 30, md: 40 },
              right: { xs: 10, sm: 20, md: 40 },
              bgcolor: "white",
              color: "text.primary",
              boxShadow: 3,
              borderRadius: 1,
              overflow: "hidden",
            }}
          >
            <List sx={{ py: 0 }}>
              {userName && (
                <ListItem
                sx={listItemStyle}
                component="div"
                onClick={() => console.log("Clicked on 'Logged in as 1'")}
                >
                <ListItemText sx={listItemTextStyle}>
                  Hi, {userName}
                </ListItemText>
              </ListItem>
              )}

              {userName ? (

                <ListItem
                sx={listItemStyle}
                component="div"
                onClick={handleLogOut}
                >
                <ListItemText sx={listItemTextStyle}>
                  Logout
                </ListItemText>
              </ListItem>
                ) : (
                  <ListItem
                sx={listItemStyle}
                component="div"
                onClick={handleLoginOpen}
                >
                <ListItemText sx={listItemTextStyle}>
                  Login
                </ListItemText>
              </ListItem>
                )}

              <ListItem
                sx={listItemStyle}
                component="div"
                onClick={handleAddItem}
              >
                <ListItemText sx={listItemTextStyle}>
                  Sell your product
                </ListItemText>
              </ListItem>
            </List>
          </Box>
        )}
      </div>
    </>
  );
};

export default Header;
