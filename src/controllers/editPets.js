const {Pets} = require('../db')

 async function editPet (req, res) {
    let {petId} = req.params;
    let {name, sterilization, weight, description, image, speciesId, temperament, ageId, petStatusId, genreId} = req.body;
    console.log(req.body)
    console.log(temperament)

    try {   
        await Pets.update({
            name: name,
            sterilization: sterilization,
            weight: weight,
            description: description,
            image: image,
            speciesId: speciesId,
            temperamentId: temperament,
            ageId: ageId,
            petStatusId: petStatusId,
            genreId: genreId
        },
            {where: 
            {id: petId}
        });
        res.status(200).json("Pet edited successfully");
        
    } catch (error) {
        console.log(error);
        res.json(error);
    }   
};

module.exports = {editPet}