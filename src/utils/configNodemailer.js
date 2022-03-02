const nodemailer = require("nodemailer");
const { EMAIL, EMAIL_PASS } = process.env;

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: EMAIL,
        pass: EMAIL_PASS
    },
    tls: {
        // do not fail on invalid certs
        rejectUnauthorized: false
    },
})

module.exports= {transporter}