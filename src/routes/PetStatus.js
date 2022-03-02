const express = require('express')
const router = express.Router()

const {getPetStatus} = require('../controllers/getPetStatus')

router.get('/petstatus', getPetStatus );

module.exports = router