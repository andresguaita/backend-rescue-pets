const {Alerts} = require('../db.js');
const {Users}=require('../db.js')

exports.createAlert = async (req,res) => {
    const {image,direction,description,shelterId} = req.body
    try{
let User=await Users.findOne({
where:{shelterId:shelterId}

})
    let ca= await Alerts.create({
        direction:direction,
        image:image,
        description:description,
        shelterId:shelterId
       
    })
    await transporter.sendMail({
        from: `"Rescue Pets" <${EMAIL}> `,
        to: User.email,
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
