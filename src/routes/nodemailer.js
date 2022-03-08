const express = require('express');
const { sendEmailAccepted } = require('../controllers/sendEmailAccepted');
const {sendEmailRejected} = require('../controllers/sendEmailRejected')
const {sendEmailForms, sendEmailFormstoShelter} = require('../controllers/sendEmailAdoptionForm')
const {sendEmailHelp} = require('../controllers/sendMailHelp.js')
const router = express.Router()

const { sendEmailExample } = require('../controllers/sendEmailExample')

router.post('/nodemailer/example', sendEmailExample );

router.post('/nodemailer/sendEmailAccepted', sendEmailAccepted)

router.post('/nodemailer/sendEmailRejected', sendEmailRejected)

router.post('/nodemailer/sendEmailForms', sendEmailForms)

router.post('/nodemailer/sendEmailFormstoShelter', sendEmailFormstoShelter)
router.post('/nodemailer/sendmailhelp', sendEmailHelp)

module.exports = router
