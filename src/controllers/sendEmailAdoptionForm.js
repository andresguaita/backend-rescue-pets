const { EMAIL } = process.env;
const { transporter } = require("../utils/configNodemailer")

exports.sendEmailForms =  async (req, res) => {
        let {userMail, petName, ShelterName, type} = req.body;

    try {
        if(type === 2){
            await transporter.sendMail({
                from: `"Rescue Pets" <${EMAIL}> `,
                to: userMail,
                subject: `Solicitud de adopción en ${ShelterName}`,
                text: `Hemos recibido tu solicitud para adoptar a ${petName}. Muy pronto el refugio se comunicará contigo con la respuesta de tu petición`,
                html: `<p>Hemos recibido tu solicitud para adoptar a ${petName}. Muy pronto el refugio se comunicará contigo con la respuesta de tu petición</p>`,
                
            });
           
        }else if(type === 1){
            await transporter.sendMail({
                from: `"Rescue Pets" <${EMAIL}> `,
                to: userMail,
                subject: `Solicitud de tránsito en ${ShelterName}`,
                text: `Hemos recibido tu solicitud para ser hogar de tránsito en ${ShelterName}. Muy pronto el refugio se comunicará contigo con la respuesta de tu petición`,
                html: `<p>Hemos recibido tu solicitud para transitar en ${ShelterName}. Muy pronto el refugio se comunicará contigo con la respuesta de tu petición</p>`,
                
            });
        }   
        res.status(200).json("Email sent successfully");
        
    } catch (error) {
        console.log(error);
        res.json(error);
    }   
};

exports.sendEmailFormstoShelter =  async (req, res) => {
    let {type, userMail, petName} = req.body;

try {
    if(type === 2){
        await transporter.sendMail({
            from: `"Rescue Pets" <${EMAIL}> `,
            to: EMAIL,
            subject: `Solicitud de adopción para ${petName}`,
            text: `Has recibido una nueva solicitud para adoptar a ${petName} de parte de ${userMail}. Chequea las respuesta del formulario en el dashboard`,
            html: `</p>Has recibido una nueva solicitud para adoptar a ${petName} de parte de ${userMail}. Chequea las respuesta del formulario en el dashboard</p>`,
            
        })
    
    }else if(type === 1){
        await transporter.sendMail({
            from: `"Rescue Pets" <${EMAIL}> `,
            to: EMAIL,
            subject: `Nueva solicitud de tránsito`,
            text: `Has recibido una nueva solicitud de tránsito de parte de ${userMail}. Chequea las respuesta del formulario en el dashboard`,
            html: `<p>Has recibido una nueva solicitud de tránsito de parte de ${userMail}. Chequea las respuesta del formulario en el dashboard</p>`,
            
        })
    }   
    res.status(200).json("Email sent successfully");
    
} catch (error) {
    console.log(error);
    res.json(error);
}   
};
