const express = require('express');
const { postBooking, getBookingProduct, deleteProduct, updateBooking } = require('../Controllers/bookingController');
const router = express.Router()

const varifyJWT = require('../Middleware/verifyJWT')

router.post('/', varifyJWT, postBooking)
router.get('/', varifyJWT, getBookingProduct)
router.delete('/:id', varifyJWT, deleteProduct)
router.patch('/:id', varifyJWT, updateBooking)

module.exports = router; 