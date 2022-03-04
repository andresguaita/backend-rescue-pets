const {Pets} = require('../db')

 async function updatePetStatus (req, res) {
    let {petId} = req.params;
    let {petStatusId} = req.body;

    try {   
        await Pets.update({
            petStatusId: petStatusId,
        },
            {where: 
            {id: petId}
        });
        res.status(200).json("Pet status changed successfully");
        
    } catch (error) {
        console.log(error);
        res.json(error);
    }   
};

module.exports = {updatePetStatus}