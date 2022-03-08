const express = require('express')
const router = express.Router()

const {addFollowUpTransit} = require('../controllers/addFollowUpTransit')
const {getFollowUpTransits} = require('../controllers/getFollowUpTransit')
const {editFollowUpTransit} = require('../controllers/editFollowUpTransit')
const {editPetsAssigned} = require('../controllers/editPetsAssigned')

router.post('/addFollowUpTransit', addFollowUpTransit );
router.get('/followUpTransit/:shelterId', getFollowUpTransits);
router.put('/followUpTransit/:editableTransitId', editFollowUpTransit);
router.put('/followUpTransit/petsAssigned/:editableTransitId', editPetsAssigned);

module.exports = router