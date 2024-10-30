import { useContext, useState } from "react";
import Context from "../utils/Context";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import { Button, TextField, Typography } from "@mui/material";

const AddItem = () => {
  const { addItemOpen, setAddItemOpen } = useContext(Context);
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

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

  const handleSubmit = () => {};

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "50%",
    bgcolor: "background.paper",
    p: 4,
    margin: "auto",
    padding: 4,
    boxShadow: 3,
    borderRadius: 2,
  };

  const inputStyle = {
    width: "100%",
    mb: 2,
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

        <Box>
          <Typography variant="h6" mb={2}>
            Add Item for Selling
          </Typography>

          <Box
            display="flex"
            alignItems="flex-start"
            justifyContent="center"
            gap={2}
          >
            <Box className="w-1/2 p-6">
              <TextField
                id="title"
                label="Title"
                variant="outlined"
                sx={inputStyle}
              />
              <TextField
                id="desc"
                label="Description"
                variant="outlined"
                sx={inputStyle}
              />
              <TextField
                id="price"
                label="Price"
                variant="outlined"
                sx={inputStyle}
              />
              <TextField
                id="place"
                label="Place"
                variant="outlined"
                sx={inputStyle}
              />
            </Box>

            <Box className="w-1/2 p-6">
              <TextField
                type="file"
                inputProps={{ accept: "image/*" }}
                onChange={handleImageChange}
                fullWidth
              />

              {preview && (
                <Box
                  mt={2}
                  sx={{
                    width: 200,
                    height: 200,
                    border: "2px solid #ccc",
                    borderRadius: 4,
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
            </Box>
          </Box>

          <Box display="flex" justifyContent="flex-end" mt={4}>
            <Button variant="contained" color="primary">
              Save
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
};

export default AddItem;
