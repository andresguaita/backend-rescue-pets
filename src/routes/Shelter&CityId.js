const express = require('express')
const router = express.Router()

const {getShelterAndCityId} = require('../controllers/getShelter&CityId')

router.get('/sheltercityid/:userId', getShelterAndCityId );

module.exports = router
