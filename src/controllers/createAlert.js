const {Alerts} = require('../db.js')


exports.createAlert = async (req,res) => {
    const {image,direction,description,shelterId} = req.body
    try{
if(direction && description & shelterId &&image){
    let ca= await Alerts.create({
        direction,
        image,
        description,
        shelterId
       
    })
     return res.json({
        ok:true,
        ca
    })
} else{
            return res.status(400).send('wrong data')
        }
    }catch(error){
        return res.status(500).send('Error connecting to the database')
    }    
}
