const { EMAIL } = process.env;
const { transporter } = require("../utils/configNodemailer")

 async function sendEmailExample (req, res) {
        let {email} = req.body;

    try {   
        await transporter.sendMail({
            from: `"Rescue Pets" <${EMAIL}> `,
            to: email,
            subject: "Testing if email is working",
            text: "We are glad that you could recieve this email as a confirmation that the created route is working fine!",
            html: `<p>We are glad that you could recieve this email as a confirmation that the created route is working fine!</p>`,
            attachments: [{
                filename: "shiba-inu.webp",
                path: "https://res.cloudinary.com/djbiam1gm/image/upload/v1645846178/shiba-inu.webp"
            }]
        })


        res.status(200).json("Email sent successfully");
        
    } catch (error) {
        console.log(error);
        res.json(error);
    }   
};

module.exports = {sendEmailExample}