const express = require('express')
const router = express.Router()

const {getSpecies} = require('../controllers/getSpecies')

router.get('/species', getSpecies );

module.exports = router
