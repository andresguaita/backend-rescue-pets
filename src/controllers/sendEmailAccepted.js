const { EMAIL } = process.env;
const { transporter } = require("../utils/configNodemailer")

exports.sendEmailAccepted =  async (req, res) => {
        let {email,type} = req.body;

    try {
        if(type === 1){
            await transporter.sendMail({
                from: `"Rescue Pets" <${EMAIL}> `,
                to: email,
                subject: "Solicitud de adopción",
                text: "Nos complace decirte que tu solicitud de adopción ha sido aceptada",
                html: `<p>Nos complace decirte que tu solicitud de adopción ha sido aceptada</p>`,
                // attachments: [{
                //     filename: "shiba-inu.webp",
                //     path: "https://res.cloudinary.com/djbiam1gm/image/upload/v1645846178/shiba-inu.webp"
                // }]
            })
        }else if(type === 2){
            await transporter.sendMail({
                from: `"Rescue Pets" <${EMAIL}> `,
                to: email,
                subject: "Solicitud de tránsito",
                text: "Nos complace decirte que tu solicitud de tránsito ha sido aceptada",
                html: `<p>Nos complace decirte que tu solicitud de tránsito ha sido aceptada</p>`,
                // attachments: [{
                //     filename: "shiba-inu.webp",
                //     path: "https://res.cloudinary.com/djbiam1gm/image/upload/v1645846178/shiba-inu.webp"
                // }]
            })
        }   
        res.status(200).json("Email sent successfully");
        
    } catch (error) {
        console.log(error);
        res.json(error);
    }   
};
