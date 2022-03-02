const {Pets,Shelter,Age, Temperament,
Species, PetStatus, Vaccines} = require('../db.js') 

exports.petsIdShelter = async(req,res)=>{
    const { idShelter } = req.params
    try{
        if(isNaN(idShelter)) return 'no string'
        let petsWithIdShelter = await Pets.findAll({
            where:{
                shelterId : idShelter
            },
            include : [Age, Temperament, Vaccines, Species, PetStatus, Shelter]
        })
        if(petsWithIdShelter.length){
            return res.status(200).json(petsWithIdShelter)
        }else{
            return res.status(204).send('no pets with this ID_Shelter')
        }
    }catch(error){
        return res.status(400).send(error)
    }    
}