import toast from "react-hot-toast";
import React, { useContext } from "react";
import Context from "../../utils/Context";
import useAddItem from "../../utils/hooks/useAddItem";
import { useLocation, useNavigate } from "react-router-dom";
import useHandleLogout from "../../utils/hooks/useHandleLogout";
import { Box, List, ListItem, ListItemText } from "@mui/material";


const listItemStyle = {
  cursor: "pointer",
  "&:hover": { bgcolor: "grey.200" },
  py: { xs: 0.5, sm: 1 },
  px: { xs: 1, sm: 2 },
};

const listItemTextStyle = { fontSize: { xs: "0.875rem", sm: "1rem" } };

const NavMenuBox = () => {

    const { userInfo, setLoginOpen, userLoggedIn } = useContext(Context);

    const navigate = useNavigate();
    const location = useLocation();

    const handleAddItem = useAddItem();
    const handleLogOut = useHandleLogout();

      const handleLoginOpen = () => {
        setLoginOpen(true);
      };

      const handleProfile = () => {
        if(!userLoggedIn){
          toast.error("Please login");
        }else{
          if(location.pathname === '/profile'){
            navigate('/');
          }else{
            navigate('/profile');
          }
        }
      }

  return (
    <Box
      sx={{
        position: "absolute",
        width: { xs: 160, sm: 180, md: 200 },
        top: { xs: 60, sm: 60, md: 60 },
        right: { xs: 10, sm: 20, md: 40 },
        bgcolor: "white",
        color: "text.primary",
        boxShadow: 3,
        borderRadius: 1,
        overflow: "hidden",
      }}
    >
      <List sx={{ py: 0 }}>
        {userLoggedIn && (
          <ListItem
            onClick={handleProfile}
            sx={listItemStyle}
            component="div"
          >
            <ListItemText sx={listItemTextStyle}>
              {location.pathname === "/profile" ? "Home" : userLoggedIn ? userInfo.displayName.length > 6 ? userInfo.displayName.slice(0,6)+"..." : userInfo.displayName : "Profile"}
            </ListItemText>
          </ListItem>
        )}

        {userLoggedIn ? (
          <ListItem sx={listItemStyle} component="div" onClick={handleLogOut}>
            <ListItemText sx={listItemTextStyle}>Logout</ListItemText>
          </ListItem>
        ) : (
          <ListItem
            sx={listItemStyle}
            component="div"
            onClick={handleLoginOpen}
          >
            <ListItemText sx={listItemTextStyle}>Login</ListItemText>
          </ListItem>
        )}

        <ListItem sx={listItemStyle} component="div" onClick={handleAddItem}>
          <ListItemText sx={listItemTextStyle}>Sell your product</ListItemText>
        </ListItem>
      </List>
    </Box>
  );
};

export default NavMenuBox;
