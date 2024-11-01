import { Box, List, ListItem, ListItemText } from "@mui/material";
import React, { useContext } from "react";
import Context from "../../utils/Context";
import useAddItem from "../../utils/hooks/useAddItem";
import useHandleLogout from "../../utils/hooks/useHandleLogout";


const listItemStyle = {
  display: "flex",
  flexDirection: "column",
  cursor: "pointer",
  "&:hover": { bgcolor: "grey.200" },
  py: { xs: 0.5, sm: 1 },
  px: { xs: 1, sm: 2 },
};

const listItemTextStyle = { fontSize: { xs: "0.875rem", sm: "1rem" } };

const NavMenuBox = () => {

    const { userName, setLoginOpen } = useContext(Context);

    const handleAddItem = useAddItem();

    const handleLogOut = useHandleLogout();

      const handleLoginOpen = () => {
        setLoginOpen(true);
      };

  return (
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
            <ListItemText sx={listItemTextStyle}>Hi, {userName}</ListItemText>
          </ListItem>
        )}

        {userName ? (
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
