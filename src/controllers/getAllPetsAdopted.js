const {Pets} = require('../db.js') 
 

exports.getAllPetAdopted= async(req,res)=>{
    const {id} = req.params 
    try {
        let adopt= await Pets.findAll({
            where:{
                petStatusId: id
            }
        })
        res.status(200).json(adopt)
    } catch (error) {
        res.status(500).send(error)
    }
}
  