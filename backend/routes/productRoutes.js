const express = require('express');
const router = express.Router();
const productController = require('../controller/productController');
const upload = require('../coudinaryConfig');

router.post('/addProduct', upload.single('imageUrl'),productController.addProduct);
router.get('/getAllProducts',productController.getAllProducts);

module.exports = router;