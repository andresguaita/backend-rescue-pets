const express = require('express')
const router = express.Router()

const {addFollowUpTransit} = require('../controllers/addFollowUpTransit')
const {getFollowUpTransits} = require('../controllers/getFollowUpTransit')
const {editFollowUpTransit} = require('../controllers/editFollowUpTransit')

router.post('/addFollowUpTransit', addFollowUpTransit );
router.get('/followUpTransit/:shelterId', getFollowUpTransits);
router.put('/followUpTransit/:editableTransitId', editFollowUpTransit);

module.exports = router