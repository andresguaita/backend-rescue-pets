const express = require('express')
const router = express.Router()

const getSupport = require('../controllers/support.js')


router.get('/techSuport', getSupport);

module.exports = router