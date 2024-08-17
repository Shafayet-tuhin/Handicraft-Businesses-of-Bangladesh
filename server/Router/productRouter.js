const express = require('express');
const { postProduct, getProduct, getSingleProduct } = require('../Controllers/productController');
const router = express.Router() 

router.get('/' , getProduct)
router.get('/:id' , getSingleProduct)
router.post('/' , postProduct)

module.exports = router; 