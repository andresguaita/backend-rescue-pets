const {Alerts} = require('../db.js');
const {Shelter, Users}=require('../db.js')
const { EMAIL } = process.env;
const { transporter } = require("../utils/configNodemailer")
exports.createAlert = async (req,res) => {
    
    const {image,direction,description,shelterId} = req.body
  
    try{
        
let shelter=await Shelter.findByPk( shelterId,{
include:[Users]

})

    let ca= await Alerts.create({
        direction:direction,
        image:image,
        description:description,
        shelterId:shelterId
       
    })
    await transporter.sendMail({
        from: `"Rescue Pets" <${EMAIL}> `,
        to: shelter.user.email,
        subject: `Nueva alerta de rescate`,
        html: `<p>Un usuario ha emitido una alerta de rescate cercana a tu refugio, por favor ingrese al  panel de administración, y verifique su alerta</p>`,
        
    })
    return res.json({
        ok:true,
        ca
    })
}   catch(error){
        return res.status(500).send('Error connecting to the database')
    }    
}
