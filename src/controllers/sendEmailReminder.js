const { EMAIL } = process.env;
const { transporter } = require("../utils/configNodemailer");
const cron = require("node-cron");

 async function sendEmailReminder (data, date) {


        await transporter.sendMail({
            from: `"Rescue Pets" <${EMAIL}> `,
            to: `${data.email}`,
            subject: "Recordatorio para llamada telefónica de su próximo seguimiento",
            text: `Hola ${data.name}, esperamos que tu y ${data.pet} se encuentren bien. Así mismo te recordamos que se realizará una llamada al teléfono ${data.phoneNumber} el día ${date} para el seguimiento de la mascota adoptada. Favor de estar al pendiente entre las 8:00 a 13:00 hrs del día para atender dicha llamada. De antemano, gracias por la atención. Saludos cordiales, Rescue Pets`,
            html: `<p>Hola ${data.name}, esperamos que tu y ${data.pet} se encuentren bien. Así mismo te recordamos que se realizará una llamada al teléfono ${data.phoneNumber} el día ${date} para el seguimiento de la mascota adoptada. Favor de estar al pendiente entre las 8:00 a 13:00 hrs del día para atender dicha llamada.</p>
            <p>De antemano, gracias por la atención.</p>
            <p>Saludos cordiales,</p>
            <p>Rescue Pets</p>`,
            // attachments: [{
            //     filename: "shiba-inu.webp",
            //     path: "https://res.cloudinary.com/djbiam1gm/image/upload/v1645846178/shiba-inu.webp"
            // }]
        })

        
        

};

module.exports = {sendEmailReminder}
