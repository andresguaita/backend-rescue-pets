const express = require('express')
const router = express.Router()

const getState = require('../controllers/getState')


router.get('/states', getState);

module.exports = router