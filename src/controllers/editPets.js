const {Pets} = require('../db')

 async function editPet (req, res) {
    let {petId} = req.params;
    let {name, sterilization, weight, description, image, speciesId, temperament, age, petStatus, genreId} = req.body;
    // console.log("body--------------------------------->",req.body)
    console.log("petSatus--------------------------------->",petStatus)
    console.log("age--------------------------------->",age)


    try {   
        await Pets.update({
            name: name,
            sterilization: sterilization,
            weight: weight,
            description: description,
            // image: image,
            speciesId: speciesId,
            temperamentId: temperament,
            ageId: age,
            petStatusId: petStatus,
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