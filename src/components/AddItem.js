import Box from "@mui/material/Box";
import toast from "react-hot-toast";
import Context from "../utils/Context";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { useContext, useRef, useState } from "react";
import { Button, TextField, Typography, Grid } from "@mui/material";

const AddItem = () => {
  const { addItemOpen, setAddItemOpen, userLoggedIn, userInfo } = useContext(Context);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const titleRef = useRef(null);
  const descriptionRef = useRef(null);
  const priceRef = useRef(null);
  const placeRef = useRef(null);

  const handleDivClose = () => {
    setAddItemOpen(false);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async () => {
    if (!userLoggedIn) {
      toast.error("Please login.");
      return;
    }

    const formData = new FormData();
    formData.append("uid", userInfo.uid);
    formData.append("productName", titleRef.current.value);
    formData.append("description", descriptionRef.current.value);
    formData.append("price", priceRef.current.value);
    formData.append("place", placeRef.current.value);
    formData.append("imageUrl", image);

    try {
      const response = await fetch("http://localhost:5000/user/addProduct", {
        method: "POST",
        body: formData,
      });
      if (response.ok) {
        toast.success("Item added successfully.");
        titleRef.current.value = "";
        descriptionRef.current.value = "";
        priceRef.current.value = "";
        placeRef.current.value = "";
        setImage(null);
        setPreview(null);
        handleDivClose();
      } else {
        toast.error("Item addin error,please try again");
      }
    } catch (error) {
      toast.error("Item adding failed, please try again");
    }
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%", // More responsive width
    maxWidth: "600px",
    bgcolor: "background.paper",
    p: 4,
    boxShadow: 3,
    borderRadius: 2,
  };

  return (
    <Modal
      open={addItemOpen}
      onClose={handleDivClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box
          sx={{
            position: "absolute",
            top: 8,
            right: 8,
          }}
        >
          <CloseIcon
            onClick={handleDivClose}
            sx={{ color: "#002f34", fontSize: "2rem", cursor: "pointer" }}
          />
        </Box>

        <Typography variant="h6" mb={2} textAlign="center">
          Add Item for Selling
        </Typography>

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              inputRef={titleRef}
              id="title"
              label="Title"
              variant="outlined"
              fullWidth
              margin="dense"
            />
            <TextField
              inputRef={descriptionRef}
              id="desc"
              label="Description"
              variant="outlined"
              fullWidth
              margin="dense"
            />
            <TextField
              inputRef={priceRef}
              id="price"
              label="Price"
              variant="outlined"
              fullWidth
              margin="dense"
            />
            <TextField
              inputRef={placeRef}
              id="place"
              label="Place"
              variant="outlined"
              fullWidth
              margin="dense"
            />
          </Grid>

          <Grid item xs={12} md={6} textAlign="center">
            <TextField
              type="file"
              inputProps={{ accept: "image/*" }}
              onChange={handleImageChange}
              fullWidth
              margin="dense"
            />

            {preview && (
              <Box
                mt={2}
                sx={{
                  width: "100%",
                  height: 200,
                  border: "2px solid #ccc",
                  borderRadius: 2,
                  overflow: "hidden",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: "#fff",
                }}
              >
                <img
                  src={preview}
                  alt="Selected"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                />
              </Box>
            )}
          </Grid>
        </Grid>

        <Box display="flex" justifyContent="flex-end" mt={4}>
          <Button variant="contained" color="primary" onClick={handleSubmit}>
            Save
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default AddItem;
