const { PetStatus } = require('../db')

 async function getPetStatus (req, res) {
    try {   
        const gotPetStatus = await PetStatus.findAll();

        console.log(gotPetStatus)
        res.status(200).json(gotPetStatus);
        
    } catch (error) {
        console.log(error);
        res.json("Didn't found information");
    }   
};

module.exports = {getPetStatus}
