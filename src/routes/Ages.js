const express = require('express')
const router = express.Router()

const {getAges} = require('../controllers/getAges')

router.get('/ages', getAges );

module.exports = router
