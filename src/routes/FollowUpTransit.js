const express = require('express')
const router = express.Router()

const {addFollowUpTransit} = require('../controllers/addFollowUpTransit')

router.post('/addFollowUpTransit', addFollowUpTransit );

module.exports = router