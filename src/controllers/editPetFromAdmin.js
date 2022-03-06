const {Pets} = require('../db')

exports.editPetFromAdmin = async(req, res) => {
    let {id, name, sterilization, weight, image, speciesId, ageId, petStatus, genreId, hideFromDash, shelterId} = req.body;
    try {   
        await Pets.update({
            name: name,
            sterilization: sterilization,
            weight: weight,
            image: image,
            speciesId: speciesId,
            ageId: ageId,
            petStatusId: petStatus,
            genreId: genreId,
            hideFromDash: hideFromDash,
            shelterId: shelterId
        },
            {where: 
            {id: id}
        });
        res.status(200).json("Pet edited successfully");
        
    } catch (error) {
        console.log(error);
        res.json(error);
    }   
};