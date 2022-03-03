const {Adoptions} = require('../db.js')//Requiero  model adoption para hacerle post
exports.sendAdoption = async (req,res) => {
    const {idform,idpet,answer,profileId} = req.body
    try{
        let alreadyExists = await Adoptions.findOne({
            where:{
                profileId : profileId,
                petId: idpet
            }
        })
        if(idform && idpet && answer && !alreadyExists){
            let adoptionCreated = await Adoptions.create({
                answers : answer,
                formId : idform,
                petId : idpet,
                profileId: profileId
            })

            return res.status(201).json(adoptionCreated)
        }else{
            return res.status(400).send('wrong data')
        }
    }catch(error){
        return res.status(500).send(error)
    }    
}