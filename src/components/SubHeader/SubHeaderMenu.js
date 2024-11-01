import { Box, List, ListItem, ListItemText } from "@mui/material";
import React from "react";

const listItemStyle = {
  cursor: "pointer",
  "&:hover": { bgcolor: "grey.200" },
  py: { xs: 0.5, sm: 1 },
  px: { xs: 1, sm: 2 },
};

const listItemTextStyle = {
    fontSize: { xs: "0.625rem", sm: "0.875rem" },
    textAlign: "start",
  };
const categories = [
  "Cars",
  "Motorcycles",
  "Mobile Phones",
  "For Sale: Houses & Apartments",
  "Scooters",
  "Commercial & Other Vehicles",
  "For Rent: Houses & Apartments",
];

const SubHeaderMenu = () => {
  return (
    <Box
      sx={{
        position: "absolute",
        width: { xs: 160, sm: 180, md: 180 },
        top: { xs: 140, sm: 140, md: 140 },
        right: { xs: 10, sm: 20, md: 40 },
        bgcolor: "white",
        color: "text.primary",
        boxShadow: 3,
        borderRadius: 1,
        overflow: "hidden",
      }}
    >
      <List sx={{ py: 0 }}>
        {categories.map((category, index) => (
          <ListItem key={index} component="div" sx={listItemStyle}>
            <ListItemText
              sx={listItemTextStyle}
            >
              {category}
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default SubHeaderMenu;
