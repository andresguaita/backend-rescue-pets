const { EMAIL } = process.env;
const { transporter } = require("../utils/configNodemailer");
const cron = require("node-cron");

 async function sendEmailTransitAlert (data) {


        await transporter.sendMail({
            from: `"Rescue Pets" <${EMAIL}> `,
            to: `${data.email}`,
            subject: "Notificación de mascota asignada",
            text: `Hola ${data.name}, esperamos que te encuentres bien. Así mismo, queremos notificarte que se te ha asignado una mascota para transitar a través del refugio ${data.shelterName}. Favor de estar al pendiente entre las 8:00 a 13:00 hrs de esta semana para atender una llamada telefónica para brindarle información mas detallada sobre la situación. De antemano, gracias por la atención. Saludos cordiales, Rescue Pets`,
            html: `<p>Hola ${data.name}, esperamos que te encuentres bien. Así mismo, queremos notificarte que se te ha asignado una mascota para transitar a través del refugio ${data.shelterName}.</p>
            <p>Favor de estar al pendiente entre las 8:00 a 13:00 hrs de esta semana para atender una llamada telefónica para brindarle información mas detallada sobre la situación. </p>
            <p>De antemano, gracias por la atención</p>
            <p>Saludos cordiales,</p>
            <p>Rescue Pets</p>`,
            // attachments: [{
            //     filename: "shiba-inu.webp",
            //     path: "https://res.cloudinary.com/djbiam1gm/image/upload/v1645846178/shiba-inu.webp"
            // }]
        })

        
        

};

module.exports = {sendEmailTransitAlert}
