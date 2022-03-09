const {Alerts} = require('../db.js')


exports.createAlert = async (req,res) => {
    const {image,direction,description,shelterId} = req.body
    try{

    let ca= await Alerts.create({
        direction:direction,
        image:image,
        description:description,
        shelterId:shelterId
       
    })
     return res.json({
        ok:true,
        ca
    })

    }catch(error){
        return res.status(500).send('Error connecting to the database')
    }    
}
