const { EMAIL } = process.env;
const { transporter } = require("../utils/configNodemailer");
const cron = require("node-cron");

 async function sendEmailReminder (data) {


        await transporter.sendMail({
            from: `"Rescue Pets" <${EMAIL}> `,
            to: 'themarkvolta@gmail.com',
            subject: "Recordatorio para llamada telefónica de su próximo seguimiento",
            text: `Hola ${data.name}, esperamos que tu y ${data.pet} se encuentren bien. Así mismo te recordamos que se realizará una llamada al teléfono ${data.phoneNumber} el día de mañana para el seguimiento de la mascota adoptada. Favor de estar al pendiente entre las 8:00 a 13:00 hrs del día para atender dicha llamada. De antemano, gracias por la atención. Saludos cordiales, Rescue Pets`,
            html: `<p>Hola ${data.name}, esperamos que tu y ${data.pet} se encuentren bien. Así mismo te recordamos que se realizará una llamada al teléfono ${data.phoneNumber} el día de mañana para el seguimiento de la mascota adoptada. Favor de estar al pendiente entre las 8:00 a 13:00 hrs del día para atender dicha llamada. De antemano, gracias por la atención. Saludos cordiales, Rescue Pets</p>`,
            attachments: [{
                filename: "shiba-inu.webp",
                path: "https://res.cloudinary.com/djbiam1gm/image/upload/v1645846178/shiba-inu.webp"
            }]
        })

        
        

};

module.exports = {sendEmailReminder}
