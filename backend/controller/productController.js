const Product = require("../models/productModel");
const cloudinary = require("cloudinary").v2;

const addProduct = async (req, res) => {
  try {
    console.log("Add product controller")
    console.log("req.body : ",req.body);
    console.log("req.file : ",req.file);
    const { uid, productName, description, price, place } = req.body;
    const imageUrl = req.file;

    if (!uid || !productName || !description || !price || !place || !imageUrl) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const cloudinaryResponse = await cloudinary.uploader.upload(imageUrl.path);

    const newProduct = new Product({
        uid,
        productName,
        description,
        price,
        place,
        imageUrl: cloudinaryResponse.secure_url,
        cloudinaryId: cloudinaryResponse.public_id,
      });
  
      await newProduct.save();
      res.status(201).json({ message: "Product added successfully", product: newProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while adding the product.", error });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "An error occurred while fetching products.", error });
  }
};

module.exports = {
  addProduct,
  getAllProducts,
};
