const express = require('express');

const productController = require('../controllers/products');

const router = express.Router();

// router.get('/products', productController.getProducts);

router.get('/', productController.getProducts);

router.get('/:id', productController.getProductById);

module.exports = router;