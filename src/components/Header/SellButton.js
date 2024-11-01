import { Box, Button } from '@mui/material'
import React from 'react'
import useAddItem from '../../utils/hooks/useAddItem';

const SellButton = () => {

  const handleAddItem = useAddItem();

  return (
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
              height: "70%",
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
  )
}

export default SellButton;