import Box from "@mui/material/Box";
import toast from "react-hot-toast";
import Context from "../utils/Context";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { useContext, useEffect, useState } from "react";
import { Button, TextField, Typography, Grid } from "@mui/material";

const UpdateItem = () => {
  const { updateItemOpen, setUpdateItemOpen, updateItem } = useContext(Context);
  const [updationLoading, setUpdationLoading] = useState(false);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [place, setPlace] = useState("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleDivClose = () => {
    setUpdateItemOpen(false);
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  useEffect(() => {
    if (updateItemOpen && updateItem) {
      setTitle(updateItem.productName || "");
      setDescription(updateItem.description || "");
      setPrice(updateItem.price || "");
      setPlace(updateItem.place || "");
      setPreview(updateItem.imageUrl || null);
    }
  }, [updateItemOpen, updateItem]);

  const handleSubmit = async () => {
    const formData = new FormData();
    formData.append("uid", updateItem.uid);
    formData.append("productName", title);
    formData.append("description", description);
    formData.append("price", price);
    formData.append("place", place);

    if (image) {
      formData.append("imageUrl", image);
    }

    try {
        setUpdationLoading(true);
      const response = await fetch(
        `http://localhost:5000/user/updateProduct?_id=${updateItem._id}`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        setUpdationLoading(false);
        toast.success("Item updated successfully.");
        setTitle("");
        setDescription("");
        setPrice("");
        setPlace("");
        setImage(null);
        setPreview(null);
        handleDivClose();
      } else {
        setUpdationLoading(false);
        toast.error("Item updating error,please try again");
      }
    } catch (error) {
        setUpdationLoading(false);
      toast.error("Item updating failed, please try again");
    }
  };

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: "600px",
    bgcolor: "background.paper",
    p: 4,
    boxShadow: 3,
    borderRadius: 2,
  };

  return (
    <Modal
      open={updateItemOpen}
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
          Update product
        </Typography>
        {updationLoading && 
        <div class="loader-container">
            <div class="loader">
                <div class="inner-circle"></div>
            </div>
        </div>
        }
        { !updationLoading && 
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <TextField
              id="title"
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              variant="outlined"
              fullWidth
              margin="dense"
            />
            <TextField
              id="desc"
              label="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              variant="outlined"
              fullWidth
              margin="dense"
            />
            <TextField
              id="price"
              label="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              variant="outlined"
              fullWidth
              margin="dense"
            />
            <TextField
              id="place"
              label="Place"
              value={place}
              onChange={(e) => setPlace(e.target.value)}
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
            <Typography variant="body1" mb={2} fontSize={10} color="red">
              If you don’t select a new image, the current image will remain.
            </Typography>

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
        }
        
        <Box display="flex" justifyContent="flex-end" mt={4}>
          <Button variant="contained" color="primary" onClick={handleSubmit} disabled={updationLoading}>
            Update
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};

export default UpdateItem;
