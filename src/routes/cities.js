const express = require('express')
const router = express.Router()

const getCities = require('../controllers/getCities.js')

router.get('/cities', getCities);

module.exports = router