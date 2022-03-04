const express = require('express')
const router = express.Router()

const {getSupport, postSupport, putSupport} = require('../controllers/support.js')


router.get('/techSuport', getSupport);
router.post('/techSuport', postSupport);
router.put('/techSuport/:idSuport', putSupport);

module.exports = router