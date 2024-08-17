const express = require('express');
const { postBusiness, getBusiness } = require('../Controllers/businessController');
const router = express.Router()

router.post('/' , postBusiness)
router.get('/' , getBusiness)

module.exports = router; 