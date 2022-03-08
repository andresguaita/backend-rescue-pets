const express = require('express')
const router = express.Router()
const {getAllQuestions, postSupport, putQuestions} = require('../controllers/getAllQuestions')

router.get('/getAllQuestions', getAllQuestions)

router.post('/postQuestions', postSupport)

router.put('/putQuestions/:idquestion', putQuestions);

module.exports = router