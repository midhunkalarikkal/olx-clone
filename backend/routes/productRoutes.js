const express = require('express');
const router = express.Router();
const upload = require('../coudinaryConfig');
const productController = require('../controller/productController');

router.post('/addProduct', upload.single('imageUrl'),productController.addProduct);
router.get('/getLiveProducts',productController.getLiveProducts);

module.exports = router;