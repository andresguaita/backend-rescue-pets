const { response } = require('express')
const { Pets } = require('../db')

 exports.addPet = async(req, res= response) =>{
    const {name, sterilization,weight,description, image, speciesId, shelterId, temperamentId, ageId, petStatusId, genreId}= req.body

    try {
        if(name, sterilization, weight, description){
            const PetsCreated = await Pets.create({ name, sterilization, weight, description, image, speciesId, shelterId,temperamentId, ageId, petStatusId, genreId})            
            res.json({
                ok:true,
                PetsCreated
            })
        }

        else {
            res.status(400).json({
                ok: false,
                msg: 'Missing Data'
            })
        }
        
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error connecting to the database'
        })
    }
    
}