const { EMAIL } = process.env;
const { transporter } = require("../utils/configNodemailer")

 async function sendEmailRejected (req, res) {
        let {email,type} = req.body;

    try {
        if(type === 1){
            await transporter.sendMail({
                from: `"Rescue Pets" <${EMAIL}> `,
                to: email,
                subject: "Solicitud de adopción",
                text: "Lamentamos decirte que no cumples con los requerimientos de la solicitud de adopción, por lo tanto no has sido aceptado.",
                html: `<p>Lamentamos decirte que no cumples con los requerimientos de la solicitud de adopción, por lo tanto no has sido aceptado.</p>`,
                // attachments: [{
                //     filename: "shiba-inu.webp",
                //     path: "https://res.cloudinary.com/djbiam1gm/image/upload/v1645846178/shiba-inu.webp"
                // }]
            })
            res.status(200).json("Email sent successfully");
        }else if(type === 2){
            await transporter.sendMail({
                from: `"Rescue Pets" <${EMAIL}> `,
                to: email,
                subject: "Solicitud de tránsito",
                text: "Lamentamos decirte que no cumples con los requerimientos de la solicitud de tránsito, por lo tanto no has sido aceptado.",
                html: `<p>Lamentamos decirte que no cumples con los requerimientos de la solicitud de tránsito, por lo tanto no has sido aceptado.</p>`,
                // attachments: [{
                //     filename: "shiba-inu.webp",
                //     path: "https://res.cloudinary.com/djbiam1gm/image/upload/v1645846178/shiba-inu.webp"
                // }]
            })
            res.status(200).json("Email sent successfully");
        }   
        
        
    } catch (error) {
        console.log(error);
        res.json(error);
    }   
};

module.exports = {sendEmailRejected}