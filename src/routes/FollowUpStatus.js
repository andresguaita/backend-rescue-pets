const express = require('express')
const router = express.Router()

const {getFollowUpStatuses} = require('../controllers/getFollowUpStates')

router.get('/followUpStatuses', getFollowUpStatuses );

module.exports = router