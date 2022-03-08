const { EMAIL } = process.env;
const { transporter } = require("../utils/configNodemailer")

exports.sendEmailHelp =  async (req, res) => {
    let {userMail, type, response} = req.body;

try {
    if(type === "DUDA"){
        await transporter.sendMail({
            from: `"Rescue Pets" <${EMAIL}> `,
            to: userMail,
            subject: `Ticket de soporte`,
            text: `Hemos recibido tu ${type}. La respuesta de nuestro equipo es la siguiente: ${response}`,
            html: `<p>Hemos recibido tu ${type}. La respuesta de nuestro equipo es la siguiente: ${response}</p>`,
            
        });
       
    }else if(type === "SUGERENCIA"){
        await transporter.sendMail({
            from: `"Rescue Pets" <${EMAIL}> `,
            to: userMail,
            subject: `Ticket de soporte`,
            text: `Hemos recibido tu ${type}. Queremos que sepa que ha sido en cuenta para mejorar nuestra plataforma. La respuesta de nuestro equipo es la siguiente: ${response}`,
            html: `<p>Hemos recibido tu ${type}. Queremos que sepa que ha sido en cuenta para mejorar nuestra plataforma. La respuesta de nuestro equipo es la siguiente: ${response}</p>`,
            
        });
    }
    else if(type === "ERROR"){
        await transporter.sendMail({
            from: `"Rescue Pets" <${EMAIL}> `,
            to: userMail,
            subject: `Ticket de soporte`,
            text: `Hemos recibido tu ${type}.  La respuesta de nuestro equipo es la siguiente: ${response}`,
            html: `<p>Hemos recibido tu ${type}.  La respuesta de nuestro equipo es la siguiente: ${response}</p>`,
            
        });
    }
    res.status(200).json("Email sent successfully");
    
} catch (error) {
    console.log(error);
    res.json(error);
}   
};