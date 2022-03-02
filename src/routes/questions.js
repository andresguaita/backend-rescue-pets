const express = require('express')
const router = express.Router()
const {getAllQuestions} = require('../controllers/getAllQuestions')

router.get('/getAllQuestions', getAllQuestions)

module.exports = router