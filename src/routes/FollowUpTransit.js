const express = require('express')
const router = express.Router()

const {addFollowUpTransit} = require('../controllers/addFollowUpTransit')
const {getFollowUpTransits} = require('../controllers/getFollowUpTransit')

router.post('/addFollowUpTransit', addFollowUpTransit );
router.get('/followUpTransit/:shelterId', getFollowUpTransits);

module.exports = router