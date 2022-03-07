const express = require('express')
const router = express.Router()

const {getSupport, postSupport, putSupport} = require('../controllers/support.js')


router.get('/getTechSuport', getSupport);
router.post('/postTechSuport', postSupport);
router.put('/putTechSuport/:idSuport', putSupport);

module.exports = router