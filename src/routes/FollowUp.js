const express = require('express')
const router = express.Router()

const {addFollowUp} = require('../controllers/addFollowUp')
const {editFollowUp} = require('../controllers/editFollowUp')
const {getFollowUpsFromShelter} = require('../controllers/getFollowUps')
const {deleteFollowUp} = require('../controllers/deleteFollowUp')
const {findFollowUp} = require('../controllers/findFollowUps')
const {hideFollowUpfromDash} = require('../controllers/hideFollowUp')

router.get('/getFollowUps/:shelterId', getFollowUpsFromShelter );
router.post('/addFollowUp', addFollowUp );
router.put('/editFollowUp/:followUpId', editFollowUp );
router.put('/hideFollowUp/:followUpId', hideFollowUpfromDash );
router.delete('/deleteFollowUp/:followUpId', deleteFollowUp );
router.post('/findFollowUp', findFollowUp );

module.exports = router