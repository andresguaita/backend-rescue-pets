const express = require('express')
const router = express.Router()

const {searchShelters} = require('../controllers/searchShelter');

router.get('/searchShelter??', searchShelters);

module.exports = router