const express = require('express')
const router = express.Router()

const {getTemperaments} = require('../controllers/getTemperaments')

router.get('/temperaments', getTemperaments );

module.exports = router
