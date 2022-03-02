const express = require('express');
const { sendEmailAccepted } = require('../controllers/sendEmailAccepted');
const {sendEmailRejected} = require('../controllers/sendEmailRejected')
const router = express.Router()

const { sendEmailExample } = require('../controllers/sendEmailExample')

router.post('/nodemailer/example', sendEmailExample );

router.post('/nodemailer/sendEmailAccepted', sendEmailAccepted)

router.post('/nodemailer/sendEmailRejected', sendEmailRejected)

module.exports = router
