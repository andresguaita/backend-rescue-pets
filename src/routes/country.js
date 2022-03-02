const express = require('express')
const router = express.Router()

const getCountry = require('../controllers/getCountry.js')


router.get('/country', getCountry);

module.exports = router